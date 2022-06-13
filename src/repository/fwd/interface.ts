import { User } from '../../entities/user'

export interface FwdRepositoryImp {
    calculateSumAssuredByPremium(u: User): Promise<{ data: any, errors: any}>
    calculatePremiumBySumassured(u: User): Promise<{ data: any, errors: any}>
}
