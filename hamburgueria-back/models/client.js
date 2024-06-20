const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nome: { type: String, required: true },
  hamb_id: { type: Schema.Types.ObjectId, ref: "Hamburguer", required: true },
});

module.exports = mongoose.model("User", UserSchema);
