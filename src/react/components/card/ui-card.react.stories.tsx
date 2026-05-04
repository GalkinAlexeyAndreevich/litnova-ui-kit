import type { Meta, StoryObj } from "@storybook/react-vite";
import { UICard } from "./UiCard";

const meta: Meta<typeof UICard> = {
  title: "Components/Card",
  component: UICard,
  tags: ["autodocs"],
} satisfies Meta<typeof UICard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UICard>
      <div slot="header">Card header</div>
      <div slot="body">Card body content</div>
      <div slot="footer">Card footer</div>
    </UICard>
  ),
};
