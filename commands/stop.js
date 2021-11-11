const util = require('util');
const chalk = require('chalk')
const exec = util.promisify(require('child_process').exec);

module.exports = async () => {
  try {
    await exec('nginx -s stop')

    console.log(
      chalk.green.bold('Nginx server stopped!')
    )
  } catch (err) {
    console.error(
      chalk.red.bold(`Couldn't stop nginx`)
    )
    throw new Error(`${err}`)
  }
}
