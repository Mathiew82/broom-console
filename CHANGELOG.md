# Changelog

All notable changes to **Broom Console** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [1.0.8] – 2025-12-20

### ✨ Improved

- Update the extension description.

## [1.0.7] – 2025-12-20

### ✨ Improved

- The info message is no longer displayed in the editor when consoles have been deleted. This is an improvement to the user experience; although the message is no longer helpful, it could be annoying.

## [1.0.6] – 2025-12-20

### 🔒 License

- Change the Apache license to MIT. This license is better suited to this type of extension.

## [1.0.5] – 2025-12-19

### ✨ Improved

- Improved the README with more information.

## [1.0.4] – 2025-12-19

### 🐛 Fixed

- Fixed an issue where some `console.*` statements were not being removed correctly when running the **Remove all console methods** command.
- Improved the regular expression handling to ensure only lines containing `console.*` statements are removed, without affecting surrounding blank lines or unrelated code.

### 🧪 Added

- Added automated extension tests to validate the behavior of:
  - Removing `console.log` and `console.debug`
  - Removing all supported `console.*` methods (`log`, `debug`, `warn`, `error`, `info`)
  - Handling edge cases such as no active editor and files without console statements

### 🔒 Quality & Reliability

- Integrated tests into a Continuous Integration (CI) pipeline using **GitHub Actions**.
- Tests now run automatically on every push and pull request, increasing confidence and preventing regressions.
- CI setup includes a headless VS Code test environment to ensure cross-platform reliability.

---

## [1.0.3] – 2025-12-18

### ✨ Improved

- Refactored internal logic to reuse a single, generic console-removal function.
- Added automatic language detection (English / Spanish) for user-facing messages.

---

## [1.0.2] – 2025-12-17

### ✨ Added

- New command to remove **all** `console.*` statements (`log`, `debug`, `warn`, `error`, `info`).
- Keyboard shortcuts for faster usage.

---

## [1.0.1] – 2025-12-16

### ✨ Added

- Initial command to remove `console.log` and `console.debug` from the active editor.

---

## [1.0.0] – 2025-12-15

### 🎉 Initial Release

- First public release of **Broom Console**.
- Simple, zero-configuration commands to clean up `console.*` statements from the active file.
