import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Home } from 'lucide-vue-next'

// import { fn } from 'storybook/test'

import Icon from './index.vue'

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const MDIIcon: Story = {
  args: {
    icon: 'mdi:home',
    size: 24,
    color: 'red',
  },
}

export const CarbonIcon: Story = {
  args: {
    icon: 'carbon:home',
    size: 24,
  },
}

export const LucideIcon: Story = {
  args: {
    icon: Home,
    size: 24,
    color: 'orange',
  },
}
