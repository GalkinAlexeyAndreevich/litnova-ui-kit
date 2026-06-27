import "./core/register";
import type { UISelect } from "./core/components/select/ui-select";

const app = document.querySelector("#app");
if (!app) {
  throw new Error("Demo root #app not found");
}

app.innerHTML = `
  <ui-card>
    <span slot="header">litnova-ui-kit</span>
    <div slot="body" class="demo-stack">
      <ui-button id="demo-button" variant="primary">Count: 0</ui-button>
      <ui-input id="demo-input" placeholder="Type here"></ui-input>
      <ui-select id="demo-select" placeholder="Choose option"></ui-select>
    </div>
  </ui-card>
`;

const button = document.querySelector("#demo-button");
const select = document.querySelector("ui-select#demo-select") as UISelect | null;

let count = 0;

button?.addEventListener("click", () => {
  count += 1;
  button.textContent = `Count: ${count}`;
});

if (select) {
  select.options = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
  ];
}
