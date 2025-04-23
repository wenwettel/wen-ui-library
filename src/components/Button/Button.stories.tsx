import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Click me",
    variant: "contained", 
    color: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "contained", "outlined"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {};

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: "outlined",
    label: "Outlined Button",
  },
};

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: "text",
    label: "Text Button",
  },
};