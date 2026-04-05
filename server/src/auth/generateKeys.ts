import { generateKeyPair } from "node:crypto";
import { writeFile } from "node:fs";

async function generateKeys() {
  generateKeyPair(
    "rsa",
    {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: process.env.passphrase as string,
      },
    },
    (err, publicKey, privateKey) => {
      if (err) console.error(err);

      console.log(publicKey);
      console.log(privateKey);

      const pubEnc = Buffer.from(publicKey).toString("base64url");
      const prvEnv = Buffer.from(privateKey).toString("base64url");

      const dataToWrite = `\nPUBLIC_KEY=${pubEnc}\nPRIVATE_KEY=${prvEnv}\n`;

      writeFile(
        import.meta.dirname + "/../../.env",
        dataToWrite,
        {
          flag: "a",
        },
        () => {},
      );
    },
  );
}

generateKeys();
