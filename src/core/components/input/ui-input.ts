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
      padding: var(--ln-space-2) var(--ln-space-3);
      border-radius: var(--ln-radius-sm);
      border: 1px solid var(--ln-color-border);
      outline: none;
      background: var(--ln-color-surface);
      color: var(--ln-color-text);
      font-size: var(--ln-font-size-sm);
      line-height: var(--ln-line-height-sm);
      transition:
        border-color var(--ln-transition-fast),
        box-shadow var(--ln-transition-fast);
    }

    input:focus {
      border-color: var(--ln-color-focus);
      box-shadow: 0 0 0 3px var(--ln-color-focus-ring);
    }

    input:disabled {
      opacity: var(--ln-opacity-disabled);
      cursor: not-allowed;
      background: var(--ln-color-surface-muted);
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
