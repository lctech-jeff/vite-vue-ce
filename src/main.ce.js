import { defineCustomElement } from 'vue'
import HelloWorld from '@/components/HelloWorld.ce.vue'

customElements.define('j-hello-world', defineCustomElement(HelloWorld))
