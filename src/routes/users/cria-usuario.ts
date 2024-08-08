import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const CriaUsuario = async (app: FastifyInstance) => {
  app.get("/user", (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send([
      { id: 1, name: `emotton` },
      { id: 2, name: `bheatriz.motton` },
    ]);
  });
};
