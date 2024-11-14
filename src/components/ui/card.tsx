// components/ui/card.tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

interface CardContentProps {
  children: ReactNode;
}

export function CardContent({ children }: CardContentProps) {
  return <div className="p-4">{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h2 className={`text-xl font-medium text-gray-900 ${className}`}>{children}</h2>;
}

interface CardDescriptionProps {
  children: ReactNode;
}

export function CardDescription({ children }: CardDescriptionProps) {
  return <p className="text-sm text-gray-600">{children}</p>;
}
