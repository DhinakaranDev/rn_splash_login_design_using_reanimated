# Splash Screen Animation & Login Page React Native Project

## Overview

This project is a React Native application that replicates a splash screen animation and designs a login page based on the provided requirements. The goal is to create a smooth, responsive splash screen animation and a clean, functional login page. The project leverages `react-native-reanimated`, `react-native-responsive-design`, and `react-native-keyboard-aware-scroll-view`.

## Prerequisites

- **React Native**: Ensure you have a working React Native environment set up. Follow the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) guide for setup instructions.
- **Xcode** (for iOS development): Version 12 or higher.
- **Android Studio** (for Android development): Version 4.0 or higher.

## Setup Instructions

### Step 1: Install Dependencies

Download the necessary dependencies using npm:

```bash
npm install
```

### Step 2: iOS Setup

1.Install CocoaPods dependencies:

```bash
cd ios
pod install
cd ..
```

2.Build and Run:
For Android:

```bash
npx react-native run-android
```

For iOS:

```bash
npx react-native run-ios
```

Ensure your emulator/simulator is set up correctly to see the app running.

### Code Structure

ios/: Contains the native iOS module code.
android/: Contains the native Android module code.
src/: Contains the React Native JavaScript code.

```bash
$ tree
.
├── src
│ ├── assets
│ │
│ ├── components
│ │ ├── CustomButton.tsx
│ │ ├── CustomText.tsx
│ │ ├── CustomTextInput.tsx
│ │ └── Loader.tsx
│ │
│ ├── screens
│ │ ├── Login.tsx
│ │ └── Splash.tsx
│ │
│ ├── utils
│ │ ├── colors.tsx
│ │ └── strings.tsx
│ │
├── README.md
│
└── __test__
    ├── CustomButton.test.tsx
    ├── CustomText.test.tsx
    └── Loader.test.tsx
```

## Libraries Used

react-native-reanimated: For smooth and performant animations.

react-native-responsive-design: For creating a responsive layout that adapts to different screen sizes.

react-native-keyboard-aware-scroll-view: To handle the keyboard gracefully in the login form, ensuring a smooth user experience.
