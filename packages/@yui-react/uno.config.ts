import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

interface Theme extends Object {
  colors: {
    primary: Record<'main' | 'green' | 'blue', string>
    state: Record<'danger' | 'warning' | 'success' | 'info', string>
    gray: Record<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, string>
    red: string
    orange: string
    green: string
    blue: string
    purple: string
    dark: string
    light: string
    white: string
    black: string
  }
}

const layTheme: Theme = {
  colors: {
    primary: {
      main: '#16baaa',
      green: '#16b777',
      blue: '#1e9fff',
    },
    state: {
      danger: '#ff5722',
      warning: '#ffb800',
      success: '#16b777',
      info: '#31bdec',
    },
    gray: {
      0: '#fafafa',
      1: '#f7f7f7',
      2: '#eeeeee',
      3: '#e2e2e2',
      4: '#dddddd',
      5: '#d2d2d2',
      6: '#cccccc',
      7: '#c2c2c2',
      8: '#2f363c',
      9: '#23292e',
    },
    red: '#ff5722',
    orange: '#ffb800',
    green: '#16baaa',
    blue: '#1e9fff',
    purple: '#a233c6',
    dark: '#2f363c',
    light: '#fafafa',
    black: '#000000',
    white: '#ffffff',
  },
}

const colorRules: Rule<Theme>[] = [
  [/^lay-text-(.*)$/, ([, c], { theme }) => {
    if (c.indexOf('-') > 0) {
      const [color, sub] = c.split('-')
      if (theme.colors[color]?.[sub])
        return { color: theme.colors[color][sub] }
    }
    if (theme.colors[c])
      return { color: theme.colors[c] }
  }],
  [/^lay-bg-(.*)$/, ([, c], { theme }) => {
    if (c.indexOf('-') > 0) {
      const [color, sub] = c.split('-')
      if (theme.colors[color]?.[sub])
        return { 'background-color': theme.colors[color][sub] }
    }
    if (theme.colors[c])
      return { 'background-color': theme.colors[c] }
  }],
]

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    ],
  ],
  presets: [
    presetUno({
      variablePrefix: 'lay-',
    }),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: layTheme,
  rules: [
    ...colorRules as Rule<{}>[],
  ],
})
