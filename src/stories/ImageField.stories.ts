import { ImageField } from '@/components/inputs';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/ImageField',
  component: ImageField,
} satisfies Meta<typeof ImageField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: '테스트',
    onFilesUpdate: () => {},
  },
};
