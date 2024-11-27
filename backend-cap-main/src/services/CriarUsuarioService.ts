import prismaClient from "../prisma";

interface CriarUsuarioProps{
    nome: string
    email:string
    senha: string
}

class CriarUsuarioService{
    async execute({nome, email, senha}: CriarUsuarioProps){

        if (!nome || !email || !senha) {
            throw new Error("Preencha todos os campos")
        } 
        
        const usuario = await prismaClient.usuarios.create({
            data: {
                nome,
                email,
                senha
            }
        })

        return usuario;
    }
}

export {CriarUsuarioService}