# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository is for developing, testing, and expanding Page Scripts that work inside ManageEngine ServiceDesk Plus. It contains comprehensive analysis, API documentation, and reference materials for the $CS JavaScript library, along with custom page scripts for ServiceDesk Plus customization.

## Repository Structure

```
sdp_2-1/
├── README.md                                                      # Main repository overview
├── CLAUDE.md                                                     # This file - Claude Code guidance
├── ServiceDesk Plus - Complete JavaScript API Reference.md      # Unified comprehensive API documentation
├── page_scripts_overview.md                                     # Business overview and guide
├── conversation_001_code_editor_analysis.md                     # Technical analysis session log
├── Field and form rules _ Javascript functions - Tabulated.pdf  # Original PDF source
├── scripts/                                                     # Custom page scripts (to be created)
├── examples/                                                    # Example implementations (to be created)
└── tests/                                                       # Testing utilities (to be created)
```

## Key Components

### Documentation Files
- **README.md**: Primary entry point with project overview, technology stack, and quick reference
- **ServiceDesk Plus - Complete JavaScript API Reference.md**: Unified comprehensive API documentation covering all JavaScript APIs ($CS Library, SDP Widget API, FAFR functions)
- **page_scripts_overview.md**: Business-focused guide for administrators and end users
- **conversation_001_code_editor_analysis.md**: Detailed log of the analysis process and findings

### Content Focus
- **ServiceDesk Plus Page Scripts**: JavaScript-based customization feature
- **$CS Library**: Custom API with methods for UI manipulation, field management, and user context
- **SDP Widget API**: Complete JavaScript API for custom widget development with external integrations
- **Field and Form Rules (FAFR)**: Comprehensive function library for form customization and event handling
- **CodeMirror Integration**: v5.30.0 editor implementation details
- **Ember.js Framework**: Integration patterns and implementation details

## Development Commands

Since Page Scripts are deployed directly in ServiceDesk Plus, there are no traditional build or test commands. However, the following practices should be followed:

### Development Workflow
1. **Create Scripts**: Develop JavaScript files in the `scripts/` directory
2. **Test Locally**: Use browser console or local HTML files for initial testing
3. **Deploy to SDP**: Copy script content into ServiceDesk Plus Page Scripts interface
4. **Validate**: Test in actual ServiceDesk Plus environment with different user roles

### Script Organization
- **scripts/**: Production-ready page scripts
- **examples/**: Sample implementations and templates  
- **tests/**: Local testing utilities and mock environments

### Key Areas of Knowledge
1. **Complete JavaScript API Reference**: All ServiceDesk Plus APIs in one unified document covering $CS Library, SDP Widget API, and FAFR functions
2. **Page Scripts Architecture**: Client-side JavaScript execution framework
3. **CodeMirror Editor**: Implementation details and integration patterns
4. **ServiceDesk Plus Structure**: File locations and integration points

### Reference Patterns
When referencing ServiceDesk Plus installation files, use these paths:
- CodeMirror Library: `/webapps/ROOT/components/codemirror/`
- Implementation: `/webapps/ROOT/ember/dist/assets/sdp.js`
- Help Documentation: `/webapps/ROOT/html/admin_helpcard_page_script.html`
- Field Form Rules: `/webapps/ROOT/scripts/FieldFormRules.js`

### Common Development Tasks
1. **Create New Page Scripts**: Develop JavaScript customizations using $CS library
2. **Develop Custom Widgets**: Build interactive widgets using SDP Widget API
3. **Field and Form Rules**: Create dynamic form behaviors using FAFR functions
4. **Role-Based Customizations**: Scripts targeting specific user types (Requesters/Technicians)
5. **UI Modifications**: Hide/show elements, add buttons, modify field behavior
6. **External Integrations**: Connect ServiceDesk Plus with external systems using SDP.connect()
7. **Event Handling**: Implement custom event listeners and triggers
8. **Workflow Automation**: Automate form interactions and validations

### Page Script Categories
- **Field Management**: Control field visibility, mandatory status, and values (FAFR functions)
- **Element Manipulation**: Show/hide UI elements and add custom content
- **User Context**: Role-based behavior and personalization
- **Custom Widgets**: Interactive components using SDP Widget API
- **Integration Scripts**: External API calls and system connections
- **Event-Driven Scripts**: Form events, tab changes, and click handlers
- **Automation Scripts**: Form validation and workflow automation

### Development Standards
- Use defensive coding practices - always check if elements exist before manipulating them
- Include error handling with try-catch blocks around $CS operations
- Test scripts with different user roles (Requester, Technician, Admin)
- Comment scripts thoroughly explaining the business logic
- Follow naming conventions: use descriptive file names and function names
- Validate user permissions before showing sensitive information

### Best Practices for Page Scripts
```javascript
// Always wrap $CS operations in try-catch
try {
    if ($CS.isRequester()) {
        $CS.hideField("INTERNAL_NOTES");
    }
} catch (error) {
    console.log("Error in page script:", error);
}

// Check element existence before manipulation
if ($CS.getValue("PRIORITY")) {
    var priority = $CS.getValue("PRIORITY");
    // Process priority value
}
```

## Important Notes

- Page Scripts execute client-side in the user's browser
- All customizations should be defensive and handle missing elements gracefully
- Test thoroughly across different browsers and ServiceDesk Plus versions
- Respect ManageEngine's licensing terms when working with ServiceDesk Plus
- The core $CS library implementation is not accessible in readable source code