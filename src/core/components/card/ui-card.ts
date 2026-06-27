import { LitElement, css, html } from "lit";

export class UICard extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid var(--ln-color-border-subtle);
      border-radius: var(--ln-radius-xl);
      background: var(--ln-color-surface);
      box-shadow: var(--ln-shadow-sm);
      overflow: hidden;
    }

    .section {
      display: block;
      padding: var(--ln-space-4);
    }

    .header {
      border-bottom: 1px solid var(--ln-color-border-section);
      font-weight: var(--ln-font-weight-semibold);
    }

    .body {
      color: var(--ln-color-text);
    }

    .footer {
      border-top: 1px solid var(--ln-color-border-section);
      background: var(--ln-color-surface-subtle);
    }
  `;

  render() {
    return html`
      <div class="section header">
        <slot name="header"></slot>
      </div>
      <div class="section body">
        <slot name="body"></slot>
      </div>
      <div class="section footer">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

export const defineUICard = () => {
  if (!customElements.get("ui-card")) {
    customElements.define("ui-card", UICard);
  }
};
