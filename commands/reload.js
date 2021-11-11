const util = require('util');
const chalk = require('chalk')
const exec = util.promisify(require('child_process').exec);

module.exports = async () => {
  try {
    await exec('nginx -s reload')

    console.log(
      chalk.green.bold('Nginx server reloaded!')
    )
  } catch (err) {
    console.error(
      chalk.red.bold(`Couldn't reload nginx`)
    )
    throw new Error(`${err}`)
  }
}
