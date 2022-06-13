import { FastifyRequest, FastifyReply } from 'fastify'
import { validate } from "class-validator"
import { plainToClass } from "class-transformer"

const validationField = (dtoClass: any) => {
    return (req: FastifyRequest, repl: FastifyReply) => {
        const output: any = plainToClass(dtoClass, req.body);
        validate(output, { skipMissingProperties: true }).then(errors => {
            if (errors.length > 0) {
                console.log(errors);
                let errorTexts = Array();
                for (const errorItem of errors) {
                    errorTexts = errorTexts.concat(errorItem.constraints);
                }
                repl.code(400).send(errorTexts);
                return;
            } else {
                console.log('succees')
            }
        });
    };
}


export { validationField }
