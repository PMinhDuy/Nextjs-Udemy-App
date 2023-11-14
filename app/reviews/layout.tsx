import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function ReviewsLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>[review menubar]</div>
      {children}
    </div>
  );
}
