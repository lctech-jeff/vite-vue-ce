<!-- 為了方便開發，開發時會以Vue component的方式載入。 -->

<script setup lang="ts">
import CheckoutBtn from '@/components/CheckoutBtn/Entry.ce.vue'
import CheckoutPanel from '@/components/CheckoutPanel/Entry.ce.vue'
import { useUserStorage } from '@/services/storageAdapter'

const userStorage = useUserStorage()
const user = computed(() => userStorage.user)

const login = () => {
  userStorage.updateUser({
    id: '100001',
    name: 'Jeff',
    email: 'jeff@lctech.com',
    preferences: [],
    allergies: [],
  })
}

const logout = () => {
  window.location.href = '/'
}
</script>

<template>
  <CheckoutBtn />
  <CheckoutPanel />

  <div>
    <button v-if="user?.id" type="button" class="btn-login" @click="logout">嗨！{{ user.name }}</button>
    <button v-else type="button" class="btn-login" @click="login">登入</button>
  </div>
</template>

<style>
.btn-login {
  border: 1px solid rgb(19, 19, 45);
  position: fixed;
  right: 5vh;
  top: 5vh;
  cursor: pointer;
}
</style>
