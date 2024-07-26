import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  target?: string;
  className?: string;
}
export default function Link(props: LinkProps) {
  const { href, children, className, target } = props;
  return (
    <a
      className={`hover:underline text-blue-600 visited:text-purple-600${
        className ? ` ${className}` : ""
      }`}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}
