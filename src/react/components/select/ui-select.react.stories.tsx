import type { Meta, StoryObj } from "@storybook/react-vite";
import { UISelect } from "./UiSelect";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

const meta: Meta<typeof UISelect> = {
  title: "Components/Select",
  component: UISelect,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      story: {
        height: "260px",
      },
    },
  },
} satisfies Meta<typeof UISelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "apple",
    disabled: false,
    options,
  },
};

export const Disabled: Story = {
  args: {
    value: "apple",
    disabled: true,
    options,
  },
};

