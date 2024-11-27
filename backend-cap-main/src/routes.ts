import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CriarUsuarioController } from "./controllers/CriarUsuarioController";
import { ListarUsuariosController } from "./controllers/ListarUsuariosController";
import { DeletarUsuarioController } from "./controllers/DeletarUsuarioController";
import { CriarDenunciaController } from "./controllers/CriarDenunciaController";
import { ListarDenunciasController } from "./controllers/ListarDenunciasController";
import { DeletarDenunciaController } from "./controllers/DeletarDenunciaController";
import { AtualizarDenunciaController } from "./controllers/AtualizarDenunciaController";

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions){

//Usuários

    fastify.post("/usuario", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CriarUsuarioController().handle(request, reply)
    })

    fastify.get("/usuarios", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListarUsuariosController().handle(request, reply)
    })

    fastify.delete("/usuario", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeletarUsuarioController().handle(request, reply)
    })


//Denuncias

fastify.post("/denuncia", async(request: FastifyRequest, reply: FastifyReply) => {
    return new CriarDenunciaController().handle(request, reply)
})

fastify.get("/denuncias", async(request: FastifyRequest, reply: FastifyReply) => {
    return new ListarDenunciasController().handle(request, reply)
})

fastify.delete("/denuncia", async(request: FastifyRequest, reply: FastifyReply) => {
    return new DeletarDenunciaController().handle(request, reply)
})

fastify.put("/denuncia", async(request: FastifyRequest, reply: FastifyReply) => {
    return new AtualizarDenunciaController().handle(request, reply)
})
}