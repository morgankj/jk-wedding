const imageArr = [
    {
        id: 1,
        image: require("../Images/Gallery/AquariumDate.jpg"),
        text: "Jon and Morgan at the Austin Aquarium",
        altTag: "Jon and Morgan in face in hole cutouts of mermaids"
    },
    {
        id: 2,
        image: require("../Images/Gallery/BeforeMiamiTrip.jpg"),
        text: "Jon and Morgan at the Austin airport",
        altTag: "Jon and Morgan at the Airport"
    },
    {
        id: 3,
        image: require("../Images/Gallery/BradleyCapital.jpg"),
        text: "Jon, Morgan, and Bradley at the Austin Capital",
        altTag: "Jon, Morgan, and Bradley at the Austin Capital"
    },
    {
        id: 4,
        image: require("../Images/Gallery/ChrilesteEngagementParty.jpg"),
        text: "Jon and Morgan at Chris and Celeste's engagement party",
        altTag: "Friends in a cozy backyard hangout"
    },
    {
        id: 5,
        image: require("../Images/Gallery/ChristmasEveService.jpg"),
        text: "Jon and Morgan at Life Austin Mueller church Christmas Eve service",
        altTag: "Jon and Morgan at a church Christmas Eve service"
    },
    {
        id: 6,
        image: require("../Images/Gallery/ChristmasHangout.jpg"),
        text: "Jon and Morgan relaxing at Christmastime",
        altTag: "Jon and Morgan hug at Christmas"
    },
    {
        id: 7,
        image: require("../Images/Gallery/ChristmasWithJoneses.jpg"),
        text: "Jon and Morgan with the Joneses in Fort Worth",
        altTag: "Jones family at Christmas"
    },
    {
        id: 8,
        image: require("../Images/Gallery/DinnerwithJoneses.jpg"),
        text: "The Jones family at Whip-My-Soul",
        altTag: "Jones family at chicken dinner"
    },
    {
        id: 9,
        image: require("../Images/Gallery/ElderlyGameNight.jpg"),
        text: "Game night with friends - elderly theme",
        altTag: "Friends dressed as old people"
    },
    {
        id: 10,
        image: require("../Images/Gallery/FirstFlightTogether.jpg"),
        text: "Jon and Morgan on an airplane",
        altTag: "Jon and Morgan on an airplane"
    },
    {
        id: 11,
        image: require("../Images/Gallery/FirstPicTogether.jpg"),
        text: "Jon and Morgan's first picture together - checking out Jon's new car",
        altTag: "Jon and Morgan in Jon's new car"
    },
    {
        id: 12,
        image: require("../Images/Gallery/FirstRanchTrip.jpg"),
        text: "Jon and Morgan hanging out with Wil and KarieAnn at their family ranch",
        altTag: "Jon and Morgan with Wil and KarieAnn at the Ranch"
    },
    {
        id: 13,
        image: require("../Images/Gallery/GangsterGameNight.jpg"),
        text: "Game night with friends - mobster theme",
        altTag: "Jon and Morgan dressed as mobsters"
    },
    {
        id: 14,
        image: require("../Images/Gallery/GingerBreadHouse.jpg"),
        text: "Jon and Morgan with their gingerbread house",
        altTag: "Jon and Morgan with a gingerbread house"
    },
    {
        id: 15,
        image: require("../Images/Gallery/HalloweenJackolanterns.jpg"),
        text: "Jon and Morgan with their Jack-o-lanterns",
        altTag: "Jon and Morgan with their Jack-o-lanterns"
    },
    {
        id: 16,
        image: require("../Images/Gallery/HalloweenMeme.png"),
        text: "Jon and Morgan in their halloween costume meme",
        altTag: "Jon and Morgan in their halloween costume meme"
    },
    {
        id: 17,
        image: require("../Images/Gallery/JBdayDinner.jpg"),
        text: "Jon and Morgan with friends at Jon's 31st birthday dinner",
        altTag: "Jon and Morgan with friends at birthday dinner"
    },
    {
        id: 18,
        image: require("../Images/Gallery/JCovidEdates.png"),
        text: "Jon and Morgan zoom hangout while Jon had covid",
        altTag: "Jon and Morgan hangout over zoom call"
    },
    {
        id: 19,
        image: require("../Images/Gallery/JsBdayBaseball.jpg"),
        text: "Jon and Morgan at the San Antonio baseball stadium",
        altTag: "Jon and Morgan at the San Antonio baseball stadium"
    },
    {
        id: 20,
        image: require("../Images/Gallery/July4th.jpg"),
        text: "Jon and Morgan at the 4th of July",
        altTag: "Jon and Morgan at the 4th of July"
    },
    {
        id: 21,
        image: require("../Images/Gallery/KAWilBaptism.jpg"),
        text: "Jon and Morgan with at Wil and KarieAnn's baptism",
        altTag: "Jon and Morgan with friends at their baptism"
    },
    {
        id: 22,
        image: require("../Images/Gallery/KeenHotelPoolVisit.jpg"),
        text: "Jon and Morgan visiting the Keens at a hotel with a view",
        altTag: "Jon and Morgan at hotel with a view"
    },
    {
        id: 23,
        image: require("../Images/Gallery/LakeTripwFriends.jpg"),
        text: "Jon and Morgan with friends at the lake",
        altTag: "Friends at lake"
    },
    {
        id: 24,
        image: require("../Images/Gallery/MeetupBradley.jpg"),
        text: "Jon and Morgan with Bradley and friend",
        altTag: "Jon and Morgan with Bradley and friend"
    },
    {
        id: 25,
        image: require("../Images/Gallery/MiamiCJRestaurant.png"),
        text: "Keen family at CJ's restaurant",
        altTag: "Keen family at CJ's restaurant"
    },
    {
        id: 26,
        image: require("../Images/Gallery/MiamiCubanFood.jpg"),
        text: "Jon, Crystal, Bradley, and Morgan at Cuban restaurant in Miami",
        altTag: "Jon, Crystal, Bradley, and Morgan at Cuban restaurant"
    },
    {
        id: 27,
        image: require("../Images/Gallery/MiamiGatorFarm.jpg"),
        text: "Jon and Morgan at alligator farm",
        altTag: "Jon and Morgan at alligator farm"
    },
    {
        id: 28,
        image: require("../Images/Gallery/MiamiHotelBreakfast.jpg"),
        text: "Jon, Morgan, and Allie at hotel breakfast in Miami",
        altTag: "Jon, Morgan, and Allie at hotel breakfast"
    },
    {
        id: 29,
        image: require("../Images/Gallery/MiamiWindyCar.jpg"),
        text: "Jon and Morgan in a windy car through Miami",
        altTag: "Jon and Morgan in windy car"
    },
    {
        id: 30,
        image: require("../Images/Gallery/NewYearsRanch.jpg"),
        text: "New Years 2023 camping trip with friends",
        altTag: "Friends at new years camping dinner"
    },
    {
        id: 31,
        image: require("../Images/Gallery/Poppas80thDinner.jpg"),
        text: "Jon, Morgan, Ellie, and Allie at Poppa's 80th birthday",
        altTag: "Jon, Morgan, Ellie, and Allie at Poppa's 80th birthday"
    },
    {
        id: 32,
        image: require("../Images/Gallery/Poppas80thDinnerPic.jpg"),
        text: "Jon and Morgan at Poppa's 80th birthday",
        altTag: "Jon and Morgan at Poppa's 80th birthday"
    },
    {
        id: 33,
        image: require("../Images/Gallery/RanchHappy.jpg"),
        text: "Jon and Morgan really like each other",
        altTag: "Jon and Morgan laugh and hug"
    },
    {
        id: 34,
        image: require("../Images/Gallery/SABotanicalGarden.jpg"),
        text: "Jon and Morgan at the San Antonio Botanical Gardens",
        altTag: "Jon and Morgan at the San Antonio Botanical Gardens"
    },
    {
        id: 35,
        image: require("../Images/Gallery/SAVisit.png"),
        text: "Jon, Morgan, and Emily hangout",
        altTag: "Jon, Morgan, and Emily hangout"
    },
    {
        id: 36,
        image: require("../Images/Gallery/SixFlags.jpg"),
        text: "Jon and Morgan at Six Flags",
        altTag: "Jon and Morgan at Six Flags"
    },
    {
        id: 37,
        image: require("../Images/Gallery/SwimDateinLago.jpg"),
        text: "Jon and Morgan at the lake in Lago Vista",
        altTag: "Jon and Morgan at the lake in Lago Vista"
    },
]

export default imageArr;