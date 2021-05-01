<img alt="React Native Countdown" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-countdown)

[![Moment based extremely easy to use Countdown for React Native](https://img.shields.io/badge/-Moment%20based%20extremely%20easy%20to%20use%20Countdown%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-countdown)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-countdown.svg?style=for-the-badge)](https://www.npmjs.com/package/freakycoder/react-native-countdown)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-countdown.svg?style=for-the-badge)](https://www.npmjs.com/package/freakycoder/react-native-countdown)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Countdown"
        src="assets/Screenshots/example.gif" />
</p>

# Installation

Add the dependency:

```js
npm i @freakycoder/react-native-countdown
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"moment": ">= 2.24.0",
"moment-duration-format": ">= 2.3.2"
```

# Usage

## Import

```js
import moment from "moment";
import Countdown from "react-native-countdown";
```

## Usage

All Text Component feature can be send via props OR you can use textStyle

```jsx
<Countdown
  start={moment(1578240964000)}
  end={moment(1578244564000)}
  fontFamily="BurbankBigCondensed-Black" // All Text Component feature can be send via props OR you can use textStyle
  defaultCountdown=" - / - : - : -"
  format="d[d]  hh:mm:ss"
/>
```

# Configuration - Props

Check the example for the customizable `format` and `defaultCountdown` props.

| Property         |  Type   |  Default  | Description                                             |
| ---------------- | :-----: | :-------: | ------------------------------------------------------- |
| start            | boolean |   true    | make the button outline                                 |
| end              | boolean |   false   | make the button with a solid background and a shadow    |
| textStyle        | boolean |   false   | make the button with a gradient background and a shadow |
| defaultCountdown | string  | - : - : - | default countdown format before the countdown starts    |
| format           | string  | hh:mm:ss  | set your own format for the countdown                   |

## Roadmap

- [x] ~~LICENSE~~
- [ ] Typescript
- [ ] Article for Medium
- [ ] BuyMeACoffee Link/Widget

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Countdown is available under the MIT license. See the LICENSE file for more info.
