const express = require("express");
const app = express();
const hbs = require("hbs");
const PORT = 400;

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

// source for onScreen : https://www.shmoop.com/toni-morrison/movies-tv.html

app.get("/about", (req, res, next) => {
    const others = [
        {name: "Doris Lessing",
         img: "/img/others/lessing.jpg"},
         {name: "Maya Angelou",
         img: "/img/others/angelou.jpg"},
         {name: "Ralph Ellison",
         img: "/img/others/ellison.jpg"},
         {name: "James Baldwin",
         img: "/img/others/baldwin.jpg"},
    ];
    const onScreen = [
        {name: "Beloved",
        year: 1998,
    synopsis: "Oprah Winfrey is a huge Morrison fan, having selected two of her books for Oprah Book Club. Winfrey produced and starred in this filmed version of Morrison's haunting novel. While much of the power of Beloved comes from Morrison's writing, this film brings to life the raw pain and powerful love among its characters.",
    img: "/img/screen/belovedmovie.jpg"},
    {name: "The Black List",
        year: 2008,
    synopsis: "This documentary series by Timothy Greenfield-Sanders and Elvis Mitchell interviews black trailblazers in fields from music to sports to politics. Toni Morrison features prominently among the interviewees, a diverse group that includes Chris Rock, Serena Williams and Slash.",
    img: "/img/screen/theblacklist.jpg"},
    {name: "Legends Ball",
        year: 2006,
    synopsis: "When you are as rich and famous as Oprah Winfrey, not only can you afford to throw a party for the greatest living African-American women, but they will also all respond to your invitation. Morrison was among the 25 honorees at Oprah's famous Legends Ball, which feted black women leaders in the arts and civil rights. This documentary shows the extensive work that went into the planning of the event.",
    img: "/img/screen/legendsball.jpeg"},
    {name: "Ralph Ellison: An American Journey",
        year: 2002,
    synopsis: "Toni Morrison is interviewed in this documentary about the African American novelist Ralph Ellison. Ellison, the author of the classic Invisible Man, was a leader in the Harlem Renaissance. Invisible Man is seen as something of a literary ancestor to Beloved.",
    img: "img/screen/raphellison.jpg"},
    {name: "Margaret Garner",
        year: 2006,
    synopsis: "The story of Margaret Garner, the inspiration behind Morrison's novel Beloved, has been turned into an opera. Toni Morrison wrote the libretto. A filmed performance of the opera is available on DVD.",
    img: "img/screen/margaretgarner.jpg"}
    ]
    res.render("about", {onScreen, others, css: ["about.css"]})});

app.get("/", (req, res, next) => res.render("home", {css: ["home.css"]}));

app.get("/works", (req, res, next) => {
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

    ]
    res.render("works", {works})
});

app.get("/photo-gallery", (req, res, next) => {
    const photos = [
        {img: "/img/tm-april1994.jpg",
        title: "April 1994",
        index: "0",
    },
    {img: "/img/tm-nobel.jpg",
        title: "After her Nobel prize",
        index: "1",
    },
    {img: "/img/tm-young.jpg",
        title: "Toni Morrison young",
        index: "2",
    },
    {img: "/img/tm.webp",
        title: "Toni Morrison Black and white",
        index: "3",
    },
    ]

 res.render("photo-gallery", {photos})});


app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))