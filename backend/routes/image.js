import path from "path";
import fs from "fs";
import express from "express";
import multer from "multer";

const __dirname = path.resolve();
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, done) {
    done(null, path.join(__dirname, "public", "images", "preview"));
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);

    const filename = basename + "__" + new Date().getTime() + ext;

    done(null, filename);
  },
});
const limits = { fileSize: 20 * 1024 * 1024 };

const upload = multer({ storage, limits });

router.post("/", upload.array("images"), (req, res) => {
  const filenames = req.files.map(file => file.filename);

  res.status(201).json({ message: "이미지 생성에 성공하셨습니다.", images: filenames });
});

// 2022/01/14 - 특정 프리뷰 제거 - by 1-blue
router.delete("/:preview", upload.array("images"), (req, res, next) => {
  const preview = req.params.preview;

  try {
    const oldPath = path.join(__dirname, "public", "images", "preview", preview);
    const newPath = path.join(__dirname, "public", "images", "deleted", preview);
    fs.renameSync(oldPath, newPath, () => {});
  } catch (error) {
    console.error("DELETE /api/image error >> ", error);
    next(error);
  }

  res.status(200).json({ message: "특정 프리뷰를 제거했습니다.", preview });
});

export default router;
