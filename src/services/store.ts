import { defineStore } from 'pinia'
import { cookies } from '@/services/fakeData'
import type { User } from '@/domain/user'
import type { Order } from '@/domain/order'
import type { Cart } from '@/domain/cart'
import type { Product } from '@/domain/product'

const userEmpty: User = {
  id: '',
  name: '',
  email: '',
  preferences: [],
  allergies: [],
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({ ...userEmpty })
  const updateUser = (userData: User) => {
    user.value = userData ? { ...userData } : { ...userEmpty }
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
    orders,
    updateOrders,
  }
})

export const useProductStore = defineStore('product', () => {
  const cookiesList = ref([...cookies])
  const updateCookies = (cookies: Product[]) => (cookiesList.value = [...cookies])
  return {
    cookies: cookiesList,
    updateCookies,
  }
})
