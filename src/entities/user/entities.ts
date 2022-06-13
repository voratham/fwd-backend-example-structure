export type Gender = 'FEMALE' | 'MALE'

export type PlanCode = 'T11A20' | 'T11A50' | 'T11AM1'

export type PaymentFrequency = 'YEARLY' | 'HALFYEARLY' | 'QUARTERLY' | 'MONTHLYY'

export class User {
    genderCd: Gender
    dob: string
    planCode: PlanCode
    premiumPerYear: number
    paymentFrequency: PaymentFrequency
    saPerYear?: number

    constructor(genderCd: Gender, dob: string, planCode: PlanCode, premiumPerYear: number, paymentFrequency: PaymentFrequency, saPerYear?: number) {
        this.genderCd = genderCd
        this.dob = dob
        this.planCode = planCode
        this.premiumPerYear = premiumPerYear
        this.paymentFrequency = paymentFrequency
        this.saPerYear = saPerYear
    }
}
