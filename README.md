<div align="center">
  <img src="./logo.png" width="300" />
</div>

&nbsp;

**Broom Console** is a Visual Studio Code extension that lets you **quickly clean `console.*` statements from your code** using simple keyboard shortcuts. No configuration, no setup — just install and use.

<div align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=Mathiew82.broom-console&ssr=false#overview" target="_blank" rel="noopener">
        VS Marketplace
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#features">
        Features
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#usage">
        Usage
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#contributing">
        Contributing
    </a>
    <span>&nbsp;❖&nbsp;</span>
    <a href="#license">
        License
    </a>
</div>

<p></p>

<div align="center">
  
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![GitHub stars](https://img.shields.io/github/stars/Mathiew82/broom-console)
![GitHub forks](https://img.shields.io/github/forks/Mathiew82/broom-console)
![GitHub issues](https://img.shields.io/github/issues/Mathiew82/broom-console)
![GitHub PRs](https://img.shields.io/github/issues-pr/Mathiew82/broom-console)

</div>

## Features

- 🧹 Remove `console.log` and `console.debug`
- 🔥 Remove all `console.*` calls (`log`, `debug`, `warn`, `error`, `info`)
- ⌨️ Ready-to-use keyboard shortcuts
- ⚡ Works only on the currently opened file
- 🧠 Zero configuration: install and go

## Usage

### Remove `console.log` and `console.debug`

- **Windows / Linux:** `Alt + Shift + C`
- **macOS:** `Option + Shift + C`

Or via the Command Palette:

```
Broom Console: Remove console.log and console.debug
```

### Remove all `console.*`

Includes:

- `console.log`
- `console.debug`
- `console.warn`
- `console.error`
- `console.info`

Shortcut:

- **Windows / Linux:** `Alt + Shift + X`
- **macOS:** `Option + Shift + X`

Or via the Command Palette:

```
Broom Console: Remove all console methods
```

## Example

### Before

```js
console.log("debug");
console.warn("warning");
const value = 42;
console.error(value);
```

### After

```js
const value = 42;
```

## Installation

From the VS Code Marketplace:

1. Open Extensions (`Ctrl + Shift + X`)
2. Search for **Broom Console**
3. Install and enjoy 🧹

## Contributing

Issues and pull requests are welcome.

## License

[Apache-2.0 license](https://github.com/mathiew82/broom-console?tab=Apache-2.0-1-ov-file#readme)

&nbsp;

### 💝 Thank you for using it

Created by **Mathiew82**: [Github](https://github.com/Mathiew82) | [Portfolio](https://amateo82.es)
