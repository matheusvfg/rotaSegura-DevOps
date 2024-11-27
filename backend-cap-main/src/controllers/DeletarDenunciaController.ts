import { FastifyRequest, FastifyReply } from "fastify";
import { DeletarDenunciaService } from "../services/DeletarDenunciaService";

class DeletarDenunciaController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: string}
        const deletarDenunciaService = new DeletarDenunciaService;

        const denuncia = await deletarDenunciaService.execute({id});

        reply.send(denuncia);
    }
}

export {DeletarDenunciaController}