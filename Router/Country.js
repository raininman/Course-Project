const router = require("express-promise-router")();

const {country } = require("../Controller");

router.route("/:id").get(country.get);
router.route("/").post(country.create);
router.route("/").get(country.getAll);
router.route("/:id").put(country.update);
router.route("/:id").delete(country.delete);

module.exports = router;
