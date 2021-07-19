# nogrammers-react-native

## How to run
Setting up the environment: https://reactnative.dev/docs/environment-setup  
Also make sure to install `Prettier` and `ESLint` VSCode extensions. (See below for instructions)

### Metro + simulator
1. Start the metro server `npx react-native start`
2. In another terminal window, run either `npx react-native run-ios` or `npx react-native run-android`  
* Note that for an android run, you need to have a simulator already running

### Expo
It's not that easy rip you have to create a new Expo project then copy everything over  
https://docs.expo.io/introduction/faq/?redirected  

But then you'll be able to run it from Expo Go app on phone

## File structure
`android`, `ios`, and `__tests__` contain file specifc to android, ios, and tests. We'll likely not need to use these for this project.  

`src` contains three folders:
* `bootstrap` will hold things related to the app's startup, e.g. config stuffs
* `features` contains code for independent modules of code
* `platform` contains code that is shared across multiple features

## Notes
### Code style
`eslint` and `prettier` are used to enforce good code styling, with `husky` to automatically run the process during a git commit.

You should install the `Prettier` and `ESLint` VSCode extensions.

The ESLint plugin needs a bit further configuration to work with typescript.
Open the VSCode settings and the following configuration snippet.
```
settings.json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
]
```
To check your styling:
* Run `npm run lint` to check
* `npm run lint -- --fix` to lint and apply all the suggestions
* `cmd + shift + p` (on mac) --> "Format file" or "Format selections" to run `Prettier`

Note that `tabSpace` is 2, so you may have to adjust your VSCode settings to match.