import prismaClient from "../prisma";

class ListarUsuariosService{
    async execute(){

        const usuarios = await prismaClient.usuarios.findMany()

        return usuarios;
    }
}

export {ListarUsuariosService}