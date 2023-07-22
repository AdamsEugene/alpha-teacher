/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Form, Input, InputGroup } from "rsuite";
import { styled } from "styled-components";
import { Icon } from "@rsuite/icons";
import { MdAlternateEmail, MdFacebook } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTwitter, FaTiktok } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

interface MediaData {
  onChange: (value: string, e: any) => void;
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
  const { onChange } = props;

  const handleInputChange = (value: string, event: any) => {
    onChange(value, event);
  };

  return (
    <SocialMediaWrapper>
      <Form fluid>
        {dataToRender.map((data) => (
          <Form.Group key={data.name}>
            <Form.ControlLabel>{data.label}</Form.ControlLabel>
            <InputGroup>
              <InputGroup.Addon>
                <Icon as={data.icon} />
              </InputGroup.Addon>
              <Input name={data.name} onChange={handleInputChange} />
            </InputGroup>
          </Form.Group>
        ))}
      </Form>
    </SocialMediaWrapper>
  );
}

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
