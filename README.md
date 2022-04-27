# Password Generator CLI
Command line password generator with clipboard access created using Node.js.

## Installation

Install dependencies

```
npm install
```

To run the application

```
node index.js <options>
```
## Options
| Alias | Long form | Description        |
|-------|-----------|--------------------|
|-h     | --help    | shows the help page|
|-l     | --length  | sets the length of the password|
|-s     | --save    | saves the password in passwords.txt |
|-nn    | --no-number| no numbers are included in the password|
|-ns    | --no-symbol| no symbols are included in the password|

## Usage

### Creating a Symlink
```
npm link
```
After creating a symlink the application can be used globally using:
```
passgen [options]
```

### Example 
```
passgen -l 12 
```
### Output
```
Generated Password: 3A+0WhdRqlYo8oBTx4M*
Password copied to clipboard
```
The generated password is automatically copied to the clipboard of the system

### To remove the symlink
```
npm unlink
```
### Saving the generated passwords
When the `-s` or `--save` option is used, the generated passwords are saved in a file named `passwords.txt` which is available in the application directory. If the file `passwords.txt` is not available in the said location, then it is automatically generated when the `-s` option is used.
> While using the `-s` option the passwords are appended on a new line in the `passwords.txt` file and not overwritten on every single usage.
