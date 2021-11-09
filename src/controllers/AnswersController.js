const AnswersMongo = require("../db_persistence/AnswersMongo.js");
const answersMongo = new AnswersMongo();
const isAuth = true;

async function getDataController(req, res) {
  answersMongo
      .list()
      .then((answers) => {
        res.json(answers);
      })
      .catch(function (err) {
        throw err; // or handle it
      });
  }
  
  async function getDataByIdController(req, res) {
    const { id } = req.params;
    try {
      if (id === "") {
        return res
          .status(404)
          .json({ msg: "product not found", error });
      }
      const answerById = await answersMongo.listById(id).then((list) => {
        return list[0]._id;
      })
  
      if (!answerById) {
        return res.status(404).json({ msg: "product not found" });
      }
      return answersMongo.listById(answerById).then((list) => {
        res.json(list);
      });
    } catch (error) {
      logger.error(error);
      res.json('product not found')
    }
  }
  
  async function postDataController(req, res) {
    if (isAuth) {
      const data = req.body;
      answersMongo.insert(data).then(() => {
        res.json(data);
      });
    } else {
      logger.warn('does not have permissions', req.url, req.method);
      res.send(
        `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
      );
    }
  }
  
  async function putDataController(req, res) {
    if (isAuth) {
      const data = req.body;
      const { id } = req.params;
      answersMongo.updateById(id, data).then(() => {
        res.json(`product with id ${id} updated`);
      });
    } else {
      logger.warn('does not have permissions', req.url, req.method)
      res.send(
        `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
      );
    }
  }
  
  async function deleteDataController(req, res) {
    if (isAuth) {
      const { id } = req.params;
      answersMongo.deleteById(id).then(() => {
        res.json(`product with id ${id} deleted`);
      });
    } else {
      logger.warn('does not have permissions', req.url, req.method)
      res.send(
        `"error" : 'does not have permissions', "description": route = '${req.url}' method = '${req.method}' not authorized`
      );
    }
  }
  
  module.exports = {
    getDataController,
    getDataByIdController,
    postDataController,
    putDataController,
    deleteDataController,
  };