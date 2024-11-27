import prismaClient from "../prisma"

prismaClient

interface DeletarUsuarioProps{
    id: string
}

class DeletarUsuarioService{
    async execute({id}: DeletarUsuarioProps){

        if(!id){
            throw new Error("solicitação invalida. Digite o Id do usuário.")
        }

        const encontrarUsuario = await prismaClient.usuarios.findFirst({
            where:{
                id: id
            }
        })

        if (!encontrarUsuario) {
            throw new Error("Usuario não existe")
        }

        await prismaClient.usuarios.delete({
            where:{
                id: encontrarUsuario.id
            }
        })

        return {message: "Deletado com sucesso!"}
    }
}

export {DeletarUsuarioService}