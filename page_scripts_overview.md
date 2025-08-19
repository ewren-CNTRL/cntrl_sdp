# Page Scripts Overview - ServiceDesk Plus

## What is Page Scripts?

Page Scripts is a powerful customization feature in ManageEngine ServiceDesk Plus that allows administrators to modify the behavior and appearance of application pages using JavaScript. This feature provides extensive control over the user interface and functionality without requiring changes to the core application.

## Key Capabilities

### UI Customization
- **Element Visibility**: Show/hide buttons, fields, and sections
- **Dynamic Content**: Add custom buttons, widgets, and HTML elements
- **Field Behavior**: Make fields mandatory, read-only, or conditional
- **User Experience**: Customize interfaces based on user roles

### Business Logic
- **Conditional Logic**: Execute scripts based on field values or user context
- **Workflow Automation**: Automate form interactions and validations
- **Integration**: Connect with external systems and APIs
- **Data Manipulation**: Read, modify, and validate form data

## Technical Architecture

### Implementation Framework
- **Editor**: CodeMirror v5.30.0 for script editing
- **Runtime**: Client-side JavaScript execution
- **API**: Custom $CS library with 40+ methods
- **Integration**: Ember.js framework integration

### Execution Context
- **Client-Side**: Scripts run in the user's browser
- **DOM Access**: Full access to page elements
- **API Access**: Complete $CS library functionality
- **Security**: Role-based access controls

## Page Types Supported

### 1. Request List View (`rlv_page`)
Customize the requests list interface:
- Add bulk action buttons
- Modify column visibility
- Implement custom filters
- Show/hide elements based on request status

### 2. Request Details Page (`rdp_page`)
Enhance individual request pages:
- Add external integration buttons
- Modify field behavior based on request type
- Show/hide sections conditionally
- Implement custom validation logic

### 3. All Pages (`all_page`)
Apply universal customizations:
- Global navigation modifications
- Universal user interface changes
- Cross-page functionality
- Consistent branding elements

## Rule Configuration

### User Targeting
- **All Users**: Apply to everyone
- **Requesters**: Target end users only
- **Technicians**: Target support staff only
- **Custom Roles**: Role-based customization

### Execution Conditions
- **Page Load**: Execute when page loads
- **Field Change**: Trigger on specific field modifications
- **Form Submit**: Execute during form submission
- **Page Script**: Custom timing control

## Common Use Cases

### 1. Hide Sensitive Information
```javascript
// Hide technician-only fields from requesters
if ($CS.isRequester()) {
    $CS.hideField("INTERNAL_NOTES");
    $CS.hideElement("admin-panel");
}
```

### 2. Mandatory Field Logic
```javascript
// Make description mandatory for high priority requests
var priority = $CS.getValue("PRIORITY");
if (priority === "High" || priority === "Critical") {
    $CS.mandateField("DESCRIPTION");
}
```

### 3. External Integrations
```javascript
// Add button to create JIRA ticket
$CS.addButton("edit", "Create JIRA Ticket", function() {
    var requestId = $CS.getValue("WORKORDERID");
    window.open("/jira/create?req=" + requestId, "_blank");
}, {"class": "btn btn-primary btn-xs ml10"});
```

### 4. Dynamic Interface Changes
```javascript
// Show additional fields for specific categories
var category = $CS.getValue("CATEGORY");
if (category === "Hardware") {
    $CS.showField("ASSET_TAG");
    $CS.showField("WARRANTY_INFO");
} else {
    $CS.hideField("ASSET_TAG");
    $CS.hideField("WARRANTY_INFO");
}
```

### 5. Clean Interface
```javascript
// Hide empty sections and unanswered fields
$CS.hideUnansweredFields(["properties", "resources", "tasks"]);
$CS.hideElement(".empty-section");
```

## Benefits

### For Administrators
- **No Code Changes**: Customize without modifying core application
- **Version Safe**: Customizations survive application updates
- **Role-Based**: Different experiences for different user types
- **Real-Time**: Changes take effect immediately

### For End Users
- **Simplified Interface**: Hide irrelevant fields and options
- **Enhanced Workflow**: Custom buttons and automated actions
- **Better Experience**: Tailored interfaces for specific roles
- **Increased Efficiency**: Streamlined processes and fewer clicks

### For Organizations
- **Business Alignment**: Match application to business processes
- **Compliance**: Enforce mandatory fields and validation
- **Integration**: Connect with existing tools and systems
- **Standardization**: Consistent interfaces across teams

## Implementation Best Practices

### 1. Planning
- Identify specific customization requirements
- Map out user roles and their needs
- Plan for different page types and contexts
- Consider performance implications

### 2. Development
- Use descriptive rule names
- Comment scripts thoroughly
- Test with different user roles
- Implement error handling

### 3. Testing
- Test on all supported browsers
- Verify functionality across user roles
- Test with different data scenarios
- Validate performance impact

### 4. Deployment
- Start with pilot user groups
- Monitor for issues and feedback
- Document customizations for maintenance
- Plan for future updates

## Security Considerations

### Access Control
- Restrict rule creation to administrators
- Use role-based targeting appropriately
- Validate user permissions before showing sensitive data
- Implement proper authentication checks

### Script Security
- Avoid exposing sensitive information in client-side scripts
- Validate external API calls
- Use HTTPS for external integrations
- Implement proper error handling

## Limitations

### Technical Limitations
- Client-side execution only
- Limited to browser JavaScript capabilities
- No server-side processing
- Performance depends on script complexity

### Functional Limitations
- Cannot modify core business logic
- Limited to UI and client-side behavior
- Cannot access server-side data directly
- Dependent on existing $CS library functionality

## Maintenance

### Regular Tasks
- Review and update scripts for new ServiceDesk Plus versions
- Monitor performance impact of custom scripts
- Update external integration endpoints
- Document changes and customizations

### Version Upgrades
- Test all custom scripts after ServiceDesk Plus updates
- Update deprecated $CS library methods
- Verify browser compatibility
- Update documentation

## Getting Started

### Step 1: Access Page Scripts
1. Navigate to Admin → Developer Space → Page Scripts
2. Click "Create Rule" to start

### Step 2: Configure Rule
1. Enter rule name and description
2. Select user type (All/Requesters/Technicians)
3. Choose page scope (All/List View/Details Page)
4. Set execution conditions

### Step 3: Write Script
1. Use the CodeMirror editor
2. Reference sample scripts provided
3. Utilize $CS library methods
4. Test functionality thoroughly

### Step 4: Deploy
1. Save and enable the rule
2. Test with target user accounts
3. Monitor for issues
4. Refine as needed

## Resources

### Documentation Files
- **$CS Library Reference**: Complete method documentation
- **Code Editor Analysis**: Technical details about the editor
- **Conversation Logs**: Development process documentation

### Sample Scripts
- Basic element manipulation
- Field management examples
- User role-based customizations
- External integration patterns

### Support
- ServiceDesk Plus documentation
- ManageEngine community forums
- CodeMirror documentation for editor features
- JavaScript resources for development

## Conclusion

Page Scripts provides a powerful and flexible way to customize ServiceDesk Plus without modifying the core application. With proper planning, development, and testing, organizations can significantly enhance their ServiceDesk Plus experience and align the application with their specific business processes and requirements.