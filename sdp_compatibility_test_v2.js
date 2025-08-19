// ServiceDesk Plus Compatibility Test Suite v2.0
// ES5-only JavaScript testing for Page Scripts environment
// Copy and paste this entire script into ServiceDesk Plus Page Scripts editor

// ==================== ES5 JAVASCRIPT COMPATIBILITY TESTS ====================

// Test 1: Variable Declarations (ES5 only)
var testVar1 = "ES5 var declaration";
var testVar2 = 42;
var testVar3 = true;
var testVar4 = null;
var testVar5 = undefined;

// Test 2: Function Declarations
function namedFunction() {
    return "Named function works";
}

var functionExpression = function() {
    return "Function expression works";
};

var functionWithParams = function(param1, param2) {
    return "Function with params: " + param1 + " and " + param2;
};

// Test 3: Object Literals (ES5 style)
var testObject = {
    stringProperty: "string value",
    numberProperty: 123,
    booleanProperty: true,
    nullProperty: null,
    arrayProperty: [1, 2, 3],
    methodProperty: function() {
        return "Object method works";
    },
    nestedObject: {
        nested: "nested value"
    }
};

// Test 4: Array Operations (ES5 compatible)
var testArray = [1, 2, 3, 4, 5];
var doubledArray = testArray.map(function(item) {
    return item * 2;
});
var filteredArray = testArray.filter(function(item) {
    return item > 2;
});
var reducedValue = testArray.reduce(function(acc, item) {
    return acc + item;
}, 0);

// Test 5: String Operations
var baseString = "ServiceDesk Plus";
var concatenatedString = baseString + " " + "Page Scripts";
var uppercaseString = baseString.toUpperCase();
var substringTest = baseString.substring(0, 11);
var indexOfTest = baseString.indexOf("Desk");

// Test 6: Control Structures
var controlStructureResults = [];

// For loop
for (var i = 0; i < 3; i++) {
    controlStructureResults.push("for-loop-" + i);
}

// While loop
var whileCounter = 0;
while (whileCounter < 2) {
    controlStructureResults.push("while-loop-" + whileCounter);
    whileCounter++;
}

// If-else
if (testVar2 === 42) {
    controlStructureResults.push("if-else-works");
}

// Switch statement
var switchTest = "case1";
switch (switchTest) {
    case "case1":
        controlStructureResults.push("switch-works");
        break;
    default:
        controlStructureResults.push("switch-default");
}

// ==================== JQUERY COMPATIBILITY TESTS ====================

var jQueryTestResults = [];

// Test 7: jQuery Basic Functionality
if (typeof $ !== 'undefined') {
    jQueryTestResults.push("jQuery available");
    
    // jQuery version detection
    if ($.fn && $.fn.jquery) {
        jQueryTestResults.push("jQuery version: " + $.fn.jquery);
    }
    
    // Document ready (multiple forms)
    $(document).ready(function() {
        jQueryTestResults.push("$(document).ready() works");
    });
    
    $(function() {
        jQueryTestResults.push("$() shorthand works");
    });
    
    // Selector tests
    var bodyElement = $("body");
    if (bodyElement.length > 0) {
        jQueryTestResults.push("Element selector works");
    }
    
    // jQuery methods availability test
    var jQueryMethods = [
        'hide', 'show', 'fadeIn', 'fadeOut', 'slideUp', 'slideDown',
        'addClass', 'removeClass', 'toggleClass', 'hasClass',
        'attr', 'removeAttr', 'prop', 'removeProp',
        'val', 'html', 'text', 'append', 'prepend',
        'click', 'on', 'off', 'trigger',
        'find', 'filter', 'eq', 'first', 'last',
        'parent', 'children', 'siblings', 'closest',
        'ajax', 'get', 'post', 'load'
    ];
    
    var availableMethods = [];
    var unavailableMethods = [];
    
    for (var i = 0; i < jQueryMethods.length; i++) {
        var method = jQueryMethods[i];
        if (typeof $.fn[method] === 'function' || typeof $[method] === 'function') {
            availableMethods.push(method);
        } else {
            unavailableMethods.push(method);
        }
    }
    
    jQueryTestResults.push("Available jQuery methods: " + availableMethods.length);
    if (unavailableMethods.length > 0) {
        jQueryTestResults.push("Unavailable jQuery methods: " + unavailableMethods.join(", "));
    }
    
} else {
    jQueryTestResults.push("jQuery NOT available");
}

// ==================== SERVICEDESK PLUS $CS LIBRARY TESTS ====================

var csLibraryResults = [];

// Test 8: $CS Library Availability and Methods
if (typeof $CS !== 'undefined') {
    csLibraryResults.push("$CS library available");
    
    // User context methods
    var userContextMethods = ['isRequester', 'isTechnician', 'isAdmin'];
    var availableUserMethods = [];
    var unavailableUserMethods = [];
    
    for (var i = 0; i < userContextMethods.length; i++) {
        var method = userContextMethods[i];
        if (typeof $CS[method] === 'function') {
            availableUserMethods.push(method);
            try {
                var result = $CS[method]();
                csLibraryResults.push(method + "(): " + result);
            } catch (error) {
                csLibraryResults.push(method + "() error: " + error.message);
            }
        } else {
            unavailableUserMethods.push(method);
        }
    }
    
    // Field operation methods
    var fieldMethods = [
        'getValue', 'setValue', 'hideField', 'showField',
        'makeFieldMandatory', 'makeFieldOptional', 'disableField', 'enableField',
        'setFieldLabel', 'getFieldLabel'
    ];
    
    var availableFieldMethods = [];
    var unavailableFieldMethods = [];
    
    for (var i = 0; i < fieldMethods.length; i++) {
        var method = fieldMethods[i];
        if (typeof $CS[method] === 'function') {
            availableFieldMethods.push(method);
        } else {
            unavailableFieldMethods.push(method);
        }
    }
    
    csLibraryResults.push("Available field methods: " + availableFieldMethods.join(", "));
    if (unavailableFieldMethods.length > 0) {
        csLibraryResults.push("Unavailable field methods: " + unavailableFieldMethods.join(", "));
    }
    
    // Element manipulation methods
    var elementMethods = [
        'hideElement', 'showElement', 'addHTML', 'removeElement',
        'addButton', 'addTab'
    ];
    
    var availableElementMethods = [];
    var unavailableElementMethods = [];
    
    for (var i = 0; i < elementMethods.length; i++) {
        var method = elementMethods[i];
        if (typeof $CS[method] === 'function') {
            availableElementMethods.push(method);
        } else {
            unavailableElementMethods.push(method);
        }
    }
    
    csLibraryResults.push("Available element methods: " + availableElementMethods.join(", "));
    if (unavailableElementMethods.length > 0) {
        csLibraryResults.push("Unavailable element methods: " + unavailableElementMethods.join(", "));
    }
    
    // Test common field operations (safely)
    var commonFields = ['SUBJECT', 'PRIORITY', 'DESCRIPTION', 'REQUESTER', 'TECHNICIAN'];
    var fieldTestResults = [];
    
    for (var i = 0; i < commonFields.length; i++) {
        var fieldName = commonFields[i];
        try {
            var fieldValue = $CS.getValue(fieldName);
            if (fieldValue !== null && fieldValue !== undefined) {
                fieldTestResults.push(fieldName + " has value");
            } else {
                fieldTestResults.push(fieldName + " is empty/null");
            }
        } catch (error) {
            fieldTestResults.push(fieldName + " not accessible: " + error.message);
        }
    }
    
    csLibraryResults.push("Field tests: " + fieldTestResults.join(", "));
    
} else {
    csLibraryResults.push("$CS library NOT available");
}

// ==================== ENVIRONMENT DETECTION TESTS ====================

var environmentResults = [];

// Test 9: Browser Environment Detection
environmentResults.push("User Agent: " + navigator.userAgent);
environmentResults.push("Browser Language: " + navigator.language);
environmentResults.push("Platform: " + navigator.platform);

// Window properties
var windowProperties = ['location', 'document', 'console', 'localStorage', 'sessionStorage'];
var availableWindowProps = [];
var unavailableWindowProps = [];

for (var i = 0; i < windowProperties.length; i++) {
    var prop = windowProperties[i];
    if (typeof window[prop] !== 'undefined') {
        availableWindowProps.push(prop);
    } else {
        unavailableWindowProps.push(prop);
    }
}

environmentResults.push("Available window properties: " + availableWindowProps.join(", "));
if (unavailableWindowProps.length > 0) {
    environmentResults.push("Unavailable window properties: " + unavailableWindowProps.join(", "));
}

// Global objects test
var globalObjects = ['JSON', 'Date', 'Math', 'RegExp', 'Array', 'Object', 'String', 'Number'];
var availableGlobals = [];
var unavailableGlobals = [];

for (var i = 0; i < globalObjects.length; i++) {
    var obj = globalObjects[i];
    if (typeof window[obj] !== 'undefined') {
        availableGlobals.push(obj);
    } else {
        unavailableGlobals.push(obj);
    }
}

environmentResults.push("Available global objects: " + availableGlobals.join(", "));
if (unavailableGlobals.length > 0) {
    environmentResults.push("Unavailable global objects: " + unavailableGlobals.join(", "));
}

// ==================== ERROR HANDLING TESTS ====================

var errorHandlingResults = [];

// Test 10: Try-Catch-Finally
try {
    var undefinedFunction = nonExistentFunction();
} catch (error) {
    errorHandlingResults.push("Try-catch works: " + error.name);
} finally {
    errorHandlingResults.push("Finally block executed");
}

// Custom error throwing
function testCustomError() {
    try {
        throw new Error("Custom error test");
    } catch (error) {
        return "Custom error caught: " + error.message;
    }
}

errorHandlingResults.push(testCustomError());

// ==================== COMPATIBILITY TEST RUNNER ====================

function runCompatibilityTestSuite() {
    var overallResults = {
        testSuite: "ServiceDesk Plus Compatibility Test v2.0",
        timestamp: new Date().toString(),
        passed: 0,
        failed: 0,
        warnings: 0,
        results: {}
    };
    
    // JavaScript ES5 Tests
    try {
        if (testVar1 === "ES5 var declaration" && 
            typeof namedFunction === 'function' && 
            testObject.stringProperty === "string value") {
            overallResults.passed++;
            overallResults.results.javascript_es5 = "PASSED";
        } else {
            overallResults.failed++;
            overallResults.results.javascript_es5 = "FAILED";
        }
    } catch (error) {
        overallResults.failed++;
        overallResults.results.javascript_es5 = "ERROR: " + error.message;
    }
    
    // jQuery Tests
    if (jQueryTestResults.length > 0 && jQueryTestResults[0] === "jQuery available") {
        overallResults.passed++;
        overallResults.results.jquery = "PASSED - " + jQueryTestResults.join("; ");
    } else {
        overallResults.failed++;
        overallResults.results.jquery = "FAILED - jQuery not available";
    }
    
    // $CS Library Tests
    if (csLibraryResults.length > 0 && csLibraryResults[0] === "$CS library available") {
        overallResults.passed++;
        overallResults.results.cs_library = "PASSED - " + csLibraryResults.join("; ");
    } else {
        overallResults.warnings++;
        overallResults.results.cs_library = "WARNING - $CS library not available on this page";
    }
    
    // Environment Tests
    if (environmentResults.length > 0) {
        overallResults.passed++;
        overallResults.results.environment = "PASSED - " + environmentResults.join("; ");
    } else {
        overallResults.failed++;
        overallResults.results.environment = "FAILED - Environment detection failed";
    }
    
    // Error Handling Tests
    if (errorHandlingResults.length > 0) {
        overallResults.passed++;
        overallResults.results.error_handling = "PASSED - " + errorHandlingResults.join("; ");
    } else {
        overallResults.failed++;
        overallResults.results.error_handling = "FAILED - Error handling tests failed";
    }
    
    return overallResults;
}

// ==================== RESULTS DISPLAY ====================

function displayResults() {
    var results = runCompatibilityTestSuite();
    
    console.log("=".repeat(80));
    console.log(results.testSuite);
    console.log("Timestamp: " + results.timestamp);
    console.log("=".repeat(80));
    console.log("SUMMARY:");
    console.log("✓ Passed: " + results.passed);
    console.log("✗ Failed: " + results.failed);
    console.log("⚠ Warnings: " + results.warnings);
    console.log("=".repeat(80));
    console.log("DETAILED RESULTS:");
    
    for (var testName in results.results) {
        if (results.results.hasOwnProperty(testName)) {
            var result = results.results[testName];
            var status = "";
            if (result.indexOf("PASSED") === 0) {
                status = "✓ ";
            } else if (result.indexOf("WARNING") === 0) {
                status = "⚠ ";
            } else {
                status = "✗ ";
            }
            console.log(status + testName.replace(/_/g, ' ').toUpperCase() + ": " + result);
        }
    }
    
    console.log("=".repeat(80));
    
    return results;
}

// ==================== AUTO EXECUTION ====================

// Run tests automatically when page loads
if (typeof window !== 'undefined') {
    if (typeof $ !== 'undefined') {
        $(document).ready(function() {
            // Delay execution slightly to ensure page is fully loaded
            setTimeout(function() {
                displayResults();
            }, 1000);
        });
    } else {
        // Fallback if jQuery not available
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(function() {
                    displayResults();
                }, 1000);
            });
        } else {
            setTimeout(function() {
                displayResults();
            }, 1000);
        }
    }
} else {
    console.log("Running in non-browser environment");
    displayResults();
}

// Manual test runner (call this function from console if needed)
function runManualTest() {
    return displayResults();
}

// ==================== USAGE INSTRUCTIONS ====================
/*
SERVICEDESK PLUS COMPATIBILITY TEST v2.0 - USAGE INSTRUCTIONS:

1. COPY AND PASTE: Copy this entire script into ServiceDesk Plus Page Scripts editor
2. SAVE AND ACTIVATE: Save the page script and make sure it's active
3. NAVIGATE: Go to any ServiceDesk Plus page (Request form, List view, etc.)
4. OPEN CONSOLE: Open browser developer tools (F12) and go to Console tab
5. WAIT: The test will run automatically after 1 second
6. VIEW RESULTS: Check the console for detailed compatibility results

MANUAL EXECUTION:
If auto-execution doesn't work, type this in the console:
runManualTest();

WHAT THIS TEST CHECKS:
✓ ES5 JavaScript compatibility (variables, functions, objects, arrays)
✓ jQuery availability and version
✓ $CS library methods and availability
✓ Browser environment capabilities
✓ Error handling functionality
✓ ServiceDesk Plus specific field access

EXPECTED RESULTS:
- JavaScript ES5: Should PASS
- jQuery: Should PASS with version info
- $CS Library: May show WARNING if not on a form page (this is normal)
- Environment: Should PASS with browser details
- Error Handling: Should PASS

TROUBLESHOOTING:
- If no output appears: Check if Page Scripts are enabled in ServiceDesk Plus
- If $CS library shows warning: Try testing on a Request form or Incident form
- If jQuery fails: Report this as it indicates a ServiceDesk Plus configuration issue
- If JavaScript ES5 fails: The browser/environment has serious compatibility issues

This test helps ensure your Page Scripts will work reliably in the ServiceDesk Plus environment.
*/