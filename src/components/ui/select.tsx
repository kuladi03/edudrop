// components/ui/select.tsx
import { ReactNode } from "react";

interface SelectProps {
  children: ReactNode;
  onValueChange: (value: string) => void;
  defaultValue: string;
}

export function Select({ children, onValueChange, defaultValue }: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        defaultValue={defaultValue}
        onChange={(e) => onValueChange(e.target.value)}
        className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg text-gray-700"
      >
        {children}
      </select>
    </div>
  );
}

interface SelectItemProps {
  value: string;
  children: ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
  return (
    <option value={value} className="text-gray-700">
      {children}
    </option>
  );
}
