import { Server } from 'http/server.ts';
import { BbbBillingService } from './src/service/bbbBillingService.ts';

const port = 8080;
console.log(`HTTP server listening on http://localhost:${port}`)
const handler = (request: Request) => {
  const resultCode = new BbbBillingService().make()
  return new Response(resultCode, { status: 200 });
};

const server = new Server({ port, handler });
await server.listenAndServe();