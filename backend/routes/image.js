import path from "path";
import express from "express";
import multer from "multer";

const __dirname = path.resolve();
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, done){
    done(null, path.join(__dirname, "public", "images"));
  },
  filename(req, file, done){
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    
    const filename = basename + "-" + new Date().getTime() + ext;

    done(null, filename);
  }
});
const limits = { fileSize: 20 * 1024 * 1024 };

const upload = multer({ storage, limits });

router.post("/", upload.array("images"), (req, res) => {
  const filenames = req.files.map(file => file.filename);

  res.status(201).json({ message: "이미지 생성에 성공하셨습니다.", images: filenames })
});

export default router;