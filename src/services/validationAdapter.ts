import { ValidatorService } from '@/application/ports'
import { useValidation } from '@/services/validation'

export function useValidator(): ValidatorService {
  return useValidation()
}

// 規劃 - 前端驗證四步驟

// 1. 填入驗證，是否有填入、是否為必填。
// 2. 格式驗證，格式是否正確、長度是否足夠。
// 3. 條件驗證，是否需要與其他輸入框相符或相異。
// 4. API驗證，是否已註冊、已使用或是不合其他後端邏輯。