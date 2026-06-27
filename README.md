# litnova-ui-kit

Minimal cross-framework UI kit built on Lit Web Components with React and Vue adapters.

Published on npm: [https://www.npmjs.com/package/litnova-ui-kit](https://www.npmjs.com/package/litnova-ui-kit)

## Components

| Component | Web Component | React      | Vue        |
| --------- | ------------- | ---------- | ---------- |
| Button    | `ui-button`   | `UIButton` | `UiButton` |
| Input     | `ui-input`    | `UIInput`  | `UiInput`  |
| Card      | `ui-card`     | `UICard`   | `UiCard`   |
| Select    | `ui-select`   | `UISelect` | `UiSelect` |

## Install

```bash
npm i litnova-ui-kit
```

Peer dependencies (install only what you use):

```bash
npm i react    # for litnova-ui-kit/react
npm i vue      # for litnova-ui-kit/vue
```

## Styles (required)

Import theme CSS once in your app entry. Without it, components will not be styled correctly.

```ts
import "litnova-ui-kit/theme.css";
```

## Usage (Web Components)

Register all components once, then use tags in HTML or any framework:

```ts
import "litnova-ui-kit/theme.css";
import "litnova-ui-kit/core/register";
```

```html
<ui-button variant="primary">Save</ui-button>
<ui-input placeholder="Email"></ui-input>
<ui-select id="country"></ui-select>
```

Set `options` on `ui-select` from JavaScript (it is not an HTML attribute):

```ts
const select = document.querySelector("ui-select");
select.options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];
```

## Usage (React)

```tsx
import "litnova-ui-kit/theme.css";
import { UIButton, UIInput, UICard, UISelect } from "litnova-ui-kit/react";

export function Example() {
  return (
    <UICard>
      <span slot="header">Profile</span>
      <div slot="body">
        <UIInput placeholder="Name" />
        <UISelect
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
          ]}
        />
        <UIButton variant="primary">Save</UIButton>
      </div>
    </UICard>
  );
}
```

## Usage (Vue)

```vue
<script setup lang="ts">
import "litnova-ui-kit/theme.css";
import { UiButton, UiInput, UiCard, UiSelect } from "litnova-ui-kit/vue";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];
</script>

<template>
  <UiCard>
    <template #header>Profile</template>
    <template #body>
      <UiInput v-model="name" placeholder="Name" />
      <UiSelect v-model="value" :options="options" />
      <UiButton variant="primary">Save</UiButton>
    </template>
  </UiCard>
</template>
```

## Events

`ui-input` and `ui-select` dispatch native-like custom events:

- `input` — value changed (`event.detail.value`)
- `change` — committed change (`event.detail.value`)

Vue wrappers map these to `v-model` / `update:modelValue`.

## Package exports

| Import path                    | Description                    |
| ------------------------------ | ------------------------------ |
| `litnova-ui-kit`               | Core classes and `defineAll()` |
| `litnova-ui-kit/core`          | Same as main entry             |
| `litnova-ui-kit/core/register` | Registers all custom elements  |
| `litnova-ui-kit/react`         | React wrappers                 |
| `litnova-ui-kit/vue`           | Vue wrappers                   |
| `litnova-ui-kit/theme.css`     | Design tokens and base styles  |

## Theming

Override CSS variables on `:root` or a container:

```css
:root {
  --ln-color-primary: #6366f1;
}
```

Dark mode follows `prefers-color-scheme: dark` via variables in `theme.css`.

## Development

Start the local demo with Vite (do not open `index.html` directly in the browser):

```bash
npm run dev              # local demo at http://localhost:5173
npm run storybook:wc     # Storybook — web components
npm run storybook:react  # Storybook — React
npm run storybook:vue    # Storybook — Vue
npm run test:e2e         # Playwright e2e tests
npm run build            # library build
```
