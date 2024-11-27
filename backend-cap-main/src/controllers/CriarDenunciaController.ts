import { FastifyRequest, FastifyReply } from "fastify";
import { CriarDenunciaService } from "../services/CriarDenunciaService";

class CriarDenunciaController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {titulo, descricao, local} = request.body as {titulo: string, descricao: string, local: string};

        const denunciaService = new CriarDenunciaService();
        const denuncia = await denunciaService.execute({titulo, descricao, local});

        reply.send(denuncia)
    }
}

export {CriarDenunciaController}