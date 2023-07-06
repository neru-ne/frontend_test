import { forwardRef } from "react";
import { css } from '@emotion/react'


type Props = {
  theme?: "dark" | "light" | "transparent" | "blue" | "error";
  variant?: "small" | "medium" | "large";
} & React.ComponentPropsWithoutRef<"button">;


const ModuleStyle = css`
  display: inline-block;
  padding: 0.5em 2em;
  /* padding: 0.5em 2.1em; */
  border-radius: 1em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition-duration: 0.2s;

&[data-variant="small"] {
  font-size: 1.2rem;
  /* color: red !important; */
}

&[data-variant="medium"] {
  font-size: 1.6rem;
}

&[data-variant="large"] {
  font-size: 2rem;
}

&[data-theme="dark"] {
  color: var(--white);
  border: 2px solid var(--light-gray);
  background-color: var(--gray);
}

&[data-theme="dark"]:hover {
  border-color: var(--white);
  background-color: var(--dark-navy);
}

&[data-theme="light"] {
  color: var(--white);
  border: 2px solid var(--middle-gray);
  background-color: var(--middle-gray);
}

&[data-theme="light"]:hover {
  color: var(--light-gray);
  background-color: var(--white);
}

&[data-theme="transparent"] {
  color: var(--light-gray);
  border: 2px solid transparent;
  background-color: transparent;
}

&[data-theme="transparent"]:hover {
  color: var(--white);
}

&[data-theme="blue"] {
  color: var(--white);
  border: 2px solid var(--light-gray);
  background-color: var(--blue);
}

&[data-theme="blue"]:hover {
  border-color: var(--white);
  background-color: var(--vivid-blue);
}

&[data-theme="error"] {
  color: var(--orange);
  border: 2px solid var(--orange);
  background-color: var(--dark-navy);
}

&[data-theme="error"] path {
  fill: var(--orange);
}

.module[data-theme="error"]:hover {
  color: var(--vivid-orange);
  border-color: var(--vivid-orange);
}

.module:disabled {
  opacity: 0.4;
  pointer-events: none;
}

@media screen and (max-width: 767px) {
  .module[data-variant="small"] {
    font-size: 1.2rem;
  }

  .module[data-variant="medium"] {
    font-size: 1.4rem;
  }

  .module[data-variant="large"] {
    font-size: 1.6rem;
  }
}
 `;

export const Button = forwardRef<HTMLButtonElement, Props>(function ButtonBase(
  { theme = "dark", variant = "medium", ...props },
  ref
) {
  return (
    <button
      {...props}
      ref={ref}
      css={ModuleStyle}
      data-theme={theme}
      data-variant={variant}
    />
  );
});
