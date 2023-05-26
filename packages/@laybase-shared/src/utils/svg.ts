// import fs from 'fs-extra'
import fs from 'node:fs'
import fg from 'fast-glob'

const iconPath = 'node_modules/@iconify-json'
let icons: any = []

function read(prefix: string) {
  fs.readdirSync(iconPath, { withFileTypes: true }).forEach((lib) => {
    if (lib.name === prefix) {
      const json = fs.readFileSync(`${lib.path}/${prefix}/icons.json`, { encoding: 'utf-8' })
      icons = JSON.parse(json).icons
    }
  })
}

async function scan(perfix: string) {
  const files = await fg([`${iconPath}/**/icons.json`])

  for (const file of files) {
    const lib = file.split('/').reverse()[1]

    if (lib === perfix) {
      const content = fs.readFileSync(file, 'utf-8')
      icons = JSON.parse(content).icons
    }
  }
}

export async function getSvgBody(icon: string) {
  const [prefix, svg] = icon.split(':')

  await scan(prefix)
  return icons[svg]
}

// const ret = await getSvgBody('carbon:home')
// console.log('ret', ret)
