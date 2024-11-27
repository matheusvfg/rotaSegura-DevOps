import { FastifyRequest, FastifyReply } from "fastify";
import { ListarDenunciasService } from "../services/ListarDenunciasService";

class ListarDenunciasController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listarDenunciasService = new ListarDenunciasService()

        const denuncias = await listarDenunciasService.execute();

        reply.send(denuncias);
    }
}
export{ListarDenunciasController}