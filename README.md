# ServiceDesk Plus Analysis Repository

This repository contains comprehensive analysis and documentation of ManageEngine ServiceDesk Plus codebase, focusing on the Page Scripts feature and $CS JavaScript library.

## Repository Structure

```
sdp_2-1/
├── README.md                                                      # This file
├── CLAUDE.md                                                     # Claude Code guidance file
├── ServiceDesk Plus - Complete JavaScript API Reference.md      # Unified API documentation
├── page_scripts_overview.md                                     # Business overview and guide
├── conversation_001_code_editor_analysis.md                     # Technical analysis session log
└── Field and form rules _ Javascript functions - Tabulated.pdf  # Original PDF source
```

## Key Discoveries

### Code Editor Technology
- **Editor**: CodeMirror v5.30.0 with MIT License
- **Languages**: JavaScript, HTML, CSS, XML, Python, PowerShell
- **Features**: Syntax highlighting, auto-completion, code folding, linting
- **Integration**: Deep integration with Ember.js framework

### $CS JavaScript Library
- **Purpose**: Custom API for ServiceDesk Plus page manipulation
- **Methods**: 40+ documented methods for UI customization
- **Categories**: Element manipulation, field management, user context, dynamic content
- **Scope**: Client-side execution with full DOM access

### Page Scripts Feature
- **Capability**: JavaScript-based customization of ServiceDesk Plus pages
- **Targeting**: Role-based (All Users/Requesters/Technicians)
- **Scope**: Page-specific (All Pages/List View/Details Page)
- **Execution**: Multiple trigger conditions (page load, field change, form submit)

## Quick Reference

### Common $CS Methods
```javascript
// Element visibility
$CS.hideElement("selector");
$CS.showElement("selector");

// Field management
$CS.hideField("FIELDNAME");
$CS.showField("FIELDNAME");
$CS.getValue("FIELDNAME");
$CS.setValue("FIELDNAME", "value");

// Dynamic content
$CS.addButton("selector", "name", callback);
$CS.addElement("selector", htmlContent);
$CS.hideUnansweredFields(["section"]);

// User context
$CS.getLoggedInUserName();
$CS.isRequester();
$CS.isTechnician();
```

### Sample Customizations
1. **Hide sensitive fields from requesters**
2. **Add external integration buttons**
3. **Make fields mandatory based on conditions**
4. **Clean up interface by hiding empty sections**
5. **Add custom widgets and content**

## File Locations (ServiceDesk Plus Installation)

### Core Editor Files
- **CodeMirror Library**: `/webapps/ROOT/components/codemirror/`
- **Implementation**: `/webapps/ROOT/ember/dist/assets/sdp.js`
- **Help Documentation**: `/webapps/ROOT/html/admin_helpcard_page_script.html`

### Key Implementation Points
- **Create Rule Button**: Line 5118 in sdp.js
- **Script Insertion**: `addScriptToTextBlock()` function at line 5230
- **$CS Usage**: Throughout `/webapps/ROOT/scripts/FieldFormRules.js`

## Getting Started

### For Developers
1. Read `ServiceDesk Plus - Complete JavaScript API Reference.md` for comprehensive API documentation
2. Check `conversation_001_code_editor_analysis.md` for detailed technical analysis
3. Use the unified reference for all development needs: Page Scripts, Widgets, and FAFR

### For Administrators
1. Start with `page_scripts_overview.md` for business overview and implementation guidance
2. Use `ServiceDesk Plus - Complete JavaScript API Reference.md` for function reference
3. Follow implementation best practices in the unified documentation

### For Users
1. Access: Admin → Developer Space → Page Scripts
2. Click "Create Rule" to start customizing
3. Reference the complete API documentation for all available functions
4. Use provided examples as templates for common use cases

## Use Cases

### Business Benefits
- **Streamlined Workflows**: Hide irrelevant fields, add shortcuts
- **Role-Based Interfaces**: Different experiences for different users
- **External Integrations**: Connect with JIRA, monitoring tools, etc.
- **Compliance**: Enforce mandatory fields and validation

### Technical Applications
- **UI Customization**: Modify appearance and behavior
- **Process Automation**: Automate form interactions
- **Data Integration**: Connect with external systems
- **User Experience**: Simplify complex interfaces

## Architecture

### Technology Stack
- **Frontend**: Ember.js with CodeMirror editor
- **Scripting**: JavaScript with custom $CS library
- **Execution**: Client-side in user browser
- **Storage**: Rules stored in ServiceDesk Plus database

### Security Model
- **Access Control**: Role-based rule creation and execution
- **Execution Context**: Browser-based with DOM access
- **API Restrictions**: Limited to $CS library capabilities
- **Version Safety**: Customizations survive application updates

## Analysis Process

This repository documents a comprehensive analysis session that involved:

1. **File System Exploration**: Mapping ServiceDesk Plus directory structure
2. **Code Investigation**: Identifying editor implementation and integration points
3. **API Discovery**: Cataloging all $CS library methods from usage patterns
4. **Documentation Creation**: Comprehensive reference materials

## Limitations

### Technical Constraints
- Client-side execution only (no server-side processing)
- Limited to browser JavaScript capabilities
- Core $CS library implementation not accessible in source code
- Performance depends on script complexity

### Access Restrictions
- Rule creation requires administrative privileges
- Some methods may have undocumented parameters
- Behavior may vary across ServiceDesk Plus versions

## Contributing

This repository serves as a reference for ServiceDesk Plus customization. Contributions welcome for:
- Additional $CS method discoveries
- New use case examples
- Implementation patterns
- Best practices documentation

## Version Information

- **ServiceDesk Plus**: Analysis based on current installation
- **CodeMirror**: Version 5.30.0
- **Analysis Date**: August 19, 2025
- **Browser Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)

## Support Resources

- **Official Documentation**: ManageEngine ServiceDesk Plus documentation
- **Community**: ManageEngine community forums
- **CodeMirror**: https://codemirror.net/doc/manual.html
- **JavaScript**: MDN Web Docs for JavaScript reference

## License

This repository contains analysis and documentation of proprietary software. All findings are for educational and reference purposes. Respect ManageEngine's licensing terms when using ServiceDesk Plus.

---

**Last Updated**: August 19, 2025  
**Analysis Version**: 1.0  
**Status**: Comprehensive analysis complete
