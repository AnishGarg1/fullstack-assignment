const express = require("express");
const { createCard, getAllCards, getCard } = require("../controllers/Card");
const router = express.Router();

router.post("/createCard", createCard);
router.get("/cards", getAllCards);
router.get("/cards/:title", getCard);

module. exports = router;