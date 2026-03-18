import type { Meta, StoryObj } from "@storybook/vue3-vite";
import UiInput from "./UiInput.vue";

const meta = {
  title: "Components/Input",
  component: UiInput,
  tags: ["autodocs"],
} satisfies Meta<typeof UiInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter value",
    modelValue: "Hello",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Enter value",
    modelValue: "Hello",
    disabled: true,
  },
};

