#! /usr/bin/env node
const { program } = require('commander')
const activate = require('./commands/activate')
const create = require('./commands/create')
const deactivate = require('./commands/deactivate')
const delete_ = require('./commands/delete')
const info = require('./commands/info')
const list = require('./commands/list')
const reload = require('./commands/reload')
const start = require('./commands/start')
const status = require('./commands/status')
const stop = require('./commands/stop')
const update = require('./commands/update')

program
  .command('activate <domain>')
  .description('Activate a domain')
  .action(activate)

program
  .command('create <domain> <port>')
  .description('Create a new managed domain')
  .action(activate)

program
  .command('deactivate <domain>')
  .description('Deactivate a domain')
  .action(deactivate)

program
  .command('delete <domain>')
  .description('Permanently delete a domain')
  .action(delete_)

program
  .command('info <domain>')
  .description('Display domain configuration and nginx path')
  .action(info)

program
  .command('list')
  .description('List all domains')
  .action(list)

program
  .command('reload')
  .description('Force nginx reload, useful is you change the configuration by hand')
  .action(reload)

program
  .command('start')
  .description('Start nginx process')
  .action(start)

program
  .command('status')
  .description('Display nginx process status and activated domain')
  .action(stop)

program
  .command('stop')
  .description('Stop nginx process')
  .action(stop)

program
  .command('update <domain> <port>')
  .description('Update a domain##')
  .action(stop)

program.parse()
