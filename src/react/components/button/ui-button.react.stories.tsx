import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonComponent } from './Button';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonComponent>;

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
