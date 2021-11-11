const util = require('util');
const chalk = require('chalk')
const exec = util.promisify(require('child_process').exec);

module.exports = async () => {
  try {
    await exec('nginx -t')
    await exec('nginx')

    console.log(
      chalk.green.bold('Nginx server started!')
    )
  } catch (err) {
    console.error(
      chalk.red.bold(`Couldn't start nginx`)
    )
    throw new Error(`${err}`)
  }
}
