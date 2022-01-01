import express from "express";
const router = express.Router();

import { isLoggedIn } from "../middleware/index.js";
import db from "../models/index.js";

const { User, Image } = db;

// 2021/12/31 - 특정 유저의 팔로워들 정보 요청 - by 1-blue
router.get("/followers/:UserId", isLoggedIn, async (req, res, next) => {
  const UserId = +req.params.UserId;

  try {
    const followers = await User.findOne({
      where: { _id: UserId },
      attributes: ["_id", "name"],
      include: [
        {
          model: User,
          as: "Followers",
          attributes: ["_id", "name"],
          through: {
            attributes: [],
          },
          include: [
            {
              model: Image,
              attributes: ["_id", "name"],
            },
          ],
        },
      ],
    });

    if (!followers) res.status(404).json({ message: "존재하지 않는 유저의 팔로워들을 요청하셨습니다." });

    res.status(200).json({ message: `${followers.name}님의 팔로우들을 가져오는데 성공했습니다.`, followers });
  } catch (error) {
    console.error("GET /follow/followers/:UserId >> ", error);
    next(error);
  }
});

// 2021/12/31 - 특정 유저의 팔로잉들 정보 요청 - by 1-blue
router.get("/followings/:UserId", isLoggedIn, async (req, res, next) => {
  const UserId = +req.params.UserId;

  try {
    const followings = await User.findOne({
      where: { _id: UserId },
      attributes: ["_id", "name"],
      include: [
        {
          model: Image,
          attributes: ["_id", "name"],
        },
        {
          model: User,
          as: "Followings",
          attributes: ["_id", "name"],
          through: {
            attributes: [],
          },
          include: [
            {
              model: Image,
              attributes: ["_id", "name"],
            },
          ],
        },
      ],
    });

    if (!followings) res.status(404).json({ message: "존재하지 않는 유저의 팔로잉들을 요청하셨습니다." });

    res.status(200).json({ message: `${followings.name}님의 팔로잉들을 가져오는데 성공했습니다.`, followings });
  } catch (error) {
    console.error("GET /followings/:UserId >> ", error);
    next(error);
  }
});

// 2021/12/30 - 팔로우하기- by 1-blue
router.post("/:UserId", isLoggedIn, async (req, res, next) => {
  const UserId = +req.params.UserId;

  try {
    const me = await User.findByPk(req.user._id);

    const Following = await me.addFollowings(UserId);

    if (!Following)
      return res.status(404).json({ message: "존재하지 않는 유저를 팔로우하셨습니다.\n잠시후에 다시 시도해주세요" });

    return res.json({ message: `팔로우에 성공하셨습니다.`, Follow: Following[0] });
  } catch (error) {
    console.error("POST /follow/:UserId >> ", error);
    next(error);
  }
});

// 2021/12/30 - 언팔로우하기 - by 1-blue
router.delete("/:UserId", isLoggedIn, async (req, res, next) => {
  const UserId = +req.params.UserId;

  try {
    const me = await User.findByPk(req.user._id);

    const result = await me.removeFollowings(UserId);

    console.log(result);

    if (result === 0)
      return res.status(404).json({ message: "존재하지 않는 유저를 언팔로우하셨습니다.\n잠시후에 다시 시도해주세요" });

    return res.json({
      message: `언팔로우에 성공하셨습니다.`,
      Follow: { unfollowingId: UserId, unfollowerId: req.user._id },
    });
  } catch (error) {
    console.error("DELETE /follow/:UserId >> ", error);
    next(error);
  }
});

export default router;