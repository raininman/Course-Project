const router = require("express-promise-router")();

const {producer } = require("../Controller");

router.route("/:id").get(producer.get);
router.route("/").post(producer.create);
router.route("/").get(producer.getAll);
router.route("/:id").put(producer.update);
router.route("/:id").delete(producer.delete);

module.exports = router;
