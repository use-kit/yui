import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Avatar from './index.vue'

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: '',
    size: 'default',
    shape: 'circle',
  },
}

export const WithIcon: Story = {
  args: {
    icon: 'carbon:user-avatar',
  },
}

export const WithSrc: Story = {
  args: {
    src: 'https://github.com/akashigakki.png',
    size: 'default',
    shape: 'circle',
  },
}
