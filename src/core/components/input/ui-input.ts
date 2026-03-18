import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

export type InputType =
  | "text"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "number";

export class UIInput extends LitElement {
  @property({ type: String }) type: InputType = "text";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;

  static styles = css`
    :host {
      display: block;
    }

    input {
      width: 100%;
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid #d1d5db;
      outline: none;
      background: white;
      font-size: 14px;
      line-height: 20px;
      transition: border-color 120ms ease, box-shadow 120ms ease;
    }

    input:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
    }

    input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: #f9fafb;
    }
  `;

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement | null;
    const nextValue = target?.value ?? "";

    if (this.value !== nextValue) this.value = nextValue;

    this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: nextValue },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement | null;
    const nextValue = target?.value ?? "";

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: nextValue },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`<input
      class="ui-input"
      .type=${this.type}
      .value=${this.value}
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      @input=${this.handleInput}
      @change=${this.handleChange}
    />`;
  }
}

export const defineUIInput = () => {
  if (!customElements.get("ui-input")) {
    customElements.define("ui-input", UIInput);
  }
};
