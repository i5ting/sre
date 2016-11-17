#!/usr/bin/env node
var fs = require('fs')
var exec = require('child_process').exec


var nodepath = require('path');
var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var conf = require(current_path + '/package.json')

var lines = []

function e(cmd) {
  exec(cmd, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    console.log(stdout)
    console.log(stderr)
  });
}

// lines.push("exec $SHELL")
//
fs.writeFileSync(current_path + '/sre.sh', lines.join('\n'));

var exec = require('child_process').exec

exec('chmod +x sre.sh && source ' + current_path +'/sre.sh', function (error, stdout, stderr) {
  if (error !== null) {
    console.log('exec error: ' + error)
  }
  console.log(stdout)
  console.log(stderr)
});

