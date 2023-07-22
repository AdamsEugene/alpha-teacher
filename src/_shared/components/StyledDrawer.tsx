import React, { PropsWithChildren } from "react";
import { Drawer, Button, DrawerProps } from "rsuite";

interface StyledProps<T> {
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm?: (data?: T) => void;
}

export function StyledDrawer<T>(
  props: PropsWithChildren<StyledProps<T> & DrawerProps>
) {
  const { open, setOpen, children, onConfirm, title, ...others } = props;

  return (
    <Drawer open={open} onClose={() => setOpen(false)} {...others}>
      {title ? (
        <Drawer.Header>
          <Drawer.Title>{title}</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={() => {
                onConfirm && onConfirm();
                setOpen(false);
              }}
              appearance="primary"
            >
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
      ) : null}
      <Drawer.Body>{children}</Drawer.Body>
    </Drawer>
  );
}
