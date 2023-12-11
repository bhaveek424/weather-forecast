import React from 'react';

export type ScrollableProps = {
  children: React.ReactNode;
};

function Scrollable({ children }: ScrollableProps) {
  return (
    <div className="w-full overflow-x-auto p-5 scrollbar-hide">
      <div className="flex flex-nowrap  gap-2 md:gap-5 ">{children}</div>
    </div>
  );
}

export default Scrollable;
