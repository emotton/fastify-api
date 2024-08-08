import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const EditaProduto = async (app: FastifyInstance) => {
  app.post("/product", (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(201).send({ id: 1, name: `bola` });
  });
};
