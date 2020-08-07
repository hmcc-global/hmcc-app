# ⛪ HMCC HK App

Utility app for HMCC Hong Kong branch.

![Code Size](https://img.shields.io/github/languages/code-size/hmcc-global/hmcc-app)
[![License](https://img.shields.io/github/license/hmcc-global/hmcc-app)](https://github.com/hmcc-global/hmcc-app/blob/master/LICENSE)

## Setup

### iOS

A Mac is required to build projects with native code for iOS. Make sure
[XCode](https://developer.apple.com/xcode/) is installed.

This project uses [CocoaPods](https://cocoapods.org/) to manage library
dependencies. It can be installed with

    sudo gem install cocoapods

After the installation is successful, install the required dependencies with

    cd ios && pod install && cd ..

### Android

Install [Android Studio](https://developer.android.com/studio) following [these
instructions](https://reactnative.dev/docs/environment-setup).

## Local Development

Start the [Metro](https://facebook.github.io/metro/) Bundler:

    yarn start

Let Metro Bundler run in its own terminal then open a new terminal inside the
repository.

Run the app in the iOS Simulator with

    yarn ios

Run the app in the Android Virtual Device with

    yarn android

Run the [ESLint](https://eslint.org/) linter with

    yarn lint

A [Prettier](https://prettier.io/) pre-commit hook has been configured using
[lint-staged](https://github.com/okonet/lint-staged). It will automatically
format supported staged files when a commit is made.
