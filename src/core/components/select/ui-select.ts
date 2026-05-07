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
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid #d1d5db;
      outline: none;
      background: white;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
      cursor: pointer;
      transition: border-color 120ms ease, box-shadow 120ms ease;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .trigger:focus {
      border-color: #3b82f6;
    }

    .trigger:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: #f9fafb;
    }

    .placeholder {
      color: #6b7280;
    }

    .caret {
      color: #6b7280;
      margin-left: 8px;
      flex-shrink: 0;
    }

    .popover {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 8px);
      z-index: 10;
      background: white;
      border: 1px solid #d1d5db;
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
      padding: 6px;
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
      border-radius: 8px;
      padding: 8px 10px;
      cursor: pointer;
      font-size: 14px;
      line-height: 20px;
    }

    .option:hover {
      background: #f3f4f6;
    }

    .option[aria-selected="true"] {
      background: #eff6ff;
      color: #1d4ed8;
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

