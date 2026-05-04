import type { Meta, StoryObj } from "@storybook/vue3-vite";
import UiCard from "./UiCard.vue";

const meta = {
  title: "Components/Card",
  component: UiCard,
  tags: ["autodocs"],
} satisfies Meta<typeof UiCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { UiCard },
    template: `
      <UiCard>
        <template #header>Card header</template>
        <template #body>Card body content</template>
        <template #footer>Card footer</template>
      </UiCard>
    `,
  }),
};
