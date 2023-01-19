const ProjectsData = [
    {
        "link": "https://thainge.github.io/simply-chiro/#/",
        "route": "SimplyChiro",
        "tags": ["Fullstack", "MongoDB", "User Roles", "Appointment Scheduler"],
        "description": 'Fullstack chiropractic website, schedule appointments online!',
        "name": "Simply Chiro",
        "underText": 'Fullstack Appointment Scheduler',
        "client": "Simply Chiro",
        "date": "2023",
        "header": "Simply Chiro",
        "text": [
            {
                "p": "Online appointment scheduling software for Dr.Atkin's patients. Appointments can be booked and managed online with the patient dashboard, including an admin panel for Dr.Atkins to manage all appointment info, availability, and coupon codes."
            },
        ],
        "roles": [
            {
                "role": "Fullstack Development"
            },
            {
                "role": "Scheduling Software"
            },
            {
                "role": "Authentication"
            },
            {
                "role": "UX / UI"
            }
        ],
        "img": require('./../assets/projects/Project3/ProjectHeader.png'),
        "images": [
            {
                "original": require('./../assets/projects/Project3/ProjectImage1.png')
            },
            {
                "original": require('./../assets/projects/Project3/ProjectImage2.png')
            },
            {
                "original": require('./../assets/projects/Project3/ProjectImage3.png')
            },
            {
                "original": require('./../assets/projects/Project3/ProjectImage4.png')
            },
            {
                "original": require('./../assets/projects/Project3/ProjectImage5.png')
            },
            {
                "original": require('./../assets/projects/Project3/ProjectImage6.png')
            },
            {
                "original": require('./../assets/projects/Project3/ProjectImage7.png')
            },
        ]
    },
    {
        "link": "https://thainge.github.io/card-kingdom/",
        "route": "CardKingdom",
        "tags": ["Sockets.Io", "Multiplayer"],
        "description": 'Card game made from ReactJS and NodeJS sockets for multiplayer.',
        "name": "Card Kingdom React App",
        "underText": 'Frontend / Server',
        "client": "Personal",
        "date": "2022",
        "header": "Card Kingdom React App",
        "text": [
            {
                "p": "Card game made purely from React and NodeJS. Earn gold and stars to purchase booster packs and unlock upgrades to enhance your gameplay. Defeat your opponnents and take back the land. Also compete with other players by joining a multiplayer lobby!"
            },
            {
                "p": "This project took around a month to complete and has turned out to be a very fun web card game, in the future I plan on releasing a better version built in Unity."
            },
        ],
        "roles": [
            {
                "role": "Backend Development"
            },
            {
                "role": "Game Design"
            },
            {
                "role": "Animations"
            },
            {
                "role": "UX / UI"
            },
        ],
        "img": require('./../assets/projects/Project1/ProjectHeader.png'),
        "images": [
            {
                "original": require('./../assets/projects/Project1/ProjectImage1.png')
            },
            {
                "original": require('./../assets/projects/Project1/ProjectImage2.png')
            },
            {
                "original": require('./../assets/projects/Project1/ProjectImage3.png')
            },
            {
                "original": require('./../assets/projects/Project1/ProjectImage4.png')
            },
            {
                "original": require('./../assets/projects/Project1/ProjectImage5.png')
            },
            {
                "original": require('./../assets/projects/Project1/ProjectImage6.png')
            },
            {
                "original": require('./../assets/projects/Project1/ProjectImage7.png')
            },
            {
                "original": require('./../assets/projects/Project1/ProjectImage8.png')
            },
        ]
    },
    {
        "link": "https://thainge.github.io/movies-games-books/",
        "route": "MoviesGamesBooks",
        "tags": ["TMDB API", "IMDB API", "Steamworks API", "Google Books API", "MongoDB"],
        "description": 'Fullstack application which allows users to create and share customizable libraries of movies, games, and books.',
        "name": "Movies Games Books",
        "underText": 'Fullstack',
        "client": "Intertek",
        "date": "2022",
        "header": "Movies Games Books",
        "text": [
            {
                "p": "Fullstack online library application which allows users to login and create their own libraries of movies, games, and books that can be shared with others. Uses ReactJS for frontend, NodeJS for server side functions, and MongoDB for the backend. Uses an API created by myself to query all information on the server, and google sign on to make user authentication smooth. Multiple APIs were also used to make this user friendly, the IMDB API, TMDB API, Steamworks API, and the Google Books API."
            },
            {
                "p": "The movies section allows you to create your own movie libraries, upload a folder of movies to a movies collection and it will pull all possibly information from TMDB API and IMDB API and display it in your library. This includes posters, background images, titles, descriptions, ratings, and other information."
            },
            {
                "p": "The games section allows you to create your own game libraries, create a collection and as you type it will do queries to display relevent games information found from the Steamworks API. Once a list of games have been chosen it will then use the Steamworks API to pull all information from the games and display them in your library of games."
            },
            {
                "p": "The games section allows you to create your own book libraries, create a collection and it will allow you to search all books found using the Google Books API, results returned in JSON allows information to be pulled and added to your collection of books."
            }
        ],
        "roles": [
            {
                "role": "Fullstack Development"
            },
            {
                "role": "Authentication"
            },
            {
                "role": "UX / UI"
            },
            {
                "role": "APIs"
            },
        ],
        "img": require('./../assets/projects/Project2/ProjectHeader.png'),
        "images": [
            {
                "original": require('./../assets/projects/Project2/ProjectImage1.png')
            },
            {
                "original": require('./../assets/projects/Project2/ProjectImage2.png')
            },
            {
                "original": require('./../assets/projects/Project2/ProjectImage3.png')
            },
            {
                "original": require('./../assets/projects/Project2/ProjectImage4.png')
            },
            {
                "original": require('./../assets/projects/Project2/ProjectImage5.png')
            },
            {
                "original": require('./../assets/projects/Project2/ProjectImage6.png')
            },
            {
                "original": require('./../assets/projects/Project2/ProjectImage7.png')
            },
        ]
    },
    {
        "link": "https://thainge.github.io/home/",
        "route": "CustomNewTab",
        "tags": ["Google Favicon API"],
        "description": 'Custom new tab page using the DuckDuckGo search engine.',
        "name": "Custom New Tab",
        "underText": 'Frontend',
        "client": "Personal",
        "date": "2022",
        "header": "Custom New Tab",
        "text": [
            {
                "p": "Frontend website for a custom new tab page, allows users to upload background images and change the email address in the top right, also has custom drag and drop for the bookmarks. Uses Google's favicon API to pull data from website URLs and display their logos. Top right also has a custom built google drag and drop gadgets component. An alternative to Google's homepage, using the DuckDuckGo search engine."
            },
        ],
        "roles": [
            {
                "role": "Frontend Development"
            },
            {
                "role": "Animations"
            },
            {
                "role": "API"
            },
            {
                "role": "UX / UI"
            }
        ],
        "img": require('./../assets/projects/Project4/ProjectHeader.png'),
        "images": [
            {
                "original": require('./../assets/projects/Project4/ProjectImage1.png')
            },
        ],
    },
]

export default ProjectsData;