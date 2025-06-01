import { cloneElement, useMemo, useState, type JSX } from 'react';
import { throttle } from 'lodash';

import useElementSize from '@/core/hooks/use-element-size';

export interface VirtualizerProps {
  rowHeight: number;
  children: Array<JSX.Element>;
  gap?: number;
}

const BUFFER_SIZE = 2; // Number of rows to render above and below the viewport

export default function Virtualizer({
  rowHeight,
  children,
  gap = 10,
}: VirtualizerProps) {
  const [containerRef, { height: containerHeight }] =
    useElementSize<HTMLUListElement>();

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const visibleChildren = useMemo(() => {
    const startIndex = Math.max(
      Math.floor(scrollPosition / rowHeight) - BUFFER_SIZE,
      0
    );

    const endIndex = Math.min(
      Math.ceil((scrollPosition + containerHeight) / rowHeight - 1) +
        BUFFER_SIZE,
      children.length - 1
    );

    return children.slice(startIndex, endIndex).map((child, index) =>
      cloneElement(child, {
        style: {
          position: 'absolute',
          top: (startIndex + index) * rowHeight + index * gap,
          left: 0,
          right: 0,
          height: rowHeight,
        },
      })
    );
  }, [children, containerHeight, gap, rowHeight, scrollPosition]);

  const onScroll = useMemo(
    () =>
      throttle(
        (e) => {
          setScrollPosition(e.target.scrollTop);
        },
        50,
        { leading: false }
      ),
    []
  );

  return (
    <ul
      onScroll={onScroll}
      style={{
        overflowY: 'scroll',
        position: 'relative',
      }}
      ref={containerRef}
      className='flex flex-col h-full p-0 overflow-y-scroll'
    >
      {visibleChildren}
    </ul>
  );
}
