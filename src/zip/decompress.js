import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "zlib";

const decompress = async () => {
  const rs = createReadStream("./files/archive.gz");
  const ws = createWriteStream("./files/fileToCompress.txt");

  rs.pipe(createGunzip()).pipe(ws);
};

await decompress();
