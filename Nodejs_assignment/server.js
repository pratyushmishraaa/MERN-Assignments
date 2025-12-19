// Import Node.js modules using ES6
import http from "http";
import fs from "fs/promises"; // Use promise-based fs API
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the server
const server = http.createServer(async (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    try {
        if (req.url === "/" || req.url === "/index.html") {
            const filePath = path.join(__dirname, "index.html");
            const data = await fs.readFile(filePath, "utf-8");

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page Not Found");
        }
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
    }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
