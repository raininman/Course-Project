const router = require("express-promise-router")();

const { rating } = require("../Controller");

router.route("/:id").get(rating.get);
router.route("/").post(rating.create);
router.route("/").get(rating.getAll);
router.route("/:id").put(rating.update);
router.route("/:id").delete(rating.delete);

module.exports = router;
