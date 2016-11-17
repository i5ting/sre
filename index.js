#!/usr/bin/env node
var fs = require('fs')
var userHome = require('user-home');
var argv = process.argv;
argv.shift();

for(var i in argv) {
  var input = argv[i]
  if (input == '-d' || input == '--delete') {
    console.log("remove ~/.sre alias")
    fs.writeFileSync(userHome + '/.sre', "");
    process.exit()
  }
}

for(var i in argv) {
  var input = argv[i]
  if (input == '-l' || input == '--list') {
    console.log(fs.readFileSync(userHome + '/.sre').toString())
    process.exit()
  }
}

for(var i in argv) {
  var input = argv[i]
  if (input == '-h' || input == '--help') {
    console.log("Usages: sre = scripts run easy")
    console.log("\t sre -h or --help")
    console.log("\t sre -d or --delete")
    console.log("\t sre -l or --list")
    process.exit()
  }
}

var file_path = __dirname;
var current_path = process.cwd();

var conf = require(current_path + '/package.json')

console.log("available script:")


var lines = []
for(var _name in conf.scripts){
  console.log("\t" + _name)
  var cmd = "alias " + _name + "='npm run " + _name + "'"
  lines.push(cmd)
}

fs.writeFileSync(userHome + '/.sre', lines.join('\n'));
