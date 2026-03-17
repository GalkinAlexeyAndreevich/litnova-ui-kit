import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './core/components/button/ui-button'

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: Number })
  count = 0

  render() {
    return html`
        <ui-button class="counter" @click=${this._onClick} part="button">
          Count is ${this.count}
        </ui-button>
    `
  }

  private _onClick() {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
