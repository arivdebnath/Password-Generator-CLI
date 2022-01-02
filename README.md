# Password Generator CLI
Command line password generator created using Node JS

## Usage

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

## Creating a Symlink
```
npm link
```
After creating a symlink the application can be used globally using:
```
passgen [options]
```
