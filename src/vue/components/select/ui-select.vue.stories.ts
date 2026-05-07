import type { Meta, StoryObj } from "@storybook/vue3-vite";
import UiSelect from "./UiSelect.vue";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

const meta = {
  title: "Components/Select",
  component: UiSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      story: {
        height: "260px",
      },
    },
  },
} satisfies Meta<typeof UiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: "apple",
    disabled: false,
    options,
  },
};

export const Disabled: Story = {
  args: {
    modelValue: "apple",
    disabled: true,
    options,
  },
};

