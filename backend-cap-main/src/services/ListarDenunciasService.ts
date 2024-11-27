import prismaClient from "../prisma";

class ListarDenunciasService{
    async execute(){

        const denuncias = await prismaClient.denuncias.findMany()

        return denuncias;
    }
}

export {ListarDenunciasService}