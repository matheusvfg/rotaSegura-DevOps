import { FastifyRequest, FastifyReply } from "fastify";
import { AtualizarDenunciaService } from "../services/AtualizarDenunciaService";

class AtualizarDenunciaController {
  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { id, titulo, descricao } = request.body as {
      id: string;
      titulo: string;
      descricao: string;
    };

    const atualizarDenunciaService = new AtualizarDenunciaService();
    await atualizarDenunciaService.execute({ id, titulo, descricao });
  }
}

export { AtualizarDenunciaController };
