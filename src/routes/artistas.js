const express = require("express")
const router = express.Router()

router.post("/artistas", (req, res) => {
    res.send("create Artista")
})

module.exports = router