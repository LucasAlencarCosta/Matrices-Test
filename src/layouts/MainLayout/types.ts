import type { ReactNode } from "react";

export interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export interface LayoutHeaderProps {
  title?: string;
  showNavigation?: boolean;
}

export interface LayoutFooterProps {
  showLinks?: boolean;
}

export interface LayoutSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

// Layout variant types
export type LayoutVariant = "default" | "full-width" | "sidebar" | "minimal";

// Navigation item type
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  isActive?: boolean;
}
