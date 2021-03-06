export {}; // pour eviter l'erreur : Cannot redeclare block-scoped variable 'router'
const router = require("express").Router();
const memeController = require("../controllers/meme.controller");

router.get("/test", (req, res) => {
    res.send("salut")
})
router.get("/", memeController.readMeme);
router.post("/add", memeController.addMeme);
router.delete("/:id", memeController.deleteMeme);
router.get("/:categorie", memeController.categorieMeme);
router.get("/:search", memeController.searchMeme);

module.exports = router;