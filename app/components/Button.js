"use client";

import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "default",
  className = "",
}) {
  const baseStyles = "btn";

  const variants = {
    default: "btn-primary",
    ghost: "btn-ghost",
    outline: "btn-outline",
    link: "btn-link",
    neutral: "btn-neutral",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return <button className={buttonClass}>{children}</button>;
}
