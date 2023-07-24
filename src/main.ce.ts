import { defineCustomElement } from 'vue'
import CheckoutBtn from '@/components/CheckoutBtn/Entry.ce.vue'
import CheckoutPanel from '@/components/CheckoutPanel/Entry.ce.vue'

export const JCheckoutBtn = defineCustomElement(CheckoutBtn)
export const JCheckoutPanel = defineCustomElement(CheckoutPanel)

export function register(tagPrefix = 'j') {
  customElements.define(`${tagPrefix}-checkout-btn`, JCheckoutBtn)
  customElements.define(`${tagPrefix}-checkout-panel`, JCheckoutPanel)
}
