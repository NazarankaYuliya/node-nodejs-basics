import fs from "fs";

const read = async () => {
  const rs = fs.createReadStream("src/streams/files/fileToRead.txt");

  rs.on("data", (chunk) => {
    process.stdout.write(chunk.toString());
  });

  rs.on("error", (error) => {
    console.error("Error reading file:", error);
  });
};

await read();
