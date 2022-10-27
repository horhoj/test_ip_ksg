export interface LeftMenuItemData {
  text: string;
  icon: JSX.Element;
  link?: string | null;
  onClick?: (() => void) | null;
  isParentOpen?: boolean | null;
}

export interface LeftMenuItemDataItem {
  id: number;
  data: LeftMenuItemData;
  children?: LeftMenuItemDataItem[] | null;
}
