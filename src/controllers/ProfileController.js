const connection = require("../database/connection");
module.exports = {
  async index(req, resp) {
    const ong_id = req.headers.authorization;
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");
    return resp.json(incidents);
  }
  /* 
  async create(req, resp) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });
    return resp.json({ id });
  },
  async delete(req, resp) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return resp.status(401).json({ error: "Operation not permited." });
    }
    await connection("incidents")
      .where("id", id)
      .delete();
    return resp.status(204).send();
  }
  */
};
