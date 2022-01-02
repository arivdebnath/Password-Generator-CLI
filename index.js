const program = require('commander');

program.version('1.0.0');

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'saves the password to a .txt file')
    .option('-nn, --no-number', 'no numbers are included in the password')
    .option('-ns, --no-symbol', 'no symbols are included in the password')
    .parse()

console.log(program.opts())