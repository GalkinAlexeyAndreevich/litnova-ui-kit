import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Button from './Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

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
