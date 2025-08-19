// jQuery Sandbox Page Script for ServiceDesk Plus
// Keybind: Alt+1 to open jQuery testing sandbox window
// Copy and paste this entire script into ServiceDesk Plus Page Scripts

$(document).ready(function() {
    // Initialize the jQuery Sandbox
    initializeJQuerySandbox();
});

function initializeJQuerySandbox() {
    console.log("jQuery Sandbox initialized. Press Alt+1 to open testing window.");
    
    // Bind Alt+1 keyboard shortcut
    $(document).on('keydown', function(e) {
        if (e.altKey && e.keyCode === 49) { // Alt + 1
            e.preventDefault();
            openJQuerySandbox();
        }
    });
}

function openJQuerySandbox() {
    // Check if window already exists
    if (window.jQuerySandboxWindow && !window.jQuerySandboxWindow.closed) {
        window.jQuerySandboxWindow.focus();
        return;
    }
    
    // Create new popup window
    window.jQuerySandboxWindow = window.open('', 'jQuerySandbox', 
        'width=1200,height=800,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no');
    
    if (!window.jQuerySandboxWindow) {
        alert('Popup blocked! Please allow popups for this site and try Alt+1 again.');
        return;
    }
    
    // Write the sandbox HTML content
    var sandboxHTML = createSandboxHTML();
    window.jQuerySandboxWindow.document.open();
    window.jQuerySandboxWindow.document.write(sandboxHTML);
    window.jQuerySandboxWindow.document.close();
    
    // Initialize sandbox functionality
    setTimeout(function() {
        initializeSandboxFunctionality();
    }, 500);
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
'// Copy parent window\'s jQuery if available' +
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
            {name: 'Element selector', code: '$(\"button\").length'},
            {name: 'ID selector', code: '$(\"#testButton\").length'},
            {name: 'Class selector', code: '$(\".test-div\").length'},
            {name: 'Attribute selector', code: '$(\"[type=text]\").length'},
            {name: 'Pseudo selector', code: '$(\"li:first\").length'},
            {name: 'Multiple selector', code: '$(\"button, input\").length'},
            {name: 'Descendant selector', code: '$(\"ul li\").length'},
            {name: 'Child selector', code: '$(\"ul > li\").length'}
        ];
        
        sandboxWindow.runTestSuite('Selector Tests', tests);
    };
    
    sandboxWindow.testFilters = function() {
        var tests = [
            {name: 'eq() filter', code: '$(\"li\").eq(0).length'},
            {name: 'first() filter', code: '$(\"li\").first().length'},
            {name: 'last() filter', code: '$(\"li\").last().length'},
            {name: 'filter() with selector', code: '$(\"li\").filter(\":first\").length'},
            {name: 'not() filter', code: '$(\"li\").not(\":first\").length'},
            {name: 'has() filter', code: '$(\"ul\").has(\"li\").length'},
            {name: 'is() check', code: '$(\"#testButton\").is(\"button\")'}
        ];
        
        sandboxWindow.runTestSuite('Filter Tests', tests);
    };
    
    sandboxWindow.testTraversal = function() {
        var tests = [
            {name: 'parent()', code: '$(\"li\").parent().length'},
            {name: 'children()', code: '$(\"ul\").children().length'},
            {name: 'siblings()', code: '$(\"li\").first().siblings().length'},
            {name: 'next()', code: '$(\"li\").first().next().length'},
            {name: 'prev()', code: '$(\"li\").last().prev().length'},
            {name: 'find()', code: '$(\"ul\").find(\"li\").length'},
            {name: 'closest()', code: '$(\"li\").closest(\"ul\").length'}
        ];
        
        sandboxWindow.runTestSuite('Traversal Tests', tests);
    };
    
    sandboxWindow.testAnimations = function() {
        var $ = sandboxWindow.$;
        var testDiv = $(\"#sandboxArea .test-div\");
        
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
            {name: 'show()', code: '$(\"#testButton\").show(); \"SUCCESS\"'},
            {name: 'hide()', code: '$(\"#testButton\").hide().show(); \"SUCCESS\"'},
            {name: 'toggle()', code: '$(\"#testButton\").toggle().toggle(); \"SUCCESS\"'},
            {name: 'fadeTo()', code: '$(\"#testButton\").fadeTo(100, 0.8); \"SUCCESS\"'}
        ];
        
        sandboxWindow.runTestSuite('Effects Tests', tests);
    };
    
    sandboxWindow.testEvents = function() {
        var $ = sandboxWindow.$;
        var results = [];
        
        try {
            var testButton = $(\"#testButton\");
            
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
            $(\"#sandboxArea\").append('<button class=\"dynamic-test-btn\">Dynamic Button</button>');
            
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
            '<button id=\"testButton\">Test Button</button>' +
            '<input type=\"text\" id=\"testInput\" placeholder=\"Test input\" value=\"Sample text\">' +
            '<div class=\"test-div\">Test Div</div>' +
            '<ul id=\"testList\">' +
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
        resultsDiv.innerHTML += '<div class=\"result ' + resultClass + '\">[' + timestamp + '] ' + message + '</div>';
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

// Utility function to run from ServiceDesk Plus console
function openSandbox() {
    openJQuerySandbox();
}

// Instructions
console.log("jQuery Sandbox Page Script loaded!");
console.log("Press Alt+1 to open the jQuery testing sandbox window.");
console.log("Or run openSandbox() from the console.");