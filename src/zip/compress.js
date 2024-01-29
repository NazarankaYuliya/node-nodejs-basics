import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "zlib";

const compress = async () => {
  const rs = createReadStream("src/zip/files/fileToCompress.txt");
  const ws = createWriteStream("src/zip/files/archive.gz");

  rs.pipe(createGzip()).pipe(ws);
};

await compress();
