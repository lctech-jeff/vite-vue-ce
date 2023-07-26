import { defineCustomElement } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

import Btn from '@/components/Btn/Entry.ce.vue'
import CheckoutBtn from '@/components/CheckoutBtn/Entry.ce.vue'
import CheckoutPanel from '@/components/CheckoutPanel/Entry.ce.vue'
import ProductList from '@/components/ProductList/Entry.ce.vue'

setActivePinia(createPinia())

export const JBtn = defineCustomElement(Btn)
export const JCheckoutBtn = defineCustomElement(CheckoutBtn)
export const JCheckoutPanel = defineCustomElement(CheckoutPanel)
export const JProductList = defineCustomElement(ProductList)

export const register = (tagPrefix = 'j') => {
  customElements.define(`${tagPrefix}-btn`, JBtn)
  customElements.define(`${tagPrefix}-checkout-btn`, JCheckoutBtn)
  customElements.define(`${tagPrefix}-checkout-panel`, JCheckoutPanel)
  customElements.define(`${tagPrefix}-product-list`, JProductList)
}
