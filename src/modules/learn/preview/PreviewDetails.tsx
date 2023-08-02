/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Affix,
  Button,
  Divider,
  FlexboxGrid,
  List,
  Nav,
  Panel,
  Progress,
  Rate,
  Stack,
  Tag,
  TagGroup,
} from "rsuite";
import { Link, Element } from "react-scroll";
import { styled } from "styled-components";
import { GiTeacher } from "react-icons/gi";
import { HiInformationCircle } from "react-icons/hi";
import { GiBookCover } from "react-icons/gi";
import { Icon } from "@rsuite/icons";
import OffRoundIcon from "@rsuite/icons/OffRound";
import TimeIcon from "@rsuite/icons/Time";
import CheckIcon from "@rsuite/icons/Check";

import Typography from "../../../_shared/components/Typography";
import InstructorList from "./InstructorList";
import { EnrollButton } from "./@styles";
import CustomCarousel from "../../../_shared/components/CustomCarousel";
import { StyledDrawer } from "../../../_shared/components/StyledDrawer";
import AllReviews from "./AllReviews";

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

export default function PreviewDetails() {
  const [moreAbout, setMoreAbout] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      {/* <Divider /> */}
      <Affix top={200}>
        <Nav appearance="subtle">
          <Nav.Item {...{ to: "section1" }} as={LinkItem}>
            About
          </Nav.Item>
          <Nav.Item {...{ to: "section4" }} as={LinkItem}>
            Instructors
          </Nav.Item>
          <Nav.Item {...{ to: "section3" }} as={LinkItem}>
            Syllabus
          </Nav.Item>
          <Nav.Item {...{ to: "section3" }} as={LinkItem}>
            Reviews
          </Nav.Item>
          <Nav.Item {...{ to: "section5" }} as={LinkItem}>
            Enrollment Options
          </Nav.Item>
          <Nav.Item {...{ to: "section6" }} as={LinkItem}>
            FAQ
          </Nav.Item>
        </Nav>
      </Affix>
      <Divider />
      <Content>
        <Element name="section1" className="element">
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item colspan={16}>
              <Panel
                header={
                  <Headers>
                    <h3>About this course</h3>
                    <Typography $color="grey">
                      1,186,085 recent views
                    </Typography>
                  </Headers>
                }
              >
                <HideText $more={moreAbout}>
                  <Typography>
                    In the first course of the Deep Learning Specialization, you
                    will study the foundational concept of neural networks and
                    deep learning. By the end, you will be familiar with the
                    significant technological trends driving the rise of deep
                    learning; build, train, and apply fully connected deep
                    neural networks; implement efficient (vectorized) neural
                    networks; identify key parameters in a neural network’s
                    architecture; and apply deep learning to your own
                    applications. The Deep Learning Specialization is our
                    foundational program that will help you understand the
                    capabilities, challenges, and consequences of deep learning
                    and prepare you to participate in the development of
                    leading-edge AI technology. It provides a pathway for you to
                    gain the knowledge and skills to apply machine learning to
                    your work, level up your technical career, and take the
                    definitive step in the world of AI.
                  </Typography>
                </HideText>
                <Button
                  appearance="link"
                  color="cyan"
                  onClick={() => setMoreAbout((p) => !p)}
                >
                  {!moreAbout ? "See All" : "See Less"}
                </Button>
              </Panel>
              <SkillsWrapper>
                <Panel header={"SKILLS YOU WILL GAIN"}>
                  <TagGroup>
                    <Tag size="lg">Deep Learning</Tag>
                    <Tag size="lg">Artificial Neural Network</Tag>
                    <Tag size="lg">Backpropagation</Tag>
                    <Tag size="lg">Python Programming</Tag>
                    <Tag size="lg">Neural Network Architecture</Tag>
                    <Tag size="lg">architecture</Tag>
                    <Tag size="lg">machine learning</Tag>
                    <Tag size="lg">definitive</Tag>
                    <Tag size="lg">consequences</Tag>
                  </TagGroup>
                </Panel>
              </SkillsWrapper>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <List bordered>
                <List.Item>
                  <Stack spacing={12} alignItems="flex-start">
                    <IconWrapper>
                      <TimeIcon />
                    </IconWrapper>
                    <Stack direction="column" alignItems="flex-start">
                      <h4>Flexible deadlines</h4>
                      <Typography>
                        Reset deadlines in accordance to your schedule.
                      </Typography>
                    </Stack>
                  </Stack>
                </List.Item>
                <List.Item>
                  <Stack spacing={12} alignItems="flex-start">
                    <IconWrapper>
                      <TimeIcon />
                    </IconWrapper>
                    <Stack direction="column" alignItems="flex-start">
                      <h4>Flexible deadlines</h4>
                      <Typography>
                        Reset deadlines in accordance to your schedule.
                      </Typography>
                    </Stack>
                  </Stack>
                </List.Item>
                <List.Item>
                  <Stack spacing={12} alignItems="flex-start">
                    <IconWrapper>
                      <TimeIcon />
                    </IconWrapper>
                    <Stack direction="column" alignItems="flex-start">
                      <h4>Flexible deadlines</h4>
                      <Typography>
                        Reset deadlines in accordance to your schedule.
                      </Typography>
                    </Stack>
                  </Stack>
                </List.Item>
                <List.Item>
                  <Stack spacing={12} alignItems="flex-start">
                    <IconWrapper>
                      <TimeIcon />
                    </IconWrapper>
                    <Stack direction="column" alignItems="flex-start">
                      <h4>Flexible deadlines</h4>
                      <Typography>
                        Reset deadlines in accordance to your schedule.
                      </Typography>
                    </Stack>
                  </Stack>
                </List.Item>
                <List.Item>
                  <Stack spacing={12} alignItems="flex-start">
                    <IconWrapper>
                      <TimeIcon />
                    </IconWrapper>
                    <Stack direction="column" alignItems="flex-start">
                      <h4>Flexible deadlines</h4>
                      <Typography>
                        Reset deadlines in accordance to your schedule.
                      </Typography>
                    </Stack>
                  </Stack>
                </List.Item>
              </List>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Element>
        <Divider />
        <Element name="section2" className="element">
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={24}>
              <Panel
                header={
                  <Headers>
                    <h3>Instructors</h3>
                    <Stack spacing={8}>
                      <Typography $color="grey">Instructor rating</Typography>
                      <Icon as={GiTeacher} color="yellow" />
                      <Typography $color="active">4.91/5</Typography>
                      <Typography>(22,134 Ratings)</Typography>
                      <Icon as={HiInformationCircle} color="yellow" />
                    </Stack>
                  </Headers>
                }
              >
                <Stack spacing={16} direction="column">
                  <Stack wrap spacing={24}>
                    <InstructorList img="https://avatars.githubusercontent.com/u/1203827" />
                    <InstructorList img="https://avatars.githubusercontent.com/u/15609339" />
                    <InstructorList img="https://avatars.githubusercontent.com/u/10924138" />
                  </Stack>
                  <Panel header="OFFERED BY">
                    <Stack spacing={72}>
                      <IconBig>
                        <OffRoundIcon />
                      </IconBig>
                      <Stack direction="column" alignItems="flex-start">
                        <Typography $variant="subtitle">
                          DeepLearning.AI
                        </Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis repellendus ullam, corrupti assumenda
                          numquam optio rem, error laboriosam reprehenderit modi
                          id animi, molestiae harum eius excepturi provident
                          earum dolorum accusamus.
                        </Typography>
                      </Stack>
                    </Stack>
                  </Panel>
                </Stack>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Element>
        <Divider />
        <Element name="section3" className="element">
          <Panel
            header={
              <Headers>
                <Typography $variant="title">
                  Syllabus - What you will learn from this course
                </Typography>
                <Typography>Content Rating 👍 97% (208,503 ratings)</Typography>
              </Headers>
            }
          >
            <FlexboxGrid justify="space-between">
              <FlexboxGrid.Item colspan={4}>
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Typography $variant="subtitle">Section 1</Typography>
                </Stack>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={20}>
                <Stack direction="column" alignItems="flex-start" spacing={8}>
                  <Stack spacing={12}>
                    <IconWrapper>
                      <TimeIcon />
                    </IconWrapper>
                    <Typography>2 hours to complete</Typography>
                  </Stack>
                  <Typography $variant="subtitle">
                    Introduction to Deep Learning
                  </Typography>
                  <Typography>
                    Analyze the major trends driving the rise of deep learning,
                    and give examples of where and how it is applied today.
                  </Typography>
                  <Stack spacing={8}>
                    <Icon as={GiBookCover} />
                    <Typography>6 videos (Total 74 min)</Typography>
                    <Typography $color="grey">
                      , 2 readings, 3 quizzes
                    </Typography>
                    <Typography $color="active">See All</Typography>
                  </Stack>
                </Stack>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Panel>
        </Element>
        <Divider />
        <Element name="section4" className="element">
          <Panel
            header={
              <FlexboxGrid justify="space-between">
                <FlexboxGrid.Item colspan={6}>
                  <h3>REVIEWS</h3>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={16}>
                  <h4>TOP REVIEWS FROM NEURAL NETWORKS AND DEEP LEARNING</h4>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            }
          ></Panel>
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item colspan={6}>
              <Stack
                justifyContent="flex-start"
                direction="column"
                alignItems="flex-start"
              >
                <Rate readOnly defaultValue={2.5} allowHalf />
                <ProgressWrapper>
                  <Progress.Line percent={30} strokeColor="#daff07" />
                  <Progress.Line percent={30} strokeColor="#07ffb5" />
                  <Progress.Line percent={50} strokeColor="#07ff6a" />
                  <Progress.Line percent={100} strokeColor="#07d6ff" />
                  <Progress.Line percent={100} strokeColor="#ea07ff" />
                </ProgressWrapper>
              </Stack>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={16}>
              <Stack direction="column" alignItems="flex-start" spacing={16}>
                <CustomCarousel />
                <Button
                  onClick={() => setOpenDrawer(true)}
                  appearance="primary"
                  color="cyan"
                >
                  View All Reviews
                </Button>
              </Stack>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Element>
        <Divider />
        <Element name="section5" className="element">
          <Panel header={<h3>Enrolment Option</h3>}>
            <FlexboxGrid justify="space-between">
              <FlexboxGrid.Item colspan={6}>
                <Stack direction="column" alignItems="flex-start" spacing={16}>
                  <Stack spacing={8}>
                    <CheckIcon />
                    <Typography>
                      This Course Plus the Full Specialization
                    </Typography>
                  </Stack>
                  <Stack spacing={8}>
                    <CheckIcon />
                    <Typography>Shareable Certificates</Typography>
                  </Stack>
                  <Stack spacing={8}>
                    <CheckIcon />
                    <Typography>Self-Paced Learning Option</Typography>
                  </Stack>
                  <Stack spacing={8}>
                    <CheckIcon />
                    <Typography>Course Videos & Readings</Typography>
                  </Stack>
                  <Stack spacing={8}>
                    <CheckIcon />
                    <Typography>Practice Quizzes</Typography>
                  </Stack>
                  <Stack spacing={8}>
                    <CheckIcon />
                    <Typography>
                      Graded Assignments with Peer Feedback
                    </Typography>
                  </Stack>
                  <Stack spacing={8}>
                    <CheckIcon />
                    <Typography>Graded Quizzes with Feedback</Typography>
                  </Stack>
                  <Stack spacing={8}>
                    <CheckIcon />
                    <Typography>Graded Programming Assignments</Typography>
                  </Stack>
                  <EnrollButton>
                    <Button appearance="primary" size="lg" color="red">
                      <Stack spacing={6} direction="column">
                        <Typography>Enroll for free</Typography>
                        <Typography>Start Jul 24</Typography>
                      </Stack>
                    </Button>
                  </EnrollButton>
                </Stack>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={16}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur quae nihil animi facilis, necessitatibus blanditiis
                quidem exercitationem, eaque reprehenderit voluptatum alias vero
                culpa commodi quod itaque nobis velit sed modi?
              </FlexboxGrid.Item>
              <Typography>1,211,196 already enrolled</Typography>
              <Typography>
                You can audit this course for free. When you audit a course, you
                can access the course materials without graded assignments or
                the ability to earn a certificate.
              </Typography>
            </FlexboxGrid>
          </Panel>
        </Element>
        <Divider />
        <Element name="section5" className="element">
          <Panel header={<h3>Frequently Asked Questions</h3>}>
            <QAWrapper></QAWrapper>
          </Panel>
        </Element>
        <StyledDrawer
          open={openDrawer}
          setOpen={setOpenDrawer}
          children={<AllReviews />}
        />
      </Content>
    </>
  );
}

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HideText = styled.div<{ $more?: boolean }>`
  height: ${({ $more }) => ($more ? "200px" : "100px")};
  margin-bottom: 8px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const Content = styled.div`
  margin-top: 32px;
  .element {
    margin-bottom: 32px;
  }
`;

const ProgressWrapper = styled.div`
  width: 300px;
`;

const SkillsWrapper = styled.div`
  .rs-tag {
    background-color: ${({ theme }) => theme.colors.background.cards};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const IconBig = styled.div`
  svg {
    width: 5em;
    height: 5em;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.text.active};
  svg {
    width: 30px;
    height: 30px;
  }
`;

const QAWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background.cards};
  height: 300px;
  border-radius: 12px;
  padding: 16px;
`;
