const { Router } = require('express');
const router = new Router();

router.get('/', (req, res) => {
 res.json({"title": "hola"});
});

module.exports = router;