const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// allow frontend (React)
app.use(cors());
app.use(express.json());

// pastikan folder uploads ada
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// storage config (multer)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueCode = Date.now().toString(36);
        const ext = path.extname(file.originalname);
        const filename = `${uniqueCode}${ext}`;

        req.fileCode = uniqueCode; // simpan kode
        cb(null, filename);
    },
});

const upload = multer({ storage });

const mapFile = path.join(__dirname, "fileMap.json");

// load saat server start
let fileMap = {};

if (fs.existsSync(mapFile)) {
    fileMap = JSON.parse(fs.readFileSync(mapFile));
}

/**
 * UPLOAD
 */
app.post("/upload", upload.single("file"), (req, res) => {
    const code = req.fileCode;

    fileMap[code] = req.file.filename;

    fs.writeFileSync(mapFile, JSON.stringify(fileMap,null,2))

    res.json({
        message: "Upload success",
        code,
    });
});

/**
 * DOWNLOAD via code
 */
app.get("/download/:code", (req, res) => {
    const { code } = req.params;

    const filename = fileMap[code];

    if (!filename) {
        return res.status(404).json({ message: "File not found" });
    }

    const filePath = path.join(uploadDir, filename);

    res.download(filePath);
});

/**
 * OPTIONAL: preview (biar bisa buka di browser)
 */
app.get("/file/:code", (req, res) => {
    const { code } = req.params;
    const filename = fileMap[code];

    if (!filename) {
        return res.status(404).send("Not found");
    }

    res.sendFile(path.join(uploadDir, filename));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});