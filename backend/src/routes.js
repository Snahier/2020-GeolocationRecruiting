const { Router } = require("express")
const DevController = require("./controllers/DevController")
const SearchController = require("./controllers/SearchController")

const route = Router()

/**
 * Routes
 *
 * Can receive different kinds of requests
 * request.query (localhost/route?query=value)
 * request.params (localhost/:id/ == localhost/1/)
 * request.body usually info sent from a <form>
 */
route.get("/devs", DevController.index)
route.post("/devs", DevController.store)

route.get("/search", SearchController.index)

module.exports = route
