import { ProductUsecaseImp } from "./interface"
import { FwdRepositoryImp } from '../../repository/fwd'

import { User } from '../../entities/user'

import { calculateSumAssuredByPremiumValidate, calculatePremiumBySumassuredValidate } from './validateData'
import { omitUndefined } from '../../utils/common'

export class ProductUsecase implements ProductUsecaseImp {
    private fwd: FwdRepositoryImp
    constructor(fwd: FwdRepositoryImp) {
        this.fwd = fwd
    }
    
    async calculateSumAssuredByPremium(u: User): Promise<{ data: any, errors: any}> {
        const { error } = calculateSumAssuredByPremiumValidate.validate(omitUndefined(u))
        if (error) {
            return { data: null, errors: error }
        }
        return await this.fwd.calculateSumAssuredByPremium(u)
    }
    
    async calculatePremiumBySumassured(u: User): Promise<{ data: any, errors: any}> {
        const { error } = calculatePremiumBySumassuredValidate.validate(omitUndefined(u))
        if (error) {
            return { data: null, errors: error }
        }
        return await this.fwd.calculatePremiumBySumassured(u)
    }

}
