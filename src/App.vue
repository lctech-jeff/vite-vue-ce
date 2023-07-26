<!-- 為了方便開發，開發時會以Vue component的方式載入。 -->

<script setup lang="ts">
import Btn from '@/components/Btn/Entry.ce.vue'
import CheckoutBtn from '@/components/CheckoutBtn/Entry.ce.vue'
import CheckoutPanel from '@/components/CheckoutPanel/Entry.ce.vue'
import ProductList from '@/components/ProductList/Entry.ce.vue'
import { useUserStorage } from '@/services/storageAdapter'

const userStorage = useUserStorage()
const user = computed(() => userStorage.user)

const login = () => {
  userStorage.updateUser({
    id: '100001',
    name: 'Jeff',
    email: 'jeff@lctech.com',
    preferences: ['cherry'],
    allergies: ['peanuts'],
  })
}

const logout = async () => {
  userStorage.clearUser()
  await nextTick()
  window.location.href = '/'
}
</script>

<template>
  <div class="my-6">
    <CheckoutBtn />
  </div>
  <div class="my-6">
    <CheckoutPanel />
  </div>
  <div class="my-6">
    <ProductList />
  </div>

  <div>
    <Btn v-if="user?.id" class="btn" @click="logout">
      <template #text>
        <div>嗨！{{ user.name }}</div>
      </template>
    </Btn>
    <Btn v-else class="btn" @click="login">
      <template #text>
        <div>登入</div>
      </template>
    </Btn>
  </div>
</template>

<style scoped>
:deep(.btn) {
  @apply fixed right-[5vw] top-[5vh];
}
</style>
