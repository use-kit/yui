import type { Meta, StoryObj } from '@storybook/react-vite'
import { Home } from 'lucide-react'

import Icon from './index'

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const MDIIcon: Story = {
  args: {
    icon: 'mdi-light:home',
    size: 24,
    color: 'pink',
  },
}

export const CarbonIcon: Story = {
  args: {
    icon: 'carbon:home',
    size: 24,
    color: 'orange',
  },
}

export const LucideIcon: Story = {
  args: {
    icon: Home,
    size: 24,
    color: 'red',
  },
}
