import fs from "fs";

const write = async () => {
  const ws = fs.createWriteStream("src/streams/files/fileToWrite.txt");

  process.stdin.on("data", (chunk) => {
    ws.write(chunk.toString());
  });

  process.stdin.on("end", () => {
    ws.end();
    console.log("Data has been writen to file");
  });

  process.stdin.on("error", (error) => {
    console.error("Error reading from stdin: ", error);
  });

  ws.on("error", (error) => {
    console.error("Error writing to file: ", error);
  });
};

await write();
