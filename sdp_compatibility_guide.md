# ServiceDesk Plus JavaScript Compatibility Guide

Based on compatibility testing, ServiceDesk Plus Page Scripts environment has the following limitations:

## ✅ SUPPORTED JAVASCRIPT FEATURES

### Variable Declarations
```javascript
var legacyVar = "Use var only";
// DON'T USE: let or const
```

### Functions
```javascript
// Traditional function declarations
function myFunction() {
    return "Traditional functions work";
}

// Function expressions
var myFunc = function() {
    return "Function expressions work";
};

// DON'T USE: Arrow functions => 
```

### Objects and Arrays
```javascript
// Traditional object literals
var obj = {
    property: "value",
    method: function() {
        return "Traditional methods work";
    }
};

// Traditional array methods
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function(num) {
    return num * 2;
});
var filtered = numbers.filter(function(num) {
    return num > 2;
});
```

### jQuery (Full Support)
```javascript
$(document).ready(function() {
    $("#element").click(function() {
        $(this).hide();
    });
});
```

### $CS Library (Full Support)
```javascript
try {
    if (typeof $CS !== 'undefined') {
        var isRequester = $CS.isRequester();
        $CS.hideField("FIELDNAME");
        $CS.setValue("FIELDNAME", "value");
    }
} catch (error) {
    console.log("Error:", error);
}
```

## ❌ NOT SUPPORTED JAVASCRIPT FEATURES

### Modern Variable Declarations
```javascript
// DON'T USE:
let modernVar = "Not supported";
const CONSTANT = "Not supported";
```

### Arrow Functions
```javascript
// DON'T USE:
var arrow = () => "Not supported";
var arrow2 = (param) => param * 2;
```

### Template Literals
```javascript
// DON'T USE:
var template = `Template ${variable} not supported`;

// USE INSTEAD:
var template = "Template " + variable + " supported";
```

### Modern Array/Object Features
```javascript
// DON'T USE:
var [first, second] = array; // Destructuring
var newArray = [...oldArray]; // Spread operator
var newObj = {...oldObj};
```

### Promises and Async/Await
```javascript
// DON'T USE:
new Promise((resolve, reject) => {});
async function asyncFunc() {}
await somePromise;
```

### Classes
```javascript
// DON'T USE:
class MyClass {
    constructor() {}
}
```

## 🛠️ DEVELOPMENT BEST PRACTICES

### 1. Use Legacy JavaScript Syntax
```javascript
// Good - Traditional approach
var elements = $(".my-elements");
elements.each(function(index) {
    var element = $(this);
    element.data("index", index);
});

// Bad - Modern approach (won't work)
const elements = $(".my-elements");
elements.each((index, element) => {
    $(element).data("index", index);
});
```

### 2. String Concatenation Instead of Template Literals
```javascript
// Good
var message = "Hello " + userName + ", welcome to " + systemName;

// Bad
var message = `Hello ${userName}, welcome to ${systemName}`;
```

### 3. Traditional Error Handling
```javascript
// Good
try {
    var result = $CS.getValue("PRIORITY");
    if (result) {
        console.log("Priority: " + result);
    }
} catch (error) {
    console.log("Error getting priority: " + error.message);
}
```

### 4. Function Declarations for Reusability
```javascript
// Good - Hoisted and available throughout scope
function validateField(fieldName) {
    try {
        var value = $CS.getValue(fieldName);
        return value && value.length > 0;
    } catch (error) {
        return false;
    }
}

// Usage
if (validateField("SUBJECT")) {
    $CS.makeFieldMandatory("DESCRIPTION");
}
```

### 5. Traditional Object Methods
```javascript
// Good
var formHandler = {
    init: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        var self = this;
        $("#submitBtn").click(function() {
            self.handleSubmit();
        });
    },
    handleSubmit: function() {
        // Handle form submission
    }
};
```

## 🔧 RECOMMENDED DEVELOPMENT WORKFLOW

1. **Use ES5 syntax only** - Stick to pre-2015 JavaScript features
2. **Test frequently** - ServiceDesk Plus environment may have unique quirks
3. **Use jQuery extensively** - It's fully supported and powerful
4. **Wrap $CS operations in try-catch** - Not all methods available on all pages
5. **Use feature detection** - Check if methods exist before using them
6. **Use traditional function syntax** - Avoid arrow functions completely
7. **String concatenation over template literals** - Use + operator for strings

## 🚀 QUICK REFERENCE TEMPLATE

```javascript
// ServiceDesk Plus Page Script Template
$(document).ready(function() {
    // Initialize your customizations
    initializePageScript();
});

function initializePageScript() {
    try {
        // Check if $CS library is available
        if (typeof $CS === 'undefined') {
            console.log("$CS library not available on this page");
            return;
        }
        
        // Check user role and customize accordingly
        if ($CS.isRequester()) {
            setupRequesterView();
        } else if ($CS.isTechnician()) {
            setupTechnicianView();
        }
        
    } catch (error) {
        console.log("Page script initialization error: " + error.message);
    }
}

function setupRequesterView() {
    // Requester-specific customizations
    $CS.hideField("INTERNAL_NOTES");
}

function setupTechnicianView() {
    // Technician-specific customizations
    $CS.showField("INTERNAL_NOTES");
}

function validateRequiredFields() {
    var fields = ["SUBJECT", "PRIORITY", "DESCRIPTION"];
    var isValid = true;
    
    for (var i = 0; i < fields.length; i++) {
        var fieldValue = $CS.getValue(fields[i]);
        if (!fieldValue || fieldValue.length === 0) {
            $CS.makeFieldMandatory(fields[i]);
            isValid = false;
        }
    }
    
    return isValid;
}
```

This compatibility guide should help you develop Page Scripts that work reliably in the ServiceDesk Plus environment.