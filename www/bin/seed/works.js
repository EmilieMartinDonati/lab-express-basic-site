require("../../../config/mongo");
const workModel = require("../../../models/works");

const works = [
    {
        name: "Beloved",
        year: 1987,
        img: "/img/books/Beloved.jpg",
    },
    {
        name: "The Bluest Eye",
        year: 1987,
        img: "/img/books/eye.jpg",
    },
    {
        name: "Song of Solomon",
        year: 1977,
        img: "/img/books/solomon.jpg",
    },
    {
        name: "Jazz",
        year: 1992,
        img: "/img/books/jazz.jpg",
    },
    {
        name: "Home",
        year: 2012,
        img: "/img/books/home.jpg",
    },
    {
        name: "A Mercy",
        year: 2008,
        img: "/img/books/mercy.jpg",
    },
    {
        name: "Paradise",
        year: 1997,
        img: "/img/books/paradise.jpg",
    },
    {
        name: "Tar Baby",
        year: 1981,
        img: "/img/books/tar.jpg",
    },
    {
        name: "God help the Child",
        year: 2015,
        img: "/img/books/godchild.jpg",
    },
    {
        name: "Sula",
        year: 2003,
        img: "/img/books/sula.jpg",
    },
];

(async function createBooks() {
    try {
     const {deletedCount} = await workModel.deleteMany();
     const res = await workModel.insertMany(works);
        }
    catch (err) {
     console.error(err);
    }
})();