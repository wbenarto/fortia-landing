'use client';

import { Children, ReactNode } from 'react';

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

function getGridColsClass(count: number) {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2) return 'grid-cols-1 lg:grid-cols-2';
  if (count === 3) return 'grid-cols-1 lg:grid-cols-3';
  if (count === 4) return 'grid-cols-1 lg:grid-cols-4';
  if (count === 5) return 'grid-cols-1 lg:grid-cols-5';
  return 'grid-cols-1 lg:grid-cols-6';
}

export default function GridLayout({
  children,
  className = '',
}: GridLayoutProps) {
  const count = Children.toArray(children).length;
  const colsClass = getGridColsClass(count);
  return (
    <div
      className={`w-full h-full grid ${colsClass} gap-4 md:gap-6 auto-rows-[1fr] ${className}`}
    >
      {children}
    </div>
  );
}

interface GridItemProps {
  children: ReactNode;
  className?: string;
}

export function GridItem({ children, className = '' }: GridItemProps) {
  return (
    <div className={`w-full h-full flex flex-col  p-4 md:p-6  ${className}`}>
      {children}
    </div>
  );
}
