import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";

export type UISelectOption = {
  label: string;
  value: string;
};

export class UISelect extends LitElement {
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) placeholder = "Select option";
  @property({ attribute: false }) options: UISelectOption[] = [];
  @state() private isOpen = false;

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    .trigger {
      width: 100%;
      padding: var(--ln-space-2) var(--ln-space-3);
      border-radius: var(--ln-radius-sm);
      border: 1px solid var(--ln-color-border);
      outline: none;
      background: var(--ln-color-surface);
      color: var(--ln-color-text);
      font-size: var(--ln-font-size-sm);
      line-height: var(--ln-line-height-sm);
      text-align: left;
      cursor: pointer;
      transition:
        border-color var(--ln-transition-fast),
        box-shadow var(--ln-transition-fast);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .trigger:focus {
      border-color: var(--ln-color-focus);
    }

    .trigger:disabled {
      opacity: var(--ln-opacity-disabled);
      cursor: not-allowed;
      background: var(--ln-color-surface-muted);
    }

    .placeholder {
      color: var(--ln-color-text-muted);
    }

    .caret {
      color: var(--ln-color-text-muted);
      margin-left: var(--ln-space-2);
      flex-shrink: 0;
    }

    .popover {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + var(--ln-space-2));
      z-index: 10;
      background: var(--ln-color-surface);
      border: 1px solid var(--ln-color-border);
      border-radius: var(--ln-radius-lg);
      box-shadow: var(--ln-shadow-md);
      padding: var(--ln-space-2);
      max-height: 240px;
      overflow: auto;
    }

    .list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 4px;
    }

    .option {
      border: none;
      width: 100%;
      text-align: left;
      background: transparent;
      border-radius: var(--ln-radius-md);
      padding: var(--ln-space-2) 10px;
      cursor: pointer;
      font-size: var(--ln-font-size-sm);
      line-height: var(--ln-line-height-sm);
      color: var(--ln-color-text);
    }

    .option:hover {
      background: var(--ln-color-option-hover);
    }

    .option[aria-selected="true"] {
      background: var(--ln-color-option-selected-bg);
      color: var(--ln-color-option-selected-text);
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("pointerdown", this.handleWindowPointerDown, true);
  }

  disconnectedCallback(): void {
    window.removeEventListener("pointerdown", this.handleWindowPointerDown, true);
    super.disconnectedCallback();
  }

  private handleWindowPointerDown = (event: Event) => {
    const path = event.composedPath();
    if (!path.includes(this)) this.isOpen = false;
  };

  private toggleOpen() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
  }

  private selectOption(nextValue: string) {
    if (this.disabled) return;

    if (this.value !== nextValue) this.value = nextValue;
    this.isOpen = false;

    this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: nextValue },
        bubbles: true,
        composed: true,
      }),
    );

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: nextValue },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private get selectedOption(): UISelectOption | undefined {
    return this.options.find((option) => option.value === this.value);
  }

  render() {
    const selected = this.selectedOption;

    return html`
      <button
        class="trigger"
        type="button"
        ?disabled=${this.disabled}
        aria-haspopup="listbox"
        aria-expanded=${String(this.isOpen)}
        @click=${this.toggleOpen}
      >
        <span class=${selected ? "" : "placeholder"}>
          ${selected?.label ?? this.placeholder}
        </span>
        <span class="caret">${this.isOpen ? "▲" : "▼"}</span>
      </button>

      ${this.isOpen
        ? html`<div class="popover">
            <ul class="list" role="listbox">
              ${this.options.map(
                (option) => html`<li>
                  <button
                    class="option"
                    type="button"
                    role="option"
                    aria-selected=${String(option.value === this.value)}
                    @click=${() => this.selectOption(option.value)}
                  >
                    ${option.label}
                  </button>
                </li>`,
              )}
            </ul>
          </div>`
        : null}
    `;
  }
}

export const defineUISelect = () => {
  if (!customElements.get("ui-select")) {
    customElements.define("ui-select", UISelect);
  }
};

