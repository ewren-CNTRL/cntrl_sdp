# ServiceDesk Plus - Complete JavaScript API Reference

## Overview

This comprehensive reference covers all JavaScript APIs available in ManageEngine ServiceDesk Plus for customization and automation. The APIs are organized into three main categories:

1. **$CS Library** - Page Scripts API for UI customization and form manipulation
2. **SDP Widget API** - Custom widget development for external integrations
3. **Field and Form Rules (FAFR)** - Advanced form behavior and event handling

> **Important**: All APIs use jQuery v1.8.3 in the global scope. You cannot use `$` directly - use the provided libraries instead.

---

## Part 1: $CS Library (Page Scripts API)

The $CS (Custom Script) library is the primary JavaScript API for ServiceDesk Plus page customization through Page Scripts.

### Element Manipulation

#### $CS.hideElement(selector)
Hides elements matching the CSS selector.
```javascript
$CS.hideElement("edit");              // Hide edit button
$CS.hideElement(".admin-panel");      // Hide elements by class
```

#### $CS.showElement(selector)
Shows elements matching the CSS selector.
```javascript
$CS.showElement("edit");              // Show edit button
```

#### $CS.findElement(selector)
Finds and returns elements by CSS selector.
```javascript
var form = $CS.findElement("#propertyForm");
var buttons = $CS.findElement(".btn-primary");
```

#### $CS.element(fieldId)
Returns jQuery element object for the specified field ID.
```javascript
var element = $CS.element("TECHNICIAN");
element.trigger("change");
```

#### $CS.addElement(selector, element, position)
Appends HTML elements to the page.
```javascript
var html = '<span class="btn btn-danger mr10">High Priority: 10</span>';
$CS.addElement('new_request', html, 'before');
```

#### $CS.addButton(selector, name, callback, options)
Adds interactive buttons to the page.
```javascript
$CS.addButton("edit", "Create JIRA Ticket", function(){
    window.location.href="/WorkOrder.do";
}, {"class":"btn btn-default btn-xs ml10"});
```

#### $CS.addWidget(content, type, name, selector, callback)
Adds widgets (embedded content) to pages.
```javascript
$CS.addWidget(
    'https://www.youtube.com/embed/hGe99rgSAXk',
    'url',
    'Basics',
    'properties-section'
);
```

### Field Management

#### Field Visibility
```javascript
$CS.hideField("PRIORITY");                    // Hide field
$CS.showField("PRIORITY");                    // Show field
$CS.isVisible("STATUS");                      // Check visibility
```

#### Field State Control
```javascript
$CS.enableField("CATEGORY");                 // Enable field
$CS.disableField("SUBCATEGORY");             // Disable field
$CS.isEnabled("PRIORITY");                   // Check if enabled
```

#### Field Validation
```javascript
$CS.mandateField("SUBJECT");                 // Make mandatory
$CS.nonMandateField("DESCRIPTION");          // Make optional
$CS.isMandated("REQUESTER");                 // Check if mandatory
```

#### Multiple Fields
```javascript
$CS.hideField(["LEVEL", "PRIORITY", "URGENCY"]);
$CS.mandateField(["LEVEL", "PRIORITY", "URGENCY"]);
```

### Value Management

#### Get/Set Field Values
```javascript
// Get values
var statusId = $CS.getValue("STATUS");
var subject = $CS.getValue("SUBJECT");
var created_date = $CS.getValue("CREATEDDATE");      // Returns Date Object
var resources = $CS.getValue("RES_3_QUS_3");         // Returns array for checkboxes

// Set values
$CS.setValue("STATUS", "1");
$CS.setValue("SUBJECT", "test request");
$CS.setValue("UDF_DATE1", new Date());
$CS.setValue("RES_3_QUS_3", ["CD RW", "External Harddisk", "Optical Mouse"]);
```

#### Get/Set Display Text
```javascript
// Get display text (for pick-type fields)
var status = $CS.getText("STATUS");
var impactDetail = $CS.getText("IMPACTDETAILS");

// Set display text
$CS.setText("STATUS", "Open");
```

#### Requester Field Access
```javascript
var email_id = $CS.getValue("REQUESTER.EMAILID");
var department = $CS.getValue("REQUESTER.DEPARTMENT");
var job_title = $CS.getValue("REQUESTER.JOBTITLE");
var mobile_number = $CS.getValue("REQUESTER.MOBILE");
var phone = $CS.getValue("REQUESTER.CONTACTNUMBER");
var requester = $CS.getValue("REQUESTER");
var employeeID = $CS.getValue("REQUESTER.EMPLOYEEID");
var site = $CS.getValue("REQUESTER.SITE");
var is_vipuser = $CS.getValue("REQUESTER.ISVIPUSER");
var user_name = $CS.getValue("REQUESTER.USERNAME");
var userID = $CS.getValue("REQUESTER.USERID");
var login_name = $CS.getValue("REQUESTER.LOGINNAME");
var domain = $CS.getValue("REQUESTER.DOMAINNAME");
```

### Options Management

#### Add/Remove Options
```javascript
// Add options to pick-type fields
$CS.addOptions("STATUS", ["Open", "Closed"]);

// Remove specific options
$CS.removeOptions("STATUS", ["Open", "Closed"]);

// Remove all options
$CS.removeAllOptions(["STATUS"]);
$CS.removeAllOptions(["STATUS", "PRIORITY"]);

// Add all available options
$CS.addAllOptions("TECHNICIAN");
```

#### Enable/Disable Options
```javascript
$CS.disableOptions("STATUS", ["Open", "Closed"]);
$CS.enableOptions("STATUS", ["Open", "Closed"]);
```

### User Context & Authentication

#### User Information
```javascript
var userId = $CS.getLoggedInUserId();
var userName = $CS.getLoggedInUserName();
var userEmail = $CS.getLoggedInUserEmailId();
var loginName = $CS.getLoggedInUserLoginName();
var domainName = $CS.getLoggedInUserDomainName();
```

#### Role Checking
```javascript
if ($CS.hasRole("SDAdmin")) {
    // User is admin
}

if ($CS.isRequester()) {
    // User is a requester
}

if ($CS.isTechnician()) {
    // User is a technician
}
```

### Task Management

#### Task Operations
```javascript
$CS.setTasks(["task1", "task2"]);             // Set tasks
$CS.hideTasks(["task3"]);                     // Hide tasks
$CS.showTasks(["task1", "task2"]);            // Show tasks
$CS.unSetTasks(["task3"]);                    // Remove tasks
```

### Description Management

#### Description Operations
```javascript
var description = $CS.getDescription();                    // Get description
$CS.setDescription("Updated description text");            // Set description
```

### Advanced Functions

#### Field Dependencies
Create dynamic field relationships:
```javascript
var dependencyObj = {
    'FIELDS': ['Country', 'City', 'Support Rep'],
    'VALUES': {
        'India': {
            'Mumbai': ['Ali Hassan', 'Neha Agarwal'],
            'Chennai': ['Guru Prasath', 'Ramesh Kumar']
        },
        'America': {
            'California': ['Donald Miller', 'Lisa Turner'],
            'Chicago': ['Margaret Taylor', 'Ronald Lewis']
        },
        'Russia': {}
    }
};
$CS.setFieldDependency(dependencyObj);
```

#### Form Control
```javascript
// Stop form submission
var status = $CS.getText("STATUS");
if (status === "Closed") {
    $CS.stopFormSubmission();
}
```

#### Special Functions
```javascript
$CS.hideUnansweredFields(["properties"]);                  // Hide empty fields
$CS.isDynamicLoadingField(element);                        // Check dynamic loading
$CS.readAndPopulateData();                                 // Read/populate data
$CS.getNewUDFName();                                       // Get UDF name
$CS.getApprovalStatusValue();                              // Get approval status
$CS.isAttachmentEmpty();                                   // Check attachments
$CS.getServerTime();                                       // Get server time
```

---

## Part 2: SDP Widget API

The SDP Widget API enables custom widget development for external integrations and enhanced functionality.

### Initialization

#### SDP.init()
Initialize the SDK and establish connection:
```javascript
SDP.init().then(function(response) { 
    console.log(response); 
}).catch(function(response) { 
    console.log(response); 
});
```

### Data Operations

#### SDP.get(options) - Fetch Data
```javascript
SDP.get({
    url: "/requests"
}).then(function(response) {
    console.log(response);
}).catch(function(response) {
    console.log(response);
});
```

#### SDP.add(options) - Create Data
```javascript
SDP.add({
    url: "/requests",
    input_data: {
        request: {
            subject: 'Request created from Widget'
        }
    }
}).then(function(response) {
    console.log(response);
}).catch(function(response) {
    console.log(response);
});
```

#### SDP.edit(options) - Update Data
```javascript
SDP.edit({
    url: "/requests/100000000000032746",
    input_data: {
        request: {
            subject: 'Request updated from Widget'
        }
    }
}).then(function(response) {
    console.log(response);
}).catch(function(response) {
    console.log(response);
});
```

#### SDP.del(options) - Delete Data
```javascript
SDP.del({
    url: "/cm_nat/",
    ids: "307"
});
```

#### SDP.connect(options) - External API Calls
```javascript
SDP.connect({
    url: "https://webapi.teamviewer.com/api/v1/sessions",
    headers: {
        "Content-Type": "application/json"
    },
    method: "post",
    data: JSON.stringify({
        "groupname": "SDPOnDemand",
        "waiting_message": "Please wait for the technician to join session."
    }),
    connection: connection_link_name
});
```

### Widget Management

#### User Interface
```javascript
// Refresh widget
SDP.refreshWidget();

// Show alerts
SDP.show_alert({
    message: "Widget data successfully stored",
    alert_type: "success"
});

// Show confirmations
SDP.show_confirm({
    message: "Are you sure to enter the meeting?",
    buttons: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
    ]
});

// Show/hide loading indicators
SDP.showIndicator({ category: "loading" });
SDP.hideIndicator({ category: "loading" });
```

### Variable Management

#### Temporary Variables
```javascript
// Get all temp variables
SDP.getTempVariables().then(function(response) { 
    console.log(response); 
});

// Get specific variable
SDP.getTempVariable("passphrase").then(function(response) {
    console.log(response);
});

// Set variable
SDP.setTempVariable("admin", "john-doe").then(function(response) {
    console.log(response);
});
```

### Context Information

#### Widget Context
```javascript
var instanceDetails = SDP.getCurrentInstance();
var userId = SDP.getCurrentUserId();
var userType = SDP.getCurrentUserType();
var userName = SDP.getCurrentUserName();
var userEmail = SDP.getCurrentUserEmail();
var widgetInfo = SDP.getWidgetInfo();
var widgetMeta = SDP.getWidgetMeta();
var location = SDP.getWidgetInvokedLocation();
var parentData = SDP.getDataPassedByparent();
var parentLocation = SDP.getParentLocation();
var parentInfo = SDP.getParentWidgetInfo();
```

#### Form Integration
```javascript
// Get form values (Add/Edit Request forms only)
SDP.getValueFromForm("SUBJECT").then(function(response) {
    console.log(response);
}).catch(function(response) {
    console.log(response);
});
```

#### Utilities
```javascript
SDP.ajaxBar();  // Get loading Ajax bar HTML
```

---

## Part 3: Field and Form Rules (FAFR) - Extended Functions

Advanced form manipulation and event handling beyond basic $CS functions.

### Data Population

#### readAndPopulateData(path, map, options)
Read CSV and populate field options:
```javascript
$CS.readAndPopulateData("Catalog.csv", {
    "WorkOrder_Fields_UDF_CHAR3": "Incident Type",
    "CATEGORY": "Service Category",
    "SUBCATEGORY": "Sub Category",
    "ITEM": "Sub Sub Category"
}, {
    dependency: ["WorkOrder_Fields_UDF_CHAR3", "CATEGORY", "SUBCATEGORY"],
    default_value: "Unable to launch MS Excel",
    primarykey: "WorkOrder_Fields_UDF_CHAR3",
    onChange: (a, b) => {
        // Handle change
    }
});
```

#### referField(fieldId, entityName, options)
Populate options from API:
```javascript
$CS.referField("WorkOrder_Fields_UDF_CHAR1", "udf_pick_119", {
    url: "api/v3/requests/udf_pick_119"
});
```

### Section Management

#### Section Visibility
```javascript
$CS.hideSection("Requester Details");     // Hide section
$CS.showSection("Requester Details");     // Show section
$CS.disableSection("Requester Details");  // Disable section
```

### Advanced UI Components

#### Tab Management
```javascript
$CS.addTab("hello world", "html", "sampleTab", "history-tab");
$CS.collapseTab("change_description");
$CS.expandTab("change_description");
```

#### Resource Management
Complex tabular data management:
```javascript
var fields = [
    { display_name: "Item", fafrKey: "ITEM" },
    { display_name: "Subcategory", fafrKey: "SUBCATEGORY" },
    { display_name: "Category", fafrKey: "CATEGORY" }
];

var options = {
    section: "WorkOrder_Fields_UDF_CHAR1",
    individualValidation: false,
    resetVal: false,
    table: fields,
    addButton: function () {
        // Custom button implementation
    }
};

$CS.addMoreResource("", options);
```

#### Utility Functions
```javascript
$CS.isAttachmentEmpty();                    // Check attachment status
$CS.ajax("/api/v3/requests");              // Synchronous API call
$CS.exportPdf({                            // Export page as PDF
    url: "/WorkOrder.do?woMode=viewWO&woID=1",
    fileName: "request_1"
});
```

### Event Handling

#### Custom Events

**Module-Specific Events:**
```javascript
// Asset Details page
$CS.findElement("asset_detailview").on("page:load", () => {
    $CS.hideElement("vendor");
});

// Change Roles page
$CS.executeEvent("change_roles_container", "page:load", () => {
    $CS.hideElement("change_manager");
});

// Task List View
$CS.findElement("task_listview").on("page:load", () => {
    // Custom code
});
```

**Tab Change Events:**
```javascript
// Stage tab changes
$CS.findElement("stages-tabs-panel").on("tab_change", function (e, d) {
    console.log(`stage tab changed ${d}`);
});

// Module-specific tab events
$CS.executeEvent("change_stage", "tab_change", function (e, data) {
    $CS.hideElement("approvals-tab");
});
```

**Click Events:**
```javascript
// Service category clicks
$CS.findElement("service_category", "starts_with").on("listen:click", function(event) {
    console.log("clicked");
});

// Request action buttons
$CS.findElement("reply_btn").on("listen:click", () => { /* code */ });
$CS.findElement("forward_btn").on("listen:click", () => { /* code */ });
```

**Field Change Events:**
```javascript
// Execute on inline edit
$CS.findElement("category").on("field:change", () => {
    console.log($CS.getText("category", "change_view"));
});
```

**Outlook Integration:**
```javascript
$CS.findElement("outlook_page").on("outlook_request_form", function(evnt, data, meta) {
    console.log(data);
    $CS.setText("SUBJECT", $CS.getText("SUBJECT") + " " + data.user_email);
});
```

### Approval Functions

#### Approval Status
```javascript
var approvalStatus = $CS.getApprovalStatus();          // Get current status
var approvalStatusId = $CS.getApprovalStatusValue();   // Get status ID
```

---

## Best Practices

### Error Handling
Always wrap operations in try-catch blocks:
```javascript
try {
    if ($CS.isRequester()) {
        $CS.hideField("INTERNAL_NOTES");
    }
} catch (error) {
    console.log("Error in page script:", error);
}
```

### Element Validation
Check element existence before manipulation:
```javascript
if ($CS.getValue("PRIORITY")) {
    var priority = $CS.getValue("PRIORITY");
    // Process priority value
}
```

### Performance Optimization
- Minimize DOM manipulation
- Use efficient selectors
- Batch operations when possible
- Cache frequently accessed elements

### Security Considerations
- Validate user permissions before showing sensitive data
- Use role-checking functions appropriately
- Avoid exposing sensitive information in client-side scripts
- Implement proper error handling

### Testing Guidelines
- Test with different user roles (Requester, Technician, Admin)
- Verify functionality across supported browsers
- Test with different data scenarios
- Monitor console for errors during execution

---

## Error Handling & Debugging

**Console Logging:** All script execution errors are displayed in the browser console.

**Common Issues:**
- Element not found: Check selectors and timing
- Permission denied: Verify user roles and field access
- API failures: Check network connectivity and parameters
- Field not accessible: Ensure field exists and is properly configured

**Debugging Tips:**
- Use `console.log()` for debugging
- Check browser developer tools
- Verify field names and selectors
- Test incrementally with simple operations first

---

*This comprehensive reference covers all documented JavaScript APIs for ServiceDesk Plus customization. For additional support, refer to ManageEngine documentation and community forums.*