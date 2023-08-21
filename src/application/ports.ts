import { Cart } from '@/domain/cart'
import { Order } from '@/domain/order'
import { User } from '@/domain/user'
import { Product } from '@/domain/product'

export interface UserStorageService {
  user: User
  updateUser(user: User): void
  clearUser(): void
}

export interface CartStorageService {
  cart: Cart
  updateCart(cart: Cart): void
  emptyCart(): void
}

export interface OrdersStorageService {
  orders: Order[]
  updateOrders(orders: Order[]): void
}

export interface ProductStorageService {
  cookies: Product[]
  updateCookies(cookies: Product[]): void
}

export interface NotificationService {
  notify(message: string): void
}

export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>
}

/**
 * 驗證狀態 服務
 * @interface ValidatorService
 *
 * @param {boolean} hasError - 經過驗證 && 有錯誤
 * @param {boolean} isValid - 經過驗證 && 無錯誤
 * @param {boolean} errorMsg - 當前錯誤訊息
 * @function resetValidation - 重置驗證狀態
 * @function setValidate - 設定驗證結果
 */
export interface ValidatorService {
  hasError: globalThis.Ref<Boolean>
  isValid: globalThis.Ref<Boolean>
  errorMsg: globalThis.Ref<String>
  setValidate: (payload: { isValid: boolean; errorMsg: string }) => void
  resetValidation: () => void
}
