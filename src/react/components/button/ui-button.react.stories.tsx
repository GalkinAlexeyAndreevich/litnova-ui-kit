import type { Meta, StoryObj } from '@storybook/react-vite';
import { UIButton } from './UiButton';

const meta: Meta<typeof UIButton> = {
  title: 'Components/Button',
  component: UIButton,
  tags: ['autodocs'],
} satisfies Meta<typeof UIButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click'
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete'
  },
};
