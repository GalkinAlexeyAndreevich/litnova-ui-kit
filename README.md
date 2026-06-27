# litnova-ui-kit

`litnova-ui-kit` is a minimal UI Kit for both React and Vue.

Published on npm: [https://www.npmjs.com/package/litnova-ui-kit](https://www.npmjs.com/package/litnova-ui-kit)

## Install

```bash
npm i litnova-ui-kit
```

## Styles (required)

Import theme CSS once in your app entry. Without it, components will not be styled correctly.

```ts
import "litnova-ui-kit/theme.css";
```

## Usage (React)

```tsx
import "litnova-ui-kit/theme.css";
import { UiSelect } from "litnova-ui-kit/react";
```

## Usage (Vue)

```ts
import "litnova-ui-kit/theme.css";
import { UiSelect } from "litnova-ui-kit/vue";
```

## Theming

Override CSS variables on `:root` or a container:

```css
:root {
  --ln-color-primary: #6366f1;
}
```
