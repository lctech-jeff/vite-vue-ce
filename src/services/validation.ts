import { ValidatorService } from '@/application/ports'

/**
 * 驗證狀態
 * @example
 * // 1.
 * const { hasError, isValid, errorMsg, setValidate, resetValidation } = useValidation()
 * // 2.
 * const inputValidation = useValidation()
 */
export const useValidation = (): ValidatorService => {
  const _hasValidated = ref(false)
  const _isValid = ref(false)
  const _errorMsg = ref('')

  const hasError = computed(() => {
    return _hasValidated.value && !_isValid.value
  })

  const isValid = computed(() => {
    return _hasValidated.value && _isValid.value
  })

  const setValidate = (payload: { isValid: boolean; errorMsg: string }) => {
    _hasValidated.value = true
    _isValid.value = payload.isValid
    _errorMsg.value = payload.errorMsg
  }

  const resetValidation = () => {
    _hasValidated.value = false
    _isValid.value = false
    _errorMsg.value = ''
  }

  return {
    hasError,
    isValid,
    errorMsg: _errorMsg,
    setValidate,
    resetValidation,
  }
}
