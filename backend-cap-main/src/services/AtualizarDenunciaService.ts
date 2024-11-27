import prismaClient from "../prisma";

interface AtualizarDenunciaProps {
  id: string;
  titulo: string;
  descricao: string;
}

class AtualizarDenunciaService {
  async execute({ id, titulo, descricao }: AtualizarDenunciaProps){
    if (!id || !titulo || !descricao) {
      throw new Error("Preencha todos os campos");
    }

    await prismaClient.denuncias.update({
      where: { id },
      data: {
        titulo,
        descricao,
      },
    });
  }
}

export { AtualizarDenunciaService };
