# Storybook Addon Tailwind Dark
An add-on to toggle tailwind dark theme for storybook v8

## Installation

First, install the package.

```sh
npm install --save-dev storybook-addon-tailwind-dark
```

Then, register it as an addon in `.storybook/main.js`.

```js
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  // ...rest of config
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-tailwind-dark', // 👈 register the addon here
  ],
};

export default config;
```
