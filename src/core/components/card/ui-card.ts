import { LitElement, css, html } from "lit";
import { state } from "lit/decorators.js";
import type { PropertyValues } from "lit";

export class UICard extends LitElement {
  @state() private hasHeader = true;
  @state() private hasFooter = true;

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

    .header:not([hidden]) {
      border-top-left-radius: var(--ln-radius-xl);
      border-top-right-radius: var(--ln-radius-xl);
    }

    .body {
      color: var(--ln-color-text);
      min-width: 0;
    }

    .footer {
      border-top: 1px solid var(--ln-color-border-section);
      background: var(--ln-color-surface-subtle);
    }

    .footer:not([hidden]) {
      border-bottom-left-radius: var(--ln-radius-xl);
      border-bottom-right-radius: var(--ln-radius-xl);
    }

    .body.section-last {
      border-bottom-left-radius: var(--ln-radius-xl);
      border-bottom-right-radius: var(--ln-radius-xl);
    }

    .section[hidden] {
      display: none;
    }
  `;

  protected firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    this.syncSlotVisibility();
  }

  private slotHasContent(slot: HTMLSlotElement): boolean {
    return slot.assignedNodes({ flatten: true }).some((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) return true;
      return node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim());
    });
  }

  private syncSlotVisibility(): void {
    const headerSlot = this.shadowRoot?.querySelector(
      'slot[name="header"]',
    ) as HTMLSlotElement | null;
    const footerSlot = this.shadowRoot?.querySelector(
      'slot[name="footer"]',
    ) as HTMLSlotElement | null;

    if (headerSlot) this.hasHeader = this.slotHasContent(headerSlot);
    if (footerSlot) this.hasFooter = this.slotHasContent(footerSlot);
  }

  private onHeaderSlotChange = (event: Event) => {
    this.hasHeader = this.slotHasContent(event.target as HTMLSlotElement);
  };

  private onFooterSlotChange = (event: Event) => {
    this.hasFooter = this.slotHasContent(event.target as HTMLSlotElement);
  };

  render() {
    return html`
      <div class="section header" ?hidden=${!this.hasHeader}>
        <slot name="header" @slotchange=${this.onHeaderSlotChange}></slot>
      </div>
      <div class="section body ${this.hasFooter ? "" : "section-last"}">
        <slot name="body"></slot>
      </div>
      <div class="section footer" ?hidden=${!this.hasFooter}>
        <slot name="footer" @slotchange=${this.onFooterSlotChange}></slot>
      </div>
    `;
  }
}

export const defineUICard = () => {
  if (!customElements.get("ui-card")) {
    customElements.define("ui-card", UICard);
  }
};
