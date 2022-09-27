const router = require("express-promise-router")();

const {decade } = require("../Controller");

router.route("/:id").get(decade.get);
router.route("/").post(decade.create);
router.route("/").get(decade.getAll);
router.route("/:id").put(decade.update);
router.route("/:id").delete(decade.delete);

module.exports = router;
