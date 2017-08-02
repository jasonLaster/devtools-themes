export type Theme = {
  displayName: string; // Display name (shown in PreferencesPanel)

  hidden?: boolean; // Special theme (eg Chrome or Firefox default) hidden from user in prefs panel

  /**
   * Base colors should increase in light-to-dark (or dark-to-light) order.
   * This is important for legibility/contrast because of how the colors are used.
   */
  base00: string; // Default Background
  base01: string; // Lighter Background (eg status bars)
  base02: string; // Borders, Context Menu, etc.
  base03: string; // Borders, Comments, etc.
  base04: string; // Lighter Foreground
  base05: string; // Default Foreground

  /**
   * These colors are used to highlight specific parts of the UI.
   * Typically they are used for syntax highlighting.
   * Some have special one-off usage (eg invalid regex input highlight).
   */
  special00: string; // Custom Coponents
  special01: string; // Integers, Booleans, etc.
  special02: string; // Strings, Arrays, etc.
  special03: string; // Details Pane Text
  special04: string; // Functions, Objects, etc.
  special05: string; // Special Text (eg breadcrumbs)
  special06: string; // XML Attributes
  special07: string; // Host Components

  /**
   * These colors are used for selection, hover, and filtering state.
   */
  state00: string; // Focused Background
  state01: string; // Blurred Background
  state03: string; // Hovered Background
  state02: string; // Focused Foreground
  state04: string; // Search Background
  state05: string; // Search Foreground
  state06: string; // Interactive Hover
};
