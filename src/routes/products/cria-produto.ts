import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const CriaProduto = async (app: FastifyInstance) => {
  app.get("/product", (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send([
      { id: 1, name: `bola` },
      { id: 2, name: `boneco` },
    ]);
  });
};
