import fs from 'fs-extra'

const iconPath = 'node_modules/@iconify-json'
let icons: any = []

function scan(prefix: string) {
  fs.readdirSync(iconPath, { withFileTypes: true }).forEach((lib) => {
    if (lib.name === prefix) {
      const json = fs.readFileSync(`${lib.path}/${prefix}/icons.json`, { encoding: 'utf-8' })
      icons = JSON.parse(json).icons
    }
  })
}

export function getSvgBody(icon: string) {
  const [prefix, svg] = icon.split(':')

  scan(prefix)
  return icons[svg]
}

// const ret = getSvgBody('carbon:home')
// console.log('ret', ret)
