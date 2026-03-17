import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UiButton from './UiButton.vue';

const meta = {
  title: 'Components/Button',
  component: UiButton,
  tags: ['autodocs'],
} satisfies Meta<typeof UiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    default: 'Danger',
  },
};
