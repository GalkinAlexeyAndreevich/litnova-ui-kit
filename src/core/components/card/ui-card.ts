import { LitElement, css, html } from "lit";

export class UICard extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: #ffffff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
      overflow: hidden;
    }

    .section {
      display: block;
      padding: 16px;
    }

    .header {
      border-bottom: 1px solid #f3f4f6;
      font-weight: 600;
    }

    .body {
      color: #111827;
    }

    .footer {
      border-top: 1px solid #f3f4f6;
      background: #fafafa;
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
