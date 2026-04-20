"use client";

import Link, { LinkProps } from "next/link";
import {
  forwardRef,
  MouseEvent,
  type AnchorHTMLAttributes,
} from "react";
import { usePageTransition } from "@/components/providers/AppProviders";

type TransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    disabledTransition?: boolean;
  };

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  (
    { href, onClick, target, disabledTransition = false, ...props },
    ref,
  ) => {
    const { navigate } = usePageTransition();

    const pathname =
      typeof href === "string"
        ? href
        : href.pathname
          ? String(href.pathname)
          : "";

    const isExternal =
      target === "_blank" ||
      pathname.startsWith("http") ||
      pathname.startsWith("mailto:") ||
      pathname.startsWith("tel:");

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);

      if (
        disabledTransition ||
        event.defaultPrevented ||
        isExternal ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      navigate(typeof href === "string" ? href : pathname);
    };

    return (
      <Link
        ref={ref}
        href={href}
        target={target}
        onClick={handleClick}
        {...props}
      />
    );
  },
);

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;
