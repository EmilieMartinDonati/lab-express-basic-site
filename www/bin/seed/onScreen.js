require("../../../config/mongo");
const onScreenModel = require('../../../models/onScreen');

const onScreen = [
    {
        name: "Beloved",
        year: 1998,
        synopsis: "Oprah Winfrey is a huge Morrison fan, having selected two of her books for Oprah Book Club. Winfrey produced and starred in this filmed version of Morrison's haunting novel. While much of the power of Beloved comes from Morrison's writing, this film brings to life the raw pain and powerful love among its characters.",
        img: "/img/screen/belovedmovie.jpg"
    },
    {
        name: "The Black List",
        year: 2008,
        synopsis: "This documentary series by Timothy Greenfield-Sanders and Elvis Mitchell interviews black trailblazers in fields from music to sports to politics. Toni Morrison features prominently among the interviewees, a diverse group that includes Chris Rock, Serena Williams and Slash.",
        img: "/img/screen/theblacklist.jpg"
    },
    {
        name: "Legends Ball",
        year: 2006,
        synopsis: "When you are as rich and famous as Oprah Winfrey, not only can you afford to throw a party for the greatest living African-American women, but they will also all respond to your invitation. Morrison was among the 25 honorees at Oprah's famous Legends Ball, which feted black women leaders in the arts and civil rights. This documentary shows the extensive work that went into the planning of the event.",
        img: "/img/screen/legendsball.jpeg"
    },
    {
        name: "Ralph Ellison: An American Journey",
        year: 2002,
        synopsis: "Toni Morrison is interviewed in this documentary about the African American novelist Ralph Ellison. Ellison, the author of the classic Invisible Man, was a leader in the Harlem Renaissance. Invisible Man is seen as something of a literary ancestor to Beloved.",
        img: "img/screen/raphellison.jpg"
    },
    {
        name: "Margaret Garner",
        year: 2006,
        synopsis: "The story of Margaret Garner, the inspiration behind Morrison's novel Beloved, has been turned into an opera. Toni Morrison wrote the libretto. A filmed performance of the opera is available on DVD.",
        img: "img/screen/margaretgarner.jpg"
    }
]

(async function createOnScreen() {
try {
    const {deletedCount} = onScreen.deleteMany();
    const res = onScreen.insertMany(onScreen);
}
catch(err) {
    console.error(err);
}
})();