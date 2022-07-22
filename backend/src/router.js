const express = require("express");

const { AnimalsController } = require("./controllers");

const router = express.Router();

router.get("/animals", AnimalsController.browse);
router.get("/animals/:id", AnimalsController.read);
router.put("/animals/:id", AnimalsController.edit);
router.post("/animals", AnimalsController.add);
router.delete("/animals/:id", AnimalsController.delete);

module.exports = router;
