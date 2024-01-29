import { copyFile, mkdir, readdir, access, constants } from "node:fs/promises";
import { join } from "node:path";

const copy = async () => {
  const sourceDir = "src/fs/files";
  const targetDir = "src/fs/files_copy";

  try {
    await access(sourceDir, constants.F_OK);

    try {
      await mkdir(targetDir);
      const files = await readdir(sourceDir);

      for (let file of files) {
        const sourceFile = join(sourceDir, file);
        const targetFile = join(targetDir, file);

        await copyFile(sourceFile, targetFile);
      }
    } catch (error) {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
