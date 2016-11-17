#!/usr/bin/env node
var fs = require('fs')
var userHome = require('user-home');
var argv = process.argv;
argv.shift();

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
