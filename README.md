# Movie List-details App

This is a hello-world level RN app for the demo purpose.

It have to be run within Expo app, which means it has not been ejected yet, and can not be run on either simulator/emulator or devices natively.

## How to Use the app

### Setup

```shell
$ yarn
```
or
```shell
$ npm install
```

### Run the app

```shell
$ yarn start
```
Then run Android emulator or iOS simulator. For more command, check `package.json` file

### Run test cases

```shell
$ yarn test
```

## Major 3rd Party Libs

- Reudx

## Features

- display a list of popular movies
- scroll down to the end of the list would load more movies
- pull down the list would reload it
- show more details by pressing the cell of the list

## What's not inlcuded

- Local persistent cache is not implemented
- Some test cases are missing
- Remotely updating API config  is not implemented
- Fetching more details of a movie is not implemented
