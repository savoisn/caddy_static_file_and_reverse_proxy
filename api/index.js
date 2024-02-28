import Fastify from "fastify";

const fastify = Fastify({
  logger: false,
});

const reqHandler = (request, reply) => {
  reply.send("Hello World from api root!");
};

fastify.get("/", reqHandler);

fastify.listen({ port: 3000 });
