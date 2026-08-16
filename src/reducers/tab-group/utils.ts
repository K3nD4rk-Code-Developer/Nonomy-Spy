import { TabGroupColumn, TabType } from "./model";
import { TextService } from "@rbxts/services";
import { InterFontMedium } from "constants";

export const MAX_TAB_CAPTION_WIDTH = 150;

export function createTabColumn(id: string, caption: string, tabType: TabType, canClose = true, scriptContent?: string): TabGroupColumn {
	return { id, caption, type: tabType, canClose, scriptContent };
}

export function getTabCaptionWidth(tab: TabGroupColumn) {
	const params = new Instance("GetTextBoundsParams");
	params.Text = tab.caption;
	params.Size = 11;
	params.Font = InterFontMedium;
	params.Width = 300;

	const textSize = TextService.GetTextBoundsAsync(params);
	return math.min(textSize.X, MAX_TAB_CAPTION_WIDTH);
}

export function getTabWidth(tab: TabGroupColumn) {
	const captionWidth = getTabCaptionWidth(tab);
	const iconWidth = 16 + 6;
	const closeWidth = tab.canClose ? 16 + 6 : 3;
	return 8 + iconWidth + captionWidth + closeWidth + 8;
}

export function getTabOffset(tabs: TabGroupColumn[], tab: TabGroupColumn) {
	let offset = 0;
	for (const t of tabs) {
		if (t === tab) break;
		offset += getTabWidth(t);
	}
	return offset;
}
