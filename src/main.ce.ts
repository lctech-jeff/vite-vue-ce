import { defineCustomElement } from 'vue'
import HelloWorld from '@/components/HelloWorld.ce.vue'

export const JHelloWorld = defineCustomElement(HelloWorld)

export function register(tagName = 'j-hello-world') {
  customElements.define(tagName, JHelloWorld)
}
