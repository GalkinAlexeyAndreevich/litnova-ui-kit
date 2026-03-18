import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import type { InputType } from "./ui-input";
import "./ui-input";

interface UIInputArgs {
  type: InputType;
  placeholder: string;
  value: string;
  disabled: boolean;
}

const meta: Meta<UIInputArgs> = {
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "search", "tel", "url", "number"],
      description: "HTML input type",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    value: {
      control: "text",
      description: "Current input value",
    },
    disabled: {
      control: "boolean",
      description: "Disables input",
    },
  },
  args: {
    type: "text",
    placeholder: "Enter value",
    value: "Hello",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<UIInputArgs>;

const renderInput = ({ type, placeholder, value, disabled }: UIInputArgs) =>
  html`<ui-input
    type=${type}
    placeholder=${placeholder}
    .value=${value}
    ?disabled=${disabled}
  ></ui-input>`;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: renderInput,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: renderInput,
};

