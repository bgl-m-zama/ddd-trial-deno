import { Server } from 'http/server.ts';
import { SampleService } from './src/service/sampleService.ts';

const port = 8080;
console.log(`HTTP server listening on http://localhost${port}`)
const handler = (request: Request) => {
  const body = new SampleService().invoke("test")

  return new Response(body, { status: 200 });
};

const server = new Server({ port, handler });
await server.listenAndServe();