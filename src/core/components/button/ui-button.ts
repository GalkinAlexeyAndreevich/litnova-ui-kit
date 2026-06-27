import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

type ButtonVariant = "primary" | "danger";

export class UIButton extends LitElement {
  @property({ type: String }) variant: ButtonVariant = "primary";

  static styles = css`
    button {
      padding: var(--ln-space-2) var(--ln-space-4);
      border-radius: var(--ln-radius-sm);
      border: none;
      cursor: pointer;
    }
    .primary {
      background: var(--ln-color-primary);
      color: var(--ln-color-primary-foreground);
    }
    .danger {
      background: var(--ln-color-danger);
      color: var(--ln-color-danger-foreground);
    }
  `;

  render() {
    return html`<button class=${this.variant}><slot></slot></button>`;
  }
}

export const defineUIButton = () => {
  if (!customElements.get("ui-button")) {
    customElements.define("ui-button", UIButton);
  }
};