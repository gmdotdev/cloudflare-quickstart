import { Hono } from 'hono';

import { decrypt, encrypt } from '@packages/core/utils/encryption';

const ENCRYPTION_KEY = 'SV13NxkUj9Cv6Eo+11Iu1Mh/OCi++u2H8lbbFHBVgAE=';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello, world!');
});

app.get('/encrypted', async (c) => {
  return c.text(await encrypt('Hello, world!', { encryptionKey: ENCRYPTION_KEY }));
});

app.get('/decrypted', async (c) => {
  return c.text(
    await decrypt('HCVK6/3IXc2ThPN5.nB4RsrSM+01S3IpxR6OA+E8OWfXOcNYEuZYPO90=', {
      encryptionKey: ENCRYPTION_KEY,
    }),
  );
});

export default app;
