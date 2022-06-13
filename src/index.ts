import dotenv from 'dotenv'
dotenv.config()
import fastify from 'fastify'

import * as handlerHttpV1 from './handlers/http/v1'

import * as FwdRepository from './repository/fwd'
import * as productUsecase from './usecases/product'

const server = fastify({ logger: true })

async function init() {

	const productU = new productUsecase.ProductUsecase(FwdRepository.FwdRepositoryInstance)
	const productH = new handlerHttpV1.ProductHandler(productU, server)
	productH.init()
	
	server.listen(process.env.PORT)
}

init()


