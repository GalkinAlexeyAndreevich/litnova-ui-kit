import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

type ButtonVariant = "primary" | "danger";

export class UIButton extends LitElement {
  @property({ type: String }) variant: ButtonVariant = "primary";

  static styles = css`
    button {
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }
    .primary {
      background: #3b82f6;
      color: white;
    }
    .danger {
      background: #ef4444;
      color: white;
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