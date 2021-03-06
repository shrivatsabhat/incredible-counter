export interface BasicColor {
  Color?: 'PRIMARY' | 'SECONDARY' | 'TERNARY' | 'NONE';
}

export interface BasicSize {
  Size?: 'S' | 'M' | 'L' | 'XL';
}

export interface BasicFontSize {
  fontSize?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'bold'
    | 'normal';
}

export interface BasicStyle extends BasicColor, BasicSize, BasicFontSize {}
export interface OnClick {
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface OnFocus {
  onFocus?: React.FocusEventHandler<HTMLElement>;
}

export interface MouseEventHandler extends OnClick, OnFocus {}
