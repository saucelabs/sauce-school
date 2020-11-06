'use strict';

const childprocess = require('child_process');
const PluginError = require('plugin-error');
const spawn = childprocess.spawn;

// claat is a wrapper around the claat tool.
//
//   cwd - codelabs content dir
//   cmd - claat command, either 'update' or 'export'
//   fmt - output format, e.g. 'html'
//   ga - google analytics tracking code
//   args - an array of source doc IDs or codelab names (IDs)
//   callback - an async task callback function
//
exports.run = (cwd, cmd, env, fmt, ga, outdir, args, callback) => {
  args.unshift(cmd, '-e', env, '-f', fmt, '-ga', ga, '-o', outdir);
  const proc = spawn('claat',  args);
  proc.stdout.on('data', (d) => process.stdout.write(d.toString()))
  proc.stderr.on('data', (d) => process.stdout.write((d.toString())))

  proc.on('close', (e) => {
    if (e) {
      throw new PluginError({
        plugin: 'claat',
        message: 'claat processing failed',
      });
    }
    callback();
  })
};
