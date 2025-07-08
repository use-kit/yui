import type { Preview } from '@storybook/vue3-vite'

// import 'virtual:uno.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
