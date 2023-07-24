import { Schema } from "rsuite";

export const socialLinksModel = Schema.Model({
  email: Schema.Types.StringType()
    .isRequired()
    .isEmail("Please enter a valid email address."),
  github: Schema.Types.StringType().isURL("Please enter a valid URL."),
  facebook: Schema.Types.StringType().isURL("Please enter a valid URL."),
  twitter: Schema.Types.StringType().isURL("Please enter a valid URL."),
  linkedIn: Schema.Types.StringType().isURL("Please enter a valid URL."),
  tiktok: Schema.Types.StringType().isURL("Please enter a valid URL."),
  whatsapp: Schema.Types.NumberType("Please enter a valid phone number."),
  instagram: Schema.Types.StringType().isURL("Please enter a valid URL."),
  personalWebsite: Schema.Types.StringType().isURL("Please enter a valid URL."),
});
