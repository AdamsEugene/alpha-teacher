/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Affix, Nav } from "rsuite";
import { Link, animateScroll as scroll, Element } from "react-scroll";
import { styled } from "styled-components";

export default function PreviewDetails() {
  const LinkItem = React.forwardRef((props: any, ref) => {
    return (
      <Link
        {...props}
        ref={ref as any}
        activeClass="active"
        to={props.to as string}
        spy
        smooth
        offset={-70}
        duration={500}
      />
    );
  });

  return (
    <>
      <Affix top={200}>
        <Nav appearance="subtle">
          <Nav.Item {...{ to: "section1" }} as={LinkItem}>
            About
          </Nav.Item>
          <Nav.Item {...{ to: "section2" }} as={LinkItem}>
            How It Works
          </Nav.Item>
          <Nav.Item {...{ to: "section3" }} as={LinkItem}>
            Courses
          </Nav.Item>
          <Nav.Item {...{ to: "section4" }} as={LinkItem}>
            Instructors
          </Nav.Item>
          <Nav.Item {...{ to: "section5" }} as={LinkItem}>
            Enrollment Options
          </Nav.Item>
          <Nav.Item {...{ to: "section6" }} as={LinkItem}>
            FAQ
          </Nav.Item>
        </Nav>
      </Affix>
      <Content>
        <Element name="section1" className="element">
          section 1
        </Element>
        <Element name="section2" className="element">
          section 2
        </Element>
        <Element name="section3" className="element">
          section 3
        </Element>
        <Element name="section4" className="element">
          section 4
        </Element>
        <Element name="section5" className="element">
          section 5
        </Element>
        <Element name="section5" className="element">
          section 6
        </Element>
      </Content>
    </>
  );
}

const Wrapper = styled.div`
  .element {
    height: 1000px;
    background-color: #120c0c;
    font-size: 45px;
    border-top: 1px solid #000;
    padding-top: 55px;
    padding-left: 10px;
  }
`;

const Content = styled.div`
  .element {
    height: 1000px;
    background-color: #120c0c;
    font-size: 45px;
    border-top: 1px solid #000;
    padding-top: 55px;
    padding-left: 10px;
  }
`;
