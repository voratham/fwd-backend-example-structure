import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

import { ProductUsecaseImp } from '../../../../usecases/product'
import { User } from '../../../../entities/user'

export class ProductHandler {
    private product: ProductUsecaseImp
    private server: FastifyInstance
    
    constructor(product: ProductUsecaseImp, sever: FastifyInstance) {
        this.product = product
        this.server = sever
    }

    init() {
        this.server.post('/v1/product/calculateSumAssuredByPremium', (req, repl) => {
            this.calculateSumAssuredByPremium(req, repl)
        })
        this.server.post('/v1/product/calculatePremiumBySumassured', (req, repl) => {
            this.calculatePremiumBySumassured(req, repl)
        })
    }

    async calculateSumAssuredByPremium(req: FastifyRequest, repl: FastifyReply) {
        const body = req.body as User
        const u = new User(body.genderCd, body.dob, body.planCode, body.premiumPerYear, body.paymentFrequency)
        try {
            const resp = await this.product.calculateSumAssuredByPremium(u)
            if (resp.errors) {
                if (resp.errors._original) {
                    return repl.code(400).send(resp.errors)
                }
                return repl.code(500).send(resp.errors)
            }
            return repl.code(200).send(resp)
        } catch (error) {
            return repl.code(500).send(error)
        }
    }

    async calculatePremiumBySumassured(req: FastifyRequest, repl: FastifyReply) {
        const body = req.body as User
        const u = new User(body.genderCd, body.dob, body.planCode, body.premiumPerYear, body.paymentFrequency, body.saPerYear)
        try {
            const resp = await this.product.calculatePremiumBySumassured(u)
            if (resp.errors) {
                if (resp.errors._original) {
                    return repl.code(400).send(resp.errors)
                }
                return repl.code(500).send(resp.errors)
            }
            return repl.send(resp);
        } catch (error) {
            return repl.code(500).send(error);
        }
    }
}
