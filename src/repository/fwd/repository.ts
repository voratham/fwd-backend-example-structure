import { AxiosInstance } from 'axios'

import { FwdRepositoryImp } from './interface'
import { fwdInstance } from './helper'

import { User } from '../../entities/user'

export class FwdRepository implements FwdRepositoryImp {
    private http: AxiosInstance
    constructor(http: AxiosInstance) {
        this.http = http
    }

    async calculateSumAssuredByPremium(u: User): Promise<{ data: any, errors: any}>{
        try {
            const resp = await this.http.post('/getProduct', u)
            return { data: resp.data, errors: null }
        } catch (error) {
            return { data: null, errors: error }
        }
    }
    
    async calculatePremiumBySumassured(u: User): Promise<{ data: any, errors: any}> {
        try {
            const resp = await this.http.post('/getProduct', u)
            return { data: resp.data, errors: null }
        } catch (error) {
            return { data: null, errors: error }
        }
    }

}

export const FwdRepositoryInstance = new FwdRepository(fwdInstance)
