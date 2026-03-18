import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIInput } from "./UiInput";

const meta: Meta<typeof UIInput> = {
  title: "Components/Input",
  component: UIInput,
  tags: ["autodocs"],
} satisfies Meta<typeof UIInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter value",
    value: "Hello",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Enter value",
    value: "Hello",
    disabled: true,
  },
};

