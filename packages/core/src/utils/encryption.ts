import { Buffer } from 'node:buffer';

//
// https://medium.com/@tony.infisical/guide-to-web-crypto-api-for-encryption-decryption-1a2c698ebc25
//

export const encrypt = async (plainText: string, opts: { encryptionKey: string }) => {
  // create a random 96-bit initialization vector (IV)
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // encode the text you want to encrypt
  const encodedPlainText = new TextEncoder().encode(plainText);

  // prepare the secret key for encryption
  const secretKey = await crypto.subtle.importKey(
    'raw',
    Buffer.from(opts.encryptionKey, 'base64'),
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  );

  // encrypt the text with the secret key
  const encryptedText = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    secretKey,
    encodedPlainText,
  );

  return `${Buffer.from(iv).toString('base64')}.${Buffer.from(encryptedText).toString('base64')}`;
};

export const decrypt = async (encryption: string, opts: { encryptionKey: string }) => {
  const [iv, encryptedText] = encryption.split('.');

  // prepare the secret key
  const secretKey = await crypto.subtle.importKey(
    'raw',
    Buffer.from(opts.encryptionKey, 'base64'),
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  );

  // decrypt the encrypted text "ciphertext" with the secret key and IV
  const cleartext = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: Buffer.from(iv, 'base64'),
    },
    secretKey,
    Buffer.from(encryptedText, 'base64'),
  );

  // decode the text and return it
  return new TextDecoder().decode(cleartext);
};
