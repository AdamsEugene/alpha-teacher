/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { styled } from "styled-components";
import { Link, Outlet, useMatches } from "react-router-dom";
import { Breadcrumb } from "rsuite";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import Header from "../_shared/components/header/Header";

export default function Home() {
  const matches = useMatches();

  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) =>
      Boolean((match.handle as { crumb: () => string })?.crumb)
    )
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => ({
      name: (match.handle as { crumb: () => string })?.crumb(),
      path: match.pathname,
    }));
  // console.log(crumbs);

  const MyBreadcrumb = () =>
    crumbs.length > 1 ? (
      <Breadcrumb separator={<AngleRightIcon />}>
        {crumbs.slice(0, crumbs.length - 1).map((crumb, index) => (
          <Breadcrumb.Item as={NavLink} to={crumb.path} key={index}>
            {crumb.name}
          </Breadcrumb.Item>
        ))}
        <Breadcrumb.Item active>
          {crumbs[crumbs.length - 1].name}
        </Breadcrumb.Item>
      </Breadcrumb>
    ) : null;

  const NavLink = React.forwardRef<
    unknown,
    { to: string; children?: React.ReactNode }
  >((props, ref) => {
    const { to, children } = props;
    return (
      <Link
        to={to}
        ref={ref as React.Ref<HTMLAnchorElement> | undefined}
        children={children}
      />
    );
  });

  return (
    <HomeWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MyBreadcrumb />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  overflow-y: auto;
  height: calc(100vh);
`;

const HeaderWrapper = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -16px; /* ➜ the trick */

  /* padding: 1em; */
  padding-top: calc(24px);
  width: 100%;
  z-index: 999;
`;

const OutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(60%);
`;
