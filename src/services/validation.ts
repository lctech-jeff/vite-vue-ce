import { ValidatorService } from '@/application/ports'

/**
 * 驗證狀態
 * @example
 * const { hasError, isValid, errorMsg, setValidate, resetValidation } = useValidation()
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

  const setValidate = ({ isValid, errorMsg }: { isValid: boolean; errorMsg: string }) => {
    _hasValidated.value = true
    _isValid.value = isValid
    _errorMsg.value = errorMsg
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
