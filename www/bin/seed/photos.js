require("../../../config/mongo");
const photoModel = require("../../../models/photos");

const photos = [
    {
        img: "/img/tm-april1994.jpg",
        title: "April 1994",
        index: "0",
    },
    {
        img: "/img/tm-nobel.jpg",
        title: "After her Nobel prize",
        index: "1",
    },
    {
        img: "/img/tm-young.jpg",
        title: "Toni Morrison young",
        index: "2",
    },
    {
        img: "/img/tm.webp",
        title: "Toni Morrison Black and white",
        index: "3",
    },
]

(async function createPhotos () {
    try {
    const {deletedCount} = await photoModel.deleteMany();
    const res = await photoModel.insertMany(photos);
    }
    catch (err) {
     console.error(err);
    }
})();