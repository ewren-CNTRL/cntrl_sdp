(function() {
    // Prevent script from running in an iframe or if it's already running
    if (window.self !== window.top || document.getElementById('arcConsolePanel')) {
        return;
    }
    // ============================================================================
    // PART 1: SCRIPT CONFIGURATION & STATE
    // ============================================================================
    var isInspecting = false,
        lastHighlightedElement = null,
        isLivePreviewing = false,
        hiddenElements = [],
        lastPreviewHighlightedElement = null,
        isDragging = false,
        dragOffsetX = 0,
        dragOffsetY = 0,
        throttleTimer = null,
        currentTheme = 'dark',
        availableThemes = ['dark', 'light', 'monokai', 'github', 'solarized'];
    function getThemeStyles() {
        var themes = {
            dark: {
                panelBg: 'linear-gradient(135deg, rgba(26, 27, 38, 0.96), rgba(44, 47, 63, 0.96))',
                headerBg: 'linear-gradient(135deg, rgba(40, 42, 58, 0.95), rgba(58, 62, 80, 0.95))',
                contentBg: 'linear-gradient(135deg, rgba(18, 20, 28, 0.96), rgba(30, 34, 46, 0.96))',
                borderColor: 'rgba(86, 91, 115, 0.8)',
                titleColor: '#a8d4ff',
                textColor: '#e8ecf0',
                buttonBg: 'rgba(66, 71, 88, 0.8)',
                buttonBorder: 'rgba(96, 103, 125, 0.6)',
                buttonText: '#c8d6e8',
                accentColor: '#66d9ef',
                accentGlow: 'rgba(102, 217, 239, 0.4)',
                previewAccent: '#f92672',
                previewGlow: 'rgba(249, 38, 114, 0.4)',
                shadowColor: 'rgba(0, 0, 0, 0.6)'
            },
            light: {
                panelBg: 'linear-gradient(135deg, rgba(248, 249, 250, 0.96), rgba(238, 240, 244, 0.96))',
                headerBg: 'linear-gradient(135deg, rgba(228, 230, 235, 0.95), rgba(218, 222, 228, 0.95))',
                contentBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(250, 251, 252, 0.96))',
                borderColor: 'rgba(180, 185, 195, 0.8)',
                titleColor: '#2563eb',
                textColor: '#1f2937',
                buttonBg: 'rgba(229, 231, 235, 0.8)',
                buttonBorder: 'rgba(209, 213, 219, 0.8)',
                buttonText: '#374151',
                accentColor: '#3b82f6',
                accentGlow: 'rgba(59, 130, 246, 0.3)',
                previewAccent: '#dc2626',
                previewGlow: 'rgba(220, 38, 38, 0.3)',
                shadowColor: 'rgba(0, 0, 0, 0.15)'
            },
            monokai: {
                panelBg: 'linear-gradient(135deg, rgba(39, 40, 34, 0.96), rgba(52, 53, 46, 0.96))',
                headerBg: 'linear-gradient(135deg, rgba(49, 51, 43, 0.95), rgba(62, 64, 55, 0.95))',
                contentBg: 'linear-gradient(135deg, rgba(32, 33, 27, 0.96), rgba(42, 43, 37, 0.96))',
                borderColor: 'rgba(117, 113, 94, 0.8)',
                titleColor: '#f8f8f2',
                textColor: '#f8f8f2',
                buttonBg: 'rgba(73, 72, 62, 0.8)',
                buttonBorder: 'rgba(102, 99, 83, 0.6)',
                buttonText: '#f8f8f2',
                accentColor: '#66d9ef',
                accentGlow: 'rgba(102, 217, 239, 0.4)',
                previewAccent: '#f92672',
                previewGlow: 'rgba(249, 38, 114, 0.4)',
                shadowColor: 'rgba(0, 0, 0, 0.7)'
            },
            github: {
                panelBg: 'linear-gradient(135deg, rgba(36, 41, 47, 0.96), rgba(45, 52, 59, 0.96))',
                headerBg: 'linear-gradient(135deg, rgba(48, 54, 61, 0.95), rgba(57, 64, 72, 0.95))',
                contentBg: 'linear-gradient(135deg, rgba(30, 35, 40, 0.96), rgba(39, 45, 51, 0.96))',
                borderColor: 'rgba(79, 88, 94, 0.8)',
                titleColor: '#79c0ff',
                textColor: '#e6edf3',
                buttonBg: 'rgba(64, 70, 78, 0.8)',
                buttonBorder: 'rgba(87, 96, 106, 0.6)',
                buttonText: '#e6edf3',
                accentColor: '#58a6ff',
                accentGlow: 'rgba(88, 166, 255, 0.4)',
                previewAccent: '#f85149',
                previewGlow: 'rgba(248, 81, 73, 0.4)',
                shadowColor: 'rgba(0, 0, 0, 0.6)'
            },
            solarized: {
                panelBg: 'linear-gradient(135deg, rgba(0, 43, 54, 0.96), rgba(7, 54, 66, 0.96))',
                headerBg: 'linear-gradient(135deg, rgba(88, 110, 117, 0.95), rgba(101, 123, 131, 0.95))',
                contentBg: 'linear-gradient(135deg, rgba(0, 36, 46, 0.96), rgba(7, 47, 58, 0.96))',
                borderColor: 'rgba(88, 110, 117, 0.8)',
                titleColor: '#2aa198',
                textColor: '#839496',
                buttonBg: 'rgba(88, 110, 117, 0.8)',
                buttonBorder: 'rgba(101, 123, 131, 0.6)',
                buttonText: '#839496',
                accentColor: '#268bd2',
                accentGlow: 'rgba(38, 139, 210, 0.4)',
                previewAccent: '#dc322f',
                previewGlow: 'rgba(220, 50, 47, 0.4)',
                shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
        };
        
        var theme = themes[currentTheme] || themes.dark;
        
        return (
        /* JetBrains Mono Font Import */
        "@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');" +
        
        /* Advanced Animations */
        "@keyframes arcSlideInRight {" +
            "0% { opacity: 0; transform: translateX(100px) scale(0.9); filter: blur(2px); }" +
            "100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }" +
        "}" +
        
        "@keyframes arcSlideOutRight {" +
            "0% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }" +
            "100% { opacity: 0; transform: translateX(100px) scale(0.9); filter: blur(2px); }" +
        "}" +
        
        "@keyframes arcGlowPulse {" +
            "0%, 100% { box-shadow: 0 0 8px " + theme.accentGlow + "; }" +
            "50% { box-shadow: 0 0 20px " + theme.accentGlow + ", 0 0 30px " + theme.accentGlow + "; }" +
        "}" +
        
        "@keyframes arcPreviewGlow {" +
            "0%, 100% { box-shadow: 0 0 8px " + theme.previewGlow + "; }" +
            "50% { box-shadow: 0 0 20px " + theme.previewGlow + ", 0 0 30px " + theme.previewGlow + "; }" +
        "}" +
        
        "@keyframes arcShimmer {" +
            "0% { background-position: -200% 0; }" +
            "100% { background-position: 200% 0; }" +
        "}" +
        
        "@keyframes arcBounceIn {" +
            "0% { opacity: 0; transform: scale(0.3) translateY(-50px); }" +
            "50% { opacity: 1; transform: scale(1.05) translateY(0); }" +
            "70% { transform: scale(0.95); }" +
            "100% { opacity: 1; transform: scale(1); }" +
        "}" +
        
        /* Main Panel Container */
        "#arcConsolePanel {" +
            "position: fixed;" +
            "top: 20px;" +
            "right: 20px;" +
            "width: 550px;" +
            "max-width: 95vw;" +
            "min-width: 420px;" +
            "min-height: 350px;" +
            "max-height: 88vh;" +
            "background: " + theme.panelBg + ";" +
            "color: " + theme.textColor + ";" +
            "font-family: 'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;" +
            "font-size: 13px;" +
            "line-height: 1.5;" +
            "z-index: 2147483647;" +
            "border: 1px solid " + theme.borderColor + ";" +
            "border-radius: 12px;" +
            "box-shadow: 0 12px 48px " + theme.shadowColor + ", 0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);" +
            "display: none;" +
            "flex-direction: column;" +
            "resize: both;" +
            "overflow: hidden;" +
            "backdrop-filter: blur(20px) saturate(180%);" +
            "-webkit-backdrop-filter: blur(20px) saturate(180%);" +
            "animation: arcSlideInRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" +
            "will-change: transform, opacity;" +
        "}" +
        
        "#arcConsolePanel.closing {" +
            "animation: arcSlideOutRight 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;" +
        "}" +
        
        /* Enhanced Header */
        "#arcConsoleHeader {" +
            "background: " + theme.headerBg + ";" +
            "color: " + theme.titleColor + ";" +
            "font-weight: 700;" +
            "padding: 14px 18px;" +
            "font-size: 15px;" +
            "cursor: move;" +
            "display: flex;" +
            "justify-content: space-between;" +
            "align-items: center;" +
            "border-bottom: 1px solid " + theme.borderColor + ";" +
            "border-radius: 12px 12px 0 0;" +
            "user-select: none;" +
            "-webkit-user-select: none;" +
            "-moz-user-select: none;" +
            "position: relative;" +
            "transition: all 0.3s ease;" +
        "}" +
        
        "#arcConsoleHeader:hover {" +
            "background: linear-gradient(45deg, " + theme.headerBg.replace('135deg', '45deg') + ");" +
        "}" +
        
        "#arcConsoleHeader::before {" +
            "content: '';" +
            "position: absolute;" +
            "top: 0;" +
            "left: -100%;" +
            "width: 100%;" +
            "height: 100%;" +
            "background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);" +
            "transition: left 0.8s ease;" +
        "}" +
        
        "#arcConsoleHeader:hover::before {" +
            "left: 100%;" +
        "}" +
        
        /* Title with Advanced Styling */
        "#arcConsoleTitle {" +
            "font-weight: 800;" +
            "text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);" +
            "position: relative;" +
            "z-index: 2;" +
            "letter-spacing: -0.5px;" +
        "}" +
        
        /* Button Container */
        "#arcConsoleHeader > div {" +
            "display: flex;" +
            "gap: 8px;" +
            "align-items: center;" +
            "z-index: 2;" +
        "}" +
        
        /* Advanced Button Styling */
        "#arcConsoleHeader button {" +
            "background: " + theme.buttonBg + ";" +
            "border: 1px solid " + theme.buttonBorder + ";" +
            "color: " + theme.buttonText + ";" +
            "font-size: 12px;" +
            "font-weight: 600;" +
            "cursor: pointer;" +
            "padding: 8px 14px;" +
            "border-radius: 8px;" +
            "transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);" +
            "outline: none;" +
            "font-family: inherit;" +
            "white-space: nowrap;" +
            "position: relative;" +
            "overflow: hidden;" +
            "text-transform: uppercase;" +
            "letter-spacing: 0.5px;" +
            "font-size: 11px;" +
        "}" +
        
        "#arcConsoleHeader button::before {" +
            "content: '';" +
            "position: absolute;" +
            "top: 0;" +
            "left: -100%;" +
            "width: 100%;" +
            "height: 100%;" +
            "background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);" +
            "transition: left 0.6s ease;" +
        "}" +
        
        "#arcConsoleHeader button:hover::before {" +
            "left: 100%;" +
        "}" +
        
        "#arcConsoleHeader button:hover {" +
            "transform: translateY(-2px) scale(1.02);" +
            "box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.1);" +
            "border-color: " + theme.accentColor + ";" +
        "}" +
        
        "#arcConsoleHeader button:active {" +
            "transform: translateY(0) scale(0.98);" +
            "transition: all 0.1s ease;" +
        "}" +
        
        /* Theme Selector Button */
        "#arcThemeBtn {" +
            "min-width: 35px !important;" +
            "padding: 8px 10px !important;" +
            "font-size: 14px !important;" +
        "}" +
        
        /* Enhanced Active States */
        "#arcInspectBtn.active, #arcLivePreviewBtn.active {" +
            "background: " + theme.accentColor + " !important;" +
            "color: #ffffff !important;" +
            "border-color: " + theme.accentColor + " !important;" +
            "animation: arcGlowPulse 2s ease-in-out infinite;" +
            "box-shadow: 0 0 20px " + theme.accentGlow + ";" +
        "}" +
        
        "#arcLivePreviewBtn.active {" +
            "background: " + theme.previewAccent + " !important;" +
            "border-color: " + theme.previewAccent + " !important;" +
            "animation: arcPreviewGlow 2s ease-in-out infinite;" +
            "box-shadow: 0 0 20px " + theme.previewGlow + ";" +
        "}" +
        
        /* Content Container */
        "#arcConsoleContent {" +
            "flex: 1;" +
            "overflow: hidden;" +
            "display: flex;" +
            "flex-direction: column;" +
            "position: relative;" +
        "}" +
        
        /* Enhanced Result Container */
        "#arcResultContainer {" +
            "background: " + theme.contentBg + ";" +
            "font-family: 'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;" +
            "font-size: 13px;" +
            "line-height: 1.6;" +
            "padding: 20px;" +
            "white-space: pre-wrap;" +
            "word-wrap: break-word;" +
            "overflow: auto;" +
            "tab-size: 2;" +
            "border: none;" +
            "border-radius: 0 0 12px 12px;" +
            "color: " + theme.textColor + ";" +
            "flex: 1;" +
            "min-height: 220px;" +
            "scrollbar-width: thin;" +
            "scrollbar-color: " + theme.accentColor + " transparent;" +
            "transition: all 0.3s ease;" +
            "position: relative;" +
        "}" +
        
        "#arcResultContainer:empty::before {" +
            "content: 'Click \"Inspect\" or \"Preview\" to begin analysis...';" +
            "opacity: 0.6;" +
            "font-style: italic;" +
            "display: block;" +
            "text-align: center;" +
            "margin-top: 60px;" +
        "}" +
        
        /* Enhanced Scrollbar */
        "#arcResultContainer::-webkit-scrollbar {" +
            "width: 10px;" +
            "height: 10px;" +
        "}" +
        
        "#arcResultContainer::-webkit-scrollbar-track {" +
            "background: rgba(0, 0, 0, 0.1);" +
            "border-radius: 6px;" +
        "}" +
        
        "#arcResultContainer::-webkit-scrollbar-thumb {" +
            "background: " + theme.accentColor + ";" +
            "border-radius: 6px;" +
            "transition: all 0.3s ease;" +
        "}" +
        
        "#arcResultContainer::-webkit-scrollbar-thumb:hover {" +
            "background: " + theme.accentColor.replace(')', ', 0.8)').replace('rgb', 'rgba') + ";" +
            "box-shadow: 0 0 8px " + theme.accentGlow + ";" +
        "}" +
        
        /* Advanced Syntax Highlighting */
        "#arcResultContainer .html-tag { color: " + theme.previewAccent + "; font-weight: 700; }" +
        "#arcResultContainer .html-attr { color: #a6e22e; font-weight: 600; }" +
        "#arcResultContainer .html-val { color: #e6db74; font-style: italic; }" +
        "#arcResultContainer .html-comment { color: #75715e; font-style: italic; opacity: 0.8; }" +
        "#arcResultContainer .js-comment { color: #888; font-style: italic; opacity: 0.8; }" +
        "#arcResultContainer .js-keyword { color: " + theme.accentColor + "; font-weight: 700; }" +
        "#arcResultContainer .js-string { color: #e6db74; }" +
        
        /* Enhanced Inspection Mode */
        ".arc-inspect-mode, .arc-inspect-mode * {" +
            "cursor: crosshair !important;" +
        "}" +
        
        ".arc-highlight-outline {" +
            "outline: 3px solid " + theme.accentColor + " !important;" +
            "outline-offset: 3px !important;" +
            "box-shadow: 0 0 20px " + theme.accentGlow + ", inset 0 0 20px " + theme.accentGlow + " !important;" +
            "animation: arcGlowPulse 1.5s ease-in-out infinite !important;" +
            "z-index: 2147483646 !important;" +
            "position: relative !important;" +
        "}" +
        
        /* Enhanced Preview Mode */
        ".arc-preview-mode, .arc-preview-mode * {" +
            "cursor: not-allowed !important;" +
        "}" +
        
        ".arc-preview-highlight-outline {" +
            "outline: 3px dashed " + theme.previewAccent + " !important;" +
            "outline-offset: 3px !important;" +
            "box-shadow: 0 0 20px " + theme.previewGlow + ", inset 0 0 20px " + theme.previewGlow + " !important;" +
            "animation: arcPreviewGlow 1.5s ease-in-out infinite !important;" +
            "z-index: 2147483646 !important;" +
            "position: relative !important;" +
        "}" +
        
        /* Loading Animation */
        ".arc-loading {" +
            "position: relative;" +
        "}" +
        
        ".arc-loading::after {" +
            "content: '';" +
            "position: absolute;" +
            "top: 0;" +
            "left: 0;" +
            "right: 0;" +
            "bottom: 0;" +
            "background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);" +
            "animation: arcShimmer 1.5s infinite;" +
            "pointer-events: none;" +
        "}" +
        
        /* Responsive Design Enhanced */
        "@media (max-width: 768px) {" +
            "#arcConsolePanel {" +
                "width: 96vw;" +
                "max-width: 96vw;" +
                "min-width: 340px;" +
                "top: 8px;" +
                "right: 2vw;" +
                "max-height: 92vh;" +
                "border-radius: 10px;" +
            "}" +
            "#arcConsoleHeader {" +
                "padding: 12px 14px;" +
                "font-size: 14px;" +
                "border-radius: 10px 10px 0 0;" +
            "}" +
            "#arcConsoleHeader button {" +
                "padding: 6px 10px;" +
                "font-size: 10px;" +
            "}" +
            "#arcResultContainer {" +
                "padding: 14px;" +
                "font-size: 12px;" +
                "border-radius: 0 0 10px 10px;" +
            "}" +
        "}" +
        
        "@media (max-width: 480px) {" +
            "#arcConsolePanel {" +
                "width: 98vw;" +
                "top: 4px;" +
                "right: 1vw;" +
                "min-width: 320px;" +
                "border-radius: 8px;" +
            "}" +
            "#arcConsoleHeader {" +
                "flex-direction: column;" +
                "gap: 10px;" +
                "align-items: stretch;" +
                "border-radius: 8px 8px 0 0;" +
            "}" +
            "#arcConsoleHeader > div {" +
                "justify-content: center;" +
                "gap: 6px;" +
            "}" +
            "#arcConsoleHeader button {" +
                "flex: 1;" +
                "max-width: 70px;" +
            "}" +
            "#arcResultContainer {" +
                "border-radius: 0 0 8px 8px;" +
            "}" +
        "}");
    }

    function injectStyles() {
        // Remove existing styles first
        var existingStyle = document.getElementById('arcInspectorStyles');
        if (existingStyle) {
            existingStyle.parentNode.removeChild(existingStyle);
        }
        
        var styleTag = document.createElement('style');
        styleTag.id = 'arcInspectorStyles';
        var styles = getThemeStyles();
        
        if (styleTag.styleSheet) {
            // IE legacy support
            styleTag.styleSheet.cssText = styles;
        } else {
            styleTag.appendChild(document.createTextNode(styles));
        }
        (document.head || document.documentElement).appendChild(styleTag);
    }
    
    function switchTheme(themeName) {
        if (availableThemes.indexOf(themeName) !== -1) {
            currentTheme = themeName;
            // Store theme preference
            try {
                localStorage.setItem('arcInspectorTheme', currentTheme);
            } catch (e) {
                // Storage not available, continue without persistence
            }
            injectStyles();
            updateThemeButton();
        }
    }
    
    function loadStoredTheme() {
        try {
            var storedTheme = localStorage.getItem('arcInspectorTheme');
            if (storedTheme && availableThemes.indexOf(storedTheme) !== -1) {
                currentTheme = storedTheme;
            }
        } catch (e) {
            // Storage not available, use default theme
        }
    }
    
    function updateThemeButton() {
        var themeBtn = document.getElementById('arcThemeBtn');
        if (themeBtn) {
            var themeIcons = {
                'dark': '🌙',
                'light': '☀️',
                'monokai': '🟫',
                'github': '🐱',
                'solarized': '🌊'
            };
            themeBtn.innerHTML = themeIcons[currentTheme] || '🎨';
            themeBtn.title = 'Theme: ' + currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
        }
    }
    
    function cycleTheme() {
        var currentIndex = availableThemes.indexOf(currentTheme);
        var nextIndex = (currentIndex + 1) % availableThemes.length;
        switchTheme(availableThemes[nextIndex]);
    }
    function registerKeyboardShortcut() {
        document.addEventListener('keydown', function(event) {
            // Use keyCode for better ES5 compatibility
            var keyPressed = event.keyCode || event.which;
            if (keyPressed === 123) { // F12 key
                event.preventDefault();
                createOrTogglePanel();
            }
        });
    }
    // ============================================================================
    // PART 2: CORE LOGIC
    // ============================================================================
    function toggleMode(modeToActivate) {
        var inspectBtn = document.getElementById('arcInspectBtn');
        var previewBtn = document.getElementById('arcLivePreviewBtn');
        
        if (isInspecting) {
            isInspecting = false;
            if (inspectBtn) {
                inspectBtn.classList.remove('active');
            }
            document.body.classList.remove('arc-inspect-mode');
            unhighlightElement();
            document.removeEventListener('mouseover', throttledHighlightElement);
            document.removeEventListener('mouseout', unhighlightElement);
            document.removeEventListener('click', captureElement, true);
        }
        if (isLivePreviewing) {
            isLivePreviewing = false;
            if (previewBtn) {
                previewBtn.classList.remove('active');
            }
            document.body.classList.remove('arc-preview-mode');
            unhighlightElementForPreview();
            document.removeEventListener('mouseover', highlightElementForPreview);
            document.removeEventListener('mouseout', unhighlightElementForPreview);
            document.removeEventListener('click', hideAndCopyElement, true);
            restoreHiddenElements();
        }
        if (modeToActivate === 'inspect') {
            isInspecting = true;
            if (inspectBtn) {
                inspectBtn.classList.add('active');
            }
            document.body.classList.add('arc-inspect-mode');
            document.addEventListener('mouseover', throttledHighlightElement);
            document.addEventListener('mouseout', unhighlightElement);
            document.addEventListener('click', captureElement, true);
        } else if (modeToActivate === 'preview') {
            isLivePreviewing = true;
            if (previewBtn) {
                previewBtn.classList.add('active');
            }
            document.body.classList.add('arc-preview-mode');
            document.addEventListener('mouseover', highlightElementForPreview);
            document.addEventListener('mouseout', unhighlightElementForPreview);
            document.addEventListener('click', hideAndCopyElement, true);
        }
    }
    function throttledHighlightElement(event) {
        if (!throttleTimer) {
            throttleTimer = setTimeout(function() {
                highlightElement(event);
                throttleTimer = null;
            }, 30);
        }
    }
    function highlightElement(event) {
        if (lastHighlightedElement) lastHighlightedElement.classList.remove('arc-highlight-outline');
        if (event.target.closest('#arcConsolePanel')) return;
        lastHighlightedElement = event.target;
        lastHighlightedElement.classList.add('arc-highlight-outline');
    }
    function unhighlightElement() {
        if (lastHighlightedElement) lastHighlightedElement.classList.remove('arc-highlight-outline');
        lastHighlightedElement = null;
    }
    function captureElement(event) {
        if (!isInspecting || event.target.closest('#arcConsolePanel')) return;
        event.preventDefault();
        event.stopPropagation();
        var resultContainer = document.getElementById('arcResultContainer');
        try {
            var html = event.target.outerHTML || '';
            resultContainer.innerHTML = formatAndHighlightHTML(html);
        } catch (e) {
            resultContainer.innerHTML = '<span style="color: #f92672;">Could not inspect element.</span>';
        }
        toggleMode(null);
    }
    function highlightElementForPreview(event) {
        if (lastPreviewHighlightedElement) lastPreviewHighlightedElement.classList.remove('arc-preview-highlight-outline');
        if (event.target.closest('#arcConsolePanel')) return;
        lastPreviewHighlightedElement = event.target;
        lastPreviewHighlightedElement.classList.add('arc-preview-highlight-outline');
    }
    function unhighlightElementForPreview() {
        if (lastPreviewHighlightedElement) lastPreviewHighlightedElement.classList.remove('arc-preview-highlight-outline');
        lastPreviewHighlightedElement = null;
    }
    function hideAndCopyElement(event) {
        if (!isLivePreviewing || event.target.closest('#arcConsolePanel')) return;
        event.preventDefault();
        event.stopPropagation();
        var targetElement = event.target;
        var resultContainer = document.getElementById('arcResultContainer');
        // CALLING THE NEW FUNCTION HERE
        var selector = buildStableSelector(targetElement);
        if (selector) {
            var codeSnippets = generateCodeSnippets(selector);
            var formattedCode = formatAndHighlightCode(codeSnippets);
            if (copyToClipboard(codeSnippets)) {
                resultContainer.innerHTML = '<span style="color: #a6e22e;">Copied code snippets to clipboard:</span>\n' + formattedCode;
            } else {
                resultContainer.innerHTML = '<span style="color: #f92672;">Copy failed. Code is:</span>\n' + formattedCode;
            }
        } else {
            resultContainer.innerHTML = '<span style="color: #f92672;">Could not generate a unique selector.</span>';
        }
        targetElement.style.setProperty('display', 'none', 'important');
        hiddenElements.push(targetElement);
        unhighlightElementForPreview();
    }
    function restoreHiddenElements() {
        for (var i = 0; i < hiddenElements.length; i++) {
            hiddenElements[i].style.display = '';
        }
        hiddenElements = [];
    }

    /************************************************************/
    /* A COMPLETELY NEW SELECTOR GENERATION METHOD (ES5 ONLY)   */
    /* This replaces the old generateCssSelectorFor function.   */
    /************************************************************/
    function buildStableSelector(element) {
        if (!element || !(element instanceof Element)) {
            return null;
        }
        var selectorParts = [];
        // Loop from the element up to the body
        while (element && element.nodeType === 1) {
            var part = element.nodeName.toLowerCase();
            // If an ID exists, use it and stop. This is the best selector.
            if (element.id) {
                part = '#' + element.id.replace(/([^\w\d\-_])/g, '\\$1');
                selectorParts.unshift(part);
                break; // We are done
            }
            // If no ID, calculate the :nth-child index
            var parent = element.parentNode;
            if (parent) {
                var children = parent.children;
                var childIndex = -1;
                // Find the index of the current element among its siblings
                for (var i = 0; i < children.length; i++) {
                    if (children[i] === element) {
                        childIndex = i + 1; // CSS nth-child is 1-based
                        break;
                    }
                }
                if (childIndex > -1) {
                    part += ':nth-child(' + childIndex + ')';
                }
            }
            selectorParts.unshift(part);
            // Stop when we reach the body tag
            if (element.nodeName.toLowerCase() === 'body') {
                break;
            }
            element = element.parentNode;
        }
        if (selectorParts.length > 0) {
            return selectorParts.join(' > ');
        }
        return null;
    }

    function formatAndHighlightHTML(html) {
        if (!html) return '<span style="color: #f92672;">No HTML available for this element.</span>';
        var escapedHtml = html.replace(/</g, '<').replace(/>/g, '>');
        return escapedHtml
            .replace(/(<!--[\s\S]*?-->)/g, '<span class="html-comment">$1</span>')
            .replace(/([\w\d\-_]+)=&quot;([\s\S]*?)&quot;/g, '<span class="html-attr">$1</span>=<span class="html-val">&quot;$2&quot;</span>')
            .replace(/(<\/?)([\w\d\-_]+)/g, '<span class="html-tag">$1$2</span>');
    }
    // ============================================================================
    // PART 3: UI & UTILITIES
    // ============================================================================
    function createOrTogglePanel() {
        var panel = document.getElementById('arcConsolePanel');
        if (panel) {
            var isHidden = panel.style.display === 'none';
            if (isHidden) {
                panel.style.display = 'flex';
                panel.classList.remove('closing');
                // Trigger reflow to ensure animation plays
                void panel.offsetHeight;
            } else {
                panel.classList.add('closing');
                setTimeout(function() {
                    panel.style.display = 'none';
                    panel.classList.remove('closing');
                    toggleMode(null);
                }, 300);
            }
        } else {
            createPanel();
        }
    }
    function createPanel() {
        var panel = document.createElement('div');
        panel.id = 'arcConsolePanel';
        
        var header = document.createElement('div');
        header.id = 'arcConsoleHeader';
        
        var title = document.createElement('span');
        title.id = 'arcConsoleTitle';
        title.innerText = 'ARC HTML Inspector';
        
        var controls = document.createElement('div');
        
        // Theme button
        var themeBtn = document.createElement('button');
        themeBtn.id = 'arcThemeBtn';
        themeBtn.innerHTML = '🌙';
        themeBtn.title = 'Switch Theme';
        themeBtn.onclick = cycleTheme;
        
        // Copy button with enhanced animation
        var copyBtn = document.createElement('button');
        copyBtn.innerHTML = '📋';
        copyBtn.title = 'Copy displayed code';
        copyBtn.onclick = function() {
            var result = document.getElementById('arcResultContainer');
            var textToCopy = result.innerText || result.textContent;
            if (copyToClipboard(textToCopy)) {
                copyBtn.innerHTML = '✅';
                copyBtn.classList.add('arc-loading');
                setTimeout(function() { 
                    copyBtn.innerHTML = '📋';
                    copyBtn.classList.remove('arc-loading');
                }, 1500);
            } else {
                copyBtn.innerHTML = '❌';
                setTimeout(function() { 
                    copyBtn.innerHTML = '📋';
                }, 1500);
            }
        };
        
        // Enhanced preview button
        var previewBtn = document.createElement('button');
        previewBtn.id = 'arcLivePreviewBtn';
        previewBtn.innerHTML = '👁️ Preview';
        previewBtn.title = 'Live preview mode - click elements to hide them';
        previewBtn.onclick = function() { 
            toggleMode(isLivePreviewing ? null : 'preview'); 
        };
        
        // Enhanced inspect button
        var inspectBtn = document.createElement('button');
        inspectBtn.id = 'arcInspectBtn';
        inspectBtn.innerHTML = '🔍 Inspect';
        inspectBtn.title = 'Element inspection mode - click to inspect HTML';
        inspectBtn.onclick = function() { 
            toggleMode(isInspecting ? null : 'inspect'); 
        };
        
        // Enhanced close button
        var closeBtn = document.createElement('button');
        closeBtn.innerHTML = '❌';
        closeBtn.title = 'Close inspector';
        closeBtn.onclick = function() {
            toggleMode(null);
            createOrTogglePanel(); // Use the animated close
        };
        
        controls.appendChild(themeBtn);
        controls.appendChild(copyBtn);
        controls.appendChild(previewBtn);
        controls.appendChild(inspectBtn);
        controls.appendChild(closeBtn);
        header.appendChild(title);
        header.appendChild(controls);
        var content = document.createElement('div');
        content.id = 'arcConsoleContent';
        var resultContainer = document.createElement('pre');
        resultContainer.id = 'arcResultContainer';
        resultContainer.innerHTML = 'Click "Inspect" or "Preview" to begin.';
        content.appendChild(resultContainer);
        panel.appendChild(header);
        panel.appendChild(content);
        document.body.appendChild(panel);
        panel.style.display = 'flex';
        
        // Initialize theme button after panel is added
        setTimeout(function() {
            updateThemeButton();
        }, 50);
        
        setupDraggablePanel(panel, header);
    }
    function generateCodeSnippets(selector) {
        var cssRule = selector + ' { display: none !important; }';
        var escapedSelector = selector.replace(/'/g, "\\'");
        var codeBlock =
            '// ARC Inspector: Code to hide element\n' +
            '// Generated on: ' + new Date().toLocaleString() + '\n' +
            '// Target URL: ' + window.location.href + '\n\n' +
            '// ====================================================================\n' +
            '// Option 1: CSS Rule (for user stylesheets like Stylus/uBlock)\n' +
            '// ====================================================================\n' +
            cssRule + '\n\n\n' +
            '// ====================================================================\n' +
            '// Option 2: JavaScript (for user scripts like Tampermonkey)\n' +
            '// ====================================================================\n' +
            '(function() {\n' +
            '    \'use strict\';\n' +
            '    var css = \'' + cssRule.replace(/'/g, "\\'") + '\';\n' +
            '    var style = document.createElement(\'style\');\n' +
            '    style.type = \'text/css\';\n' +
            '    style.appendChild(document.createTextNode(css));\n' +
            '    document.head.appendChild(style);\n' +
            '})();\n\n\n' +
            '// ====================================================================\n' +
            '// Option 3: Simple JS (for the browser console)\n' +
            '// ====================================================================\n' +
            'document.querySelector(\'' + escapedSelector + '\').style.display = \'none\';';
        return codeBlock;
    }
    function formatAndHighlightCode(code) {
        code = code.replace(/</g, '<').replace(/>/g, '>');
        code = code.replace(/(^\/\/.*$)/gm, '<span class="js-comment">$1</span>');
        code = code.replace(/\b(var|function|return|document|new|window|'use strict'|createElement|appendChild|createTextNode|querySelector|style|display|type|head)\b/g, '<span class="js-keyword">$1</span>');
        code = code.replace(/('.*?'|".*?")/g, '<span class="js-string">$1</span>');
        return code;
    }
    function setupDraggablePanel(panel, header) {
        header.onmousedown = function(e) {
            if (e.target.tagName === 'BUTTON') return;
            isDragging = true;
            var rect = panel.getBoundingClientRect();
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;
            document.onmousemove = function(dragEvent) {
                if (!isDragging) return;
                var newX = dragEvent.clientX - dragOffsetX;
                var newY = dragEvent.clientY - dragOffsetY;
                panel.style.left = newX + 'px';
                panel.style.top = newY + 'px';
                panel.style.right = 'auto';
            };
            document.onmouseup = function() {
                isDragging = false;
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    }
    function copyToClipboard(text) {
        // Modern clipboard API check (graceful degradation)
        if (window.navigator && window.navigator.clipboard && window.navigator.clipboard.writeText) {
            try {
                window.navigator.clipboard.writeText(text);
                return true;
            } catch (err) {
                // Fall back to legacy method
            }
        }
        
        // Legacy fallback method
        var textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '-9999px';
        textArea.style.left = '-9999px';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        var success = false;
        try {
            success = document.execCommand('copy');
        } catch (err) {
            console.warn('ARC Inspector: Copy to clipboard failed.', err);
            success = false;
        }
        document.body.removeChild(textArea);
        return success;
    }
    // ============================================================================
    // PART 4: INITIALIZATION
    // ============================================================================
    function initialize() {
        try {
            loadStoredTheme();
            injectStyles();
            registerKeyboardShortcut();
        } catch (error) {
            console.error("ARC Console initialization error:", error);
        }
    }
    initialize();
})();