require("../../../config/mongo");
const othersModel = require("../../../models/others");

const others = [
    {name: "Doris Lessing",
     img: "/img/others/lessing.jpg"},
     {name: "Maya Angelou",
     img: "/img/others/angelou.jpg"},
     {name: "Ralph Ellison",
     img: "/img/others/ellison.jpg"},
     {name: "James Baldwin",
     img: "/img/others/baldwin.jpg"}
];

(async function createOthers() {
    try{
        const {deletedCount} = othersModel.deleteMany();
        const res = othersModel.insertMany(others);
    }
    catch (err) {
        console.error(err);
    }
}
)();