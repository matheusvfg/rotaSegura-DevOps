import prismaClient from "../prisma";

interface CriarDenunciaProps{
    titulo: string
    descricao:string
    local: string
}

class CriarDenunciaService{
    async execute({titulo, descricao, local}: CriarDenunciaProps){

        if (!titulo || !descricao || !local) {
            throw new Error("Preencha todos os campos")
        } 
        
        const denuncias = await prismaClient.denuncias.create({
            data: {
                titulo,
                descricao,
                local
            }
        })

        return denuncias;
    }
}

export {CriarDenunciaService}