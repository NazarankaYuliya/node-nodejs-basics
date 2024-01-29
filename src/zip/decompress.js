import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "zlib";

const decompress = async () => {
  const rs = createReadStream("src/zip/files/archive.gz");
  const ws = createWriteStream("src/zip/files/fileToCompress.txt");

  rs.pipe(createGunzip()).pipe(ws);
};

await decompress();
