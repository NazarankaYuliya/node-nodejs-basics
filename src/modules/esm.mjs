import path, { dirname } from "path";
import { release, version } from "node:os";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { createServer as createServerHttp } from "http";

const fileA = await readFile("./files/a.json");
const fileB = await readFile("./files/b.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(fileA);
} else {
  unknownObject = JSON.parse(fileB);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log(unknownObject);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
