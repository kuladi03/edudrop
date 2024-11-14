import { ReactNode, useState } from "react";

// Tabs Component
interface TabsProps {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function Tabs({ children, value, onValueChange, className }: TabsProps) {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
}

// TabsList Component
interface TabsListProps {
  children: ReactNode;
}

export function TabsList({ children }: TabsListProps) {
  return <div className="flex space-x-4">{children}</div>;
}

// TabsTrigger Component
interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
  onClick: () => void;
}

export function TabsTrigger({ children, value, className, onClick }: TabsTriggerProps) {
  return (
    <button
      className={`py-2 px-4 text-sm font-medium rounded-t-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// TabsContent Component
interface TabsContentProps {
  children: ReactNode;
  value: string;
}

export function TabsContent({ children, value }: TabsContentProps) {
  return <div>{children}</div>;
}