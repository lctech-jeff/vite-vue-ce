import { cookies } from '@/services/fakeData'
import type { User } from '@/domain/user'
import type { Order } from '@/domain/order'
import type { Cart } from '@/domain/cart'

const user = ref<User>()
const cart = ref<Cart>({ products: [] })
const orders = ref<Order[]>([])

const updateUser = (userData: User) => (user.value = userData)
const updateCart = (cartData: Cart) => (cart.value = cartData)
const updateOrders = (ordersData: Order[]) => (orders.value = ordersData)

export function useUserStore() {
  return {
    user: unref(user),
    cookies,
    updateUser,
  }
}

export function useCartStore() {
  return {
    cart: unref(cart),
    cookies,
    updateCart,
    emptyCart: () => updateCart({ products: [] }),
  }
}

export function useOrderStore() {
  return {
    cookies,
    orders: unref(orders),
    updateOrders,
  }
}
