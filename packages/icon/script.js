// helper script to just build the export strings for all icons

const fs = require('fs')
const path = require('path')

const iconsPath = path.join(__dirname, 'lib/icons')

fs.readdir(iconsPath, (err, files) => {
  files.forEach(fileName => {
    if (fileName !== 'base.js') {
      fs.appendFileSync(
        'temp.js',
        `\nexport { ${fileName.split('.')[0]} } from './icons/${fileName}'`,
      )
    }
  })
})
