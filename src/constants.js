export const sidebarItems = [
    {
        iconClass: "fa-house",
        text: "Home",
        redirect: ""
    },
    {
        iconClass: "fa-video",
        text: "Shorts",
        redirect: "suggested"
    },
    {
        iconClass: "fa-box",
        text: "Subscriber",
        redirect: "suggested"
    },
    {
        iconClass: "fa-user",
        text: "Your Channel", redirect: "suggested"
    },
    {
        iconClass: "fa-clock",
        text: "History",
        redirect: "suggested"
    },
    {
        iconClass: "fa-camera",
        text: "Videos",
        redirect: "suggested"
    },
    {
        iconClass: "fa-clock",
        text: "Watch Later",
        redirect: "suggested"
    },
    {
        iconClass: "fa-thumbs-up",
        text: "Liked Videos",
        redirect: "suggested"
    },
    {
        iconClass: "fa-stairs",
        text: "Trending",
        redirect: "suggested"
    },
    {
        iconClass: "fa-music",
        text: "Music",
        redirect: "suggested"
    },
    {
        iconClass: "fa-film",
        text: "Film",
        redirect: "suggested"
    },
    {
        iconClass: "fa-star-of-life",
        text: "Live",
        redirect: "suggested"
    },
    {
        iconClass: "fa-headset",
        text: "Gaming",
        redirect: "suggested"
    },
    {
        iconClass: "fa-cart-shopping",
        text: "Shopping Cart",
        redirect: "suggested"
    },
];

export const navItemLinks = [
    {
        name: "All",
    },
    {
        name: "Mixes",
    },
    {
        name: "Music",
    },
    {
        name: "Songs",
    },
    {
        name: "Arijit",
    },
    {
        name: "Live",
    },
    {
        name: "Coding",
    },
    {
        name: "Java",
    },
    {
        name: "Python",
    },
    {
        name: "HTML",
    },
    {
        name: "CSS",
    },
    {
        name: "Trending",
    },
    {
        name: "TailwindCSS",
    },
    {
        name: "PHP",
    },
    {
        name: "Ruby",
    },
    {
        name: "C++",
    },
    {
        name: "JavaScript",
    },
    {
        name: "C#",
    },
    {
        name: "Editor",
    },
];



const YOUTUBE_API_KEY = "AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ";

export const YOUTUBE_POPULAR_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESTED_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" + YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_INFO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" + YOUTUBE_API_KEY


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q= ";

export const YOUTUBE_CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=" + YOUTUBE_API_KEY


// youtube video categories 
// https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ

// youtube channel api 
// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC49EgySW0Guwy5ThcN11ehQ&key=AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ



export const comments = [

    {
        name: "jaymin",
        text: "this is a message about jaymin",
        replay: [
            {
                name: "jaymin",
                text: "this is a message about jaymin",
                replay: []
            },
            {
                name: "jaymin",
                text: "this is a message about jaymin",
                replay: [
                    {
                        name: "jaymin",
                        text: "this is a message about jaymin",
                        replay: [{
                            name: "jaymin",
                            text: "this is a message about jaymin",
                            replay: [{
                                name: "jaymin",
                                text: "this is a message about jaymin",
                                replay: [{
                                    name: "jaymin",
                                    text: "this is a message about jaymin",
                                    replay: [{
                                        name: "jaymin",
                                        text: "this is a message about jaymin",
                                        replay: [{
                                            name: "jaymin",
                                            text: "this is a message about jaymin",
                                            replay: []
                                        },]
                                    },]
                                },]
                            },]
                        },]
                    }, {
                        name: "jaymin",
                        text: "this is a message about jaymin",
                        replay: []
                    },
                ]
            },
            {
                name: "jaymin",
                text: "this is a message about jaymin",
                replay: [{
                    name: "jaymin",
                    text: "this is a message about jaymin",
                    replay: []
                }, {
                    name: "jaymin",
                    text: "this is a message about jaymin",
                    replay: []
                }, {
                    name: "jaymin",
                    text: "this is a message about jaymin",
                    replay: []
                },]
            }, {
                name: "jaymin",
                text: "this is a message about jaymin",
                replay: []
            }, {
                name: "jaymin",
                text: "this is a message about jaymin",
                replay: []
            },
        ]
    },
    {
        name: "jaymin",
        text: "this is a message about jaymin",
        replay: []
    },
    {
        name: "jaymin",
        text: "this is a message about jaymin",
        replay: []
    },
    {
        name: "jaymin",
        text: "this is a message about jaymin",
        replay: []
    },
    {
        name: "jaymin",
        text: "this is a message about jaymin",
        replay: []
    },
]

