const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 766, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.blue.bold('Password saved to passwords.txt'));
            })
        })
    })
}

module.exports=savePassword;