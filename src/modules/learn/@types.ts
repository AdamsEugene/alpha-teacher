export interface SocialMediaFormData {
  email: string;
  github: string;
  facebook: string;
  twitter: string;
  linkedIn: string;
  tiktok: string;
  whatsapp: string;
  instagram: string;
  personalWebsite: string;
}

export interface InstructorData extends SocialMediaFormData {
  name: string;
  phoneNumber: string;
  biography: string;
  achievements: string;
  profileImageUrl: string;
  researchInterests: string;
}

export type SectionContentType = "video" | "audio" | "text";

type status = "error" | "wait" | "finish" | "process" | undefined;

export interface DataProps {
  title: string;
  status: status;
}

export const MEDIA_COLORS = {
  email: "#db4437",
  github: "#4078c0",
  facebook: "#1877f2",
  twitter: "#1da1f2",
  linkedIn: "#0a66c2",
  tiktok: "#010101",
  whatsapp: "#25d366",
  instagram: "#c32aa3",
  personalWebsite: "#ff0000",
};

export const socialUrls = [
  "email",
  "github",
  "facebook",
  "twitter",
  "linkedIn",
  "tiktok",
  "whatsapp",
  "instagram",
  "personalWebsite",
];
