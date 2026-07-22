import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
}
interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
}
interface ActionButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  to?: never;
  href?: never;
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | ActionButtonProps;

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
  } = props;

  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      <span className="btn__label">{children}</span>
      {icon ? (
        <span className="btn__icon" aria-hidden="true">
          {icon}
        </span>
      ) : (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {content}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const external = props.href.startsWith("http");
    return (
      <a
        href={props.href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {content}
      </a>
    );
  }

  const actionProps = props as ActionButtonProps;
  return (
    <button
      type={actionProps.type ?? "button"}
      onClick={actionProps.onClick}
      className={cls}
    >
      {content}
    </button>
  );
}
