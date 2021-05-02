const client = require("../modules/client");
const Schema = require("mongoose").Schema;
const { generateHash } = require("../modules/bcrypt")
const AdminSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        required: true,
        unique: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
})
async function adminModel() {
    const db = await client();
    return  db.model('admins', AdminSchema);
}

async function addAdmin(name, password) {
    const db = await adminModel();
    return await db.create({name: name, password: generateHash(password)});
}

module.exports = {
    addAdmin
}