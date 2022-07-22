const AbstractManager = require("./AbstractManager");

class AnimalsManager extends AbstractManager {
  static table = "animals";

  insert(animals) {
    return this.connection.query(
      `insert into ${AnimalsManager.table} (id, name, picture1, picture2, type, viewed, commentary) values (?,?,?,?,?,?,?)`,
      [
        animals.name,
        animals.picture1,
        animals.picture2,
        animals.type,
        animals.viewed,
        animals.commentary,
      ]
    );
  }

  update(animals) {
    return this.connection.query(
      `update ${AnimalsManager.table} set name = ? where id = ?`,
      [
        animals.name,
        animals.picture1,
        animals.picture2,
        animals.type,
        animals.viewed,
        animals.commentary,
        animals.id,
      ]
    );
  }
}

module.exports = AnimalsManager;
