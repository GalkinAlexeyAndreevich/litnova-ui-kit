import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./ui-card";

interface UICardArgs {
  header: string;
  body: string;
  footer: string;
}

const meta: Meta<UICardArgs> = {
  title: "Components/Card",
  tags: ["autodocs"],
  argTypes: {
    header: {
      control: "text",
      description: "Header content",
    },
    body: {
      control: "text",
      description: "Body content",
    },
    footer: {
      control: "text",
      description: "Footer content",
    },
  },
  args: {
    header: "Card header",
    body: "Card body content",
    footer: "Card footer",
  },
};

export default meta;
type Story = StoryObj<UICardArgs>;

const renderCard = ({ header, body, footer }: UICardArgs) => html`
  <ui-card>
    <div slot="header">${header}</div>
    <div slot="body">${body}</div>
    <div slot="footer">${footer}</div>
  </ui-card>
`;

export const Default: Story = {
  render: renderCard,
};
