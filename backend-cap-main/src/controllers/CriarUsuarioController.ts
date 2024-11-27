import { FastifyRequest, FastifyReply } from "fastify";
import { CriarUsuarioService } from "../services/CriarUsuarioService";

class CriarUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {nome, email, senha} = request.body as {nome: string, email: string, senha: string};
        console.log(nome);
        console.log(email);
        console.log(senha);

        const usuarioService = new CriarUsuarioService();
        const usuario = await usuarioService.execute({nome, email, senha});

        reply.send(usuario)
    }
}

export {CriarUsuarioController}