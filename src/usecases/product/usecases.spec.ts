import { Mock } from "moq.ts"

import { User } from '../../entities/user'
import { ProductUsecase } from './usecase'
import { FwdRepositoryImp } from '../../repository/fwd'

import { calculateSumAssuredByPremiumValidate, calculatePremiumBySumassuredValidate } from './validateData'

describe('product usecase', () => {
    describe('product usecase => calculateSumAssuredByPremium', () => {
        it('data invalid missing field', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
             } as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculateSumAssuredByPremium(u)
            const { error } = calculateSumAssuredByPremiumValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid gender', async () => {
            const u =  {
                "genderCd": "BOY",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculateSumAssuredByPremium(u)
            const { error } = calculateSumAssuredByPremiumValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid dob', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculateSumAssuredByPremium(u)
            const { error } = calculateSumAssuredByPremiumValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid planCode', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM12",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculateSumAssuredByPremium(u)
            const { error } = calculateSumAssuredByPremiumValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid paymentFrequency', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "mm",
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculateSumAssuredByPremium(u)
            const { error } = calculateSumAssuredByPremiumValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('recive product', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY"
             } as User
    
            const respMock = { benefitTable: [] } as any
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: respMock, errors: null })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculateSumAssuredByPremium(u)
            expect(res.data).toBe(respMock)
            expect(res.errors).toBe(null)
          })
      })
      describe('product usecase => calculatePremiumBySumassured', () => {
        it('data invalid missing field', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
             } as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculatePremiumBySumassured(u)
            const { error } = calculatePremiumBySumassuredValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid gender', async () => {
            const u =  {
                "genderCd": "BOY",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
                "saPerYear": 500000
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculatePremiumBySumassured(u)
            const { error } = calculatePremiumBySumassuredValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid dob', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
                "saPerYear": 500000
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculatePremiumBySumassured(u)
            const { error } = calculatePremiumBySumassuredValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid planCode', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM12",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
                "saPerYear": 500000
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculatePremiumBySumassured(u)
            const { error } = calculatePremiumBySumassuredValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid paymentFrequency', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "monthly",
                "saPerYear": 500000
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculatePremiumBySumassured(u)
            const { error } = calculatePremiumBySumassuredValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('data invalid paymentFrequency', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
                "saPerYear": -500000
            } as unknown as User
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: {}, errors: {} })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculatePremiumBySumassured(u)
            const { error } = calculatePremiumBySumassuredValidate.validate(u)
            expect(res.data).toBe(null)
            expect(res.errors).toMatchObject(error)
          })
          it('recive product', async () => {
            const u =  {
                "genderCd": "FEMALE",
                "dob": "1982-02-21",
                "planCode": "T11AM1",
                "premiumPerYear": 30000,
                "paymentFrequency": "YEARLY",
                "saPerYear": 500000
             } as User
    
            const respMock = { benefitTable: [] } as any
            const fwdRepoMock = new Mock<FwdRepositoryImp>()
            .setup(instance => instance.calculateSumAssuredByPremium(u))
            .returnsAsync({ data: {}, errors: {} })
            .setup(instance => instance.calculatePremiumBySumassured(u))
            .returnsAsync({ data: respMock, errors: null })
            .object()
            const p = new ProductUsecase(fwdRepoMock)
            const res = await p.calculatePremiumBySumassured(u)
            expect(res.data).toBe(respMock)
            expect(res.errors).toBe(null)
          })
      })
  })
  