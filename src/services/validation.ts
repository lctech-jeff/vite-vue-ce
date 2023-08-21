import { CustomValidatorService, StaticValidatorService } from '@/application/ports'


/**
 * 客製化 驗證服務
 * @example
 * const { inputValue, hasError, isValid, errorMsg, setValidate, resetValidation } = useValidation()
 */
export const useValidation = (): CustomValidatorService<any> => {
  const inputValue = ref<any>('')
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
    inputValue,
    hasError,
    isValid,
    errorMsg: _errorMsg,
    setValidate,
    resetValidation,
  }
}

/**
 * password 驗證服務
 * @example
 * const { inputValue, hasError, isValid, errorMsg, validate, resetValidation } = usePasswordValidation()
 */
export const usePasswordValidation = (): StaticValidatorService<string> => {
  const inputValue = ref('')
  const _hasValidated = ref(false)
  const _isValidValue = ref(false)

  const _isValidTester = (input: string) => {
    return new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(input)
  }

  const hasError = computed(() => {
    return _hasValidated.value && !_isValidValue.value
  })

  const isValid = computed(() => {
    return _hasValidated.value && _isValidValue.value
  })

  const validate = () => {
    _hasValidated.value = true
    _isValidValue.value = _isValidTester(inputValue.value)
  }

  const resetValidation = () => {
    _hasValidated.value = false
    _isValidValue.value = false
  }

  const errorMsg = computed(() => {
    if (!hasError.value) return ''
    if (!inputValue.value) return 'Please enter a phone number'
    return 'Please enter a valid phone number'
  })

  return {
    inputValue,
    hasError,
    isValid,
    errorMsg,
    validate,
    resetValidation,
  }
}

/**
 * Email 驗證服務
 * @example
 * const { inputValue, hasError, isValid, errorMsg, validate, resetValidation } = useEmailValidation()
 */
export const useEmailValidation = (): StaticValidatorService<Email> => {
  const inputValue = ref('')
  const _hasValidated = ref(false)
  const _isValidValue = ref(false)

  const _isValidTester = (input: string) => {
    return new RegExp(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/).test(input)
  }

  const hasError = computed(() => {
    return _hasValidated.value && !_isValidValue.value
  })

  const isValid = computed(() => {
    return _hasValidated.value && _isValidValue.value
  })

  const validate = () => {
    _hasValidated.value = true
    _isValidValue.value = _isValidTester(inputValue.value)
  }

  const resetValidation = () => {
    _hasValidated.value = false
    _isValidValue.value = false
  }

  const errorMsg = computed(() => {
    if (!hasError.value) return ''
    if (!inputValue.value) return 'Please enter an email address'
    return 'Please enter a valid email address'
  })

  return {
    inputValue,
    hasError,
    isValid,
    errorMsg,
    validate,
    resetValidation,
  }
}
