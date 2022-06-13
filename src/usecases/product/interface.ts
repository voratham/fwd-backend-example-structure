import { User } from '../../entities/user'

export interface ProductUsecaseImp {
    calculateSumAssuredByPremium(u: User): Promise<{ data: any, errors: any}>
    calculatePremiumBySumassured(u: User): Promise<{ data: any, errors: any}>
}
