/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";

export interface StylingProps {
  $color?: "danger" | "success" | "warning" | "default" | "active" | "grey";
  $variant?: "normal" | "small" | "subtitle" | "title";
  $gutterBottom?: boolean;
  $inline?: boolean;
  $textAlign?: "center" | "left" | "right";
  $contained?: boolean | "outline";
}

const Typography = styled.p<StylingProps>`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  /* font-weight: ${(props) => (props.$variant === "title" ? 900 : 700)}; */
  margin-bottom: ${(props) => (props.$gutterBottom ? "1rem" : 0)};
  border: ${(props) => {
    const borderColor = {
      danger: props.theme.colors.border.danger,
      success: props.theme.colors.border.success,
      warning: props.theme.colors.text.warning,
      default: props.theme.colors.border.primary,
      active: props.theme.colors.border.active,
      grey: props.theme.colors.border.primary,
    };
    return props.$contained === "outline"
      ? `1px solid ${borderColor[props.$color ?? "default"]}`
      : "none";
  }};
  background: ${(props) => {
    const backgroundColor = {
      danger: props.theme.colors.background.danger,
      success: props.theme.colors.background.success,
      warning: props.theme.colors.background.warning,
      default: props.theme.colors.background.cards,
      active: props.theme.colors.background.main,
      grey: props.theme.colors.background.sidebar,
    };
    return props.$contained === true
      ? backgroundColor[props.$color ?? "default"]
      : "none";
  }};
  color: ${(props) => {
    const defaultVariantColorMapping = {
      normal: props.theme.colors.text.primary,
      small: props.theme.colors.text.secondary,
      subtitle: props.theme.colors.text.primary,
      title: props.theme.colors.text.header,
      active: props.theme.colors.text.active,
    };
    const colorMapping = {
      danger: props.theme.colors.text.danger,
      success: props.theme.colors.text.success,
      warning: props.theme.colors.text.warning,
      active: props.theme.colors.text.active,
      default: defaultVariantColorMapping[props.$variant ?? "normal"],
      grey: props.theme.colors.text.secondary,
    };
    return colorMapping[props.$color ?? "default"];
  }};
  font-size: ${(props) => {
    const sizeMapping = {
      title: props.theme.sizes.font.large,
      normal: props.theme.sizes.font.medium,
      small: props.theme.sizes.font.small,
      subtitle: props.theme.sizes.font.medium,
    };
    return sizeMapping[props.$variant ?? "normal"];
  }};
  display: ${(props) => (props.$inline ? "inline-block" : "block")};
  text-align: ${(props) => props.$textAlign};
  border-radius: 4px;
  padding: ${(props) =>
    props.$inline
      ? "0.25rem 0.75rem"
      : typeof props.$contained !== "undefined"
      ? ""
      : 0};
  transition: color 0.3s ease-in-out;
`;

export default Typography;
