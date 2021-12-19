import express from "express";
import bcrypt from "bcrypt";

import { isNotLoggedIn } from "../middleware/index.js";
import db from "../models/index.js";

const { User, Image, Post } = db;

const router = express.Router();

// 로그인한 유저 정보 가져오기
router.get("/me", async (req, res, next) => {
  if(!req.user) return res.status(200).json({ message: "로그인하지 않았습니다.", user: null });

  try {
    const fullUser = await User.findOne({
      attributes: ["_id", "name", "createdAt"],
      where: { _id: req.user._id },
      include: [
        { model: Image },
        { model: Post, attributes: ["_id"] },
        { model: User, as: "Followers" },
        { model: User, as: "Followings" }
      ],
    });

    return res.status(200).json({ message: "로그인한 유저의 정보를 가져오는데 성공했습니다.", user: fullUser });
  } catch (error) {
    console.error("GET /user/me error >> ", error);
    return next(error);
  }
});

// 회원가입
router.post("/", isNotLoggedIn, async (req, res, next) => {
  const { id, password, name, phone, birthday, imageName } = req.body;

  try {
    const exUser = await User.findOne({ where: { id } });

    if(exUser) return res.status(409).json({ message: "이미 가입된 아이디입니다.\n다른 아이디로 다시 시도해주세요" });

    const hashedPassword = await bcrypt.hash(password, 6);

    const createdUser = await User.create({
      id,
      password: hashedPassword,
      name,
      phone,
      birthday,
    });

    await Image.create({
      name: imageName,
      UserId: createdUser._id
    });

    return res.status(200).json({ message: `${name}님 회원가입이 완료되었습니다.\n로그인페이지로 이동합니다.` });
  } catch (error) {
    console.error("GET /user error >> ", error);
    return next(error);
  }
});

export default router;