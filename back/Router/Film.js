const router = require("express-promise-router")();

const {film } = require("../Controller");

router.route("/:id").get(film.get);
router.route("/").post(film.create);
router.route("/").get(film.getAll);
router.route("/:id").put(film.update);
router.route("/:id").delete(film.delete);

module.exports = router;
