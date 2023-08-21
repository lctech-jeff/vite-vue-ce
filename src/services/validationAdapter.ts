import { CustomValidatorService, StaticValidatorService } from '@/application/ports'
import { useValidation, usePasswordValidation, useEmailValidation } from '@/services/validation'

export function useValidator(): CustomValidatorService<any> {
  return useValidation()
}

export function usePasswordValidator(): StaticValidatorService<string> {
  return usePasswordValidation()
}

export function useEmailValidator(): StaticValidatorService<Email> {
  return useEmailValidation()
}
