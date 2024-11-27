import { FastifyRequest, FastifyReply } from "fastify";
import { DeletarUsuarioService } from "../services/DeletarUsuarioService";

class DeletarUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: string}
        const deletarUsuarioService = new DeletarUsuarioService;

        const usuario = await deletarUsuarioService.execute({id});

        reply.send(usuario);
    }
}

export {DeletarUsuarioController}