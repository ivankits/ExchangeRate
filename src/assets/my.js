const fs = require('fs')

const files = fs.readdirSync('./svg/').map(v => (v.split('.')[0]))

const table = JSON.parse(fs.readFileSync('table.json'))

const out = {}
for (let i = 0; i < files.length; i++) {
  console.log(files[i])
  out[files[i]] = table[files[i]]
}

fs.writeFileSync('./out.json', JSON.stringify(out), 'utf-8')
