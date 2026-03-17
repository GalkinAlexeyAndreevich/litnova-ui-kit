import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./ui-button";

interface UIButtonArgs {
  variant: "primary" | "danger";
  label: string;
}

const meta: Meta<UIButtonArgs> = {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "danger"],
      description: "Visual variant of the button",
    },
    label: {
      control: "text",
      description: "Text rendered in the default slot",
    },
  },
  args: {
    variant: "primary",
    label: "Click me",
  },
};

export default meta;
type Story = StoryObj<UIButtonArgs>;

const renderButton = ({ variant, label }: UIButtonArgs) => html`
  <ui-button variant=${variant}>${label}</ui-button>
`;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Click me",
  },
  render: renderButton,
};
export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Delete",
  },
  render: renderButton,
};
