import { defineCustomElement } from 'vue'
import HelloWorld from '@/components/HelloWorld.ce.vue'

export function AddCE() {
  customElements.define('j-hello-world', defineCustomElement(HelloWorld))
}
