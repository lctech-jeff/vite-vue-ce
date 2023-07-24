import { defineStore } from 'pinia'
import { cookies } from '@/services/fakeData'
import type { User } from '@/domain/user'
import type { Order } from '@/domain/order'
import type { Cart } from '@/domain/cart'

const userEmpty = {
  id: '',
  name: '',
  email: '',
  preferences: [],
  allergies: [],
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({ ...userEmpty })
  const updateUser = (userData: User) => {
    user.value = { ...userData } ?? { ...userEmpty }
  }

  const STORAGE_KEY = 'my-user'
  const userInStorage = localStorage.getItem(STORAGE_KEY)
  if (userInStorage) updateUser(JSON.parse(userInStorage))
  watch(
    user,
    nVal => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nVal))
    },
    { deep: true }
  )

  return {
    user,
    cookies,
    updateUser,
    clearUser: () => updateUser({ ...userEmpty }),
  }
})

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart>({ products: [] })

  const updateCart = (cartData: Cart) => (cart.value = cartData)
  const STORAGE_KEY = 'my-cart'
  const cartInStorage = localStorage.getItem(STORAGE_KEY)
  if (cartInStorage) updateCart(JSON.parse(cartInStorage))
  watch(
    cart,
    nVal => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nVal))
    },
    { deep: true }
  )

  return {
    cart,
    cookies,
    updateCart,
    emptyCart: () => updateCart({ products: [] }),
  }
})

export const useOrderStore = defineStore('order', () => {
  const orders = ref<Order[]>([])
  const updateOrders = (ordersData: Order[]) => (orders.value = ordersData)
  const STORAGE_KEY = 'my-order'
  const orderInStorage = localStorage.getItem(STORAGE_KEY)
  if (orderInStorage) updateOrders(JSON.parse(orderInStorage))
  watch(
    orders,
    nVal => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nVal))
    },
    { deep: true }
  )

  return {
    cookies,
    orders,
    updateOrders,
  }
})
