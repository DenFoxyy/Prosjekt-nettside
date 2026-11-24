const produkter = [
    {
        name: "Horizon Zero Dawn Complete Edition",
        poster: "https://m.media-amazon.com/images/M/MV5BNGY2NjUzOTItMjkzNS00NzNiLWIwY2MtMzQ3MDIwY2RlNjdjXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/horizon-zero-dawn/",
        rating: 4 // Metacritic PC: 87
    },
    {
        name: "Days Gone",
        poster: "https://m.media-amazon.com/images/M/MV5BMmIwNjMzOTItNzg1Ni00M2Y4LThlYWQtMGFjOGNhNWY5M2EwXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/days-gone/",
        rating: 3 // Metacritic PC: 69
    },
    {
        name: "God of War",
        poster: "https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/god-of-war/",
        rating: 5 // Metacritic PC: 94
    },
    {
        name: "Marvel's Spider-Man Remastered",
        poster: "https://m.media-amazon.com/images/M/MV5BMmRiOTExM2EtMDgwZi00OGY0LWIxNDgtNTZiY2RjNDc5NGU2XkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/marvels-spider-man-remastered/",
        rating: 4 // Metacritic PC: 87
    },
    {
        name: "Marvel's Spider-Man: Miles Morales",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LkifStFvNVVQbXxV7tTr5FMiV9scFoZOtfdJ5RHE4y2pS3KZtgg5zCjs&s=10",
        url: "https://www.playstation.com/en-us/games/marvels-spider-man-miles-morales/",
        rating: 4 // Metacritic PC: 85
    },
    {
        name: "Sackboy: A Big Adventure",
        poster: "https://m.media-amazon.com/images/M/MV5BODQ4MTRhNmItMjA1OS00OGY0LTk2ZGQtZGUyYmJmNTljNzdjXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/sackboy-a-big-adventure/",
        rating: 4 // Metacritic PC: 83
    },
    {
        name: "Uncharted: Legacy of Thieves Collection",
        poster: "https://m.media-amazon.com/images/M/MV5BYTViYzU2MDUtZTIxZC00ZTc3LWE4ZTMtNjczYzRhMDNkM2I1XkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/uncharted-legacy-of-thieves-collection/",
        rating: 4 // Metacritic PC: 89
    },
    {
        name: "Returnal",
        poster: "https://m.media-amazon.com/images/M/MV5BMDQxYjQ1YWEtZjJlZS00MTUwLTllZTItMmNjM2I2N2E1YTM2XkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/returnal/",
        rating: 4 // Metacritic PC: 88
    },
    {
        name: "The Last of Us Part I",
        poster: "https://m.media-amazon.com/images/M/MV5BOTdkZTNmNDEtNmFiNy00MjhmLTkzNTQtMWY3MTA1MjYwZDZlXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/the-last-of-us-part-i/",
        rating: 4 // Metacritic PC: 86
    },
    {
        name: "Ratchet & Clank: Rift Apart",
        poster: "https://m.media-amazon.com/images/M/MV5BZTcyMWRjYTYtOTZkZi00YzJlLThmYmMtZGNmZGEzYTNkYzgxXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/ratchet-and-clank-rift-apart/",
        rating: 4 // Metacritic PC: 89
    },
    {
        name: "Helldivers 2",
        poster: "https://m.media-amazon.com/images/M/MV5BN2IyY2VjMDctNGMzYS00ZWEwLTkyNTgtNTdkNDQ3MzA0MDhmXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/helldivers-2/",
        rating: 4 // Metacritic PC: 82
    },
    {
        name: "Horizon Forbidden West Complete Edition",
        poster: "https://m.media-amazon.com/images/M/MV5BMjU5YzU1OTItMDM5YS00ZmFlLTgxZGQtODYzMDliMTQyZDdkXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/horizon-forbidden-west/",
        rating: 4 // Metacritic PC: 84
    },
    {
        name: "Ghost of Tsushima Director's Cut",
        poster: "https://m.media-amazon.com/images/M/MV5BMzVhMGQyM2ItNTVkNi00NDZiLWFiMDMtMTQwOGE3NzQxZmM2XkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/ghost-of-tsushima/",
        rating: 4 // Metacritic PC: 83
    },
    {
        name: "Until Dawn",
        poster: "https://m.media-amazon.com/images/M/MV5BNWY1MTI2YjMtMGFhZS00MzQ2LTllMDgtMjEyNDRkODI1MTkyXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/until-dawn/",
        rating: 3 // Metacritic PC: 72
    },
    {
        name: "God of War Ragnarök",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQ5YTA1ZmUtYzVlNC00YjI2LWJhYjgtNWE4MjY2OWEzMGQwXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/",
        rating: 5 // Metacritic PC: 90
    },
    {
        name: "Horizon Zero Dawn Remastered",
        poster: "https://m.media-amazon.com/images/M/MV5BNjcyNDVkMWEtNzM0NC00ZGQyLTgwN2YtMDFlZjdjOGM2OTdmXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/horizon-zero-dawn/",
        rating: 4 // Metacritic PC: 85
    },
    {
        name: "LEGO Horizon Adventures",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNmNjNlN2UtN2I2Ny00MmQ4LWE2OGEtMWIxMGM5MzQxOWJjXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/lego-horizon-adventures/",
        rating: 3 // Metacritic PC: 64-70
    },
    {
        name: "Marvel's Spider-Man 2",
        poster: "https://m.media-amazon.com/images/M/MV5BZmUwYTNjZTAtOTYxYS00NmM3LTkwODEtNWM2NDNlOGZlYzMyXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
        rating: 5 // Metacritic PC: 90
    },
    {
        name: "Stellar Blade",
        poster: "https://m.media-amazon.com/images/M/MV5BZDI4ZjU5NzUtMmVkYy00MGI0LTk3MzktNjU1YTAyZDA5NDU1XkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/stellar-blade/",
        rating: 4 // Metacritic PC: 74
    },
    {
        name: "The Last of Us Part II Remastered",
        poster: "https://m.media-amazon.com/images/M/MV5BM2I2NmZmMzgtMjJkYi00YmY1LWJhMWUtMWEyYzFlZGUwM2I3XkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/the-last-of-us-part-ii-remastered/",
        rating: 5 // Metacritic PC: 90
    },
    {
        name: "Lost Soul Aside",
        poster: "https://m.media-amazon.com/images/M/MV5BZTgyMjljYjEtNjc0OC00MGM3LTlmMjQtYTYzMWIzNjAzNjgyXkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/lost-soul-aside/",
        rating: 3 // Metacritic PC: 62
    },
    {
        name: "Death Stranding 2: On The Beach - Digital Deluxe Edition",
        poster: "https://m.media-amazon.com/images/M/MV5BYmVkNDM3MzUtN2YyYS00MDg0LWIxN2EtMjQ2ZGQ1ZDhlZWY4XkEyXkFqcGc@._V1_.jpg",
        url: "https://www.playstation.com/en-us/games/death-stranding-2-on-the-beach/",
        rating: 4 // Metacritic PS5: 89
    },
];
