const express = require("express");
const {
  getAllFriend,
  sendFriendRequest,
  acceptFriendRequest,
  declineFriendRequest,
  getFriendRequestList,
} = require("../controllers/friendControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getAllFriend);

router.route("/request").get(protect, getFriendRequestList);

router.route("/:id").post(protect, sendFriendRequest);

router.route("/accept/:id").patch(protect, acceptFriendRequest);

router.route("/decline/:id").patch(protect, declineFriendRequest,);

module.exports = router;
