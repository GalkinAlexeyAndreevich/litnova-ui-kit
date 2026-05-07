import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import type { UISelectOption } from "./ui-select";
import "./ui-select";

interface UISelectArgs {
  value: string;
  disabled: boolean;
  options: UISelectOption[];
}

const baseOptions: UISelectOption[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

const meta: Meta<UISelectArgs> = {
  title: "Components/Select",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      story: {
        height: "260px",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      description: "Selected option value",
    },
    disabled: {
      control: "boolean",
      description: "Disables select",
    },
    options: {
      control: "object",
      description: "Options list",
    },
  },
  args: {
    value: "apple",
    disabled: false,
    options: baseOptions,
  },
};

export default meta;
type Story = StoryObj<UISelectArgs>;

const renderSelect = ({ value, disabled, options }: UISelectArgs) =>
  html`<ui-select .value=${value} ?disabled=${disabled} .options=${options}></ui-select>`;

export const Default: Story = {
  render: renderSelect,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: renderSelect,
};

