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
 * 驗證服務
 * @interface ValidatorService
 *
 * @param {T} inputValue - 綁定的內容 (e.g. email, password)
 * @param {boolean} hasError - 經過驗證 && 有錯誤
 * @param {boolean} isValid - 經過驗證 && 無錯誤
 * @param {boolean} errorMsg - 錯誤訊息
 * @function resetValidation - 重置驗證
 * @function setValidate - 直接設定驗證結果
 * @function validate - 觸發驗證
 */
export interface ValidatorService<T> {
  inputValue: globalThis.Ref<T>
  hasError: globalThis.Ref<Boolean>
  isValid: globalThis.Ref<Boolean>
  errorMsg: globalThis.Ref<String>
  resetValidation: () => void
  validate?: () => void
  setValidate?: (isValid: boolean, errorMsg: string) => void
}

/**
 * 客製化 驗證服務
 * @interface CustomValidatorService
 */
export interface CustomValidatorService<T> extends ValidatorService<T> {
  setValidate: (isValid: boolean, errorMsg: string) => void
}

/**
 * 固定的 驗證服務 (e.g. Email, password)
 * @interface StaticValidatorService
 */
export interface StaticValidatorService<T> extends ValidatorService<T> {
  validate: () => void
}
