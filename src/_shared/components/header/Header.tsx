/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Avatar, Dropdown, IconButton, Nav, NavProps } from "rsuite";
import AppSelectIcon from "@rsuite/icons/AppSelect";
import SearchIcon from "@rsuite/icons/Search";

export default function Header() {
  const [active, setActive] = React.useState("learn");

  const renderIconButton = (
    props: any,
    ref: React.Ref<HTMLElement> | undefined
  ) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        icon={<SearchIcon />}
        circle
        color="blue"
        appearance="primary"
      />
    );
  };

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Navbar
          props={{ appearance: "subtle", justified: true }}
          active={active}
          onSelect={setActive}
        />
      </HeaderWrapper>
      <IconButtonWrapper>
        <Dropdown renderToggle={renderIconButton} placement="leftStart">
          <Dropdown.Item icon={<SearchIcon />}>New File</Dropdown.Item>
          <Dropdown.Item icon={<SearchIcon />}>
            New File with Current Profile
          </Dropdown.Item>
          <Dropdown.Item icon={<SearchIcon />}>Download As...</Dropdown.Item>
          <Dropdown.Item icon={<SearchIcon />}>Export PDF</Dropdown.Item>
        </Dropdown>
      </IconButtonWrapper>
      <AvatarWrapper>
        <Avatar
          circle
          src="https://avatars.githubusercontent.com/u/12592949"
          alt="@superman66"
        />
      </AvatarWrapper>
    </MainWrapper>
  );
}

const Navbar = ({
  active,
  onSelect,
  ...props
}: {
  active: string;
  onSelect:
    | ((eventKey: any, event: React.SyntheticEvent<Element, Event>) => void)
    | undefined;
  props: NavProps;
}) => {
  const others = props.props;
  const navigate = useNavigate();

  const handleSelect = (
    eventKey: any,
    event: React.SyntheticEvent<Element, Event>
  ) => {
    onSelect && onSelect(eventKey, event);
    navigate(eventKey as string);
  };

  return (
    <Nav
      {...others}
      activeKey={active}
      onSelect={handleSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item eventKey="learn" icon={<AppSelectIcon />}>
        Learn
      </Nav.Item>
      <Nav.Item eventKey="teach">Teach</Nav.Item>
      <Nav.Item eventKey="plan">Plan</Nav.Item>
      <Nav.Item eventKey="assess">Assess</Nav.Item>
    </Nav>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  gap: 64px;
  transition: all 0.3s ease-in-out;
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  /* align-items: center; */
`;

const IconButtonWrapper = styled.div`
  margin-top: 8px;
`;
