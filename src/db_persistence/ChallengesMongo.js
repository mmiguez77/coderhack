const moment = require("moment");
const challengesSchema = require("../models/challengesSchema.js");

class ChallengesMongo {
  constructor() {
    this.timeStamp = moment().format("DD/MM/YYYY h:mm:ss a");
    this.challengesSchema = challengesSchema;
    this.emprendedorId = "Id del emprendedor recuperado de la sesion del mismo"
  }

  async list() {
    return this.challengesSchema.find({});
  }

  async insert(challenges) {
    const newChallenge = {
      ...challenges,
      timestamp: this.timeStamp,
      entrepreneurshipId: this.emprendedorId
    };
    return this.challengesSchema.create(newChallenge);
  }

  async listById(id) {
    return this.challengesSchema.find({
      _id: id,
    });
  }

  async deleteById(id) {
    return this.challengesSchema.deleteOne({
      _id: id,
    });
  }

  async updateById(id, data) {
    return this.challengesSchema.updateOne(
      {
        _id: id,
      },
      {
        $set: data,
      }
    );
  }
}

module.exports = ChallengesMongo;