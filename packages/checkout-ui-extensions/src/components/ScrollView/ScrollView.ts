import {createRemoteComponent} from '@remote-ui/core';

import {MaybeConditionalStyle} from '../../style';

export interface ScrollViewEvent {
  position: {
    /** The current scroll horizontal position, in pixels.*/
    inline: number;
    /** The current scroll vertical position, in pixels.*/
    block: number;
  };
  scrolledTo: {
    /** A flag to indicate if the scroll is at the start or end of cross axis. */
    inline: 'start' | 'end' | null;
    /** A flag to indicate if the scroll is at the start or end of main axis. */
    block: 'start' | 'end' | null;
  };
}

export interface ScrollViewProps {
  /**
   * Provides a hint to the user that the area is scrollable.
   *
   * `pill`: renders a pill with a message at the end of the the scrollable area. It disappear as soon as the user starts scrolling.
   *
   * `innerShadow`: renders an inner visual hint to indicate that the content is scrollable.
   */
  hint?: 'innerShadow' | {type: 'pill'; content: string};
  /**
   * Adjust the minimum block size.
   *
   * `number`: size in pixels.
   *
   * `` `${number}%` ``: size in percentages.
   *
   * `fill`: takes all the available space.
   */
  // eslint-disable-next-line prettier/prettier
  minBlockSize?: MaybeConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * Adjust the maximum block size.
   *
   * `number`: size in pixels.
   *
   * `` `${number}%` ``: size in percentages.
   *
   * `fill`: takes all the available space.
   */
  maxBlockSize?: MaybeConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * Adjust the minimum inline size.
   *
   * `number`: size in pixels.
   *
   * `` `${number}%` ``: size in percentages.
   *
   * `fill`: takes all the available space.
   */
  minInlineSize?: MaybeConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * Adjust the maximum inline size.
   *
   * `number`: size in pixels.
   *
   * `` `${number}%` ``: size in percentages.
   *
   * `fill`: takes all the available space.
   */
  maxInlineSize?: MaybeConditionalStyle<number | `${number}%` | 'fill'>;
  /**
   * The direction on which the content is scrollable.
   *
   * `block`:
   * Indicates that the content is scrollable on the main axis.
   *
   * `inline`:
   * Indicates that the content is scrollable on the cross axis.
   *
   * @defaultValue block
   */
  direction?: 'block' | 'inline';
  /**
   * Scroll to a specific position or to an element.
   */
  scrollTo?: number | HTMLElement;
  /**
   * Callback function that is called when the scroll position changes.
   * Allows to listen to events inside the component
   * returning the position of the scroll.
   *
   * Note:
   * On touch devices, the onScroll event is fired only when the user finishes scrolling
   * which differs from non touch devices, where the onScroll event is fired when the user scrolls
   */
  onScroll?: (args: ScrollViewEvent) => void;
  /**
   * Callback function that is called when the scroll position reaches one of the edges.
   */
  onScrolledToEdge?: (args: ScrollViewEvent) => void;
}

export const ScrollView = createRemoteComponent<'ScrollView', ScrollViewProps>(
  'ScrollView',
);