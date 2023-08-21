import { ValidatorService } from '@/application/ports'

/**
 * 客製化 驗證服務
 * @example
 * const { hasError, isValid, errorMsg, setValidate, resetValidation } = useValidation()
 */
export const useValidation = (): ValidatorService => {
  const _hasValidated = ref(false)
  const _isValidValue = ref(false)
  const _errorMsg = ref('')

  const hasError = computed(() => {
    return _hasValidated.value && !_isValidValue.value
  })

  const isValid = computed(() => {
    return _hasValidated.value && _isValidValue.value
  })

  const setValidate = (isValid: boolean, errorMsg: string) => {
    _hasValidated.value = true
    _isValidValue.value = isValid
    _errorMsg.value = errorMsg
  }

  const resetValidation = () => {
    _hasValidated.value = false
    _isValidValue.value = false
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
