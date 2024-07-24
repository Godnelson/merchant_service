import { ValidationResponse } from './../common/types/validationResponse';
export interface BaseValidator<T>{
    validate(object: T): ValidationResponse
}

