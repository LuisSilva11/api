const express = require("express")
const router = express.Router()

router.post("/canciones", (req, res) => {
    res.send("create Canciones")
})

module.exports = router