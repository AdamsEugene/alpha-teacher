/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Button, FlexboxGrid, Form } from "rsuite";
import { styled } from "styled-components";
// import { Icon } from "@rsuite/icons";
import { MdAlternateEmail, MdFacebook } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTwitter, FaTiktok } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { socialLinksModel } from "../schema/socialLinks.schema";

interface MediaData {
  onChange: (value: string, e: any) => void;
  onConfirm: () => void;
}

const dataToRender = [
  { name: "email", icon: MdAlternateEmail, label: "Email Address" },
  { name: "github", icon: AiFillGithub, label: "GitHub URL" },
  {
    name: "personalWebsite",
    icon: CgWebsite,
    label: "Personal Website",
  },
  { name: "facebook", icon: MdFacebook, label: "Facebook Handler" },
  { name: "twitter", icon: FaTwitter, label: "Twitter Handler" },
  { name: "linkedIn", icon: AiFillLinkedin, label: "LinkedIn Handler" },
  { name: "tiktok", icon: FaTiktok, label: "Tiktok Handler" },
  { name: "instagram", icon: AiFillInstagram, label: "Instagram Handler" },
  { name: "whatsapp", icon: AiOutlineWhatsApp, label: "Whatsapp Number" },
];

export default function SocialMedia(props: MediaData) {
  const { onChange, onConfirm } = props;
  const [formError, setFormError] = React.useState({});

  const handleInputChange = (value: string, event: any) => {
    onChange(value, event);
  };

  const submit = () => {
    if (Object.keys(formError).length > 0) return;
    else onConfirm();
  };

  return (
    <SocialMediaWrapper>
      <Form
        fluid
        model={socialLinksModel}
        checkTrigger="blur"
        onSubmit={submit}
        onCheck={setFormError}
      >
        {dataToRender.map((data) => (
          <Form.Group key={data.name} controlId={data.name}>
            <Form.ControlLabel>{data.label}</Form.ControlLabel>
            <Form.Control
              name={data.name}
              onChange={handleInputChange}
              // autoFocus={data.name === "email"}
            />
            {/* <InputGroup>
              <InputGroup.Addon>
                <Icon as={data.icon} />
              </InputGroup.Addon>
              <Input name={data.name} />
            </InputGroup> */}
          </Form.Group>
        ))}

        <FlexboxGrid justify="end">
          <Button appearance="primary" type="submit" onClick={submit}>
            Submit
          </Button>
        </FlexboxGrid>
      </Form>
    </SocialMediaWrapper>
  );
}

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
