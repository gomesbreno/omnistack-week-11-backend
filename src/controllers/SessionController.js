const connection = require("../database/connection");
module.exports = {
  async create(req, resp) {
    const { id } = req.body;
    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return resp.status(400).json({ error: "No ONG found with this ID" });
    }
    return resp.json(ong);
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
