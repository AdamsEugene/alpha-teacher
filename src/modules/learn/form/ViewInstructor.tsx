import { Avatar, FlexboxGrid, Form, Input, Tag, TagGroup } from "rsuite";
import { styled } from "styled-components";
import { InstructorData, MEDIA_COLORS } from "../@types";

interface Props {
  instructor?: Partial<InstructorData>;
}

export default function ViewInstructor(props: Props) {
  const { instructor } = props;

  return (
    <Form fluid>
      <Form.Group>
        <FlexboxGrid justify="center">
          <Avatar
            size="lg"
            circle
            src="https://avatars.githubusercontent.com/u/12592949"
            alt="@SevenOutman"
          />
        </FlexboxGrid>
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Full Name</Form.ControlLabel>
        <Form.Control
          name="name"
          type="text"
          disabled
          defaultValue={instructor?.name}
        />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Phone Number</Form.ControlLabel>
        <Form.Control
          name="phoneNumber"
          type="number"
          disabled
          defaultValue={instructor?.phoneNumber}
        />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Biography</Form.ControlLabel>
        <Input
          as="textarea"
          rows={5}
          placeholder="Textarea"
          name="biography"
          disabled
          defaultValue={instructor?.biography}
        />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Achievements</Form.ControlLabel>
        <Input
          as="textarea"
          rows={5}
          placeholder="Textarea"
          name="biography"
          disabled
          defaultValue={instructor?.achievements}
        />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Research Interests</Form.ControlLabel>
        <Input
          as="textarea"
          rows={5}
          placeholder="Textarea"
          name="biography"
          disabled
          defaultValue={instructor?.researchInterests}
        />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Links</Form.ControlLabel>
        <TagGroup>
          {instructor?.email ? (
            <TagWrapper $bg={MEDIA_COLORS["email"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                email: {instructor?.email}
              </a>
            </TagWrapper>
          ) : null}
          {instructor?.facebook ? (
            <TagWrapper $bg={MEDIA_COLORS["facebook"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                facebook: {instructor?.facebook}
              </a>
            </TagWrapper>
          ) : null}
          {instructor?.github ? (
            <TagWrapper $bg={MEDIA_COLORS["github"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                github: {instructor?.github}
              </a>
            </TagWrapper>
          ) : null}
          {instructor?.instagram ? (
            <TagWrapper $bg={MEDIA_COLORS["instagram"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                instagram: {instructor?.instagram}
              </a>
            </TagWrapper>
          ) : null}
          {instructor?.linkedIn ? (
            <TagWrapper $bg={MEDIA_COLORS["linkedIn"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                linkedIn: {instructor?.linkedIn}
              </a>
            </TagWrapper>
          ) : null}
          {instructor?.personalWebsite ? (
            <TagWrapper $bg={MEDIA_COLORS["personalWebsite"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                personalWebsite: {instructor?.personalWebsite}
              </a>
            </TagWrapper>
          ) : null}
          {instructor?.tiktok ? (
            <TagWrapper $bg={MEDIA_COLORS["tiktok"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                tiktok: {instructor?.tiktok}
              </a>
            </TagWrapper>
          ) : null}
          {instructor?.twitter ? (
            <TagWrapper $bg={MEDIA_COLORS["twitter"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                twitter: {instructor?.twitter}
              </a>
            </TagWrapper>
          ) : null}
          {instructor?.whatsapp ? (
            <TagWrapper $bg={MEDIA_COLORS["whatsapp"]} size="lg">
              <a target="_blank" href={""} rel="noreferrer">
                whatsapp: {instructor?.whatsapp}
              </a>
            </TagWrapper>
          ) : null}
        </TagGroup>
      </Form.Group>
    </Form>
  );
}

const TagWrapper = styled(Tag)<{ $bg: string }>`
  background: ${({ $bg }) => $bg};

  a {
    color: #fff;
  }
`;
