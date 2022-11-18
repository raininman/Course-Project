const router = require("express-promise-router")();

const {popular} = require("../Controller");

router.route("/:id").get(popular.get);
router.route("/").post(popular.create);
router.route("/").get(popular.getAll);
router.route("/:id").put(popular.update);
router.route("/:id").delete(popular.delete);

module.exports = router;
