// ServiceDesk Plus JavaScript/jQuery Compatibility Test Suite
// Test various JavaScript and jQuery syntax patterns for Page Scripts
// if there is an error on servicedesk plus end, then i will comment sdp error 
// ==================== BASIC JAVASCRIPT TESTS ====================

// 1. Variable Declarations
var legacyVar = "Legacy var declaration";
let modernLet = "ES6 let declaration"; // sdp error
const modernConst = "ES6 const declaration"; // sdp error
// 2. Function Declarations
function traditionalFunction() {
    return "Traditional function declaration";
}

var functionExpression = function() {
    return "Function expression";
};

// 3. Arrow Functions (ES6+)
const arrowFunction = () => { // sdp error
    return "Arrow function";
};

const arrowFunctionShort = () => "Short arrow function"; // so this one didn't show up as an error until i deleted the const arrowFunction above. Why is that?

// 4. Object Literals
var basicObject = {
    property: "value",
    method: function() {
        return "Object method";
    }
};

// ES6 Enhanced Object Literals
const enhancedObject = {
    property: "value",
    method() {
        return "Enhanced object method";
    },
    [dynamicKey]: "Dynamic property"
};

// 5. Array Methods
var testArray = [1, 2, 3, 4, 5];
var mappedArray = testArray.map(function(item) { return item * 2; });
var filteredArray = testArray.filter(function(item) { return item > 2; });

// ES6 Array Methods
const modernMappedArray = testArray.map(item => item * 2);
const modernFilteredArray = testArray.filter(item => item > 2);

// 6. Template Literals (ES6+)
const templateLiteral = `Template literal with ${modernLet}`;

// 7. Destructuring (ES6+)
const [first, second, ...rest] = testArray;
const {property, method} = basicObject;

// 8. Promises (ES6+)
const promiseTest = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved"), 1000);
});

// 9. Async/Await (ES2017+)
async function asyncTest() {
    try {
        const result = await promiseTest;
        return result;
    } catch (error) {
        console.error(error);
    }
}

// ==================== JQUERY TESTS ====================

// 10. jQuery Document Ready
$(document).ready(function() {
    console.log("jQuery document ready - traditional");
});

// Short form
$(function() {
    console.log("jQuery document ready - short form");
});

// 11. jQuery Selectors
var elementById = $("#elementId");
var elementsByClass = $(".className");
var elementsByTag = $("div");
var complexSelector = $("div.className:first-child");

// 12. jQuery Event Handlers
$("#testButton").click(function() {
    console.log("Button clicked - traditional handler");
});

$("#testButton").on("click", function() {
    console.log("Button clicked - on() handler");
});

// Event delegation
$(document).on("click", ".dynamicButton", function() {
    console.log("Dynamic button clicked");
});

// 13. jQuery DOM Manipulation
$("#content").html("<p>New HTML content</p>");
$("#content").text("New text content");
$("#content").append("<span>Appended content</span>");
$("#content").prepend("<span>Prepended content</span>");

// 14. jQuery Effects
$("#element").hide();
$("#element").show();
$("#element").fadeIn();
$("#element").fadeOut();
$("#element").slideUp();
$("#element").slideDown();

// 15. jQuery AJAX
$.ajax({
    url: "/api/endpoint",
    method: "GET",
    dataType: "json",
    success: function(data) {
        console.log("AJAX success:", data);
    },
    error: function(xhr, status, error) {
        console.log("AJAX error:", error);
    }
});

// jQuery AJAX shortcuts
$.get("/api/data", function(data) {
    console.log("GET request:", data);
});

$.post("/api/data", {key: "value"}, function(data) {
    console.log("POST request:", data);
});

// 16. jQuery Form Handling
$("#myForm").submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log("Form data:", formData);
});

// ==================== SERVICEDESK PLUS $CS LIBRARY TESTS ====================

// 17. $CS Library Basic Operations
try {
    // User context checks
    if (typeof $CS !== 'undefined') {
        var isRequester = $CS.isRequester();
        var isTechnician = $CS.isTechnician();
        var isAdmin = $CS.isAdmin();
        
        console.log("User roles - Requester:", isRequester, "Technician:", isTechnician, "Admin:", isAdmin);
    }
} catch (error) {
    console.log("$CS user context error:", error);
}

// 18. $CS Field Operations
try {
    if (typeof $CS !== 'undefined') {
        // Get field values
        var priority = $CS.getValue("PRIORITY");
        var subject = $CS.getValue("SUBJECT");
        
        // Set field values
        $CS.setValue("DESCRIPTION", "Test description");
        
        // Field visibility
        $CS.hideField("INTERNAL_NOTES");
        $CS.showField("PRIORITY");
        
        // Field properties
        $CS.makeFieldMandatory("PRIORITY");
        $CS.makeFieldOptional("DESCRIPTION");
        
        console.log("$CS field operations completed");
    }
} catch (error) {
    console.log("$CS field operations error:", error);
}

// 19. $CS Element Manipulation
try {
    if (typeof $CS !== 'undefined') {
        $CS.hideElement("elementId");
        $CS.showElement("elementId");
        $CS.addHTML("containerId", "<div>Custom HTML</div>");
        
        console.log("$CS element manipulation completed");
    }
} catch (error) {
    console.log("$CS element manipulation error:", error);
}

// ==================== MODERN JAVASCRIPT FEATURES TESTS ====================

// 20. Classes (ES6+)
class TestClass {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
    
    static staticMethod() {
        return "Static method called";
    }
}

// 21. Modules (ES6+) - Note: May not work in Page Scripts
// export const moduleFunction = () => "Module function";
// import { moduleFunction } from './module.js';

// 22. Spread Operator (ES6+)
const arraySpread = [...testArray];
const objectSpread = {...basicObject};

// 23. Default Parameters (ES6+)
function defaultParams(param1 = "default", param2 = 42) {
    return `${param1} - ${param2}`;
}

// 24. Rest Parameters (ES6+)
function restParams(...args) {
    return args.length;
}

// 25. For...of Loops (ES6+)
for (const item of testArray) {
    console.log("For...of item:", item);
}

// 26. Map and Set (ES6+)
const testMap = new Map();
testMap.set("key1", "value1");
testMap.set("key2", "value2");

const testSet = new Set([1, 2, 3, 3, 4]);

// 27. Symbol (ES6+)
const symbolTest = Symbol("test");
const symbolObject = {
    [symbolTest]: "Symbol property"
};

// ==================== ERROR HANDLING TESTS ====================

// 28. Try-Catch-Finally
try {
    // Potentially problematic code
    var result = someUndefinedFunction();
} catch (error) {
    console.log("Caught error:", error.message);
} finally {
    console.log("Finally block executed");
}

// 29. Custom Error
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// ==================== COMPATIBILITY TEST RUNNER ====================

// 30. Test Runner Function
function runCompatibilityTests() {
    var results = {
        passed: 0,
        failed: 0,
        errors: []
    };
    
    // Test basic JavaScript
    try {
        eval("let testLet = 'ES6 let test';");
        results.passed++;
    } catch (e) {
        results.failed++;
        results.errors.push("ES6 let/const not supported");
    }
    
    // Test arrow functions
    try {
        eval("const testArrow = () => 'arrow function test';");
        results.passed++;
    } catch (e) {
        results.failed++;
        results.errors.push("Arrow functions not supported");
    }
    
    // Test template literals
    try {
        eval("const testTemplate = `template literal test`;");
        results.passed++;
    } catch (e) {
        results.failed++;
        results.errors.push("Template literals not supported");
    }
    
    // Test jQuery availability
    try {
        if (typeof $ !== 'undefined' && $.fn.jquery) {
            results.passed++;
            console.log("jQuery version:", $.fn.jquery);
        } else {
            throw new Error("jQuery not available");
        }
    } catch (e) {
        results.failed++;
        results.errors.push("jQuery not available");
    }
    
    // Test $CS library availability
    try {
        if (typeof $CS !== 'undefined') {
            results.passed++;
            console.log("$CS library available");
        } else {
            throw new Error("$CS library not available");
        }
    } catch (e) {
        results.failed++;
        results.errors.push("$CS library not available");
    }
    
    console.log("Compatibility Test Results:", results);
    return results;
}

// Auto-run tests when script loads
if (typeof window !== 'undefined') {
    $(document).ready(function() {
        console.log("Starting ServiceDesk Plus compatibility tests...");
        runCompatibilityTests();
    });
} else {
    console.log("Running in non-browser environment");
}

// ==================== USAGE INSTRUCTIONS ====================
/*
USAGE INSTRUCTIONS:

1. Copy this entire script into the ServiceDesk Plus Page Scripts editor
2. Save and activate the page script
3. Open browser developer console (F12)
4. Navigate to a ServiceDesk Plus page where the script should execute
5. Check console output for:
   - Any syntax errors (will prevent script execution)
   - Compatibility test results
   - Feature availability status

6. Common issues to look for:
   - ES6+ features may not be supported in older browsers
   - $CS library methods may not be available on all pages
   - jQuery version compatibility
   - Module import/export not supported in Page Scripts

7. Troubleshooting:
   - If script doesn't run, check for syntax errors
   - If $CS methods fail, ensure you're on a supported SDP page
   - If jQuery methods fail, check jQuery version compatibility
   - Modern JS features may need polyfills or transpilation

8. Recommended approach:
   - Start with basic JavaScript and jQuery
   - Gradually test modern features
   - Use feature detection before using advanced syntax
   - Always wrap $CS operations in try-catch blocks
*/