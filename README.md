# Default Icon Library

[![NPM](https://img.shields.io/npm/v/@default-services/icons?color=%2357a9a9&style=for-the-badge)](https://www.npmjs.com/package/@default-services/icons)
[![Build](https://img.shields.io/badge/build-passing-%2357a9a9?style=for-the-badge)](https://github.com/default-services/icons)
[![License](https://img.shields.io/github/license/default-services/icons?color=%2357a9a9&style=for-the-badge)](https://github.com/default-services/icons/blob/master/LICENSE)

> A default, Font Awesome 5 (Free), icon library for React.
<br>

## 🧪 Beta
The Default icon library is still in its public beta stage; use at your own risk.
<br>

## 🐱‍🏍 Install

**npm:**
```bash
npm install @default-services/icons
```
**yarn:**
```bash
yarn add @default-services/icons
```
<br>

## 🐱‍💻 Use
The Default icon library includes all Font Awesome 5 (Free) icons; [brands](https://fontawesome.com/icons?d=gallery&s=brands), [regular](https://fontawesome.com/icons?d=gallery&s=regular), and [solid](https://fontawesome.com/icons?d=gallery&s=solid). You can determine the name of a Default icon component by doing the following:<br><br>

1. Take the Font Awesome icon name.
2. Remove the dashes.
3. Change its case to PascalCase.
4. Add "Icon" suffix.
<br>
For example, the Font Awesome icon `address-book` is named `AddressBookIcon` in the Default icon library.<br><br>


```jsx
import React, { Component } from 'react';
import { CheckIcon } from '@default-services/icons/solid';

const MyComponent = props => {
  return (
    <div>
      <CheckIcon />
    </div>
  );
};
```
**Tip:** Notice in the example above, the icon is pulled from its respective subdirectory, "solid".
<br>

## 🐱‍👓 Learn
Documentation is coming soon..
<br><br>

## 🐱‍🐉 Support
Default component library utilizes technologies such as Babel to ensure all code is cross-browser compatible, and supports **at least** the following browsers:
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions
<br>

## 🐱‍👤 Develop
Default is equipped with the latest and greatest tech stack, improve your developer portfolio by contributing to a modern open-source project like the Default icon library.<br><br>
<br>

## 🏷️ License

MIT © [Default](https://github.com/default-services/icons/blob/master/LICENSE)<br>
SIL OFL 1.1 © [Font Awesome](https://fontawesome.com/license/free)