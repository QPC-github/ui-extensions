export type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export interface Action {
  /**
   * Action label text.
   */
  content: string;
  /**
   * Callback for the action.
   */
  onAction?(): void;
}

export interface DisableableAction extends Action {
  disabled?: boolean;
}
export interface DestructableAction extends Action {
  /**
   * Indicates a dangerous or potentially negative action.
   */
  destructive?: boolean;
}

export type ValueOf<T> = T[keyof T];
