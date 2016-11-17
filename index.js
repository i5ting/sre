#!/usr/bin/env node
var fs = require('fs')
var userHome = require('user-home')
var currentPath = process.cwd()
var argv = process.argv
argv.shift()
var lines = []

var sre = fs.readFileSync(userHome + '/.sre_path').toString()

if (sre === "") {
  console.log("Path " + currentPath)
} else {
  console.log("Path " + sre)
}

for (var i in argv) {
  var input = argv[i]
  if (input === '-d' || input === '--delete') {
    console.log('remove ~/.sre alias')
    fs.writeFileSync(userHome + '/.sre', '')
    process.exit()
  }
}

for (var j in argv) {
  if (argv[j] === '-l' || argv[j] === '--list') {
    console.log(fs.readFileSync(userHome + '/.sre').toString())
    process.exit()
  }
}

for (var k in argv) {
  if (argv[k] === '-h' || argv[k] === '--help') {
    console.log('Usages: sre = scripts run easy')
    console.log('\t sre -h or --help')
    console.log('\t sre -d or --delete')
    console.log('\t sre -l or --list')
    process.exit()
  }
}

var conf = require(currentPath + '/package.json')

console.log('available script:')

for (var _name in conf.scripts) {
  console.log('\t' + _name)
  var cmd = 'alias ' + _name + '=\'npm run ' + _name + '\''
  lines.push(cmd)
}

fs.writeFileSync(userHome + '/.sre_path', currentPath)
fs.writeFileSync(userHome + '/.sre', lines.join('\n'))
