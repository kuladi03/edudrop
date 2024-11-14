// components/ui/select.tsx
import { ReactNode } from "react";

interface SelectProps {
  children: ReactNode;
  onValueChange: (value: string) => void;
  defaultValue: string;
}

export function Select({ children, onValueChange, defaultValue }: SelectProps) {
  return (
    <div className="relative">
      <select
        defaultValue={defaultValue}
        onChange={(e) => onValueChange(e.target.value)}
        className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg"
      >
        {children}
      </select>
    </div>
  );
}

interface SelectTriggerProps {
  children: ReactNode;
  className?: string;
}

export function SelectTrigger({ children, className }: SelectTriggerProps) {
  return <div className={`cursor-pointer ${className}`}>{children}</div>;
}

interface SelectContentProps {
  children: ReactNode;
}

export function SelectContent({ children }: SelectContentProps) {
  return <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg">{children}</div>;
}

interface SelectItemProps {
  value: string;
  children: ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
  return (
    <option value={value} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
      {children}
    </option>
  );
}

interface SelectValueProps {
  children: ReactNode;
}

export function SelectValue({ children }: SelectValueProps) {
  return <span className="text-sm text-gray-700">{children}</span>;
}
