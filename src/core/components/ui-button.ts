import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export @customElement('ui-button')
class UIButton extends LitElement {
    @property({ type: String }) variant = 'primary';

    static styles = css`
      button { padding: 8px 16px; border-radius: 6px; border: none; cursor: pointer; }
      .primary { background: #3b82f6; color: white; }
      .danger { background: #ef4444; color: white; }
    `;
  
    render() {
      return html`<button class=${this.variant}><slot></slot></button>`;
    }   
}