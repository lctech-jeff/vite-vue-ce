import { defineCustomElement } from 'vue'
import CompEntry from '@/components/CompEntry.ce.vue'

export const JCompEntry = defineCustomElement(CompEntry)

export function register(tagName = 'j-vue-comp') {
  customElements.define(tagName, JCompEntry)
}
