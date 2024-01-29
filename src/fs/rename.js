import { rename as renameFile, access, constants } from "node:fs/promises";

const rename = async () => {
  try {
    await access("src/fs/files/wrongFileName.txt", constants.F_OK);
    await renameFile(
      "src/fs/files/wrongFileName.txt",
      "src/fs/files/properFilename.md",
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
