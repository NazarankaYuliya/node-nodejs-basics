import { readdir, access, constants } from "node:fs/promises";

const list = async () => {
  const folder = "files";
  try {
    await access(folder, constants.F_OK);

    try {
      const files = await readdir(folder);
      console.log(files);
    } catch (error) {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
