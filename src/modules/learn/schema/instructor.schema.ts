import { Schema } from "rsuite";

export const instructorModel = Schema.Model({
  name: Schema.Types.StringType()
    .isRequired("Please enter a valid name")
    .minLength(3),
  phoneNumber: Schema.Types.NumberType(
    "Please enter a valid phone number."
  ).isRequired(),
  biography: Schema.Types.StringType().isRequired(),
  achievements: Schema.Types.StringType().isRequired(),
  profileImageUrl: Schema.Types.StringType().isURL("Please upload an image."),
  researchInterests: Schema.Types.StringType().isRequired(),
});
