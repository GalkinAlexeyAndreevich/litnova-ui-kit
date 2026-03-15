import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonComponent } from './Button';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button/React',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'danger'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Click' },
  render: (args) => (
    <ButtonComponent variant={args.variant}>{args.children}</ButtonComponent>
  ),
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Delete' },
  render: (args) => (
    <ButtonComponent variant={args.variant}>{args.children}</ButtonComponent>
  ),
};
