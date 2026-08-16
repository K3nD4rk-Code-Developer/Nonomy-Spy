export const DISPLAY_ORDER = 6;
export const SIDE_PANEL_WIDTH = 280;
export const TOPBAR_OFFSET = game.GetService("GuiService").GetGuiInset()[0];

export const IS_LOADED = "__NONOMYSPY_IS_LOADED__";
export const IS_ELEVATED = loadstring !== undefined;
export const HAS_FILE_ACCESS = readfile !== undefined;
export const IS_ACRYLIC_ENABLED = true;

const INTER_FONT_ASSET = "rbxassetid://12187365364";
export const InterFontSemi = new Font(INTER_FONT_ASSET, Enum.FontWeight.SemiBold, Enum.FontStyle.Normal);
export const InterFontMedium = new Font(INTER_FONT_ASSET, Enum.FontWeight.Medium, Enum.FontStyle.Normal);
