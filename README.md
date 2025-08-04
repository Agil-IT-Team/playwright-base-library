# 📘 playwright-base-library

**playwright-base-library** is a baseline Node.js library designed for building web automation projects using [Playwright](https://playwright.dev/). It provides a clean and structured foundation with useful utilities and configuration options to get started quickly.

---

## 🚧 Prerequisites

- [Node.js](https://nodejs.org/en/download) version **≥ 22.14**
- Install Playwright with browser binaries and dependencies:

  ```bash
  npx playwright install --with-deps
  ```

---

## 🚀 Usage

Here’s a minimal example of how to use **playwright-base-library**, in your project:

### `index.js`

```js
import { main } from "playwright-base-library";
import processing from "./processing.js"; // Your implementation logic

await main(processing);
```

### `processing.js`

```js
import {
  askUser,
  waitEntirePageToLoad,
  takeScreenshot,
} from "playwright-base-library";
import playwright from "playwright";

/**
 * Web automation logic
 * @param {playwright.Page} page - Reference to the Playwright page
 */
export default async function processing(page) {
  console.log("Start processing...");

  // Your custom logic here

  console.log("Finished processing...");
}
```

---

## ⚙️ Configuration

The library can be customized through the following environment variables:

| Variable                               | Default Value        | Description                                                                                |
| -------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------ |
| `DEMO_MODE`                            | `true`               | Toggles demo mode. In demo mode, logs/simulations are used instead of real actions.        |
| `BASE_URL`                             | **Required**         | The starting URL for your automation.                                                      |
| `SCREENSHOT_FOLDER_PATH`               | `./data/screenshots` | Directory to store screenshots.                                                            |
| `LOGS_FOLDER_PATH`                     | `./data/logs`        | Directory to store logs.                                                                   |
| `USER_AGENT`                           | Chrome default       | Custom user-agent string.                                                                  |
| `USER_DATA_DIR`                        | _(optional)_         | Path to a user profile folder (useful for session persistence like cookies, logins, etc.). |
| `DEFAULT_ADDITIONAL_WAIT_TIME_SECONDS` | `3`                  | Additional wait time (in seconds) after calling `waitEntirePageToLoad(...)`.               |
| `QUESTION_TIMEOUT_SECONDS`             | `30`                 | Timeout (in seconds) for user input using `askUser(...)`.                                  |

---

## 📎 Notes

- The library **requires** Playwright for any automation logic.
- Chrome is used as the default browser.
- Log files and screenshots are stored in the `data/` folder by default. You can override paths using the corresponding environment variables.

---

## 📚 References

- [Playwright Documentation](https://playwright.dev/)
- [Page Object Model Design Pattern](https://martinfowler.com/bliki/PageObject.html)
