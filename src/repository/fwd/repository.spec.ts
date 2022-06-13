import { Mock } from "moq.ts"
import { AxiosInstance, AxiosResponse } from 'axios'

import { User } from '../../entities/user'
import { FwdRepository } from './repository'

describe('fwd repository', () => {
    describe('product repository => calculateSumAssuredByPremium', () => {
        it('recive data', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
             } as User
             const respMock = { benefitTable: [] } as any
             const mockAxios = new Mock<AxiosInstance>()
            .setup(instance => instance.post('/getProduct', u))
            .returnsAsync({ data: respMock } as AxiosResponse).object()
            const fwd = new FwdRepository(mockAxios)
            const res = await fwd.calculateSumAssuredByPremium(u)
            expect(res.data).toBe(respMock)
            expect(res.errors).toBe(null)
          })
          it('error from fwd service', async () => {
            const u =  {
                "genderCd": "FEMALE",
             } as User
             const errorMock = new Error("missing parameter")
             const mockAxios = new Mock<AxiosInstance>()
            .setup(instance => instance.post('/getProduct', u))
            .throws(errorMock).object()
            const fwd = new FwdRepository(mockAxios)
            const res = await fwd.calculateSumAssuredByPremium(u)
            expect(res.data).toBe(null)
            expect(res.errors).toBe(errorMock)
          })
      })
      describe('product repository => calculateSumAssuredByPremium', () => {
        it('recive data', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "saPerYear": 500000
             } as User
             const respMock = { benefitTable: [] } as any
             const mockAxios = new Mock<AxiosInstance>()
            .setup(instance => instance.post('/getProduct', u))
            .returnsAsync({ data: respMock } as AxiosResponse).object()
            const fwd = new FwdRepository(mockAxios)
            const res = await fwd.calculatePremiumBySumassured(u)
            expect(res.data).toBe(respMock)
            expect(res.errors).toBe(null)
          })
          it('error from fwd service', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
             } as User
             const errorMock = new Error("missing parameter")
             const mockAxios = new Mock<AxiosInstance>()
            .setup(instance => instance.post('/getProduct', u))
            .throws(errorMock).object()
            const fwd = new FwdRepository(mockAxios)
            const res = await fwd.calculatePremiumBySumassured(u)
            expect(res.data).toBe(null)
            expect(res.errors).toBe(errorMock)
          })
      })
  })
  