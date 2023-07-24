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

  return {
    user,
    cookies,
    updateUser,
  }
})

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart>({ products: [] })
  const updateCart = (cartData: Cart) => (cart.value = cartData)

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
  
  return {
    cookies,
    orders,
    updateOrders,
  }
})
