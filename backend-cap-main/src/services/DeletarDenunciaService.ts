import prismaClient from "../prisma"

prismaClient

interface DeletarDenunciaProps{
    id: string
}

class DeletarDenunciaService{
    async execute({id}: DeletarDenunciaProps){

        if(!id){
            throw new Error("solicitação invalida. Digite o Id do usuário.")
        }

        const encontrarDenuncia = await prismaClient.denuncias.findFirst({
            where:{
                id: id
            }
        })

        if (!encontrarDenuncia) {
            throw new Error("Denuncia não existe")
        }

        await prismaClient.denuncias.delete({
            where:{
                id: encontrarDenuncia.id
            }
        })

        return {message: "Deletado com sucesso!"}
    }
}

export {DeletarDenunciaService}