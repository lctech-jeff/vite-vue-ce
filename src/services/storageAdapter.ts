import { CartStorageService, OrdersStorageService, UserStorageService } from '@/application/ports'
import { useUserStore, useCartStore, useOrderStore } from '@/services/store'

export function useUserStorage(): UserStorageService {
  return useUserStore()
}

export function useCartStorage(): CartStorageService {
  return useCartStore()
}

export function useOrdersStorage(): OrdersStorageService {
  return useOrderStore()
}
