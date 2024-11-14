// components/ui/Tabs.tsx
import { ReactNode, FC } from "react";

// Tabs Component
interface TabsProps {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({ children, className }) => {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
};

// TabsList Component
interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList: FC<TabsListProps> = ({ children, className }) => {
  return <div className={`flex space-x-4 ${className}`}>{children}</div>;
};

// TabsTrigger Component
interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  isSelected: boolean;
  onClick: (value: string) => void;
  className?: string;
}

export const TabsTrigger: FC<TabsTriggerProps> = ({
  children,
  value,
  isSelected,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`py-2 px-4 text-sm font-medium rounded-t-lg ${
        isSelected ? "text-blue-600 border-b-2 border-blue-600" : "text-black"
      } ${className}`}
    >
      {children}
    </button>
  );
};

// TabsContent Component
interface TabsContentProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

export const TabsContent: FC<TabsContentProps> = ({ children, isActive, className }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"} p-4 rounded-lg ${className}`}>
      {children}
    </div>
  );
};
