import { readFile } from "node:fs/promises";
const read = async () => {
  try {
    const data = await readFile("src/fs/files/fileToRead.txt", "utf-8");
    console.log(data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
