// jQuery Sandbox Page Script for ServiceDesk Plus (Enhanced Version)
// Keybind: F12 to open jQuery testing sandbox window
// Copy and paste this entire script into ServiceDesk Plus Page Scripts
// Enhanced with professional architecture patterns from ARC HTML Inspector

$(document).ready(function() {
    // Initialize the jQuery Sandbox
    initializeJQuerySandbox();
});

function initializeJQuerySandbox() {
    // Prevent script from running in an iframe or if it's already running
    if (window.self !== window.top || document.getElementById('jquerySandboxPanel')) {
        return;
    }
    
    console.log("jQuery Sandbox initialized. Looking for toolbar to add button...");
    
    // Inject enhanced styles for better UI
    injectSandboxStyles();
    
    // Add sandbox button to the ServiceDesk Plus interface
    addSandboxButton();
}

function createOrToggleSandbox() {
    var panel = document.getElementById('jquerySandboxPanel');
    if (panel) {
        var isHidden = panel.style.display === 'none';
        panel.style.display = isHidden ? 'flex' : 'none';
    } else {
        createInlineSandbox();
    }
}

function createInlineSandbox() {
    var panel = document.createElement('div');
    panel.id = 'jquerySandboxPanel';
    
    var header = document.createElement('div');
    header.id = 'sandboxHeader';
    
    var title = document.createElement('span');
    title.innerText = 'ServiceDesk Plus jQuery Sandbox';
    
    var controls = document.createElement('div');
    
    var minimizeBtn = document.createElement('button');
    minimizeBtn.innerHTML = '−';
    minimizeBtn.title = 'Minimize';
    minimizeBtn.onclick = function() {
        var content = document.getElementById('sandboxContent');
        var isMinimized = content.style.display === 'none';
        content.style.display = isMinimized ? 'flex' : 'none';
        minimizeBtn.innerHTML = isMinimized ? '−' : '+';
        panel.style.height = isMinimized ? 'auto' : '60px';
    };
    
    var closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.title = 'Close';
    closeBtn.onclick = function() {
        panel.style.display = 'none';
    };
    
    controls.appendChild(minimizeBtn);
    controls.appendChild(closeBtn);
    header.appendChild(title);
    header.appendChild(controls);
    
    var content = document.createElement('div');
    content.id = 'sandboxContent';
    content.innerHTML = createEnhancedSandboxContent();
    
    panel.appendChild(header);
    panel.appendChild(content);
    document.body.appendChild(panel);
    
    panel.style.display = 'flex';
    setupDraggablePanel(panel, header);
    initializeEnhancedFunctionality();
}

function openJQuerySandbox() {
    // Fallback to popup for compatibility
    createOrToggleSandbox();
}

function createSandboxHTML() {
    return '<!DOCTYPE html>' +
'<html>' +
'<head>' +
'<title>ServiceDesk Plus jQuery Sandbox</title>' +
'<style>' +
'body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }' +
'.header { background: #2196F3; color: white; padding: 15px; margin: -20px -20px 20px -20px; }' +
'.container { display: flex; gap: 20px; height: calc(100vh - 100px); }' +
'.left-panel { flex: 1; background: white; padding: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }' +
'.right-panel { flex: 1; display: flex; flex-direction: column; gap: 10px; }' +
'.test-area { background: white; padding: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); height: 45%; overflow-y: auto; }' +
'.results-area { background: white; padding: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); height: 45%; overflow-y: auto; }' +
'.test-group { margin-bottom: 20px; border: 1px solid #ddd; border-radius: 5px; }' +
'.test-group h3 { background: #f8f9fa; margin: 0; padding: 10px; border-bottom: 1px solid #ddd; }' +
'.test-group .content { padding: 15px; }' +
'button { background: #4CAF50; color: white; border: none; padding: 8px 15px; border-radius: 3px; cursor: pointer; margin: 2px; }' +
'button:hover { background: #45a049; }' +
'button.danger { background: #f44336; }' +
'button.danger:hover { background: #da190b; }' +
'textarea { width: 100%; height: 100px; margin: 5px 0; font-family: monospace; }' +
'input[type="text"] { width: 200px; padding: 5px; margin: 2px; }' +
'.result { margin: 5px 0; padding: 5px; background: #e8f5e8; border-left: 3px solid #4CAF50; }' +
'.result.error { background: #ffe8e8; border-left-color: #f44336; }' +
'.result.info { background: #e8f4ff; border-left-color: #2196F3; }' +
'#sandboxArea { min-height: 200px; border: 2px dashed #ddd; padding: 20px; margin: 10px 0; background: #fafafa; }' +
'.method-test { display: inline-block; margin: 2px; }' +
'.status-indicator { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px; }' +
'.status-pass { background: #4CAF50; }' +
'.status-fail { background: #f44336; }' +
'.status-unknown { background: #ff9800; }' +
'</style>' +
'</head>' +
'<body>' +
'<div class="header">' +
'<h1>ServiceDesk Plus jQuery Sandbox</h1>' +
'<p>Test jQuery compatibility and functionality. jQuery Version: <span id="jqueryVersion">Loading...</span></p>' +
'</div>' +
'<div class="container">' +
'<div class="left-panel">' +
'<div class="test-group">' +
'<h3>jQuery Method Availability Tests</h3>' +
'<div class="content">' +
'<button onclick="testAllMethods()">Test All Methods</button>' +
'<button onclick="clearResults()">Clear Results</button>' +
'<div id="methodResults"></div>' +
'</div>' +
'</div>' +
'<div class="test-group">' +
'<h3>Custom jQuery Code Tester</h3>' +
'<div class="content">' +
'<textarea id="customCode" placeholder="Enter jQuery code here...">$(\'body\').css(\'background-color\', \'lightblue\');</textarea>' +
'<br>' +
'<button onclick="executeCustomCode()">Execute Code</button>' +
'<button onclick="clearCustomCode()">Clear</button>' +
'</div>' +
'</div>' +
'<div class="test-group">' +
'<h3>DOM Manipulation Sandbox</h3>' +
'<div class="content">' +
'<div id="sandboxArea">' +
'<h4>Sandbox Area</h4>' +
'<p>This area can be manipulated with jQuery for testing.</p>' +
'<button id="testButton">Test Button</button>' +
'<input type="text" id="testInput" placeholder="Test input" value="Sample text">' +
'<div class="test-div">Test Div</div>' +
'<ul id="testList">' +
'<li>Item 1</li>' +
'<li>Item 2</li>' +
'<li>Item 3</li>' +
'</ul>' +
'</div>' +
'<button onclick="resetSandbox()">Reset Sandbox</button>' +
'</div>' +
'</div>' +
'</div>' +
'<div class="right-panel">' +
'<div class="test-area">' +
'<h3>Quick Tests</h3>' +
'<div class="test-group">' +
'<h4>Selector Tests</h4>' +
'<button onclick="testSelectors()">Test Selectors</button>' +
'<button onclick="testFilters()">Test Filters</button>' +
'<button onclick="testTraversal()">Test Traversal</button>' +
'</div>' +
'<div class="test-group">' +
'<h4>Animation Tests</h4>' +
'<button onclick="testAnimations()">Test Animations</button>' +
'<button onclick="testEffects()">Test Effects</button>' +
'</div>' +
'<div class="test-group">' +
'<h4>Event Tests</h4>' +
'<button onclick="testEvents()">Test Events</button>' +
'<button onclick="testEventDelegation()">Test Delegation</button>' +
'</div>' +
'<div class="test-group">' +
'<h4>AJAX Tests</h4>' +
'<button onclick="testAjaxMethods()">Test AJAX</button>' +
'</div>' +
'</div>' +
'<div class="results-area">' +
'<h3>Test Results <button onclick="clearResults()" style="float:right;font-size:12px;">Clear</button></h3>' +
'<div id="testResults"></div>' +
'</div>' +
'</div>' +
'</div>' +
'<script>' +
'if (window.opener && window.opener.$) {' +
'window.$ = window.opener.$;' +
'window.jQuery = window.opener.jQuery;' +
'}' +
'</script>' +
'</body>' +
'</html>';
}

function initializeSandboxFunctionality() {
    var sandboxWindow = window.jQuerySandboxWindow;
    var sandboxDoc = sandboxWindow.document;
    
    // Copy jQuery to sandbox window
    if (typeof $ !== 'undefined') {
        sandboxWindow.$ = $;
        sandboxWindow.jQuery = $;
    }
    
    // Initialize jQuery version display
    if (sandboxWindow.$ && sandboxWindow.$.fn && sandboxWindow.$.fn.jquery) {
        sandboxDoc.getElementById('jqueryVersion').textContent = sandboxWindow.$.fn.jquery;
    } else {
        sandboxDoc.getElementById('jqueryVersion').textContent = 'Not Available';
    }
    
    // Define all the testing functions in the sandbox window
    sandboxWindow.testAllMethods = function() {
        var methods = [
            // Core jQuery methods
            'each', 'map', 'get', 'index', 'length', 'size', 'toArray',
            // Selectors and filtering
            'find', 'filter', 'not', 'has', 'is', 'eq', 'first', 'last', 'slice',
            // Traversal methods
            'parent', 'parents', 'parentsUntil', 'children', 'contents', 'closest', 'next', 'nextAll', 'nextUntil', 'prev', 'prevAll', 'prevUntil', 'siblings',
            // Manipulation methods
            'append', 'prepend', 'after', 'before', 'insertAfter', 'insertBefore', 'appendTo', 'prependTo', 'replaceWith', 'replaceAll', 'remove', 'detach', 'empty', 'clone', 'wrap', 'wrapAll', 'wrapInner', 'unwrap',
            // Attributes and properties
            'attr', 'removeAttr', 'prop', 'removeProp', 'addClass', 'removeClass', 'toggleClass', 'hasClass', 'val', 'html', 'text',
            // CSS methods
            'css', 'offset', 'position', 'scrollTop', 'scrollLeft', 'height', 'width', 'innerHeight', 'innerWidth', 'outerHeight', 'outerWidth',
            // Effects and animations
            'show', 'hide', 'toggle', 'fadeIn', 'fadeOut', 'fadeToggle', 'fadeTo', 'slideDown', 'slideUp', 'slideToggle', 'animate', 'stop', 'delay',
            // Event methods
            'on', 'off', 'one', 'trigger', 'triggerHandler', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'focus', 'blur', 'focusin', 'focusout', 'load', 'resize', 'scroll', 'unload', 'ready',
            // Deferred methods
            'promise', 'done', 'fail', 'always', 'then', 'when'
        ];
        
        var staticMethods = [
            // Static jQuery methods
            'ajax', 'get', 'post', 'load', 'getJSON', 'getScript',
            'extend', 'merge', 'grep', 'map', 'inArray', 'makeArray', 'unique', 'parseJSON', 'parseXML', 'parseHTML',
            'each', 'trim', 'type', 'isArray', 'isFunction', 'isEmptyObject', 'isPlainObject', 'isWindow', 'isNumeric',
            'proxy', 'now', 'holdReady', 'when', 'Deferred'
        ];
        
        var resultsDiv = sandboxDoc.getElementById('methodResults');
        var results = '<h4>jQuery Instance Methods:</h4>';
        
        var passCount = 0;
        var failCount = 0;
        
        // Test instance methods
        for (var i = 0; i < methods.length; i++) {
            var method = methods[i];
            var status = 'unknown';
            var statusClass = 'status-unknown';
            
            try {
                if (sandboxWindow.$ && typeof sandboxWindow.$.fn[method] === 'function') {
                    status = 'available';
                    statusClass = 'status-pass';
                    passCount++;
                } else {
                    status = 'missing';
                    statusClass = 'status-fail';
                    failCount++;
                }
            } catch (error) {
                status = 'error';
                statusClass = 'status-fail';
                failCount++;
            }
            
            results += '<span class="method-test"><span class="status-indicator ' + statusClass + '"></span>' + method + '</span> ';
        }
        
        results += '<h4>jQuery Static Methods:</h4>';
        
        // Test static methods
        for (var i = 0; i < staticMethods.length; i++) {
            var method = staticMethods[i];
            var status = 'unknown';
            var statusClass = 'status-unknown';
            
            try {
                if (sandboxWindow.$ && typeof sandboxWindow.$[method] === 'function') {
                    status = 'available';
                    statusClass = 'status-pass';
                    passCount++;
                } else {
                    status = 'missing';
                    statusClass = 'status-fail';
                    failCount++;
                }
            } catch (error) {
                status = 'error';
                statusClass = 'status-fail';
                failCount++;
            }
            
            results += '<span class="method-test"><span class="status-indicator ' + statusClass + '"></span>' + method + '</span> ';
        }
        
        results += '<div style="margin-top: 15px; font-weight: bold;">';
        results += 'Summary: ' + passCount + ' available, ' + failCount + ' missing/error';
        results += '</div>';
        
        resultsDiv.innerHTML = results;
        
        sandboxWindow.logResult('Method availability test completed: ' + passCount + '/' + (passCount + failCount) + ' methods available', 'info');
    };
    
    sandboxWindow.testSelectors = function() {
        var tests = [
            {name: 'Element selector', code: '$("button").length'},
            {name: 'ID selector', code: '$("#testButton").length'},
            {name: 'Class selector', code: '$(".test-div").length'},
            {name: 'Attribute selector', code: '$("[type=text]").length'},
            {name: 'Pseudo selector', code: '$("li:first").length'},
            {name: 'Multiple selector', code: '$("button, input").length'},
            {name: 'Descendant selector', code: '$("ul li").length'},
            {name: 'Child selector', code: '$("ul > li").length'}
        ];
        
        sandboxWindow.runTestSuite('Selector Tests', tests);
    };
    
    sandboxWindow.testFilters = function() {
        var tests = [
            {name: 'eq() filter', code: '$("li").eq(0).length'},
            {name: 'first() filter', code: '$("li").first().length'},
            {name: 'last() filter', code: '$("li").last().length'},
            {name: 'filter() with selector', code: '$("li").filter(":first").length'},
            {name: 'not() filter', code: '$("li").not(":first").length'},
            {name: 'has() filter', code: '$("ul").has("li").length'},
            {name: 'is() check', code: '$("#testButton").is("button")'}
        ];
        
        sandboxWindow.runTestSuite('Filter Tests', tests);
    };
    
    sandboxWindow.testTraversal = function() {
        var tests = [
            {name: 'parent()', code: '$("li").parent().length'},
            {name: 'children()', code: '$("ul").children().length'},
            {name: 'siblings()', code: '$("li").first().siblings().length'},
            {name: 'next()', code: '$("li").first().next().length'},
            {name: 'prev()', code: '$("li").last().prev().length'},
            {name: 'find()', code: '$("ul").find("li").length'},
            {name: 'closest()', code: '$("li").closest("ul").length'}
        ];
        
        sandboxWindow.runTestSuite('Traversal Tests', tests);
    };
    
    sandboxWindow.testAnimations = function() {
        var $ = sandboxWindow.$;
        var testDiv = $('#sandboxArea .test-div');
        
        sandboxWindow.logResult('Testing animations on test div...', 'info');
        
        try {
            testDiv.fadeOut(500).fadeIn(500);
            sandboxWindow.logResult('fadeOut/fadeIn: SUCCESS', 'success');
        } catch (error) {
            sandboxWindow.logResult('fadeOut/fadeIn: ERROR - ' + error.message, 'error');
        }
        
        try {
            testDiv.slideUp(500).slideDown(500);
            sandboxWindow.logResult('slideUp/slideDown: SUCCESS', 'success');
        } catch (error) {
            sandboxWindow.logResult('slideUp/slideDown: ERROR - ' + error.message, 'error');
        }
        
        try {
            testDiv.animate({opacity: 0.5}, 300).animate({opacity: 1}, 300);
            sandboxWindow.logResult('animate opacity: SUCCESS', 'success');
        } catch (error) {
            sandboxWindow.logResult('animate opacity: ERROR - ' + error.message, 'error');
        }
    };
    
    sandboxWindow.testEffects = function() {
        var tests = [
            {name: 'show()', code: '$("#testButton").show(); "SUCCESS"'},
            {name: 'hide()', code: '$("#testButton").hide().show(); "SUCCESS"'},
            {name: 'toggle()', code: '$("#testButton").toggle().toggle(); "SUCCESS"'},
            {name: 'fadeTo()', code: '$("#testButton").fadeTo(100, 0.8); "SUCCESS"'}
        ];
        
        sandboxWindow.runTestSuite('Effects Tests', tests);
    };
    
    sandboxWindow.testEvents = function() {
        var $ = sandboxWindow.$;
        var results = [];
        
        try {
            var testButton = $('#testButton');
            
            // Test click event
            var clickWorked = false;
            testButton.off('click.test').on('click.test', function() {
                clickWorked = true;
            });
            testButton.trigger('click');
            results.push('click event: ' + (clickWorked ? 'SUCCESS' : 'FAILED'));
            
            // Test hover event
            var hoverWorked = false;
            testButton.off('mouseenter.test').on('mouseenter.test', function() {
                hoverWorked = true;
            });
            testButton.trigger('mouseenter');
            results.push('mouseenter event: ' + (hoverWorked ? 'SUCCESS' : 'FAILED'));
            
            // Test custom event
            var customWorked = false;
            testButton.off('customEvent.test').on('customEvent.test', function() {
                customWorked = true;
            });
            testButton.trigger('customEvent');
            results.push('custom event: ' + (customWorked ? 'SUCCESS' : 'FAILED'));
            
            // Clean up
            testButton.off('.test');
            
        } catch (error) {
            results.push('Event testing error: ' + error.message);
        }
        
        for (var i = 0; i < results.length; i++) {
            var type = results[i].indexOf('SUCCESS') > -1 ? 'success' : 'error';
            sandboxWindow.logResult(results[i], type);
        }
    };
    
    sandboxWindow.testEventDelegation = function() {
        var $ = sandboxWindow.$;
        
        try {
            var delegationWorked = false;
            
            // Add a new button dynamically
            $('#sandboxArea').append('<button class="dynamic-test-btn">Dynamic Button</button>');
            
            // Set up event delegation
            $(document).off('click.delegation').on('click.delegation', '.dynamic-test-btn', function() {
                delegationWorked = true;
            });
            
            // Trigger the event
            $('.dynamic-test-btn').trigger('click');
            
            // Clean up
            $('.dynamic-test-btn').remove();
            $(document).off('.delegation');
            
            sandboxWindow.logResult('Event delegation: ' + (delegationWorked ? 'SUCCESS' : 'FAILED'), 
                delegationWorked ? 'success' : 'error');
            
        } catch (error) {
            sandboxWindow.logResult('Event delegation error: ' + error.message, 'error');
        }
    };
    
    sandboxWindow.testAjaxMethods = function() {
        var $ = sandboxWindow.$;
        var methods = ['ajax', 'get', 'post', 'getJSON', 'getScript', 'load'];
        
        for (var i = 0; i < methods.length; i++) {
            var method = methods[i];
            var available = typeof $[method] === 'function' || typeof $.fn[method] === 'function';
            sandboxWindow.logResult('AJAX method ' + method + ': ' + (available ? 'AVAILABLE' : 'NOT AVAILABLE'), 
                available ? 'success' : 'error');
        }
        
        sandboxWindow.logResult('Note: AJAX methods are available but actual requests may be blocked by CORS policy', 'info');
    };
    
    sandboxWindow.executeCustomCode = function() {
        var code = sandboxDoc.getElementById('customCode').value;
        if (!code.trim()) {
            sandboxWindow.logResult('No code entered', 'error');
            return;
        }
        
        try {
            var result = eval('(function(){ var $ = window.$; ' + code + ' })()');
            sandboxWindow.logResult('Custom code executed. Result: ' + (result !== undefined ? result : 'undefined'), 'success');
        } catch (error) {
            sandboxWindow.logResult('Custom code error: ' + error.message, 'error');
        }
    };
    
    sandboxWindow.clearCustomCode = function() {
        sandboxDoc.getElementById('customCode').value = '';
    };
    
    sandboxWindow.resetSandbox = function() {
        var sandboxArea = sandboxDoc.getElementById('sandboxArea');
        sandboxArea.innerHTML = 
            '<h4>Sandbox Area</h4>' +
            '<p>This area can be manipulated with jQuery for testing.</p>' +
            '<button id="testButton">Test Button</button>' +
            '<input type="text" id="testInput" placeholder="Test input" value="Sample text">' +
            '<div class="test-div">Test Div</div>' +
            '<ul id="testList">' +
            '<li>Item 1</li>' +
            '<li>Item 2</li>' +
            '<li>Item 3</li>' +
            '</ul>';
    };
    
    sandboxWindow.runTestSuite = function(suiteName, tests) {
        sandboxWindow.logResult('Running ' + suiteName + '...', 'info');
        
        for (var i = 0; i < tests.length; i++) {
            var test = tests[i];
            try {
                var result = eval('(function(){ var $ = window.$; return ' + test.code + '; })()');
                var success = result !== undefined && result !== null && result !== false && result !== 0;
                sandboxWindow.logResult(test.name + ': ' + (success ? 'SUCCESS (' + result + ')' : 'FAILED (' + result + ')'), 
                    success ? 'success' : 'error');
            } catch (error) {
                sandboxWindow.logResult(test.name + ': ERROR - ' + error.message, 'error');
            }
        }
    };
    
    sandboxWindow.logResult = function(message, type) {
        var resultsDiv = sandboxDoc.getElementById('testResults');
        var resultClass = type === 'error' ? 'error' : (type === 'info' ? 'info' : 'result');
        var timestamp = new Date().toLocaleTimeString();
        resultsDiv.innerHTML += '<div class="result ' + resultClass + '">[' + timestamp + '] ' + message + '</div>';
        resultsDiv.scrollTop = resultsDiv.scrollHeight;
    };
    
    sandboxWindow.clearResults = function() {
        sandboxDoc.getElementById('testResults').innerHTML = '';
        sandboxDoc.getElementById('methodResults').innerHTML = '';
    };
    
    // Log initial message
    sandboxWindow.logResult('jQuery Sandbox initialized. jQuery version: ' + 
        (sandboxWindow.$ && sandboxWindow.$.fn ? sandboxWindow.$.fn.jquery : 'Not Available'), 'info');
}

// ============================================================================
// ENHANCED ARCHITECTURE PATTERNS
// ============================================================================

function injectSandboxStyles() {
    if (document.getElementById('jquerySandboxStyles')) return;
    
    var styles = 
        '#jquerySandboxPanel {' +
        'position: fixed; top: 20px; right: 20px; width: 600px; max-width: 90vw; min-height: 400px;' +
        'background: rgba(30, 30, 30, 0.95); color: #d4d4d4;' +
        'font-family: "Segoe UI", Arial, sans-serif; font-size: 13px;' +
        'z-index: 2147483647; border: 1px solid #333;' +
        'border-radius: 8px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);' +
        'display: none; flex-direction: column; resize: both; overflow: hidden; max-height: 80vh;' +
        'backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);' +
        '} ' +
        '#sandboxHeader {' +
        'background: linear-gradient(135deg, #2196F3, #1976D2); color: white; font-weight: 600; padding: 12px 16px;' +
        'font-size: 14px; cursor: move; display: flex; justify-content: space-between; align-items: center;' +
        'border-bottom: 1px solid #333; user-select: none; border-radius: 8px 8px 0 0;' +
        '} ' +
        '#sandboxHeader button {' +
        'background: rgba(255, 255, 255, 0.1); border: none; color: white; font-size: 16px; font-weight: bold;' +
        'cursor: pointer; padding: 6px 10px; border-radius: 4px; transition: all 0.2s;' +
        'margin-left: 8px; outline: none; min-width: 32px;' +
        '}' +
        '#sandboxHeader button:hover { background: rgba(255, 255, 255, 0.2); transform: scale(1.05); }' +
        '#sandboxContent { flex: 1; display: flex; flex-direction: column; overflow: hidden; }' +
        '.sandbox-section { background: rgba(40, 40, 42, 0.9); margin: 8px; padding: 12px; border-radius: 6px; border: 1px solid #444; }' +
        '.sandbox-section h4 { margin: 0 0 10px 0; color: #9cdcfe; font-size: 14px; }' +
        '.sandbox-button { background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none;' +
        'padding: 8px 12px; border-radius: 4px; cursor: pointer; margin: 3px; font-size: 12px; transition: all 0.2s; }' +
        '.sandbox-button:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); }' +
        '.sandbox-button.danger { background: linear-gradient(135deg, #f44336, #d32f2f); }' +
        '.sandbox-results { max-height: 200px; overflow-y: auto; background: rgba(20, 20, 22, 0.9);' +
        'border: 1px solid #333; border-radius: 4px; padding: 8px; font-family: monospace; font-size: 11px; }' +
        '.result-item { margin: 2px 0; padding: 4px 6px; border-radius: 3px; }' +
        '.result-success { background: rgba(76, 175, 80, 0.1); border-left: 3px solid #4CAF50; color: #a5d6a7; }' +
        '.result-error { background: rgba(244, 67, 54, 0.1); border-left: 3px solid #f44336; color: #ef9a9a; }' +
        '.result-info { background: rgba(33, 150, 243, 0.1); border-left: 3px solid #2196F3; color: #90caf9; }';
    
    var styleTag = document.createElement('style');
    styleTag.id = 'jquerySandboxStyles';
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(styles));
    (document.head || document.documentElement).appendChild(styleTag);
}

function createEnhancedSandboxContent() {
    return (
        '<div class="sandbox-section">' +
        '<h4>jQuery Method Testing</h4>' +
        '<button class="sandbox-button" onclick="testjQueryMethods()">Test All Methods</button>' +
        '<button class="sandbox-button" onclick="testSelectors()">Test Selectors</button>' +
        '<button class="sandbox-button" onclick="testEvents()">Test Events</button>' +
        '<button class="sandbox-button danger" onclick="clearResults()">Clear Results</button>' +
        '</div>' +
        '<div class="sandbox-section">' +
        '<h4>Live jQuery Console</h4>' +
        '<input type="text" id="jqueryConsole" placeholder="Enter jQuery code: $(\"body\").css(\"background\", \"lightblue\")" ' +
        'style="width: 100%; padding: 8px; background: rgba(60, 60, 62, 0.9); border: 1px solid #555; color: #fff; border-radius: 4px; font-family: monospace;">' +
        '<div style="margin-top: 8px;">' +
        '<button class="sandbox-button" onclick="executeConsoleCommand()">Execute</button>' +
        '<button class="sandbox-button" onclick="clearConsole()">Clear</button>' +
        '</div>' +
        '</div>' +
        '<div class="sandbox-section" style="flex: 1;">' +
        '<h4>Results <span id="jqueryVersion" style="font-size: 11px; color: #888;"></span></h4>' +
        '<div id="sandboxResults" class="sandbox-results"></div>' +
        '</div>'
    );
}

function setupDraggablePanel(panel, header) {
    var isDragging = false;
    var dragOffsetX = 0;
    var dragOffsetY = 0;
    
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
            panel.style.left = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth, newX)) + 'px';
            panel.style.top = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, newY)) + 'px';
            panel.style.right = 'auto';
        };
        
        document.onmouseup = function() {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

function initializeEnhancedFunctionality() {
    // Display jQuery version
    var versionSpan = document.getElementById('jqueryVersion');
    if (typeof $ !== 'undefined' && $.fn && $.fn.jquery) {
        versionSpan.textContent = '(v' + $.fn.jquery + ')';
    } else {
        versionSpan.textContent = '(Not Available)';
    }
    
    // Bind Enter key to console
    var consoleInput = document.getElementById('jqueryConsole');
    if (consoleInput) {
        consoleInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                executeConsoleCommand();
            }
        });
    }
    
    logResult('Enhanced jQuery Sandbox initialized', 'info');
}

// Enhanced testing functions
window.testjQueryMethods = function() {
    var methods = [
        'each', 'map', 'filter', 'find', 'closest', 'parent', 'children', 'siblings',
        'append', 'prepend', 'html', 'text', 'val', 'attr', 'css', 'addClass', 'removeClass',
        'show', 'hide', 'fadeIn', 'fadeOut', 'slideDown', 'slideUp', 'animate',
        'on', 'off', 'click', 'hover', 'trigger'
    ];
    
    var available = 0;
    var total = methods.length;
    
    methods.forEach(function(method) {
        if (typeof $ !== 'undefined' && $.fn && typeof $.fn[method] === 'function') {
            available++;
            logResult(method + '(): Available', 'success');
        } else {
            logResult(method + '(): Missing', 'error');
        }
    });
    
    logResult('Summary: ' + available + '/' + total + ' methods available', 'info');
};

window.testSelectors = function() {
    var tests = [
        { name: 'Element selector', code: '$("div").length' },
        { name: 'ID selector', code: '$("#jquerySandboxPanel").length' },
        { name: 'Class selector', code: '$(".sandbox-button").length' },
        { name: 'Attribute selector', code: '$("[type]").length' },
        { name: 'Pseudo selector', code: '$(":first").length' }
    ];
    
    tests.forEach(function(test) {
        try {
            var result = eval(test.code);
            logResult(test.name + ': ' + result, result > 0 ? 'success' : 'info');
        } catch (error) {
            logResult(test.name + ': Error - ' + error.message, 'error');
        }
    });
};

window.testEvents = function() {
    if (typeof $ === 'undefined') {
        logResult('jQuery not available for event testing', 'error');
        return;
    }
    
    try {
        var testDiv = $('<div id="eventTest">Test Element</div>').appendTo('body');
        var eventFired = false;
        
        testDiv.on('click.test', function() {
            eventFired = true;
        });
        
        testDiv.trigger('click');
        logResult('Event binding and triggering: ' + (eventFired ? 'Success' : 'Failed'), eventFired ? 'success' : 'error');
        
        testDiv.off('.test').remove();
    } catch (error) {
        logResult('Event testing error: ' + error.message, 'error');
    }
};

window.executeConsoleCommand = function() {
    var input = document.getElementById('jqueryConsole');
    var code = input.value.trim();
    
    if (!code) {
        logResult('No code entered', 'error');
        return;
    }
    
    try {
        var result = eval('(function(){ ' + code + ' })()'); 
        logResult('Executed: ' + code, 'info');
        if (result !== undefined) {
            logResult('Result: ' + result, 'success');
        }
        input.value = '';
    } catch (error) {
        logResult('Error: ' + error.message, 'error');
    }
};

window.clearConsole = function() {
    document.getElementById('jqueryConsole').value = '';
};

window.clearResults = function() {
    document.getElementById('sandboxResults').innerHTML = '';
};

function logResult(message, type) {
    var resultsDiv = document.getElementById('sandboxResults');
    if (!resultsDiv) return;
    
    var timestamp = new Date().toLocaleTimeString();
    var resultClass = 'result-' + (type || 'info');
    
    var resultItem = document.createElement('div');
    resultItem.className = 'result-item ' + resultClass;
    resultItem.innerHTML = '[' + timestamp + '] ' + message;
    
    resultsDiv.appendChild(resultItem);
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
}

// Utility function to run from ServiceDesk Plus console
function openSandbox() {
    createOrToggleSandbox();
}

// Add button to ServiceDesk Plus interface
function addSandboxButton() {
    // Wait for page to be ready and try multiple placement strategies
    setTimeout(function() {
        var buttonAdded = false;
        
        // Strategy 0: Use $CS library if available for better integration
        if (typeof $CS !== 'undefined' && $CS.addButton) {
            try {
                $CS.addButton('page_header', 'jQuery Sandbox', function() {
                    createOrToggleSandbox();
                }, {
                    'class': 'btn btn-sm btn-info',
                    'style': 'margin: 2px; background: linear-gradient(135deg, #17a2b8, #138496);',
                    'title': 'Open jQuery Sandbox for testing and debugging'
                });
                buttonAdded = true;
                console.log('jQuery Sandbox button added using $CS.addButton');
            } catch (error) {
                console.log('$CS.addButton failed, trying alternative methods:', error);
            }
        }
        
        // Strategy 1: Look for actual SDP toolbar patterns from HTML structure
        if (!buttonAdded) {
            var toolbarSelectors = [
                '#subheader-show-menu',
                '#subheader-holder',
                '.show-menu',
                '#sticky-notes',
                '.btn-group.bs-noconflict.show-menu'
            ];
            
            for (var i = 0; i < toolbarSelectors.length && !buttonAdded; i++) {
                var toolbar = $(toolbarSelectors[i]);
                if (toolbar.length > 0) {
                    createSandboxButtonElement(toolbar);
                    buttonAdded = true;
                    console.log('jQuery Sandbox button added to:', toolbarSelectors[i]);
                    break;
                }
            }
        }
        
        // Strategy 2: Target specific location next to Scribble Pad and Zoho Creator
        if (!buttonAdded) {
            // Try to insert right before Scribble Pad container
            var stickyNotes = $('#sticky-notes');
            if (stickyNotes.length > 0) {
                insertButtonBeforeElement(stickyNotes);
                buttonAdded = true;
                console.log('jQuery Sandbox button inserted before Scribble Pad');
            }
        }
        
        // Strategy 3: Look for other specific SDP button locations
        if (!buttonAdded) {
            var buttonContainers = [
                $('#subheader-show-menu'),  // Main container
                $('a[aria-label*="Zoho Creator App"]').closest('.btn-group'),  // Zoho Creator button
                $('.btn-group.toggle-tab.bs-noconflict:last'),  // Last integration button
                $('#subheader-show-menu .btn-group:last')  // Last button group in show-menu
            ];
            
            for (var j = 0; j < buttonContainers.length && !buttonAdded; j++) {
                if (buttonContainers[j].length > 0) {
                    createSandboxButtonElement(buttonContainers[j]);
                    buttonAdded = true;
                    console.log('jQuery Sandbox button added near existing buttons');
                    break;
                }
            }
        }
        
        // Strategy 3: Create floating button if no suitable location found
        if (!buttonAdded) {
            createFloatingSandboxButton();
            console.log('jQuery Sandbox button added as floating element');
        }
        
    }, 1000);
    
    // Also try again after a longer delay for dynamic content
    setTimeout(function() {
        if (!document.getElementById('jquerySandboxBtn')) {
            addSandboxButton();
        }
    }, 3000);
}

function createSandboxButtonElement(container) {
    // Avoid duplicate buttons
    if (document.getElementById('jquerySandboxBtn')) {
        return;
    }
    
    // Create button with SDP-style formatting based on actual HTML structure
    var buttonHtml = '<div class="btn-group toggle-tab bs-noconflict" id="jquery-sandbox-container">' +
        '<div class="dd bs-noconflict">' +
        '<a id="jquerySandboxBtn" aria-label="Click here for jQuery Sandbox" class="btn btn-link btn-xs" href="#" ' +
        'style="color: #17a2b8; font-weight: 500; text-decoration: none; padding: 4px 8px;" ' +
        'title="Open jQuery Sandbox for testing and debugging">' +
        '<span class="sdp-glyph sdp-glyph-code" style="margin-right: 4px; color: #17a2b8;"></span>jQuery Sandbox' +
        '</a></div></div>';
    
    var button = $(buttonHtml);
    
    // Attach click handler to the anchor tag inside
    button.find('#jquerySandboxBtn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        createOrToggleSandbox();
    });
    
    // Add hover effects similar to other SDP buttons
    button.find('#jquerySandboxBtn').on('mouseenter', function() {
        $(this).css({
            'color': '#0c6674',
            'text-decoration': 'underline'
        });
    }).on('mouseleave', function() {
        $(this).css({
            'color': '#17a2b8',
            'text-decoration': 'none'
        });
    });
    
    container.append(button);
}

function insertButtonBeforeElement(targetElement) {
    // Avoid duplicate buttons
    if (document.getElementById('jquerySandboxBtn')) {
        return;
    }
    
    // Create button with exact SDP styling to fit seamlessly
    var buttonHtml = '<div class="btn-group toggle-tab bs-noconflict" id="jquery-sandbox-container">' +
        '<div class="dd bs-noconflict">' +
        '<a id="jquerySandboxBtn" aria-label="Click here for jQuery Sandbox" class="btn btn-link btn-xs" href="#" ' +
        'style="color: #17a2b8; font-weight: 500; text-decoration: none;" ' +
        'title="Open jQuery Sandbox for testing and debugging">' +
        'jQuery Sandbox' +
        '</a></div></div>';
    
    var button = $(buttonHtml);
    
    // Attach click handler
    button.find('#jquerySandboxBtn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        createOrToggleSandbox();
    });
    
    // Add hover effects
    button.find('#jquerySandboxBtn').on('mouseenter', function() {
        $(this).css({
            'color': '#0c6674',
            'text-decoration': 'underline'
        });
    }).on('mouseleave', function() {
        $(this).css({
            'color': '#17a2b8',
            'text-decoration': 'none'
        });
    });
    
    // Insert before the target element
    targetElement.before(button);
}

function createFloatingSandboxButton() {
    if (document.getElementById('jquerySandboxBtn')) {
        return;
    }
    
    var button = $('<button id="jquerySandboxBtn" type="button" style="position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 8px 12px; background: linear-gradient(135deg, #17a2b8, #138496); border: 1px solid #138496; color: white; border-radius: 6px; font-size: 12px; cursor: pointer; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); transition: all 0.2s;" title="Open jQuery Sandbox for testing and debugging">' +
        '<i class="fa fa-code" style="margin-right: 4px;"></i>jQuery' +
        '</button>');
    
    button.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        createOrToggleSandbox();
    });
    
    button.on('mouseenter', function() {
        $(this).css({
            'background': 'linear-gradient(135deg, #138496, #0c6674)',
            'transform': 'scale(1.05)',
            'box-shadow': '0 4px 12px rgba(0, 0, 0, 0.4)'
        });
    }).on('mouseleave', function() {
        $(this).css({
            'background': 'linear-gradient(135deg, #17a2b8, #138496)',
            'transform': 'scale(1)',
            'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.3)'
        });
    });
    
    $('body').append(button);
}

// Instructions
console.log("Enhanced jQuery Sandbox Page Script loaded!");
console.log("Looking for suitable location to add jQuery Sandbox button...");
console.log("Or run openSandbox() from the console.");