const express = require("express")
const router = express.Router()

router.post("/generos", (req, res) => {
    res.send("create Generos")
})

module.exports = router