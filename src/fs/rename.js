import { rename as renameFile, access, constants } from "node:fs/promises";

const rename = async () => {
  try {
    await access("./files/wrongFileName.txt", constants.F_OK);
    await renameFile("./files/wrongFileName.txt", "./files/properFilename.md");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
