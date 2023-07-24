/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Animation, TransitionProps } from "rsuite";

interface Props {
  setCurrent: (n: number) => void;
}

export default function Animate({
  children,
  inn = true,
  setCurrent,
  others,
}: {
  children: React.ForwardRefExoticComponent<
    ((Props | any) & TransitionProps) & React.RefAttributes<unknown>
  >;
  inn?: boolean;
  setCurrent?: (n: number) => void;
  others?: any;
}) {
  const Component = children;
  return (
    <Animation.Bounce
      in={inn}
      unmountOnExit
      // placement={"left"}
      timeout={5000}
    >
      {(props, ref) => (
        <Component {...props} setCurrent={setCurrent} {...others} ref={ref} />
      )}
    </Animation.Bounce>
  );
}
