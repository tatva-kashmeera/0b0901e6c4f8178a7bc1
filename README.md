#  Engineer AI Practical Test


### Usage

```
git clone https://github.com/tatva-kashmeera/0b0901e6c4f8178a7bc1.git
cd a7b1f4ae26d5ff653e0d
npm
```

### Available Commands

```
react-native run-android - start app on android emulator 
react-native run-ios - start app on ios simulator 
```

Definition:

Fetch post list from API at the interval of 10s, display list with pagination. Open post detail screen on click on post and that will display data in row json.

Currently includes:
- React Native
- React Navigation

## Quick Start

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android or ios development](https://reactnative.dev/docs/environment-setup)

**Setup the project:**

- clone this repository
- install the npm dependencies by running `yarn` or `npm install`

**Run project by below command:**

### Android

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS
- `cd ios`
- `pod install`
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

### ./src directory

Project source code is in the `src` directory.

The inside of the src directory looks similar to the following:

```
├── api
├── components
├── containers
├── redux
├── router
├── utils
├── App.js
```
**api**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, Graphql etc.).

**components**
This is where your React components will live. Each component will have a directory containing the `.js` file. The app will come with some commonly used components like NavHeader, Theme resuable controls, loader etc.

**redux**
This is where your app's redux component will live such as actions, reducers & store.

**router**
This is where your app's navigation stack is defined.

**containers**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.js` file, along with styles files.

**constants**
Here lives your application API_URL and other constants.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**index.js** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.
