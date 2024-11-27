import { FastifyRequest, FastifyReply } from "fastify";
import { ListarUsuariosService } from "../services/ListarUsuariosService";

class ListarUsuariosController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listarUsuariosService = new ListarUsuariosService()

        const usuarios = await listarUsuariosService.execute();

        reply.send(usuarios);
    }
}
export{ListarUsuariosController}