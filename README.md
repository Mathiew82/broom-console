<div style="margin-bottom:30px; text-align:center;">
  <img src="./assets/logo.png" style="width:300px; border-radius:150px;" />
</div>

<p>
  **Broom Console** is a Visual Studio Code extension that lets you **quickly clean `console.*` statements from your code** using simple keyboard shortcuts. No configuration, no setup — just install and use.
</p>

---

### ✨ Features

- 🧹 Remove `console.log` and `console.debug`
- 🔥 Remove all `console.*` calls (`log`, `debug`, `warn`, `error`, `info`)
- ⌨️ Ready-to-use keyboard shortcuts
- ⚡ Works only on the currently opened file
- 🧠 Zero configuration: install and go

---

### 🚀 Usage

#### Remove `console.log` and `console.debug`

- **Windows / Linux:** `Alt + Shift + C`
- **macOS:** `Option + Shift + C`

Or via the Command Palette:

```
Broom Console: Remove console.log and console.debug
```

---

#### Remove all `console.*`

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

---

### 📝 Example

#### Before

```js
console.log("debug");
console.warn("warning");
const value = 42;
console.error(value);
```

#### After

```js
const value = 42;
```

---

### 🎯 Philosophy

Broom Console is designed to be:

- **Simple**: no configuration required
- **Fast**: one shortcut and done
- **Safe**: only affects the active file

Install it, clean your code, and keep coding.

---

### 📦 Installation

From the VS Code Marketplace:

1. Open Extensions (`Ctrl + Shift + X`)
2. Search for **Broom Console**
3. Install and enjoy 🧹

---

### 🤝 Contributing

Issues and pull requests are welcome.

---

##
