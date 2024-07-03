This document outlines the coding conventions for the Xolo-Diary project, ensuring consistency, clarity, and maintainability of the codebase.

# Version Control and Git Messages

- **Commit Message Guidelines:**
    - **Clarity and Concision:** Prioritize clear and concise messages that accurately reflect the changes made. Descriptive details are encouraged, but avoid unnecessary complexity.
    - **Focus:** Strive for a focused message that identifies the core change and its impact.
- **Common Message Terms:**
    - **ADDED:** Introduced new features or functionality.
    - **INITIALIZE** or **INIT:** Established the initial project structure.
    - **MODIFIED:** Altered existing code or functionality.
    - **FIX:** Resolved a bug or error.
    - **REVAMP:** Significantly restructured or refactored existing code.
    - **UNDO:** Reverted previous changes.
    - **REDO:** Reintroduced previously undone changes.
    - **MERGE:** Combined code changes from different branches.
    - **SAVING:** Committing temporary or in-progress changes (use sparingly).


### File structure

The project utilizes a clear directory structure for organization and maintainability.
```text
xolo-diary/
├── .git (Git version control system)
├── .obsidian (Optional - configuration files for Obsidian note-taking app)
├── .vscode (Optional - configuration files for Visual Studio Code)
├── .xolonotes (Project-specific application files)
│  ├── component (Reusable UI components)
│  │  ├── button (Button component files)
│  │  ├── card (Card component files)
│  │  ├── footer (Footer component files)
│  │  ├── header (Header component files)
│  │  └── modal (Modal component files)
│  ├── images (Project images and icons)
│  │  ├── icons (SVG icons)
│  │  ├── background-desktop.png (Desktop background image)
│  │  ├── favc.ico (Favicon)
│  │  └── landscape.png (Landscape image)
│  ├── templates (HTML templates for different page layouts)
│  │  ├── journal (Journal page template)
│  │  │  ├── journal.css (CSS styles for journal page)
│  │  │  └── journal.js (JavaScript code for journal page)
│  │  └── main (Main page template)
│  │    ├── main.css (CSS styles for main page)
│  │    └── main.js (JavaScript code for main page)
│  ├── common.css (Global CSS styles)
│  ├── fonts.css (Font styles)
│  ├── script.js (Global JavaScript code)
│  └── utility.css (Utility CSS classes)
├── .gitignore (Files to be excluded from version control)
├── 3rd_Mission.pdf (Optional - External document)
├── Convention_guide.md (This convention guide document)
├── index.html (Main entry point of the application)
├── journal.html (Journal page)
└── ReadMe.md (Project overview and instructions)
```


### Coding conventions

This section details specific coding conventions for different file types.

- **Naming Conventions:**
    - **Directories:** Use kebab-case (lowercase words separated by hyphens) for directory names (e.g., `component`, `images`).
    - **Components:** Use PascalCase (words starting with uppercase) for component directories and files (e.g., `Button`, `button.js`).
    - **Variables and Functions:**
        - **JavaScript:** Use camelCase (lowercase words with first word lowercase and subsequent words capitalized) (e.g., `someVariable`, `fooBarFunction`).
        - **CSS Variables:** Use snake_case (lowercase words separated by underscores) for easier identification of longer names (e.g., `primary_color`).
        - **CSS Classes:** Use COBOL case (uppercase words separated by hyphens) for CSS classes (e.g., `.some-container-class`).
        - **IDs:** Use camelCase for HTML element IDs to maintain consistency with JavaScript (e.g., `modalOne`).

- **File Organization:**
    - Store all application-specific files under the `.xolonotes` directory. Avoid placing application files outside this directory.
    - Use double underscores (`__`) at the beginning of filenames for partial CSS files (e.g., `__partialStyle.css`) to differentiate them from regular stylesheets.

Following these guidelines will ensure a well-structured, consistent, and maintainable codebase for the Xolo-Diary project.


### **Solo Development:**

If you're a sole developer, you can leverage the `main` branch for active development. This simplifies the workflow and avoids unnecessary branching overhead. However, it's still recommended to follow good commit message practices for clear version history.

### **Team Development (Recommended):**

In a team environment, it's advisable to adopt a more structured Gitflow branching strategy:

- **`main` branch:** This branch represents the stable, production-ready version of your code. **Direct commits to `main` should be strictly avoided.**
- **`develop` branch:** This serves as the integration branch for ongoing development. Feature branches should be branched off from `develop`.
- **Feature branches:** Each developer creates a dedicated feature branch for their assigned task or bug fix. Feature branches should have descriptive names that reflect the implemented feature (e.g., `feature/add-user-login`). Once development is complete and thoroughly tested, the feature branch is merged back into `develop`.
- **Hotfix branches (optional):** If a critical bug fix is needed in production, a hotfix branch can be created from `main`. After fixing the issue, the hotfix branch is merged back to both `main` and `develop`.

Here's a table summarizing the workflow:

|Branch|Purpose|Actions|
|---|---|---|
|`main`|Production-ready code|Merged stable releases from `develop`|
|`develop`|Integration branch for ongoing development|Merged feature branches, serves as base for `main`|
|Feature branches|Implement specific features or bug fixes|Created from `develop`, merged back to `develop`|
|Hotfix branches (optional)|Critical bug fixes in production|Created from `main`, merged back to `main` and `develop`|
