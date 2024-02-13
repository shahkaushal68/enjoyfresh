'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cities', 
    [
      {
        "id": 1,
        "name": "Bombuflat",
        "stateId": 1
      },
      {
        "id": 2,
        "name": "Garacharma",
        "stateId": 1
      },
      {
        "id": 3,
        "name": "Port Blair",
        "stateId": 1
      },
      {
        "id": 4,
        "name": "Rangat",
        "stateId": 1
      },
      {
        "id": 5,
        "name": "Addanki",
        "stateId": 2
      },
      {
        "id": 6,
        "name": "Adivivaram",
        "stateId": 2
      },
      {
        "id": 7,
        "name": "Adoni",
        "stateId": 2
      },
      {
        "id": 8,
        "name": "Aganampudi",
        "stateId": 2
      },
      {
        "id": 9,
        "name": "Ajjaram",
        "stateId": 2
      },
      {
        "id": 10,
        "name": "Akividu",
        "stateId": 2
      },
      {
        "id": 11,
        "name": "Akkarampalle",
        "stateId": 2
      },
      {
        "id": 12,
        "name": "Akkayapalle",
        "stateId": 2
      },
      {
        "id": 13,
        "name": "Akkireddipalem",
        "stateId": 2
      },
      {
        "id": 14,
        "name": "Alampur",
        "stateId": 2
      },
      {
        "id": 15,
        "name": "Amalapuram",
        "stateId": 2
      },
      {
        "id": 16,
        "name": "Amudalavalasa",
        "stateId": 2
      },
      {
        "id": 17,
        "name": "Amur",
        "stateId": 2
      },
      {
        "id": 18,
        "name": "Anakapalle",
        "stateId": 2
      },
      {
        "id": 19,
        "name": "Anantapur",
        "stateId": 2
      },
      {
        "id": 20,
        "name": "Andole",
        "stateId": 2
      },
      {
        "id": 21,
        "name": "Atmakur",
        "stateId": 2
      },
      {
        "id": 22,
        "name": "Attili",
        "stateId": 2
      },
      {
        "id": 23,
        "name": "Avanigadda",
        "stateId": 2
      },
      {
        "id": 24,
        "name": "Badepalli",
        "stateId": 2
      },
      {
        "id": 25,
        "name": "Badvel",
        "stateId": 2
      },
      {
        "id": 26,
        "name": "Balapur",
        "stateId": 2
      },
      {
        "id": 27,
        "name": "Bandarulanka",
        "stateId": 2
      },
      {
        "id": 28,
        "name": "Banganapalle",
        "stateId": 2
      },
      {
        "id": 29,
        "name": "Bapatla",
        "stateId": 2
      },
      {
        "id": 30,
        "name": "Bapulapadu",
        "stateId": 2
      },
      {
        "id": 31,
        "name": "Belampalli",
        "stateId": 2
      },
      {
        "id": 32,
        "name": "Bestavaripeta",
        "stateId": 2
      },
      {
        "id": 33,
        "name": "Betamcherla",
        "stateId": 2
      },
      {
        "id": 34,
        "name": "Bhattiprolu",
        "stateId": 2
      },
      {
        "id": 35,
        "name": "Bhimavaram",
        "stateId": 2
      },
      {
        "id": 36,
        "name": "Bhimunipatnam",
        "stateId": 2
      },
      {
        "id": 37,
        "name": "Bobbili",
        "stateId": 2
      },
      {
        "id": 38,
        "name": "Bombuflat",
        "stateId": 2
      },
      {
        "id": 39,
        "name": "Bommuru",
        "stateId": 2
      },
      {
        "id": 40,
        "name": "Bugganipalle",
        "stateId": 2
      },
      {
        "id": 41,
        "name": "Challapalle",
        "stateId": 2
      },
      {
        "id": 42,
        "name": "Chandur",
        "stateId": 2
      },
      {
        "id": 43,
        "name": "Chatakonda",
        "stateId": 2
      },
      {
        "id": 44,
        "name": "Chemmumiahpet",
        "stateId": 2
      },
      {
        "id": 45,
        "name": "Chidiga",
        "stateId": 2
      },
      {
        "id": 46,
        "name": "Chilakaluripet",
        "stateId": 2
      },
      {
        "id": 47,
        "name": "Chimakurthy",
        "stateId": 2
      },
      {
        "id": 48,
        "name": "Chinagadila",
        "stateId": 2
      },
      {
        "id": 49,
        "name": "Chinagantyada",
        "stateId": 2
      },
      {
        "id": 50,
        "name": "Chinnachawk",
        "stateId": 2
      },
      {
        "id": 51,
        "name": "Chintalavalasa",
        "stateId": 2
      },
      {
        "id": 52,
        "name": "Chipurupalle",
        "stateId": 2
      },
      {
        "id": 53,
        "name": "Chirala",
        "stateId": 2
      },
      {
        "id": 54,
        "name": "Chittoor",
        "stateId": 2
      },
      {
        "id": 55,
        "name": "Chodavaram",
        "stateId": 2
      },
      {
        "id": 56,
        "name": "Choutuppal",
        "stateId": 2
      },
      {
        "id": 57,
        "name": "Chunchupalle",
        "stateId": 2
      },
      {
        "id": 58,
        "name": "Cuddapah",
        "stateId": 2
      },
      {
        "id": 59,
        "name": "Cumbum",
        "stateId": 2
      },
      {
        "id": 60,
        "name": "Darnakal",
        "stateId": 2
      },
      {
        "id": 61,
        "name": "Dasnapur",
        "stateId": 2
      },
      {
        "id": 62,
        "name": "Dauleshwaram",
        "stateId": 2
      },
      {
        "id": 63,
        "name": "Dharmavaram",
        "stateId": 2
      },
      {
        "id": 64,
        "name": "Dhone",
        "stateId": 2
      },
      {
        "id": 65,
        "name": "Dommara Nandyal",
        "stateId": 2
      },
      {
        "id": 66,
        "name": "Dowlaiswaram",
        "stateId": 2
      },
      {
        "id": 67,
        "name": "East Godavari Dist.",
        "stateId": 2
      },
      {
        "id": 68,
        "name": "Eddumailaram",
        "stateId": 2
      },
      {
        "id": 69,
        "name": "Edulapuram",
        "stateId": 2
      },
      {
        "id": 70,
        "name": "Ekambara kuppam",
        "stateId": 2
      },
      {
        "id": 71,
        "name": "Eluru",
        "stateId": 2
      },
      {
        "id": 72,
        "name": "Enikapadu",
        "stateId": 2
      },
      {
        "id": 73,
        "name": "Fakirtakya",
        "stateId": 2
      },
      {
        "id": 74,
        "name": "Farrukhnagar",
        "stateId": 2
      },
      {
        "id": 75,
        "name": "Gaddiannaram",
        "stateId": 2
      },
      {
        "id": 76,
        "name": "Gajapathinagaram",
        "stateId": 2
      },
      {
        "id": 77,
        "name": "Gajularega",
        "stateId": 2
      },
      {
        "id": 78,
        "name": "Gajuvaka",
        "stateId": 2
      },
      {
        "id": 79,
        "name": "Gannavaram",
        "stateId": 2
      },
      {
        "id": 80,
        "name": "Garacharma",
        "stateId": 2
      },
      {
        "id": 81,
        "name": "Garimellapadu",
        "stateId": 2
      },
      {
        "id": 82,
        "name": "Giddalur",
        "stateId": 2
      },
      {
        "id": 83,
        "name": "Godavarikhani",
        "stateId": 2
      },
      {
        "id": 84,
        "name": "Gopalapatnam",
        "stateId": 2
      },
      {
        "id": 85,
        "name": "Gopalur",
        "stateId": 2
      },
      {
        "id": 86,
        "name": "Gorrekunta",
        "stateId": 2
      },
      {
        "id": 87,
        "name": "Gudivada",
        "stateId": 2
      },
      {
        "id": 88,
        "name": "Gudur",
        "stateId": 2
      },
      {
        "id": 89,
        "name": "Guntakal",
        "stateId": 2
      },
      {
        "id": 90,
        "name": "Guntur",
        "stateId": 2
      },
      {
        "id": 91,
        "name": "Guti",
        "stateId": 2
      },
      {
        "id": 92,
        "name": "Hindupur",
        "stateId": 2
      },
      {
        "id": 93,
        "name": "Hukumpeta",
        "stateId": 2
      },
      {
        "id": 94,
        "name": "Ichchapuram",
        "stateId": 2
      },
      {
        "id": 95,
        "name": "Isnapur",
        "stateId": 2
      },
      {
        "id": 96,
        "name": "Jaggayyapeta",
        "stateId": 2
      },
      {
        "id": 97,
        "name": "Jallaram Kamanpur",
        "stateId": 2
      },
      {
        "id": 98,
        "name": "Jammalamadugu",
        "stateId": 2
      },
      {
        "id": 99,
        "name": "Jangampalli",
        "stateId": 2
      },
      {
        "id": 100,
        "name": "Jarjapupeta",
        "stateId": 2
      },
      {
        "id": 101,
        "name": "Kadiri",
        "stateId": 2
      },
      {
        "id": 102,
        "name": "Kaikalur",
        "stateId": 2
      },
      {
        "id": 103,
        "name": "Kakinada",
        "stateId": 2
      },
      {
        "id": 104,
        "name": "Kallur",
        "stateId": 2
      },
      {
        "id": 105,
        "name": "Kalyandurg",
        "stateId": 2
      },
      {
        "id": 106,
        "name": "Kamalapuram",
        "stateId": 2
      },
      {
        "id": 107,
        "name": "Kamareddi",
        "stateId": 2
      },
      {
        "id": 108,
        "name": "Kanapaka",
        "stateId": 2
      },
      {
        "id": 109,
        "name": "Kanigiri",
        "stateId": 2
      },
      {
        "id": 110,
        "name": "Kanithi",
        "stateId": 2
      },
      {
        "id": 111,
        "name": "Kankipadu",
        "stateId": 2
      },
      {
        "id": 112,
        "name": "Kantabamsuguda",
        "stateId": 2
      },
      {
        "id": 113,
        "name": "Kanuru",
        "stateId": 2
      },
      {
        "id": 114,
        "name": "Karnul",
        "stateId": 2
      },
      {
        "id": 115,
        "name": "Katheru",
        "stateId": 2
      },
      {
        "id": 116,
        "name": "Kavali",
        "stateId": 2
      },
      {
        "id": 117,
        "name": "Kazipet",
        "stateId": 2
      },
      {
        "id": 118,
        "name": "Khanapuram Haveli",
        "stateId": 2
      },
      {
        "id": 119,
        "name": "Kodar",
        "stateId": 2
      },
      {
        "id": 120,
        "name": "Kollapur",
        "stateId": 2
      },
      {
        "id": 121,
        "name": "Kondapalem",
        "stateId": 2
      },
      {
        "id": 122,
        "name": "Kondapalle",
        "stateId": 2
      },
      {
        "id": 123,
        "name": "Kondukur",
        "stateId": 2
      },
      {
        "id": 124,
        "name": "Kosgi",
        "stateId": 2
      },
      {
        "id": 125,
        "name": "Kothavalasa",
        "stateId": 2
      },
      {
        "id": 126,
        "name": "Kottapalli",
        "stateId": 2
      },
      {
        "id": 127,
        "name": "Kovur",
        "stateId": 2
      },
      {
        "id": 128,
        "name": "Kovurpalle",
        "stateId": 2
      },
      {
        "id": 129,
        "name": "Kovvur",
        "stateId": 2
      },
      {
        "id": 130,
        "name": "Krishna",
        "stateId": 2
      },
      {
        "id": 131,
        "name": "Kuppam",
        "stateId": 2
      },
      {
        "id": 132,
        "name": "Kurmannapalem",
        "stateId": 2
      },
      {
        "id": 133,
        "name": "Kurnool",
        "stateId": 2
      },
      {
        "id": 134,
        "name": "Lakshettipet",
        "stateId": 2
      },
      {
        "id": 135,
        "name": "Lalbahadur Nagar",
        "stateId": 2
      },
      {
        "id": 136,
        "name": "Machavaram",
        "stateId": 2
      },
      {
        "id": 137,
        "name": "Macherla",
        "stateId": 2
      },
      {
        "id": 138,
        "name": "Machilipatnam",
        "stateId": 2
      },
      {
        "id": 139,
        "name": "Madanapalle",
        "stateId": 2
      },
      {
        "id": 140,
        "name": "Madaram",
        "stateId": 2
      },
      {
        "id": 141,
        "name": "Madhuravada",
        "stateId": 2
      },
      {
        "id": 142,
        "name": "Madikonda",
        "stateId": 2
      },
      {
        "id": 143,
        "name": "Madugule",
        "stateId": 2
      },
      {
        "id": 144,
        "name": "Mahabubnagar",
        "stateId": 2
      },
      {
        "id": 145,
        "name": "Mahbubabad",
        "stateId": 2
      },
      {
        "id": 146,
        "name": "Malkajgiri",
        "stateId": 2
      },
      {
        "id": 147,
        "name": "Mamilapalle",
        "stateId": 2
      },
      {
        "id": 148,
        "name": "Mancheral",
        "stateId": 2
      },
      {
        "id": 149,
        "name": "Mandapeta",
        "stateId": 2
      },
      {
        "id": 150,
        "name": "Mandasa",
        "stateId": 2
      },
      {
        "id": 151,
        "name": "Mangalagiri",
        "stateId": 2
      },
      {
        "id": 152,
        "name": "Manthani",
        "stateId": 2
      },
      {
        "id": 153,
        "name": "Markapur",
        "stateId": 2
      },
      {
        "id": 154,
        "name": "Marturu",
        "stateId": 2
      },
      {
        "id": 155,
        "name": "Metpalli",
        "stateId": 2
      },
      {
        "id": 156,
        "name": "Mindi",
        "stateId": 2
      },
      {
        "id": 157,
        "name": "Mirpet",
        "stateId": 2
      },
      {
        "id": 158,
        "name": "Moragudi",
        "stateId": 2
      },
      {
        "id": 159,
        "name": "Mothugudam",
        "stateId": 2
      },
      {
        "id": 160,
        "name": "Nagari",
        "stateId": 2
      },
      {
        "id": 161,
        "name": "Nagireddipalle",
        "stateId": 2
      },
      {
        "id": 162,
        "name": "Nandigama",
        "stateId": 2
      },
      {
        "id": 163,
        "name": "Nandikotkur",
        "stateId": 2
      },
      {
        "id": 164,
        "name": "Nandyal",
        "stateId": 2
      },
      {
        "id": 165,
        "name": "Narasannapeta",
        "stateId": 2
      },
      {
        "id": 166,
        "name": "Narasapur",
        "stateId": 2
      },
      {
        "id": 167,
        "name": "Narasaraopet",
        "stateId": 2
      },
      {
        "id": 168,
        "name": "Narayanavanam",
        "stateId": 2
      },
      {
        "id": 169,
        "name": "Narsapur",
        "stateId": 2
      },
      {
        "id": 170,
        "name": "Narsingi",
        "stateId": 2
      },
      {
        "id": 171,
        "name": "Narsipatnam",
        "stateId": 2
      },
      {
        "id": 172,
        "name": "Naspur",
        "stateId": 2
      },
      {
        "id": 173,
        "name": "Nathayyapalem",
        "stateId": 2
      },
      {
        "id": 174,
        "name": "Nayudupeta",
        "stateId": 2
      },
      {
        "id": 175,
        "name": "Nelimaria",
        "stateId": 2
      },
      {
        "id": 176,
        "name": "Nellore",
        "stateId": 2
      },
      {
        "id": 177,
        "name": "Nidadavole",
        "stateId": 2
      },
      {
        "id": 178,
        "name": "Nuzvid",
        "stateId": 2
      },
      {
        "id": 179,
        "name": "Omerkhan daira",
        "stateId": 2
      },
      {
        "id": 180,
        "name": "Ongole",
        "stateId": 2
      },
      {
        "id": 181,
        "name": "Osmania University",
        "stateId": 2
      },
      {
        "id": 182,
        "name": "Pakala",
        "stateId": 2
      },
      {
        "id": 183,
        "name": "Palakole",
        "stateId": 2
      },
      {
        "id": 184,
        "name": "Palakurthi",
        "stateId": 2
      },
      {
        "id": 185,
        "name": "Palasa",
        "stateId": 2
      },
      {
        "id": 186,
        "name": "Palempalle",
        "stateId": 2
      },
      {
        "id": 187,
        "name": "Palkonda",
        "stateId": 2
      },
      {
        "id": 188,
        "name": "Palmaner",
        "stateId": 2
      },
      {
        "id": 189,
        "name": "Pamur",
        "stateId": 2
      },
      {
        "id": 190,
        "name": "Panjim",
        "stateId": 2
      },
      {
        "id": 191,
        "name": "Papampeta",
        "stateId": 2
      },
      {
        "id": 192,
        "name": "Parasamba",
        "stateId": 2
      },
      {
        "id": 193,
        "name": "Parvatipuram",
        "stateId": 2
      },
      {
        "id": 194,
        "name": "Patancheru",
        "stateId": 2
      },
      {
        "id": 195,
        "name": "Payakaraopet",
        "stateId": 2
      },
      {
        "id": 196,
        "name": "Pedagantyada",
        "stateId": 2
      },
      {
        "id": 197,
        "name": "Pedana",
        "stateId": 2
      },
      {
        "id": 198,
        "name": "Peddapuram",
        "stateId": 2
      },
      {
        "id": 199,
        "name": "Pendurthi",
        "stateId": 2
      },
      {
        "id": 200,
        "name": "Penugonda",
        "stateId": 2
      },
      {
        "id": 201,
        "name": "Penukonda",
        "stateId": 2
      },
      {
        "id": 202,
        "name": "Phirangipuram",
        "stateId": 2
      },
      {
        "id": 203,
        "name": "Pithapuram",
        "stateId": 2
      },
      {
        "id": 204,
        "name": "Ponnur",
        "stateId": 2
      },
      {
        "id": 205,
        "name": "Port Blair",
        "stateId": 2
      },
      {
        "id": 206,
        "name": "Pothinamallayyapalem",
        "stateId": 2
      },
      {
        "id": 207,
        "name": "Prakasam",
        "stateId": 2
      },
      {
        "id": 208,
        "name": "Prasadampadu",
        "stateId": 2
      },
      {
        "id": 209,
        "name": "Prasantinilayam",
        "stateId": 2
      },
      {
        "id": 210,
        "name": "Proddatur",
        "stateId": 2
      },
      {
        "id": 211,
        "name": "Pulivendla",
        "stateId": 2
      },
      {
        "id": 212,
        "name": "Punganuru",
        "stateId": 2
      },
      {
        "id": 213,
        "name": "Puttur",
        "stateId": 2
      },
      {
        "id": 214,
        "name": "Qutubullapur",
        "stateId": 2
      },
      {
        "id": 215,
        "name": "Rajahmundry",
        "stateId": 2
      },
      {
        "id": 216,
        "name": "Rajamahendri",
        "stateId": 2
      },
      {
        "id": 217,
        "name": "Rajampet",
        "stateId": 2
      },
      {
        "id": 218,
        "name": "Rajendranagar",
        "stateId": 2
      },
      {
        "id": 219,
        "name": "Rajoli",
        "stateId": 2
      },
      {
        "id": 220,
        "name": "Ramachandrapuram",
        "stateId": 2
      },
      {
        "id": 221,
        "name": "Ramanayyapeta",
        "stateId": 2
      },
      {
        "id": 222,
        "name": "Ramapuram",
        "stateId": 2
      },
      {
        "id": 223,
        "name": "Ramarajupalli",
        "stateId": 2
      },
      {
        "id": 224,
        "name": "Ramavarappadu",
        "stateId": 2
      },
      {
        "id": 225,
        "name": "Rameswaram",
        "stateId": 2
      },
      {
        "id": 226,
        "name": "Rampachodavaram",
        "stateId": 2
      },
      {
        "id": 227,
        "name": "Ravulapalam",
        "stateId": 2
      },
      {
        "id": 228,
        "name": "Rayachoti",
        "stateId": 2
      },
      {
        "id": 229,
        "name": "Rayadrug",
        "stateId": 2
      },
      {
        "id": 230,
        "name": "Razam",
        "stateId": 2
      },
      {
        "id": 231,
        "name": "Razole",
        "stateId": 2
      },
      {
        "id": 232,
        "name": "Renigunta",
        "stateId": 2
      },
      {
        "id": 233,
        "name": "Repalle",
        "stateId": 2
      },
      {
        "id": 234,
        "name": "Rishikonda",
        "stateId": 2
      },
      {
        "id": 235,
        "name": "Salur",
        "stateId": 2
      },
      {
        "id": 236,
        "name": "Samalkot",
        "stateId": 2
      },
      {
        "id": 237,
        "name": "Sattenapalle",
        "stateId": 2
      },
      {
        "id": 238,
        "name": "Seetharampuram",
        "stateId": 2
      },
      {
        "id": 239,
        "name": "Serilungampalle",
        "stateId": 2
      },
      {
        "id": 240,
        "name": "Shankarampet",
        "stateId": 2
      },
      {
        "id": 241,
        "name": "Shar",
        "stateId": 2
      },
      {
        "id": 242,
        "name": "Singarayakonda",
        "stateId": 2
      },
      {
        "id": 243,
        "name": "Sirpur",
        "stateId": 2
      },
      {
        "id": 244,
        "name": "Sirsilla",
        "stateId": 2
      },
      {
        "id": 245,
        "name": "Sompeta",
        "stateId": 2
      },
      {
        "id": 246,
        "name": "Sriharikota",
        "stateId": 2
      },
      {
        "id": 247,
        "name": "Srikakulam",
        "stateId": 2
      },
      {
        "id": 248,
        "name": "Srikalahasti",
        "stateId": 2
      },
      {
        "id": 249,
        "name": "Sriramnagar",
        "stateId": 2
      },
      {
        "id": 250,
        "name": "Sriramsagar",
        "stateId": 2
      },
      {
        "id": 251,
        "name": "Srisailam",
        "stateId": 2
      },
      {
        "id": 252,
        "name": "Srisailamgudem Devasthanam",
        "stateId": 2
      },
      {
        "id": 253,
        "name": "Sulurpeta",
        "stateId": 2
      },
      {
        "id": 254,
        "name": "Suriapet",
        "stateId": 2
      },
      {
        "id": 255,
        "name": "Suryaraopet",
        "stateId": 2
      },
      {
        "id": 256,
        "name": "Tadepalle",
        "stateId": 2
      },
      {
        "id": 257,
        "name": "Tadepalligudem",
        "stateId": 2
      },
      {
        "id": 258,
        "name": "Tadpatri",
        "stateId": 2
      },
      {
        "id": 259,
        "name": "Tallapalle",
        "stateId": 2
      },
      {
        "id": 260,
        "name": "Tanuku",
        "stateId": 2
      },
      {
        "id": 261,
        "name": "Tekkali",
        "stateId": 2
      },
      {
        "id": 262,
        "name": "Tenali",
        "stateId": 2
      },
      {
        "id": 263,
        "name": "Tigalapahad",
        "stateId": 2
      },
      {
        "id": 264,
        "name": "Tiruchanur",
        "stateId": 2
      },
      {
        "id": 265,
        "name": "Tirumala",
        "stateId": 2
      },
      {
        "id": 266,
        "name": "Tirupati",
        "stateId": 2
      },
      {
        "id": 267,
        "name": "Tirvuru",
        "stateId": 2
      },
      {
        "id": 268,
        "name": "Trimulgherry",
        "stateId": 2
      },
      {
        "id": 269,
        "name": "Tuni",
        "stateId": 2
      },
      {
        "id": 270,
        "name": "Turangi",
        "stateId": 2
      },
      {
        "id": 271,
        "name": "Ukkayapalli",
        "stateId": 2
      },
      {
        "id": 272,
        "name": "Ukkunagaram",
        "stateId": 2
      },
      {
        "id": 273,
        "name": "Uppal Kalan",
        "stateId": 2
      },
      {
        "id": 274,
        "name": "Upper Sileru",
        "stateId": 2
      },
      {
        "id": 275,
        "name": "Uravakonda",
        "stateId": 2
      },
      {
        "id": 276,
        "name": "Vadlapudi",
        "stateId": 2
      },
      {
        "id": 277,
        "name": "Vaparala",
        "stateId": 2
      },
      {
        "id": 278,
        "name": "Vemalwada",
        "stateId": 2
      },
      {
        "id": 279,
        "name": "Venkatagiri",
        "stateId": 2
      },
      {
        "id": 280,
        "name": "Venkatapuram",
        "stateId": 2
      },
      {
        "id": 281,
        "name": "Vepagunta",
        "stateId": 2
      },
      {
        "id": 282,
        "name": "Vetapalem",
        "stateId": 2
      },
      {
        "id": 283,
        "name": "Vijayapuri",
        "stateId": 2
      },
      {
        "id": 284,
        "name": "Vijayapuri South",
        "stateId": 2
      },
      {
        "id": 285,
        "name": "Vijayawada",
        "stateId": 2
      },
      {
        "id": 286,
        "name": "Vinukonda",
        "stateId": 2
      },
      {
        "id": 287,
        "name": "Visakhapatnam",
        "stateId": 2
      },
      {
        "id": 288,
        "name": "Vizianagaram",
        "stateId": 2
      },
      {
        "id": 289,
        "name": "Vuyyuru",
        "stateId": 2
      },
      {
        "id": 290,
        "name": "Wanparti",
        "stateId": 2
      },
      {
        "id": 291,
        "name": "West Godavari Dist.",
        "stateId": 2
      },
      {
        "id": 292,
        "name": "Yadagirigutta",
        "stateId": 2
      },
      {
        "id": 293,
        "name": "Yarada",
        "stateId": 2
      },
      {
        "id": 294,
        "name": "Yellamanchili",
        "stateId": 2
      },
      {
        "id": 295,
        "name": "Yemmiganur",
        "stateId": 2
      },
      {
        "id": 296,
        "name": "Yenamalakudru",
        "stateId": 2
      },
      {
        "id": 297,
        "name": "Yendada",
        "stateId": 2
      },
      {
        "id": 298,
        "name": "Yerraguntla",
        "stateId": 2
      },
      {
        "id": 299,
        "name": "Along",
        "stateId": 3
      },
      {
        "id": 300,
        "name": "Basar",
        "stateId": 3
      },
      {
        "id": 301,
        "name": "Bondila",
        "stateId": 3
      },
      {
        "id": 302,
        "name": "Changlang",
        "stateId": 3
      },
      {
        "id": 303,
        "name": "Daporijo",
        "stateId": 3
      },
      {
        "id": 304,
        "name": "Deomali",
        "stateId": 3
      },
      {
        "id": 305,
        "name": "Itanagar",
        "stateId": 3
      },
      {
        "id": 306,
        "name": "Jairampur",
        "stateId": 3
      },
      {
        "id": 307,
        "name": "Khonsa",
        "stateId": 3
      },
      {
        "id": 308,
        "name": "Naharlagun",
        "stateId": 3
      },
      {
        "id": 309,
        "name": "Namsai",
        "stateId": 3
      },
      {
        "id": 310,
        "name": "Pasighat",
        "stateId": 3
      },
      {
        "id": 311,
        "name": "Roing",
        "stateId": 3
      },
      {
        "id": 312,
        "name": "Seppa",
        "stateId": 3
      },
      {
        "id": 313,
        "name": "Tawang",
        "stateId": 3
      },
      {
        "id": 314,
        "name": "Tezu",
        "stateId": 3
      },
      {
        "id": 315,
        "name": "Ziro",
        "stateId": 3
      },
      {
        "id": 316,
        "name": "Abhayapuri",
        "stateId": 4
      },
      {
        "id": 317,
        "name": "Ambikapur",
        "stateId": 4
      },
      {
        "id": 318,
        "name": "Amguri",
        "stateId": 4
      },
      {
        "id": 319,
        "name": "Anand Nagar",
        "stateId": 4
      },
      {
        "id": 320,
        "name": "Badarpur",
        "stateId": 4
      },
      {
        "id": 321,
        "name": "Badarpur Railway Town",
        "stateId": 4
      },
      {
        "id": 322,
        "name": "Bahbari Gaon",
        "stateId": 4
      },
      {
        "id": 323,
        "name": "Bamun Sualkuchi",
        "stateId": 4
      },
      {
        "id": 324,
        "name": "Barbari",
        "stateId": 4
      },
      {
        "id": 325,
        "name": "Barpathar",
        "stateId": 4
      },
      {
        "id": 326,
        "name": "Barpeta",
        "stateId": 4
      },
      {
        "id": 327,
        "name": "Barpeta Road",
        "stateId": 4
      },
      {
        "id": 328,
        "name": "Basugaon",
        "stateId": 4
      },
      {
        "id": 329,
        "name": "Bihpuria",
        "stateId": 4
      },
      {
        "id": 330,
        "name": "Bijni",
        "stateId": 4
      },
      {
        "id": 331,
        "name": "Bilasipara",
        "stateId": 4
      },
      {
        "id": 332,
        "name": "Biswanath Chariali",
        "stateId": 4
      },
      {
        "id": 333,
        "name": "Bohori",
        "stateId": 4
      },
      {
        "id": 334,
        "name": "Bokajan",
        "stateId": 4
      },
      {
        "id": 335,
        "name": "Bokokhat",
        "stateId": 4
      },
      {
        "id": 336,
        "name": "Bongaigaon",
        "stateId": 4
      },
      {
        "id": 337,
        "name": "Bongaigaon Petro-chemical Town",
        "stateId": 4
      },
      {
        "id": 338,
        "name": "Borgolai",
        "stateId": 4
      },
      {
        "id": 339,
        "name": "Chabua",
        "stateId": 4
      },
      {
        "id": 340,
        "name": "Chandrapur Bagicha",
        "stateId": 4
      },
      {
        "id": 341,
        "name": "Chapar",
        "stateId": 4
      },
      {
        "id": 342,
        "name": "Chekonidhara",
        "stateId": 4
      },
      {
        "id": 343,
        "name": "Choto Haibor",
        "stateId": 4
      },
      {
        "id": 344,
        "name": "Dergaon",
        "stateId": 4
      },
      {
        "id": 345,
        "name": "Dharapur",
        "stateId": 4
      },
      {
        "id": 346,
        "name": "Dhekiajuli",
        "stateId": 4
      },
      {
        "id": 347,
        "name": "Dhemaji",
        "stateId": 4
      },
      {
        "id": 348,
        "name": "Dhing",
        "stateId": 4
      },
      {
        "id": 349,
        "name": "Dhubri",
        "stateId": 4
      },
      {
        "id": 350,
        "name": "Dhuburi",
        "stateId": 4
      },
      {
        "id": 351,
        "name": "Dibrugarh",
        "stateId": 4
      },
      {
        "id": 352,
        "name": "Digboi",
        "stateId": 4
      },
      {
        "id": 353,
        "name": "Digboi Oil Town",
        "stateId": 4
      },
      {
        "id": 354,
        "name": "Dimaruguri",
        "stateId": 4
      },
      {
        "id": 355,
        "name": "Diphu",
        "stateId": 4
      },
      {
        "id": 356,
        "name": "Dispur",
        "stateId": 4
      },
      {
        "id": 357,
        "name": "Doboka",
        "stateId": 4
      },
      {
        "id": 358,
        "name": "Dokmoka",
        "stateId": 4
      },
      {
        "id": 359,
        "name": "Donkamokan",
        "stateId": 4
      },
      {
        "id": 360,
        "name": "Duliagaon",
        "stateId": 4
      },
      {
        "id": 361,
        "name": "Duliajan",
        "stateId": 4
      },
      {
        "id": 362,
        "name": "Duliajan No.1",
        "stateId": 4
      },
      {
        "id": 363,
        "name": "Dum Duma",
        "stateId": 4
      },
      {
        "id": 364,
        "name": "Durga Nagar",
        "stateId": 4
      },
      {
        "id": 365,
        "name": "Gauripur",
        "stateId": 4
      },
      {
        "id": 366,
        "name": "Goalpara",
        "stateId": 4
      },
      {
        "id": 367,
        "name": "Gohpur",
        "stateId": 4
      },
      {
        "id": 368,
        "name": "Golaghat",
        "stateId": 4
      },
      {
        "id": 369,
        "name": "Golakganj",
        "stateId": 4
      },
      {
        "id": 370,
        "name": "Gossaigaon",
        "stateId": 4
      },
      {
        "id": 371,
        "name": "Guwahati",
        "stateId": 4
      },
      {
        "id": 372,
        "name": "Haflong",
        "stateId": 4
      },
      {
        "id": 373,
        "name": "Hailakandi",
        "stateId": 4
      },
      {
        "id": 374,
        "name": "Hamren",
        "stateId": 4
      },
      {
        "id": 375,
        "name": "Hauli",
        "stateId": 4
      },
      {
        "id": 376,
        "name": "Hauraghat",
        "stateId": 4
      },
      {
        "id": 377,
        "name": "Hojai",
        "stateId": 4
      },
      {
        "id": 378,
        "name": "Jagiroad",
        "stateId": 4
      },
      {
        "id": 379,
        "name": "Jagiroad Paper Mill",
        "stateId": 4
      },
      {
        "id": 380,
        "name": "Jogighopa",
        "stateId": 4
      },
      {
        "id": 381,
        "name": "Jonai Bazar",
        "stateId": 4
      },
      {
        "id": 382,
        "name": "Jorhat",
        "stateId": 4
      },
      {
        "id": 383,
        "name": "Kampur Town",
        "stateId": 4
      },
      {
        "id": 384,
        "name": "Kamrup",
        "stateId": 4
      },
      {
        "id": 385,
        "name": "Kanakpur",
        "stateId": 4
      },
      {
        "id": 386,
        "name": "Karimganj",
        "stateId": 4
      },
      {
        "id": 387,
        "name": "Kharijapikon",
        "stateId": 4
      },
      {
        "id": 388,
        "name": "Kharupetia",
        "stateId": 4
      },
      {
        "id": 389,
        "name": "Kochpara",
        "stateId": 4
      },
      {
        "id": 390,
        "name": "Kokrajhar",
        "stateId": 4
      },
      {
        "id": 391,
        "name": "Kumar Kaibarta Gaon",
        "stateId": 4
      },
      {
        "id": 392,
        "name": "Lakhimpur",
        "stateId": 4
      },
      {
        "id": 393,
        "name": "Lakhipur",
        "stateId": 4
      },
      {
        "id": 394,
        "name": "Lala",
        "stateId": 4
      },
      {
        "id": 395,
        "name": "Lanka",
        "stateId": 4
      },
      {
        "id": 396,
        "name": "Lido Tikok",
        "stateId": 4
      },
      {
        "id": 397,
        "name": "Lido Town",
        "stateId": 4
      },
      {
        "id": 398,
        "name": "Lumding",
        "stateId": 4
      },
      {
        "id": 399,
        "name": "Lumding Railway Colony",
        "stateId": 4
      },
      {
        "id": 400,
        "name": "Mahur",
        "stateId": 4
      },
      {
        "id": 401,
        "name": "Maibong",
        "stateId": 4
      },
      {
        "id": 402,
        "name": "Majgaon",
        "stateId": 4
      },
      {
        "id": 403,
        "name": "Makum",
        "stateId": 4
      },
      {
        "id": 404,
        "name": "Mangaldai",
        "stateId": 4
      },
      {
        "id": 405,
        "name": "Mankachar",
        "stateId": 4
      },
      {
        "id": 406,
        "name": "Margherita",
        "stateId": 4
      },
      {
        "id": 407,
        "name": "Mariani",
        "stateId": 4
      },
      {
        "id": 408,
        "name": "Marigaon",
        "stateId": 4
      },
      {
        "id": 409,
        "name": "Moran",
        "stateId": 4
      },
      {
        "id": 410,
        "name": "Moranhat",
        "stateId": 4
      },
      {
        "id": 411,
        "name": "Nagaon",
        "stateId": 4
      },
      {
        "id": 412,
        "name": "Naharkatia",
        "stateId": 4
      },
      {
        "id": 413,
        "name": "Nalbari",
        "stateId": 4
      },
      {
        "id": 414,
        "name": "Namrup",
        "stateId": 4
      },
      {
        "id": 415,
        "name": "Naubaisa Gaon",
        "stateId": 4
      },
      {
        "id": 416,
        "name": "Nazira",
        "stateId": 4
      },
      {
        "id": 417,
        "name": "New Bongaigaon Railway Colony",
        "stateId": 4
      },
      {
        "id": 418,
        "name": "Niz-Hajo",
        "stateId": 4
      },
      {
        "id": 419,
        "name": "North Guwahati",
        "stateId": 4
      },
      {
        "id": 420,
        "name": "Numaligarh",
        "stateId": 4
      },
      {
        "id": 421,
        "name": "Palasbari",
        "stateId": 4
      },
      {
        "id": 422,
        "name": "Panchgram",
        "stateId": 4
      },
      {
        "id": 423,
        "name": "Pathsala",
        "stateId": 4
      },
      {
        "id": 424,
        "name": "Raha",
        "stateId": 4
      },
      {
        "id": 425,
        "name": "Rangapara",
        "stateId": 4
      },
      {
        "id": 426,
        "name": "Rangia",
        "stateId": 4
      },
      {
        "id": 427,
        "name": "Salakati",
        "stateId": 4
      },
      {
        "id": 428,
        "name": "Sapatgram",
        "stateId": 4
      },
      {
        "id": 429,
        "name": "Sarthebari",
        "stateId": 4
      },
      {
        "id": 430,
        "name": "Sarupathar",
        "stateId": 4
      },
      {
        "id": 431,
        "name": "Sarupathar Bengali",
        "stateId": 4
      },
      {
        "id": 432,
        "name": "Senchoagaon",
        "stateId": 4
      },
      {
        "id": 433,
        "name": "Sibsagar",
        "stateId": 4
      },
      {
        "id": 434,
        "name": "Silapathar",
        "stateId": 4
      },
      {
        "id": 435,
        "name": "Silchar",
        "stateId": 4
      },
      {
        "id": 436,
        "name": "Silchar Part-X",
        "stateId": 4
      },
      {
        "id": 437,
        "name": "Sonari",
        "stateId": 4
      },
      {
        "id": 438,
        "name": "Sorbhog",
        "stateId": 4
      },
      {
        "id": 439,
        "name": "Sualkuchi",
        "stateId": 4
      },
      {
        "id": 440,
        "name": "Tangla",
        "stateId": 4
      },
      {
        "id": 441,
        "name": "Tezpur",
        "stateId": 4
      },
      {
        "id": 442,
        "name": "Tihu",
        "stateId": 4
      },
      {
        "id": 443,
        "name": "Tinsukia",
        "stateId": 4
      },
      {
        "id": 444,
        "name": "Titabor",
        "stateId": 4
      },
      {
        "id": 445,
        "name": "Udalguri",
        "stateId": 4
      },
      {
        "id": 446,
        "name": "Umrangso",
        "stateId": 4
      },
      {
        "id": 447,
        "name": "Uttar Krishnapur Part-I",
        "stateId": 4
      },
      {
        "id": 448,
        "name": "Amarpur",
        "stateId": 5
      },
      {
        "id": 449,
        "name": "Ara",
        "stateId": 5
      },
      {
        "id": 450,
        "name": "Araria",
        "stateId": 5
      },
      {
        "id": 451,
        "name": "Areraj",
        "stateId": 5
      },
      {
        "id": 452,
        "name": "Asarganj",
        "stateId": 5
      },
      {
        "id": 453,
        "name": "Aurangabad",
        "stateId": 5
      },
      {
        "id": 454,
        "name": "Bagaha",
        "stateId": 5
      },
      {
        "id": 455,
        "name": "Bahadurganj",
        "stateId": 5
      },
      {
        "id": 456,
        "name": "Bairgania",
        "stateId": 5
      },
      {
        "id": 457,
        "name": "Bakhtiyarpur",
        "stateId": 5
      },
      {
        "id": 458,
        "name": "Banka",
        "stateId": 5
      },
      {
        "id": 459,
        "name": "Banmankhi",
        "stateId": 5
      },
      {
        "id": 460,
        "name": "Bar Bigha",
        "stateId": 5
      },
      {
        "id": 461,
        "name": "Barauli",
        "stateId": 5
      },
      {
        "id": 462,
        "name": "Barauni Oil Township",
        "stateId": 5
      },
      {
        "id": 463,
        "name": "Barh",
        "stateId": 5
      },
      {
        "id": 464,
        "name": "Barhiya",
        "stateId": 5
      },
      {
        "id": 465,
        "name": "Bariapur",
        "stateId": 5
      },
      {
        "id": 466,
        "name": "Baruni",
        "stateId": 5
      },
      {
        "id": 467,
        "name": "Begusarai",
        "stateId": 5
      },
      {
        "id": 468,
        "name": "Behea",
        "stateId": 5
      },
      {
        "id": 469,
        "name": "Belsand",
        "stateId": 5
      },
      {
        "id": 470,
        "name": "Bettiah",
        "stateId": 5
      },
      {
        "id": 471,
        "name": "Bhabua",
        "stateId": 5
      },
      {
        "id": 472,
        "name": "Bhagalpur",
        "stateId": 5
      },
      {
        "id": 473,
        "name": "Bhimnagar",
        "stateId": 5
      },
      {
        "id": 474,
        "name": "Bhojpur",
        "stateId": 5
      },
      {
        "id": 475,
        "name": "Bihar",
        "stateId": 5
      },
      {
        "id": 476,
        "name": "Bihar Sharif",
        "stateId": 5
      },
      {
        "id": 477,
        "name": "Bihariganj",
        "stateId": 5
      },
      {
        "id": 478,
        "name": "Bikramganj",
        "stateId": 5
      },
      {
        "id": 479,
        "name": "Birpur",
        "stateId": 5
      },
      {
        "id": 480,
        "name": "Bodh Gaya",
        "stateId": 5
      },
      {
        "id": 481,
        "name": "Buxar",
        "stateId": 5
      },
      {
        "id": 482,
        "name": "Chakia",
        "stateId": 5
      },
      {
        "id": 483,
        "name": "Chanpatia",
        "stateId": 5
      },
      {
        "id": 484,
        "name": "Chhapra",
        "stateId": 5
      },
      {
        "id": 485,
        "name": "Chhatapur",
        "stateId": 5
      },
      {
        "id": 486,
        "name": "Colgong",
        "stateId": 5
      },
      {
        "id": 487,
        "name": "Dalsingh Sarai",
        "stateId": 5
      },
      {
        "id": 488,
        "name": "Darbhanga",
        "stateId": 5
      },
      {
        "id": 489,
        "name": "Daudnagar",
        "stateId": 5
      },
      {
        "id": 490,
        "name": "Dehri",
        "stateId": 5
      },
      {
        "id": 491,
        "name": "Dhaka",
        "stateId": 5
      },
      {
        "id": 492,
        "name": "Dighwara",
        "stateId": 5
      },
      {
        "id": 493,
        "name": "Dinapur",
        "stateId": 5
      },
      {
        "id": 494,
        "name": "Dinapur Cantonment",
        "stateId": 5
      },
      {
        "id": 495,
        "name": "Dumra",
        "stateId": 5
      },
      {
        "id": 496,
        "name": "Dumraon",
        "stateId": 5
      },
      {
        "id": 497,
        "name": "Fatwa",
        "stateId": 5
      },
      {
        "id": 498,
        "name": "Forbesganj",
        "stateId": 5
      },
      {
        "id": 499,
        "name": "Gaya",
        "stateId": 5
      },
      {
        "id": 500,
        "name": "Gazipur",
        "stateId": 5
      },
      {
        "id": 501,
        "name": "Ghoghardiha",
        "stateId": 5
      },
      {
        "id": 502,
        "name": "Gogri Jamalpur",
        "stateId": 5
      },
      {
        "id": 503,
        "name": "Gopalganj",
        "stateId": 5
      },
      {
        "id": 504,
        "name": "Habibpur",
        "stateId": 5
      },
      {
        "id": 505,
        "name": "Hajipur",
        "stateId": 5
      },
      {
        "id": 506,
        "name": "Hasanpur",
        "stateId": 5
      },
      {
        "id": 507,
        "name": "Hazaribagh",
        "stateId": 5
      },
      {
        "id": 508,
        "name": "Hilsa",
        "stateId": 5
      },
      {
        "id": 509,
        "name": "Hisua",
        "stateId": 5
      },
      {
        "id": 510,
        "name": "Islampur",
        "stateId": 5
      },
      {
        "id": 511,
        "name": "Jagdispur",
        "stateId": 5
      },
      {
        "id": 512,
        "name": "Jahanabad",
        "stateId": 5
      },
      {
        "id": 513,
        "name": "Jamalpur",
        "stateId": 5
      },
      {
        "id": 514,
        "name": "Jamhaur",
        "stateId": 5
      },
      {
        "id": 515,
        "name": "Jamui",
        "stateId": 5
      },
      {
        "id": 516,
        "name": "Janakpur Road",
        "stateId": 5
      },
      {
        "id": 517,
        "name": "Janpur",
        "stateId": 5
      },
      {
        "id": 518,
        "name": "Jaynagar",
        "stateId": 5
      },
      {
        "id": 519,
        "name": "Jha Jha",
        "stateId": 5
      },
      {
        "id": 520,
        "name": "Jhanjharpur",
        "stateId": 5
      },
      {
        "id": 521,
        "name": "Jogbani",
        "stateId": 5
      },
      {
        "id": 522,
        "name": "Kanti",
        "stateId": 5
      },
      {
        "id": 523,
        "name": "Kasba",
        "stateId": 5
      },
      {
        "id": 524,
        "name": "Kataiya",
        "stateId": 5
      },
      {
        "id": 525,
        "name": "Katihar",
        "stateId": 5
      },
      {
        "id": 526,
        "name": "Khagaria",
        "stateId": 5
      },
      {
        "id": 527,
        "name": "Khagaul",
        "stateId": 5
      },
      {
        "id": 528,
        "name": "Kharagpur",
        "stateId": 5
      },
      {
        "id": 529,
        "name": "Khusrupur",
        "stateId": 5
      },
      {
        "id": 530,
        "name": "Kishanganj",
        "stateId": 5
      },
      {
        "id": 531,
        "name": "Koath",
        "stateId": 5
      },
      {
        "id": 532,
        "name": "Koilwar",
        "stateId": 5
      },
      {
        "id": 533,
        "name": "Lakhisarai",
        "stateId": 5
      },
      {
        "id": 534,
        "name": "Lalganj",
        "stateId": 5
      },
      {
        "id": 535,
        "name": "Lauthaha",
        "stateId": 5
      },
      {
        "id": 536,
        "name": "Madhepura",
        "stateId": 5
      },
      {
        "id": 537,
        "name": "Madhubani",
        "stateId": 5
      },
      {
        "id": 538,
        "name": "Maharajganj",
        "stateId": 5
      },
      {
        "id": 539,
        "name": "Mahnar Bazar",
        "stateId": 5
      },
      {
        "id": 540,
        "name": "Mairwa",
        "stateId": 5
      },
      {
        "id": 541,
        "name": "Makhdumpur",
        "stateId": 5
      },
      {
        "id": 542,
        "name": "Maner",
        "stateId": 5
      },
      {
        "id": 543,
        "name": "Manihari",
        "stateId": 5
      },
      {
        "id": 544,
        "name": "Marhaura",
        "stateId": 5
      },
      {
        "id": 545,
        "name": "Masaurhi",
        "stateId": 5
      },
      {
        "id": 546,
        "name": "Mirganj",
        "stateId": 5
      },
      {
        "id": 547,
        "name": "Mohiuddinagar",
        "stateId": 5
      },
      {
        "id": 548,
        "name": "Mokama",
        "stateId": 5
      },
      {
        "id": 549,
        "name": "Motihari",
        "stateId": 5
      },
      {
        "id": 550,
        "name": "Motipur",
        "stateId": 5
      },
      {
        "id": 551,
        "name": "Munger",
        "stateId": 5
      },
      {
        "id": 552,
        "name": "Murliganj",
        "stateId": 5
      },
      {
        "id": 553,
        "name": "Muzaffarpur",
        "stateId": 5
      },
      {
        "id": 554,
        "name": "Nabinagar",
        "stateId": 5
      },
      {
        "id": 555,
        "name": "Narkatiaganj",
        "stateId": 5
      },
      {
        "id": 556,
        "name": "Nasriganj",
        "stateId": 5
      },
      {
        "id": 557,
        "name": "Natwar",
        "stateId": 5
      },
      {
        "id": 558,
        "name": "Naugachhia",
        "stateId": 5
      },
      {
        "id": 559,
        "name": "Nawada",
        "stateId": 5
      },
      {
        "id": 560,
        "name": "Nirmali",
        "stateId": 5
      },
      {
        "id": 561,
        "name": "Nokha",
        "stateId": 5
      },
      {
        "id": 562,
        "name": "Paharpur",
        "stateId": 5
      },
      {
        "id": 563,
        "name": "Patna",
        "stateId": 5
      },
      {
        "id": 564,
        "name": "Phulwari",
        "stateId": 5
      },
      {
        "id": 565,
        "name": "Piro",
        "stateId": 5
      },
      {
        "id": 566,
        "name": "Purnia",
        "stateId": 5
      },
      {
        "id": 567,
        "name": "Pusa",
        "stateId": 5
      },
      {
        "id": 568,
        "name": "Rafiganj",
        "stateId": 5
      },
      {
        "id": 569,
        "name": "Raghunathpur",
        "stateId": 5
      },
      {
        "id": 570,
        "name": "Rajgir",
        "stateId": 5
      },
      {
        "id": 571,
        "name": "Ramnagar",
        "stateId": 5
      },
      {
        "id": 572,
        "name": "Raxaul",
        "stateId": 5
      },
      {
        "id": 573,
        "name": "Revelganj",
        "stateId": 5
      },
      {
        "id": 574,
        "name": "Rusera",
        "stateId": 5
      },
      {
        "id": 575,
        "name": "Sagauli",
        "stateId": 5
      },
      {
        "id": 576,
        "name": "Saharsa",
        "stateId": 5
      },
      {
        "id": 577,
        "name": "Samastipur",
        "stateId": 5
      },
      {
        "id": 578,
        "name": "Sasaram",
        "stateId": 5
      },
      {
        "id": 579,
        "name": "Shahpur",
        "stateId": 5
      },
      {
        "id": 580,
        "name": "Shaikhpura",
        "stateId": 5
      },
      {
        "id": 581,
        "name": "Sherghati",
        "stateId": 5
      },
      {
        "id": 582,
        "name": "Shivhar",
        "stateId": 5
      },
      {
        "id": 583,
        "name": "Silao",
        "stateId": 5
      },
      {
        "id": 584,
        "name": "Sitamarhi",
        "stateId": 5
      },
      {
        "id": 585,
        "name": "Siwan",
        "stateId": 5
      },
      {
        "id": 586,
        "name": "Sonepur",
        "stateId": 5
      },
      {
        "id": 587,
        "name": "Sultanganj",
        "stateId": 5
      },
      {
        "id": 588,
        "name": "Supaul",
        "stateId": 5
      },
      {
        "id": 589,
        "name": "Teghra",
        "stateId": 5
      },
      {
        "id": 590,
        "name": "Tekari",
        "stateId": 5
      },
      {
        "id": 591,
        "name": "Thakurganj",
        "stateId": 5
      },
      {
        "id": 592,
        "name": "Vaishali",
        "stateId": 5
      },
      {
        "id": 593,
        "name": "Waris Aliganj",
        "stateId": 5
      },
      {
        "id": 594,
        "name": "Chandigarh",
        "stateId": 6
      },
      {
        "id": 595,
        "name": "Ahiwara",
        "stateId": 7
      },
      {
        "id": 596,
        "name": "Akaltara",
        "stateId": 7
      },
      {
        "id": 597,
        "name": "Ambagarh Chauki",
        "stateId": 7
      },
      {
        "id": 598,
        "name": "Ambikapur",
        "stateId": 7
      },
      {
        "id": 599,
        "name": "Arang",
        "stateId": 7
      },
      {
        "id": 600,
        "name": "Bade Bacheli",
        "stateId": 7
      },
      {
        "id": 601,
        "name": "Bagbahara",
        "stateId": 7
      },
      {
        "id": 602,
        "name": "Baikunthpur",
        "stateId": 7
      },
      {
        "id": 603,
        "name": "Balod",
        "stateId": 7
      },
      {
        "id": 604,
        "name": "Baloda",
        "stateId": 7
      },
      {
        "id": 605,
        "name": "Baloda Bazar",
        "stateId": 7
      },
      {
        "id": 606,
        "name": "Banarsi",
        "stateId": 7
      },
      {
        "id": 607,
        "name": "Basna",
        "stateId": 7
      },
      {
        "id": 608,
        "name": "Bemetra",
        "stateId": 7
      },
      {
        "id": 609,
        "name": "Bhanpuri",
        "stateId": 7
      },
      {
        "id": 610,
        "name": "Bhatapara",
        "stateId": 7
      },
      {
        "id": 611,
        "name": "Bhatgaon",
        "stateId": 7
      },
      {
        "id": 612,
        "name": "Bhilai",
        "stateId": 7
      },
      {
        "id": 613,
        "name": "Bilaspur",
        "stateId": 7
      },
      {
        "id": 614,
        "name": "Bilha",
        "stateId": 7
      },
      {
        "id": 615,
        "name": "Birgaon",
        "stateId": 7
      },
      {
        "id": 616,
        "name": "Bodri",
        "stateId": 7
      },
      {
        "id": 617,
        "name": "Champa",
        "stateId": 7
      },
      {
        "id": 618,
        "name": "Charcha",
        "stateId": 7
      },
      {
        "id": 619,
        "name": "Charoda",
        "stateId": 7
      },
      {
        "id": 620,
        "name": "Chhuikhadan",
        "stateId": 7
      },
      {
        "id": 621,
        "name": "Chirmiri",
        "stateId": 7
      },
      {
        "id": 622,
        "name": "Dantewada",
        "stateId": 7
      },
      {
        "id": 623,
        "name": "Deori",
        "stateId": 7
      },
      {
        "id": 624,
        "name": "Dhamdha",
        "stateId": 7
      },
      {
        "id": 625,
        "name": "Dhamtari",
        "stateId": 7
      },
      {
        "id": 626,
        "name": "Dharamjaigarh",
        "stateId": 7
      },
      {
        "id": 627,
        "name": "Dipka",
        "stateId": 7
      },
      {
        "id": 628,
        "name": "Doman Hill Colliery",
        "stateId": 7
      },
      {
        "id": 629,
        "name": "Dongargaon",
        "stateId": 7
      },
      {
        "id": 630,
        "name": "Dongragarh",
        "stateId": 7
      },
      {
        "id": 631,
        "name": "Durg",
        "stateId": 7
      },
      {
        "id": 632,
        "name": "Frezarpur",
        "stateId": 7
      },
      {
        "id": 633,
        "name": "Gandai",
        "stateId": 7
      },
      {
        "id": 634,
        "name": "Gariaband",
        "stateId": 7
      },
      {
        "id": 635,
        "name": "Gaurela",
        "stateId": 7
      },
      {
        "id": 636,
        "name": "Gelhapani",
        "stateId": 7
      },
      {
        "id": 637,
        "name": "Gharghoda",
        "stateId": 7
      },
      {
        "id": 638,
        "name": "Gidam",
        "stateId": 7
      },
      {
        "id": 639,
        "name": "Gobra Nawapara",
        "stateId": 7
      },
      {
        "id": 640,
        "name": "Gogaon",
        "stateId": 7
      },
      {
        "id": 641,
        "name": "Hatkachora",
        "stateId": 7
      },
      {
        "id": 642,
        "name": "Jagdalpur",
        "stateId": 7
      },
      {
        "id": 643,
        "name": "Jamui",
        "stateId": 7
      },
      {
        "id": 644,
        "name": "Jashpurnagar",
        "stateId": 7
      },
      {
        "id": 645,
        "name": "Jhagrakhand",
        "stateId": 7
      },
      {
        "id": 646,
        "name": "Kanker",
        "stateId": 7
      },
      {
        "id": 647,
        "name": "Katghora",
        "stateId": 7
      },
      {
        "id": 648,
        "name": "Kawardha",
        "stateId": 7
      },
      {
        "id": 649,
        "name": "Khairagarh",
        "stateId": 7
      },
      {
        "id": 650,
        "name": "Khamhria",
        "stateId": 7
      },
      {
        "id": 651,
        "name": "Kharod",
        "stateId": 7
      },
      {
        "id": 652,
        "name": "Kharsia",
        "stateId": 7
      },
      {
        "id": 653,
        "name": "Khonga Pani",
        "stateId": 7
      },
      {
        "id": 654,
        "name": "Kirandu",
        "stateId": 7
      },
      {
        "id": 655,
        "name": "Kirandul",
        "stateId": 7
      },
      {
        "id": 656,
        "name": "Kohka",
        "stateId": 7
      },
      {
        "id": 657,
        "name": "Kondagaon",
        "stateId": 7
      },
      {
        "id": 658,
        "name": "Korba",
        "stateId": 7
      },
      {
        "id": 659,
        "name": "Korea",
        "stateId": 7
      },
      {
        "id": 660,
        "name": "Koria Block",
        "stateId": 7
      },
      {
        "id": 661,
        "name": "Kota",
        "stateId": 7
      },
      {
        "id": 662,
        "name": "Kumhari",
        "stateId": 7
      },
      {
        "id": 663,
        "name": "Kumud Katta",
        "stateId": 7
      },
      {
        "id": 664,
        "name": "Kurasia",
        "stateId": 7
      },
      {
        "id": 665,
        "name": "Kurud",
        "stateId": 7
      },
      {
        "id": 666,
        "name": "Lingiyadih",
        "stateId": 7
      },
      {
        "id": 667,
        "name": "Lormi",
        "stateId": 7
      },
      {
        "id": 668,
        "name": "Mahasamund",
        "stateId": 7
      },
      {
        "id": 669,
        "name": "Mahendragarh",
        "stateId": 7
      },
      {
        "id": 670,
        "name": "Mehmand",
        "stateId": 7
      },
      {
        "id": 671,
        "name": "Mongra",
        "stateId": 7
      },
      {
        "id": 672,
        "name": "Mowa",
        "stateId": 7
      },
      {
        "id": 673,
        "name": "Mungeli",
        "stateId": 7
      },
      {
        "id": 674,
        "name": "Nailajanjgir",
        "stateId": 7
      },
      {
        "id": 675,
        "name": "Namna Kalan",
        "stateId": 7
      },
      {
        "id": 676,
        "name": "Naya Baradwar",
        "stateId": 7
      },
      {
        "id": 677,
        "name": "Pandariya",
        "stateId": 7
      },
      {
        "id": 678,
        "name": "Patan",
        "stateId": 7
      },
      {
        "id": 679,
        "name": "Pathalgaon",
        "stateId": 7
      },
      {
        "id": 680,
        "name": "Pendra",
        "stateId": 7
      },
      {
        "id": 681,
        "name": "Phunderdihari",
        "stateId": 7
      },
      {
        "id": 682,
        "name": "Pithora",
        "stateId": 7
      },
      {
        "id": 683,
        "name": "Raigarh",
        "stateId": 7
      },
      {
        "id": 684,
        "name": "Raipur",
        "stateId": 7
      },
      {
        "id": 685,
        "name": "Rajgamar",
        "stateId": 7
      },
      {
        "id": 686,
        "name": "Rajhara",
        "stateId": 7
      },
      {
        "id": 687,
        "name": "Rajnandgaon",
        "stateId": 7
      },
      {
        "id": 688,
        "name": "Ramanuj Ganj",
        "stateId": 7
      },
      {
        "id": 689,
        "name": "Ratanpur",
        "stateId": 7
      },
      {
        "id": 690,
        "name": "Sakti",
        "stateId": 7
      },
      {
        "id": 691,
        "name": "Saraipali",
        "stateId": 7
      },
      {
        "id": 692,
        "name": "Sarajpur",
        "stateId": 7
      },
      {
        "id": 693,
        "name": "Sarangarh",
        "stateId": 7
      },
      {
        "id": 694,
        "name": "Shivrinarayan",
        "stateId": 7
      },
      {
        "id": 695,
        "name": "Simga",
        "stateId": 7
      },
      {
        "id": 696,
        "name": "Sirgiti",
        "stateId": 7
      },
      {
        "id": 697,
        "name": "Takhatpur",
        "stateId": 7
      },
      {
        "id": 698,
        "name": "Telgaon",
        "stateId": 7
      },
      {
        "id": 699,
        "name": "Tildanewra",
        "stateId": 7
      },
      {
        "id": 700,
        "name": "Urla",
        "stateId": 7
      },
      {
        "id": 701,
        "name": "Vishrampur",
        "stateId": 7
      },
      {
        "id": 702,
        "name": "Amli",
        "stateId": 8
      },
      {
        "id": 703,
        "name": "Silvassa",
        "stateId": 8
      },
      {
        "id": 704,
        "name": "Daman",
        "stateId": 9
      },
      {
        "id": 705,
        "name": "Diu",
        "stateId": 9
      },
      {
        "id": 706,
        "name": "Delhi",
        "stateId": 10
      },
      {
        "id": 707,
        "name": "New Delhi",
        "stateId": 10
      },
      {
        "id": 708,
        "name": "Aldona",
        "stateId": 11
      },
      {
        "id": 709,
        "name": "Altinho",
        "stateId": 11
      },
      {
        "id": 710,
        "name": "Aquem",
        "stateId": 11
      },
      {
        "id": 711,
        "name": "Arpora",
        "stateId": 11
      },
      {
        "id": 712,
        "name": "Bambolim",
        "stateId": 11
      },
      {
        "id": 713,
        "name": "Bandora",
        "stateId": 11
      },
      {
        "id": 714,
        "name": "Bardez",
        "stateId": 11
      },
      {
        "id": 715,
        "name": "Benaulim",
        "stateId": 11
      },
      {
        "id": 716,
        "name": "Betora",
        "stateId": 11
      },
      {
        "id": 717,
        "name": "Bicholim",
        "stateId": 11
      },
      {
        "id": 718,
        "name": "Calapor",
        "stateId": 11
      },
      {
        "id": 719,
        "name": "Candolim",
        "stateId": 11
      },
      {
        "id": 720,
        "name": "Caranzalem",
        "stateId": 11
      },
      {
        "id": 721,
        "name": "Carapur",
        "stateId": 11
      },
      {
        "id": 722,
        "name": "Chicalim",
        "stateId": 11
      },
      {
        "id": 723,
        "name": "Chimbel",
        "stateId": 11
      },
      {
        "id": 724,
        "name": "Chinchinim",
        "stateId": 11
      },
      {
        "id": 725,
        "name": "Colvale",
        "stateId": 11
      },
      {
        "id": 726,
        "name": "Corlim",
        "stateId": 11
      },
      {
        "id": 727,
        "name": "Cortalim",
        "stateId": 11
      },
      {
        "id": 728,
        "name": "Cuncolim",
        "stateId": 11
      },
      {
        "id": 729,
        "name": "Curchorem",
        "stateId": 11
      },
      {
        "id": 730,
        "name": "Curti",
        "stateId": 11
      },
      {
        "id": 731,
        "name": "Davorlim",
        "stateId": 11
      },
      {
        "id": 732,
        "name": "Dona Paula",
        "stateId": 11
      },
      {
        "id": 733,
        "name": "Goa",
        "stateId": 11
      },
      {
        "id": 734,
        "name": "Guirim",
        "stateId": 11
      },
      {
        "id": 735,
        "name": "Jua",
        "stateId": 11
      },
      {
        "id": 736,
        "name": "Kalangat",
        "stateId": 11
      },
      {
        "id": 737,
        "name": "Kankon",
        "stateId": 11
      },
      {
        "id": 738,
        "name": "Kundaim",
        "stateId": 11
      },
      {
        "id": 739,
        "name": "Loutulim",
        "stateId": 11
      },
      {
        "id": 740,
        "name": "Madgaon",
        "stateId": 11
      },
      {
        "id": 741,
        "name": "Mapusa",
        "stateId": 11
      },
      {
        "id": 742,
        "name": "Margao",
        "stateId": 11
      },
      {
        "id": 743,
        "name": "Margaon",
        "stateId": 11
      },
      {
        "id": 744,
        "name": "Miramar",
        "stateId": 11
      },
      {
        "id": 745,
        "name": "Morjim",
        "stateId": 11
      },
      {
        "id": 746,
        "name": "Mormugao",
        "stateId": 11
      },
      {
        "id": 747,
        "name": "Navelim",
        "stateId": 11
      },
      {
        "id": 748,
        "name": "Pale",
        "stateId": 11
      },
      {
        "id": 749,
        "name": "Panaji",
        "stateId": 11
      },
      {
        "id": 750,
        "name": "Parcem",
        "stateId": 11
      },
      {
        "id": 751,
        "name": "Parra",
        "stateId": 11
      },
      {
        "id": 752,
        "name": "Penha de Franca",
        "stateId": 11
      },
      {
        "id": 753,
        "name": "Pernem",
        "stateId": 11
      },
      {
        "id": 754,
        "name": "Pilerne",
        "stateId": 11
      },
      {
        "id": 755,
        "name": "Pissurlem",
        "stateId": 11
      },
      {
        "id": 756,
        "name": "Ponda",
        "stateId": 11
      },
      {
        "id": 757,
        "name": "Porvorim",
        "stateId": 11
      },
      {
        "id": 758,
        "name": "Quepem",
        "stateId": 11
      },
      {
        "id": 759,
        "name": "Queula",
        "stateId": 11
      },
      {
        "id": 760,
        "name": "Raia",
        "stateId": 11
      },
      {
        "id": 761,
        "name": "Reis Magos",
        "stateId": 11
      },
      {
        "id": 762,
        "name": "Salcette",
        "stateId": 11
      },
      {
        "id": 763,
        "name": "Saligao",
        "stateId": 11
      },
      {
        "id": 764,
        "name": "Sancoale",
        "stateId": 11
      },
      {
        "id": 765,
        "name": "Sanguem",
        "stateId": 11
      },
      {
        "id": 766,
        "name": "Sanquelim",
        "stateId": 11
      },
      {
        "id": 767,
        "name": "Sanvordem",
        "stateId": 11
      },
      {
        "id": 768,
        "name": "Sao Jose-de-Areal",
        "stateId": 11
      },
      {
        "id": 769,
        "name": "Sattari",
        "stateId": 11
      },
      {
        "id": 770,
        "name": "Serula",
        "stateId": 11
      },
      {
        "id": 771,
        "name": "Sinquerim",
        "stateId": 11
      },
      {
        "id": 772,
        "name": "Siolim",
        "stateId": 11
      },
      {
        "id": 773,
        "name": "Taleigao",
        "stateId": 11
      },
      {
        "id": 774,
        "name": "Tivim",
        "stateId": 11
      },
      {
        "id": 775,
        "name": "Valpoi",
        "stateId": 11
      },
      {
        "id": 776,
        "name": "Varca",
        "stateId": 11
      },
      {
        "id": 777,
        "name": "Vasco",
        "stateId": 11
      },
      {
        "id": 778,
        "name": "Verna",
        "stateId": 11
      },
      {
        "id": 779,
        "name": "Abrama",
        "stateId": 12
      },
      {
        "id": 780,
        "name": "Adalaj",
        "stateId": 12
      },
      {
        "id": 781,
        "name": "Adityana",
        "stateId": 12
      },
      {
        "id": 782,
        "name": "Advana",
        "stateId": 12
      },
      {
        "id": 783,
        "name": "Ahmedabad",
        "stateId": 12
      },
      {
        "id": 784,
        "name": "Ahwa",
        "stateId": 12
      },
      {
        "id": 785,
        "name": "Alang",
        "stateId": 12
      },
      {
        "id": 786,
        "name": "Ambaji",
        "stateId": 12
      },
      {
        "id": 787,
        "name": "Ambaliyasan",
        "stateId": 12
      },
      {
        "id": 788,
        "name": "Amod",
        "stateId": 12
      },
      {
        "id": 789,
        "name": "Amreli",
        "stateId": 12
      },
      {
        "id": 790,
        "name": "Amroli",
        "stateId": 12
      },
      {
        "id": 791,
        "name": "Anand",
        "stateId": 12
      },
      {
        "id": 792,
        "name": "Andada",
        "stateId": 12
      },
      {
        "id": 793,
        "name": "Anjar",
        "stateId": 12
      },
      {
        "id": 794,
        "name": "Anklav",
        "stateId": 12
      },
      {
        "id": 795,
        "name": "Ankleshwar",
        "stateId": 12
      },
      {
        "id": 796,
        "name": "Anklesvar INA",
        "stateId": 12
      },
      {
        "id": 797,
        "name": "Antaliya",
        "stateId": 12
      },
      {
        "id": 798,
        "name": "Arambhada",
        "stateId": 12
      },
      {
        "id": 799,
        "name": "Asarma",
        "stateId": 12
      },
      {
        "id": 800,
        "name": "Atul",
        "stateId": 12
      },
      {
        "id": 801,
        "name": "Babra",
        "stateId": 12
      },
      {
        "id": 802,
        "name": "Bag-e-Firdosh",
        "stateId": 12
      },
      {
        "id": 803,
        "name": "Bagasara",
        "stateId": 12
      },
      {
        "id": 804,
        "name": "Bahadarpar",
        "stateId": 12
      },
      {
        "id": 805,
        "name": "Bajipura",
        "stateId": 12
      },
      {
        "id": 806,
        "name": "Bajva",
        "stateId": 12
      },
      {
        "id": 807,
        "name": "Balasinor",
        "stateId": 12
      },
      {
        "id": 808,
        "name": "Banaskantha",
        "stateId": 12
      },
      {
        "id": 809,
        "name": "Bansda",
        "stateId": 12
      },
      {
        "id": 810,
        "name": "Bantva",
        "stateId": 12
      },
      {
        "id": 811,
        "name": "Bardoli",
        "stateId": 12
      },
      {
        "id": 812,
        "name": "Barwala",
        "stateId": 12
      },
      {
        "id": 813,
        "name": "Bayad",
        "stateId": 12
      },
      {
        "id": 814,
        "name": "Bechar",
        "stateId": 12
      },
      {
        "id": 815,
        "name": "Bedi",
        "stateId": 12
      },
      {
        "id": 816,
        "name": "Beyt",
        "stateId": 12
      },
      {
        "id": 817,
        "name": "Bhachau",
        "stateId": 12
      },
      {
        "id": 818,
        "name": "Bhanvad",
        "stateId": 12
      },
      {
        "id": 819,
        "name": "Bharuch",
        "stateId": 12
      },
      {
        "id": 820,
        "name": "Bharuch INA",
        "stateId": 12
      },
      {
        "id": 821,
        "name": "Bhavnagar",
        "stateId": 12
      },
      {
        "id": 822,
        "name": "Bhayavadar",
        "stateId": 12
      },
      {
        "id": 823,
        "name": "Bhestan",
        "stateId": 12
      },
      {
        "id": 824,
        "name": "Bhuj",
        "stateId": 12
      },
      {
        "id": 825,
        "name": "Bilimora",
        "stateId": 12
      },
      {
        "id": 826,
        "name": "Bilkha",
        "stateId": 12
      },
      {
        "id": 827,
        "name": "Billimora",
        "stateId": 12
      },
      {
        "id": 828,
        "name": "Bodakdev",
        "stateId": 12
      },
      {
        "id": 829,
        "name": "Bodeli",
        "stateId": 12
      },
      {
        "id": 830,
        "name": "Bopal",
        "stateId": 12
      },
      {
        "id": 831,
        "name": "Boria",
        "stateId": 12
      },
      {
        "id": 832,
        "name": "Boriavi",
        "stateId": 12
      },
      {
        "id": 833,
        "name": "Borsad",
        "stateId": 12
      },
      {
        "id": 834,
        "name": "Botad",
        "stateId": 12
      },
      {
        "id": 835,
        "name": "Cambay",
        "stateId": 12
      },
      {
        "id": 836,
        "name": "Chaklasi",
        "stateId": 12
      },
      {
        "id": 837,
        "name": "Chala",
        "stateId": 12
      },
      {
        "id": 838,
        "name": "Chalala",
        "stateId": 12
      },
      {
        "id": 839,
        "name": "Chalthan",
        "stateId": 12
      },
      {
        "id": 840,
        "name": "Chanasma",
        "stateId": 12
      },
      {
        "id": 841,
        "name": "Chandisar",
        "stateId": 12
      },
      {
        "id": 842,
        "name": "Chandkheda",
        "stateId": 12
      },
      {
        "id": 843,
        "name": "Chanod",
        "stateId": 12
      },
      {
        "id": 844,
        "name": "Chaya",
        "stateId": 12
      },
      {
        "id": 845,
        "name": "Chenpur",
        "stateId": 12
      },
      {
        "id": 846,
        "name": "Chhapi",
        "stateId": 12
      },
      {
        "id": 847,
        "name": "Chhaprabhatha",
        "stateId": 12
      },
      {
        "id": 848,
        "name": "Chhatral",
        "stateId": 12
      },
      {
        "id": 849,
        "name": "Chhota Udepur",
        "stateId": 12
      },
      {
        "id": 850,
        "name": "Chikhli",
        "stateId": 12
      },
      {
        "id": 851,
        "name": "Chiloda",
        "stateId": 12
      },
      {
        "id": 852,
        "name": "Chorvad",
        "stateId": 12
      },
      {
        "id": 853,
        "name": "Chotila",
        "stateId": 12
      },
      {
        "id": 854,
        "name": "Dabhoi",
        "stateId": 12
      },
      {
        "id": 855,
        "name": "Dadara",
        "stateId": 12
      },
      {
        "id": 856,
        "name": "Dahod",
        "stateId": 12
      },
      {
        "id": 857,
        "name": "Dakor",
        "stateId": 12
      },
      {
        "id": 858,
        "name": "Damnagar",
        "stateId": 12
      },
      {
        "id": 859,
        "name": "Deesa",
        "stateId": 12
      },
      {
        "id": 860,
        "name": "Delvada",
        "stateId": 12
      },
      {
        "id": 861,
        "name": "Devgadh Baria",
        "stateId": 12
      },
      {
        "id": 862,
        "name": "Devsar",
        "stateId": 12
      },
      {
        "id": 863,
        "name": "Dhandhuka",
        "stateId": 12
      },
      {
        "id": 864,
        "name": "Dhanera",
        "stateId": 12
      },
      {
        "id": 865,
        "name": "Dhangdhra",
        "stateId": 12
      },
      {
        "id": 866,
        "name": "Dhansura",
        "stateId": 12
      },
      {
        "id": 867,
        "name": "Dharampur",
        "stateId": 12
      },
      {
        "id": 868,
        "name": "Dhari",
        "stateId": 12
      },
      {
        "id": 869,
        "name": "Dhola",
        "stateId": 12
      },
      {
        "id": 870,
        "name": "Dholka",
        "stateId": 12
      },
      {
        "id": 871,
        "name": "Dholka Rural",
        "stateId": 12
      },
      {
        "id": 872,
        "name": "Dhoraji",
        "stateId": 12
      },
      {
        "id": 873,
        "name": "Dhrangadhra",
        "stateId": 12
      },
      {
        "id": 874,
        "name": "Dhrol",
        "stateId": 12
      },
      {
        "id": 875,
        "name": "Dhuva",
        "stateId": 12
      },
      {
        "id": 876,
        "name": "Dhuwaran",
        "stateId": 12
      },
      {
        "id": 877,
        "name": "Digvijaygram",
        "stateId": 12
      },
      {
        "id": 878,
        "name": "Disa",
        "stateId": 12
      },
      {
        "id": 879,
        "name": "Dungar",
        "stateId": 12
      },
      {
        "id": 880,
        "name": "Dungarpur",
        "stateId": 12
      },
      {
        "id": 881,
        "name": "Dungra",
        "stateId": 12
      },
      {
        "id": 882,
        "name": "Dwarka",
        "stateId": 12
      },
      {
        "id": 883,
        "name": "Flelanganj",
        "stateId": 12
      },
      {
        "id": 884,
        "name": "GSFC Complex",
        "stateId": 12
      },
      {
        "id": 885,
        "name": "Gadhda",
        "stateId": 12
      },
      {
        "id": 886,
        "name": "Gandevi",
        "stateId": 12
      },
      {
        "id": 887,
        "name": "Gandhidham",
        "stateId": 12
      },
      {
        "id": 888,
        "name": "Gandhinagar",
        "stateId": 12
      },
      {
        "id": 889,
        "name": "Gariadhar",
        "stateId": 12
      },
      {
        "id": 890,
        "name": "Ghogha",
        "stateId": 12
      },
      {
        "id": 891,
        "name": "Godhra",
        "stateId": 12
      },
      {
        "id": 892,
        "name": "Gondal",
        "stateId": 12
      },
      {
        "id": 893,
        "name": "Hajira INA",
        "stateId": 12
      },
      {
        "id": 894,
        "name": "Halol",
        "stateId": 12
      },
      {
        "id": 895,
        "name": "Halvad",
        "stateId": 12
      },
      {
        "id": 896,
        "name": "Hansot",
        "stateId": 12
      },
      {
        "id": 897,
        "name": "Harij",
        "stateId": 12
      },
      {
        "id": 898,
        "name": "Himatnagar",
        "stateId": 12
      },
      {
        "id": 899,
        "name": "Ichchhapor",
        "stateId": 12
      },
      {
        "id": 900,
        "name": "Idar",
        "stateId": 12
      },
      {
        "id": 901,
        "name": "Jafrabad",
        "stateId": 12
      },
      {
        "id": 902,
        "name": "Jalalpore",
        "stateId": 12
      },
      {
        "id": 903,
        "name": "Jambusar",
        "stateId": 12
      },
      {
        "id": 904,
        "name": "Jamjodhpur",
        "stateId": 12
      },
      {
        "id": 905,
        "name": "Jamnagar",
        "stateId": 12
      },
      {
        "id": 906,
        "name": "Jasdan",
        "stateId": 12
      },
      {
        "id": 907,
        "name": "Jawaharnagar",
        "stateId": 12
      },
      {
        "id": 908,
        "name": "Jetalsar",
        "stateId": 12
      },
      {
        "id": 909,
        "name": "Jetpur",
        "stateId": 12
      },
      {
        "id": 910,
        "name": "Jodiya",
        "stateId": 12
      },
      {
        "id": 911,
        "name": "Joshipura",
        "stateId": 12
      },
      {
        "id": 912,
        "name": "Junagadh",
        "stateId": 12
      },
      {
        "id": 913,
        "name": "Kadi",
        "stateId": 12
      },
      {
        "id": 914,
        "name": "Kadodara",
        "stateId": 12
      },
      {
        "id": 915,
        "name": "Kalavad",
        "stateId": 12
      },
      {
        "id": 916,
        "name": "Kali",
        "stateId": 12
      },
      {
        "id": 917,
        "name": "Kaliawadi",
        "stateId": 12
      },
      {
        "id": 918,
        "name": "Kalol",
        "stateId": 12
      },
      {
        "id": 919,
        "name": "Kalol INA",
        "stateId": 12
      },
      {
        "id": 920,
        "name": "Kandla",
        "stateId": 12
      },
      {
        "id": 921,
        "name": "Kanjari",
        "stateId": 12
      },
      {
        "id": 922,
        "name": "Kanodar",
        "stateId": 12
      },
      {
        "id": 923,
        "name": "Kapadwanj",
        "stateId": 12
      },
      {
        "id": 924,
        "name": "Karachiya",
        "stateId": 12
      },
      {
        "id": 925,
        "name": "Karamsad",
        "stateId": 12
      },
      {
        "id": 926,
        "name": "Karjan",
        "stateId": 12
      },
      {
        "id": 927,
        "name": "Kathial",
        "stateId": 12
      },
      {
        "id": 928,
        "name": "Kathor",
        "stateId": 12
      },
      {
        "id": 929,
        "name": "Katpar",
        "stateId": 12
      },
      {
        "id": 930,
        "name": "Kavant",
        "stateId": 12
      },
      {
        "id": 931,
        "name": "Keshod",
        "stateId": 12
      },
      {
        "id": 932,
        "name": "Kevadiya",
        "stateId": 12
      },
      {
        "id": 933,
        "name": "Khambhaliya",
        "stateId": 12
      },
      {
        "id": 934,
        "name": "Khambhat",
        "stateId": 12
      },
      {
        "id": 935,
        "name": "Kharaghoda",
        "stateId": 12
      },
      {
        "id": 936,
        "name": "Khed Brahma",
        "stateId": 12
      },
      {
        "id": 937,
        "name": "Kheda",
        "stateId": 12
      },
      {
        "id": 938,
        "name": "Kheralu",
        "stateId": 12
      },
      {
        "id": 939,
        "name": "Kodinar",
        "stateId": 12
      },
      {
        "id": 940,
        "name": "Kosamba",
        "stateId": 12
      },
      {
        "id": 941,
        "name": "Kundla",
        "stateId": 12
      },
      {
        "id": 942,
        "name": "Kutch",
        "stateId": 12
      },
      {
        "id": 943,
        "name": "Kutiyana",
        "stateId": 12
      },
      {
        "id": 944,
        "name": "Lakhtar",
        "stateId": 12
      },
      {
        "id": 945,
        "name": "Lalpur",
        "stateId": 12
      },
      {
        "id": 946,
        "name": "Lambha",
        "stateId": 12
      },
      {
        "id": 947,
        "name": "Lathi",
        "stateId": 12
      },
      {
        "id": 948,
        "name": "Limbdi",
        "stateId": 12
      },
      {
        "id": 949,
        "name": "Limla",
        "stateId": 12
      },
      {
        "id": 950,
        "name": "Lunavada",
        "stateId": 12
      },
      {
        "id": 951,
        "name": "Madhapar",
        "stateId": 12
      },
      {
        "id": 952,
        "name": "Maflipur",
        "stateId": 12
      },
      {
        "id": 953,
        "name": "Mahemdavad",
        "stateId": 12
      },
      {
        "id": 954,
        "name": "Mahudha",
        "stateId": 12
      },
      {
        "id": 955,
        "name": "Mahuva",
        "stateId": 12
      },
      {
        "id": 956,
        "name": "Mahuvar",
        "stateId": 12
      },
      {
        "id": 957,
        "name": "Makarba",
        "stateId": 12
      },
      {
        "id": 958,
        "name": "Makarpura",
        "stateId": 12
      },
      {
        "id": 959,
        "name": "Makassar",
        "stateId": 12
      },
      {
        "id": 960,
        "name": "Maktampur",
        "stateId": 12
      },
      {
        "id": 961,
        "name": "Malia",
        "stateId": 12
      },
      {
        "id": 962,
        "name": "Malpur",
        "stateId": 12
      },
      {
        "id": 963,
        "name": "Manavadar",
        "stateId": 12
      },
      {
        "id": 964,
        "name": "Mandal",
        "stateId": 12
      },
      {
        "id": 965,
        "name": "Mandvi",
        "stateId": 12
      },
      {
        "id": 966,
        "name": "Mangrol",
        "stateId": 12
      },
      {
        "id": 967,
        "name": "Mansa",
        "stateId": 12
      },
      {
        "id": 968,
        "name": "Meghraj",
        "stateId": 12
      },
      {
        "id": 969,
        "name": "Mehsana",
        "stateId": 12
      },
      {
        "id": 970,
        "name": "Mendarla",
        "stateId": 12
      },
      {
        "id": 971,
        "name": "Mithapur",
        "stateId": 12
      },
      {
        "id": 972,
        "name": "Modasa",
        "stateId": 12
      },
      {
        "id": 973,
        "name": "Mogravadi",
        "stateId": 12
      },
      {
        "id": 974,
        "name": "Morbi",
        "stateId": 12
      },
      {
        "id": 975,
        "name": "Morvi",
        "stateId": 12
      },
      {
        "id": 976,
        "name": "Mundra",
        "stateId": 12
      },
      {
        "id": 977,
        "name": "Nadiad",
        "stateId": 12
      },
      {
        "id": 978,
        "name": "Naliya",
        "stateId": 12
      },
      {
        "id": 979,
        "name": "Nanakvada",
        "stateId": 12
      },
      {
        "id": 980,
        "name": "Nandej",
        "stateId": 12
      },
      {
        "id": 981,
        "name": "Nandesari",
        "stateId": 12
      },
      {
        "id": 982,
        "name": "Nandesari INA",
        "stateId": 12
      },
      {
        "id": 983,
        "name": "Naroda",
        "stateId": 12
      },
      {
        "id": 984,
        "name": "Navagadh",
        "stateId": 12
      },
      {
        "id": 985,
        "name": "Navagam Ghed",
        "stateId": 12
      },
      {
        "id": 986,
        "name": "Navsari",
        "stateId": 12
      },
      {
        "id": 987,
        "name": "Ode",
        "stateId": 12
      },
      {
        "id": 988,
        "name": "Okaf",
        "stateId": 12
      },
      {
        "id": 989,
        "name": "Okha",
        "stateId": 12
      },
      {
        "id": 990,
        "name": "Olpad",
        "stateId": 12
      },
      {
        "id": 991,
        "name": "Paddhari",
        "stateId": 12
      },
      {
        "id": 992,
        "name": "Padra",
        "stateId": 12
      },
      {
        "id": 993,
        "name": "Palanpur",
        "stateId": 12
      },
      {
        "id": 994,
        "name": "Palej",
        "stateId": 12
      },
      {
        "id": 995,
        "name": "Pali",
        "stateId": 12
      },
      {
        "id": 996,
        "name": "Palitana",
        "stateId": 12
      },
      {
        "id": 997,
        "name": "Paliyad",
        "stateId": 12
      },
      {
        "id": 998,
        "name": "Pandesara",
        "stateId": 12
      },
      {
        "id": 999,
        "name": "Panoli",
        "stateId": 12
      },
      {
        "id": 1000,
        "name": "Pardi",
        "stateId": 12
      },
      {
        "id": 1001,
        "name": "Parnera",
        "stateId": 12
      },
      {
        "id": 1002,
        "name": "Parvat",
        "stateId": 12
      },
      {
        "id": 1003,
        "name": "Patan",
        "stateId": 12
      },
      {
        "id": 1004,
        "name": "Patdi",
        "stateId": 12
      },
      {
        "id": 1005,
        "name": "Petlad",
        "stateId": 12
      },
      {
        "id": 1006,
        "name": "Petrochemical Complex",
        "stateId": 12
      },
      {
        "id": 1007,
        "name": "Porbandar",
        "stateId": 12
      },
      {
        "id": 1008,
        "name": "Prantij",
        "stateId": 12
      },
      {
        "id": 1009,
        "name": "Radhanpur",
        "stateId": 12
      },
      {
        "id": 1010,
        "name": "Raiya",
        "stateId": 12
      },
      {
        "id": 1011,
        "name": "Rajkot",
        "stateId": 12
      },
      {
        "id": 1012,
        "name": "Rajpipla",
        "stateId": 12
      },
      {
        "id": 1013,
        "name": "Rajula",
        "stateId": 12
      },
      {
        "id": 1014,
        "name": "Ramod",
        "stateId": 12
      },
      {
        "id": 1015,
        "name": "Ranavav",
        "stateId": 12
      },
      {
        "id": 1016,
        "name": "Ranoli",
        "stateId": 12
      },
      {
        "id": 1017,
        "name": "Rapar",
        "stateId": 12
      },
      {
        "id": 1018,
        "name": "Sahij",
        "stateId": 12
      },
      {
        "id": 1019,
        "name": "Salaya",
        "stateId": 12
      },
      {
        "id": 1020,
        "name": "Sanand",
        "stateId": 12
      },
      {
        "id": 1021,
        "name": "Sankheda",
        "stateId": 12
      },
      {
        "id": 1022,
        "name": "Santrampur",
        "stateId": 12
      },
      {
        "id": 1023,
        "name": "Saribujrang",
        "stateId": 12
      },
      {
        "id": 1024,
        "name": "Sarigam INA",
        "stateId": 12
      },
      {
        "id": 1025,
        "name": "Sayan",
        "stateId": 12
      },
      {
        "id": 1026,
        "name": "Sayla",
        "stateId": 12
      },
      {
        "id": 1027,
        "name": "Shahpur",
        "stateId": 12
      },
      {
        "id": 1028,
        "name": "Shahwadi",
        "stateId": 12
      },
      {
        "id": 1029,
        "name": "Shapar",
        "stateId": 12
      },
      {
        "id": 1030,
        "name": "Shivrajpur",
        "stateId": 12
      },
      {
        "id": 1031,
        "name": "Siddhapur",
        "stateId": 12
      },
      {
        "id": 1032,
        "name": "Sidhpur",
        "stateId": 12
      },
      {
        "id": 1033,
        "name": "Sihor",
        "stateId": 12
      },
      {
        "id": 1034,
        "name": "Sika",
        "stateId": 12
      },
      {
        "id": 1035,
        "name": "Singarva",
        "stateId": 12
      },
      {
        "id": 1036,
        "name": "Sinor",
        "stateId": 12
      },
      {
        "id": 1037,
        "name": "Sojitra",
        "stateId": 12
      },
      {
        "id": 1038,
        "name": "Sola",
        "stateId": 12
      },
      {
        "id": 1039,
        "name": "Songadh",
        "stateId": 12
      },
      {
        "id": 1040,
        "name": "Suraj Karadi",
        "stateId": 12
      },
      {
        "id": 1041,
        "name": "Surat",
        "stateId": 12
      },
      {
        "id": 1042,
        "name": "Surendranagar",
        "stateId": 12
      },
      {
        "id": 1043,
        "name": "Talaja",
        "stateId": 12
      },
      {
        "id": 1044,
        "name": "Talala",
        "stateId": 12
      },
      {
        "id": 1045,
        "name": "Talod",
        "stateId": 12
      },
      {
        "id": 1046,
        "name": "Tankara",
        "stateId": 12
      },
      {
        "id": 1047,
        "name": "Tarsali",
        "stateId": 12
      },
      {
        "id": 1048,
        "name": "Thangadh",
        "stateId": 12
      },
      {
        "id": 1049,
        "name": "Tharad",
        "stateId": 12
      },
      {
        "id": 1050,
        "name": "Thasra",
        "stateId": 12
      },
      {
        "id": 1051,
        "name": "Udyognagar",
        "stateId": 12
      },
      {
        "id": 1052,
        "name": "Ukai",
        "stateId": 12
      },
      {
        "id": 1053,
        "name": "Umbergaon",
        "stateId": 12
      },
      {
        "id": 1054,
        "name": "Umbergaon INA",
        "stateId": 12
      },
      {
        "id": 1055,
        "name": "Umrala",
        "stateId": 12
      },
      {
        "id": 1056,
        "name": "Umreth",
        "stateId": 12
      },
      {
        "id": 1057,
        "name": "Un",
        "stateId": 12
      },
      {
        "id": 1058,
        "name": "Una",
        "stateId": 12
      },
      {
        "id": 1059,
        "name": "Unjha",
        "stateId": 12
      },
      {
        "id": 1060,
        "name": "Upleta",
        "stateId": 12
      },
      {
        "id": 1061,
        "name": "Utran",
        "stateId": 12
      },
      {
        "id": 1062,
        "name": "Uttarsanda",
        "stateId": 12
      },
      {
        "id": 1063,
        "name": "V.U. Nagar",
        "stateId": 12
      },
      {
        "id": 1064,
        "name": "V.V. Nagar",
        "stateId": 12
      },
      {
        "id": 1065,
        "name": "Vadia",
        "stateId": 12
      },
      {
        "id": 1066,
        "name": "Vadla",
        "stateId": 12
      },
      {
        "id": 1067,
        "name": "Vadnagar",
        "stateId": 12
      },
      {
        "id": 1068,
        "name": "Vadodara",
        "stateId": 12
      },
      {
        "id": 1069,
        "name": "Vaghodia INA",
        "stateId": 12
      },
      {
        "id": 1070,
        "name": "Valbhipur",
        "stateId": 12
      },
      {
        "id": 1071,
        "name": "Vallabh Vidyanagar",
        "stateId": 12
      },
      {
        "id": 1072,
        "name": "Valsad",
        "stateId": 12
      },
      {
        "id": 1073,
        "name": "Valsad INA",
        "stateId": 12
      },
      {
        "id": 1074,
        "name": "Vanthali",
        "stateId": 12
      },
      {
        "id": 1075,
        "name": "Vapi",
        "stateId": 12
      },
      {
        "id": 1076,
        "name": "Vapi INA",
        "stateId": 12
      },
      {
        "id": 1077,
        "name": "Vartej",
        "stateId": 12
      },
      {
        "id": 1078,
        "name": "Vasad",
        "stateId": 12
      },
      {
        "id": 1079,
        "name": "Vasna Borsad INA",
        "stateId": 12
      },
      {
        "id": 1080,
        "name": "Vaso",
        "stateId": 12
      },
      {
        "id": 1081,
        "name": "Veraval",
        "stateId": 12
      },
      {
        "id": 1082,
        "name": "Vidyanagar",
        "stateId": 12
      },
      {
        "id": 1083,
        "name": "Vijalpor",
        "stateId": 12
      },
      {
        "id": 1084,
        "name": "Vijapur",
        "stateId": 12
      },
      {
        "id": 1085,
        "name": "Vinchhiya",
        "stateId": 12
      },
      {
        "id": 1086,
        "name": "Vinzol",
        "stateId": 12
      },
      {
        "id": 1087,
        "name": "Virpur",
        "stateId": 12
      },
      {
        "id": 1088,
        "name": "Visavadar",
        "stateId": 12
      },
      {
        "id": 1089,
        "name": "Visnagar",
        "stateId": 12
      },
      {
        "id": 1090,
        "name": "Vyara",
        "stateId": 12
      },
      {
        "id": 1091,
        "name": "Wadhwan",
        "stateId": 12
      },
      {
        "id": 1092,
        "name": "Waghai",
        "stateId": 12
      },
      {
        "id": 1093,
        "name": "Waghodia",
        "stateId": 12
      },
      {
        "id": 1094,
        "name": "Wankaner",
        "stateId": 12
      },
      {
        "id": 1095,
        "name": "Zalod",
        "stateId": 12
      },
      {
        "id": 1096,
        "name": "Ambala",
        "stateId": 13
      },
      {
        "id": 1097,
        "name": "Ambala Cantt",
        "stateId": 13
      },
      {
        "id": 1098,
        "name": "Asan Khurd",
        "stateId": 13
      },
      {
        "id": 1099,
        "name": "Asandh",
        "stateId": 13
      },
      {
        "id": 1100,
        "name": "Ateli",
        "stateId": 13
      },
      {
        "id": 1101,
        "name": "Babiyal",
        "stateId": 13
      },
      {
        "id": 1102,
        "name": "Bahadurgarh",
        "stateId": 13
      },
      {
        "id": 1103,
        "name": "Ballabgarh",
        "stateId": 13
      },
      {
        "id": 1104,
        "name": "Barwala",
        "stateId": 13
      },
      {
        "id": 1105,
        "name": "Bawal",
        "stateId": 13
      },
      {
        "id": 1106,
        "name": "Bawani Khera",
        "stateId": 13
      },
      {
        "id": 1107,
        "name": "Beri",
        "stateId": 13
      },
      {
        "id": 1108,
        "name": "Bhiwani",
        "stateId": 13
      },
      {
        "id": 1109,
        "name": "Bilaspur",
        "stateId": 13
      },
      {
        "id": 1110,
        "name": "Buria",
        "stateId": 13
      },
      {
        "id": 1111,
        "name": "Charkhi Dadri",
        "stateId": 13
      },
      {
        "id": 1112,
        "name": "Chhachhrauli",
        "stateId": 13
      },
      {
        "id": 1113,
        "name": "Chita",
        "stateId": 13
      },
      {
        "id": 1114,
        "name": "Dabwali",
        "stateId": 13
      },
      {
        "id": 1115,
        "name": "Dharuhera",
        "stateId": 13
      },
      {
        "id": 1116,
        "name": "Dundahera",
        "stateId": 13
      },
      {
        "id": 1117,
        "name": "Ellenabad",
        "stateId": 13
      },
      {
        "id": 1118,
        "name": "Farakhpur",
        "stateId": 13
      },
      {
        "id": 1119,
        "name": "Faridabad",
        "stateId": 13
      },
      {
        "id": 1120,
        "name": "Farrukhnagar",
        "stateId": 13
      },
      {
        "id": 1121,
        "name": "Fatehabad",
        "stateId": 13
      },
      {
        "id": 1122,
        "name": "Firozpur Jhirka",
        "stateId": 13
      },
      {
        "id": 1123,
        "name": "Gannaur",
        "stateId": 13
      },
      {
        "id": 1124,
        "name": "Ghraunda",
        "stateId": 13
      },
      {
        "id": 1125,
        "name": "Gohana",
        "stateId": 13
      },
      {
        "id": 1126,
        "name": "Gurgaon",
        "stateId": 13
      },
      {
        "id": 1127,
        "name": "Haileymandi",
        "stateId": 13
      },
      {
        "id": 1128,
        "name": "Hansi",
        "stateId": 13
      },
      {
        "id": 1129,
        "name": "Hasanpur",
        "stateId": 13
      },
      {
        "id": 1130,
        "name": "Hathin",
        "stateId": 13
      },
      {
        "id": 1131,
        "name": "Hisar",
        "stateId": 13
      },
      {
        "id": 1132,
        "name": "Hissar",
        "stateId": 13
      },
      {
        "id": 1133,
        "name": "Hodal",
        "stateId": 13
      },
      {
        "id": 1134,
        "name": "Indri",
        "stateId": 13
      },
      {
        "id": 1135,
        "name": "Jagadhri",
        "stateId": 13
      },
      {
        "id": 1136,
        "name": "Jakhal Mandi",
        "stateId": 13
      },
      {
        "id": 1137,
        "name": "Jhajjar",
        "stateId": 13
      },
      {
        "id": 1138,
        "name": "Jind",
        "stateId": 13
      },
      {
        "id": 1139,
        "name": "Julana",
        "stateId": 13
      },
      {
        "id": 1140,
        "name": "Kaithal",
        "stateId": 13
      },
      {
        "id": 1141,
        "name": "Kalanur",
        "stateId": 13
      },
      {
        "id": 1142,
        "name": "Kalanwali",
        "stateId": 13
      },
      {
        "id": 1143,
        "name": "Kalayat",
        "stateId": 13
      },
      {
        "id": 1144,
        "name": "Kalka",
        "stateId": 13
      },
      {
        "id": 1145,
        "name": "Kanina",
        "stateId": 13
      },
      {
        "id": 1146,
        "name": "Kansepur",
        "stateId": 13
      },
      {
        "id": 1147,
        "name": "Kardhan",
        "stateId": 13
      },
      {
        "id": 1148,
        "name": "Karnal",
        "stateId": 13
      },
      {
        "id": 1149,
        "name": "Kharkhoda",
        "stateId": 13
      },
      {
        "id": 1150,
        "name": "Kheri Sampla",
        "stateId": 13
      },
      {
        "id": 1151,
        "name": "Kundli",
        "stateId": 13
      },
      {
        "id": 1152,
        "name": "Kurukshetra",
        "stateId": 13
      },
      {
        "id": 1153,
        "name": "Ladrawan",
        "stateId": 13
      },
      {
        "id": 1154,
        "name": "Ladwa",
        "stateId": 13
      },
      {
        "id": 1155,
        "name": "Loharu",
        "stateId": 13
      },
      {
        "id": 1156,
        "name": "Maham",
        "stateId": 13
      },
      {
        "id": 1157,
        "name": "Mahendragarh",
        "stateId": 13
      },
      {
        "id": 1158,
        "name": "Mustafabad",
        "stateId": 13
      },
      {
        "id": 1159,
        "name": "Nagai Chaudhry",
        "stateId": 13
      },
      {
        "id": 1160,
        "name": "Narayangarh",
        "stateId": 13
      },
      {
        "id": 1161,
        "name": "Narnaul",
        "stateId": 13
      },
      {
        "id": 1162,
        "name": "Narnaund",
        "stateId": 13
      },
      {
        "id": 1163,
        "name": "Narwana",
        "stateId": 13
      },
      {
        "id": 1164,
        "name": "Nilokheri",
        "stateId": 13
      },
      {
        "id": 1165,
        "name": "Nuh",
        "stateId": 13
      },
      {
        "id": 1166,
        "name": "Palwal",
        "stateId": 13
      },
      {
        "id": 1167,
        "name": "Panchkula",
        "stateId": 13
      },
      {
        "id": 1168,
        "name": "Panipat",
        "stateId": 13
      },
      {
        "id": 1169,
        "name": "Panipat Taraf Ansar",
        "stateId": 13
      },
      {
        "id": 1170,
        "name": "Panipat Taraf Makhdum Zadgan",
        "stateId": 13
      },
      {
        "id": 1171,
        "name": "Panipat Taraf Rajputan",
        "stateId": 13
      },
      {
        "id": 1172,
        "name": "Pehowa",
        "stateId": 13
      },
      {
        "id": 1173,
        "name": "Pinjaur",
        "stateId": 13
      },
      {
        "id": 1174,
        "name": "Punahana",
        "stateId": 13
      },
      {
        "id": 1175,
        "name": "Pundri",
        "stateId": 13
      },
      {
        "id": 1176,
        "name": "Radaur",
        "stateId": 13
      },
      {
        "id": 1177,
        "name": "Raipur Rani",
        "stateId": 13
      },
      {
        "id": 1178,
        "name": "Rania",
        "stateId": 13
      },
      {
        "id": 1179,
        "name": "Ratiya",
        "stateId": 13
      },
      {
        "id": 1180,
        "name": "Rewari",
        "stateId": 13
      },
      {
        "id": 1181,
        "name": "Rohtak",
        "stateId": 13
      },
      {
        "id": 1182,
        "name": "Ropar",
        "stateId": 13
      },
      {
        "id": 1183,
        "name": "Sadauri",
        "stateId": 13
      },
      {
        "id": 1184,
        "name": "Safidon",
        "stateId": 13
      },
      {
        "id": 1185,
        "name": "Samalkha",
        "stateId": 13
      },
      {
        "id": 1186,
        "name": "Sankhol",
        "stateId": 13
      },
      {
        "id": 1187,
        "name": "Sasauli",
        "stateId": 13
      },
      {
        "id": 1188,
        "name": "Shahabad",
        "stateId": 13
      },
      {
        "id": 1189,
        "name": "Sirsa",
        "stateId": 13
      },
      {
        "id": 1190,
        "name": "Siwani",
        "stateId": 13
      },
      {
        "id": 1191,
        "name": "Sohna",
        "stateId": 13
      },
      {
        "id": 1192,
        "name": "Sonipat",
        "stateId": 13
      },
      {
        "id": 1193,
        "name": "Sukhrali",
        "stateId": 13
      },
      {
        "id": 1194,
        "name": "Taoru",
        "stateId": 13
      },
      {
        "id": 1195,
        "name": "Taraori",
        "stateId": 13
      },
      {
        "id": 1196,
        "name": "Tauru",
        "stateId": 13
      },
      {
        "id": 1197,
        "name": "Thanesar",
        "stateId": 13
      },
      {
        "id": 1198,
        "name": "Tilpat",
        "stateId": 13
      },
      {
        "id": 1199,
        "name": "Tohana",
        "stateId": 13
      },
      {
        "id": 1200,
        "name": "Tosham",
        "stateId": 13
      },
      {
        "id": 1201,
        "name": "Uchana",
        "stateId": 13
      },
      {
        "id": 1202,
        "name": "Uklana Mandi",
        "stateId": 13
      },
      {
        "id": 1203,
        "name": "Uncha Siwana",
        "stateId": 13
      },
      {
        "id": 1204,
        "name": "Yamunanagar",
        "stateId": 13
      },
      {
        "id": 1205,
        "name": "Arki",
        "stateId": 14
      },
      {
        "id": 1206,
        "name": "Baddi",
        "stateId": 14
      },
      {
        "id": 1207,
        "name": "Bakloh",
        "stateId": 14
      },
      {
        "id": 1208,
        "name": "Banjar",
        "stateId": 14
      },
      {
        "id": 1209,
        "name": "Bhota",
        "stateId": 14
      },
      {
        "id": 1210,
        "name": "Bhuntar",
        "stateId": 14
      },
      {
        "id": 1211,
        "name": "Bilaspur",
        "stateId": 14
      },
      {
        "id": 1212,
        "name": "Chamba",
        "stateId": 14
      },
      {
        "id": 1213,
        "name": "Chaupal",
        "stateId": 14
      },
      {
        "id": 1214,
        "name": "Chuari Khas",
        "stateId": 14
      },
      {
        "id": 1215,
        "name": "Dagshai",
        "stateId": 14
      },
      {
        "id": 1216,
        "name": "Dalhousie",
        "stateId": 14
      },
      {
        "id": 1217,
        "name": "Dalhousie Cantonment",
        "stateId": 14
      },
      {
        "id": 1218,
        "name": "Damtal",
        "stateId": 14
      },
      {
        "id": 1219,
        "name": "Daulatpur",
        "stateId": 14
      },
      {
        "id": 1220,
        "name": "Dera Gopipur",
        "stateId": 14
      },
      {
        "id": 1221,
        "name": "Dhalli",
        "stateId": 14
      },
      {
        "id": 1222,
        "name": "Dharamshala",
        "stateId": 14
      },
      {
        "id": 1223,
        "name": "Gagret",
        "stateId": 14
      },
      {
        "id": 1224,
        "name": "Ghamarwin",
        "stateId": 14
      },
      {
        "id": 1225,
        "name": "Hamirpur",
        "stateId": 14
      },
      {
        "id": 1226,
        "name": "Jawala Mukhi",
        "stateId": 14
      },
      {
        "id": 1227,
        "name": "Jogindarnagar",
        "stateId": 14
      },
      {
        "id": 1228,
        "name": "Jubbal",
        "stateId": 14
      },
      {
        "id": 1229,
        "name": "Jutogh",
        "stateId": 14
      },
      {
        "id": 1230,
        "name": "Kala Amb",
        "stateId": 14
      },
      {
        "id": 1231,
        "name": "Kalpa",
        "stateId": 14
      },
      {
        "id": 1232,
        "name": "Kangra",
        "stateId": 14
      },
      {
        "id": 1233,
        "name": "Kasauli",
        "stateId": 14
      },
      {
        "id": 1234,
        "name": "Kot Khai",
        "stateId": 14
      },
      {
        "id": 1235,
        "name": "Kullu",
        "stateId": 14
      },
      {
        "id": 1236,
        "name": "Kulu",
        "stateId": 14
      },
      {
        "id": 1237,
        "name": "Manali",
        "stateId": 14
      },
      {
        "id": 1238,
        "name": "Mandi",
        "stateId": 14
      },
      {
        "id": 1239,
        "name": "Mant Khas",
        "stateId": 14
      },
      {
        "id": 1240,
        "name": "Mehatpur Basdehra",
        "stateId": 14
      },
      {
        "id": 1241,
        "name": "Nadaun",
        "stateId": 14
      },
      {
        "id": 1242,
        "name": "Nagrota",
        "stateId": 14
      },
      {
        "id": 1243,
        "name": "Nahan",
        "stateId": 14
      },
      {
        "id": 1244,
        "name": "Naina Devi",
        "stateId": 14
      },
      {
        "id": 1245,
        "name": "Nalagarh",
        "stateId": 14
      },
      {
        "id": 1246,
        "name": "Narkanda",
        "stateId": 14
      },
      {
        "id": 1247,
        "name": "Nurpur",
        "stateId": 14
      },
      {
        "id": 1248,
        "name": "Palampur",
        "stateId": 14
      },
      {
        "id": 1249,
        "name": "Pandoh",
        "stateId": 14
      },
      {
        "id": 1250,
        "name": "Paonta Sahib",
        "stateId": 14
      },
      {
        "id": 1251,
        "name": "Parwanoo",
        "stateId": 14
      },
      {
        "id": 1252,
        "name": "Parwanu",
        "stateId": 14
      },
      {
        "id": 1253,
        "name": "Rajgarh",
        "stateId": 14
      },
      {
        "id": 1254,
        "name": "Rampur",
        "stateId": 14
      },
      {
        "id": 1255,
        "name": "Rawalsar",
        "stateId": 14
      },
      {
        "id": 1256,
        "name": "Rohru",
        "stateId": 14
      },
      {
        "id": 1257,
        "name": "Sabathu",
        "stateId": 14
      },
      {
        "id": 1258,
        "name": "Santokhgarh",
        "stateId": 14
      },
      {
        "id": 1259,
        "name": "Sarahan",
        "stateId": 14
      },
      {
        "id": 1260,
        "name": "Sarka Ghat",
        "stateId": 14
      },
      {
        "id": 1261,
        "name": "Seoni",
        "stateId": 14
      },
      {
        "id": 1262,
        "name": "Shimla",
        "stateId": 14
      },
      {
        "id": 1263,
        "name": "Sirmaur",
        "stateId": 14
      },
      {
        "id": 1264,
        "name": "Solan",
        "stateId": 14
      },
      {
        "id": 1265,
        "name": "Solon",
        "stateId": 14
      },
      {
        "id": 1266,
        "name": "Sundarnagar",
        "stateId": 14
      },
      {
        "id": 1267,
        "name": "Sundernagar",
        "stateId": 14
      },
      {
        "id": 1268,
        "name": "Talai",
        "stateId": 14
      },
      {
        "id": 1269,
        "name": "Theog",
        "stateId": 14
      },
      {
        "id": 1270,
        "name": "Tira Sujanpur",
        "stateId": 14
      },
      {
        "id": 1271,
        "name": "Una",
        "stateId": 14
      },
      {
        "id": 1272,
        "name": "Yol",
        "stateId": 14
      },
      {
        "id": 1273,
        "name": "Achabal",
        "stateId": 15
      },
      {
        "id": 1274,
        "name": "Akhnur",
        "stateId": 15
      },
      {
        "id": 1275,
        "name": "Anantnag",
        "stateId": 15
      },
      {
        "id": 1276,
        "name": "Arnia",
        "stateId": 15
      },
      {
        "id": 1277,
        "name": "Awantipora",
        "stateId": 15
      },
      {
        "id": 1278,
        "name": "Badami Bagh",
        "stateId": 15
      },
      {
        "id": 1279,
        "name": "Bandipur",
        "stateId": 15
      },
      {
        "id": 1280,
        "name": "Banihal",
        "stateId": 15
      },
      {
        "id": 1281,
        "name": "Baramula",
        "stateId": 15
      },
      {
        "id": 1282,
        "name": "Baramulla",
        "stateId": 15
      },
      {
        "id": 1283,
        "name": "Bari Brahmana",
        "stateId": 15
      },
      {
        "id": 1284,
        "name": "Bashohli",
        "stateId": 15
      },
      {
        "id": 1285,
        "name": "Batote",
        "stateId": 15
      },
      {
        "id": 1286,
        "name": "Bhaderwah",
        "stateId": 15
      },
      {
        "id": 1287,
        "name": "Bijbiara",
        "stateId": 15
      },
      {
        "id": 1288,
        "name": "Billawar",
        "stateId": 15
      },
      {
        "id": 1289,
        "name": "Birwah",
        "stateId": 15
      },
      {
        "id": 1290,
        "name": "Bishna",
        "stateId": 15
      },
      {
        "id": 1291,
        "name": "Budgam",
        "stateId": 15
      },
      {
        "id": 1292,
        "name": "Charari Sharief",
        "stateId": 15
      },
      {
        "id": 1293,
        "name": "Chenani",
        "stateId": 15
      },
      {
        "id": 1294,
        "name": "Doda",
        "stateId": 15
      },
      {
        "id": 1295,
        "name": "Duru-Verinag",
        "stateId": 15
      },
      {
        "id": 1296,
        "name": "Gandarbat",
        "stateId": 15
      },
      {
        "id": 1297,
        "name": "Gho Manhasan",
        "stateId": 15
      },
      {
        "id": 1298,
        "name": "Gorah Salathian",
        "stateId": 15
      },
      {
        "id": 1299,
        "name": "Gulmarg",
        "stateId": 15
      },
      {
        "id": 1300,
        "name": "Hajan",
        "stateId": 15
      },
      {
        "id": 1301,
        "name": "Handwara",
        "stateId": 15
      },
      {
        "id": 1302,
        "name": "Hiranagar",
        "stateId": 15
      },
      {
        "id": 1303,
        "name": "Jammu",
        "stateId": 15
      },
      {
        "id": 1304,
        "name": "Jammu Cantonment",
        "stateId": 15
      },
      {
        "id": 1305,
        "name": "Jammu Tawi",
        "stateId": 15
      },
      {
        "id": 1306,
        "name": "Jourian",
        "stateId": 15
      },
      {
        "id": 1307,
        "name": "Kargil",
        "stateId": 15
      },
      {
        "id": 1308,
        "name": "Kathua",
        "stateId": 15
      },
      {
        "id": 1309,
        "name": "Katra",
        "stateId": 15
      },
      {
        "id": 1310,
        "name": "Khan Sahib",
        "stateId": 15
      },
      {
        "id": 1311,
        "name": "Khour",
        "stateId": 15
      },
      {
        "id": 1312,
        "name": "Khrew",
        "stateId": 15
      },
      {
        "id": 1313,
        "name": "Kishtwar",
        "stateId": 15
      },
      {
        "id": 1314,
        "name": "Kud",
        "stateId": 15
      },
      {
        "id": 1315,
        "name": "Kukernag",
        "stateId": 15
      },
      {
        "id": 1316,
        "name": "Kulgam",
        "stateId": 15
      },
      {
        "id": 1317,
        "name": "Kunzer",
        "stateId": 15
      },
      {
        "id": 1318,
        "name": "Kupwara",
        "stateId": 15
      },
      {
        "id": 1319,
        "name": "Lakhenpur",
        "stateId": 15
      },
      {
        "id": 1320,
        "name": "Leh",
        "stateId": 15
      },
      {
        "id": 1321,
        "name": "Magam",
        "stateId": 15
      },
      {
        "id": 1322,
        "name": "Mattan",
        "stateId": 15
      },
      {
        "id": 1323,
        "name": "Naushehra",
        "stateId": 15
      },
      {
        "id": 1324,
        "name": "Pahalgam",
        "stateId": 15
      },
      {
        "id": 1325,
        "name": "Pampore",
        "stateId": 15
      },
      {
        "id": 1326,
        "name": "Parole",
        "stateId": 15
      },
      {
        "id": 1327,
        "name": "Pattan",
        "stateId": 15
      },
      {
        "id": 1328,
        "name": "Pulwama",
        "stateId": 15
      },
      {
        "id": 1329,
        "name": "Punch",
        "stateId": 15
      },
      {
        "id": 1330,
        "name": "Qazigund",
        "stateId": 15
      },
      {
        "id": 1331,
        "name": "Rajauri",
        "stateId": 15
      },
      {
        "id": 1332,
        "name": "Ramban",
        "stateId": 15
      },
      {
        "id": 1333,
        "name": "Ramgarh",
        "stateId": 15
      },
      {
        "id": 1334,
        "name": "Ramnagar",
        "stateId": 15
      },
      {
        "id": 1335,
        "name": "Ranbirsingh Pora",
        "stateId": 15
      },
      {
        "id": 1336,
        "name": "Reasi",
        "stateId": 15
      },
      {
        "id": 1337,
        "name": "Rehambal",
        "stateId": 15
      },
      {
        "id": 1338,
        "name": "Samba",
        "stateId": 15
      },
      {
        "id": 1339,
        "name": "Shupiyan",
        "stateId": 15
      },
      {
        "id": 1340,
        "name": "Sopur",
        "stateId": 15
      },
      {
        "id": 1341,
        "name": "Srinagar",
        "stateId": 15
      },
      {
        "id": 1342,
        "name": "Sumbal",
        "stateId": 15
      },
      {
        "id": 1343,
        "name": "Sunderbani",
        "stateId": 15
      },
      {
        "id": 1344,
        "name": "Talwara",
        "stateId": 15
      },
      {
        "id": 1345,
        "name": "Thanamandi",
        "stateId": 15
      },
      {
        "id": 1346,
        "name": "Tral",
        "stateId": 15
      },
      {
        "id": 1347,
        "name": "Udhampur",
        "stateId": 15
      },
      {
        "id": 1348,
        "name": "Uri",
        "stateId": 15
      },
      {
        "id": 1349,
        "name": "Vijaypur",
        "stateId": 15
      },
      {
        "id": 1350,
        "name": "Adityapur",
        "stateId": 16
      },
      {
        "id": 1351,
        "name": "Amlabad",
        "stateId": 16
      },
      {
        "id": 1352,
        "name": "Angarpathar",
        "stateId": 16
      },
      {
        "id": 1353,
        "name": "Ara",
        "stateId": 16
      },
      {
        "id": 1354,
        "name": "Babua Kalan",
        "stateId": 16
      },
      {
        "id": 1355,
        "name": "Bagbahra",
        "stateId": 16
      },
      {
        "id": 1356,
        "name": "Baliapur",
        "stateId": 16
      },
      {
        "id": 1357,
        "name": "Baliari",
        "stateId": 16
      },
      {
        "id": 1358,
        "name": "Balkundra",
        "stateId": 16
      },
      {
        "id": 1359,
        "name": "Bandhgora",
        "stateId": 16
      },
      {
        "id": 1360,
        "name": "Barajamda",
        "stateId": 16
      },
      {
        "id": 1361,
        "name": "Barhi",
        "stateId": 16
      },
      {
        "id": 1362,
        "name": "Barka Kana",
        "stateId": 16
      },
      {
        "id": 1363,
        "name": "Barki Saraiya",
        "stateId": 16
      },
      {
        "id": 1364,
        "name": "Barughutu",
        "stateId": 16
      },
      {
        "id": 1365,
        "name": "Barwadih",
        "stateId": 16
      },
      {
        "id": 1366,
        "name": "Basaria",
        "stateId": 16
      },
      {
        "id": 1367,
        "name": "Basukinath",
        "stateId": 16
      },
      {
        "id": 1368,
        "name": "Bermo",
        "stateId": 16
      },
      {
        "id": 1369,
        "name": "Bhagatdih",
        "stateId": 16
      },
      {
        "id": 1370,
        "name": "Bhaurah",
        "stateId": 16
      },
      {
        "id": 1371,
        "name": "Bhojudih",
        "stateId": 16
      },
      {
        "id": 1372,
        "name": "Bhuli",
        "stateId": 16
      },
      {
        "id": 1373,
        "name": "Bokaro",
        "stateId": 16
      },
      {
        "id": 1374,
        "name": "Borio Bazar",
        "stateId": 16
      },
      {
        "id": 1375,
        "name": "Bundu",
        "stateId": 16
      },
      {
        "id": 1376,
        "name": "Chaibasa",
        "stateId": 16
      },
      {
        "id": 1377,
        "name": "Chaitudih",
        "stateId": 16
      },
      {
        "id": 1378,
        "name": "Chakradharpur",
        "stateId": 16
      },
      {
        "id": 1379,
        "name": "Chakulia",
        "stateId": 16
      },
      {
        "id": 1380,
        "name": "Chandaur",
        "stateId": 16
      },
      {
        "id": 1381,
        "name": "Chandil",
        "stateId": 16
      },
      {
        "id": 1382,
        "name": "Chandrapura",
        "stateId": 16
      },
      {
        "id": 1383,
        "name": "Chas",
        "stateId": 16
      },
      {
        "id": 1384,
        "name": "Chatra",
        "stateId": 16
      },
      {
        "id": 1385,
        "name": "Chhatatanr",
        "stateId": 16
      },
      {
        "id": 1386,
        "name": "Chhotaputki",
        "stateId": 16
      },
      {
        "id": 1387,
        "name": "Chiria",
        "stateId": 16
      },
      {
        "id": 1388,
        "name": "Chirkunda",
        "stateId": 16
      },
      {
        "id": 1389,
        "name": "Churi",
        "stateId": 16
      },
      {
        "id": 1390,
        "name": "Daltenganj",
        "stateId": 16
      },
      {
        "id": 1391,
        "name": "Danguwapasi",
        "stateId": 16
      },
      {
        "id": 1392,
        "name": "Dari",
        "stateId": 16
      },
      {
        "id": 1393,
        "name": "Deoghar",
        "stateId": 16
      },
      {
        "id": 1394,
        "name": "Deorikalan",
        "stateId": 16
      },
      {
        "id": 1395,
        "name": "Devghar",
        "stateId": 16
      },
      {
        "id": 1396,
        "name": "Dhanbad",
        "stateId": 16
      },
      {
        "id": 1397,
        "name": "Dhanwar",
        "stateId": 16
      },
      {
        "id": 1398,
        "name": "Dhaunsar",
        "stateId": 16
      },
      {
        "id": 1399,
        "name": "Dugda",
        "stateId": 16
      },
      {
        "id": 1400,
        "name": "Dumarkunda",
        "stateId": 16
      },
      {
        "id": 1401,
        "name": "Dumka",
        "stateId": 16
      },
      {
        "id": 1402,
        "name": "Egarkunr",
        "stateId": 16
      },
      {
        "id": 1403,
        "name": "Gadhra",
        "stateId": 16
      },
      {
        "id": 1404,
        "name": "Garwa",
        "stateId": 16
      },
      {
        "id": 1405,
        "name": "Ghatsila",
        "stateId": 16
      },
      {
        "id": 1406,
        "name": "Ghorabandha",
        "stateId": 16
      },
      {
        "id": 1407,
        "name": "Gidi",
        "stateId": 16
      },
      {
        "id": 1408,
        "name": "Giridih",
        "stateId": 16
      },
      {
        "id": 1409,
        "name": "Gobindpur",
        "stateId": 16
      },
      {
        "id": 1410,
        "name": "Godda",
        "stateId": 16
      },
      {
        "id": 1411,
        "name": "Godhar",
        "stateId": 16
      },
      {
        "id": 1412,
        "name": "Golphalbari",
        "stateId": 16
      },
      {
        "id": 1413,
        "name": "Gomoh",
        "stateId": 16
      },
      {
        "id": 1414,
        "name": "Gua",
        "stateId": 16
      },
      {
        "id": 1415,
        "name": "Gumia",
        "stateId": 16
      },
      {
        "id": 1416,
        "name": "Gumla",
        "stateId": 16
      },
      {
        "id": 1417,
        "name": "Haludbani",
        "stateId": 16
      },
      {
        "id": 1418,
        "name": "Hazaribag",
        "stateId": 16
      },
      {
        "id": 1419,
        "name": "Hesla",
        "stateId": 16
      },
      {
        "id": 1420,
        "name": "Husainabad",
        "stateId": 16
      },
      {
        "id": 1421,
        "name": "Isri",
        "stateId": 16
      },
      {
        "id": 1422,
        "name": "Jadugora",
        "stateId": 16
      },
      {
        "id": 1423,
        "name": "Jagannathpur",
        "stateId": 16
      },
      {
        "id": 1424,
        "name": "Jamadoba",
        "stateId": 16
      },
      {
        "id": 1425,
        "name": "Jamshedpur",
        "stateId": 16
      },
      {
        "id": 1426,
        "name": "Jamtara",
        "stateId": 16
      },
      {
        "id": 1427,
        "name": "Jarangdih",
        "stateId": 16
      },
      {
        "id": 1428,
        "name": "Jaridih",
        "stateId": 16
      },
      {
        "id": 1429,
        "name": "Jasidih",
        "stateId": 16
      },
      {
        "id": 1430,
        "name": "Jena",
        "stateId": 16
      },
      {
        "id": 1431,
        "name": "Jharia",
        "stateId": 16
      },
      {
        "id": 1432,
        "name": "Jharia Khas",
        "stateId": 16
      },
      {
        "id": 1433,
        "name": "Jhinkpani",
        "stateId": 16
      },
      {
        "id": 1434,
        "name": "Jhumri Tilaiya",
        "stateId": 16
      },
      {
        "id": 1435,
        "name": "Jorapokhar",
        "stateId": 16
      },
      {
        "id": 1436,
        "name": "Jugsalai",
        "stateId": 16
      },
      {
        "id": 1437,
        "name": "Kailudih",
        "stateId": 16
      },
      {
        "id": 1438,
        "name": "Kalikapur",
        "stateId": 16
      },
      {
        "id": 1439,
        "name": "Kandra",
        "stateId": 16
      },
      {
        "id": 1440,
        "name": "Kanke",
        "stateId": 16
      },
      {
        "id": 1441,
        "name": "Katras",
        "stateId": 16
      },
      {
        "id": 1442,
        "name": "Kedla",
        "stateId": 16
      },
      {
        "id": 1443,
        "name": "Kenduadih",
        "stateId": 16
      },
      {
        "id": 1444,
        "name": "Kharkhari",
        "stateId": 16
      },
      {
        "id": 1445,
        "name": "Kharsawan",
        "stateId": 16
      },
      {
        "id": 1446,
        "name": "Khelari",
        "stateId": 16
      },
      {
        "id": 1447,
        "name": "Khunti",
        "stateId": 16
      },
      {
        "id": 1448,
        "name": "Kiri Buru",
        "stateId": 16
      },
      {
        "id": 1449,
        "name": "Kiriburu",
        "stateId": 16
      },
      {
        "id": 1450,
        "name": "Kodarma",
        "stateId": 16
      },
      {
        "id": 1451,
        "name": "Kuju",
        "stateId": 16
      },
      {
        "id": 1452,
        "name": "Kurpania",
        "stateId": 16
      },
      {
        "id": 1453,
        "name": "Kustai",
        "stateId": 16
      },
      {
        "id": 1454,
        "name": "Lakarka",
        "stateId": 16
      },
      {
        "id": 1455,
        "name": "Lapanga",
        "stateId": 16
      },
      {
        "id": 1456,
        "name": "Latehar",
        "stateId": 16
      },
      {
        "id": 1457,
        "name": "Lohardaga",
        "stateId": 16
      },
      {
        "id": 1458,
        "name": "Loiya",
        "stateId": 16
      },
      {
        "id": 1459,
        "name": "Loyabad",
        "stateId": 16
      },
      {
        "id": 1460,
        "name": "Madhupur",
        "stateId": 16
      },
      {
        "id": 1461,
        "name": "Mahesh Mundi",
        "stateId": 16
      },
      {
        "id": 1462,
        "name": "Maithon",
        "stateId": 16
      },
      {
        "id": 1463,
        "name": "Malkera",
        "stateId": 16
      },
      {
        "id": 1464,
        "name": "Mango",
        "stateId": 16
      },
      {
        "id": 1465,
        "name": "Manoharpur",
        "stateId": 16
      },
      {
        "id": 1466,
        "name": "Marma",
        "stateId": 16
      },
      {
        "id": 1467,
        "name": "Meghahatuburu Forest village",
        "stateId": 16
      },
      {
        "id": 1468,
        "name": "Mera",
        "stateId": 16
      },
      {
        "id": 1469,
        "name": "Meru",
        "stateId": 16
      },
      {
        "id": 1470,
        "name": "Mihijam",
        "stateId": 16
      },
      {
        "id": 1471,
        "name": "Mugma",
        "stateId": 16
      },
      {
        "id": 1472,
        "name": "Muri",
        "stateId": 16
      },
      {
        "id": 1473,
        "name": "Mushabani",
        "stateId": 16
      },
      {
        "id": 1474,
        "name": "Nagri Kalan",
        "stateId": 16
      },
      {
        "id": 1475,
        "name": "Netarhat",
        "stateId": 16
      },
      {
        "id": 1476,
        "name": "Nirsa",
        "stateId": 16
      },
      {
        "id": 1477,
        "name": "Noamundi",
        "stateId": 16
      },
      {
        "id": 1478,
        "name": "Okni",
        "stateId": 16
      },
      {
        "id": 1479,
        "name": "Orla",
        "stateId": 16
      },
      {
        "id": 1480,
        "name": "Pakaur",
        "stateId": 16
      },
      {
        "id": 1481,
        "name": "Palamau",
        "stateId": 16
      },
      {
        "id": 1482,
        "name": "Palawa",
        "stateId": 16
      },
      {
        "id": 1483,
        "name": "Panchet",
        "stateId": 16
      },
      {
        "id": 1484,
        "name": "Panrra",
        "stateId": 16
      },
      {
        "id": 1485,
        "name": "Paratdih",
        "stateId": 16
      },
      {
        "id": 1486,
        "name": "Pathardih",
        "stateId": 16
      },
      {
        "id": 1487,
        "name": "Patratu",
        "stateId": 16
      },
      {
        "id": 1488,
        "name": "Phusro",
        "stateId": 16
      },
      {
        "id": 1489,
        "name": "Pondar Kanali",
        "stateId": 16
      },
      {
        "id": 1490,
        "name": "Rajmahal",
        "stateId": 16
      },
      {
        "id": 1491,
        "name": "Ramgarh",
        "stateId": 16
      },
      {
        "id": 1492,
        "name": "Ranchi",
        "stateId": 16
      },
      {
        "id": 1493,
        "name": "Ray",
        "stateId": 16
      },
      {
        "id": 1494,
        "name": "Rehla",
        "stateId": 16
      },
      {
        "id": 1495,
        "name": "Religara",
        "stateId": 16
      },
      {
        "id": 1496,
        "name": "Rohraband",
        "stateId": 16
      },
      {
        "id": 1497,
        "name": "Sahibganj",
        "stateId": 16
      },
      {
        "id": 1498,
        "name": "Sahnidih",
        "stateId": 16
      },
      {
        "id": 1499,
        "name": "Saraidhela",
        "stateId": 16
      },
      {
        "id": 1500,
        "name": "Saraikela",
        "stateId": 16
      },
      {
        "id": 1501,
        "name": "Sarjamda",
        "stateId": 16
      },
      {
        "id": 1502,
        "name": "Saunda",
        "stateId": 16
      },
      {
        "id": 1503,
        "name": "Sewai",
        "stateId": 16
      },
      {
        "id": 1504,
        "name": "Sijhua",
        "stateId": 16
      },
      {
        "id": 1505,
        "name": "Sijua",
        "stateId": 16
      },
      {
        "id": 1506,
        "name": "Simdega",
        "stateId": 16
      },
      {
        "id": 1507,
        "name": "Sindari",
        "stateId": 16
      },
      {
        "id": 1508,
        "name": "Sinduria",
        "stateId": 16
      },
      {
        "id": 1509,
        "name": "Sini",
        "stateId": 16
      },
      {
        "id": 1510,
        "name": "Sirka",
        "stateId": 16
      },
      {
        "id": 1511,
        "name": "Siuliban",
        "stateId": 16
      },
      {
        "id": 1512,
        "name": "Surubera",
        "stateId": 16
      },
      {
        "id": 1513,
        "name": "Tati",
        "stateId": 16
      },
      {
        "id": 1514,
        "name": "Tenudam",
        "stateId": 16
      },
      {
        "id": 1515,
        "name": "Tisra",
        "stateId": 16
      },
      {
        "id": 1516,
        "name": "Topa",
        "stateId": 16
      },
      {
        "id": 1517,
        "name": "Topchanchi",
        "stateId": 16
      },
      {
        "id": 1518,
        "name": "Adityanagar",
        "stateId": 17
      },
      {
        "id": 1519,
        "name": "Adityapatna",
        "stateId": 17
      },
      {
        "id": 1520,
        "name": "Afzalpur",
        "stateId": 17
      },
      {
        "id": 1521,
        "name": "Ajjampur",
        "stateId": 17
      },
      {
        "id": 1522,
        "name": "Aland",
        "stateId": 17
      },
      {
        "id": 1523,
        "name": "Almatti Sitimani",
        "stateId": 17
      },
      {
        "id": 1524,
        "name": "Alnavar",
        "stateId": 17
      },
      {
        "id": 1525,
        "name": "Alur",
        "stateId": 17
      },
      {
        "id": 1526,
        "name": "Ambikanagara",
        "stateId": 17
      },
      {
        "id": 1527,
        "name": "Anekal",
        "stateId": 17
      },
      {
        "id": 1528,
        "name": "Ankola",
        "stateId": 17
      },
      {
        "id": 1529,
        "name": "Annigeri",
        "stateId": 17
      },
      {
        "id": 1530,
        "name": "Arkalgud",
        "stateId": 17
      },
      {
        "id": 1531,
        "name": "Arsikere",
        "stateId": 17
      },
      {
        "id": 1532,
        "name": "Athni",
        "stateId": 17
      },
      {
        "id": 1533,
        "name": "Aurad",
        "stateId": 17
      },
      {
        "id": 1534,
        "name": "Badagavettu",
        "stateId": 17
      },
      {
        "id": 1535,
        "name": "Badami",
        "stateId": 17
      },
      {
        "id": 1536,
        "name": "Bagalkot",
        "stateId": 17
      },
      {
        "id": 1537,
        "name": "Bagepalli",
        "stateId": 17
      },
      {
        "id": 1538,
        "name": "Bailhongal",
        "stateId": 17
      },
      {
        "id": 1539,
        "name": "Baindur",
        "stateId": 17
      },
      {
        "id": 1540,
        "name": "Bajala",
        "stateId": 17
      },
      {
        "id": 1541,
        "name": "Bajpe",
        "stateId": 17
      },
      {
        "id": 1542,
        "name": "Banavar",
        "stateId": 17
      },
      {
        "id": 1543,
        "name": "Bangarapet",
        "stateId": 17
      },
      {
        "id": 1544,
        "name": "Bankapura",
        "stateId": 17
      },
      {
        "id": 1545,
        "name": "Bannur",
        "stateId": 17
      },
      {
        "id": 1546,
        "name": "Bantwal",
        "stateId": 17
      },
      {
        "id": 1547,
        "name": "Basavakalyan",
        "stateId": 17
      },
      {
        "id": 1548,
        "name": "Basavana Bagevadi",
        "stateId": 17
      },
      {
        "id": 1549,
        "name": "Belagula",
        "stateId": 17
      },
      {
        "id": 1550,
        "name": "Belakavadiq",
        "stateId": 17
      },
      {
        "id": 1551,
        "name": "Belgaum",
        "stateId": 17
      },
      {
        "id": 1552,
        "name": "Belgaum Cantonment",
        "stateId": 17
      },
      {
        "id": 1553,
        "name": "Bellary",
        "stateId": 17
      },
      {
        "id": 1554,
        "name": "Belluru",
        "stateId": 17
      },
      {
        "id": 1555,
        "name": "Beltangadi",
        "stateId": 17
      },
      {
        "id": 1556,
        "name": "Belur",
        "stateId": 17
      },
      {
        "id": 1557,
        "name": "Belvata",
        "stateId": 17
      },
      {
        "id": 1558,
        "name": "Bengaluru",
        "stateId": 17
      },
      {
        "id": 1559,
        "name": "Bhadravati",
        "stateId": 17
      },
      {
        "id": 1560,
        "name": "Bhalki",
        "stateId": 17
      },
      {
        "id": 1561,
        "name": "Bhatkal",
        "stateId": 17
      },
      {
        "id": 1562,
        "name": "Bhimarayanagudi",
        "stateId": 17
      },
      {
        "id": 1563,
        "name": "Bhogadi",
        "stateId": 17
      },
      {
        "id": 1564,
        "name": "Bidar",
        "stateId": 17
      },
      {
        "id": 1565,
        "name": "Bijapur",
        "stateId": 17
      },
      {
        "id": 1566,
        "name": "Bilgi",
        "stateId": 17
      },
      {
        "id": 1567,
        "name": "Birur",
        "stateId": 17
      },
      {
        "id": 1568,
        "name": "Bommanahalli",
        "stateId": 17
      },
      {
        "id": 1569,
        "name": "Bommasandra",
        "stateId": 17
      },
      {
        "id": 1570,
        "name": "Byadgi",
        "stateId": 17
      },
      {
        "id": 1571,
        "name": "Byatarayanapura",
        "stateId": 17
      },
      {
        "id": 1572,
        "name": "Chakranagar Colony",
        "stateId": 17
      },
      {
        "id": 1573,
        "name": "Challakere",
        "stateId": 17
      },
      {
        "id": 1574,
        "name": "Chamrajnagar",
        "stateId": 17
      },
      {
        "id": 1575,
        "name": "Chamundi Betta",
        "stateId": 17
      },
      {
        "id": 1576,
        "name": "Channagiri",
        "stateId": 17
      },
      {
        "id": 1577,
        "name": "Channapatna",
        "stateId": 17
      },
      {
        "id": 1578,
        "name": "Channarayapatna",
        "stateId": 17
      },
      {
        "id": 1579,
        "name": "Chickballapur",
        "stateId": 17
      },
      {
        "id": 1580,
        "name": "Chik Ballapur",
        "stateId": 17
      },
      {
        "id": 1581,
        "name": "Chikkaballapur",
        "stateId": 17
      },
      {
        "id": 1582,
        "name": "Chikmagalur",
        "stateId": 17
      },
      {
        "id": 1583,
        "name": "Chiknayakanhalli",
        "stateId": 17
      },
      {
        "id": 1584,
        "name": "Chikodi",
        "stateId": 17
      },
      {
        "id": 1585,
        "name": "Chincholi",
        "stateId": 17
      },
      {
        "id": 1586,
        "name": "Chintamani",
        "stateId": 17
      },
      {
        "id": 1587,
        "name": "Chitaguppa",
        "stateId": 17
      },
      {
        "id": 1588,
        "name": "Chitapur",
        "stateId": 17
      },
      {
        "id": 1589,
        "name": "Chitradurga",
        "stateId": 17
      },
      {
        "id": 1590,
        "name": "Coorg",
        "stateId": 17
      },
      {
        "id": 1591,
        "name": "Dandeli",
        "stateId": 17
      },
      {
        "id": 1592,
        "name": "Dargajogihalli",
        "stateId": 17
      },
      {
        "id": 1593,
        "name": "Dasarahalli",
        "stateId": 17
      },
      {
        "id": 1594,
        "name": "Davangere",
        "stateId": 17
      },
      {
        "id": 1595,
        "name": "Devadurga",
        "stateId": 17
      },
      {
        "id": 1596,
        "name": "Devagiri",
        "stateId": 17
      },
      {
        "id": 1597,
        "name": "Devanhalli",
        "stateId": 17
      },
      {
        "id": 1598,
        "name": "Dharwar",
        "stateId": 17
      },
      {
        "id": 1599,
        "name": "Dhupdal",
        "stateId": 17
      },
      {
        "id": 1600,
        "name": "Dod Ballapur",
        "stateId": 17
      },
      {
        "id": 1601,
        "name": "Donimalai",
        "stateId": 17
      },
      {
        "id": 1602,
        "name": "Gadag",
        "stateId": 17
      },
      {
        "id": 1603,
        "name": "Gajendragarh",
        "stateId": 17
      },
      {
        "id": 1604,
        "name": "Ganeshgudi",
        "stateId": 17
      },
      {
        "id": 1605,
        "name": "Gangawati",
        "stateId": 17
      },
      {
        "id": 1606,
        "name": "Gangoli",
        "stateId": 17
      },
      {
        "id": 1607,
        "name": "Gauribidanur",
        "stateId": 17
      },
      {
        "id": 1608,
        "name": "Gokak",
        "stateId": 17
      },
      {
        "id": 1609,
        "name": "Gokak Falls",
        "stateId": 17
      },
      {
        "id": 1610,
        "name": "Gonikoppal",
        "stateId": 17
      },
      {
        "id": 1611,
        "name": "Gorur",
        "stateId": 17
      },
      {
        "id": 1612,
        "name": "Gottikere",
        "stateId": 17
      },
      {
        "id": 1613,
        "name": "Gubbi",
        "stateId": 17
      },
      {
        "id": 1614,
        "name": "Gudibanda",
        "stateId": 17
      },
      {
        "id": 1615,
        "name": "Gulbarga",
        "stateId": 17
      },
      {
        "id": 1616,
        "name": "Guledgudda",
        "stateId": 17
      },
      {
        "id": 1617,
        "name": "Gundlupet",
        "stateId": 17
      },
      {
        "id": 1618,
        "name": "Gurmatkal",
        "stateId": 17
      },
      {
        "id": 1619,
        "name": "Haliyal",
        "stateId": 17
      },
      {
        "id": 1620,
        "name": "Hangal",
        "stateId": 17
      },
      {
        "id": 1621,
        "name": "Harihar",
        "stateId": 17
      },
      {
        "id": 1622,
        "name": "Harpanahalli",
        "stateId": 17
      },
      {
        "id": 1623,
        "name": "Hassan",
        "stateId": 17
      },
      {
        "id": 1624,
        "name": "Hatti",
        "stateId": 17
      },
      {
        "id": 1625,
        "name": "Hatti Gold Mines",
        "stateId": 17
      },
      {
        "id": 1626,
        "name": "Haveri",
        "stateId": 17
      },
      {
        "id": 1627,
        "name": "Hebbagodi",
        "stateId": 17
      },
      {
        "id": 1628,
        "name": "Hebbalu",
        "stateId": 17
      },
      {
        "id": 1629,
        "name": "Hebri",
        "stateId": 17
      },
      {
        "id": 1630,
        "name": "Heggadadevanakote",
        "stateId": 17
      },
      {
        "id": 1631,
        "name": "Herohalli",
        "stateId": 17
      },
      {
        "id": 1632,
        "name": "Hidkal",
        "stateId": 17
      },
      {
        "id": 1633,
        "name": "Hindalgi",
        "stateId": 17
      },
      {
        "id": 1634,
        "name": "Hirekerur",
        "stateId": 17
      },
      {
        "id": 1635,
        "name": "Hiriyur",
        "stateId": 17
      },
      {
        "id": 1636,
        "name": "Holalkere",
        "stateId": 17
      },
      {
        "id": 1637,
        "name": "Hole Narsipur",
        "stateId": 17
      },
      {
        "id": 1638,
        "name": "Homnabad",
        "stateId": 17
      },
      {
        "id": 1639,
        "name": "Honavar",
        "stateId": 17
      },
      {
        "id": 1640,
        "name": "Honnali",
        "stateId": 17
      },
      {
        "id": 1641,
        "name": "Hosakote",
        "stateId": 17
      },
      {
        "id": 1642,
        "name": "Hosanagara",
        "stateId": 17
      },
      {
        "id": 1643,
        "name": "Hosangadi",
        "stateId": 17
      },
      {
        "id": 1644,
        "name": "Hosdurga",
        "stateId": 17
      },
      {
        "id": 1645,
        "name": "Hoskote",
        "stateId": 17
      },
      {
        "id": 1646,
        "name": "Hospet",
        "stateId": 17
      },
      {
        "id": 1647,
        "name": "Hubli",
        "stateId": 17
      },
      {
        "id": 1648,
        "name": "Hukeri",
        "stateId": 17
      },
      {
        "id": 1649,
        "name": "Hunasagi",
        "stateId": 17
      },
      {
        "id": 1650,
        "name": "Hunasamaranahalli",
        "stateId": 17
      },
      {
        "id": 1651,
        "name": "Hungund",
        "stateId": 17
      },
      {
        "id": 1652,
        "name": "Hunsur",
        "stateId": 17
      },
      {
        "id": 1653,
        "name": "Huvina Hadagalli",
        "stateId": 17
      },
      {
        "id": 1654,
        "name": "Ilkal",
        "stateId": 17
      },
      {
        "id": 1655,
        "name": "Indi",
        "stateId": 17
      },
      {
        "id": 1656,
        "name": "Jagalur",
        "stateId": 17
      },
      {
        "id": 1657,
        "name": "Jamkhandi",
        "stateId": 17
      },
      {
        "id": 1658,
        "name": "Jevargi",
        "stateId": 17
      },
      {
        "id": 1659,
        "name": "Jog Falls",
        "stateId": 17
      },
      {
        "id": 1660,
        "name": "Kabini Colony",
        "stateId": 17
      },
      {
        "id": 1661,
        "name": "Kadur",
        "stateId": 17
      },
      {
        "id": 1662,
        "name": "Kalghatgi",
        "stateId": 17
      },
      {
        "id": 1663,
        "name": "Kamalapuram",
        "stateId": 17
      },
      {
        "id": 1664,
        "name": "Kampli",
        "stateId": 17
      },
      {
        "id": 1665,
        "name": "Kanakapura",
        "stateId": 17
      },
      {
        "id": 1666,
        "name": "Kangrali BK",
        "stateId": 17
      },
      {
        "id": 1667,
        "name": "Kangrali KH",
        "stateId": 17
      },
      {
        "id": 1668,
        "name": "Kannur",
        "stateId": 17
      },
      {
        "id": 1669,
        "name": "Karkala",
        "stateId": 17
      },
      {
        "id": 1670,
        "name": "Karwar",
        "stateId": 17
      },
      {
        "id": 1671,
        "name": "Kemminja",
        "stateId": 17
      },
      {
        "id": 1672,
        "name": "Kengeri",
        "stateId": 17
      },
      {
        "id": 1673,
        "name": "Kerur",
        "stateId": 17
      },
      {
        "id": 1674,
        "name": "Khanapur",
        "stateId": 17
      },
      {
        "id": 1675,
        "name": "Kodigenahalli",
        "stateId": 17
      },
      {
        "id": 1676,
        "name": "Kodiyal",
        "stateId": 17
      },
      {
        "id": 1677,
        "name": "Kodlipet",
        "stateId": 17
      },
      {
        "id": 1678,
        "name": "Kolar",
        "stateId": 17
      },
      {
        "id": 1679,
        "name": "Kollegal",
        "stateId": 17
      },
      {
        "id": 1680,
        "name": "Konanakunte",
        "stateId": 17
      },
      {
        "id": 1681,
        "name": "Konanur",
        "stateId": 17
      },
      {
        "id": 1682,
        "name": "Konnur",
        "stateId": 17
      },
      {
        "id": 1683,
        "name": "Koppa",
        "stateId": 17
      },
      {
        "id": 1684,
        "name": "Koppal",
        "stateId": 17
      },
      {
        "id": 1685,
        "name": "Koratagere",
        "stateId": 17
      },
      {
        "id": 1686,
        "name": "Kotekara",
        "stateId": 17
      },
      {
        "id": 1687,
        "name": "Kothnur",
        "stateId": 17
      },
      {
        "id": 1688,
        "name": "Kotturu",
        "stateId": 17
      },
      {
        "id": 1689,
        "name": "Krishnapura",
        "stateId": 17
      },
      {
        "id": 1690,
        "name": "Krishnarajanagar",
        "stateId": 17
      },
      {
        "id": 1691,
        "name": "Krishnarajapura",
        "stateId": 17
      },
      {
        "id": 1692,
        "name": "Krishnarajasagara",
        "stateId": 17
      },
      {
        "id": 1693,
        "name": "Krishnarajpet",
        "stateId": 17
      },
      {
        "id": 1694,
        "name": "Kudchi",
        "stateId": 17
      },
      {
        "id": 1695,
        "name": "Kudligi",
        "stateId": 17
      },
      {
        "id": 1696,
        "name": "Kudremukh",
        "stateId": 17
      },
      {
        "id": 1697,
        "name": "Kumsi",
        "stateId": 17
      },
      {
        "id": 1698,
        "name": "Kumta",
        "stateId": 17
      },
      {
        "id": 1699,
        "name": "Kundapura",
        "stateId": 17
      },
      {
        "id": 1700,
        "name": "Kundgol",
        "stateId": 17
      },
      {
        "id": 1701,
        "name": "Kunigal",
        "stateId": 17
      },
      {
        "id": 1702,
        "name": "Kurgunta",
        "stateId": 17
      },
      {
        "id": 1703,
        "name": "Kushalnagar",
        "stateId": 17
      },
      {
        "id": 1704,
        "name": "Kushtagi",
        "stateId": 17
      },
      {
        "id": 1705,
        "name": "Kyathanahalli",
        "stateId": 17
      },
      {
        "id": 1706,
        "name": "Lakshmeshwar",
        "stateId": 17
      },
      {
        "id": 1707,
        "name": "Lingsugur",
        "stateId": 17
      },
      {
        "id": 1708,
        "name": "Londa",
        "stateId": 17
      },
      {
        "id": 1709,
        "name": "Maddur",
        "stateId": 17
      },
      {
        "id": 1710,
        "name": "Madhugiri",
        "stateId": 17
      },
      {
        "id": 1711,
        "name": "Madikeri",
        "stateId": 17
      },
      {
        "id": 1712,
        "name": "Magadi",
        "stateId": 17
      },
      {
        "id": 1713,
        "name": "Magod Falls",
        "stateId": 17
      },
      {
        "id": 1714,
        "name": "Mahadeswara Hills",
        "stateId": 17
      },
      {
        "id": 1715,
        "name": "Mahadevapura",
        "stateId": 17
      },
      {
        "id": 1716,
        "name": "Mahalingpur",
        "stateId": 17
      },
      {
        "id": 1717,
        "name": "Maisuru",
        "stateId": 17
      },
      {
        "id": 1718,
        "name": "Maisuru Cantonment",
        "stateId": 17
      },
      {
        "id": 1719,
        "name": "Malavalli",
        "stateId": 17
      },
      {
        "id": 1720,
        "name": "Mallar",
        "stateId": 17
      },
      {
        "id": 1721,
        "name": "Malpe",
        "stateId": 17
      },
      {
        "id": 1722,
        "name": "Malur",
        "stateId": 17
      },
      {
        "id": 1723,
        "name": "Manchenahalli",
        "stateId": 17
      },
      {
        "id": 1724,
        "name": "Mandya",
        "stateId": 17
      },
      {
        "id": 1725,
        "name": "Mangalore",
        "stateId": 17
      },
      {
        "id": 1726,
        "name": "Mangaluru",
        "stateId": 17
      },
      {
        "id": 1727,
        "name": "Manipal",
        "stateId": 17
      },
      {
        "id": 1728,
        "name": "Manvi",
        "stateId": 17
      },
      {
        "id": 1729,
        "name": "Maski",
        "stateId": 17
      },
      {
        "id": 1730,
        "name": "Mastikatte Colony",
        "stateId": 17
      },
      {
        "id": 1731,
        "name": "Mayakonda",
        "stateId": 17
      },
      {
        "id": 1732,
        "name": "Melukote",
        "stateId": 17
      },
      {
        "id": 1733,
        "name": "Molakalmuru",
        "stateId": 17
      },
      {
        "id": 1734,
        "name": "Mudalgi",
        "stateId": 17
      },
      {
        "id": 1735,
        "name": "Mudbidri",
        "stateId": 17
      },
      {
        "id": 1736,
        "name": "Muddebihal",
        "stateId": 17
      },
      {
        "id": 1737,
        "name": "Mudgal",
        "stateId": 17
      },
      {
        "id": 1738,
        "name": "Mudhol",
        "stateId": 17
      },
      {
        "id": 1739,
        "name": "Mudigere",
        "stateId": 17
      },
      {
        "id": 1740,
        "name": "Mudushedde",
        "stateId": 17
      },
      {
        "id": 1741,
        "name": "Mulbagal",
        "stateId": 17
      },
      {
        "id": 1742,
        "name": "Mulgund",
        "stateId": 17
      },
      {
        "id": 1743,
        "name": "Mulki",
        "stateId": 17
      },
      {
        "id": 1744,
        "name": "Mulur",
        "stateId": 17
      },
      {
        "id": 1745,
        "name": "Mundargi",
        "stateId": 17
      },
      {
        "id": 1746,
        "name": "Mundgod",
        "stateId": 17
      },
      {
        "id": 1747,
        "name": "Munirabad",
        "stateId": 17
      },
      {
        "id": 1748,
        "name": "Munnur",
        "stateId": 17
      },
      {
        "id": 1749,
        "name": "Murudeshwara",
        "stateId": 17
      },
      {
        "id": 1750,
        "name": "Mysore",
        "stateId": 17
      },
      {
        "id": 1751,
        "name": "Nagamangala",
        "stateId": 17
      },
      {
        "id": 1752,
        "name": "Nanjangud",
        "stateId": 17
      },
      {
        "id": 1753,
        "name": "Naragund",
        "stateId": 17
      },
      {
        "id": 1754,
        "name": "Narasimharajapura",
        "stateId": 17
      },
      {
        "id": 1755,
        "name": "Naravi",
        "stateId": 17
      },
      {
        "id": 1756,
        "name": "Narayanpur",
        "stateId": 17
      },
      {
        "id": 1757,
        "name": "Naregal",
        "stateId": 17
      },
      {
        "id": 1758,
        "name": "Navalgund",
        "stateId": 17
      },
      {
        "id": 1759,
        "name": "Nelmangala",
        "stateId": 17
      },
      {
        "id": 1760,
        "name": "Nipani",
        "stateId": 17
      },
      {
        "id": 1761,
        "name": "Nitte",
        "stateId": 17
      },
      {
        "id": 1762,
        "name": "Nyamati",
        "stateId": 17
      },
      {
        "id": 1763,
        "name": "Padu",
        "stateId": 17
      },
      {
        "id": 1764,
        "name": "Pandavapura",
        "stateId": 17
      },
      {
        "id": 1765,
        "name": "Pattanagere",
        "stateId": 17
      },
      {
        "id": 1766,
        "name": "Pavagada",
        "stateId": 17
      },
      {
        "id": 1767,
        "name": "Piriyapatna",
        "stateId": 17
      },
      {
        "id": 1768,
        "name": "Ponnampet",
        "stateId": 17
      },
      {
        "id": 1769,
        "name": "Puttur",
        "stateId": 17
      },
      {
        "id": 1770,
        "name": "Rabkavi",
        "stateId": 17
      },
      {
        "id": 1771,
        "name": "Raichur",
        "stateId": 17
      },
      {
        "id": 1772,
        "name": "Ramanagaram",
        "stateId": 17
      },
      {
        "id": 1773,
        "name": "Ramdurg",
        "stateId": 17
      },
      {
        "id": 1774,
        "name": "Ranibennur",
        "stateId": 17
      },
      {
        "id": 1775,
        "name": "Raybag",
        "stateId": 17
      },
      {
        "id": 1776,
        "name": "Robertsonpet",
        "stateId": 17
      },
      {
        "id": 1777,
        "name": "Ron",
        "stateId": 17
      },
      {
        "id": 1778,
        "name": "Sadalgi",
        "stateId": 17
      },
      {
        "id": 1779,
        "name": "Sagar",
        "stateId": 17
      },
      {
        "id": 1780,
        "name": "Sakleshpur",
        "stateId": 17
      },
      {
        "id": 1781,
        "name": "Saligram",
        "stateId": 17
      },
      {
        "id": 1782,
        "name": "Sandur",
        "stateId": 17
      },
      {
        "id": 1783,
        "name": "Sanivarsante",
        "stateId": 17
      },
      {
        "id": 1784,
        "name": "Sankeshwar",
        "stateId": 17
      },
      {
        "id": 1785,
        "name": "Sargur",
        "stateId": 17
      },
      {
        "id": 1786,
        "name": "Sathyamangala",
        "stateId": 17
      },
      {
        "id": 1787,
        "name": "Saundatti Yellamma",
        "stateId": 17
      },
      {
        "id": 1788,
        "name": "Savanur",
        "stateId": 17
      },
      {
        "id": 1789,
        "name": "Sedam",
        "stateId": 17
      },
      {
        "id": 1790,
        "name": "Shahabad",
        "stateId": 17
      },
      {
        "id": 1791,
        "name": "Shahabad A.C.C.",
        "stateId": 17
      },
      {
        "id": 1792,
        "name": "Shahapur",
        "stateId": 17
      },
      {
        "id": 1793,
        "name": "Shahpur",
        "stateId": 17
      },
      {
        "id": 1794,
        "name": "Shaktinagar",
        "stateId": 17
      },
      {
        "id": 1795,
        "name": "Shiggaon",
        "stateId": 17
      },
      {
        "id": 1796,
        "name": "Shikarpur",
        "stateId": 17
      },
      {
        "id": 1797,
        "name": "Shimoga",
        "stateId": 17
      },
      {
        "id": 1798,
        "name": "Shirhatti",
        "stateId": 17
      },
      {
        "id": 1799,
        "name": "Shorapur",
        "stateId": 17
      },
      {
        "id": 1800,
        "name": "Shravanabelagola",
        "stateId": 17
      },
      {
        "id": 1801,
        "name": "Shrirangapattana",
        "stateId": 17
      },
      {
        "id": 1802,
        "name": "Siddapur",
        "stateId": 17
      },
      {
        "id": 1803,
        "name": "Sidlaghatta",
        "stateId": 17
      },
      {
        "id": 1804,
        "name": "Sindgi",
        "stateId": 17
      },
      {
        "id": 1805,
        "name": "Sindhnur",
        "stateId": 17
      },
      {
        "id": 1806,
        "name": "Sira",
        "stateId": 17
      },
      {
        "id": 1807,
        "name": "Sirakoppa",
        "stateId": 17
      },
      {
        "id": 1808,
        "name": "Sirsi",
        "stateId": 17
      },
      {
        "id": 1809,
        "name": "Siruguppa",
        "stateId": 17
      },
      {
        "id": 1810,
        "name": "Someshwar",
        "stateId": 17
      },
      {
        "id": 1811,
        "name": "Somvarpet",
        "stateId": 17
      },
      {
        "id": 1812,
        "name": "Sorab",
        "stateId": 17
      },
      {
        "id": 1813,
        "name": "Sringeri",
        "stateId": 17
      },
      {
        "id": 1814,
        "name": "Srinivaspur",
        "stateId": 17
      },
      {
        "id": 1815,
        "name": "Sulya",
        "stateId": 17
      },
      {
        "id": 1816,
        "name": "Suntikopa",
        "stateId": 17
      },
      {
        "id": 1817,
        "name": "Talikota",
        "stateId": 17
      },
      {
        "id": 1818,
        "name": "Tarikera",
        "stateId": 17
      },
      {
        "id": 1819,
        "name": "Tekkalakota",
        "stateId": 17
      },
      {
        "id": 1820,
        "name": "Terdal",
        "stateId": 17
      },
      {
        "id": 1821,
        "name": "Thokur",
        "stateId": 17
      },
      {
        "id": 1822,
        "name": "Thumbe",
        "stateId": 17
      },
      {
        "id": 1823,
        "name": "Tiptur",
        "stateId": 17
      },
      {
        "id": 1824,
        "name": "Tirthahalli",
        "stateId": 17
      },
      {
        "id": 1825,
        "name": "Tirumakudal Narsipur",
        "stateId": 17
      },
      {
        "id": 1826,
        "name": "Tonse",
        "stateId": 17
      },
      {
        "id": 1827,
        "name": "Tumkur",
        "stateId": 17
      },
      {
        "id": 1828,
        "name": "Turuvekere",
        "stateId": 17
      },
      {
        "id": 1829,
        "name": "Udupi",
        "stateId": 17
      },
      {
        "id": 1830,
        "name": "Ullal",
        "stateId": 17
      },
      {
        "id": 1831,
        "name": "Uttarahalli",
        "stateId": 17
      },
      {
        "id": 1832,
        "name": "Venkatapura",
        "stateId": 17
      },
      {
        "id": 1833,
        "name": "Vijayapura",
        "stateId": 17
      },
      {
        "id": 1834,
        "name": "Virarajendrapet",
        "stateId": 17
      },
      {
        "id": 1835,
        "name": "Wadi",
        "stateId": 17
      },
      {
        "id": 1836,
        "name": "Wadi A.C.C.",
        "stateId": 17
      },
      {
        "id": 1837,
        "name": "Yadgir",
        "stateId": 17
      },
      {
        "id": 1838,
        "name": "Yelahanka",
        "stateId": 17
      },
      {
        "id": 1839,
        "name": "Yelandur",
        "stateId": 17
      },
      {
        "id": 1840,
        "name": "Yelbarga",
        "stateId": 17
      },
      {
        "id": 1841,
        "name": "Yellapur",
        "stateId": 17
      },
      {
        "id": 1842,
        "name": "Yenagudde",
        "stateId": 17
      },
      {
        "id": 1843,
        "name": "Adimaly",
        "stateId": 19
      },
      {
        "id": 1844,
        "name": "Adoor",
        "stateId": 19
      },
      {
        "id": 1845,
        "name": "Adur",
        "stateId": 19
      },
      {
        "id": 1846,
        "name": "Akathiyur",
        "stateId": 19
      },
      {
        "id": 1847,
        "name": "Alangad",
        "stateId": 19
      },
      {
        "id": 1848,
        "name": "Alappuzha",
        "stateId": 19
      },
      {
        "id": 1849,
        "name": "Aluva",
        "stateId": 19
      },
      {
        "id": 1850,
        "name": "Ancharakandy",
        "stateId": 19
      },
      {
        "id": 1851,
        "name": "Angamaly",
        "stateId": 19
      },
      {
        "id": 1852,
        "name": "Aroor",
        "stateId": 19
      },
      {
        "id": 1853,
        "name": "Arukutti",
        "stateId": 19
      },
      {
        "id": 1854,
        "name": "Attingal",
        "stateId": 19
      },
      {
        "id": 1855,
        "name": "Avinissery",
        "stateId": 19
      },
      {
        "id": 1856,
        "name": "Azhikode North",
        "stateId": 19
      },
      {
        "id": 1857,
        "name": "Azhikode South",
        "stateId": 19
      },
      {
        "id": 1858,
        "name": "Azhiyur",
        "stateId": 19
      },
      {
        "id": 1859,
        "name": "Balussery",
        "stateId": 19
      },
      {
        "id": 1860,
        "name": "Bangramanjeshwar",
        "stateId": 19
      },
      {
        "id": 1861,
        "name": "Beypur",
        "stateId": 19
      },
      {
        "id": 1862,
        "name": "Brahmakulam",
        "stateId": 19
      },
      {
        "id": 1863,
        "name": "Chala",
        "stateId": 19
      },
      {
        "id": 1864,
        "name": "Chalakudi",
        "stateId": 19
      },
      {
        "id": 1865,
        "name": "Changanacheri",
        "stateId": 19
      },
      {
        "id": 1866,
        "name": "Chauwara",
        "stateId": 19
      },
      {
        "id": 1867,
        "name": "Chavakkad",
        "stateId": 19
      },
      {
        "id": 1868,
        "name": "Chelakkara",
        "stateId": 19
      },
      {
        "id": 1869,
        "name": "Chelora",
        "stateId": 19
      },
      {
        "id": 1870,
        "name": "Chendamangalam",
        "stateId": 19
      },
      {
        "id": 1871,
        "name": "Chengamanad",
        "stateId": 19
      },
      {
        "id": 1872,
        "name": "Chengannur",
        "stateId": 19
      },
      {
        "id": 1873,
        "name": "Cheranallur",
        "stateId": 19
      },
      {
        "id": 1874,
        "name": "Cheriyakadavu",
        "stateId": 19
      },
      {
        "id": 1875,
        "name": "Cherthala",
        "stateId": 19
      },
      {
        "id": 1876,
        "name": "Cherukunnu",
        "stateId": 19
      },
      {
        "id": 1877,
        "name": "Cheruthazham",
        "stateId": 19
      },
      {
        "id": 1878,
        "name": "Cheruvannur",
        "stateId": 19
      },
      {
        "id": 1879,
        "name": "Cheruvattur",
        "stateId": 19
      },
      {
        "id": 1880,
        "name": "Chevvur",
        "stateId": 19
      },
      {
        "id": 1881,
        "name": "Chirakkal",
        "stateId": 19
      },
      {
        "id": 1882,
        "name": "Chittur",
        "stateId": 19
      },
      {
        "id": 1883,
        "name": "Chockli",
        "stateId": 19
      },
      {
        "id": 1884,
        "name": "Churnikkara",
        "stateId": 19
      },
      {
        "id": 1885,
        "name": "Dharmadam",
        "stateId": 19
      },
      {
        "id": 1886,
        "name": "Edappal",
        "stateId": 19
      },
      {
        "id": 1887,
        "name": "Edathala",
        "stateId": 19
      },
      {
        "id": 1888,
        "name": "Elayavur",
        "stateId": 19
      },
      {
        "id": 1889,
        "name": "Elur",
        "stateId": 19
      },
      {
        "id": 1890,
        "name": "Eranholi",
        "stateId": 19
      },
      {
        "id": 1891,
        "name": "Erattupetta",
        "stateId": 19
      },
      {
        "id": 1892,
        "name": "Ernakulam",
        "stateId": 19
      },
      {
        "id": 1893,
        "name": "Eruvatti",
        "stateId": 19
      },
      {
        "id": 1894,
        "name": "Ettumanoor",
        "stateId": 19
      },
      {
        "id": 1895,
        "name": "Feroke",
        "stateId": 19
      },
      {
        "id": 1896,
        "name": "Guruvayur",
        "stateId": 19
      },
      {
        "id": 1897,
        "name": "Haripad",
        "stateId": 19
      },
      {
        "id": 1898,
        "name": "Hosabettu",
        "stateId": 19
      },
      {
        "id": 1899,
        "name": "Idukki",
        "stateId": 19
      },
      {
        "id": 1900,
        "name": "Iringaprom",
        "stateId": 19
      },
      {
        "id": 1901,
        "name": "Irinjalakuda",
        "stateId": 19
      },
      {
        "id": 1902,
        "name": "Iriveri",
        "stateId": 19
      },
      {
        "id": 1903,
        "name": "Kadachira",
        "stateId": 19
      },
      {
        "id": 1904,
        "name": "Kadalundi",
        "stateId": 19
      },
      {
        "id": 1905,
        "name": "Kadamakkudy",
        "stateId": 19
      },
      {
        "id": 1906,
        "name": "Kadirur",
        "stateId": 19
      },
      {
        "id": 1907,
        "name": "Kadungallur",
        "stateId": 19
      },
      {
        "id": 1908,
        "name": "Kakkodi",
        "stateId": 19
      },
      {
        "id": 1909,
        "name": "Kalady",
        "stateId": 19
      },
      {
        "id": 1910,
        "name": "Kalamassery",
        "stateId": 19
      },
      {
        "id": 1911,
        "name": "Kalliasseri",
        "stateId": 19
      },
      {
        "id": 1912,
        "name": "Kalpetta",
        "stateId": 19
      },
      {
        "id": 1913,
        "name": "Kanhangad",
        "stateId": 19
      },
      {
        "id": 1914,
        "name": "Kanhirode",
        "stateId": 19
      },
      {
        "id": 1915,
        "name": "Kanjikkuzhi",
        "stateId": 19
      },
      {
        "id": 1916,
        "name": "Kanjikode",
        "stateId": 19
      },
      {
        "id": 1917,
        "name": "Kanjirappalli",
        "stateId": 19
      },
      {
        "id": 1918,
        "name": "Kannadiparamba",
        "stateId": 19
      },
      {
        "id": 1919,
        "name": "Kannangad",
        "stateId": 19
      },
      {
        "id": 1920,
        "name": "Kannapuram",
        "stateId": 19
      },
      {
        "id": 1921,
        "name": "Kannur",
        "stateId": 19
      },
      {
        "id": 1922,
        "name": "Kannur Cantonment",
        "stateId": 19
      },
      {
        "id": 1923,
        "name": "Karunagappally",
        "stateId": 19
      },
      {
        "id": 1924,
        "name": "Karuvamyhuruthy",
        "stateId": 19
      },
      {
        "id": 1925,
        "name": "Kasaragod",
        "stateId": 19
      },
      {
        "id": 1926,
        "name": "Kasargod",
        "stateId": 19
      },
      {
        "id": 1927,
        "name": "Kattappana",
        "stateId": 19
      },
      {
        "id": 1928,
        "name": "Kayamkulam",
        "stateId": 19
      },
      {
        "id": 1929,
        "name": "Kedamangalam",
        "stateId": 19
      },
      {
        "id": 1930,
        "name": "Kochi",
        "stateId": 19
      },
      {
        "id": 1931,
        "name": "Kodamthuruthu",
        "stateId": 19
      },
      {
        "id": 1932,
        "name": "Kodungallur",
        "stateId": 19
      },
      {
        "id": 1933,
        "name": "Koduvally",
        "stateId": 19
      },
      {
        "id": 1934,
        "name": "Koduvayur",
        "stateId": 19
      },
      {
        "id": 1935,
        "name": "Kokkothamangalam",
        "stateId": 19
      },
      {
        "id": 1936,
        "name": "Kolazhy",
        "stateId": 19
      },
      {
        "id": 1937,
        "name": "Kollam",
        "stateId": 19
      },
      {
        "id": 1938,
        "name": "Komalapuram",
        "stateId": 19
      },
      {
        "id": 1939,
        "name": "Koothattukulam",
        "stateId": 19
      },
      {
        "id": 1940,
        "name": "Koratty",
        "stateId": 19
      },
      {
        "id": 1941,
        "name": "Kothamangalam",
        "stateId": 19
      },
      {
        "id": 1942,
        "name": "Kottarakkara",
        "stateId": 19
      },
      {
        "id": 1943,
        "name": "Kottayam",
        "stateId": 19
      },
      {
        "id": 1944,
        "name": "Kottayam Malabar",
        "stateId": 19
      },
      {
        "id": 1945,
        "name": "Kottuvally",
        "stateId": 19
      },
      {
        "id": 1946,
        "name": "Koyilandi",
        "stateId": 19
      },
      {
        "id": 1947,
        "name": "Kozhikode",
        "stateId": 19
      },
      {
        "id": 1948,
        "name": "Kudappanakunnu",
        "stateId": 19
      },
      {
        "id": 1949,
        "name": "Kudlu",
        "stateId": 19
      },
      {
        "id": 1950,
        "name": "Kumarakom",
        "stateId": 19
      },
      {
        "id": 1951,
        "name": "Kumily",
        "stateId": 19
      },
      {
        "id": 1952,
        "name": "Kunnamangalam",
        "stateId": 19
      },
      {
        "id": 1953,
        "name": "Kunnamkulam",
        "stateId": 19
      },
      {
        "id": 1954,
        "name": "Kurikkad",
        "stateId": 19
      },
      {
        "id": 1955,
        "name": "Kurkkanchery",
        "stateId": 19
      },
      {
        "id": 1956,
        "name": "Kuthuparamba",
        "stateId": 19
      },
      {
        "id": 1957,
        "name": "Kuttakulam",
        "stateId": 19
      },
      {
        "id": 1958,
        "name": "Kuttikkattur",
        "stateId": 19
      },
      {
        "id": 1959,
        "name": "Kuttur",
        "stateId": 19
      },
      {
        "id": 1960,
        "name": "Malappuram",
        "stateId": 19
      },
      {
        "id": 1961,
        "name": "Mallappally",
        "stateId": 19
      },
      {
        "id": 1962,
        "name": "Manjeri",
        "stateId": 19
      },
      {
        "id": 1963,
        "name": "Manjeshwar",
        "stateId": 19
      },
      {
        "id": 1964,
        "name": "Mannancherry",
        "stateId": 19
      },
      {
        "id": 1965,
        "name": "Mannar",
        "stateId": 19
      },
      {
        "id": 1966,
        "name": "Mannarakkat",
        "stateId": 19
      },
      {
        "id": 1967,
        "name": "Maradu",
        "stateId": 19
      },
      {
        "id": 1968,
        "name": "Marathakkara",
        "stateId": 19
      },
      {
        "id": 1969,
        "name": "Marutharod",
        "stateId": 19
      },
      {
        "id": 1970,
        "name": "Mattannur",
        "stateId": 19
      },
      {
        "id": 1971,
        "name": "Mavelikara",
        "stateId": 19
      },
      {
        "id": 1972,
        "name": "Mavilayi",
        "stateId": 19
      },
      {
        "id": 1973,
        "name": "Mavur",
        "stateId": 19
      },
      {
        "id": 1974,
        "name": "Methala",
        "stateId": 19
      },
      {
        "id": 1975,
        "name": "Muhamma",
        "stateId": 19
      },
      {
        "id": 1976,
        "name": "Mulavukad",
        "stateId": 19
      },
      {
        "id": 1977,
        "name": "Mundakayam",
        "stateId": 19
      },
      {
        "id": 1978,
        "name": "Munderi",
        "stateId": 19
      },
      {
        "id": 1979,
        "name": "Munnar",
        "stateId": 19
      },
      {
        "id": 1980,
        "name": "Muthakunnam",
        "stateId": 19
      },
      {
        "id": 1981,
        "name": "Muvattupuzha",
        "stateId": 19
      },
      {
        "id": 1982,
        "name": "Muzhappilangad",
        "stateId": 19
      },
      {
        "id": 1983,
        "name": "Nadapuram",
        "stateId": 19
      },
      {
        "id": 1984,
        "name": "Nadathara",
        "stateId": 19
      },
      {
        "id": 1985,
        "name": "Narath",
        "stateId": 19
      },
      {
        "id": 1986,
        "name": "Nattakam",
        "stateId": 19
      },
      {
        "id": 1987,
        "name": "Nedumangad",
        "stateId": 19
      },
      {
        "id": 1988,
        "name": "Nenmenikkara",
        "stateId": 19
      },
      {
        "id": 1989,
        "name": "New Mahe",
        "stateId": 19
      },
      {
        "id": 1990,
        "name": "Neyyattinkara",
        "stateId": 19
      },
      {
        "id": 1991,
        "name": "Nileshwar",
        "stateId": 19
      },
      {
        "id": 1992,
        "name": "Olavanna",
        "stateId": 19
      },
      {
        "id": 1993,
        "name": "Ottapalam",
        "stateId": 19
      },
      {
        "id": 1994,
        "name": "Ottappalam",
        "stateId": 19
      },
      {
        "id": 1995,
        "name": "Paduvilayi",
        "stateId": 19
      },
      {
        "id": 1996,
        "name": "Palai",
        "stateId": 19
      },
      {
        "id": 1997,
        "name": "Palakkad",
        "stateId": 19
      },
      {
        "id": 1998,
        "name": "Palayad",
        "stateId": 19
      },
      {
        "id": 1999,
        "name": "Palissery",
        "stateId": 19
      },
      {
        "id": 2000,
        "name": "Pallikkunnu",
        "stateId": 19
      },
      {
        "id": 2001,
        "name": "Paluvai",
        "stateId": 19
      },
      {
        "id": 2002,
        "name": "Panniyannur",
        "stateId": 19
      },
      {
        "id": 2003,
        "name": "Pantalam",
        "stateId": 19
      },
      {
        "id": 2004,
        "name": "Panthiramkavu",
        "stateId": 19
      },
      {
        "id": 2005,
        "name": "Panur",
        "stateId": 19
      },
      {
        "id": 2006,
        "name": "Pappinisseri",
        "stateId": 19
      },
      {
        "id": 2007,
        "name": "Parassala",
        "stateId": 19
      },
      {
        "id": 2008,
        "name": "Paravur",
        "stateId": 19
      },
      {
        "id": 2009,
        "name": "Pathanamthitta",
        "stateId": 19
      },
      {
        "id": 2010,
        "name": "Pathanapuram",
        "stateId": 19
      },
      {
        "id": 2011,
        "name": "Pathiriyad",
        "stateId": 19
      },
      {
        "id": 2012,
        "name": "Pattambi",
        "stateId": 19
      },
      {
        "id": 2013,
        "name": "Pattiom",
        "stateId": 19
      },
      {
        "id": 2014,
        "name": "Pavaratty",
        "stateId": 19
      },
      {
        "id": 2015,
        "name": "Payyannur",
        "stateId": 19
      },
      {
        "id": 2016,
        "name": "Peermade",
        "stateId": 19
      },
      {
        "id": 2017,
        "name": "Perakam",
        "stateId": 19
      },
      {
        "id": 2018,
        "name": "Peralasseri",
        "stateId": 19
      },
      {
        "id": 2019,
        "name": "Peringathur",
        "stateId": 19
      },
      {
        "id": 2020,
        "name": "Perinthalmanna",
        "stateId": 19
      },
      {
        "id": 2021,
        "name": "Perole",
        "stateId": 19
      },
      {
        "id": 2022,
        "name": "Perumanna",
        "stateId": 19
      },
      {
        "id": 2023,
        "name": "Perumbaikadu",
        "stateId": 19
      },
      {
        "id": 2024,
        "name": "Perumbavoor",
        "stateId": 19
      },
      {
        "id": 2025,
        "name": "Pinarayi",
        "stateId": 19
      },
      {
        "id": 2026,
        "name": "Piravam",
        "stateId": 19
      },
      {
        "id": 2027,
        "name": "Ponnani",
        "stateId": 19
      },
      {
        "id": 2028,
        "name": "Pottore",
        "stateId": 19
      },
      {
        "id": 2029,
        "name": "Pudukad",
        "stateId": 19
      },
      {
        "id": 2030,
        "name": "Punalur",
        "stateId": 19
      },
      {
        "id": 2031,
        "name": "Puranattukara",
        "stateId": 19
      },
      {
        "id": 2032,
        "name": "Puthunagaram",
        "stateId": 19
      },
      {
        "id": 2033,
        "name": "Puthuppariyaram",
        "stateId": 19
      },
      {
        "id": 2034,
        "name": "Puzhathi",
        "stateId": 19
      },
      {
        "id": 2035,
        "name": "Ramanattukara",
        "stateId": 19
      },
      {
        "id": 2036,
        "name": "Shoranur",
        "stateId": 19
      },
      {
        "id": 2037,
        "name": "Sultans Battery",
        "stateId": 19
      },
      {
        "id": 2038,
        "name": "Sulthan Bathery",
        "stateId": 19
      },
      {
        "id": 2039,
        "name": "Talipparamba",
        "stateId": 19
      },
      {
        "id": 2040,
        "name": "Thaikkad",
        "stateId": 19
      },
      {
        "id": 2041,
        "name": "Thalassery",
        "stateId": 19
      },
      {
        "id": 2042,
        "name": "Thannirmukkam",
        "stateId": 19
      },
      {
        "id": 2043,
        "name": "Theyyalingal",
        "stateId": 19
      },
      {
        "id": 2044,
        "name": "Thiruvalla",
        "stateId": 19
      },
      {
        "id": 2045,
        "name": "Thiruvananthapuram",
        "stateId": 19
      },
      {
        "id": 2046,
        "name": "Thiruvankulam",
        "stateId": 19
      },
      {
        "id": 2047,
        "name": "Thodupuzha",
        "stateId": 19
      },
      {
        "id": 2048,
        "name": "Thottada",
        "stateId": 19
      },
      {
        "id": 2049,
        "name": "Thrippunithura",
        "stateId": 19
      },
      {
        "id": 2050,
        "name": "Thrissur",
        "stateId": 19
      },
      {
        "id": 2051,
        "name": "Tirur",
        "stateId": 19
      },
      {
        "id": 2052,
        "name": "Udma",
        "stateId": 19
      },
      {
        "id": 2053,
        "name": "Vadakara",
        "stateId": 19
      },
      {
        "id": 2054,
        "name": "Vaikam",
        "stateId": 19
      },
      {
        "id": 2055,
        "name": "Valapattam",
        "stateId": 19
      },
      {
        "id": 2056,
        "name": "Vallachira",
        "stateId": 19
      },
      {
        "id": 2057,
        "name": "Varam",
        "stateId": 19
      },
      {
        "id": 2058,
        "name": "Varappuzha",
        "stateId": 19
      },
      {
        "id": 2059,
        "name": "Varkala",
        "stateId": 19
      },
      {
        "id": 2060,
        "name": "Vayalar",
        "stateId": 19
      },
      {
        "id": 2061,
        "name": "Vazhakkala",
        "stateId": 19
      },
      {
        "id": 2062,
        "name": "Venmanad",
        "stateId": 19
      },
      {
        "id": 2063,
        "name": "Villiappally",
        "stateId": 19
      },
      {
        "id": 2064,
        "name": "Wayanad",
        "stateId": 19
      },
      {
        "id": 2065,
        "name": "Agethi",
        "stateId": 20
      },
      {
        "id": 2066,
        "name": "Amini",
        "stateId": 20
      },
      {
        "id": 2067,
        "name": "Androth Island",
        "stateId": 20
      },
      {
        "id": 2068,
        "name": "Kavaratti",
        "stateId": 20
      },
      {
        "id": 2069,
        "name": "Minicoy",
        "stateId": 20
      },
      {
        "id": 2070,
        "name": "Agar",
        "stateId": 21
      },
      {
        "id": 2071,
        "name": "Ajaigarh",
        "stateId": 21
      },
      {
        "id": 2072,
        "name": "Akoda",
        "stateId": 21
      },
      {
        "id": 2073,
        "name": "Akodia",
        "stateId": 21
      },
      {
        "id": 2074,
        "name": "Alampur",
        "stateId": 21
      },
      {
        "id": 2075,
        "name": "Alirajpur",
        "stateId": 21
      },
      {
        "id": 2076,
        "name": "Alot",
        "stateId": 21
      },
      {
        "id": 2077,
        "name": "Amanganj",
        "stateId": 21
      },
      {
        "id": 2078,
        "name": "Amarkantak",
        "stateId": 21
      },
      {
        "id": 2079,
        "name": "Amarpatan",
        "stateId": 21
      },
      {
        "id": 2080,
        "name": "Amarwara",
        "stateId": 21
      },
      {
        "id": 2081,
        "name": "Ambada",
        "stateId": 21
      },
      {
        "id": 2082,
        "name": "Ambah",
        "stateId": 21
      },
      {
        "id": 2083,
        "name": "Amla",
        "stateId": 21
      },
      {
        "id": 2084,
        "name": "Amlai",
        "stateId": 21
      },
      {
        "id": 2085,
        "name": "Anjad",
        "stateId": 21
      },
      {
        "id": 2086,
        "name": "Antri",
        "stateId": 21
      },
      {
        "id": 2087,
        "name": "Anuppur",
        "stateId": 21
      },
      {
        "id": 2088,
        "name": "Aron",
        "stateId": 21
      },
      {
        "id": 2089,
        "name": "Ashoknagar",
        "stateId": 21
      },
      {
        "id": 2090,
        "name": "Ashta",
        "stateId": 21
      },
      {
        "id": 2091,
        "name": "Babai",
        "stateId": 21
      },
      {
        "id": 2092,
        "name": "Bada Malhera",
        "stateId": 21
      },
      {
        "id": 2093,
        "name": "Badagaon",
        "stateId": 21
      },
      {
        "id": 2094,
        "name": "Badagoan",
        "stateId": 21
      },
      {
        "id": 2095,
        "name": "Badarwas",
        "stateId": 21
      },
      {
        "id": 2096,
        "name": "Badawada",
        "stateId": 21
      },
      {
        "id": 2097,
        "name": "Badi",
        "stateId": 21
      },
      {
        "id": 2098,
        "name": "Badkuhi",
        "stateId": 21
      },
      {
        "id": 2099,
        "name": "Badnagar",
        "stateId": 21
      },
      {
        "id": 2100,
        "name": "Badnawar",
        "stateId": 21
      },
      {
        "id": 2101,
        "name": "Badod",
        "stateId": 21
      },
      {
        "id": 2102,
        "name": "Badoda",
        "stateId": 21
      },
      {
        "id": 2103,
        "name": "Badra",
        "stateId": 21
      },
      {
        "id": 2104,
        "name": "Bagh",
        "stateId": 21
      },
      {
        "id": 2105,
        "name": "Bagli",
        "stateId": 21
      },
      {
        "id": 2106,
        "name": "Baihar",
        "stateId": 21
      },
      {
        "id": 2107,
        "name": "Baikunthpur",
        "stateId": 21
      },
      {
        "id": 2108,
        "name": "Bakswaha",
        "stateId": 21
      },
      {
        "id": 2109,
        "name": "Balaghat",
        "stateId": 21
      },
      {
        "id": 2110,
        "name": "Baldeogarh",
        "stateId": 21
      },
      {
        "id": 2111,
        "name": "Bamaniya",
        "stateId": 21
      },
      {
        "id": 2112,
        "name": "Bamhani",
        "stateId": 21
      },
      {
        "id": 2113,
        "name": "Bamor",
        "stateId": 21
      },
      {
        "id": 2114,
        "name": "Bamora",
        "stateId": 21
      },
      {
        "id": 2115,
        "name": "Banda",
        "stateId": 21
      },
      {
        "id": 2116,
        "name": "Bangawan",
        "stateId": 21
      },
      {
        "id": 2117,
        "name": "Bansatar Kheda",
        "stateId": 21
      },
      {
        "id": 2118,
        "name": "Baraily",
        "stateId": 21
      },
      {
        "id": 2119,
        "name": "Barela",
        "stateId": 21
      },
      {
        "id": 2120,
        "name": "Barghat",
        "stateId": 21
      },
      {
        "id": 2121,
        "name": "Bargi",
        "stateId": 21
      },
      {
        "id": 2122,
        "name": "Barhi",
        "stateId": 21
      },
      {
        "id": 2123,
        "name": "Barigarh",
        "stateId": 21
      },
      {
        "id": 2124,
        "name": "Barwaha",
        "stateId": 21
      },
      {
        "id": 2125,
        "name": "Barwani",
        "stateId": 21
      },
      {
        "id": 2126,
        "name": "Basoda",
        "stateId": 21
      },
      {
        "id": 2127,
        "name": "Begamganj",
        "stateId": 21
      },
      {
        "id": 2128,
        "name": "Beohari",
        "stateId": 21
      },
      {
        "id": 2129,
        "name": "Berasia",
        "stateId": 21
      },
      {
        "id": 2130,
        "name": "Betma",
        "stateId": 21
      },
      {
        "id": 2131,
        "name": "Betul",
        "stateId": 21
      },
      {
        "id": 2132,
        "name": "Betul Bazar",
        "stateId": 21
      },
      {
        "id": 2133,
        "name": "Bhainsdehi",
        "stateId": 21
      },
      {
        "id": 2134,
        "name": "Bhamodi",
        "stateId": 21
      },
      {
        "id": 2135,
        "name": "Bhander",
        "stateId": 21
      },
      {
        "id": 2136,
        "name": "Bhanpura",
        "stateId": 21
      },
      {
        "id": 2137,
        "name": "Bharveli",
        "stateId": 21
      },
      {
        "id": 2138,
        "name": "Bhaurasa",
        "stateId": 21
      },
      {
        "id": 2139,
        "name": "Bhavra",
        "stateId": 21
      },
      {
        "id": 2140,
        "name": "Bhedaghat",
        "stateId": 21
      },
      {
        "id": 2141,
        "name": "Bhikangaon",
        "stateId": 21
      },
      {
        "id": 2142,
        "name": "Bhilakhedi",
        "stateId": 21
      },
      {
        "id": 2143,
        "name": "Bhind",
        "stateId": 21
      },
      {
        "id": 2144,
        "name": "Bhitarwar",
        "stateId": 21
      },
      {
        "id": 2145,
        "name": "Bhopal",
        "stateId": 21
      },
      {
        "id": 2146,
        "name": "Bhuibandh",
        "stateId": 21
      },
      {
        "id": 2147,
        "name": "Biaora",
        "stateId": 21
      },
      {
        "id": 2148,
        "name": "Bijawar",
        "stateId": 21
      },
      {
        "id": 2149,
        "name": "Bijeypur",
        "stateId": 21
      },
      {
        "id": 2150,
        "name": "Bijrauni",
        "stateId": 21
      },
      {
        "id": 2151,
        "name": "Bijuri",
        "stateId": 21
      },
      {
        "id": 2152,
        "name": "Bilaua",
        "stateId": 21
      },
      {
        "id": 2153,
        "name": "Bilpura",
        "stateId": 21
      },
      {
        "id": 2154,
        "name": "Bina Railway Colony",
        "stateId": 21
      },
      {
        "id": 2155,
        "name": "Bina-Etawa",
        "stateId": 21
      },
      {
        "id": 2156,
        "name": "Birsinghpur",
        "stateId": 21
      },
      {
        "id": 2157,
        "name": "Boda",
        "stateId": 21
      },
      {
        "id": 2158,
        "name": "Budhni",
        "stateId": 21
      },
      {
        "id": 2159,
        "name": "Burhanpur",
        "stateId": 21
      },
      {
        "id": 2160,
        "name": "Burhar",
        "stateId": 21
      },
      {
        "id": 2161,
        "name": "Chachaura Binaganj",
        "stateId": 21
      },
      {
        "id": 2162,
        "name": "Chakghat",
        "stateId": 21
      },
      {
        "id": 2163,
        "name": "Chandameta Butar",
        "stateId": 21
      },
      {
        "id": 2164,
        "name": "Chanderi",
        "stateId": 21
      },
      {
        "id": 2165,
        "name": "Chandia",
        "stateId": 21
      },
      {
        "id": 2166,
        "name": "Chandla",
        "stateId": 21
      },
      {
        "id": 2167,
        "name": "Chaurai Khas",
        "stateId": 21
      },
      {
        "id": 2168,
        "name": "Chhatarpur",
        "stateId": 21
      },
      {
        "id": 2169,
        "name": "Chhindwara",
        "stateId": 21
      },
      {
        "id": 2170,
        "name": "Chhota Chhindwara",
        "stateId": 21
      },
      {
        "id": 2171,
        "name": "Chichli",
        "stateId": 21
      },
      {
        "id": 2172,
        "name": "Chitrakut",
        "stateId": 21
      },
      {
        "id": 2173,
        "name": "Churhat",
        "stateId": 21
      },
      {
        "id": 2174,
        "name": "Daboh",
        "stateId": 21
      },
      {
        "id": 2175,
        "name": "Dabra",
        "stateId": 21
      },
      {
        "id": 2176,
        "name": "Damoh",
        "stateId": 21
      },
      {
        "id": 2177,
        "name": "Damua",
        "stateId": 21
      },
      {
        "id": 2178,
        "name": "Datia",
        "stateId": 21
      },
      {
        "id": 2179,
        "name": "Deodara",
        "stateId": 21
      },
      {
        "id": 2180,
        "name": "Deori",
        "stateId": 21
      },
      {
        "id": 2181,
        "name": "Deori Khas",
        "stateId": 21
      },
      {
        "id": 2182,
        "name": "Depalpur",
        "stateId": 21
      },
      {
        "id": 2183,
        "name": "Devendranagar",
        "stateId": 21
      },
      {
        "id": 2184,
        "name": "Devhara",
        "stateId": 21
      },
      {
        "id": 2185,
        "name": "Dewas",
        "stateId": 21
      },
      {
        "id": 2186,
        "name": "Dhamnod",
        "stateId": 21
      },
      {
        "id": 2187,
        "name": "Dhana",
        "stateId": 21
      },
      {
        "id": 2188,
        "name": "Dhanpuri",
        "stateId": 21
      },
      {
        "id": 2189,
        "name": "Dhar",
        "stateId": 21
      },
      {
        "id": 2190,
        "name": "Dharampuri",
        "stateId": 21
      },
      {
        "id": 2191,
        "name": "Dighawani",
        "stateId": 21
      },
      {
        "id": 2192,
        "name": "Diken",
        "stateId": 21
      },
      {
        "id": 2193,
        "name": "Dindori",
        "stateId": 21
      },
      {
        "id": 2194,
        "name": "Dola",
        "stateId": 21
      },
      {
        "id": 2195,
        "name": "Dumar Kachhar",
        "stateId": 21
      },
      {
        "id": 2196,
        "name": "Dungariya Chhapara",
        "stateId": 21
      },
      {
        "id": 2197,
        "name": "Gadarwara",
        "stateId": 21
      },
      {
        "id": 2198,
        "name": "Gairatganj",
        "stateId": 21
      },
      {
        "id": 2199,
        "name": "Gandhi Sagar Hydel Colony",
        "stateId": 21
      },
      {
        "id": 2200,
        "name": "Ganjbasoda",
        "stateId": 21
      },
      {
        "id": 2201,
        "name": "Garhakota",
        "stateId": 21
      },
      {
        "id": 2202,
        "name": "Garhi Malhara",
        "stateId": 21
      },
      {
        "id": 2203,
        "name": "Garoth",
        "stateId": 21
      },
      {
        "id": 2204,
        "name": "Gautapura",
        "stateId": 21
      },
      {
        "id": 2205,
        "name": "Ghansor",
        "stateId": 21
      },
      {
        "id": 2206,
        "name": "Ghuwara",
        "stateId": 21
      },
      {
        "id": 2207,
        "name": "Gogaon",
        "stateId": 21
      },
      {
        "id": 2208,
        "name": "Gogapur",
        "stateId": 21
      },
      {
        "id": 2209,
        "name": "Gohad",
        "stateId": 21
      },
      {
        "id": 2210,
        "name": "Gormi",
        "stateId": 21
      },
      {
        "id": 2211,
        "name": "Govindgarh",
        "stateId": 21
      },
      {
        "id": 2212,
        "name": "Guna",
        "stateId": 21
      },
      {
        "id": 2213,
        "name": "Gurh",
        "stateId": 21
      },
      {
        "id": 2214,
        "name": "Gwalior",
        "stateId": 21
      },
      {
        "id": 2215,
        "name": "Hanumana",
        "stateId": 21
      },
      {
        "id": 2216,
        "name": "Harda",
        "stateId": 21
      },
      {
        "id": 2217,
        "name": "Harpalpur",
        "stateId": 21
      },
      {
        "id": 2218,
        "name": "Harrai",
        "stateId": 21
      },
      {
        "id": 2219,
        "name": "Harsud",
        "stateId": 21
      },
      {
        "id": 2220,
        "name": "Hatod",
        "stateId": 21
      },
      {
        "id": 2221,
        "name": "Hatpipalya",
        "stateId": 21
      },
      {
        "id": 2222,
        "name": "Hatta",
        "stateId": 21
      },
      {
        "id": 2223,
        "name": "Hindoria",
        "stateId": 21
      },
      {
        "id": 2224,
        "name": "Hirapur",
        "stateId": 21
      },
      {
        "id": 2225,
        "name": "Hoshangabad",
        "stateId": 21
      },
      {
        "id": 2226,
        "name": "Ichhawar",
        "stateId": 21
      },
      {
        "id": 2227,
        "name": "Iklehra",
        "stateId": 21
      },
      {
        "id": 2228,
        "name": "Indergarh",
        "stateId": 21
      },
      {
        "id": 2229,
        "name": "Indore",
        "stateId": 21
      },
      {
        "id": 2230,
        "name": "Isagarh",
        "stateId": 21
      },
      {
        "id": 2231,
        "name": "Itarsi",
        "stateId": 21
      },
      {
        "id": 2232,
        "name": "Jabalpur",
        "stateId": 21
      },
      {
        "id": 2233,
        "name": "Jabalpur Cantonment",
        "stateId": 21
      },
      {
        "id": 2234,
        "name": "Jabalpur G.C.F",
        "stateId": 21
      },
      {
        "id": 2235,
        "name": "Jaisinghnagar",
        "stateId": 21
      },
      {
        "id": 2236,
        "name": "Jaithari",
        "stateId": 21
      },
      {
        "id": 2237,
        "name": "Jaitwara",
        "stateId": 21
      },
      {
        "id": 2238,
        "name": "Jamai",
        "stateId": 21
      },
      {
        "id": 2239,
        "name": "Jaora",
        "stateId": 21
      },
      {
        "id": 2240,
        "name": "Jatachhapar",
        "stateId": 21
      },
      {
        "id": 2241,
        "name": "Jatara",
        "stateId": 21
      },
      {
        "id": 2242,
        "name": "Jawad",
        "stateId": 21
      },
      {
        "id": 2243,
        "name": "Jawar",
        "stateId": 21
      },
      {
        "id": 2244,
        "name": "Jeronkhalsa",
        "stateId": 21
      },
      {
        "id": 2245,
        "name": "Jhabua",
        "stateId": 21
      },
      {
        "id": 2246,
        "name": "Jhundpura",
        "stateId": 21
      },
      {
        "id": 2247,
        "name": "Jiran",
        "stateId": 21
      },
      {
        "id": 2248,
        "name": "Jirapur",
        "stateId": 21
      },
      {
        "id": 2249,
        "name": "Jobat",
        "stateId": 21
      },
      {
        "id": 2250,
        "name": "Joura",
        "stateId": 21
      },
      {
        "id": 2251,
        "name": "Kailaras",
        "stateId": 21
      },
      {
        "id": 2252,
        "name": "Kaimur",
        "stateId": 21
      },
      {
        "id": 2253,
        "name": "Kakarhati",
        "stateId": 21
      },
      {
        "id": 2254,
        "name": "Kalichhapar",
        "stateId": 21
      },
      {
        "id": 2255,
        "name": "Kanad",
        "stateId": 21
      },
      {
        "id": 2256,
        "name": "Kannod",
        "stateId": 21
      },
      {
        "id": 2257,
        "name": "Kantaphod",
        "stateId": 21
      },
      {
        "id": 2258,
        "name": "Kareli",
        "stateId": 21
      },
      {
        "id": 2259,
        "name": "Karera",
        "stateId": 21
      },
      {
        "id": 2260,
        "name": "Kari",
        "stateId": 21
      },
      {
        "id": 2261,
        "name": "Karnawad",
        "stateId": 21
      },
      {
        "id": 2262,
        "name": "Karrapur",
        "stateId": 21
      },
      {
        "id": 2263,
        "name": "Kasrawad",
        "stateId": 21
      },
      {
        "id": 2264,
        "name": "Katangi",
        "stateId": 21
      },
      {
        "id": 2265,
        "name": "Katni",
        "stateId": 21
      },
      {
        "id": 2266,
        "name": "Kelhauri",
        "stateId": 21
      },
      {
        "id": 2267,
        "name": "Khachrod",
        "stateId": 21
      },
      {
        "id": 2268,
        "name": "Khajuraho",
        "stateId": 21
      },
      {
        "id": 2269,
        "name": "Khamaria",
        "stateId": 21
      },
      {
        "id": 2270,
        "name": "Khand",
        "stateId": 21
      },
      {
        "id": 2271,
        "name": "Khandwa",
        "stateId": 21
      },
      {
        "id": 2272,
        "name": "Khaniyadhana",
        "stateId": 21
      },
      {
        "id": 2273,
        "name": "Khargapur",
        "stateId": 21
      },
      {
        "id": 2274,
        "name": "Khargone",
        "stateId": 21
      },
      {
        "id": 2275,
        "name": "Khategaon",
        "stateId": 21
      },
      {
        "id": 2276,
        "name": "Khetia",
        "stateId": 21
      },
      {
        "id": 2277,
        "name": "Khilchipur",
        "stateId": 21
      },
      {
        "id": 2278,
        "name": "Khirkiya",
        "stateId": 21
      },
      {
        "id": 2279,
        "name": "Khujner",
        "stateId": 21
      },
      {
        "id": 2280,
        "name": "Khurai",
        "stateId": 21
      },
      {
        "id": 2281,
        "name": "Kolaras",
        "stateId": 21
      },
      {
        "id": 2282,
        "name": "Kotar",
        "stateId": 21
      },
      {
        "id": 2283,
        "name": "Kothi",
        "stateId": 21
      },
      {
        "id": 2284,
        "name": "Kotma",
        "stateId": 21
      },
      {
        "id": 2285,
        "name": "Kukshi",
        "stateId": 21
      },
      {
        "id": 2286,
        "name": "Kumbhraj",
        "stateId": 21
      },
      {
        "id": 2287,
        "name": "Kurwai",
        "stateId": 21
      },
      {
        "id": 2288,
        "name": "Lahar",
        "stateId": 21
      },
      {
        "id": 2289,
        "name": "Lakhnadon",
        "stateId": 21
      },
      {
        "id": 2290,
        "name": "Lateri",
        "stateId": 21
      },
      {
        "id": 2291,
        "name": "Laundi",
        "stateId": 21
      },
      {
        "id": 2292,
        "name": "Lidhora Khas",
        "stateId": 21
      },
      {
        "id": 2293,
        "name": "Lodhikheda",
        "stateId": 21
      },
      {
        "id": 2294,
        "name": "Loharda",
        "stateId": 21
      },
      {
        "id": 2295,
        "name": "Machalpur",
        "stateId": 21
      },
      {
        "id": 2296,
        "name": "Madhogarh",
        "stateId": 21
      },
      {
        "id": 2297,
        "name": "Maharajpur",
        "stateId": 21
      },
      {
        "id": 2298,
        "name": "Maheshwar",
        "stateId": 21
      },
      {
        "id": 2299,
        "name": "Mahidpur",
        "stateId": 21
      },
      {
        "id": 2300,
        "name": "Maihar",
        "stateId": 21
      },
      {
        "id": 2301,
        "name": "Majholi",
        "stateId": 21
      },
      {
        "id": 2302,
        "name": "Makronia",
        "stateId": 21
      },
      {
        "id": 2303,
        "name": "Maksi",
        "stateId": 21
      },
      {
        "id": 2304,
        "name": "Malaj Khand",
        "stateId": 21
      },
      {
        "id": 2305,
        "name": "Malanpur",
        "stateId": 21
      },
      {
        "id": 2306,
        "name": "Malhargarh",
        "stateId": 21
      },
      {
        "id": 2307,
        "name": "Manasa",
        "stateId": 21
      },
      {
        "id": 2308,
        "name": "Manawar",
        "stateId": 21
      },
      {
        "id": 2309,
        "name": "Mandav",
        "stateId": 21
      },
      {
        "id": 2310,
        "name": "Mandideep",
        "stateId": 21
      },
      {
        "id": 2311,
        "name": "Mandla",
        "stateId": 21
      },
      {
        "id": 2312,
        "name": "Mandleshwar",
        "stateId": 21
      },
      {
        "id": 2313,
        "name": "Mandsaur",
        "stateId": 21
      },
      {
        "id": 2314,
        "name": "Manegaon",
        "stateId": 21
      },
      {
        "id": 2315,
        "name": "Mangawan",
        "stateId": 21
      },
      {
        "id": 2316,
        "name": "Manglaya Sadak",
        "stateId": 21
      },
      {
        "id": 2317,
        "name": "Manpur",
        "stateId": 21
      },
      {
        "id": 2318,
        "name": "Mau",
        "stateId": 21
      },
      {
        "id": 2319,
        "name": "Mauganj",
        "stateId": 21
      },
      {
        "id": 2320,
        "name": "Meghnagar",
        "stateId": 21
      },
      {
        "id": 2321,
        "name": "Mehara Gaon",
        "stateId": 21
      },
      {
        "id": 2322,
        "name": "Mehgaon",
        "stateId": 21
      },
      {
        "id": 2323,
        "name": "Mhaugaon",
        "stateId": 21
      },
      {
        "id": 2324,
        "name": "Mhow",
        "stateId": 21
      },
      {
        "id": 2325,
        "name": "Mihona",
        "stateId": 21
      },
      {
        "id": 2326,
        "name": "Mohgaon",
        "stateId": 21
      },
      {
        "id": 2327,
        "name": "Morar",
        "stateId": 21
      },
      {
        "id": 2328,
        "name": "Morena",
        "stateId": 21
      },
      {
        "id": 2329,
        "name": "Morwa",
        "stateId": 21
      },
      {
        "id": 2330,
        "name": "Multai",
        "stateId": 21
      },
      {
        "id": 2331,
        "name": "Mundi",
        "stateId": 21
      },
      {
        "id": 2332,
        "name": "Mungaoli",
        "stateId": 21
      },
      {
        "id": 2333,
        "name": "Murwara",
        "stateId": 21
      },
      {
        "id": 2334,
        "name": "Nagda",
        "stateId": 21
      },
      {
        "id": 2335,
        "name": "Nagod",
        "stateId": 21
      },
      {
        "id": 2336,
        "name": "Nagri",
        "stateId": 21
      },
      {
        "id": 2337,
        "name": "Naigarhi",
        "stateId": 21
      },
      {
        "id": 2338,
        "name": "Nainpur",
        "stateId": 21
      },
      {
        "id": 2339,
        "name": "Nalkheda",
        "stateId": 21
      },
      {
        "id": 2340,
        "name": "Namli",
        "stateId": 21
      },
      {
        "id": 2341,
        "name": "Narayangarh",
        "stateId": 21
      },
      {
        "id": 2342,
        "name": "Narsimhapur",
        "stateId": 21
      },
      {
        "id": 2343,
        "name": "Narsingarh",
        "stateId": 21
      },
      {
        "id": 2344,
        "name": "Narsinghpur",
        "stateId": 21
      },
      {
        "id": 2345,
        "name": "Narwar",
        "stateId": 21
      },
      {
        "id": 2346,
        "name": "Nasrullaganj",
        "stateId": 21
      },
      {
        "id": 2347,
        "name": "Naudhia",
        "stateId": 21
      },
      {
        "id": 2348,
        "name": "Naugaon",
        "stateId": 21
      },
      {
        "id": 2349,
        "name": "Naurozabad",
        "stateId": 21
      },
      {
        "id": 2350,
        "name": "Neemuch",
        "stateId": 21
      },
      {
        "id": 2351,
        "name": "Nepa Nagar",
        "stateId": 21
      },
      {
        "id": 2352,
        "name": "Neuton Chikhli Kalan",
        "stateId": 21
      },
      {
        "id": 2353,
        "name": "Nimach",
        "stateId": 21
      },
      {
        "id": 2354,
        "name": "Niwari",
        "stateId": 21
      },
      {
        "id": 2355,
        "name": "Obedullaganj",
        "stateId": 21
      },
      {
        "id": 2356,
        "name": "Omkareshwar",
        "stateId": 21
      },
      {
        "id": 2357,
        "name": "Orachha",
        "stateId": 21
      },
      {
        "id": 2358,
        "name": "Ordinance Factory Itarsi",
        "stateId": 21
      },
      {
        "id": 2359,
        "name": "Pachmarhi",
        "stateId": 21
      },
      {
        "id": 2360,
        "name": "Pachmarhi Cantonment",
        "stateId": 21
      },
      {
        "id": 2361,
        "name": "Pachore",
        "stateId": 21
      },
      {
        "id": 2362,
        "name": "Palchorai",
        "stateId": 21
      },
      {
        "id": 2363,
        "name": "Palda",
        "stateId": 21
      },
      {
        "id": 2364,
        "name": "Palera",
        "stateId": 21
      },
      {
        "id": 2365,
        "name": "Pali",
        "stateId": 21
      },
      {
        "id": 2366,
        "name": "Panagar",
        "stateId": 21
      },
      {
        "id": 2367,
        "name": "Panara",
        "stateId": 21
      },
      {
        "id": 2368,
        "name": "Pandaria",
        "stateId": 21
      },
      {
        "id": 2369,
        "name": "Pandhana",
        "stateId": 21
      },
      {
        "id": 2370,
        "name": "Pandhurna",
        "stateId": 21
      },
      {
        "id": 2371,
        "name": "Panna",
        "stateId": 21
      },
      {
        "id": 2372,
        "name": "Pansemal",
        "stateId": 21
      },
      {
        "id": 2373,
        "name": "Parasia",
        "stateId": 21
      },
      {
        "id": 2374,
        "name": "Pasan",
        "stateId": 21
      },
      {
        "id": 2375,
        "name": "Patan",
        "stateId": 21
      },
      {
        "id": 2376,
        "name": "Patharia",
        "stateId": 21
      },
      {
        "id": 2377,
        "name": "Pawai",
        "stateId": 21
      },
      {
        "id": 2378,
        "name": "Petlawad",
        "stateId": 21
      },
      {
        "id": 2379,
        "name": "Phuph Kalan",
        "stateId": 21
      },
      {
        "id": 2380,
        "name": "Pichhore",
        "stateId": 21
      },
      {
        "id": 2381,
        "name": "Pipariya",
        "stateId": 21
      },
      {
        "id": 2382,
        "name": "Pipliya Mandi",
        "stateId": 21
      },
      {
        "id": 2383,
        "name": "Piploda",
        "stateId": 21
      },
      {
        "id": 2384,
        "name": "Pithampur",
        "stateId": 21
      },
      {
        "id": 2385,
        "name": "Polay Kalan",
        "stateId": 21
      },
      {
        "id": 2386,
        "name": "Porsa",
        "stateId": 21
      },
      {
        "id": 2387,
        "name": "Prithvipur",
        "stateId": 21
      },
      {
        "id": 2388,
        "name": "Raghogarh",
        "stateId": 21
      },
      {
        "id": 2389,
        "name": "Rahatgarh",
        "stateId": 21
      },
      {
        "id": 2390,
        "name": "Raisen",
        "stateId": 21
      },
      {
        "id": 2391,
        "name": "Rajakhedi",
        "stateId": 21
      },
      {
        "id": 2392,
        "name": "Rajgarh",
        "stateId": 21
      },
      {
        "id": 2393,
        "name": "Rajnagar",
        "stateId": 21
      },
      {
        "id": 2394,
        "name": "Rajpur",
        "stateId": 21
      },
      {
        "id": 2395,
        "name": "Rampur Baghelan",
        "stateId": 21
      },
      {
        "id": 2396,
        "name": "Rampur Naikin",
        "stateId": 21
      },
      {
        "id": 2397,
        "name": "Rampura",
        "stateId": 21
      },
      {
        "id": 2398,
        "name": "Ranapur",
        "stateId": 21
      },
      {
        "id": 2399,
        "name": "Ranipura",
        "stateId": 21
      },
      {
        "id": 2400,
        "name": "Ratangarh",
        "stateId": 21
      },
      {
        "id": 2401,
        "name": "Ratlam",
        "stateId": 21
      },
      {
        "id": 2402,
        "name": "Ratlam Kasba",
        "stateId": 21
      },
      {
        "id": 2403,
        "name": "Rau",
        "stateId": 21
      },
      {
        "id": 2404,
        "name": "Rehli",
        "stateId": 21
      },
      {
        "id": 2405,
        "name": "Rehti",
        "stateId": 21
      },
      {
        "id": 2406,
        "name": "Rewa",
        "stateId": 21
      },
      {
        "id": 2407,
        "name": "Sabalgarh",
        "stateId": 21
      },
      {
        "id": 2408,
        "name": "Sagar",
        "stateId": 21
      },
      {
        "id": 2409,
        "name": "Sagar Cantonment",
        "stateId": 21
      },
      {
        "id": 2410,
        "name": "Sailana",
        "stateId": 21
      },
      {
        "id": 2411,
        "name": "Sanawad",
        "stateId": 21
      },
      {
        "id": 2412,
        "name": "Sanchi",
        "stateId": 21
      },
      {
        "id": 2413,
        "name": "Sanwer",
        "stateId": 21
      },
      {
        "id": 2414,
        "name": "Sarangpur",
        "stateId": 21
      },
      {
        "id": 2415,
        "name": "Sardarpur",
        "stateId": 21
      },
      {
        "id": 2416,
        "name": "Sarni",
        "stateId": 21
      },
      {
        "id": 2417,
        "name": "Satai",
        "stateId": 21
      },
      {
        "id": 2418,
        "name": "Satna",
        "stateId": 21
      },
      {
        "id": 2419,
        "name": "Satwas",
        "stateId": 21
      },
      {
        "id": 2420,
        "name": "Sausar",
        "stateId": 21
      },
      {
        "id": 2421,
        "name": "Sehore",
        "stateId": 21
      },
      {
        "id": 2422,
        "name": "Semaria",
        "stateId": 21
      },
      {
        "id": 2423,
        "name": "Sendhwa",
        "stateId": 21
      },
      {
        "id": 2424,
        "name": "Seondha",
        "stateId": 21
      },
      {
        "id": 2425,
        "name": "Seoni",
        "stateId": 21
      },
      {
        "id": 2426,
        "name": "Seoni Malwa",
        "stateId": 21
      },
      {
        "id": 2427,
        "name": "Sethia",
        "stateId": 21
      },
      {
        "id": 2428,
        "name": "Shahdol",
        "stateId": 21
      },
      {
        "id": 2429,
        "name": "Shahgarh",
        "stateId": 21
      },
      {
        "id": 2430,
        "name": "Shahpur",
        "stateId": 21
      },
      {
        "id": 2431,
        "name": "Shahpura",
        "stateId": 21
      },
      {
        "id": 2432,
        "name": "Shajapur",
        "stateId": 21
      },
      {
        "id": 2433,
        "name": "Shamgarh",
        "stateId": 21
      },
      {
        "id": 2434,
        "name": "Sheopur",
        "stateId": 21
      },
      {
        "id": 2435,
        "name": "Shivpuri",
        "stateId": 21
      },
      {
        "id": 2436,
        "name": "Shujalpur",
        "stateId": 21
      },
      {
        "id": 2437,
        "name": "Sidhi",
        "stateId": 21
      },
      {
        "id": 2438,
        "name": "Sihora",
        "stateId": 21
      },
      {
        "id": 2439,
        "name": "Singolo",
        "stateId": 21
      },
      {
        "id": 2440,
        "name": "Singrauli",
        "stateId": 21
      },
      {
        "id": 2441,
        "name": "Sinhasa",
        "stateId": 21
      },
      {
        "id": 2442,
        "name": "Sirgora",
        "stateId": 21
      },
      {
        "id": 2443,
        "name": "Sirmaur",
        "stateId": 21
      },
      {
        "id": 2444,
        "name": "Sironj",
        "stateId": 21
      },
      {
        "id": 2445,
        "name": "Sitamau",
        "stateId": 21
      },
      {
        "id": 2446,
        "name": "Sohagpur",
        "stateId": 21
      },
      {
        "id": 2447,
        "name": "Sonkatch",
        "stateId": 21
      },
      {
        "id": 2448,
        "name": "Soyatkalan",
        "stateId": 21
      },
      {
        "id": 2449,
        "name": "Suhagi",
        "stateId": 21
      },
      {
        "id": 2450,
        "name": "Sultanpur",
        "stateId": 21
      },
      {
        "id": 2451,
        "name": "Susner",
        "stateId": 21
      },
      {
        "id": 2452,
        "name": "Suthaliya",
        "stateId": 21
      },
      {
        "id": 2453,
        "name": "Tal",
        "stateId": 21
      },
      {
        "id": 2454,
        "name": "Talen",
        "stateId": 21
      },
      {
        "id": 2455,
        "name": "Tarana",
        "stateId": 21
      },
      {
        "id": 2456,
        "name": "Taricharkalan",
        "stateId": 21
      },
      {
        "id": 2457,
        "name": "Tekanpur",
        "stateId": 21
      },
      {
        "id": 2458,
        "name": "Tendukheda",
        "stateId": 21
      },
      {
        "id": 2459,
        "name": "Teonthar",
        "stateId": 21
      },
      {
        "id": 2460,
        "name": "Thandia",
        "stateId": 21
      },
      {
        "id": 2461,
        "name": "Tikamgarh",
        "stateId": 21
      },
      {
        "id": 2462,
        "name": "Timarni",
        "stateId": 21
      },
      {
        "id": 2463,
        "name": "Tirodi",
        "stateId": 21
      },
      {
        "id": 2464,
        "name": "Udaipura",
        "stateId": 21
      },
      {
        "id": 2465,
        "name": "Ujjain",
        "stateId": 21
      },
      {
        "id": 2466,
        "name": "Ukwa",
        "stateId": 21
      },
      {
        "id": 2467,
        "name": "Umaria",
        "stateId": 21
      },
      {
        "id": 2468,
        "name": "Unchahara",
        "stateId": 21
      },
      {
        "id": 2469,
        "name": "Unhel",
        "stateId": 21
      },
      {
        "id": 2470,
        "name": "Vehicle Factory Jabalpur",
        "stateId": 21
      },
      {
        "id": 2471,
        "name": "Vidisha",
        "stateId": 21
      },
      {
        "id": 2472,
        "name": "Vijayraghavgarh",
        "stateId": 21
      },
      {
        "id": 2473,
        "name": "Waraseoni",
        "stateId": 21
      },
      {
        "id": 2474,
        "name": "Achalpur",
        "stateId": 22
      },
      {
        "id": 2475,
        "name": "Aheri",
        "stateId": 22
      },
      {
        "id": 2476,
        "name": "Ahmadnagar Cantonment",
        "stateId": 22
      },
      {
        "id": 2477,
        "name": "Ahmadpur",
        "stateId": 22
      },
      {
        "id": 2478,
        "name": "Ahmednagar",
        "stateId": 22
      },
      {
        "id": 2479,
        "name": "Ajra",
        "stateId": 22
      },
      {
        "id": 2480,
        "name": "Akalkot",
        "stateId": 22
      },
      {
        "id": 2481,
        "name": "Akkalkuwa",
        "stateId": 22
      },
      {
        "id": 2482,
        "name": "Akola",
        "stateId": 22
      },
      {
        "id": 2483,
        "name": "Akot",
        "stateId": 22
      },
      {
        "id": 2484,
        "name": "Alandi",
        "stateId": 22
      },
      {
        "id": 2485,
        "name": "Alibag",
        "stateId": 22
      },
      {
        "id": 2486,
        "name": "Allapalli",
        "stateId": 22
      },
      {
        "id": 2487,
        "name": "Alore",
        "stateId": 22
      },
      {
        "id": 2488,
        "name": "Amalner",
        "stateId": 22
      },
      {
        "id": 2489,
        "name": "Ambad",
        "stateId": 22
      },
      {
        "id": 2490,
        "name": "Ambajogai",
        "stateId": 22
      },
      {
        "id": 2491,
        "name": "Ambernath",
        "stateId": 22
      },
      {
        "id": 2492,
        "name": "Ambivali Tarf Wankhal",
        "stateId": 22
      },
      {
        "id": 2493,
        "name": "Amgaon",
        "stateId": 22
      },
      {
        "id": 2494,
        "name": "Amravati",
        "stateId": 22
      },
      {
        "id": 2495,
        "name": "Anjangaon",
        "stateId": 22
      },
      {
        "id": 2496,
        "name": "Arvi",
        "stateId": 22
      },
      {
        "id": 2497,
        "name": "Ashta",
        "stateId": 22
      },
      {
        "id": 2498,
        "name": "Ashti",
        "stateId": 22
      },
      {
        "id": 2499,
        "name": "Aurangabad",
        "stateId": 22
      },
      {
        "id": 2500,
        "name": "Aurangabad Cantonment",
        "stateId": 22
      },
      {
        "id": 2501,
        "name": "Ausa",
        "stateId": 22
      },
      {
        "id": 2502,
        "name": "Babhulgaon",
        "stateId": 22
      },
      {
        "id": 2503,
        "name": "Badlapur",
        "stateId": 22
      },
      {
        "id": 2504,
        "name": "Balapur",
        "stateId": 22
      },
      {
        "id": 2505,
        "name": "Ballarpur",
        "stateId": 22
      },
      {
        "id": 2506,
        "name": "Baramati",
        "stateId": 22
      },
      {
        "id": 2507,
        "name": "Barshi",
        "stateId": 22
      },
      {
        "id": 2508,
        "name": "Basmat",
        "stateId": 22
      },
      {
        "id": 2509,
        "name": "Beed",
        "stateId": 22
      },
      {
        "id": 2510,
        "name": "Bhadravati",
        "stateId": 22
      },
      {
        "id": 2511,
        "name": "Bhagur",
        "stateId": 22
      },
      {
        "id": 2512,
        "name": "Bhandara",
        "stateId": 22
      },
      {
        "id": 2513,
        "name": "Bhigvan",
        "stateId": 22
      },
      {
        "id": 2514,
        "name": "Bhingar",
        "stateId": 22
      },
      {
        "id": 2515,
        "name": "Bhiwandi",
        "stateId": 22
      },
      {
        "id": 2516,
        "name": "Bhokhardan",
        "stateId": 22
      },
      {
        "id": 2517,
        "name": "Bhor",
        "stateId": 22
      },
      {
        "id": 2518,
        "name": "Bhosari",
        "stateId": 22
      },
      {
        "id": 2519,
        "name": "Bhum",
        "stateId": 22
      },
      {
        "id": 2520,
        "name": "Bhusawal",
        "stateId": 22
      },
      {
        "id": 2521,
        "name": "Bid",
        "stateId": 22
      },
      {
        "id": 2522,
        "name": "Biloli",
        "stateId": 22
      },
      {
        "id": 2523,
        "name": "Birwadi",
        "stateId": 22
      },
      {
        "id": 2524,
        "name": "Boisar",
        "stateId": 22
      },
      {
        "id": 2525,
        "name": "Bop Khel",
        "stateId": 22
      },
      {
        "id": 2526,
        "name": "Brahmapuri",
        "stateId": 22
      },
      {
        "id": 2527,
        "name": "Budhgaon",
        "stateId": 22
      },
      {
        "id": 2528,
        "name": "Buldana",
        "stateId": 22
      },
      {
        "id": 2529,
        "name": "Buldhana",
        "stateId": 22
      },
      {
        "id": 2530,
        "name": "Butibori",
        "stateId": 22
      },
      {
        "id": 2531,
        "name": "Chakan",
        "stateId": 22
      },
      {
        "id": 2532,
        "name": "Chalisgaon",
        "stateId": 22
      },
      {
        "id": 2533,
        "name": "Chandrapur",
        "stateId": 22
      },
      {
        "id": 2534,
        "name": "Chandur",
        "stateId": 22
      },
      {
        "id": 2535,
        "name": "Chandur Bazar",
        "stateId": 22
      },
      {
        "id": 2536,
        "name": "Chandvad",
        "stateId": 22
      },
      {
        "id": 2537,
        "name": "Chicholi",
        "stateId": 22
      },
      {
        "id": 2538,
        "name": "Chikhala",
        "stateId": 22
      },
      {
        "id": 2539,
        "name": "Chikhaldara",
        "stateId": 22
      },
      {
        "id": 2540,
        "name": "Chikhli",
        "stateId": 22
      },
      {
        "id": 2541,
        "name": "Chinchani",
        "stateId": 22
      },
      {
        "id": 2542,
        "name": "Chinchwad",
        "stateId": 22
      },
      {
        "id": 2543,
        "name": "Chiplun",
        "stateId": 22
      },
      {
        "id": 2544,
        "name": "Chopda",
        "stateId": 22
      },
      {
        "id": 2545,
        "name": "Dabhol",
        "stateId": 22
      },
      {
        "id": 2546,
        "name": "Dahance",
        "stateId": 22
      },
      {
        "id": 2547,
        "name": "Dahanu",
        "stateId": 22
      },
      {
        "id": 2548,
        "name": "Daharu",
        "stateId": 22
      },
      {
        "id": 2549,
        "name": "Dapoli Camp",
        "stateId": 22
      },
      {
        "id": 2550,
        "name": "Darwa",
        "stateId": 22
      },
      {
        "id": 2551,
        "name": "Daryapur",
        "stateId": 22
      },
      {
        "id": 2552,
        "name": "Dattapur",
        "stateId": 22
      },
      {
        "id": 2553,
        "name": "Daund",
        "stateId": 22
      },
      {
        "id": 2554,
        "name": "Davlameti",
        "stateId": 22
      },
      {
        "id": 2555,
        "name": "Deglur",
        "stateId": 22
      },
      {
        "id": 2556,
        "name": "Dehu Road",
        "stateId": 22
      },
      {
        "id": 2557,
        "name": "Deolali",
        "stateId": 22
      },
      {
        "id": 2558,
        "name": "Deolali Pravara",
        "stateId": 22
      },
      {
        "id": 2559,
        "name": "Deoli",
        "stateId": 22
      },
      {
        "id": 2560,
        "name": "Desaiganj",
        "stateId": 22
      },
      {
        "id": 2561,
        "name": "Deulgaon Raja",
        "stateId": 22
      },
      {
        "id": 2562,
        "name": "Dewhadi",
        "stateId": 22
      },
      {
        "id": 2563,
        "name": "Dharangaon",
        "stateId": 22
      },
      {
        "id": 2564,
        "name": "Dharmabad",
        "stateId": 22
      },
      {
        "id": 2565,
        "name": "Dharur",
        "stateId": 22
      },
      {
        "id": 2566,
        "name": "Dhatau",
        "stateId": 22
      },
      {
        "id": 2567,
        "name": "Dhule",
        "stateId": 22
      },
      {
        "id": 2568,
        "name": "Digdoh",
        "stateId": 22
      },
      {
        "id": 2569,
        "name": "Diglur",
        "stateId": 22
      },
      {
        "id": 2570,
        "name": "Digras",
        "stateId": 22
      },
      {
        "id": 2571,
        "name": "Dombivli",
        "stateId": 22
      },
      {
        "id": 2572,
        "name": "Dondaicha",
        "stateId": 22
      },
      {
        "id": 2573,
        "name": "Dudhani",
        "stateId": 22
      },
      {
        "id": 2574,
        "name": "Durgapur",
        "stateId": 22
      },
      {
        "id": 2575,
        "name": "Dyane",
        "stateId": 22
      },
      {
        "id": 2576,
        "name": "Edandol",
        "stateId": 22
      },
      {
        "id": 2577,
        "name": "Eklahare",
        "stateId": 22
      },
      {
        "id": 2578,
        "name": "Faizpur",
        "stateId": 22
      },
      {
        "id": 2579,
        "name": "Fekari",
        "stateId": 22
      },
      {
        "id": 2580,
        "name": "Gadchiroli",
        "stateId": 22
      },
      {
        "id": 2581,
        "name": "Gadhinghaj",
        "stateId": 22
      },
      {
        "id": 2582,
        "name": "Gandhi Nagar",
        "stateId": 22
      },
      {
        "id": 2583,
        "name": "Ganeshpur",
        "stateId": 22
      },
      {
        "id": 2584,
        "name": "Gangakher",
        "stateId": 22
      },
      {
        "id": 2585,
        "name": "Gangapur",
        "stateId": 22
      },
      {
        "id": 2586,
        "name": "Gevrai",
        "stateId": 22
      },
      {
        "id": 2587,
        "name": "Ghatanji",
        "stateId": 22
      },
      {
        "id": 2588,
        "name": "Ghoti",
        "stateId": 22
      },
      {
        "id": 2589,
        "name": "Ghugus",
        "stateId": 22
      },
      {
        "id": 2590,
        "name": "Ghulewadi",
        "stateId": 22
      },
      {
        "id": 2591,
        "name": "Godoli",
        "stateId": 22
      },
      {
        "id": 2592,
        "name": "Gondia",
        "stateId": 22
      },
      {
        "id": 2593,
        "name": "Guhagar",
        "stateId": 22
      },
      {
        "id": 2594,
        "name": "Hadgaon",
        "stateId": 22
      },
      {
        "id": 2595,
        "name": "Harnai Beach",
        "stateId": 22
      },
      {
        "id": 2596,
        "name": "Hinganghat",
        "stateId": 22
      },
      {
        "id": 2597,
        "name": "Hingoli",
        "stateId": 22
      },
      {
        "id": 2598,
        "name": "Hupari",
        "stateId": 22
      },
      {
        "id": 2599,
        "name": "Ichalkaranji",
        "stateId": 22
      },
      {
        "id": 2600,
        "name": "Igatpuri",
        "stateId": 22
      },
      {
        "id": 2601,
        "name": "Indapur",
        "stateId": 22
      },
      {
        "id": 2602,
        "name": "Jaisinghpur",
        "stateId": 22
      },
      {
        "id": 2603,
        "name": "Jalgaon",
        "stateId": 22
      },
      {
        "id": 2604,
        "name": "Jalna",
        "stateId": 22
      },
      {
        "id": 2605,
        "name": "Jamkhed",
        "stateId": 22
      },
      {
        "id": 2606,
        "name": "Jawhar",
        "stateId": 22
      },
      {
        "id": 2607,
        "name": "Jaysingpur",
        "stateId": 22
      },
      {
        "id": 2608,
        "name": "Jejuri",
        "stateId": 22
      },
      {
        "id": 2609,
        "name": "Jintur",
        "stateId": 22
      },
      {
        "id": 2610,
        "name": "Junnar",
        "stateId": 22
      },
      {
        "id": 2611,
        "name": "Kabnur",
        "stateId": 22
      },
      {
        "id": 2612,
        "name": "Kagal",
        "stateId": 22
      },
      {
        "id": 2613,
        "name": "Kalamb",
        "stateId": 22
      },
      {
        "id": 2614,
        "name": "Kalamnuri",
        "stateId": 22
      },
      {
        "id": 2615,
        "name": "Kalas",
        "stateId": 22
      },
      {
        "id": 2616,
        "name": "Kalmeshwar",
        "stateId": 22
      },
      {
        "id": 2617,
        "name": "Kalundre",
        "stateId": 22
      },
      {
        "id": 2618,
        "name": "Kalyan",
        "stateId": 22
      },
      {
        "id": 2619,
        "name": "Kamthi",
        "stateId": 22
      },
      {
        "id": 2620,
        "name": "Kamthi Cantonment",
        "stateId": 22
      },
      {
        "id": 2621,
        "name": "Kandari",
        "stateId": 22
      },
      {
        "id": 2622,
        "name": "Kandhar",
        "stateId": 22
      },
      {
        "id": 2623,
        "name": "Kandri",
        "stateId": 22
      },
      {
        "id": 2624,
        "name": "Kandri II",
        "stateId": 22
      },
      {
        "id": 2625,
        "name": "Kanhan",
        "stateId": 22
      },
      {
        "id": 2626,
        "name": "Kankavli",
        "stateId": 22
      },
      {
        "id": 2627,
        "name": "Kannad",
        "stateId": 22
      },
      {
        "id": 2628,
        "name": "Karad",
        "stateId": 22
      },
      {
        "id": 2629,
        "name": "Karanja",
        "stateId": 22
      },
      {
        "id": 2630,
        "name": "Karanje Tarf",
        "stateId": 22
      },
      {
        "id": 2631,
        "name": "Karivali",
        "stateId": 22
      },
      {
        "id": 2632,
        "name": "Karjat",
        "stateId": 22
      },
      {
        "id": 2633,
        "name": "Karmala",
        "stateId": 22
      },
      {
        "id": 2634,
        "name": "Kasara Budruk",
        "stateId": 22
      },
      {
        "id": 2635,
        "name": "Katai",
        "stateId": 22
      },
      {
        "id": 2636,
        "name": "Katkar",
        "stateId": 22
      },
      {
        "id": 2637,
        "name": "Katol",
        "stateId": 22
      },
      {
        "id": 2638,
        "name": "Kegaon",
        "stateId": 22
      },
      {
        "id": 2639,
        "name": "Khadkale",
        "stateId": 22
      },
      {
        "id": 2640,
        "name": "Khadki",
        "stateId": 22
      },
      {
        "id": 2641,
        "name": "Khamgaon",
        "stateId": 22
      },
      {
        "id": 2642,
        "name": "Khapa",
        "stateId": 22
      },
      {
        "id": 2643,
        "name": "Kharadi",
        "stateId": 22
      },
      {
        "id": 2644,
        "name": "Kharakvasla",
        "stateId": 22
      },
      {
        "id": 2645,
        "name": "Khed",
        "stateId": 22
      },
      {
        "id": 2646,
        "name": "Kherdi",
        "stateId": 22
      },
      {
        "id": 2647,
        "name": "Khoni",
        "stateId": 22
      },
      {
        "id": 2648,
        "name": "Khopoli",
        "stateId": 22
      },
      {
        "id": 2649,
        "name": "Khuldabad",
        "stateId": 22
      },
      {
        "id": 2650,
        "name": "Kinwat",
        "stateId": 22
      },
      {
        "id": 2651,
        "name": "Kodoli",
        "stateId": 22
      },
      {
        "id": 2652,
        "name": "Kolhapur",
        "stateId": 22
      },
      {
        "id": 2653,
        "name": "Kon",
        "stateId": 22
      },
      {
        "id": 2654,
        "name": "Kondumal",
        "stateId": 22
      },
      {
        "id": 2655,
        "name": "Kopargaon",
        "stateId": 22
      },
      {
        "id": 2656,
        "name": "Kopharad",
        "stateId": 22
      },
      {
        "id": 2657,
        "name": "Koradi",
        "stateId": 22
      },
      {
        "id": 2658,
        "name": "Koregaon",
        "stateId": 22
      },
      {
        "id": 2659,
        "name": "Korochi",
        "stateId": 22
      },
      {
        "id": 2660,
        "name": "Kudal",
        "stateId": 22
      },
      {
        "id": 2661,
        "name": "Kundaim",
        "stateId": 22
      },
      {
        "id": 2662,
        "name": "Kundalwadi",
        "stateId": 22
      },
      {
        "id": 2663,
        "name": "Kurandvad",
        "stateId": 22
      },
      {
        "id": 2664,
        "name": "Kurduvadi",
        "stateId": 22
      },
      {
        "id": 2665,
        "name": "Kusgaon Budruk",
        "stateId": 22
      },
      {
        "id": 2666,
        "name": "Lanja",
        "stateId": 22
      },
      {
        "id": 2667,
        "name": "Lasalgaon",
        "stateId": 22
      },
      {
        "id": 2668,
        "name": "Latur",
        "stateId": 22
      },
      {
        "id": 2669,
        "name": "Loha",
        "stateId": 22
      },
      {
        "id": 2670,
        "name": "Lohegaon",
        "stateId": 22
      },
      {
        "id": 2671,
        "name": "Lonar",
        "stateId": 22
      },
      {
        "id": 2672,
        "name": "Lonavala",
        "stateId": 22
      },
      {
        "id": 2673,
        "name": "Madhavnagar",
        "stateId": 22
      },
      {
        "id": 2674,
        "name": "Mahabaleshwar",
        "stateId": 22
      },
      {
        "id": 2675,
        "name": "Mahad",
        "stateId": 22
      },
      {
        "id": 2676,
        "name": "Mahadula",
        "stateId": 22
      },
      {
        "id": 2677,
        "name": "Maindargi",
        "stateId": 22
      },
      {
        "id": 2678,
        "name": "Majalgaon",
        "stateId": 22
      },
      {
        "id": 2679,
        "name": "Malegaon",
        "stateId": 22
      },
      {
        "id": 2680,
        "name": "Malgaon",
        "stateId": 22
      },
      {
        "id": 2681,
        "name": "Malkapur",
        "stateId": 22
      },
      {
        "id": 2682,
        "name": "Malwan",
        "stateId": 22
      },
      {
        "id": 2683,
        "name": "Manadur",
        "stateId": 22
      },
      {
        "id": 2684,
        "name": "Manchar",
        "stateId": 22
      },
      {
        "id": 2685,
        "name": "Mangalvedhe",
        "stateId": 22
      },
      {
        "id": 2686,
        "name": "Mangrul Pir",
        "stateId": 22
      },
      {
        "id": 2687,
        "name": "Manmad",
        "stateId": 22
      },
      {
        "id": 2688,
        "name": "Manor",
        "stateId": 22
      },
      {
        "id": 2689,
        "name": "Mansar",
        "stateId": 22
      },
      {
        "id": 2690,
        "name": "Manwath",
        "stateId": 22
      },
      {
        "id": 2691,
        "name": "Mapuca",
        "stateId": 22
      },
      {
        "id": 2692,
        "name": "Matheran",
        "stateId": 22
      },
      {
        "id": 2693,
        "name": "Mehkar",
        "stateId": 22
      },
      {
        "id": 2694,
        "name": "Mhasla",
        "stateId": 22
      },
      {
        "id": 2695,
        "name": "Mhaswad",
        "stateId": 22
      },
      {
        "id": 2696,
        "name": "Mira Bhayandar",
        "stateId": 22
      },
      {
        "id": 2697,
        "name": "Miraj",
        "stateId": 22
      },
      {
        "id": 2698,
        "name": "Mohpa",
        "stateId": 22
      },
      {
        "id": 2699,
        "name": "Mohpada",
        "stateId": 22
      },
      {
        "id": 2700,
        "name": "Moram",
        "stateId": 22
      },
      {
        "id": 2701,
        "name": "Morshi",
        "stateId": 22
      },
      {
        "id": 2702,
        "name": "Mowad",
        "stateId": 22
      },
      {
        "id": 2703,
        "name": "Mudkhed",
        "stateId": 22
      },
      {
        "id": 2704,
        "name": "Mukhed",
        "stateId": 22
      },
      {
        "id": 2705,
        "name": "Mul",
        "stateId": 22
      },
      {
        "id": 2706,
        "name": "Mulshi",
        "stateId": 22
      },
      {
        "id": 2707,
        "name": "Mumbai",
        "stateId": 22
      },
      {
        "id": 2708,
        "name": "Murbad",
        "stateId": 22
      },
      {
        "id": 2709,
        "name": "Murgud",
        "stateId": 22
      },
      {
        "id": 2710,
        "name": "Murtijapur",
        "stateId": 22
      },
      {
        "id": 2711,
        "name": "Murud",
        "stateId": 22
      },
      {
        "id": 2712,
        "name": "Nachane",
        "stateId": 22
      },
      {
        "id": 2713,
        "name": "Nagardeole",
        "stateId": 22
      },
      {
        "id": 2714,
        "name": "Nagothane",
        "stateId": 22
      },
      {
        "id": 2715,
        "name": "Nagpur",
        "stateId": 22
      },
      {
        "id": 2716,
        "name": "Nakoda",
        "stateId": 22
      },
      {
        "id": 2717,
        "name": "Nalasopara",
        "stateId": 22
      },
      {
        "id": 2718,
        "name": "Naldurg",
        "stateId": 22
      },
      {
        "id": 2719,
        "name": "Nanded",
        "stateId": 22
      },
      {
        "id": 2720,
        "name": "Nandgaon",
        "stateId": 22
      },
      {
        "id": 2721,
        "name": "Nandura",
        "stateId": 22
      },
      {
        "id": 2722,
        "name": "Nandurbar",
        "stateId": 22
      },
      {
        "id": 2723,
        "name": "Narkhed",
        "stateId": 22
      },
      {
        "id": 2724,
        "name": "Nashik",
        "stateId": 22
      },
      {
        "id": 2725,
        "name": "Navapur",
        "stateId": 22
      },
      {
        "id": 2726,
        "name": "Navi Mumbai",
        "stateId": 22
      },
      {
        "id": 2727,
        "name": "Navi Mumbai Panvel",
        "stateId": 22
      },
      {
        "id": 2728,
        "name": "Neral",
        "stateId": 22
      },
      {
        "id": 2729,
        "name": "Nigdi",
        "stateId": 22
      },
      {
        "id": 2730,
        "name": "Nilanga",
        "stateId": 22
      },
      {
        "id": 2731,
        "name": "Nildoh",
        "stateId": 22
      },
      {
        "id": 2732,
        "name": "Nimbhore",
        "stateId": 22
      },
      {
        "id": 2733,
        "name": "Ojhar",
        "stateId": 22
      },
      {
        "id": 2734,
        "name": "Osmanabad",
        "stateId": 22
      },
      {
        "id": 2735,
        "name": "Pachgaon",
        "stateId": 22
      },
      {
        "id": 2736,
        "name": "Pachora",
        "stateId": 22
      },
      {
        "id": 2737,
        "name": "Padagha",
        "stateId": 22
      },
      {
        "id": 2738,
        "name": "Paithan",
        "stateId": 22
      },
      {
        "id": 2739,
        "name": "Palghar",
        "stateId": 22
      },
      {
        "id": 2740,
        "name": "Pali",
        "stateId": 22
      },
      {
        "id": 2741,
        "name": "Panchgani",
        "stateId": 22
      },
      {
        "id": 2742,
        "name": "Pandhakarwada",
        "stateId": 22
      },
      {
        "id": 2743,
        "name": "Pandharpur",
        "stateId": 22
      },
      {
        "id": 2744,
        "name": "Panhala",
        "stateId": 22
      },
      {
        "id": 2745,
        "name": "Panvel",
        "stateId": 22
      },
      {
        "id": 2746,
        "name": "Paranda",
        "stateId": 22
      },
      {
        "id": 2747,
        "name": "Parbhani",
        "stateId": 22
      },
      {
        "id": 2748,
        "name": "Parli",
        "stateId": 22
      },
      {
        "id": 2749,
        "name": "Parola",
        "stateId": 22
      },
      {
        "id": 2750,
        "name": "Partur",
        "stateId": 22
      },
      {
        "id": 2751,
        "name": "Pasthal",
        "stateId": 22
      },
      {
        "id": 2752,
        "name": "Patan",
        "stateId": 22
      },
      {
        "id": 2753,
        "name": "Pathardi",
        "stateId": 22
      },
      {
        "id": 2754,
        "name": "Pathri",
        "stateId": 22
      },
      {
        "id": 2755,
        "name": "Patur",
        "stateId": 22
      },
      {
        "id": 2756,
        "name": "Pawni",
        "stateId": 22
      },
      {
        "id": 2757,
        "name": "Pen",
        "stateId": 22
      },
      {
        "id": 2758,
        "name": "Pethumri",
        "stateId": 22
      },
      {
        "id": 2759,
        "name": "Phaltan",
        "stateId": 22
      },
      {
        "id": 2760,
        "name": "Pimpri",
        "stateId": 22
      },
      {
        "id": 2761,
        "name": "Poladpur",
        "stateId": 22
      },
      {
        "id": 2762,
        "name": "Pulgaon",
        "stateId": 22
      },
      {
        "id": 2763,
        "name": "Pune",
        "stateId": 22
      },
      {
        "id": 2764,
        "name": "Pune Cantonment",
        "stateId": 22
      },
      {
        "id": 2765,
        "name": "Purna",
        "stateId": 22
      },
      {
        "id": 2766,
        "name": "Purushottamnagar",
        "stateId": 22
      },
      {
        "id": 2767,
        "name": "Pusad",
        "stateId": 22
      },
      {
        "id": 2768,
        "name": "Rahimatpur",
        "stateId": 22
      },
      {
        "id": 2769,
        "name": "Rahta Pimplas",
        "stateId": 22
      },
      {
        "id": 2770,
        "name": "Rahuri",
        "stateId": 22
      },
      {
        "id": 2771,
        "name": "Raigad",
        "stateId": 22
      },
      {
        "id": 2772,
        "name": "Rajapur",
        "stateId": 22
      },
      {
        "id": 2773,
        "name": "Rajgurunagar",
        "stateId": 22
      },
      {
        "id": 2774,
        "name": "Rajur",
        "stateId": 22
      },
      {
        "id": 2775,
        "name": "Rajura",
        "stateId": 22
      },
      {
        "id": 2776,
        "name": "Ramtek",
        "stateId": 22
      },
      {
        "id": 2777,
        "name": "Ratnagiri",
        "stateId": 22
      },
      {
        "id": 2778,
        "name": "Ravalgaon",
        "stateId": 22
      },
      {
        "id": 2779,
        "name": "Raver",
        "stateId": 22
      },
      {
        "id": 2780,
        "name": "Revadanda",
        "stateId": 22
      },
      {
        "id": 2781,
        "name": "Risod",
        "stateId": 22
      },
      {
        "id": 2782,
        "name": "Roha Ashtami",
        "stateId": 22
      },
      {
        "id": 2783,
        "name": "Sakri",
        "stateId": 22
      },
      {
        "id": 2784,
        "name": "Sandor",
        "stateId": 22
      },
      {
        "id": 2785,
        "name": "Sangamner",
        "stateId": 22
      },
      {
        "id": 2786,
        "name": "Sangli",
        "stateId": 22
      },
      {
        "id": 2787,
        "name": "Sangole",
        "stateId": 22
      },
      {
        "id": 2788,
        "name": "Sasti",
        "stateId": 22
      },
      {
        "id": 2789,
        "name": "Sasvad",
        "stateId": 22
      },
      {
        "id": 2790,
        "name": "Satana",
        "stateId": 22
      },
      {
        "id": 2791,
        "name": "Satara",
        "stateId": 22
      },
      {
        "id": 2792,
        "name": "Savantvadi",
        "stateId": 22
      },
      {
        "id": 2793,
        "name": "Savda",
        "stateId": 22
      },
      {
        "id": 2794,
        "name": "Savner",
        "stateId": 22
      },
      {
        "id": 2795,
        "name": "Sawari Jawharnagar",
        "stateId": 22
      },
      {
        "id": 2796,
        "name": "Selu",
        "stateId": 22
      },
      {
        "id": 2797,
        "name": "Shahada",
        "stateId": 22
      },
      {
        "id": 2798,
        "name": "Shahapur",
        "stateId": 22
      },
      {
        "id": 2799,
        "name": "Shegaon",
        "stateId": 22
      },
      {
        "id": 2800,
        "name": "Shelar",
        "stateId": 22
      },
      {
        "id": 2801,
        "name": "Shendurjana",
        "stateId": 22
      },
      {
        "id": 2802,
        "name": "Shirdi",
        "stateId": 22
      },
      {
        "id": 2803,
        "name": "Shirgaon",
        "stateId": 22
      },
      {
        "id": 2804,
        "name": "Shirpur",
        "stateId": 22
      },
      {
        "id": 2805,
        "name": "Shirur",
        "stateId": 22
      },
      {
        "id": 2806,
        "name": "Shirwal",
        "stateId": 22
      },
      {
        "id": 2807,
        "name": "Shivatkar",
        "stateId": 22
      },
      {
        "id": 2808,
        "name": "Shrigonda",
        "stateId": 22
      },
      {
        "id": 2809,
        "name": "Shrirampur",
        "stateId": 22
      },
      {
        "id": 2810,
        "name": "Shrirampur Rural",
        "stateId": 22
      },
      {
        "id": 2811,
        "name": "Sillewada",
        "stateId": 22
      },
      {
        "id": 2812,
        "name": "Sillod",
        "stateId": 22
      },
      {
        "id": 2813,
        "name": "Sindhudurg",
        "stateId": 22
      },
      {
        "id": 2814,
        "name": "Sindi",
        "stateId": 22
      },
      {
        "id": 2815,
        "name": "Sindi Turf Hindnagar",
        "stateId": 22
      },
      {
        "id": 2816,
        "name": "Sindkhed Raja",
        "stateId": 22
      },
      {
        "id": 2817,
        "name": "Singnapur",
        "stateId": 22
      },
      {
        "id": 2818,
        "name": "Sinnar",
        "stateId": 22
      },
      {
        "id": 2819,
        "name": "Sirur",
        "stateId": 22
      },
      {
        "id": 2820,
        "name": "Sitasawangi",
        "stateId": 22
      },
      {
        "id": 2821,
        "name": "Solapur",
        "stateId": 22
      },
      {
        "id": 2822,
        "name": "Sonai",
        "stateId": 22
      },
      {
        "id": 2823,
        "name": "Sonegaon",
        "stateId": 22
      },
      {
        "id": 2824,
        "name": "Soyagaon",
        "stateId": 22
      },
      {
        "id": 2825,
        "name": "Srivardhan",
        "stateId": 22
      },
      {
        "id": 2826,
        "name": "Surgana",
        "stateId": 22
      },
      {
        "id": 2827,
        "name": "Talegaon Dabhade",
        "stateId": 22
      },
      {
        "id": 2828,
        "name": "Taloda",
        "stateId": 22
      },
      {
        "id": 2829,
        "name": "Taloja",
        "stateId": 22
      },
      {
        "id": 2830,
        "name": "Talwade",
        "stateId": 22
      },
      {
        "id": 2831,
        "name": "Tarapur",
        "stateId": 22
      },
      {
        "id": 2832,
        "name": "Tasgaon",
        "stateId": 22
      },
      {
        "id": 2833,
        "name": "Tathavade",
        "stateId": 22
      },
      {
        "id": 2834,
        "name": "Tekadi",
        "stateId": 22
      },
      {
        "id": 2835,
        "name": "Telhara",
        "stateId": 22
      },
      {
        "id": 2836,
        "name": "Thane",
        "stateId": 22
      },
      {
        "id": 2837,
        "name": "Tirira",
        "stateId": 22
      },
      {
        "id": 2838,
        "name": "Totaladoh",
        "stateId": 22
      },
      {
        "id": 2839,
        "name": "Trimbak",
        "stateId": 22
      },
      {
        "id": 2840,
        "name": "Tuljapur",
        "stateId": 22
      },
      {
        "id": 2841,
        "name": "Tumsar",
        "stateId": 22
      },
      {
        "id": 2842,
        "name": "Uchgaon",
        "stateId": 22
      },
      {
        "id": 2843,
        "name": "Udgir",
        "stateId": 22
      },
      {
        "id": 2844,
        "name": "Ulhasnagar",
        "stateId": 22
      },
      {
        "id": 2845,
        "name": "Umarga",
        "stateId": 22
      },
      {
        "id": 2846,
        "name": "Umarkhed",
        "stateId": 22
      },
      {
        "id": 2847,
        "name": "Umarsara",
        "stateId": 22
      },
      {
        "id": 2848,
        "name": "Umbar Pada Nandade",
        "stateId": 22
      },
      {
        "id": 2849,
        "name": "Umred",
        "stateId": 22
      },
      {
        "id": 2850,
        "name": "Umri Pragane Balapur",
        "stateId": 22
      },
      {
        "id": 2851,
        "name": "Uran",
        "stateId": 22
      },
      {
        "id": 2852,
        "name": "Uran Islampur",
        "stateId": 22
      },
      {
        "id": 2853,
        "name": "Utekhol",
        "stateId": 22
      },
      {
        "id": 2854,
        "name": "Vada",
        "stateId": 22
      },
      {
        "id": 2855,
        "name": "Vadgaon",
        "stateId": 22
      },
      {
        "id": 2856,
        "name": "Vadgaon Kasba",
        "stateId": 22
      },
      {
        "id": 2857,
        "name": "Vaijapur",
        "stateId": 22
      },
      {
        "id": 2858,
        "name": "Vanvadi",
        "stateId": 22
      },
      {
        "id": 2859,
        "name": "Varangaon",
        "stateId": 22
      },
      {
        "id": 2860,
        "name": "Vasai",
        "stateId": 22
      },
      {
        "id": 2861,
        "name": "Vasantnagar",
        "stateId": 22
      },
      {
        "id": 2862,
        "name": "Vashind",
        "stateId": 22
      },
      {
        "id": 2863,
        "name": "Vengurla",
        "stateId": 22
      },
      {
        "id": 2864,
        "name": "Virar",
        "stateId": 22
      },
      {
        "id": 2865,
        "name": "Visapur",
        "stateId": 22
      },
      {
        "id": 2866,
        "name": "Vite",
        "stateId": 22
      },
      {
        "id": 2867,
        "name": "Vithalwadi",
        "stateId": 22
      },
      {
        "id": 2868,
        "name": "Wadi",
        "stateId": 22
      },
      {
        "id": 2869,
        "name": "Waghapur",
        "stateId": 22
      },
      {
        "id": 2870,
        "name": "Wai",
        "stateId": 22
      },
      {
        "id": 2871,
        "name": "Wajegaon",
        "stateId": 22
      },
      {
        "id": 2872,
        "name": "Walani",
        "stateId": 22
      },
      {
        "id": 2873,
        "name": "Wanadongri",
        "stateId": 22
      },
      {
        "id": 2874,
        "name": "Wani",
        "stateId": 22
      },
      {
        "id": 2875,
        "name": "Wardha",
        "stateId": 22
      },
      {
        "id": 2876,
        "name": "Warora",
        "stateId": 22
      },
      {
        "id": 2877,
        "name": "Warthi",
        "stateId": 22
      },
      {
        "id": 2878,
        "name": "Warud",
        "stateId": 22
      },
      {
        "id": 2879,
        "name": "Washim",
        "stateId": 22
      },
      {
        "id": 2880,
        "name": "Yaval",
        "stateId": 22
      },
      {
        "id": 2881,
        "name": "Yavatmal",
        "stateId": 22
      },
      {
        "id": 2882,
        "name": "Yeola",
        "stateId": 22
      },
      {
        "id": 2883,
        "name": "Yerkheda",
        "stateId": 22
      },
      {
        "id": 2884,
        "name": "Andro",
        "stateId": 23
      },
      {
        "id": 2885,
        "name": "Bijoy Govinda",
        "stateId": 23
      },
      {
        "id": 2886,
        "name": "Bishnupur",
        "stateId": 23
      },
      {
        "id": 2887,
        "name": "Churachandpur",
        "stateId": 23
      },
      {
        "id": 2888,
        "name": "Heriok",
        "stateId": 23
      },
      {
        "id": 2889,
        "name": "Imphal",
        "stateId": 23
      },
      {
        "id": 2890,
        "name": "Jiribam",
        "stateId": 23
      },
      {
        "id": 2891,
        "name": "Kakching",
        "stateId": 23
      },
      {
        "id": 2892,
        "name": "Kakching Khunou",
        "stateId": 23
      },
      {
        "id": 2893,
        "name": "Khongman",
        "stateId": 23
      },
      {
        "id": 2894,
        "name": "Kumbi",
        "stateId": 23
      },
      {
        "id": 2895,
        "name": "Kwakta",
        "stateId": 23
      },
      {
        "id": 2896,
        "name": "Lamai",
        "stateId": 23
      },
      {
        "id": 2897,
        "name": "Lamjaotongba",
        "stateId": 23
      },
      {
        "id": 2898,
        "name": "Lamshang",
        "stateId": 23
      },
      {
        "id": 2899,
        "name": "Lilong",
        "stateId": 23
      },
      {
        "id": 2900,
        "name": "Mayang Imphal",
        "stateId": 23
      },
      {
        "id": 2901,
        "name": "Moirang",
        "stateId": 23
      },
      {
        "id": 2902,
        "name": "Moreh",
        "stateId": 23
      },
      {
        "id": 2903,
        "name": "Nambol",
        "stateId": 23
      },
      {
        "id": 2904,
        "name": "Naoriya Pakhanglakpa",
        "stateId": 23
      },
      {
        "id": 2905,
        "name": "Ningthoukhong",
        "stateId": 23
      },
      {
        "id": 2906,
        "name": "Oinam",
        "stateId": 23
      },
      {
        "id": 2907,
        "name": "Porompat",
        "stateId": 23
      },
      {
        "id": 2908,
        "name": "Samurou",
        "stateId": 23
      },
      {
        "id": 2909,
        "name": "Sekmai Bazar",
        "stateId": 23
      },
      {
        "id": 2910,
        "name": "Senapati",
        "stateId": 23
      },
      {
        "id": 2911,
        "name": "Sikhong Sekmai",
        "stateId": 23
      },
      {
        "id": 2912,
        "name": "Sugnu",
        "stateId": 23
      },
      {
        "id": 2913,
        "name": "Thongkhong Laxmi Bazar",
        "stateId": 23
      },
      {
        "id": 2914,
        "name": "Thoubal",
        "stateId": 23
      },
      {
        "id": 2915,
        "name": "Torban",
        "stateId": 23
      },
      {
        "id": 2916,
        "name": "Wangjing",
        "stateId": 23
      },
      {
        "id": 2917,
        "name": "Wangoi",
        "stateId": 23
      },
      {
        "id": 2918,
        "name": "Yairipok",
        "stateId": 23
      },
      {
        "id": 2919,
        "name": "Baghmara",
        "stateId": 24
      },
      {
        "id": 2920,
        "name": "Cherrapunji",
        "stateId": 24
      },
      {
        "id": 2921,
        "name": "Jawai",
        "stateId": 24
      },
      {
        "id": 2922,
        "name": "Madanrting",
        "stateId": 24
      },
      {
        "id": 2923,
        "name": "Mairang",
        "stateId": 24
      },
      {
        "id": 2924,
        "name": "Mawlai",
        "stateId": 24
      },
      {
        "id": 2925,
        "name": "Nongmynsong",
        "stateId": 24
      },
      {
        "id": 2926,
        "name": "Nongpoh",
        "stateId": 24
      },
      {
        "id": 2927,
        "name": "Nongstoin",
        "stateId": 24
      },
      {
        "id": 2928,
        "name": "Nongthymmai",
        "stateId": 24
      },
      {
        "id": 2929,
        "name": "Pynthorumkhrah",
        "stateId": 24
      },
      {
        "id": 2930,
        "name": "Resubelpara",
        "stateId": 24
      },
      {
        "id": 2931,
        "name": "Shillong",
        "stateId": 24
      },
      {
        "id": 2932,
        "name": "Shillong Cantonment",
        "stateId": 24
      },
      {
        "id": 2933,
        "name": "Tura",
        "stateId": 24
      },
      {
        "id": 2934,
        "name": "Williamnagar",
        "stateId": 24
      },
      {
        "id": 2935,
        "name": "Aizawl",
        "stateId": 25
      },
      {
        "id": 2936,
        "name": "Bairabi",
        "stateId": 25
      },
      {
        "id": 2937,
        "name": "Biate",
        "stateId": 25
      },
      {
        "id": 2938,
        "name": "Champhai",
        "stateId": 25
      },
      {
        "id": 2939,
        "name": "Darlawn",
        "stateId": 25
      },
      {
        "id": 2940,
        "name": "Hnahthial",
        "stateId": 25
      },
      {
        "id": 2941,
        "name": "Kawnpui",
        "stateId": 25
      },
      {
        "id": 2942,
        "name": "Khawhai",
        "stateId": 25
      },
      {
        "id": 2943,
        "name": "Khawzawl",
        "stateId": 25
      },
      {
        "id": 2944,
        "name": "Kolasib",
        "stateId": 25
      },
      {
        "id": 2945,
        "name": "Lengpui",
        "stateId": 25
      },
      {
        "id": 2946,
        "name": "Lunglei",
        "stateId": 25
      },
      {
        "id": 2947,
        "name": "Mamit",
        "stateId": 25
      },
      {
        "id": 2948,
        "name": "North Vanlaiphai",
        "stateId": 25
      },
      {
        "id": 2949,
        "name": "Saiha",
        "stateId": 25
      },
      {
        "id": 2950,
        "name": "Sairang",
        "stateId": 25
      },
      {
        "id": 2951,
        "name": "Saitul",
        "stateId": 25
      },
      {
        "id": 2952,
        "name": "Serchhip",
        "stateId": 25
      },
      {
        "id": 2953,
        "name": "Thenzawl",
        "stateId": 25
      },
      {
        "id": 2954,
        "name": "Tlabung",
        "stateId": 25
      },
      {
        "id": 2955,
        "name": "Vairengte",
        "stateId": 25
      },
      {
        "id": 2956,
        "name": "Zawlnuam",
        "stateId": 25
      },
      {
        "id": 2957,
        "name": "Chumukedima",
        "stateId": 26
      },
      {
        "id": 2958,
        "name": "Dimapur",
        "stateId": 26
      },
      {
        "id": 2959,
        "name": "Kohima",
        "stateId": 26
      },
      {
        "id": 2960,
        "name": "Mokokchung",
        "stateId": 26
      },
      {
        "id": 2961,
        "name": "Mon",
        "stateId": 26
      },
      {
        "id": 2962,
        "name": "Phek",
        "stateId": 26
      },
      {
        "id": 2963,
        "name": "Tuensang",
        "stateId": 26
      },
      {
        "id": 2964,
        "name": "Wokha",
        "stateId": 26
      },
      {
        "id": 2965,
        "name": "Zunheboto",
        "stateId": 26
      },
      {
        "id": 2966,
        "name": "Anandapur",
        "stateId": 29
      },
      {
        "id": 2967,
        "name": "Angul",
        "stateId": 29
      },
      {
        "id": 2968,
        "name": "Aska",
        "stateId": 29
      },
      {
        "id": 2969,
        "name": "Athgarh",
        "stateId": 29
      },
      {
        "id": 2970,
        "name": "Athmallik",
        "stateId": 29
      },
      {
        "id": 2971,
        "name": "Balagoda",
        "stateId": 29
      },
      {
        "id": 2972,
        "name": "Balangir",
        "stateId": 29
      },
      {
        "id": 2973,
        "name": "Balasore",
        "stateId": 29
      },
      {
        "id": 2974,
        "name": "Baleshwar",
        "stateId": 29
      },
      {
        "id": 2975,
        "name": "Balimeta",
        "stateId": 29
      },
      {
        "id": 2976,
        "name": "Balugaon",
        "stateId": 29
      },
      {
        "id": 2977,
        "name": "Banapur",
        "stateId": 29
      },
      {
        "id": 2978,
        "name": "Bangura",
        "stateId": 29
      },
      {
        "id": 2979,
        "name": "Banki",
        "stateId": 29
      },
      {
        "id": 2980,
        "name": "Banposh",
        "stateId": 29
      },
      {
        "id": 2981,
        "name": "Barbil",
        "stateId": 29
      },
      {
        "id": 2982,
        "name": "Bargarh",
        "stateId": 29
      },
      {
        "id": 2983,
        "name": "Baripada",
        "stateId": 29
      },
      {
        "id": 2984,
        "name": "Barpali",
        "stateId": 29
      },
      {
        "id": 2985,
        "name": "Basudebpur",
        "stateId": 29
      },
      {
        "id": 2986,
        "name": "Baudh",
        "stateId": 29
      },
      {
        "id": 2987,
        "name": "Belagachhia",
        "stateId": 29
      },
      {
        "id": 2988,
        "name": "Belaguntha",
        "stateId": 29
      },
      {
        "id": 2989,
        "name": "Belpahar",
        "stateId": 29
      },
      {
        "id": 2990,
        "name": "Berhampur",
        "stateId": 29
      },
      {
        "id": 2991,
        "name": "Bhadrak",
        "stateId": 29
      },
      {
        "id": 2992,
        "name": "Bhanjanagar",
        "stateId": 29
      },
      {
        "id": 2993,
        "name": "Bhawanipatna",
        "stateId": 29
      },
      {
        "id": 2994,
        "name": "Bhuban",
        "stateId": 29
      },
      {
        "id": 2995,
        "name": "Bhubaneswar",
        "stateId": 29
      },
      {
        "id": 2996,
        "name": "Binika",
        "stateId": 29
      },
      {
        "id": 2997,
        "name": "Birmitrapur",
        "stateId": 29
      },
      {
        "id": 2998,
        "name": "Bishama Katek",
        "stateId": 29
      },
      {
        "id": 2999,
        "name": "Bolangir",
        "stateId": 29
      },
      {
        "id": 3000,
        "name": "Brahmapur",
        "stateId": 29
      },
      {
        "id": 3001,
        "name": "Brajrajnagar",
        "stateId": 29
      },
      {
        "id": 3002,
        "name": "Buguda",
        "stateId": 29
      },
      {
        "id": 3003,
        "name": "Burla",
        "stateId": 29
      },
      {
        "id": 3004,
        "name": "Byasanagar",
        "stateId": 29
      },
      {
        "id": 3005,
        "name": "Champua",
        "stateId": 29
      },
      {
        "id": 3006,
        "name": "Chandapur",
        "stateId": 29
      },
      {
        "id": 3007,
        "name": "Chandbali",
        "stateId": 29
      },
      {
        "id": 3008,
        "name": "Chandili",
        "stateId": 29
      },
      {
        "id": 3009,
        "name": "Charibatia",
        "stateId": 29
      },
      {
        "id": 3010,
        "name": "Chatrapur",
        "stateId": 29
      },
      {
        "id": 3011,
        "name": "Chikitigarh",
        "stateId": 29
      },
      {
        "id": 3012,
        "name": "Chitrakonda",
        "stateId": 29
      },
      {
        "id": 3013,
        "name": "Choudwar",
        "stateId": 29
      },
      {
        "id": 3014,
        "name": "Cuttack",
        "stateId": 29
      },
      {
        "id": 3015,
        "name": "Dadhapatna",
        "stateId": 29
      },
      {
        "id": 3016,
        "name": "Daitari",
        "stateId": 29
      },
      {
        "id": 3017,
        "name": "Damanjodi",
        "stateId": 29
      },
      {
        "id": 3018,
        "name": "Deogarh",
        "stateId": 29
      },
      {
        "id": 3019,
        "name": "Deracolliery",
        "stateId": 29
      },
      {
        "id": 3020,
        "name": "Dhamanagar",
        "stateId": 29
      },
      {
        "id": 3021,
        "name": "Dhenkanal",
        "stateId": 29
      },
      {
        "id": 3022,
        "name": "Digapahandi",
        "stateId": 29
      },
      {
        "id": 3023,
        "name": "Dungamal",
        "stateId": 29
      },
      {
        "id": 3024,
        "name": "Fertilizer Corporation of Indi",
        "stateId": 29
      },
      {
        "id": 3025,
        "name": "Ganjam",
        "stateId": 29
      },
      {
        "id": 3026,
        "name": "Ghantapada",
        "stateId": 29
      },
      {
        "id": 3027,
        "name": "Gopalpur",
        "stateId": 29
      },
      {
        "id": 3028,
        "name": "Gudari",
        "stateId": 29
      },
      {
        "id": 3029,
        "name": "Gunupur",
        "stateId": 29
      },
      {
        "id": 3030,
        "name": "Hatibandha",
        "stateId": 29
      },
      {
        "id": 3031,
        "name": "Hinjilikatu",
        "stateId": 29
      },
      {
        "id": 3032,
        "name": "Hirakud",
        "stateId": 29
      },
      {
        "id": 3033,
        "name": "Jagatsinghapur",
        "stateId": 29
      },
      {
        "id": 3034,
        "name": "Jajpur",
        "stateId": 29
      },
      {
        "id": 3035,
        "name": "Jalda",
        "stateId": 29
      },
      {
        "id": 3036,
        "name": "Jaleswar",
        "stateId": 29
      },
      {
        "id": 3037,
        "name": "Jatni",
        "stateId": 29
      },
      {
        "id": 3038,
        "name": "Jaypur",
        "stateId": 29
      },
      {
        "id": 3039,
        "name": "Jeypore",
        "stateId": 29
      },
      {
        "id": 3040,
        "name": "Jharsuguda",
        "stateId": 29
      },
      {
        "id": 3041,
        "name": "Jhumpura",
        "stateId": 29
      },
      {
        "id": 3042,
        "name": "Joda",
        "stateId": 29
      },
      {
        "id": 3043,
        "name": "Junagarh",
        "stateId": 29
      },
      {
        "id": 3044,
        "name": "Kamakhyanagar",
        "stateId": 29
      },
      {
        "id": 3045,
        "name": "Kantabanji",
        "stateId": 29
      },
      {
        "id": 3046,
        "name": "Kantilo",
        "stateId": 29
      },
      {
        "id": 3047,
        "name": "Karanja",
        "stateId": 29
      },
      {
        "id": 3048,
        "name": "Kashinagara",
        "stateId": 29
      },
      {
        "id": 3049,
        "name": "Kataka",
        "stateId": 29
      },
      {
        "id": 3050,
        "name": "Kavisuryanagar",
        "stateId": 29
      },
      {
        "id": 3051,
        "name": "Kendrapara",
        "stateId": 29
      },
      {
        "id": 3052,
        "name": "Kendujhar",
        "stateId": 29
      },
      {
        "id": 3053,
        "name": "Keonjhar",
        "stateId": 29
      },
      {
        "id": 3054,
        "name": "Kesinga",
        "stateId": 29
      },
      {
        "id": 3055,
        "name": "Khaliapali",
        "stateId": 29
      },
      {
        "id": 3056,
        "name": "Khalikote",
        "stateId": 29
      },
      {
        "id": 3057,
        "name": "Khandaparha",
        "stateId": 29
      },
      {
        "id": 3058,
        "name": "Kharhial",
        "stateId": 29
      },
      {
        "id": 3059,
        "name": "Kharhial Road",
        "stateId": 29
      },
      {
        "id": 3060,
        "name": "Khatiguda",
        "stateId": 29
      },
      {
        "id": 3061,
        "name": "Khurda",
        "stateId": 29
      },
      {
        "id": 3062,
        "name": "Kochinda",
        "stateId": 29
      },
      {
        "id": 3063,
        "name": "Kodala",
        "stateId": 29
      },
      {
        "id": 3064,
        "name": "Konark",
        "stateId": 29
      },
      {
        "id": 3065,
        "name": "Koraput",
        "stateId": 29
      },
      {
        "id": 3066,
        "name": "Kotaparh",
        "stateId": 29
      },
      {
        "id": 3067,
        "name": "Lanjigarh",
        "stateId": 29
      },
      {
        "id": 3068,
        "name": "Lattikata",
        "stateId": 29
      },
      {
        "id": 3069,
        "name": "Makundapur",
        "stateId": 29
      },
      {
        "id": 3070,
        "name": "Malkangiri",
        "stateId": 29
      },
      {
        "id": 3071,
        "name": "Mukhiguda",
        "stateId": 29
      },
      {
        "id": 3072,
        "name": "Nabarangpur",
        "stateId": 29
      },
      {
        "id": 3073,
        "name": "Nalco",
        "stateId": 29
      },
      {
        "id": 3074,
        "name": "Naurangapur",
        "stateId": 29
      },
      {
        "id": 3075,
        "name": "Nayagarh",
        "stateId": 29
      },
      {
        "id": 3076,
        "name": "Nilagiri",
        "stateId": 29
      },
      {
        "id": 3077,
        "name": "Nimaparha",
        "stateId": 29
      },
      {
        "id": 3078,
        "name": "Nuapada",
        "stateId": 29
      },
      {
        "id": 3079,
        "name": "Nuapatna",
        "stateId": 29
      },
      {
        "id": 3080,
        "name": "OCL Industrialship",
        "stateId": 29
      },
      {
        "id": 3081,
        "name": "Padampur",
        "stateId": 29
      },
      {
        "id": 3082,
        "name": "Paradip",
        "stateId": 29
      },
      {
        "id": 3083,
        "name": "Paradwip",
        "stateId": 29
      },
      {
        "id": 3084,
        "name": "Parlakimidi",
        "stateId": 29
      },
      {
        "id": 3085,
        "name": "Patamundai",
        "stateId": 29
      },
      {
        "id": 3086,
        "name": "Patnagarh",
        "stateId": 29
      },
      {
        "id": 3087,
        "name": "Phulabani",
        "stateId": 29
      },
      {
        "id": 3088,
        "name": "Pipili",
        "stateId": 29
      },
      {
        "id": 3089,
        "name": "Polasara",
        "stateId": 29
      },
      {
        "id": 3090,
        "name": "Pratapsasan",
        "stateId": 29
      },
      {
        "id": 3091,
        "name": "Puri",
        "stateId": 29
      },
      {
        "id": 3092,
        "name": "Purushottampur",
        "stateId": 29
      },
      {
        "id": 3093,
        "name": "Rairangpur",
        "stateId": 29
      },
      {
        "id": 3094,
        "name": "Raj Gangpur",
        "stateId": 29
      },
      {
        "id": 3095,
        "name": "Rambha",
        "stateId": 29
      },
      {
        "id": 3096,
        "name": "Raurkela",
        "stateId": 29
      },
      {
        "id": 3097,
        "name": "Raurkela Civil Township",
        "stateId": 29
      },
      {
        "id": 3098,
        "name": "Rayagada",
        "stateId": 29
      },
      {
        "id": 3099,
        "name": "Redhakhol",
        "stateId": 29
      },
      {
        "id": 3100,
        "name": "Remuna",
        "stateId": 29
      },
      {
        "id": 3101,
        "name": "Rengali",
        "stateId": 29
      },
      {
        "id": 3102,
        "name": "Rourkela",
        "stateId": 29
      },
      {
        "id": 3103,
        "name": "Sambalpur",
        "stateId": 29
      },
      {
        "id": 3104,
        "name": "Sinapali",
        "stateId": 29
      },
      {
        "id": 3105,
        "name": "Sonepur",
        "stateId": 29
      },
      {
        "id": 3106,
        "name": "Sorada",
        "stateId": 29
      },
      {
        "id": 3107,
        "name": "Soro",
        "stateId": 29
      },
      {
        "id": 3108,
        "name": "Sunabeda",
        "stateId": 29
      },
      {
        "id": 3109,
        "name": "Sundargarh",
        "stateId": 29
      },
      {
        "id": 3110,
        "name": "Talcher",
        "stateId": 29
      },
      {
        "id": 3111,
        "name": "Talcher Thermal Power Station",
        "stateId": 29
      },
      {
        "id": 3112,
        "name": "Tarabha",
        "stateId": 29
      },
      {
        "id": 3113,
        "name": "Tensa",
        "stateId": 29
      },
      {
        "id": 3114,
        "name": "Titlagarh",
        "stateId": 29
      },
      {
        "id": 3115,
        "name": "Udala",
        "stateId": 29
      },
      {
        "id": 3116,
        "name": "Udayagiri",
        "stateId": 29
      },
      {
        "id": 3117,
        "name": "Umarkot",
        "stateId": 29
      },
      {
        "id": 3118,
        "name": "Vikrampur",
        "stateId": 29
      },
      {
        "id": 3119,
        "name": "Ariankuppam",
        "stateId": 31
      },
      {
        "id": 3120,
        "name": "Karaikal",
        "stateId": 31
      },
      {
        "id": 3121,
        "name": "Kurumbapet",
        "stateId": 31
      },
      {
        "id": 3122,
        "name": "Mahe",
        "stateId": 31
      },
      {
        "id": 3123,
        "name": "Ozhukarai",
        "stateId": 31
      },
      {
        "id": 3124,
        "name": "Pondicherry",
        "stateId": 31
      },
      {
        "id": 3125,
        "name": "Villianur",
        "stateId": 31
      },
      {
        "id": 3126,
        "name": "Yanam",
        "stateId": 31
      },
      {
        "id": 3127,
        "name": "Abohar",
        "stateId": 32
      },
      {
        "id": 3128,
        "name": "Adampur",
        "stateId": 32
      },
      {
        "id": 3129,
        "name": "Ahmedgarh",
        "stateId": 32
      },
      {
        "id": 3130,
        "name": "Ajnala",
        "stateId": 32
      },
      {
        "id": 3131,
        "name": "Akalgarh",
        "stateId": 32
      },
      {
        "id": 3132,
        "name": "Alawalpur",
        "stateId": 32
      },
      {
        "id": 3133,
        "name": "Amloh",
        "stateId": 32
      },
      {
        "id": 3134,
        "name": "Amritsar",
        "stateId": 32
      },
      {
        "id": 3135,
        "name": "Amritsar Cantonment",
        "stateId": 32
      },
      {
        "id": 3136,
        "name": "Anandpur Sahib",
        "stateId": 32
      },
      {
        "id": 3137,
        "name": "Badhni Kalan",
        "stateId": 32
      },
      {
        "id": 3138,
        "name": "Bagh Purana",
        "stateId": 32
      },
      {
        "id": 3139,
        "name": "Balachaur",
        "stateId": 32
      },
      {
        "id": 3140,
        "name": "Banaur",
        "stateId": 32
      },
      {
        "id": 3141,
        "name": "Banga",
        "stateId": 32
      },
      {
        "id": 3142,
        "name": "Banur",
        "stateId": 32
      },
      {
        "id": 3143,
        "name": "Baretta",
        "stateId": 32
      },
      {
        "id": 3144,
        "name": "Bariwala",
        "stateId": 32
      },
      {
        "id": 3145,
        "name": "Barnala",
        "stateId": 32
      },
      {
        "id": 3146,
        "name": "Bassi Pathana",
        "stateId": 32
      },
      {
        "id": 3147,
        "name": "Batala",
        "stateId": 32
      },
      {
        "id": 3148,
        "name": "Bathinda",
        "stateId": 32
      },
      {
        "id": 3149,
        "name": "Begowal",
        "stateId": 32
      },
      {
        "id": 3150,
        "name": "Behrampur",
        "stateId": 32
      },
      {
        "id": 3151,
        "name": "Bhabat",
        "stateId": 32
      },
      {
        "id": 3152,
        "name": "Bhadur",
        "stateId": 32
      },
      {
        "id": 3153,
        "name": "Bhankharpur",
        "stateId": 32
      },
      {
        "id": 3154,
        "name": "Bharoli Kalan",
        "stateId": 32
      },
      {
        "id": 3155,
        "name": "Bhawanigarh",
        "stateId": 32
      },
      {
        "id": 3156,
        "name": "Bhikhi",
        "stateId": 32
      },
      {
        "id": 3157,
        "name": "Bhikhiwind",
        "stateId": 32
      },
      {
        "id": 3158,
        "name": "Bhisiana",
        "stateId": 32
      },
      {
        "id": 3159,
        "name": "Bhogpur",
        "stateId": 32
      },
      {
        "id": 3160,
        "name": "Bhuch",
        "stateId": 32
      },
      {
        "id": 3161,
        "name": "Bhulath",
        "stateId": 32
      },
      {
        "id": 3162,
        "name": "Budha Theh",
        "stateId": 32
      },
      {
        "id": 3163,
        "name": "Budhlada",
        "stateId": 32
      },
      {
        "id": 3164,
        "name": "Chima",
        "stateId": 32
      },
      {
        "id": 3165,
        "name": "Chohal",
        "stateId": 32
      },
      {
        "id": 3166,
        "name": "Dasuya",
        "stateId": 32
      },
      {
        "id": 3167,
        "name": "Daulatpur",
        "stateId": 32
      },
      {
        "id": 3168,
        "name": "Dera Baba Nanak",
        "stateId": 32
      },
      {
        "id": 3169,
        "name": "Dera Bassi",
        "stateId": 32
      },
      {
        "id": 3170,
        "name": "Dhanaula",
        "stateId": 32
      },
      {
        "id": 3171,
        "name": "Dharam Kot",
        "stateId": 32
      },
      {
        "id": 3172,
        "name": "Dhariwal",
        "stateId": 32
      },
      {
        "id": 3173,
        "name": "Dhilwan",
        "stateId": 32
      },
      {
        "id": 3174,
        "name": "Dhuri",
        "stateId": 32
      },
      {
        "id": 3175,
        "name": "Dinanagar",
        "stateId": 32
      },
      {
        "id": 3176,
        "name": "Dirba",
        "stateId": 32
      },
      {
        "id": 3177,
        "name": "Doraha",
        "stateId": 32
      },
      {
        "id": 3178,
        "name": "Faridkot",
        "stateId": 32
      },
      {
        "id": 3179,
        "name": "Fateh Nangal",
        "stateId": 32
      },
      {
        "id": 3180,
        "name": "Fatehgarh Churian",
        "stateId": 32
      },
      {
        "id": 3181,
        "name": "Fatehgarh Sahib",
        "stateId": 32
      },
      {
        "id": 3182,
        "name": "Fazilka",
        "stateId": 32
      },
      {
        "id": 3183,
        "name": "Firozpur",
        "stateId": 32
      },
      {
        "id": 3184,
        "name": "Firozpur Cantonment",
        "stateId": 32
      },
      {
        "id": 3185,
        "name": "Gardhiwala",
        "stateId": 32
      },
      {
        "id": 3186,
        "name": "Garhshankar",
        "stateId": 32
      },
      {
        "id": 3187,
        "name": "Ghagga",
        "stateId": 32
      },
      {
        "id": 3188,
        "name": "Ghanaur",
        "stateId": 32
      },
      {
        "id": 3189,
        "name": "Giddarbaha",
        "stateId": 32
      },
      {
        "id": 3190,
        "name": "Gobindgarh",
        "stateId": 32
      },
      {
        "id": 3191,
        "name": "Goniana",
        "stateId": 32
      },
      {
        "id": 3192,
        "name": "Goraya",
        "stateId": 32
      },
      {
        "id": 3193,
        "name": "Gurdaspur",
        "stateId": 32
      },
      {
        "id": 3194,
        "name": "Guru Har Sahai",
        "stateId": 32
      },
      {
        "id": 3195,
        "name": "Hajipur",
        "stateId": 32
      },
      {
        "id": 3196,
        "name": "Handiaya",
        "stateId": 32
      },
      {
        "id": 3197,
        "name": "Hariana",
        "stateId": 32
      },
      {
        "id": 3198,
        "name": "Hoshiarpur",
        "stateId": 32
      },
      {
        "id": 3199,
        "name": "Hussainpur",
        "stateId": 32
      },
      {
        "id": 3200,
        "name": "Jagraon",
        "stateId": 32
      },
      {
        "id": 3201,
        "name": "Jaitu",
        "stateId": 32
      },
      {
        "id": 3202,
        "name": "Jalalabad",
        "stateId": 32
      },
      {
        "id": 3203,
        "name": "Jalandhar",
        "stateId": 32
      },
      {
        "id": 3204,
        "name": "Jalandhar Cantonment",
        "stateId": 32
      },
      {
        "id": 3205,
        "name": "Jandiala",
        "stateId": 32
      },
      {
        "id": 3206,
        "name": "Jugial",
        "stateId": 32
      },
      {
        "id": 3207,
        "name": "Kalanaur",
        "stateId": 32
      },
      {
        "id": 3208,
        "name": "Kapurthala",
        "stateId": 32
      },
      {
        "id": 3209,
        "name": "Karoran",
        "stateId": 32
      },
      {
        "id": 3210,
        "name": "Kartarpur",
        "stateId": 32
      },
      {
        "id": 3211,
        "name": "Khamanon",
        "stateId": 32
      },
      {
        "id": 3212,
        "name": "Khanauri",
        "stateId": 32
      },
      {
        "id": 3213,
        "name": "Khanna",
        "stateId": 32
      },
      {
        "id": 3214,
        "name": "Kharar",
        "stateId": 32
      },
      {
        "id": 3215,
        "name": "Khem Karan",
        "stateId": 32
      },
      {
        "id": 3216,
        "name": "Kot Fatta",
        "stateId": 32
      },
      {
        "id": 3217,
        "name": "Kot Isa Khan",
        "stateId": 32
      },
      {
        "id": 3218,
        "name": "Kot Kapura",
        "stateId": 32
      },
      {
        "id": 3219,
        "name": "Kotkapura",
        "stateId": 32
      },
      {
        "id": 3220,
        "name": "Kurali",
        "stateId": 32
      },
      {
        "id": 3221,
        "name": "Lalru",
        "stateId": 32
      },
      {
        "id": 3222,
        "name": "Lehra Gaga",
        "stateId": 32
      },
      {
        "id": 3223,
        "name": "Lodhian Khas",
        "stateId": 32
      },
      {
        "id": 3224,
        "name": "Longowal",
        "stateId": 32
      },
      {
        "id": 3225,
        "name": "Ludhiana",
        "stateId": 32
      },
      {
        "id": 3226,
        "name": "Machhiwara",
        "stateId": 32
      },
      {
        "id": 3227,
        "name": "Mahilpur",
        "stateId": 32
      },
      {
        "id": 3228,
        "name": "Majitha",
        "stateId": 32
      },
      {
        "id": 3229,
        "name": "Makhu",
        "stateId": 32
      },
      {
        "id": 3230,
        "name": "Malaut",
        "stateId": 32
      },
      {
        "id": 3231,
        "name": "Malerkotla",
        "stateId": 32
      },
      {
        "id": 3232,
        "name": "Maloud",
        "stateId": 32
      },
      {
        "id": 3233,
        "name": "Mandi Gobindgarh",
        "stateId": 32
      },
      {
        "id": 3234,
        "name": "Mansa",
        "stateId": 32
      },
      {
        "id": 3235,
        "name": "Maur",
        "stateId": 32
      },
      {
        "id": 3236,
        "name": "Moga",
        "stateId": 32
      },
      {
        "id": 3237,
        "name": "Mohali",
        "stateId": 32
      },
      {
        "id": 3238,
        "name": "Moonak",
        "stateId": 32
      },
      {
        "id": 3239,
        "name": "Morinda",
        "stateId": 32
      },
      {
        "id": 3240,
        "name": "Mukerian",
        "stateId": 32
      },
      {
        "id": 3241,
        "name": "Muktsar",
        "stateId": 32
      },
      {
        "id": 3242,
        "name": "Mullanpur Dakha",
        "stateId": 32
      },
      {
        "id": 3243,
        "name": "Mullanpur Garibdas",
        "stateId": 32
      },
      {
        "id": 3244,
        "name": "Munak",
        "stateId": 32
      },
      {
        "id": 3245,
        "name": "Muradpura",
        "stateId": 32
      },
      {
        "id": 3246,
        "name": "Nabha",
        "stateId": 32
      },
      {
        "id": 3247,
        "name": "Nakodar",
        "stateId": 32
      },
      {
        "id": 3248,
        "name": "Nangal",
        "stateId": 32
      },
      {
        "id": 3249,
        "name": "Nawashahr",
        "stateId": 32
      },
      {
        "id": 3250,
        "name": "Naya Nangal",
        "stateId": 32
      },
      {
        "id": 3251,
        "name": "Nehon",
        "stateId": 32
      },
      {
        "id": 3252,
        "name": "Nurmahal",
        "stateId": 32
      },
      {
        "id": 3253,
        "name": "Pathankot",
        "stateId": 32
      },
      {
        "id": 3254,
        "name": "Patiala",
        "stateId": 32
      },
      {
        "id": 3255,
        "name": "Patti",
        "stateId": 32
      },
      {
        "id": 3256,
        "name": "Pattran",
        "stateId": 32
      },
      {
        "id": 3257,
        "name": "Payal",
        "stateId": 32
      },
      {
        "id": 3258,
        "name": "Phagwara",
        "stateId": 32
      },
      {
        "id": 3259,
        "name": "Phillaur",
        "stateId": 32
      },
      {
        "id": 3260,
        "name": "Qadian",
        "stateId": 32
      },
      {
        "id": 3261,
        "name": "Rahon",
        "stateId": 32
      },
      {
        "id": 3262,
        "name": "Raikot",
        "stateId": 32
      },
      {
        "id": 3263,
        "name": "Raja Sansi",
        "stateId": 32
      },
      {
        "id": 3264,
        "name": "Rajpura",
        "stateId": 32
      },
      {
        "id": 3265,
        "name": "Ram Das",
        "stateId": 32
      },
      {
        "id": 3266,
        "name": "Raman",
        "stateId": 32
      },
      {
        "id": 3267,
        "name": "Rampura",
        "stateId": 32
      },
      {
        "id": 3268,
        "name": "Rayya",
        "stateId": 32
      },
      {
        "id": 3269,
        "name": "Rupnagar",
        "stateId": 32
      },
      {
        "id": 3270,
        "name": "Rurki Kasba",
        "stateId": 32
      },
      {
        "id": 3271,
        "name": "Sahnewal",
        "stateId": 32
      },
      {
        "id": 3272,
        "name": "Samana",
        "stateId": 32
      },
      {
        "id": 3273,
        "name": "Samrala",
        "stateId": 32
      },
      {
        "id": 3274,
        "name": "Sanaur",
        "stateId": 32
      },
      {
        "id": 3275,
        "name": "Sangat",
        "stateId": 32
      },
      {
        "id": 3276,
        "name": "Sangrur",
        "stateId": 32
      },
      {
        "id": 3277,
        "name": "Sansarpur",
        "stateId": 32
      },
      {
        "id": 3278,
        "name": "Sardulgarh",
        "stateId": 32
      },
      {
        "id": 3279,
        "name": "Shahkot",
        "stateId": 32
      },
      {
        "id": 3280,
        "name": "Sham Churasi",
        "stateId": 32
      },
      {
        "id": 3281,
        "name": "Shekhpura",
        "stateId": 32
      },
      {
        "id": 3282,
        "name": "Sirhind",
        "stateId": 32
      },
      {
        "id": 3283,
        "name": "Sri Hargobindpur",
        "stateId": 32
      },
      {
        "id": 3284,
        "name": "Sujanpur",
        "stateId": 32
      },
      {
        "id": 3285,
        "name": "Sultanpur Lodhi",
        "stateId": 32
      },
      {
        "id": 3286,
        "name": "Sunam",
        "stateId": 32
      },
      {
        "id": 3287,
        "name": "Talwandi Bhai",
        "stateId": 32
      },
      {
        "id": 3288,
        "name": "Talwara",
        "stateId": 32
      },
      {
        "id": 3289,
        "name": "Tappa",
        "stateId": 32
      },
      {
        "id": 3290,
        "name": "Tarn Taran",
        "stateId": 32
      },
      {
        "id": 3291,
        "name": "Urmar Tanda",
        "stateId": 32
      },
      {
        "id": 3292,
        "name": "Zira",
        "stateId": 32
      },
      {
        "id": 3293,
        "name": "Zirakpur",
        "stateId": 32
      },
      {
        "id": 3294,
        "name": "Abu Road",
        "stateId": 33
      },
      {
        "id": 3295,
        "name": "Ajmer",
        "stateId": 33
      },
      {
        "id": 3296,
        "name": "Aklera",
        "stateId": 33
      },
      {
        "id": 3297,
        "name": "Alwar",
        "stateId": 33
      },
      {
        "id": 3298,
        "name": "Amet",
        "stateId": 33
      },
      {
        "id": 3299,
        "name": "Antah",
        "stateId": 33
      },
      {
        "id": 3300,
        "name": "Anupgarh",
        "stateId": 33
      },
      {
        "id": 3301,
        "name": "Asind",
        "stateId": 33
      },
      {
        "id": 3302,
        "name": "Bagar",
        "stateId": 33
      },
      {
        "id": 3303,
        "name": "Bagru",
        "stateId": 33
      },
      {
        "id": 3304,
        "name": "Bahror",
        "stateId": 33
      },
      {
        "id": 3305,
        "name": "Bakani",
        "stateId": 33
      },
      {
        "id": 3306,
        "name": "Bali",
        "stateId": 33
      },
      {
        "id": 3307,
        "name": "Balotra",
        "stateId": 33
      },
      {
        "id": 3308,
        "name": "Bandikui",
        "stateId": 33
      },
      {
        "id": 3309,
        "name": "Banswara",
        "stateId": 33
      },
      {
        "id": 3310,
        "name": "Baran",
        "stateId": 33
      },
      {
        "id": 3311,
        "name": "Bari",
        "stateId": 33
      },
      {
        "id": 3312,
        "name": "Bari Sadri",
        "stateId": 33
      },
      {
        "id": 3313,
        "name": "Barmer",
        "stateId": 33
      },
      {
        "id": 3314,
        "name": "Basi",
        "stateId": 33
      },
      {
        "id": 3315,
        "name": "Basni Belima",
        "stateId": 33
      },
      {
        "id": 3316,
        "name": "Baswa",
        "stateId": 33
      },
      {
        "id": 3317,
        "name": "Bayana",
        "stateId": 33
      },
      {
        "id": 3318,
        "name": "Beawar",
        "stateId": 33
      },
      {
        "id": 3319,
        "name": "Begun",
        "stateId": 33
      },
      {
        "id": 3320,
        "name": "Bhadasar",
        "stateId": 33
      },
      {
        "id": 3321,
        "name": "Bhadra",
        "stateId": 33
      },
      {
        "id": 3322,
        "name": "Bhalariya",
        "stateId": 33
      },
      {
        "id": 3323,
        "name": "Bharatpur",
        "stateId": 33
      },
      {
        "id": 3324,
        "name": "Bhasawar",
        "stateId": 33
      },
      {
        "id": 3325,
        "name": "Bhawani Mandi",
        "stateId": 33
      },
      {
        "id": 3326,
        "name": "Bhawri",
        "stateId": 33
      },
      {
        "id": 3327,
        "name": "Bhilwara",
        "stateId": 33
      },
      {
        "id": 3328,
        "name": "Bhindar",
        "stateId": 33
      },
      {
        "id": 3329,
        "name": "Bhinmal",
        "stateId": 33
      },
      {
        "id": 3330,
        "name": "Bhiwadi",
        "stateId": 33
      },
      {
        "id": 3331,
        "name": "Bijoliya Kalan",
        "stateId": 33
      },
      {
        "id": 3332,
        "name": "Bikaner",
        "stateId": 33
      },
      {
        "id": 3333,
        "name": "Bilara",
        "stateId": 33
      },
      {
        "id": 3334,
        "name": "Bissau",
        "stateId": 33
      },
      {
        "id": 3335,
        "name": "Borkhera",
        "stateId": 33
      },
      {
        "id": 3336,
        "name": "Budhpura",
        "stateId": 33
      },
      {
        "id": 3337,
        "name": "Bundi",
        "stateId": 33
      },
      {
        "id": 3338,
        "name": "Chatsu",
        "stateId": 33
      },
      {
        "id": 3339,
        "name": "Chechat",
        "stateId": 33
      },
      {
        "id": 3340,
        "name": "Chhabra",
        "stateId": 33
      },
      {
        "id": 3341,
        "name": "Chhapar",
        "stateId": 33
      },
      {
        "id": 3342,
        "name": "Chhipa Barod",
        "stateId": 33
      },
      {
        "id": 3343,
        "name": "Chhoti Sadri",
        "stateId": 33
      },
      {
        "id": 3344,
        "name": "Chirawa",
        "stateId": 33
      },
      {
        "id": 3345,
        "name": "Chittaurgarh",
        "stateId": 33
      },
      {
        "id": 3346,
        "name": "Chittorgarh",
        "stateId": 33
      },
      {
        "id": 3347,
        "name": "Chomun",
        "stateId": 33
      },
      {
        "id": 3348,
        "name": "Churu",
        "stateId": 33
      },
      {
        "id": 3349,
        "name": "Daosa",
        "stateId": 33
      },
      {
        "id": 3350,
        "name": "Dariba",
        "stateId": 33
      },
      {
        "id": 3351,
        "name": "Dausa",
        "stateId": 33
      },
      {
        "id": 3352,
        "name": "Deoli",
        "stateId": 33
      },
      {
        "id": 3353,
        "name": "Deshnok",
        "stateId": 33
      },
      {
        "id": 3354,
        "name": "Devgarh",
        "stateId": 33
      },
      {
        "id": 3355,
        "name": "Devli",
        "stateId": 33
      },
      {
        "id": 3356,
        "name": "Dhariawad",
        "stateId": 33
      },
      {
        "id": 3357,
        "name": "Dhaulpur",
        "stateId": 33
      },
      {
        "id": 3358,
        "name": "Dholpur",
        "stateId": 33
      },
      {
        "id": 3359,
        "name": "Didwana",
        "stateId": 33
      },
      {
        "id": 3360,
        "name": "Dig",
        "stateId": 33
      },
      {
        "id": 3361,
        "name": "Dungargarh",
        "stateId": 33
      },
      {
        "id": 3362,
        "name": "Dungarpur",
        "stateId": 33
      },
      {
        "id": 3363,
        "name": "Falna",
        "stateId": 33
      },
      {
        "id": 3364,
        "name": "Fatehnagar",
        "stateId": 33
      },
      {
        "id": 3365,
        "name": "Fatehpur",
        "stateId": 33
      },
      {
        "id": 3366,
        "name": "Gajsinghpur",
        "stateId": 33
      },
      {
        "id": 3367,
        "name": "Galiakot",
        "stateId": 33
      },
      {
        "id": 3368,
        "name": "Ganganagar",
        "stateId": 33
      },
      {
        "id": 3369,
        "name": "Gangapur",
        "stateId": 33
      },
      {
        "id": 3370,
        "name": "Goredi Chancha",
        "stateId": 33
      },
      {
        "id": 3371,
        "name": "Gothra",
        "stateId": 33
      },
      {
        "id": 3372,
        "name": "Govindgarh",
        "stateId": 33
      },
      {
        "id": 3373,
        "name": "Gulabpura",
        "stateId": 33
      },
      {
        "id": 3374,
        "name": "Hanumangarh",
        "stateId": 33
      },
      {
        "id": 3375,
        "name": "Hindaun",
        "stateId": 33
      },
      {
        "id": 3376,
        "name": "Indragarh",
        "stateId": 33
      },
      {
        "id": 3377,
        "name": "Jahazpur",
        "stateId": 33
      },
      {
        "id": 3378,
        "name": "Jaipur",
        "stateId": 33
      },
      {
        "id": 3379,
        "name": "Jaisalmer",
        "stateId": 33
      },
      {
        "id": 3380,
        "name": "Jaiselmer",
        "stateId": 33
      },
      {
        "id": 3381,
        "name": "Jaitaran",
        "stateId": 33
      },
      {
        "id": 3382,
        "name": "Jalore",
        "stateId": 33
      },
      {
        "id": 3383,
        "name": "Jhalawar",
        "stateId": 33
      },
      {
        "id": 3384,
        "name": "Jhalrapatan",
        "stateId": 33
      },
      {
        "id": 3385,
        "name": "Jhunjhunun",
        "stateId": 33
      },
      {
        "id": 3386,
        "name": "Jobner",
        "stateId": 33
      },
      {
        "id": 3387,
        "name": "Jodhpur",
        "stateId": 33
      },
      {
        "id": 3388,
        "name": "Kaithun",
        "stateId": 33
      },
      {
        "id": 3389,
        "name": "Kaman",
        "stateId": 33
      },
      {
        "id": 3390,
        "name": "Kankroli",
        "stateId": 33
      },
      {
        "id": 3391,
        "name": "Kanor",
        "stateId": 33
      },
      {
        "id": 3392,
        "name": "Kapasan",
        "stateId": 33
      },
      {
        "id": 3393,
        "name": "Kaprain",
        "stateId": 33
      },
      {
        "id": 3394,
        "name": "Karanpura",
        "stateId": 33
      },
      {
        "id": 3395,
        "name": "Karauli",
        "stateId": 33
      },
      {
        "id": 3396,
        "name": "Kekri",
        "stateId": 33
      },
      {
        "id": 3397,
        "name": "Keshorai Patan",
        "stateId": 33
      },
      {
        "id": 3398,
        "name": "Kesrisinghpur",
        "stateId": 33
      },
      {
        "id": 3399,
        "name": "Khairthal",
        "stateId": 33
      },
      {
        "id": 3400,
        "name": "Khandela",
        "stateId": 33
      },
      {
        "id": 3401,
        "name": "Khanpur",
        "stateId": 33
      },
      {
        "id": 3402,
        "name": "Kherli",
        "stateId": 33
      },
      {
        "id": 3403,
        "name": "Kherliganj",
        "stateId": 33
      },
      {
        "id": 3404,
        "name": "Kherwara Chhaoni",
        "stateId": 33
      },
      {
        "id": 3405,
        "name": "Khetri",
        "stateId": 33
      },
      {
        "id": 3406,
        "name": "Kiranipura",
        "stateId": 33
      },
      {
        "id": 3407,
        "name": "Kishangarh",
        "stateId": 33
      },
      {
        "id": 3408,
        "name": "Kishangarh Ranwal",
        "stateId": 33
      },
      {
        "id": 3409,
        "name": "Kolvi Rajendrapura",
        "stateId": 33
      },
      {
        "id": 3410,
        "name": "Kot Putli",
        "stateId": 33
      },
      {
        "id": 3411,
        "name": "Kota",
        "stateId": 33
      },
      {
        "id": 3412,
        "name": "Kuchaman",
        "stateId": 33
      },
      {
        "id": 3413,
        "name": "Kuchera",
        "stateId": 33
      },
      {
        "id": 3414,
        "name": "Kumbhalgarh",
        "stateId": 33
      },
      {
        "id": 3415,
        "name": "Kumbhkot",
        "stateId": 33
      },
      {
        "id": 3416,
        "name": "Kumher",
        "stateId": 33
      },
      {
        "id": 3417,
        "name": "Kushalgarh",
        "stateId": 33
      },
      {
        "id": 3418,
        "name": "Lachhmangarh",
        "stateId": 33
      },
      {
        "id": 3419,
        "name": "Ladnun",
        "stateId": 33
      },
      {
        "id": 3420,
        "name": "Lakheri",
        "stateId": 33
      },
      {
        "id": 3421,
        "name": "Lalsot",
        "stateId": 33
      },
      {
        "id": 3422,
        "name": "Losal",
        "stateId": 33
      },
      {
        "id": 3423,
        "name": "Madanganj",
        "stateId": 33
      },
      {
        "id": 3424,
        "name": "Mahu Kalan",
        "stateId": 33
      },
      {
        "id": 3425,
        "name": "Mahwa",
        "stateId": 33
      },
      {
        "id": 3426,
        "name": "Makrana",
        "stateId": 33
      },
      {
        "id": 3427,
        "name": "Malpura",
        "stateId": 33
      },
      {
        "id": 3428,
        "name": "Mandal",
        "stateId": 33
      },
      {
        "id": 3429,
        "name": "Mandalgarh",
        "stateId": 33
      },
      {
        "id": 3430,
        "name": "Mandawar",
        "stateId": 33
      },
      {
        "id": 3431,
        "name": "Mandwa",
        "stateId": 33
      },
      {
        "id": 3432,
        "name": "Mangrol",
        "stateId": 33
      },
      {
        "id": 3433,
        "name": "Manohar Thana",
        "stateId": 33
      },
      {
        "id": 3434,
        "name": "Manoharpur",
        "stateId": 33
      },
      {
        "id": 3435,
        "name": "Marwar",
        "stateId": 33
      },
      {
        "id": 3436,
        "name": "Merta",
        "stateId": 33
      },
      {
        "id": 3437,
        "name": "Modak",
        "stateId": 33
      },
      {
        "id": 3438,
        "name": "Mount Abu",
        "stateId": 33
      },
      {
        "id": 3439,
        "name": "Mukandgarh",
        "stateId": 33
      },
      {
        "id": 3440,
        "name": "Mundwa",
        "stateId": 33
      },
      {
        "id": 3441,
        "name": "Nadbai",
        "stateId": 33
      },
      {
        "id": 3442,
        "name": "Naenwa",
        "stateId": 33
      },
      {
        "id": 3443,
        "name": "Nagar",
        "stateId": 33
      },
      {
        "id": 3444,
        "name": "Nagaur",
        "stateId": 33
      },
      {
        "id": 3445,
        "name": "Napasar",
        "stateId": 33
      },
      {
        "id": 3446,
        "name": "Naraina",
        "stateId": 33
      },
      {
        "id": 3447,
        "name": "Nasirabad",
        "stateId": 33
      },
      {
        "id": 3448,
        "name": "Nathdwara",
        "stateId": 33
      },
      {
        "id": 3449,
        "name": "Nawa",
        "stateId": 33
      },
      {
        "id": 3450,
        "name": "Nawalgarh",
        "stateId": 33
      },
      {
        "id": 3451,
        "name": "Neem Ka Thana",
        "stateId": 33
      },
      {
        "id": 3452,
        "name": "Neemrana",
        "stateId": 33
      },
      {
        "id": 3453,
        "name": "Newa Talai",
        "stateId": 33
      },
      {
        "id": 3454,
        "name": "Nimaj",
        "stateId": 33
      },
      {
        "id": 3455,
        "name": "Nimbahera",
        "stateId": 33
      },
      {
        "id": 3456,
        "name": "Niwai",
        "stateId": 33
      },
      {
        "id": 3457,
        "name": "Nohar",
        "stateId": 33
      },
      {
        "id": 3458,
        "name": "Nokha",
        "stateId": 33
      },
      {
        "id": 3459,
        "name": "One SGM",
        "stateId": 33
      },
      {
        "id": 3460,
        "name": "Padampur",
        "stateId": 33
      },
      {
        "id": 3461,
        "name": "Pali",
        "stateId": 33
      },
      {
        "id": 3462,
        "name": "Partapur",
        "stateId": 33
      },
      {
        "id": 3463,
        "name": "Parvatsar",
        "stateId": 33
      },
      {
        "id": 3464,
        "name": "Pasoond",
        "stateId": 33
      },
      {
        "id": 3465,
        "name": "Phalna",
        "stateId": 33
      },
      {
        "id": 3466,
        "name": "Phalodi",
        "stateId": 33
      },
      {
        "id": 3467,
        "name": "Phulera",
        "stateId": 33
      },
      {
        "id": 3468,
        "name": "Pilani",
        "stateId": 33
      },
      {
        "id": 3469,
        "name": "Pilibanga",
        "stateId": 33
      },
      {
        "id": 3470,
        "name": "Pindwara",
        "stateId": 33
      },
      {
        "id": 3471,
        "name": "Pipalia Kalan",
        "stateId": 33
      },
      {
        "id": 3472,
        "name": "Pipar",
        "stateId": 33
      },
      {
        "id": 3473,
        "name": "Pirawa",
        "stateId": 33
      },
      {
        "id": 3474,
        "name": "Pokaran",
        "stateId": 33
      },
      {
        "id": 3475,
        "name": "Pratapgarh",
        "stateId": 33
      },
      {
        "id": 3476,
        "name": "Pushkar",
        "stateId": 33
      },
      {
        "id": 3477,
        "name": "Raipur",
        "stateId": 33
      },
      {
        "id": 3478,
        "name": "Raisinghnagar",
        "stateId": 33
      },
      {
        "id": 3479,
        "name": "Rajakhera",
        "stateId": 33
      },
      {
        "id": 3480,
        "name": "Rajaldesar",
        "stateId": 33
      },
      {
        "id": 3481,
        "name": "Rajgarh",
        "stateId": 33
      },
      {
        "id": 3482,
        "name": "Rajsamand",
        "stateId": 33
      },
      {
        "id": 3483,
        "name": "Ramganj Mandi",
        "stateId": 33
      },
      {
        "id": 3484,
        "name": "Ramgarh",
        "stateId": 33
      },
      {
        "id": 3485,
        "name": "Rani",
        "stateId": 33
      },
      {
        "id": 3486,
        "name": "Raniwara",
        "stateId": 33
      },
      {
        "id": 3487,
        "name": "Ratan Nagar",
        "stateId": 33
      },
      {
        "id": 3488,
        "name": "Ratangarh",
        "stateId": 33
      },
      {
        "id": 3489,
        "name": "Rawatbhata",
        "stateId": 33
      },
      {
        "id": 3490,
        "name": "Rawatsar",
        "stateId": 33
      },
      {
        "id": 3491,
        "name": "Rikhabdev",
        "stateId": 33
      },
      {
        "id": 3492,
        "name": "Ringas",
        "stateId": 33
      },
      {
        "id": 3493,
        "name": "Sadri",
        "stateId": 33
      },
      {
        "id": 3494,
        "name": "Sadulshahar",
        "stateId": 33
      },
      {
        "id": 3495,
        "name": "Sagwara",
        "stateId": 33
      },
      {
        "id": 3496,
        "name": "Salumbar",
        "stateId": 33
      },
      {
        "id": 3497,
        "name": "Sambhar",
        "stateId": 33
      },
      {
        "id": 3498,
        "name": "Samdari",
        "stateId": 33
      },
      {
        "id": 3499,
        "name": "Sanchor",
        "stateId": 33
      },
      {
        "id": 3500,
        "name": "Sangariya",
        "stateId": 33
      },
      {
        "id": 3501,
        "name": "Sangod",
        "stateId": 33
      },
      {
        "id": 3502,
        "name": "Sardarshahr",
        "stateId": 33
      },
      {
        "id": 3503,
        "name": "Sarwar",
        "stateId": 33
      },
      {
        "id": 3504,
        "name": "Satal Kheri",
        "stateId": 33
      },
      {
        "id": 3505,
        "name": "Sawai Madhopur",
        "stateId": 33
      },
      {
        "id": 3506,
        "name": "Sewan Kalan",
        "stateId": 33
      },
      {
        "id": 3507,
        "name": "Shahpura",
        "stateId": 33
      },
      {
        "id": 3508,
        "name": "Sheoganj",
        "stateId": 33
      },
      {
        "id": 3509,
        "name": "Sikar",
        "stateId": 33
      },
      {
        "id": 3510,
        "name": "Sirohi",
        "stateId": 33
      },
      {
        "id": 3511,
        "name": "Siwana",
        "stateId": 33
      },
      {
        "id": 3512,
        "name": "Sogariya",
        "stateId": 33
      },
      {
        "id": 3513,
        "name": "Sojat",
        "stateId": 33
      },
      {
        "id": 3514,
        "name": "Sojat Road",
        "stateId": 33
      },
      {
        "id": 3515,
        "name": "Sri Madhopur",
        "stateId": 33
      },
      {
        "id": 3516,
        "name": "Sriganganagar",
        "stateId": 33
      },
      {
        "id": 3517,
        "name": "Sujangarh",
        "stateId": 33
      },
      {
        "id": 3518,
        "name": "Suket",
        "stateId": 33
      },
      {
        "id": 3519,
        "name": "Sumerpur",
        "stateId": 33
      },
      {
        "id": 3520,
        "name": "Sunel",
        "stateId": 33
      },
      {
        "id": 3521,
        "name": "Surajgarh",
        "stateId": 33
      },
      {
        "id": 3522,
        "name": "Suratgarh",
        "stateId": 33
      },
      {
        "id": 3523,
        "name": "Swaroopganj",
        "stateId": 33
      },
      {
        "id": 3524,
        "name": "Takhatgarh",
        "stateId": 33
      },
      {
        "id": 3525,
        "name": "Taranagar",
        "stateId": 33
      },
      {
        "id": 3526,
        "name": "Three STR",
        "stateId": 33
      },
      {
        "id": 3527,
        "name": "Tijara",
        "stateId": 33
      },
      {
        "id": 3528,
        "name": "Toda Bhim",
        "stateId": 33
      },
      {
        "id": 3529,
        "name": "Toda Raisingh",
        "stateId": 33
      },
      {
        "id": 3530,
        "name": "Todra",
        "stateId": 33
      },
      {
        "id": 3531,
        "name": "Tonk",
        "stateId": 33
      },
      {
        "id": 3532,
        "name": "Udaipur",
        "stateId": 33
      },
      {
        "id": 3533,
        "name": "Udpura",
        "stateId": 33
      },
      {
        "id": 3534,
        "name": "Uniara",
        "stateId": 33
      },
      {
        "id": 3535,
        "name": "Vanasthali",
        "stateId": 33
      },
      {
        "id": 3536,
        "name": "Vidyavihar",
        "stateId": 33
      },
      {
        "id": 3537,
        "name": "Vijainagar",
        "stateId": 33
      },
      {
        "id": 3538,
        "name": "Viratnagar",
        "stateId": 33
      },
      {
        "id": 3539,
        "name": "Wer",
        "stateId": 33
      },
      {
        "id": 3540,
        "name": "Gangtok",
        "stateId": 34
      },
      {
        "id": 3541,
        "name": "Gezing",
        "stateId": 34
      },
      {
        "id": 3542,
        "name": "Jorethang",
        "stateId": 34
      },
      {
        "id": 3543,
        "name": "Mangan",
        "stateId": 34
      },
      {
        "id": 3544,
        "name": "Namchi",
        "stateId": 34
      },
      {
        "id": 3545,
        "name": "Naya Bazar",
        "stateId": 34
      },
      {
        "id": 3546,
        "name": "No City",
        "stateId": 34
      },
      {
        "id": 3547,
        "name": "Rangpo",
        "stateId": 34
      },
      {
        "id": 3548,
        "name": "Sikkim",
        "stateId": 34
      },
      {
        "id": 3549,
        "name": "Singtam",
        "stateId": 34
      },
      {
        "id": 3550,
        "name": "Upper Tadong",
        "stateId": 34
      },
      {
        "id": 3551,
        "name": "Abiramam",
        "stateId": 35
      },
      {
        "id": 3552,
        "name": "Achampudur",
        "stateId": 35
      },
      {
        "id": 3553,
        "name": "Acharapakkam",
        "stateId": 35
      },
      {
        "id": 3554,
        "name": "Acharipallam",
        "stateId": 35
      },
      {
        "id": 3555,
        "name": "Achipatti",
        "stateId": 35
      },
      {
        "id": 3556,
        "name": "Adikaratti",
        "stateId": 35
      },
      {
        "id": 3557,
        "name": "Adiramapattinam",
        "stateId": 35
      },
      {
        "id": 3558,
        "name": "Aduturai",
        "stateId": 35
      },
      {
        "id": 3559,
        "name": "Adyar",
        "stateId": 35
      },
      {
        "id": 3560,
        "name": "Agaram",
        "stateId": 35
      },
      {
        "id": 3561,
        "name": "Agasthiswaram",
        "stateId": 35
      },
      {
        "id": 3562,
        "name": "Akkaraipettai",
        "stateId": 35
      },
      {
        "id": 3563,
        "name": "Alagappapuram",
        "stateId": 35
      },
      {
        "id": 3564,
        "name": "Alagapuri",
        "stateId": 35
      },
      {
        "id": 3565,
        "name": "Alampalayam",
        "stateId": 35
      },
      {
        "id": 3566,
        "name": "Alandur",
        "stateId": 35
      },
      {
        "id": 3567,
        "name": "Alanganallur",
        "stateId": 35
      },
      {
        "id": 3568,
        "name": "Alangayam",
        "stateId": 35
      },
      {
        "id": 3569,
        "name": "Alangudi",
        "stateId": 35
      },
      {
        "id": 3570,
        "name": "Alangulam",
        "stateId": 35
      },
      {
        "id": 3571,
        "name": "Alanthurai",
        "stateId": 35
      },
      {
        "id": 3572,
        "name": "Alapakkam",
        "stateId": 35
      },
      {
        "id": 3573,
        "name": "Allapuram",
        "stateId": 35
      },
      {
        "id": 3574,
        "name": "Alur",
        "stateId": 35
      },
      {
        "id": 3575,
        "name": "Alwar Tirunagari",
        "stateId": 35
      },
      {
        "id": 3576,
        "name": "Alwarkurichi",
        "stateId": 35
      },
      {
        "id": 3577,
        "name": "Ambasamudram",
        "stateId": 35
      },
      {
        "id": 3578,
        "name": "Ambur",
        "stateId": 35
      },
      {
        "id": 3579,
        "name": "Ammainaickanur",
        "stateId": 35
      },
      {
        "id": 3580,
        "name": "Ammaparikuppam",
        "stateId": 35
      },
      {
        "id": 3581,
        "name": "Ammapettai",
        "stateId": 35
      },
      {
        "id": 3582,
        "name": "Ammavarikuppam",
        "stateId": 35
      },
      {
        "id": 3583,
        "name": "Ammur",
        "stateId": 35
      },
      {
        "id": 3584,
        "name": "Anaimalai",
        "stateId": 35
      },
      {
        "id": 3585,
        "name": "Anaiyur",
        "stateId": 35
      },
      {
        "id": 3586,
        "name": "Anakaputhur",
        "stateId": 35
      },
      {
        "id": 3587,
        "name": "Ananthapuram",
        "stateId": 35
      },
      {
        "id": 3588,
        "name": "Andanappettai",
        "stateId": 35
      },
      {
        "id": 3589,
        "name": "Andipalayam",
        "stateId": 35
      },
      {
        "id": 3590,
        "name": "Andippatti",
        "stateId": 35
      },
      {
        "id": 3591,
        "name": "Anjugramam",
        "stateId": 35
      },
      {
        "id": 3592,
        "name": "Annamalainagar",
        "stateId": 35
      },
      {
        "id": 3593,
        "name": "Annavasal",
        "stateId": 35
      },
      {
        "id": 3594,
        "name": "Annur",
        "stateId": 35
      },
      {
        "id": 3595,
        "name": "Anthiyur",
        "stateId": 35
      },
      {
        "id": 3596,
        "name": "Appakudal",
        "stateId": 35
      },
      {
        "id": 3597,
        "name": "Arachalur",
        "stateId": 35
      },
      {
        "id": 3598,
        "name": "Arakandanallur",
        "stateId": 35
      },
      {
        "id": 3599,
        "name": "Arakonam",
        "stateId": 35
      },
      {
        "id": 3600,
        "name": "Aralvaimozhi",
        "stateId": 35
      },
      {
        "id": 3601,
        "name": "Arani",
        "stateId": 35
      },
      {
        "id": 3602,
        "name": "Arani Road",
        "stateId": 35
      },
      {
        "id": 3603,
        "name": "Arantangi",
        "stateId": 35
      },
      {
        "id": 3604,
        "name": "Arasiramani",
        "stateId": 35
      },
      {
        "id": 3605,
        "name": "Aravakurichi",
        "stateId": 35
      },
      {
        "id": 3606,
        "name": "Aravankadu",
        "stateId": 35
      },
      {
        "id": 3607,
        "name": "Arcot",
        "stateId": 35
      },
      {
        "id": 3608,
        "name": "Arimalam",
        "stateId": 35
      },
      {
        "id": 3609,
        "name": "Ariyalur",
        "stateId": 35
      },
      {
        "id": 3610,
        "name": "Ariyappampalayam",
        "stateId": 35
      },
      {
        "id": 3611,
        "name": "Ariyur",
        "stateId": 35
      },
      {
        "id": 3612,
        "name": "Arni",
        "stateId": 35
      },
      {
        "id": 3613,
        "name": "Arulmigu Thirumuruganpundi",
        "stateId": 35
      },
      {
        "id": 3614,
        "name": "Arumanai",
        "stateId": 35
      },
      {
        "id": 3615,
        "name": "Arumbavur",
        "stateId": 35
      },
      {
        "id": 3616,
        "name": "Arumuganeri",
        "stateId": 35
      },
      {
        "id": 3617,
        "name": "Aruppukkottai",
        "stateId": 35
      },
      {
        "id": 3618,
        "name": "Ashokapuram",
        "stateId": 35
      },
      {
        "id": 3619,
        "name": "Athani",
        "stateId": 35
      },
      {
        "id": 3620,
        "name": "Athanur",
        "stateId": 35
      },
      {
        "id": 3621,
        "name": "Athimarapatti",
        "stateId": 35
      },
      {
        "id": 3622,
        "name": "Athipattu",
        "stateId": 35
      },
      {
        "id": 3623,
        "name": "Athur",
        "stateId": 35
      },
      {
        "id": 3624,
        "name": "Attayyampatti",
        "stateId": 35
      },
      {
        "id": 3625,
        "name": "Attur",
        "stateId": 35
      },
      {
        "id": 3626,
        "name": "Auroville",
        "stateId": 35
      },
      {
        "id": 3627,
        "name": "Avadattur",
        "stateId": 35
      },
      {
        "id": 3628,
        "name": "Avadi",
        "stateId": 35
      },
      {
        "id": 3629,
        "name": "Avalpundurai",
        "stateId": 35
      },
      {
        "id": 3630,
        "name": "Avaniapuram",
        "stateId": 35
      },
      {
        "id": 3631,
        "name": "Avinashi",
        "stateId": 35
      },
      {
        "id": 3632,
        "name": "Ayakudi",
        "stateId": 35
      },
      {
        "id": 3633,
        "name": "Ayanadaippu",
        "stateId": 35
      },
      {
        "id": 3634,
        "name": "Aygudi",
        "stateId": 35
      },
      {
        "id": 3635,
        "name": "Ayothiapattinam",
        "stateId": 35
      },
      {
        "id": 3636,
        "name": "Ayyalur",
        "stateId": 35
      },
      {
        "id": 3637,
        "name": "Ayyampalayam",
        "stateId": 35
      },
      {
        "id": 3638,
        "name": "Ayyampettai",
        "stateId": 35
      },
      {
        "id": 3639,
        "name": "Azhagiapandiapuram",
        "stateId": 35
      },
      {
        "id": 3640,
        "name": "Balakrishnampatti",
        "stateId": 35
      },
      {
        "id": 3641,
        "name": "Balakrishnapuram",
        "stateId": 35
      },
      {
        "id": 3642,
        "name": "Balapallam",
        "stateId": 35
      },
      {
        "id": 3643,
        "name": "Balasamudram",
        "stateId": 35
      },
      {
        "id": 3644,
        "name": "Bargur",
        "stateId": 35
      },
      {
        "id": 3645,
        "name": "Belur",
        "stateId": 35
      },
      {
        "id": 3646,
        "name": "Berhatty",
        "stateId": 35
      },
      {
        "id": 3647,
        "name": "Bhavani",
        "stateId": 35
      },
      {
        "id": 3648,
        "name": "Bhawanisagar",
        "stateId": 35
      },
      {
        "id": 3649,
        "name": "Bhuvanagiri",
        "stateId": 35
      },
      {
        "id": 3650,
        "name": "Bikketti",
        "stateId": 35
      },
      {
        "id": 3651,
        "name": "Bodinayakkanur",
        "stateId": 35
      },
      {
        "id": 3652,
        "name": "Brahmana Periya Agraharam",
        "stateId": 35
      },
      {
        "id": 3653,
        "name": "Buthapandi",
        "stateId": 35
      },
      {
        "id": 3654,
        "name": "Buthipuram",
        "stateId": 35
      },
      {
        "id": 3655,
        "name": "Chatrapatti",
        "stateId": 35
      },
      {
        "id": 3656,
        "name": "Chembarambakkam",
        "stateId": 35
      },
      {
        "id": 3657,
        "name": "Chengalpattu",
        "stateId": 35
      },
      {
        "id": 3658,
        "name": "Chengam",
        "stateId": 35
      },
      {
        "id": 3659,
        "name": "Chennai",
        "stateId": 35
      },
      {
        "id": 3660,
        "name": "Chennasamudram",
        "stateId": 35
      },
      {
        "id": 3661,
        "name": "Chennimalai",
        "stateId": 35
      },
      {
        "id": 3662,
        "name": "Cheranmadevi",
        "stateId": 35
      },
      {
        "id": 3663,
        "name": "Cheruvanki",
        "stateId": 35
      },
      {
        "id": 3664,
        "name": "Chetpet",
        "stateId": 35
      },
      {
        "id": 3665,
        "name": "Chettiarpatti",
        "stateId": 35
      },
      {
        "id": 3666,
        "name": "Chettipalaiyam",
        "stateId": 35
      },
      {
        "id": 3667,
        "name": "Chettipalayam Cantonment",
        "stateId": 35
      },
      {
        "id": 3668,
        "name": "Chettithangal",
        "stateId": 35
      },
      {
        "id": 3669,
        "name": "Cheyur",
        "stateId": 35
      },
      {
        "id": 3670,
        "name": "Cheyyar",
        "stateId": 35
      },
      {
        "id": 3671,
        "name": "Chidambaram",
        "stateId": 35
      },
      {
        "id": 3672,
        "name": "Chinalapatti",
        "stateId": 35
      },
      {
        "id": 3673,
        "name": "Chinna Anuppanadi",
        "stateId": 35
      },
      {
        "id": 3674,
        "name": "Chinna Salem",
        "stateId": 35
      },
      {
        "id": 3675,
        "name": "Chinnakkampalayam",
        "stateId": 35
      },
      {
        "id": 3676,
        "name": "Chinnammanur",
        "stateId": 35
      },
      {
        "id": 3677,
        "name": "Chinnampalaiyam",
        "stateId": 35
      },
      {
        "id": 3678,
        "name": "Chinnasekkadu",
        "stateId": 35
      },
      {
        "id": 3679,
        "name": "Chinnavedampatti",
        "stateId": 35
      },
      {
        "id": 3680,
        "name": "Chitlapakkam",
        "stateId": 35
      },
      {
        "id": 3681,
        "name": "Chittodu",
        "stateId": 35
      },
      {
        "id": 3682,
        "name": "Cholapuram",
        "stateId": 35
      },
      {
        "id": 3683,
        "name": "Coimbatore",
        "stateId": 35
      },
      {
        "id": 3684,
        "name": "Coonoor",
        "stateId": 35
      },
      {
        "id": 3685,
        "name": "Courtalam",
        "stateId": 35
      },
      {
        "id": 3686,
        "name": "Cuddalore",
        "stateId": 35
      },
      {
        "id": 3687,
        "name": "Dalavaipatti",
        "stateId": 35
      },
      {
        "id": 3688,
        "name": "Darasuram",
        "stateId": 35
      },
      {
        "id": 3689,
        "name": "Denkanikottai",
        "stateId": 35
      },
      {
        "id": 3690,
        "name": "Desur",
        "stateId": 35
      },
      {
        "id": 3691,
        "name": "Devadanapatti",
        "stateId": 35
      },
      {
        "id": 3692,
        "name": "Devakkottai",
        "stateId": 35
      },
      {
        "id": 3693,
        "name": "Devakottai",
        "stateId": 35
      },
      {
        "id": 3694,
        "name": "Devanangurichi",
        "stateId": 35
      },
      {
        "id": 3695,
        "name": "Devarshola",
        "stateId": 35
      },
      {
        "id": 3696,
        "name": "Devasthanam",
        "stateId": 35
      },
      {
        "id": 3697,
        "name": "Dhalavoipuram",
        "stateId": 35
      },
      {
        "id": 3698,
        "name": "Dhali",
        "stateId": 35
      },
      {
        "id": 3699,
        "name": "Dhaliyur",
        "stateId": 35
      },
      {
        "id": 3700,
        "name": "Dharapadavedu",
        "stateId": 35
      },
      {
        "id": 3701,
        "name": "Dharapuram",
        "stateId": 35
      },
      {
        "id": 3702,
        "name": "Dharmapuri",
        "stateId": 35
      },
      {
        "id": 3703,
        "name": "Dindigul",
        "stateId": 35
      },
      {
        "id": 3704,
        "name": "Dusi",
        "stateId": 35
      },
      {
        "id": 3705,
        "name": "Edaganasalai",
        "stateId": 35
      },
      {
        "id": 3706,
        "name": "Edaikodu",
        "stateId": 35
      },
      {
        "id": 3707,
        "name": "Edakalinadu",
        "stateId": 35
      },
      {
        "id": 3708,
        "name": "Elathur",
        "stateId": 35
      },
      {
        "id": 3709,
        "name": "Elayirampannai",
        "stateId": 35
      },
      {
        "id": 3710,
        "name": "Elumalai",
        "stateId": 35
      },
      {
        "id": 3711,
        "name": "Eral",
        "stateId": 35
      },
      {
        "id": 3712,
        "name": "Eraniel",
        "stateId": 35
      },
      {
        "id": 3713,
        "name": "Eriodu",
        "stateId": 35
      },
      {
        "id": 3714,
        "name": "Erode",
        "stateId": 35
      },
      {
        "id": 3715,
        "name": "Erumaipatti",
        "stateId": 35
      },
      {
        "id": 3716,
        "name": "Eruvadi",
        "stateId": 35
      },
      {
        "id": 3717,
        "name": "Ethapur",
        "stateId": 35
      },
      {
        "id": 3718,
        "name": "Ettaiyapuram",
        "stateId": 35
      },
      {
        "id": 3719,
        "name": "Ettimadai",
        "stateId": 35
      },
      {
        "id": 3720,
        "name": "Ezhudesam",
        "stateId": 35
      },
      {
        "id": 3721,
        "name": "Ganapathipuram",
        "stateId": 35
      },
      {
        "id": 3722,
        "name": "Gandhi Nagar",
        "stateId": 35
      },
      {
        "id": 3723,
        "name": "Gangaikondan",
        "stateId": 35
      },
      {
        "id": 3724,
        "name": "Gangavalli",
        "stateId": 35
      },
      {
        "id": 3725,
        "name": "Ganguvarpatti",
        "stateId": 35
      },
      {
        "id": 3726,
        "name": "Gingi",
        "stateId": 35
      },
      {
        "id": 3727,
        "name": "Gopalasamudram",
        "stateId": 35
      },
      {
        "id": 3728,
        "name": "Gopichettipalaiyam",
        "stateId": 35
      },
      {
        "id": 3729,
        "name": "Gudalur",
        "stateId": 35
      },
      {
        "id": 3730,
        "name": "Gudiyattam",
        "stateId": 35
      },
      {
        "id": 3731,
        "name": "Guduvanchery",
        "stateId": 35
      },
      {
        "id": 3732,
        "name": "Gummidipoondi",
        "stateId": 35
      },
      {
        "id": 3733,
        "name": "Hanumanthampatti",
        "stateId": 35
      },
      {
        "id": 3734,
        "name": "Harur",
        "stateId": 35
      },
      {
        "id": 3735,
        "name": "Harveypatti",
        "stateId": 35
      },
      {
        "id": 3736,
        "name": "Highways",
        "stateId": 35
      },
      {
        "id": 3737,
        "name": "Hosur",
        "stateId": 35
      },
      {
        "id": 3738,
        "name": "Hubbathala",
        "stateId": 35
      },
      {
        "id": 3739,
        "name": "Huligal",
        "stateId": 35
      },
      {
        "id": 3740,
        "name": "Idappadi",
        "stateId": 35
      },
      {
        "id": 3741,
        "name": "Idikarai",
        "stateId": 35
      },
      {
        "id": 3742,
        "name": "Ilampillai",
        "stateId": 35
      },
      {
        "id": 3743,
        "name": "Ilanji",
        "stateId": 35
      },
      {
        "id": 3744,
        "name": "Iluppaiyurani",
        "stateId": 35
      },
      {
        "id": 3745,
        "name": "Iluppur",
        "stateId": 35
      },
      {
        "id": 3746,
        "name": "Inam Karur",
        "stateId": 35
      },
      {
        "id": 3747,
        "name": "Injambakkam",
        "stateId": 35
      },
      {
        "id": 3748,
        "name": "Irugur",
        "stateId": 35
      },
      {
        "id": 3749,
        "name": "Jaffrabad",
        "stateId": 35
      },
      {
        "id": 3750,
        "name": "Jagathala",
        "stateId": 35
      },
      {
        "id": 3751,
        "name": "Jalakandapuram",
        "stateId": 35
      },
      {
        "id": 3752,
        "name": "Jalladiampet",
        "stateId": 35
      },
      {
        "id": 3753,
        "name": "Jambai",
        "stateId": 35
      },
      {
        "id": 3754,
        "name": "Jayankondam",
        "stateId": 35
      },
      {
        "id": 3755,
        "name": "Jolarpet",
        "stateId": 35
      },
      {
        "id": 3756,
        "name": "Kadambur",
        "stateId": 35
      },
      {
        "id": 3757,
        "name": "Kadathur",
        "stateId": 35
      },
      {
        "id": 3758,
        "name": "Kadayal",
        "stateId": 35
      },
      {
        "id": 3759,
        "name": "Kadayampatti",
        "stateId": 35
      },
      {
        "id": 3760,
        "name": "Kadayanallur",
        "stateId": 35
      },
      {
        "id": 3761,
        "name": "Kadiapatti",
        "stateId": 35
      },
      {
        "id": 3762,
        "name": "Kalakkad",
        "stateId": 35
      },
      {
        "id": 3763,
        "name": "Kalambur",
        "stateId": 35
      },
      {
        "id": 3764,
        "name": "Kalapatti",
        "stateId": 35
      },
      {
        "id": 3765,
        "name": "Kalappanaickenpatti",
        "stateId": 35
      },
      {
        "id": 3766,
        "name": "Kalavai",
        "stateId": 35
      },
      {
        "id": 3767,
        "name": "Kalinjur",
        "stateId": 35
      },
      {
        "id": 3768,
        "name": "Kaliyakkavilai",
        "stateId": 35
      },
      {
        "id": 3769,
        "name": "Kallakkurichi",
        "stateId": 35
      },
      {
        "id": 3770,
        "name": "Kallakudi",
        "stateId": 35
      },
      {
        "id": 3771,
        "name": "Kallidaikurichchi",
        "stateId": 35
      },
      {
        "id": 3772,
        "name": "Kallukuttam",
        "stateId": 35
      },
      {
        "id": 3773,
        "name": "Kallupatti",
        "stateId": 35
      },
      {
        "id": 3774,
        "name": "Kalpakkam",
        "stateId": 35
      },
      {
        "id": 3775,
        "name": "Kalugumalai",
        "stateId": 35
      },
      {
        "id": 3776,
        "name": "Kamayagoundanpatti",
        "stateId": 35
      },
      {
        "id": 3777,
        "name": "Kambainallur",
        "stateId": 35
      },
      {
        "id": 3778,
        "name": "Kambam",
        "stateId": 35
      },
      {
        "id": 3779,
        "name": "Kamuthi",
        "stateId": 35
      },
      {
        "id": 3780,
        "name": "Kanadukathan",
        "stateId": 35
      },
      {
        "id": 3781,
        "name": "Kanakkampalayam",
        "stateId": 35
      },
      {
        "id": 3782,
        "name": "Kanam",
        "stateId": 35
      },
      {
        "id": 3783,
        "name": "Kanchipuram",
        "stateId": 35
      },
      {
        "id": 3784,
        "name": "Kandanur",
        "stateId": 35
      },
      {
        "id": 3785,
        "name": "Kangayam",
        "stateId": 35
      },
      {
        "id": 3786,
        "name": "Kangayampalayam",
        "stateId": 35
      },
      {
        "id": 3787,
        "name": "Kangeyanallur",
        "stateId": 35
      },
      {
        "id": 3788,
        "name": "Kaniyur",
        "stateId": 35
      },
      {
        "id": 3789,
        "name": "Kanjikoil",
        "stateId": 35
      },
      {
        "id": 3790,
        "name": "Kannadendal",
        "stateId": 35
      },
      {
        "id": 3791,
        "name": "Kannamangalam",
        "stateId": 35
      },
      {
        "id": 3792,
        "name": "Kannampalayam",
        "stateId": 35
      },
      {
        "id": 3793,
        "name": "Kannankurichi",
        "stateId": 35
      },
      {
        "id": 3794,
        "name": "Kannapalaiyam",
        "stateId": 35
      },
      {
        "id": 3795,
        "name": "Kannivadi",
        "stateId": 35
      },
      {
        "id": 3796,
        "name": "Kanyakumari",
        "stateId": 35
      },
      {
        "id": 3797,
        "name": "Kappiyarai",
        "stateId": 35
      },
      {
        "id": 3798,
        "name": "Karaikkudi",
        "stateId": 35
      },
      {
        "id": 3799,
        "name": "Karamadai",
        "stateId": 35
      },
      {
        "id": 3800,
        "name": "Karambakkam",
        "stateId": 35
      },
      {
        "id": 3801,
        "name": "Karambakkudi",
        "stateId": 35
      },
      {
        "id": 3802,
        "name": "Kariamangalam",
        "stateId": 35
      },
      {
        "id": 3803,
        "name": "Kariapatti",
        "stateId": 35
      },
      {
        "id": 3804,
        "name": "Karugampattur",
        "stateId": 35
      },
      {
        "id": 3805,
        "name": "Karumandi Chellipalayam",
        "stateId": 35
      },
      {
        "id": 3806,
        "name": "Karumathampatti",
        "stateId": 35
      },
      {
        "id": 3807,
        "name": "Karumbakkam",
        "stateId": 35
      },
      {
        "id": 3808,
        "name": "Karungal",
        "stateId": 35
      },
      {
        "id": 3809,
        "name": "Karunguzhi",
        "stateId": 35
      },
      {
        "id": 3810,
        "name": "Karuppur",
        "stateId": 35
      },
      {
        "id": 3811,
        "name": "Karur",
        "stateId": 35
      },
      {
        "id": 3812,
        "name": "Kasipalaiyam",
        "stateId": 35
      },
      {
        "id": 3813,
        "name": "Kasipalayam G",
        "stateId": 35
      },
      {
        "id": 3814,
        "name": "Kathirvedu",
        "stateId": 35
      },
      {
        "id": 3815,
        "name": "Kathujuganapalli",
        "stateId": 35
      },
      {
        "id": 3816,
        "name": "Katpadi",
        "stateId": 35
      },
      {
        "id": 3817,
        "name": "Kattivakkam",
        "stateId": 35
      },
      {
        "id": 3818,
        "name": "Kattumannarkoil",
        "stateId": 35
      },
      {
        "id": 3819,
        "name": "Kattupakkam",
        "stateId": 35
      },
      {
        "id": 3820,
        "name": "Kattuputhur",
        "stateId": 35
      },
      {
        "id": 3821,
        "name": "Kaveripakkam",
        "stateId": 35
      },
      {
        "id": 3822,
        "name": "Kaveripattinam",
        "stateId": 35
      },
      {
        "id": 3823,
        "name": "Kavundampalaiyam",
        "stateId": 35
      },
      {
        "id": 3824,
        "name": "Kavundampalayam",
        "stateId": 35
      },
      {
        "id": 3825,
        "name": "Kayalpattinam",
        "stateId": 35
      },
      {
        "id": 3826,
        "name": "Kayattar",
        "stateId": 35
      },
      {
        "id": 3827,
        "name": "Kelamangalam",
        "stateId": 35
      },
      {
        "id": 3828,
        "name": "Kelambakkam",
        "stateId": 35
      },
      {
        "id": 3829,
        "name": "Kembainaickenpalayam",
        "stateId": 35
      },
      {
        "id": 3830,
        "name": "Kethi",
        "stateId": 35
      },
      {
        "id": 3831,
        "name": "Kilakarai",
        "stateId": 35
      },
      {
        "id": 3832,
        "name": "Kilampadi",
        "stateId": 35
      },
      {
        "id": 3833,
        "name": "Kilkulam",
        "stateId": 35
      },
      {
        "id": 3834,
        "name": "Kilkunda",
        "stateId": 35
      },
      {
        "id": 3835,
        "name": "Killiyur",
        "stateId": 35
      },
      {
        "id": 3836,
        "name": "Killlai",
        "stateId": 35
      },
      {
        "id": 3837,
        "name": "Kilpennathur",
        "stateId": 35
      },
      {
        "id": 3838,
        "name": "Kilvelur",
        "stateId": 35
      },
      {
        "id": 3839,
        "name": "Kinathukadavu",
        "stateId": 35
      },
      {
        "id": 3840,
        "name": "Kiramangalam",
        "stateId": 35
      },
      {
        "id": 3841,
        "name": "Kiranur",
        "stateId": 35
      },
      {
        "id": 3842,
        "name": "Kiripatti",
        "stateId": 35
      },
      {
        "id": 3843,
        "name": "Kizhapavur",
        "stateId": 35
      },
      {
        "id": 3844,
        "name": "Kmarasamipatti",
        "stateId": 35
      },
      {
        "id": 3845,
        "name": "Kochadai",
        "stateId": 35
      },
      {
        "id": 3846,
        "name": "Kodaikanal",
        "stateId": 35
      },
      {
        "id": 3847,
        "name": "Kodambakkam",
        "stateId": 35
      },
      {
        "id": 3848,
        "name": "Kodavasal",
        "stateId": 35
      },
      {
        "id": 3849,
        "name": "Kodumudi",
        "stateId": 35
      },
      {
        "id": 3850,
        "name": "Kolachal",
        "stateId": 35
      },
      {
        "id": 3851,
        "name": "Kolappalur",
        "stateId": 35
      },
      {
        "id": 3852,
        "name": "Kolathupalayam",
        "stateId": 35
      },
      {
        "id": 3853,
        "name": "Kolathur",
        "stateId": 35
      },
      {
        "id": 3854,
        "name": "Kollankodu",
        "stateId": 35
      },
      {
        "id": 3855,
        "name": "Kollankoil",
        "stateId": 35
      },
      {
        "id": 3856,
        "name": "Komaralingam",
        "stateId": 35
      },
      {
        "id": 3857,
        "name": "Komarapalayam",
        "stateId": 35
      },
      {
        "id": 3858,
        "name": "Kombai",
        "stateId": 35
      },
      {
        "id": 3859,
        "name": "Konakkarai",
        "stateId": 35
      },
      {
        "id": 3860,
        "name": "Konavattam",
        "stateId": 35
      },
      {
        "id": 3861,
        "name": "Kondalampatti",
        "stateId": 35
      },
      {
        "id": 3862,
        "name": "Konganapuram",
        "stateId": 35
      },
      {
        "id": 3863,
        "name": "Koradacheri",
        "stateId": 35
      },
      {
        "id": 3864,
        "name": "Korampallam",
        "stateId": 35
      },
      {
        "id": 3865,
        "name": "Kotagiri",
        "stateId": 35
      },
      {
        "id": 3866,
        "name": "Kothinallur",
        "stateId": 35
      },
      {
        "id": 3867,
        "name": "Kottaiyur",
        "stateId": 35
      },
      {
        "id": 3868,
        "name": "Kottakuppam",
        "stateId": 35
      },
      {
        "id": 3869,
        "name": "Kottaram",
        "stateId": 35
      },
      {
        "id": 3870,
        "name": "Kottivakkam",
        "stateId": 35
      },
      {
        "id": 3871,
        "name": "Kottur",
        "stateId": 35
      },
      {
        "id": 3872,
        "name": "Kovilpatti",
        "stateId": 35
      },
      {
        "id": 3873,
        "name": "Koyampattur",
        "stateId": 35
      },
      {
        "id": 3874,
        "name": "Krishnagiri",
        "stateId": 35
      },
      {
        "id": 3875,
        "name": "Krishnarayapuram",
        "stateId": 35
      },
      {
        "id": 3876,
        "name": "Krishnasamudram",
        "stateId": 35
      },
      {
        "id": 3877,
        "name": "Kuchanur",
        "stateId": 35
      },
      {
        "id": 3878,
        "name": "Kuhalur",
        "stateId": 35
      },
      {
        "id": 3879,
        "name": "Kulasekarappattinam",
        "stateId": 35
      },
      {
        "id": 3880,
        "name": "Kulasekarapuram",
        "stateId": 35
      },
      {
        "id": 3881,
        "name": "Kulithalai",
        "stateId": 35
      },
      {
        "id": 3882,
        "name": "Kumarapalaiyam",
        "stateId": 35
      },
      {
        "id": 3883,
        "name": "Kumarapalayam",
        "stateId": 35
      },
      {
        "id": 3884,
        "name": "Kumarapuram",
        "stateId": 35
      },
      {
        "id": 3885,
        "name": "Kumbakonam",
        "stateId": 35
      },
      {
        "id": 3886,
        "name": "Kundrathur",
        "stateId": 35
      },
      {
        "id": 3887,
        "name": "Kuniyamuthur",
        "stateId": 35
      },
      {
        "id": 3888,
        "name": "Kunnathur",
        "stateId": 35
      },
      {
        "id": 3889,
        "name": "Kunur",
        "stateId": 35
      },
      {
        "id": 3890,
        "name": "Kuraikundu",
        "stateId": 35
      },
      {
        "id": 3891,
        "name": "Kurichi",
        "stateId": 35
      },
      {
        "id": 3892,
        "name": "Kurinjippadi",
        "stateId": 35
      },
      {
        "id": 3893,
        "name": "Kurudampalaiyam",
        "stateId": 35
      },
      {
        "id": 3894,
        "name": "Kurumbalur",
        "stateId": 35
      },
      {
        "id": 3895,
        "name": "Kuthalam",
        "stateId": 35
      },
      {
        "id": 3896,
        "name": "Kuthappar",
        "stateId": 35
      },
      {
        "id": 3897,
        "name": "Kuttalam",
        "stateId": 35
      },
      {
        "id": 3898,
        "name": "Kuttanallur",
        "stateId": 35
      },
      {
        "id": 3899,
        "name": "Kuzhithurai",
        "stateId": 35
      },
      {
        "id": 3900,
        "name": "Labbaikudikadu",
        "stateId": 35
      },
      {
        "id": 3901,
        "name": "Lakkampatti",
        "stateId": 35
      },
      {
        "id": 3902,
        "name": "Lalgudi",
        "stateId": 35
      },
      {
        "id": 3903,
        "name": "Lalpet",
        "stateId": 35
      },
      {
        "id": 3904,
        "name": "Llayangudi",
        "stateId": 35
      },
      {
        "id": 3905,
        "name": "Madambakkam",
        "stateId": 35
      },
      {
        "id": 3906,
        "name": "Madanur",
        "stateId": 35
      },
      {
        "id": 3907,
        "name": "Madathukulam",
        "stateId": 35
      },
      {
        "id": 3908,
        "name": "Madhavaram",
        "stateId": 35
      },
      {
        "id": 3909,
        "name": "Madippakkam",
        "stateId": 35
      },
      {
        "id": 3910,
        "name": "Madukkarai",
        "stateId": 35
      },
      {
        "id": 3911,
        "name": "Madukkur",
        "stateId": 35
      },
      {
        "id": 3912,
        "name": "Madurai",
        "stateId": 35
      },
      {
        "id": 3913,
        "name": "Maduranthakam",
        "stateId": 35
      },
      {
        "id": 3914,
        "name": "Maduravoyal",
        "stateId": 35
      },
      {
        "id": 3915,
        "name": "Mahabalipuram",
        "stateId": 35
      },
      {
        "id": 3916,
        "name": "Makkinanpatti",
        "stateId": 35
      },
      {
        "id": 3917,
        "name": "Mallamuppampatti",
        "stateId": 35
      },
      {
        "id": 3918,
        "name": "Mallankinaru",
        "stateId": 35
      },
      {
        "id": 3919,
        "name": "Mallapuram",
        "stateId": 35
      },
      {
        "id": 3920,
        "name": "Mallasamudram",
        "stateId": 35
      },
      {
        "id": 3921,
        "name": "Mallur",
        "stateId": 35
      },
      {
        "id": 3922,
        "name": "Mamallapuram",
        "stateId": 35
      },
      {
        "id": 3923,
        "name": "Mamsapuram",
        "stateId": 35
      },
      {
        "id": 3924,
        "name": "Manachanallur",
        "stateId": 35
      },
      {
        "id": 3925,
        "name": "Manali",
        "stateId": 35
      },
      {
        "id": 3926,
        "name": "Manalmedu",
        "stateId": 35
      },
      {
        "id": 3927,
        "name": "Manalurpet",
        "stateId": 35
      },
      {
        "id": 3928,
        "name": "Manamadurai",
        "stateId": 35
      },
      {
        "id": 3929,
        "name": "Manapakkam",
        "stateId": 35
      },
      {
        "id": 3930,
        "name": "Manapparai",
        "stateId": 35
      },
      {
        "id": 3931,
        "name": "Manavalakurichi",
        "stateId": 35
      },
      {
        "id": 3932,
        "name": "Mandaikadu",
        "stateId": 35
      },
      {
        "id": 3933,
        "name": "Mandapam",
        "stateId": 35
      },
      {
        "id": 3934,
        "name": "Mangadu",
        "stateId": 35
      },
      {
        "id": 3935,
        "name": "Mangalam",
        "stateId": 35
      },
      {
        "id": 3936,
        "name": "Mangalampet",
        "stateId": 35
      },
      {
        "id": 3937,
        "name": "Manimutharu",
        "stateId": 35
      },
      {
        "id": 3938,
        "name": "Mannargudi",
        "stateId": 35
      },
      {
        "id": 3939,
        "name": "Mappilaiurani",
        "stateId": 35
      },
      {
        "id": 3940,
        "name": "Maraimalai Nagar",
        "stateId": 35
      },
      {
        "id": 3941,
        "name": "Marakkanam",
        "stateId": 35
      },
      {
        "id": 3942,
        "name": "Maramangalathupatti",
        "stateId": 35
      },
      {
        "id": 3943,
        "name": "Marandahalli",
        "stateId": 35
      },
      {
        "id": 3944,
        "name": "Markayankottai",
        "stateId": 35
      },
      {
        "id": 3945,
        "name": "Marudur",
        "stateId": 35
      },
      {
        "id": 3946,
        "name": "Marungur",
        "stateId": 35
      },
      {
        "id": 3947,
        "name": "Masinigudi",
        "stateId": 35
      },
      {
        "id": 3948,
        "name": "Mathigiri",
        "stateId": 35
      },
      {
        "id": 3949,
        "name": "Mattur",
        "stateId": 35
      },
      {
        "id": 3950,
        "name": "Mayiladuthurai",
        "stateId": 35
      },
      {
        "id": 3951,
        "name": "Mecheri",
        "stateId": 35
      },
      {
        "id": 3952,
        "name": "Melacheval",
        "stateId": 35
      },
      {
        "id": 3953,
        "name": "Melachokkanathapuram",
        "stateId": 35
      },
      {
        "id": 3954,
        "name": "Melagaram",
        "stateId": 35
      },
      {
        "id": 3955,
        "name": "Melamadai",
        "stateId": 35
      },
      {
        "id": 3956,
        "name": "Melamaiyur",
        "stateId": 35
      },
      {
        "id": 3957,
        "name": "Melanattam",
        "stateId": 35
      },
      {
        "id": 3958,
        "name": "Melathiruppanthuruthi",
        "stateId": 35
      },
      {
        "id": 3959,
        "name": "Melattur",
        "stateId": 35
      },
      {
        "id": 3960,
        "name": "Melmananbedu",
        "stateId": 35
      },
      {
        "id": 3961,
        "name": "Melpattampakkam",
        "stateId": 35
      },
      {
        "id": 3962,
        "name": "Melur",
        "stateId": 35
      },
      {
        "id": 3963,
        "name": "Melvisharam",
        "stateId": 35
      },
      {
        "id": 3964,
        "name": "Mettupalayam",
        "stateId": 35
      },
      {
        "id": 3965,
        "name": "Mettur",
        "stateId": 35
      },
      {
        "id": 3966,
        "name": "Meyyanur",
        "stateId": 35
      },
      {
        "id": 3967,
        "name": "Milavittan",
        "stateId": 35
      },
      {
        "id": 3968,
        "name": "Minakshipuram",
        "stateId": 35
      },
      {
        "id": 3969,
        "name": "Minambakkam",
        "stateId": 35
      },
      {
        "id": 3970,
        "name": "Minjur",
        "stateId": 35
      },
      {
        "id": 3971,
        "name": "Modakurichi",
        "stateId": 35
      },
      {
        "id": 3972,
        "name": "Mohanur",
        "stateId": 35
      },
      {
        "id": 3973,
        "name": "Mopperipalayam",
        "stateId": 35
      },
      {
        "id": 3974,
        "name": "Mudalur",
        "stateId": 35
      },
      {
        "id": 3975,
        "name": "Mudichur",
        "stateId": 35
      },
      {
        "id": 3976,
        "name": "Mudukulathur",
        "stateId": 35
      },
      {
        "id": 3977,
        "name": "Mukasipidariyur",
        "stateId": 35
      },
      {
        "id": 3978,
        "name": "Mukkudal",
        "stateId": 35
      },
      {
        "id": 3979,
        "name": "Mulagumudu",
        "stateId": 35
      },
      {
        "id": 3980,
        "name": "Mulakaraipatti",
        "stateId": 35
      },
      {
        "id": 3981,
        "name": "Mulanur",
        "stateId": 35
      },
      {
        "id": 3982,
        "name": "Mullakkadu",
        "stateId": 35
      },
      {
        "id": 3983,
        "name": "Muruganpalayam",
        "stateId": 35
      },
      {
        "id": 3984,
        "name": "Musiri",
        "stateId": 35
      },
      {
        "id": 3985,
        "name": "Muthupet",
        "stateId": 35
      },
      {
        "id": 3986,
        "name": "Muthur",
        "stateId": 35
      },
      {
        "id": 3987,
        "name": "Muttayyapuram",
        "stateId": 35
      },
      {
        "id": 3988,
        "name": "Muttupet",
        "stateId": 35
      },
      {
        "id": 3989,
        "name": "Muvarasampettai",
        "stateId": 35
      },
      {
        "id": 3990,
        "name": "Myladi",
        "stateId": 35
      },
      {
        "id": 3991,
        "name": "Mylapore",
        "stateId": 35
      },
      {
        "id": 3992,
        "name": "Nadukkuthagai",
        "stateId": 35
      },
      {
        "id": 3993,
        "name": "Naduvattam",
        "stateId": 35
      },
      {
        "id": 3994,
        "name": "Nagapattinam",
        "stateId": 35
      },
      {
        "id": 3995,
        "name": "Nagavakulam",
        "stateId": 35
      },
      {
        "id": 3996,
        "name": "Nagercoil",
        "stateId": 35
      },
      {
        "id": 3997,
        "name": "Nagojanahalli",
        "stateId": 35
      },
      {
        "id": 3998,
        "name": "Nallampatti",
        "stateId": 35
      },
      {
        "id": 3999,
        "name": "Nallur",
        "stateId": 35
      },
      {
        "id": 4000,
        "name": "Namagiripettai",
        "stateId": 35
      },
      {
        "id": 4001,
        "name": "Namakkal",
        "stateId": 35
      },
      {
        "id": 4002,
        "name": "Nambiyur",
        "stateId": 35
      },
      {
        "id": 4003,
        "name": "Nambutalai",
        "stateId": 35
      },
      {
        "id": 4004,
        "name": "Nandambakkam",
        "stateId": 35
      },
      {
        "id": 4005,
        "name": "Nandivaram",
        "stateId": 35
      },
      {
        "id": 4006,
        "name": "Nangavalli",
        "stateId": 35
      },
      {
        "id": 4007,
        "name": "Nangavaram",
        "stateId": 35
      },
      {
        "id": 4008,
        "name": "Nanguneri",
        "stateId": 35
      },
      {
        "id": 4009,
        "name": "Nanjikottai",
        "stateId": 35
      },
      {
        "id": 4010,
        "name": "Nannilam",
        "stateId": 35
      },
      {
        "id": 4011,
        "name": "Naranammalpuram",
        "stateId": 35
      },
      {
        "id": 4012,
        "name": "Naranapuram",
        "stateId": 35
      },
      {
        "id": 4013,
        "name": "Narasimhanaickenpalayam",
        "stateId": 35
      },
      {
        "id": 4014,
        "name": "Narasingapuram",
        "stateId": 35
      },
      {
        "id": 4015,
        "name": "Narasojipatti",
        "stateId": 35
      },
      {
        "id": 4016,
        "name": "Naravarikuppam",
        "stateId": 35
      },
      {
        "id": 4017,
        "name": "Nasiyanur",
        "stateId": 35
      },
      {
        "id": 4018,
        "name": "Natham",
        "stateId": 35
      },
      {
        "id": 4019,
        "name": "Nathampannai",
        "stateId": 35
      },
      {
        "id": 4020,
        "name": "Natrampalli",
        "stateId": 35
      },
      {
        "id": 4021,
        "name": "Nattam",
        "stateId": 35
      },
      {
        "id": 4022,
        "name": "Nattapettai",
        "stateId": 35
      },
      {
        "id": 4023,
        "name": "Nattarasankottai",
        "stateId": 35
      },
      {
        "id": 4024,
        "name": "Navalpattu",
        "stateId": 35
      },
      {
        "id": 4025,
        "name": "Nazarethpettai",
        "stateId": 35
      },
      {
        "id": 4026,
        "name": "Nazerath",
        "stateId": 35
      },
      {
        "id": 4027,
        "name": "Neikkarapatti",
        "stateId": 35
      },
      {
        "id": 4028,
        "name": "Neiyyur",
        "stateId": 35
      },
      {
        "id": 4029,
        "name": "Nellikkuppam",
        "stateId": 35
      },
      {
        "id": 4030,
        "name": "Nelliyalam",
        "stateId": 35
      },
      {
        "id": 4031,
        "name": "Nemili",
        "stateId": 35
      },
      {
        "id": 4032,
        "name": "Nemilicheri",
        "stateId": 35
      },
      {
        "id": 4033,
        "name": "Neripperichal",
        "stateId": 35
      },
      {
        "id": 4034,
        "name": "Nerkunram",
        "stateId": 35
      },
      {
        "id": 4035,
        "name": "Nerkuppai",
        "stateId": 35
      },
      {
        "id": 4036,
        "name": "Nerunjipettai",
        "stateId": 35
      },
      {
        "id": 4037,
        "name": "Neykkarappatti",
        "stateId": 35
      },
      {
        "id": 4038,
        "name": "Neyveli",
        "stateId": 35
      },
      {
        "id": 4039,
        "name": "Nidamangalam",
        "stateId": 35
      },
      {
        "id": 4040,
        "name": "Nilagiri",
        "stateId": 35
      },
      {
        "id": 4041,
        "name": "Nilakkottai",
        "stateId": 35
      },
      {
        "id": 4042,
        "name": "Nilankarai",
        "stateId": 35
      },
      {
        "id": 4043,
        "name": "Odaipatti",
        "stateId": 35
      },
      {
        "id": 4044,
        "name": "Odaiyakulam",
        "stateId": 35
      },
      {
        "id": 4045,
        "name": "Oddanchatram",
        "stateId": 35
      },
      {
        "id": 4046,
        "name": "Odugathur",
        "stateId": 35
      },
      {
        "id": 4047,
        "name": "Oggiyamduraipakkam",
        "stateId": 35
      },
      {
        "id": 4048,
        "name": "Olagadam",
        "stateId": 35
      },
      {
        "id": 4049,
        "name": "Omalur",
        "stateId": 35
      },
      {
        "id": 4050,
        "name": "Ooty",
        "stateId": 35
      },
      {
        "id": 4051,
        "name": "Orathanadu",
        "stateId": 35
      },
      {
        "id": 4052,
        "name": "Othakadai",
        "stateId": 35
      },
      {
        "id": 4053,
        "name": "Othakalmandapam",
        "stateId": 35
      },
      {
        "id": 4054,
        "name": "Ottapparai",
        "stateId": 35
      },
      {
        "id": 4055,
        "name": "Pacode",
        "stateId": 35
      },
      {
        "id": 4056,
        "name": "Padaividu",
        "stateId": 35
      },
      {
        "id": 4057,
        "name": "Padianallur",
        "stateId": 35
      },
      {
        "id": 4058,
        "name": "Padirikuppam",
        "stateId": 35
      },
      {
        "id": 4059,
        "name": "Padmanabhapuram",
        "stateId": 35
      },
      {
        "id": 4060,
        "name": "Padririvedu",
        "stateId": 35
      },
      {
        "id": 4061,
        "name": "Palaganangudy",
        "stateId": 35
      },
      {
        "id": 4062,
        "name": "Palaimpatti",
        "stateId": 35
      },
      {
        "id": 4063,
        "name": "Palakkodu",
        "stateId": 35
      },
      {
        "id": 4064,
        "name": "Palamedu",
        "stateId": 35
      },
      {
        "id": 4065,
        "name": "Palani",
        "stateId": 35
      },
      {
        "id": 4066,
        "name": "Palani Chettipatti",
        "stateId": 35
      },
      {
        "id": 4067,
        "name": "Palavakkam",
        "stateId": 35
      },
      {
        "id": 4068,
        "name": "Palavansathu",
        "stateId": 35
      },
      {
        "id": 4069,
        "name": "Palayakayal",
        "stateId": 35
      },
      {
        "id": 4070,
        "name": "Palayam",
        "stateId": 35
      },
      {
        "id": 4071,
        "name": "Palayamkottai",
        "stateId": 35
      },
      {
        "id": 4072,
        "name": "Palladam",
        "stateId": 35
      },
      {
        "id": 4073,
        "name": "Pallapalayam",
        "stateId": 35
      },
      {
        "id": 4074,
        "name": "Pallapatti",
        "stateId": 35
      },
      {
        "id": 4075,
        "name": "Pallattur",
        "stateId": 35
      },
      {
        "id": 4076,
        "name": "Pallavaram",
        "stateId": 35
      },
      {
        "id": 4077,
        "name": "Pallikaranai",
        "stateId": 35
      },
      {
        "id": 4078,
        "name": "Pallikonda",
        "stateId": 35
      },
      {
        "id": 4079,
        "name": "Pallipalaiyam",
        "stateId": 35
      },
      {
        "id": 4080,
        "name": "Pallipalaiyam Agraharam",
        "stateId": 35
      },
      {
        "id": 4081,
        "name": "Pallipattu",
        "stateId": 35
      },
      {
        "id": 4082,
        "name": "Pammal",
        "stateId": 35
      },
      {
        "id": 4083,
        "name": "Panagudi",
        "stateId": 35
      },
      {
        "id": 4084,
        "name": "Panaimarathupatti",
        "stateId": 35
      },
      {
        "id": 4085,
        "name": "Panapakkam",
        "stateId": 35
      },
      {
        "id": 4086,
        "name": "Panboli",
        "stateId": 35
      },
      {
        "id": 4087,
        "name": "Pandamangalam",
        "stateId": 35
      },
      {
        "id": 4088,
        "name": "Pannaikadu",
        "stateId": 35
      },
      {
        "id": 4089,
        "name": "Pannaipuram",
        "stateId": 35
      },
      {
        "id": 4090,
        "name": "Pannuratti",
        "stateId": 35
      },
      {
        "id": 4091,
        "name": "Panruti",
        "stateId": 35
      },
      {
        "id": 4092,
        "name": "Papanasam",
        "stateId": 35
      },
      {
        "id": 4093,
        "name": "Pappankurichi",
        "stateId": 35
      },
      {
        "id": 4094,
        "name": "Papparapatti",
        "stateId": 35
      },
      {
        "id": 4095,
        "name": "Pappireddipatti",
        "stateId": 35
      },
      {
        "id": 4096,
        "name": "Paramakkudi",
        "stateId": 35
      },
      {
        "id": 4097,
        "name": "Paramankurichi",
        "stateId": 35
      },
      {
        "id": 4098,
        "name": "Paramathi",
        "stateId": 35
      },
      {
        "id": 4099,
        "name": "Parangippettai",
        "stateId": 35
      },
      {
        "id": 4100,
        "name": "Paravai",
        "stateId": 35
      },
      {
        "id": 4101,
        "name": "Pasur",
        "stateId": 35
      },
      {
        "id": 4102,
        "name": "Pathamadai",
        "stateId": 35
      },
      {
        "id": 4103,
        "name": "Pattinam",
        "stateId": 35
      },
      {
        "id": 4104,
        "name": "Pattiviranpatti",
        "stateId": 35
      },
      {
        "id": 4105,
        "name": "Pattukkottai",
        "stateId": 35
      },
      {
        "id": 4106,
        "name": "Pazhugal",
        "stateId": 35
      },
      {
        "id": 4107,
        "name": "Pennadam",
        "stateId": 35
      },
      {
        "id": 4108,
        "name": "Pennagaram",
        "stateId": 35
      },
      {
        "id": 4109,
        "name": "Pennathur",
        "stateId": 35
      },
      {
        "id": 4110,
        "name": "Peraiyur",
        "stateId": 35
      },
      {
        "id": 4111,
        "name": "Peralam",
        "stateId": 35
      },
      {
        "id": 4112,
        "name": "Perambalur",
        "stateId": 35
      },
      {
        "id": 4113,
        "name": "Peranamallur",
        "stateId": 35
      },
      {
        "id": 4114,
        "name": "Peravurani",
        "stateId": 35
      },
      {
        "id": 4115,
        "name": "Periyakodiveri",
        "stateId": 35
      },
      {
        "id": 4116,
        "name": "Periyakulam",
        "stateId": 35
      },
      {
        "id": 4117,
        "name": "Periyanayakkanpalaiyam",
        "stateId": 35
      },
      {
        "id": 4118,
        "name": "Periyanegamam",
        "stateId": 35
      },
      {
        "id": 4119,
        "name": "Periyapatti",
        "stateId": 35
      },
      {
        "id": 4120,
        "name": "Periyasemur",
        "stateId": 35
      },
      {
        "id": 4121,
        "name": "Pernambut",
        "stateId": 35
      },
      {
        "id": 4122,
        "name": "Perumagalur",
        "stateId": 35
      },
      {
        "id": 4123,
        "name": "Perumandi",
        "stateId": 35
      },
      {
        "id": 4124,
        "name": "Perumuchi",
        "stateId": 35
      },
      {
        "id": 4125,
        "name": "Perundurai",
        "stateId": 35
      },
      {
        "id": 4126,
        "name": "Perungalathur",
        "stateId": 35
      },
      {
        "id": 4127,
        "name": "Perungudi",
        "stateId": 35
      },
      {
        "id": 4128,
        "name": "Perungulam",
        "stateId": 35
      },
      {
        "id": 4129,
        "name": "Perur",
        "stateId": 35
      },
      {
        "id": 4130,
        "name": "Perur Chettipalaiyam",
        "stateId": 35
      },
      {
        "id": 4131,
        "name": "Pethampalayam",
        "stateId": 35
      },
      {
        "id": 4132,
        "name": "Pethanaickenpalayam",
        "stateId": 35
      },
      {
        "id": 4133,
        "name": "Pillanallur",
        "stateId": 35
      },
      {
        "id": 4134,
        "name": "Pirkankaranai",
        "stateId": 35
      },
      {
        "id": 4135,
        "name": "Polichalur",
        "stateId": 35
      },
      {
        "id": 4136,
        "name": "Pollachi",
        "stateId": 35
      },
      {
        "id": 4137,
        "name": "Polur",
        "stateId": 35
      },
      {
        "id": 4138,
        "name": "Ponmani",
        "stateId": 35
      },
      {
        "id": 4139,
        "name": "Ponnamaravathi",
        "stateId": 35
      },
      {
        "id": 4140,
        "name": "Ponnampatti",
        "stateId": 35
      },
      {
        "id": 4141,
        "name": "Ponneri",
        "stateId": 35
      },
      {
        "id": 4142,
        "name": "Porur",
        "stateId": 35
      },
      {
        "id": 4143,
        "name": "Pothanur",
        "stateId": 35
      },
      {
        "id": 4144,
        "name": "Pothatturpettai",
        "stateId": 35
      },
      {
        "id": 4145,
        "name": "Pudukadai",
        "stateId": 35
      },
      {
        "id": 4146,
        "name": "Pudukkottai Cantonment",
        "stateId": 35
      },
      {
        "id": 4147,
        "name": "Pudukottai",
        "stateId": 35
      },
      {
        "id": 4148,
        "name": "Pudupalaiyam Aghraharam",
        "stateId": 35
      },
      {
        "id": 4149,
        "name": "Pudupalayam",
        "stateId": 35
      },
      {
        "id": 4150,
        "name": "Pudupatti",
        "stateId": 35
      },
      {
        "id": 4151,
        "name": "Pudupattinam",
        "stateId": 35
      },
      {
        "id": 4152,
        "name": "Pudur",
        "stateId": 35
      },
      {
        "id": 4153,
        "name": "Puduvayal",
        "stateId": 35
      },
      {
        "id": 4154,
        "name": "Pulambadi",
        "stateId": 35
      },
      {
        "id": 4155,
        "name": "Pulampatti",
        "stateId": 35
      },
      {
        "id": 4156,
        "name": "Puliyampatti",
        "stateId": 35
      },
      {
        "id": 4157,
        "name": "Puliyankudi",
        "stateId": 35
      },
      {
        "id": 4158,
        "name": "Puliyur",
        "stateId": 35
      },
      {
        "id": 4159,
        "name": "Pullampadi",
        "stateId": 35
      },
      {
        "id": 4160,
        "name": "Puluvapatti",
        "stateId": 35
      },
      {
        "id": 4161,
        "name": "Punamalli",
        "stateId": 35
      },
      {
        "id": 4162,
        "name": "Punjai Puliyampatti",
        "stateId": 35
      },
      {
        "id": 4163,
        "name": "Punjai Thottakurichi",
        "stateId": 35
      },
      {
        "id": 4164,
        "name": "Punjaipugalur",
        "stateId": 35
      },
      {
        "id": 4165,
        "name": "Puthalam",
        "stateId": 35
      },
      {
        "id": 4166,
        "name": "Putteri",
        "stateId": 35
      },
      {
        "id": 4167,
        "name": "Puvalur",
        "stateId": 35
      },
      {
        "id": 4168,
        "name": "Puzhal",
        "stateId": 35
      },
      {
        "id": 4169,
        "name": "Puzhithivakkam",
        "stateId": 35
      },
      {
        "id": 4170,
        "name": "Rajapalayam",
        "stateId": 35
      },
      {
        "id": 4171,
        "name": "Ramanathapuram",
        "stateId": 35
      },
      {
        "id": 4172,
        "name": "Ramapuram",
        "stateId": 35
      },
      {
        "id": 4173,
        "name": "Rameswaram",
        "stateId": 35
      },
      {
        "id": 4174,
        "name": "Ranipet",
        "stateId": 35
      },
      {
        "id": 4175,
        "name": "Rasipuram",
        "stateId": 35
      },
      {
        "id": 4176,
        "name": "Rayagiri",
        "stateId": 35
      },
      {
        "id": 4177,
        "name": "Rithapuram",
        "stateId": 35
      },
      {
        "id": 4178,
        "name": "Rosalpatti",
        "stateId": 35
      },
      {
        "id": 4179,
        "name": "Rudravathi",
        "stateId": 35
      },
      {
        "id": 4180,
        "name": "Sadayankuppam",
        "stateId": 35
      },
      {
        "id": 4181,
        "name": "Saint Thomas Mount",
        "stateId": 35
      },
      {
        "id": 4182,
        "name": "Salangapalayam",
        "stateId": 35
      },
      {
        "id": 4183,
        "name": "Salem",
        "stateId": 35
      },
      {
        "id": 4184,
        "name": "Samalapuram",
        "stateId": 35
      },
      {
        "id": 4185,
        "name": "Samathur",
        "stateId": 35
      },
      {
        "id": 4186,
        "name": "Sambavar Vadagarai",
        "stateId": 35
      },
      {
        "id": 4187,
        "name": "Sankaramanallur",
        "stateId": 35
      },
      {
        "id": 4188,
        "name": "Sankarankoil",
        "stateId": 35
      },
      {
        "id": 4189,
        "name": "Sankarapuram",
        "stateId": 35
      },
      {
        "id": 4190,
        "name": "Sankari",
        "stateId": 35
      },
      {
        "id": 4191,
        "name": "Sankarnagar",
        "stateId": 35
      },
      {
        "id": 4192,
        "name": "Saravanampatti",
        "stateId": 35
      },
      {
        "id": 4193,
        "name": "Sarcarsamakulam",
        "stateId": 35
      },
      {
        "id": 4194,
        "name": "Sathiyavijayanagaram",
        "stateId": 35
      },
      {
        "id": 4195,
        "name": "Sathuvachari",
        "stateId": 35
      },
      {
        "id": 4196,
        "name": "Sathyamangalam",
        "stateId": 35
      },
      {
        "id": 4197,
        "name": "Sattankulam",
        "stateId": 35
      },
      {
        "id": 4198,
        "name": "Sattur",
        "stateId": 35
      },
      {
        "id": 4199,
        "name": "Sayalgudi",
        "stateId": 35
      },
      {
        "id": 4200,
        "name": "Sayapuram",
        "stateId": 35
      },
      {
        "id": 4201,
        "name": "Seithur",
        "stateId": 35
      },
      {
        "id": 4202,
        "name": "Sembakkam",
        "stateId": 35
      },
      {
        "id": 4203,
        "name": "Semmipalayam",
        "stateId": 35
      },
      {
        "id": 4204,
        "name": "Sennirkuppam",
        "stateId": 35
      },
      {
        "id": 4205,
        "name": "Senthamangalam",
        "stateId": 35
      },
      {
        "id": 4206,
        "name": "Sentharapatti",
        "stateId": 35
      },
      {
        "id": 4207,
        "name": "Senur",
        "stateId": 35
      },
      {
        "id": 4208,
        "name": "Sethiathoppu",
        "stateId": 35
      },
      {
        "id": 4209,
        "name": "Sevilimedu",
        "stateId": 35
      },
      {
        "id": 4210,
        "name": "Sevugampatti",
        "stateId": 35
      },
      {
        "id": 4211,
        "name": "Shenbakkam",
        "stateId": 35
      },
      {
        "id": 4212,
        "name": "Shencottai",
        "stateId": 35
      },
      {
        "id": 4213,
        "name": "Shenkottai",
        "stateId": 35
      },
      {
        "id": 4214,
        "name": "Sholavandan",
        "stateId": 35
      },
      {
        "id": 4215,
        "name": "Sholinganallur",
        "stateId": 35
      },
      {
        "id": 4216,
        "name": "Sholingur",
        "stateId": 35
      },
      {
        "id": 4217,
        "name": "Sholur",
        "stateId": 35
      },
      {
        "id": 4218,
        "name": "Sikkarayapuram",
        "stateId": 35
      },
      {
        "id": 4219,
        "name": "Singampuneri",
        "stateId": 35
      },
      {
        "id": 4220,
        "name": "Singanallur",
        "stateId": 35
      },
      {
        "id": 4221,
        "name": "Singaperumalkoil",
        "stateId": 35
      },
      {
        "id": 4222,
        "name": "Sirapalli",
        "stateId": 35
      },
      {
        "id": 4223,
        "name": "Sirkali",
        "stateId": 35
      },
      {
        "id": 4224,
        "name": "Sirugamani",
        "stateId": 35
      },
      {
        "id": 4225,
        "name": "Sirumugai",
        "stateId": 35
      },
      {
        "id": 4226,
        "name": "Sithayankottai",
        "stateId": 35
      },
      {
        "id": 4227,
        "name": "Sithurajapuram",
        "stateId": 35
      },
      {
        "id": 4228,
        "name": "Sivaganga",
        "stateId": 35
      },
      {
        "id": 4229,
        "name": "Sivagiri",
        "stateId": 35
      },
      {
        "id": 4230,
        "name": "Sivakasi",
        "stateId": 35
      },
      {
        "id": 4231,
        "name": "Sivanthipuram",
        "stateId": 35
      },
      {
        "id": 4232,
        "name": "Sivur",
        "stateId": 35
      },
      {
        "id": 4233,
        "name": "Soranjeri",
        "stateId": 35
      },
      {
        "id": 4234,
        "name": "South Kannanur",
        "stateId": 35
      },
      {
        "id": 4235,
        "name": "South Kodikulam",
        "stateId": 35
      },
      {
        "id": 4236,
        "name": "Srimushnam",
        "stateId": 35
      },
      {
        "id": 4237,
        "name": "Sriperumpudur",
        "stateId": 35
      },
      {
        "id": 4238,
        "name": "Sriramapuram",
        "stateId": 35
      },
      {
        "id": 4239,
        "name": "Srirangam",
        "stateId": 35
      },
      {
        "id": 4240,
        "name": "Srivaikuntam",
        "stateId": 35
      },
      {
        "id": 4241,
        "name": "Srivilliputtur",
        "stateId": 35
      },
      {
        "id": 4242,
        "name": "Suchindram",
        "stateId": 35
      },
      {
        "id": 4243,
        "name": "Suliswaranpatti",
        "stateId": 35
      },
      {
        "id": 4244,
        "name": "Sulur",
        "stateId": 35
      },
      {
        "id": 4245,
        "name": "Sundarapandiam",
        "stateId": 35
      },
      {
        "id": 4246,
        "name": "Sundarapandiapuram",
        "stateId": 35
      },
      {
        "id": 4247,
        "name": "Surampatti",
        "stateId": 35
      },
      {
        "id": 4248,
        "name": "Surandai",
        "stateId": 35
      },
      {
        "id": 4249,
        "name": "Suriyampalayam",
        "stateId": 35
      },
      {
        "id": 4250,
        "name": "Swamimalai",
        "stateId": 35
      },
      {
        "id": 4251,
        "name": "TNPL Pugalur",
        "stateId": 35
      },
      {
        "id": 4252,
        "name": "Tambaram",
        "stateId": 35
      },
      {
        "id": 4253,
        "name": "Taramangalam",
        "stateId": 35
      },
      {
        "id": 4254,
        "name": "Tattayyangarpettai",
        "stateId": 35
      },
      {
        "id": 4255,
        "name": "Tayilupatti",
        "stateId": 35
      },
      {
        "id": 4256,
        "name": "Tenkasi",
        "stateId": 35
      },
      {
        "id": 4257,
        "name": "Thadikombu",
        "stateId": 35
      },
      {
        "id": 4258,
        "name": "Thakkolam",
        "stateId": 35
      },
      {
        "id": 4259,
        "name": "Thalainayar",
        "stateId": 35
      },
      {
        "id": 4260,
        "name": "Thalakudi",
        "stateId": 35
      },
      {
        "id": 4261,
        "name": "Thamaraikulam",
        "stateId": 35
      },
      {
        "id": 4262,
        "name": "Thammampatti",
        "stateId": 35
      },
      {
        "id": 4263,
        "name": "Thanjavur",
        "stateId": 35
      },
      {
        "id": 4264,
        "name": "Thanthoni",
        "stateId": 35
      },
      {
        "id": 4265,
        "name": "Tharangambadi",
        "stateId": 35
      },
      {
        "id": 4266,
        "name": "Thedavur",
        "stateId": 35
      },
      {
        "id": 4267,
        "name": "Thenambakkam",
        "stateId": 35
      },
      {
        "id": 4268,
        "name": "Thengampudur",
        "stateId": 35
      },
      {
        "id": 4269,
        "name": "Theni",
        "stateId": 35
      },
      {
        "id": 4270,
        "name": "Theni Allinagaram",
        "stateId": 35
      },
      {
        "id": 4271,
        "name": "Thenkarai",
        "stateId": 35
      },
      {
        "id": 4272,
        "name": "Thenthamaraikulam",
        "stateId": 35
      },
      {
        "id": 4273,
        "name": "Thenthiruperai",
        "stateId": 35
      },
      {
        "id": 4274,
        "name": "Thesur",
        "stateId": 35
      },
      {
        "id": 4275,
        "name": "Thevaram",
        "stateId": 35
      },
      {
        "id": 4276,
        "name": "Thevur",
        "stateId": 35
      },
      {
        "id": 4277,
        "name": "Thiagadurgam",
        "stateId": 35
      },
      {
        "id": 4278,
        "name": "Thiagarajar Colony",
        "stateId": 35
      },
      {
        "id": 4279,
        "name": "Thingalnagar",
        "stateId": 35
      },
      {
        "id": 4280,
        "name": "Thiruchirapalli",
        "stateId": 35
      },
      {
        "id": 4281,
        "name": "Thirukarungudi",
        "stateId": 35
      },
      {
        "id": 4282,
        "name": "Thirukazhukundram",
        "stateId": 35
      },
      {
        "id": 4283,
        "name": "Thirumalayampalayam",
        "stateId": 35
      },
      {
        "id": 4284,
        "name": "Thirumazhisai",
        "stateId": 35
      },
      {
        "id": 4285,
        "name": "Thirunagar",
        "stateId": 35
      },
      {
        "id": 4286,
        "name": "Thirunageswaram",
        "stateId": 35
      },
      {
        "id": 4287,
        "name": "Thirunindravur",
        "stateId": 35
      },
      {
        "id": 4288,
        "name": "Thirunirmalai",
        "stateId": 35
      },
      {
        "id": 4289,
        "name": "Thiruparankundram",
        "stateId": 35
      },
      {
        "id": 4290,
        "name": "Thiruparappu",
        "stateId": 35
      },
      {
        "id": 4291,
        "name": "Thiruporur",
        "stateId": 35
      },
      {
        "id": 4292,
        "name": "Thiruppanandal",
        "stateId": 35
      },
      {
        "id": 4293,
        "name": "Thirupuvanam",
        "stateId": 35
      },
      {
        "id": 4294,
        "name": "Thiruthangal",
        "stateId": 35
      },
      {
        "id": 4295,
        "name": "Thiruthuraipundi",
        "stateId": 35
      },
      {
        "id": 4296,
        "name": "Thiruvaivaru",
        "stateId": 35
      },
      {
        "id": 4297,
        "name": "Thiruvalam",
        "stateId": 35
      },
      {
        "id": 4298,
        "name": "Thiruvarur",
        "stateId": 35
      },
      {
        "id": 4299,
        "name": "Thiruvattaru",
        "stateId": 35
      },
      {
        "id": 4300,
        "name": "Thiruvenkatam",
        "stateId": 35
      },
      {
        "id": 4301,
        "name": "Thiruvennainallur",
        "stateId": 35
      },
      {
        "id": 4302,
        "name": "Thiruvithankodu",
        "stateId": 35
      },
      {
        "id": 4303,
        "name": "Thisayanvilai",
        "stateId": 35
      },
      {
        "id": 4304,
        "name": "Thittacheri",
        "stateId": 35
      },
      {
        "id": 4305,
        "name": "Thondamuthur",
        "stateId": 35
      },
      {
        "id": 4306,
        "name": "Thorapadi",
        "stateId": 35
      },
      {
        "id": 4307,
        "name": "Thottipalayam",
        "stateId": 35
      },
      {
        "id": 4308,
        "name": "Thottiyam",
        "stateId": 35
      },
      {
        "id": 4309,
        "name": "Thudiyalur",
        "stateId": 35
      },
      {
        "id": 4310,
        "name": "Thuthipattu",
        "stateId": 35
      },
      {
        "id": 4311,
        "name": "Thuvakudi",
        "stateId": 35
      },
      {
        "id": 4312,
        "name": "Timiri",
        "stateId": 35
      },
      {
        "id": 4313,
        "name": "Tindivanam",
        "stateId": 35
      },
      {
        "id": 4314,
        "name": "Tinnanur",
        "stateId": 35
      },
      {
        "id": 4315,
        "name": "Tiruchchendur",
        "stateId": 35
      },
      {
        "id": 4316,
        "name": "Tiruchengode",
        "stateId": 35
      },
      {
        "id": 4317,
        "name": "Tirukkalukkundram",
        "stateId": 35
      },
      {
        "id": 4318,
        "name": "Tirukkattuppalli",
        "stateId": 35
      },
      {
        "id": 4319,
        "name": "Tirukkoyilur",
        "stateId": 35
      },
      {
        "id": 4320,
        "name": "Tirumangalam",
        "stateId": 35
      },
      {
        "id": 4321,
        "name": "Tirumullaivasal",
        "stateId": 35
      },
      {
        "id": 4322,
        "name": "Tirumuruganpundi",
        "stateId": 35
      },
      {
        "id": 4323,
        "name": "Tirunageswaram",
        "stateId": 35
      },
      {
        "id": 4324,
        "name": "Tirunelveli",
        "stateId": 35
      },
      {
        "id": 4325,
        "name": "Tirupathur",
        "stateId": 35
      },
      {
        "id": 4326,
        "name": "Tirupattur",
        "stateId": 35
      },
      {
        "id": 4327,
        "name": "Tiruppuvanam",
        "stateId": 35
      },
      {
        "id": 4328,
        "name": "Tirupur",
        "stateId": 35
      },
      {
        "id": 4329,
        "name": "Tirusulam",
        "stateId": 35
      },
      {
        "id": 4330,
        "name": "Tiruttani",
        "stateId": 35
      },
      {
        "id": 4331,
        "name": "Tiruvallur",
        "stateId": 35
      },
      {
        "id": 4332,
        "name": "Tiruvannamalai",
        "stateId": 35
      },
      {
        "id": 4333,
        "name": "Tiruverambur",
        "stateId": 35
      },
      {
        "id": 4334,
        "name": "Tiruverkadu",
        "stateId": 35
      },
      {
        "id": 4335,
        "name": "Tiruvethipuram",
        "stateId": 35
      },
      {
        "id": 4336,
        "name": "Tiruvidaimarudur",
        "stateId": 35
      },
      {
        "id": 4337,
        "name": "Tiruvottiyur",
        "stateId": 35
      },
      {
        "id": 4338,
        "name": "Tittakudi",
        "stateId": 35
      },
      {
        "id": 4339,
        "name": "Tondi",
        "stateId": 35
      },
      {
        "id": 4340,
        "name": "Turaiyur",
        "stateId": 35
      },
      {
        "id": 4341,
        "name": "Tuticorin",
        "stateId": 35
      },
      {
        "id": 4342,
        "name": "Udagamandalam",
        "stateId": 35
      },
      {
        "id": 4343,
        "name": "Udagamandalam Valley",
        "stateId": 35
      },
      {
        "id": 4344,
        "name": "Udankudi",
        "stateId": 35
      },
      {
        "id": 4345,
        "name": "Udayarpalayam",
        "stateId": 35
      },
      {
        "id": 4346,
        "name": "Udumalaipettai",
        "stateId": 35
      },
      {
        "id": 4347,
        "name": "Udumalpet",
        "stateId": 35
      },
      {
        "id": 4348,
        "name": "Ullur",
        "stateId": 35
      },
      {
        "id": 4349,
        "name": "Ulundurpettai",
        "stateId": 35
      },
      {
        "id": 4350,
        "name": "Unjalaur",
        "stateId": 35
      },
      {
        "id": 4351,
        "name": "Unnamalaikadai",
        "stateId": 35
      },
      {
        "id": 4352,
        "name": "Uppidamangalam",
        "stateId": 35
      },
      {
        "id": 4353,
        "name": "Uppiliapuram",
        "stateId": 35
      },
      {
        "id": 4354,
        "name": "Urachikkottai",
        "stateId": 35
      },
      {
        "id": 4355,
        "name": "Urapakkam",
        "stateId": 35
      },
      {
        "id": 4356,
        "name": "Usilampatti",
        "stateId": 35
      },
      {
        "id": 4357,
        "name": "Uthangarai",
        "stateId": 35
      },
      {
        "id": 4358,
        "name": "Uthayendram",
        "stateId": 35
      },
      {
        "id": 4359,
        "name": "Uthiramerur",
        "stateId": 35
      },
      {
        "id": 4360,
        "name": "Uthukkottai",
        "stateId": 35
      },
      {
        "id": 4361,
        "name": "Uttamapalaiyam",
        "stateId": 35
      },
      {
        "id": 4362,
        "name": "Uttukkuli",
        "stateId": 35
      },
      {
        "id": 4363,
        "name": "Vadakarai Kizhpadugai",
        "stateId": 35
      },
      {
        "id": 4364,
        "name": "Vadakkanandal",
        "stateId": 35
      },
      {
        "id": 4365,
        "name": "Vadakku Valliyur",
        "stateId": 35
      },
      {
        "id": 4366,
        "name": "Vadalur",
        "stateId": 35
      },
      {
        "id": 4367,
        "name": "Vadamadurai",
        "stateId": 35
      },
      {
        "id": 4368,
        "name": "Vadavalli",
        "stateId": 35
      },
      {
        "id": 4369,
        "name": "Vadipatti",
        "stateId": 35
      },
      {
        "id": 4370,
        "name": "Vadugapatti",
        "stateId": 35
      },
      {
        "id": 4371,
        "name": "Vaithiswarankoil",
        "stateId": 35
      },
      {
        "id": 4372,
        "name": "Valangaiman",
        "stateId": 35
      },
      {
        "id": 4373,
        "name": "Valasaravakkam",
        "stateId": 35
      },
      {
        "id": 4374,
        "name": "Valavanur",
        "stateId": 35
      },
      {
        "id": 4375,
        "name": "Vallam",
        "stateId": 35
      },
      {
        "id": 4376,
        "name": "Valparai",
        "stateId": 35
      },
      {
        "id": 4377,
        "name": "Valvaithankoshtam",
        "stateId": 35
      },
      {
        "id": 4378,
        "name": "Vanavasi",
        "stateId": 35
      },
      {
        "id": 4379,
        "name": "Vandalur",
        "stateId": 35
      },
      {
        "id": 4380,
        "name": "Vandavasi",
        "stateId": 35
      },
      {
        "id": 4381,
        "name": "Vandiyur",
        "stateId": 35
      },
      {
        "id": 4382,
        "name": "Vaniputhur",
        "stateId": 35
      },
      {
        "id": 4383,
        "name": "Vaniyambadi",
        "stateId": 35
      },
      {
        "id": 4384,
        "name": "Varadarajanpettai",
        "stateId": 35
      },
      {
        "id": 4385,
        "name": "Varadharajapuram",
        "stateId": 35
      },
      {
        "id": 4386,
        "name": "Vasudevanallur",
        "stateId": 35
      },
      {
        "id": 4387,
        "name": "Vathirairuppu",
        "stateId": 35
      },
      {
        "id": 4388,
        "name": "Vattalkundu",
        "stateId": 35
      },
      {
        "id": 4389,
        "name": "Vazhapadi",
        "stateId": 35
      },
      {
        "id": 4390,
        "name": "Vedapatti",
        "stateId": 35
      },
      {
        "id": 4391,
        "name": "Vedaranniyam",
        "stateId": 35
      },
      {
        "id": 4392,
        "name": "Vedasandur",
        "stateId": 35
      },
      {
        "id": 4393,
        "name": "Velampalaiyam",
        "stateId": 35
      },
      {
        "id": 4394,
        "name": "Velankanni",
        "stateId": 35
      },
      {
        "id": 4395,
        "name": "Vellakinar",
        "stateId": 35
      },
      {
        "id": 4396,
        "name": "Vellakoil",
        "stateId": 35
      },
      {
        "id": 4397,
        "name": "Vellalapatti",
        "stateId": 35
      },
      {
        "id": 4398,
        "name": "Vellalur",
        "stateId": 35
      },
      {
        "id": 4399,
        "name": "Vellanur",
        "stateId": 35
      },
      {
        "id": 4400,
        "name": "Vellimalai",
        "stateId": 35
      },
      {
        "id": 4401,
        "name": "Vellore",
        "stateId": 35
      },
      {
        "id": 4402,
        "name": "Vellottamparappu",
        "stateId": 35
      },
      {
        "id": 4403,
        "name": "Velluru",
        "stateId": 35
      },
      {
        "id": 4404,
        "name": "Vengampudur",
        "stateId": 35
      },
      {
        "id": 4405,
        "name": "Vengathur",
        "stateId": 35
      },
      {
        "id": 4406,
        "name": "Vengavasal",
        "stateId": 35
      },
      {
        "id": 4407,
        "name": "Venghatur",
        "stateId": 35
      },
      {
        "id": 4408,
        "name": "Venkarai",
        "stateId": 35
      },
      {
        "id": 4409,
        "name": "Vennanthur",
        "stateId": 35
      },
      {
        "id": 4410,
        "name": "Veppathur",
        "stateId": 35
      },
      {
        "id": 4411,
        "name": "Verkilambi",
        "stateId": 35
      },
      {
        "id": 4412,
        "name": "Vettaikaranpudur",
        "stateId": 35
      },
      {
        "id": 4413,
        "name": "Vettavalam",
        "stateId": 35
      },
      {
        "id": 4414,
        "name": "Vijayapuri",
        "stateId": 35
      },
      {
        "id": 4415,
        "name": "Vikramasingapuram",
        "stateId": 35
      },
      {
        "id": 4416,
        "name": "Vikravandi",
        "stateId": 35
      },
      {
        "id": 4417,
        "name": "Vilangudi",
        "stateId": 35
      },
      {
        "id": 4418,
        "name": "Vilankurichi",
        "stateId": 35
      },
      {
        "id": 4419,
        "name": "Vilapakkam",
        "stateId": 35
      },
      {
        "id": 4420,
        "name": "Vilathikulam",
        "stateId": 35
      },
      {
        "id": 4421,
        "name": "Vilavur",
        "stateId": 35
      },
      {
        "id": 4422,
        "name": "Villukuri",
        "stateId": 35
      },
      {
        "id": 4423,
        "name": "Villupuram",
        "stateId": 35
      },
      {
        "id": 4424,
        "name": "Viraganur",
        "stateId": 35
      },
      {
        "id": 4425,
        "name": "Virakeralam",
        "stateId": 35
      },
      {
        "id": 4426,
        "name": "Virakkalpudur",
        "stateId": 35
      },
      {
        "id": 4427,
        "name": "Virapandi",
        "stateId": 35
      },
      {
        "id": 4428,
        "name": "Virapandi Cantonment",
        "stateId": 35
      },
      {
        "id": 4429,
        "name": "Virappanchatram",
        "stateId": 35
      },
      {
        "id": 4430,
        "name": "Viravanallur",
        "stateId": 35
      },
      {
        "id": 4431,
        "name": "Virudambattu",
        "stateId": 35
      },
      {
        "id": 4432,
        "name": "Virudhachalam",
        "stateId": 35
      },
      {
        "id": 4433,
        "name": "Virudhunagar",
        "stateId": 35
      },
      {
        "id": 4434,
        "name": "Virupakshipuram",
        "stateId": 35
      },
      {
        "id": 4435,
        "name": "Viswanatham",
        "stateId": 35
      },
      {
        "id": 4436,
        "name": "Vriddhachalam",
        "stateId": 35
      },
      {
        "id": 4437,
        "name": "Walajabad",
        "stateId": 35
      },
      {
        "id": 4438,
        "name": "Walajapet",
        "stateId": 35
      },
      {
        "id": 4439,
        "name": "Wellington",
        "stateId": 35
      },
      {
        "id": 4440,
        "name": "Yercaud",
        "stateId": 35
      },
      {
        "id": 4441,
        "name": "Zamin Uthukuli",
        "stateId": 35
      },
      {
        "id": 4442,
        "name": "Achampet",
        "stateId": 36
      },
      {
        "id": 4443,
        "name": "Adilabad",
        "stateId": 36
      },
      {
        "id": 4444,
        "name": "Armoor",
        "stateId": 36
      },
      {
        "id": 4445,
        "name": "Asifabad",
        "stateId": 36
      },
      {
        "id": 4446,
        "name": "Badepally",
        "stateId": 36
      },
      {
        "id": 4447,
        "name": "Banswada",
        "stateId": 36
      },
      {
        "id": 4448,
        "name": "Bellampalli",
        "stateId": 36
      },
      {
        "id": 4449,
        "name": "Bhadrachalam",
        "stateId": 36
      },
      {
        "id": 4450,
        "name": "Bhainsa",
        "stateId": 36
      },
      {
        "id": 4451,
        "name": "Bhongir",
        "stateId": 36
      },
      {
        "id": 4452,
        "name": "Bhupalpally",
        "stateId": 36
      },
      {
        "id": 4453,
        "name": "Bodhan",
        "stateId": 36
      },
      {
        "id": 4454,
        "name": "Bollaram",
        "stateId": 36
      },
      {
        "id": 4455,
        "name": "Devarkonda",
        "stateId": 36
      },
      {
        "id": 4456,
        "name": "Farooqnagar",
        "stateId": 36
      },
      {
        "id": 4457,
        "name": "Gadwal",
        "stateId": 36
      },
      {
        "id": 4458,
        "name": "Gajwel",
        "stateId": 36
      },
      {
        "id": 4459,
        "name": "Ghatkesar",
        "stateId": 36
      },
      {
        "id": 4460,
        "name": "Hyderabad",
        "stateId": 36
      },
      {
        "id": 4461,
        "name": "Jagtial",
        "stateId": 36
      },
      {
        "id": 4462,
        "name": "Jangaon",
        "stateId": 36
      },
      {
        "id": 4463,
        "name": "Kagaznagar",
        "stateId": 36
      },
      {
        "id": 4464,
        "name": "Kalwakurthy",
        "stateId": 36
      },
      {
        "id": 4465,
        "name": "Kamareddy",
        "stateId": 36
      },
      {
        "id": 4466,
        "name": "Karimnagar",
        "stateId": 36
      },
      {
        "id": 4467,
        "name": "Khammam",
        "stateId": 36
      },
      {
        "id": 4468,
        "name": "Kodada",
        "stateId": 36
      },
      {
        "id": 4469,
        "name": "Koratla",
        "stateId": 36
      },
      {
        "id": 4470,
        "name": "Kottagudem",
        "stateId": 36
      },
      {
        "id": 4471,
        "name": "Kyathampalle",
        "stateId": 36
      },
      {
        "id": 4472,
        "name": "Madhira",
        "stateId": 36
      },
      {
        "id": 4473,
        "name": "Mahabubabad",
        "stateId": 36
      },
      {
        "id": 4474,
        "name": "Mahbubnagar",
        "stateId": 36
      },
      {
        "id": 4475,
        "name": "Mancherial",
        "stateId": 36
      },
      {
        "id": 4476,
        "name": "Mandamarri",
        "stateId": 36
      },
      {
        "id": 4477,
        "name": "Manuguru",
        "stateId": 36
      },
      {
        "id": 4478,
        "name": "Medak",
        "stateId": 36
      },
      {
        "id": 4479,
        "name": "Medchal",
        "stateId": 36
      },
      {
        "id": 4480,
        "name": "Miryalaguda",
        "stateId": 36
      },
      {
        "id": 4481,
        "name": "Nagar Karnul",
        "stateId": 36
      },
      {
        "id": 4482,
        "name": "Nakrekal",
        "stateId": 36
      },
      {
        "id": 4483,
        "name": "Nalgonda",
        "stateId": 36
      },
      {
        "id": 4484,
        "name": "Narayanpet",
        "stateId": 36
      },
      {
        "id": 4485,
        "name": "Narsampet",
        "stateId": 36
      },
      {
        "id": 4486,
        "name": "Nirmal",
        "stateId": 36
      },
      {
        "id": 4487,
        "name": "Nizamabad",
        "stateId": 36
      },
      {
        "id": 4488,
        "name": "Palwancha",
        "stateId": 36
      },
      {
        "id": 4489,
        "name": "Peddapalli",
        "stateId": 36
      },
      {
        "id": 4490,
        "name": "Ramagundam",
        "stateId": 36
      },
      {
        "id": 4491,
        "name": "Ranga Reddy district",
        "stateId": 36
      },
      {
        "id": 4492,
        "name": "Sadasivpet",
        "stateId": 36
      },
      {
        "id": 4493,
        "name": "Sangareddy",
        "stateId": 36
      },
      {
        "id": 4494,
        "name": "Sarapaka",
        "stateId": 36
      },
      {
        "id": 4495,
        "name": "Sathupalle",
        "stateId": 36
      },
      {
        "id": 4496,
        "name": "Secunderabad",
        "stateId": 36
      },
      {
        "id": 4497,
        "name": "Siddipet",
        "stateId": 36
      },
      {
        "id": 4498,
        "name": "Singapur",
        "stateId": 36
      },
      {
        "id": 4499,
        "name": "Sircilla",
        "stateId": 36
      },
      {
        "id": 4500,
        "name": "Suryapet",
        "stateId": 36
      },
      {
        "id": 4501,
        "name": "Tandur",
        "stateId": 36
      },
      {
        "id": 4502,
        "name": "Vemulawada",
        "stateId": 36
      },
      {
        "id": 4503,
        "name": "Vikarabad",
        "stateId": 36
      },
      {
        "id": 4504,
        "name": "Wanaparthy",
        "stateId": 36
      },
      {
        "id": 4505,
        "name": "Warangal",
        "stateId": 36
      },
      {
        "id": 4506,
        "name": "Yellandu",
        "stateId": 36
      },
      {
        "id": 4507,
        "name": "Zahirabad",
        "stateId": 36
      },
      {
        "id": 4508,
        "name": "Agartala",
        "stateId": 37
      },
      {
        "id": 4509,
        "name": "Amarpur",
        "stateId": 37
      },
      {
        "id": 4510,
        "name": "Ambassa",
        "stateId": 37
      },
      {
        "id": 4511,
        "name": "Badharghat",
        "stateId": 37
      },
      {
        "id": 4512,
        "name": "Belonia",
        "stateId": 37
      },
      {
        "id": 4513,
        "name": "Dharmanagar",
        "stateId": 37
      },
      {
        "id": 4514,
        "name": "Gakulnagar",
        "stateId": 37
      },
      {
        "id": 4515,
        "name": "Gandhigram",
        "stateId": 37
      },
      {
        "id": 4516,
        "name": "Indranagar",
        "stateId": 37
      },
      {
        "id": 4517,
        "name": "Jogendranagar",
        "stateId": 37
      },
      {
        "id": 4518,
        "name": "Kailasahar",
        "stateId": 37
      },
      {
        "id": 4519,
        "name": "Kamalpur",
        "stateId": 37
      },
      {
        "id": 4520,
        "name": "Kanchanpur",
        "stateId": 37
      },
      {
        "id": 4521,
        "name": "Khowai",
        "stateId": 37
      },
      {
        "id": 4522,
        "name": "Kumarghat",
        "stateId": 37
      },
      {
        "id": 4523,
        "name": "Kunjaban",
        "stateId": 37
      },
      {
        "id": 4524,
        "name": "Narsingarh",
        "stateId": 37
      },
      {
        "id": 4525,
        "name": "Pratapgarh",
        "stateId": 37
      },
      {
        "id": 4526,
        "name": "Ranir Bazar",
        "stateId": 37
      },
      {
        "id": 4527,
        "name": "Sabrum",
        "stateId": 37
      },
      {
        "id": 4528,
        "name": "Sonamura",
        "stateId": 37
      },
      {
        "id": 4529,
        "name": "Teliamura",
        "stateId": 37
      },
      {
        "id": 4530,
        "name": "Udaipur",
        "stateId": 37
      },
      {
        "id": 4531,
        "name": "Achhalda",
        "stateId": 38
      },
      {
        "id": 4532,
        "name": "Achhnera",
        "stateId": 38
      },
      {
        "id": 4533,
        "name": "Adari",
        "stateId": 38
      },
      {
        "id": 4534,
        "name": "Afzalgarh",
        "stateId": 38
      },
      {
        "id": 4535,
        "name": "Agarwal Mandi",
        "stateId": 38
      },
      {
        "id": 4536,
        "name": "Agra",
        "stateId": 38
      },
      {
        "id": 4537,
        "name": "Agra Cantonment",
        "stateId": 38
      },
      {
        "id": 4538,
        "name": "Ahraura",
        "stateId": 38
      },
      {
        "id": 4539,
        "name": "Ailum",
        "stateId": 38
      },
      {
        "id": 4540,
        "name": "Air Force Area",
        "stateId": 38
      },
      {
        "id": 4541,
        "name": "Ajhuwa",
        "stateId": 38
      },
      {
        "id": 4542,
        "name": "Akbarpur",
        "stateId": 38
      },
      {
        "id": 4543,
        "name": "Alapur",
        "stateId": 38
      },
      {
        "id": 4544,
        "name": "Aliganj",
        "stateId": 38
      },
      {
        "id": 4545,
        "name": "Aligarh",
        "stateId": 38
      },
      {
        "id": 4546,
        "name": "Allahabad",
        "stateId": 38
      },
      {
        "id": 4547,
        "name": "Allahabad Cantonment",
        "stateId": 38
      },
      {
        "id": 4548,
        "name": "Allahganj",
        "stateId": 38
      },
      {
        "id": 4549,
        "name": "Amanpur",
        "stateId": 38
      },
      {
        "id": 4550,
        "name": "Ambahta",
        "stateId": 38
      },
      {
        "id": 4551,
        "name": "Amethi",
        "stateId": 38
      },
      {
        "id": 4552,
        "name": "Amila",
        "stateId": 38
      },
      {
        "id": 4553,
        "name": "Amilo",
        "stateId": 38
      },
      {
        "id": 4554,
        "name": "Aminagar Sarai",
        "stateId": 38
      },
      {
        "id": 4555,
        "name": "Aminagar Urf Bhurbaral",
        "stateId": 38
      },
      {
        "id": 4556,
        "name": "Amraudha",
        "stateId": 38
      },
      {
        "id": 4557,
        "name": "Amroha",
        "stateId": 38
      },
      {
        "id": 4558,
        "name": "Anandnagar",
        "stateId": 38
      },
      {
        "id": 4559,
        "name": "Anpara",
        "stateId": 38
      },
      {
        "id": 4560,
        "name": "Antu",
        "stateId": 38
      },
      {
        "id": 4561,
        "name": "Anupshahr",
        "stateId": 38
      },
      {
        "id": 4562,
        "name": "Aonla",
        "stateId": 38
      },
      {
        "id": 4563,
        "name": "Armapur Estate",
        "stateId": 38
      },
      {
        "id": 4564,
        "name": "Ashokpuram",
        "stateId": 38
      },
      {
        "id": 4565,
        "name": "Ashrafpur Kichhauchha",
        "stateId": 38
      },
      {
        "id": 4566,
        "name": "Atarra",
        "stateId": 38
      },
      {
        "id": 4567,
        "name": "Atasu",
        "stateId": 38
      },
      {
        "id": 4568,
        "name": "Atrauli",
        "stateId": 38
      },
      {
        "id": 4569,
        "name": "Atraulia",
        "stateId": 38
      },
      {
        "id": 4570,
        "name": "Auraiya",
        "stateId": 38
      },
      {
        "id": 4571,
        "name": "Aurangabad",
        "stateId": 38
      },
      {
        "id": 4572,
        "name": "Aurangabad Bangar",
        "stateId": 38
      },
      {
        "id": 4573,
        "name": "Auras",
        "stateId": 38
      },
      {
        "id": 4574,
        "name": "Awagarh",
        "stateId": 38
      },
      {
        "id": 4575,
        "name": "Ayodhya",
        "stateId": 38
      },
      {
        "id": 4576,
        "name": "Azamgarh",
        "stateId": 38
      },
      {
        "id": 4577,
        "name": "Azizpur",
        "stateId": 38
      },
      {
        "id": 4578,
        "name": "Azmatgarh",
        "stateId": 38
      },
      {
        "id": 4579,
        "name": "Babarpur Ajitmal",
        "stateId": 38
      },
      {
        "id": 4580,
        "name": "Baberu",
        "stateId": 38
      },
      {
        "id": 4581,
        "name": "Babina",
        "stateId": 38
      },
      {
        "id": 4582,
        "name": "Babrala",
        "stateId": 38
      },
      {
        "id": 4583,
        "name": "Babugarh",
        "stateId": 38
      },
      {
        "id": 4584,
        "name": "Bachhiowan",
        "stateId": 38
      },
      {
        "id": 4585,
        "name": "Bachhraon",
        "stateId": 38
      },
      {
        "id": 4586,
        "name": "Bad",
        "stateId": 38
      },
      {
        "id": 4587,
        "name": "Badaun",
        "stateId": 38
      },
      {
        "id": 4588,
        "name": "Baghpat",
        "stateId": 38
      },
      {
        "id": 4589,
        "name": "Bah",
        "stateId": 38
      },
      {
        "id": 4590,
        "name": "Bahadurganj",
        "stateId": 38
      },
      {
        "id": 4591,
        "name": "Baheri",
        "stateId": 38
      },
      {
        "id": 4592,
        "name": "Bahjoi",
        "stateId": 38
      },
      {
        "id": 4593,
        "name": "Bahraich",
        "stateId": 38
      },
      {
        "id": 4594,
        "name": "Bahsuma",
        "stateId": 38
      },
      {
        "id": 4595,
        "name": "Bahua",
        "stateId": 38
      },
      {
        "id": 4596,
        "name": "Bajna",
        "stateId": 38
      },
      {
        "id": 4597,
        "name": "Bakewar",
        "stateId": 38
      },
      {
        "id": 4598,
        "name": "Bakiabad",
        "stateId": 38
      },
      {
        "id": 4599,
        "name": "Baldeo",
        "stateId": 38
      },
      {
        "id": 4600,
        "name": "Ballia",
        "stateId": 38
      },
      {
        "id": 4601,
        "name": "Balrampur",
        "stateId": 38
      },
      {
        "id": 4602,
        "name": "Banat",
        "stateId": 38
      },
      {
        "id": 4603,
        "name": "Banda",
        "stateId": 38
      },
      {
        "id": 4604,
        "name": "Bangarmau",
        "stateId": 38
      },
      {
        "id": 4605,
        "name": "Banki",
        "stateId": 38
      },
      {
        "id": 4606,
        "name": "Bansdih",
        "stateId": 38
      },
      {
        "id": 4607,
        "name": "Bansgaon",
        "stateId": 38
      },
      {
        "id": 4608,
        "name": "Bansi",
        "stateId": 38
      },
      {
        "id": 4609,
        "name": "Barabanki",
        "stateId": 38
      },
      {
        "id": 4610,
        "name": "Baragaon",
        "stateId": 38
      },
      {
        "id": 4611,
        "name": "Baraut",
        "stateId": 38
      },
      {
        "id": 4612,
        "name": "Bareilly",
        "stateId": 38
      },
      {
        "id": 4613,
        "name": "Bareilly Cantonment",
        "stateId": 38
      },
      {
        "id": 4614,
        "name": "Barhalganj",
        "stateId": 38
      },
      {
        "id": 4615,
        "name": "Barhani",
        "stateId": 38
      },
      {
        "id": 4616,
        "name": "Barhapur",
        "stateId": 38
      },
      {
        "id": 4617,
        "name": "Barkhera",
        "stateId": 38
      },
      {
        "id": 4618,
        "name": "Barsana",
        "stateId": 38
      },
      {
        "id": 4619,
        "name": "Barva Sagar",
        "stateId": 38
      },
      {
        "id": 4620,
        "name": "Barwar",
        "stateId": 38
      },
      {
        "id": 4621,
        "name": "Basti",
        "stateId": 38
      },
      {
        "id": 4622,
        "name": "Begumabad Budhana",
        "stateId": 38
      },
      {
        "id": 4623,
        "name": "Behat",
        "stateId": 38
      },
      {
        "id": 4624,
        "name": "Behta Hajipur",
        "stateId": 38
      },
      {
        "id": 4625,
        "name": "Bela",
        "stateId": 38
      },
      {
        "id": 4626,
        "name": "Belthara",
        "stateId": 38
      },
      {
        "id": 4627,
        "name": "Beniganj",
        "stateId": 38
      },
      {
        "id": 4628,
        "name": "Beswan",
        "stateId": 38
      },
      {
        "id": 4629,
        "name": "Bewar",
        "stateId": 38
      },
      {
        "id": 4630,
        "name": "Bhadarsa",
        "stateId": 38
      },
      {
        "id": 4631,
        "name": "Bhadohi",
        "stateId": 38
      },
      {
        "id": 4632,
        "name": "Bhagwantnagar",
        "stateId": 38
      },
      {
        "id": 4633,
        "name": "Bharatganj",
        "stateId": 38
      },
      {
        "id": 4634,
        "name": "Bhargain",
        "stateId": 38
      },
      {
        "id": 4635,
        "name": "Bharthana",
        "stateId": 38
      },
      {
        "id": 4636,
        "name": "Bharuhana",
        "stateId": 38
      },
      {
        "id": 4637,
        "name": "Bharwari",
        "stateId": 38
      },
      {
        "id": 4638,
        "name": "Bhatni Bazar",
        "stateId": 38
      },
      {
        "id": 4639,
        "name": "Bhatpar Rani",
        "stateId": 38
      },
      {
        "id": 4640,
        "name": "Bhawan Bahadurnagar",
        "stateId": 38
      },
      {
        "id": 4641,
        "name": "Bhinga",
        "stateId": 38
      },
      {
        "id": 4642,
        "name": "Bhojpur Dharampur",
        "stateId": 38
      },
      {
        "id": 4643,
        "name": "Bhokarhedi",
        "stateId": 38
      },
      {
        "id": 4644,
        "name": "Bhongaon",
        "stateId": 38
      },
      {
        "id": 4645,
        "name": "Bhulepur",
        "stateId": 38
      },
      {
        "id": 4646,
        "name": "Bidhuna",
        "stateId": 38
      },
      {
        "id": 4647,
        "name": "Bighapur",
        "stateId": 38
      },
      {
        "id": 4648,
        "name": "Bijnor",
        "stateId": 38
      },
      {
        "id": 4649,
        "name": "Bijpur",
        "stateId": 38
      },
      {
        "id": 4650,
        "name": "Bikapur",
        "stateId": 38
      },
      {
        "id": 4651,
        "name": "Bilari",
        "stateId": 38
      },
      {
        "id": 4652,
        "name": "Bilaspur",
        "stateId": 38
      },
      {
        "id": 4653,
        "name": "Bilgram",
        "stateId": 38
      },
      {
        "id": 4654,
        "name": "Bilhaur",
        "stateId": 38
      },
      {
        "id": 4655,
        "name": "Bilram",
        "stateId": 38
      },
      {
        "id": 4656,
        "name": "Bilrayaganj",
        "stateId": 38
      },
      {
        "id": 4657,
        "name": "Bilsanda",
        "stateId": 38
      },
      {
        "id": 4658,
        "name": "Bilsi",
        "stateId": 38
      },
      {
        "id": 4659,
        "name": "Bindki",
        "stateId": 38
      },
      {
        "id": 4660,
        "name": "Bisalpur",
        "stateId": 38
      },
      {
        "id": 4661,
        "name": "Bisanda Buzurg",
        "stateId": 38
      },
      {
        "id": 4662,
        "name": "Bisauli",
        "stateId": 38
      },
      {
        "id": 4663,
        "name": "Bisharatganj",
        "stateId": 38
      },
      {
        "id": 4664,
        "name": "Bisokhar",
        "stateId": 38
      },
      {
        "id": 4665,
        "name": "Biswan",
        "stateId": 38
      },
      {
        "id": 4666,
        "name": "Bithur",
        "stateId": 38
      },
      {
        "id": 4667,
        "name": "Budaun",
        "stateId": 38
      },
      {
        "id": 4668,
        "name": "Bugrasi",
        "stateId": 38
      },
      {
        "id": 4669,
        "name": "Bulandshahar",
        "stateId": 38
      },
      {
        "id": 4670,
        "name": "Burhana",
        "stateId": 38
      },
      {
        "id": 4671,
        "name": "Chail",
        "stateId": 38
      },
      {
        "id": 4672,
        "name": "Chak Imam Ali",
        "stateId": 38
      },
      {
        "id": 4673,
        "name": "Chakeri",
        "stateId": 38
      },
      {
        "id": 4674,
        "name": "Chakia",
        "stateId": 38
      },
      {
        "id": 4675,
        "name": "Chandauli",
        "stateId": 38
      },
      {
        "id": 4676,
        "name": "Chandausi",
        "stateId": 38
      },
      {
        "id": 4677,
        "name": "Chandpur",
        "stateId": 38
      },
      {
        "id": 4678,
        "name": "Charkhari",
        "stateId": 38
      },
      {
        "id": 4679,
        "name": "Charthawal",
        "stateId": 38
      },
      {
        "id": 4680,
        "name": "Chaumuhan",
        "stateId": 38
      },
      {
        "id": 4681,
        "name": "Chhaprauli",
        "stateId": 38
      },
      {
        "id": 4682,
        "name": "Chhara Rafatpur",
        "stateId": 38
      },
      {
        "id": 4683,
        "name": "Chharprauli",
        "stateId": 38
      },
      {
        "id": 4684,
        "name": "Chhata",
        "stateId": 38
      },
      {
        "id": 4685,
        "name": "Chhatari",
        "stateId": 38
      },
      {
        "id": 4686,
        "name": "Chhibramau",
        "stateId": 38
      },
      {
        "id": 4687,
        "name": "Chhutmalpur",
        "stateId": 38
      },
      {
        "id": 4688,
        "name": "Chilkana Sultanpur",
        "stateId": 38
      },
      {
        "id": 4689,
        "name": "Chirgaon",
        "stateId": 38
      },
      {
        "id": 4690,
        "name": "Chit Baragaon",
        "stateId": 38
      },
      {
        "id": 4691,
        "name": "Chitrakut Dham",
        "stateId": 38
      },
      {
        "id": 4692,
        "name": "Chopan",
        "stateId": 38
      },
      {
        "id": 4693,
        "name": "Choubepur Kalan",
        "stateId": 38
      },
      {
        "id": 4694,
        "name": "Chunar",
        "stateId": 38
      },
      {
        "id": 4695,
        "name": "Churk Ghurma",
        "stateId": 38
      },
      {
        "id": 4696,
        "name": "Colonelganj",
        "stateId": 38
      },
      {
        "id": 4697,
        "name": "Dadri",
        "stateId": 38
      },
      {
        "id": 4698,
        "name": "Dalmau",
        "stateId": 38
      },
      {
        "id": 4699,
        "name": "Dankaur",
        "stateId": 38
      },
      {
        "id": 4700,
        "name": "Dariyabad",
        "stateId": 38
      },
      {
        "id": 4701,
        "name": "Dasna",
        "stateId": 38
      },
      {
        "id": 4702,
        "name": "Dataganj",
        "stateId": 38
      },
      {
        "id": 4703,
        "name": "Daurala",
        "stateId": 38
      },
      {
        "id": 4704,
        "name": "Dayal Bagh",
        "stateId": 38
      },
      {
        "id": 4705,
        "name": "Deoband",
        "stateId": 38
      },
      {
        "id": 4706,
        "name": "Deoranian",
        "stateId": 38
      },
      {
        "id": 4707,
        "name": "Deoria",
        "stateId": 38
      },
      {
        "id": 4708,
        "name": "Dewa",
        "stateId": 38
      },
      {
        "id": 4709,
        "name": "Dhampur",
        "stateId": 38
      },
      {
        "id": 4710,
        "name": "Dhanauha",
        "stateId": 38
      },
      {
        "id": 4711,
        "name": "Dhanauli",
        "stateId": 38
      },
      {
        "id": 4712,
        "name": "Dhanaura",
        "stateId": 38
      },
      {
        "id": 4713,
        "name": "Dharoti Khurd",
        "stateId": 38
      },
      {
        "id": 4714,
        "name": "Dhauratanda",
        "stateId": 38
      },
      {
        "id": 4715,
        "name": "Dhaurhra",
        "stateId": 38
      },
      {
        "id": 4716,
        "name": "Dibai",
        "stateId": 38
      },
      {
        "id": 4717,
        "name": "Dibiyapur",
        "stateId": 38
      },
      {
        "id": 4718,
        "name": "Dildarnagar Fatehpur",
        "stateId": 38
      },
      {
        "id": 4719,
        "name": "Do Ghat",
        "stateId": 38
      },
      {
        "id": 4720,
        "name": "Dohrighat",
        "stateId": 38
      },
      {
        "id": 4721,
        "name": "Dostpur",
        "stateId": 38
      },
      {
        "id": 4722,
        "name": "Dudhinagar",
        "stateId": 38
      },
      {
        "id": 4723,
        "name": "Dulhipur",
        "stateId": 38
      },
      {
        "id": 4724,
        "name": "Dundwaraganj",
        "stateId": 38
      },
      {
        "id": 4725,
        "name": "Ekdil",
        "stateId": 38
      },
      {
        "id": 4726,
        "name": "Erich",
        "stateId": 38
      },
      {
        "id": 4727,
        "name": "Etah",
        "stateId": 38
      },
      {
        "id": 4728,
        "name": "Etawah",
        "stateId": 38
      },
      {
        "id": 4729,
        "name": "Faizabad",
        "stateId": 38
      },
      {
        "id": 4730,
        "name": "Faizabad Cantonment",
        "stateId": 38
      },
      {
        "id": 4731,
        "name": "Faizganj",
        "stateId": 38
      },
      {
        "id": 4732,
        "name": "Farah",
        "stateId": 38
      },
      {
        "id": 4733,
        "name": "Faridnagar",
        "stateId": 38
      },
      {
        "id": 4734,
        "name": "Faridpur",
        "stateId": 38
      },
      {
        "id": 4735,
        "name": "Faridpur Cantonment",
        "stateId": 38
      },
      {
        "id": 4736,
        "name": "Fariha",
        "stateId": 38
      },
      {
        "id": 4737,
        "name": "Farrukhabad",
        "stateId": 38
      },
      {
        "id": 4738,
        "name": "Fatehabad",
        "stateId": 38
      },
      {
        "id": 4739,
        "name": "Fatehganj Pashchimi",
        "stateId": 38
      },
      {
        "id": 4740,
        "name": "Fatehganj Purvi",
        "stateId": 38
      },
      {
        "id": 4741,
        "name": "Fatehgarh",
        "stateId": 38
      },
      {
        "id": 4742,
        "name": "Fatehpur",
        "stateId": 38
      },
      {
        "id": 4743,
        "name": "Fatehpur Chaurasi",
        "stateId": 38
      },
      {
        "id": 4744,
        "name": "Fatehpur Sikri",
        "stateId": 38
      },
      {
        "id": 4745,
        "name": "Firozabad",
        "stateId": 38
      },
      {
        "id": 4746,
        "name": "Gajraula",
        "stateId": 38
      },
      {
        "id": 4747,
        "name": "Ganga Ghat",
        "stateId": 38
      },
      {
        "id": 4748,
        "name": "Gangapur",
        "stateId": 38
      },
      {
        "id": 4749,
        "name": "Gangoh",
        "stateId": 38
      },
      {
        "id": 4750,
        "name": "Ganj Muradabad",
        "stateId": 38
      },
      {
        "id": 4751,
        "name": "Garautha",
        "stateId": 38
      },
      {
        "id": 4752,
        "name": "Garhi Pukhta",
        "stateId": 38
      },
      {
        "id": 4753,
        "name": "Garhmukteshwar",
        "stateId": 38
      },
      {
        "id": 4754,
        "name": "Gaura Barahaj",
        "stateId": 38
      },
      {
        "id": 4755,
        "name": "Gauri Bazar",
        "stateId": 38
      },
      {
        "id": 4756,
        "name": "Gausganj",
        "stateId": 38
      },
      {
        "id": 4757,
        "name": "Gawan",
        "stateId": 38
      },
      {
        "id": 4758,
        "name": "Ghatampur",
        "stateId": 38
      },
      {
        "id": 4759,
        "name": "Ghaziabad",
        "stateId": 38
      },
      {
        "id": 4760,
        "name": "Ghazipur",
        "stateId": 38
      },
      {
        "id": 4761,
        "name": "Ghiror",
        "stateId": 38
      },
      {
        "id": 4762,
        "name": "Ghorawal",
        "stateId": 38
      },
      {
        "id": 4763,
        "name": "Ghosi",
        "stateId": 38
      },
      {
        "id": 4764,
        "name": "Ghosia Bazar",
        "stateId": 38
      },
      {
        "id": 4765,
        "name": "Ghughuli",
        "stateId": 38
      },
      {
        "id": 4766,
        "name": "Gohand",
        "stateId": 38
      },
      {
        "id": 4767,
        "name": "Gokul",
        "stateId": 38
      },
      {
        "id": 4768,
        "name": "Gola Bazar",
        "stateId": 38
      },
      {
        "id": 4769,
        "name": "Gola Gokarannath",
        "stateId": 38
      },
      {
        "id": 4770,
        "name": "Gonda",
        "stateId": 38
      },
      {
        "id": 4771,
        "name": "Gopamau",
        "stateId": 38
      },
      {
        "id": 4772,
        "name": "Gopiganj",
        "stateId": 38
      },
      {
        "id": 4773,
        "name": "Gorakhpur",
        "stateId": 38
      },
      {
        "id": 4774,
        "name": "Gosainganj",
        "stateId": 38
      },
      {
        "id": 4775,
        "name": "Govardhan",
        "stateId": 38
      },
      {
        "id": 4776,
        "name": "Greater Noida",
        "stateId": 38
      },
      {
        "id": 4777,
        "name": "Gulaothi",
        "stateId": 38
      },
      {
        "id": 4778,
        "name": "Gulariya",
        "stateId": 38
      },
      {
        "id": 4779,
        "name": "Gulariya Bhindara",
        "stateId": 38
      },
      {
        "id": 4780,
        "name": "Gunnaur",
        "stateId": 38
      },
      {
        "id": 4781,
        "name": "Gursahaiganj",
        "stateId": 38
      },
      {
        "id": 4782,
        "name": "Gursarai",
        "stateId": 38
      },
      {
        "id": 4783,
        "name": "Gyanpur",
        "stateId": 38
      },
      {
        "id": 4784,
        "name": "Hafizpur",
        "stateId": 38
      },
      {
        "id": 4785,
        "name": "Haidergarh",
        "stateId": 38
      },
      {
        "id": 4786,
        "name": "Haldaur",
        "stateId": 38
      },
      {
        "id": 4787,
        "name": "Hamirpur",
        "stateId": 38
      },
      {
        "id": 4788,
        "name": "Handia",
        "stateId": 38
      },
      {
        "id": 4789,
        "name": "Hapur",
        "stateId": 38
      },
      {
        "id": 4790,
        "name": "Hardoi",
        "stateId": 38
      },
      {
        "id": 4791,
        "name": "Harduaganj",
        "stateId": 38
      },
      {
        "id": 4792,
        "name": "Hargaon",
        "stateId": 38
      },
      {
        "id": 4793,
        "name": "Hariharpur",
        "stateId": 38
      },
      {
        "id": 4794,
        "name": "Harraiya",
        "stateId": 38
      },
      {
        "id": 4795,
        "name": "Hasanpur",
        "stateId": 38
      },
      {
        "id": 4796,
        "name": "Hasayan",
        "stateId": 38
      },
      {
        "id": 4797,
        "name": "Hastinapur",
        "stateId": 38
      },
      {
        "id": 4798,
        "name": "Hata",
        "stateId": 38
      },
      {
        "id": 4799,
        "name": "Hathras",
        "stateId": 38
      },
      {
        "id": 4800,
        "name": "Hyderabad",
        "stateId": 38
      },
      {
        "id": 4801,
        "name": "Ibrahimpur",
        "stateId": 38
      },
      {
        "id": 4802,
        "name": "Iglas",
        "stateId": 38
      },
      {
        "id": 4803,
        "name": "Ikauna",
        "stateId": 38
      },
      {
        "id": 4804,
        "name": "Iltifatganj Bazar",
        "stateId": 38
      },
      {
        "id": 4805,
        "name": "Indian Telephone Industry Mank",
        "stateId": 38
      },
      {
        "id": 4806,
        "name": "Islamnagar",
        "stateId": 38
      },
      {
        "id": 4807,
        "name": "Itaunja",
        "stateId": 38
      },
      {
        "id": 4808,
        "name": "Itimadpur",
        "stateId": 38
      },
      {
        "id": 4809,
        "name": "Jagner",
        "stateId": 38
      },
      {
        "id": 4810,
        "name": "Jahanabad",
        "stateId": 38
      },
      {
        "id": 4811,
        "name": "Jahangirabad",
        "stateId": 38
      },
      {
        "id": 4812,
        "name": "Jahangirpur",
        "stateId": 38
      },
      {
        "id": 4813,
        "name": "Jais",
        "stateId": 38
      },
      {
        "id": 4814,
        "name": "Jaithara",
        "stateId": 38
      },
      {
        "id": 4815,
        "name": "Jalalabad",
        "stateId": 38
      },
      {
        "id": 4816,
        "name": "Jalali",
        "stateId": 38
      },
      {
        "id": 4817,
        "name": "Jalalpur",
        "stateId": 38
      },
      {
        "id": 4818,
        "name": "Jalaun",
        "stateId": 38
      },
      {
        "id": 4819,
        "name": "Jalesar",
        "stateId": 38
      },
      {
        "id": 4820,
        "name": "Jamshila",
        "stateId": 38
      },
      {
        "id": 4821,
        "name": "Jangipur",
        "stateId": 38
      },
      {
        "id": 4822,
        "name": "Jansath",
        "stateId": 38
      },
      {
        "id": 4823,
        "name": "Jarwal",
        "stateId": 38
      },
      {
        "id": 4824,
        "name": "Jasrana",
        "stateId": 38
      },
      {
        "id": 4825,
        "name": "Jaswantnagar",
        "stateId": 38
      },
      {
        "id": 4826,
        "name": "Jatari",
        "stateId": 38
      },
      {
        "id": 4827,
        "name": "Jaunpur",
        "stateId": 38
      },
      {
        "id": 4828,
        "name": "Jewar",
        "stateId": 38
      },
      {
        "id": 4829,
        "name": "Jhalu",
        "stateId": 38
      },
      {
        "id": 4830,
        "name": "Jhansi",
        "stateId": 38
      },
      {
        "id": 4831,
        "name": "Jhansi Cantonment",
        "stateId": 38
      },
      {
        "id": 4832,
        "name": "Jhansi Railway Settlement",
        "stateId": 38
      },
      {
        "id": 4833,
        "name": "Jhinjhak",
        "stateId": 38
      },
      {
        "id": 4834,
        "name": "Jhinjhana",
        "stateId": 38
      },
      {
        "id": 4835,
        "name": "Jhusi",
        "stateId": 38
      },
      {
        "id": 4836,
        "name": "Jhusi Kohna",
        "stateId": 38
      },
      {
        "id": 4837,
        "name": "Jiyanpur",
        "stateId": 38
      },
      {
        "id": 4838,
        "name": "Joya",
        "stateId": 38
      },
      {
        "id": 4839,
        "name": "Jyoti Khuria",
        "stateId": 38
      },
      {
        "id": 4840,
        "name": "Jyotiba Phule Nagar",
        "stateId": 38
      },
      {
        "id": 4841,
        "name": "Kabrai",
        "stateId": 38
      },
      {
        "id": 4842,
        "name": "Kachhauna Patseni",
        "stateId": 38
      },
      {
        "id": 4843,
        "name": "Kachhla",
        "stateId": 38
      },
      {
        "id": 4844,
        "name": "Kachhwa",
        "stateId": 38
      },
      {
        "id": 4845,
        "name": "Kadaura",
        "stateId": 38
      },
      {
        "id": 4846,
        "name": "Kadipur",
        "stateId": 38
      },
      {
        "id": 4847,
        "name": "Kailashpur",
        "stateId": 38
      },
      {
        "id": 4848,
        "name": "Kaimganj",
        "stateId": 38
      },
      {
        "id": 4849,
        "name": "Kairana",
        "stateId": 38
      },
      {
        "id": 4850,
        "name": "Kakgaina",
        "stateId": 38
      },
      {
        "id": 4851,
        "name": "Kakod",
        "stateId": 38
      },
      {
        "id": 4852,
        "name": "Kakori",
        "stateId": 38
      },
      {
        "id": 4853,
        "name": "Kakrala",
        "stateId": 38
      },
      {
        "id": 4854,
        "name": "Kalinagar",
        "stateId": 38
      },
      {
        "id": 4855,
        "name": "Kalpi",
        "stateId": 38
      },
      {
        "id": 4856,
        "name": "Kamalganj",
        "stateId": 38
      },
      {
        "id": 4857,
        "name": "Kampil",
        "stateId": 38
      },
      {
        "id": 4858,
        "name": "Kandhla",
        "stateId": 38
      },
      {
        "id": 4859,
        "name": "Kandwa",
        "stateId": 38
      },
      {
        "id": 4860,
        "name": "Kannauj",
        "stateId": 38
      },
      {
        "id": 4861,
        "name": "Kanpur",
        "stateId": 38
      },
      {
        "id": 4862,
        "name": "Kant",
        "stateId": 38
      },
      {
        "id": 4863,
        "name": "Kanth",
        "stateId": 38
      },
      {
        "id": 4864,
        "name": "Kaptanganj",
        "stateId": 38
      },
      {
        "id": 4865,
        "name": "Karaon",
        "stateId": 38
      },
      {
        "id": 4866,
        "name": "Karari",
        "stateId": 38
      },
      {
        "id": 4867,
        "name": "Karhal",
        "stateId": 38
      },
      {
        "id": 4868,
        "name": "Karnawal",
        "stateId": 38
      },
      {
        "id": 4869,
        "name": "Kasganj",
        "stateId": 38
      },
      {
        "id": 4870,
        "name": "Katariya",
        "stateId": 38
      },
      {
        "id": 4871,
        "name": "Katghar Lalganj",
        "stateId": 38
      },
      {
        "id": 4872,
        "name": "Kathera",
        "stateId": 38
      },
      {
        "id": 4873,
        "name": "Katra",
        "stateId": 38
      },
      {
        "id": 4874,
        "name": "Katra Medniganj",
        "stateId": 38
      },
      {
        "id": 4875,
        "name": "Kauriaganj",
        "stateId": 38
      },
      {
        "id": 4876,
        "name": "Kemri",
        "stateId": 38
      },
      {
        "id": 4877,
        "name": "Kerakat",
        "stateId": 38
      },
      {
        "id": 4878,
        "name": "Khadda",
        "stateId": 38
      },
      {
        "id": 4879,
        "name": "Khaga",
        "stateId": 38
      },
      {
        "id": 4880,
        "name": "Khailar",
        "stateId": 38
      },
      {
        "id": 4881,
        "name": "Khair",
        "stateId": 38
      },
      {
        "id": 4882,
        "name": "Khairabad",
        "stateId": 38
      },
      {
        "id": 4883,
        "name": "Khairagarh",
        "stateId": 38
      },
      {
        "id": 4884,
        "name": "Khalilabad",
        "stateId": 38
      },
      {
        "id": 4885,
        "name": "Khamaria",
        "stateId": 38
      },
      {
        "id": 4886,
        "name": "Khanpur",
        "stateId": 38
      },
      {
        "id": 4887,
        "name": "Kharela",
        "stateId": 38
      },
      {
        "id": 4888,
        "name": "Khargupur",
        "stateId": 38
      },
      {
        "id": 4889,
        "name": "Khariya",
        "stateId": 38
      },
      {
        "id": 4890,
        "name": "Kharkhoda",
        "stateId": 38
      },
      {
        "id": 4891,
        "name": "Khatauli",
        "stateId": 38
      },
      {
        "id": 4892,
        "name": "Khatauli Rural",
        "stateId": 38
      },
      {
        "id": 4893,
        "name": "Khekra",
        "stateId": 38
      },
      {
        "id": 4894,
        "name": "Kheri",
        "stateId": 38
      },
      {
        "id": 4895,
        "name": "Kheta Sarai",
        "stateId": 38
      },
      {
        "id": 4896,
        "name": "Khudaganj",
        "stateId": 38
      },
      {
        "id": 4897,
        "name": "Khurja",
        "stateId": 38
      },
      {
        "id": 4898,
        "name": "Khutar",
        "stateId": 38
      },
      {
        "id": 4899,
        "name": "Kiraoli",
        "stateId": 38
      },
      {
        "id": 4900,
        "name": "Kiratpur",
        "stateId": 38
      },
      {
        "id": 4901,
        "name": "Kishanpur",
        "stateId": 38
      },
      {
        "id": 4902,
        "name": "Kishni",
        "stateId": 38
      },
      {
        "id": 4903,
        "name": "Kithaur",
        "stateId": 38
      },
      {
        "id": 4904,
        "name": "Koiripur",
        "stateId": 38
      },
      {
        "id": 4905,
        "name": "Konch",
        "stateId": 38
      },
      {
        "id": 4906,
        "name": "Kopaganj",
        "stateId": 38
      },
      {
        "id": 4907,
        "name": "Kora Jahanabad",
        "stateId": 38
      },
      {
        "id": 4908,
        "name": "Korwa",
        "stateId": 38
      },
      {
        "id": 4909,
        "name": "Kosi Kalan",
        "stateId": 38
      },
      {
        "id": 4910,
        "name": "Kota",
        "stateId": 38
      },
      {
        "id": 4911,
        "name": "Kotra",
        "stateId": 38
      },
      {
        "id": 4912,
        "name": "Kotwa",
        "stateId": 38
      },
      {
        "id": 4913,
        "name": "Kulpahar",
        "stateId": 38
      },
      {
        "id": 4914,
        "name": "Kunda",
        "stateId": 38
      },
      {
        "id": 4915,
        "name": "Kundarki",
        "stateId": 38
      },
      {
        "id": 4916,
        "name": "Kunwargaon",
        "stateId": 38
      },
      {
        "id": 4917,
        "name": "Kurara",
        "stateId": 38
      },
      {
        "id": 4918,
        "name": "Kurawali",
        "stateId": 38
      },
      {
        "id": 4919,
        "name": "Kursath",
        "stateId": 38
      },
      {
        "id": 4920,
        "name": "Kurthi Jafarpur",
        "stateId": 38
      },
      {
        "id": 4921,
        "name": "Kushinagar",
        "stateId": 38
      },
      {
        "id": 4922,
        "name": "Kusmara",
        "stateId": 38
      },
      {
        "id": 4923,
        "name": "Laharpur",
        "stateId": 38
      },
      {
        "id": 4924,
        "name": "Lakhimpur",
        "stateId": 38
      },
      {
        "id": 4925,
        "name": "Lakhna",
        "stateId": 38
      },
      {
        "id": 4926,
        "name": "Lalganj",
        "stateId": 38
      },
      {
        "id": 4927,
        "name": "Lalitpur",
        "stateId": 38
      },
      {
        "id": 4928,
        "name": "Lar",
        "stateId": 38
      },
      {
        "id": 4929,
        "name": "Lawar",
        "stateId": 38
      },
      {
        "id": 4930,
        "name": "Ledwa Mahuwa",
        "stateId": 38
      },
      {
        "id": 4931,
        "name": "Lohta",
        "stateId": 38
      },
      {
        "id": 4932,
        "name": "Loni",
        "stateId": 38
      },
      {
        "id": 4933,
        "name": "Lucknow",
        "stateId": 38
      },
      {
        "id": 4934,
        "name": "Machhlishahr",
        "stateId": 38
      },
      {
        "id": 4935,
        "name": "Madhoganj",
        "stateId": 38
      },
      {
        "id": 4936,
        "name": "Madhogarh",
        "stateId": 38
      },
      {
        "id": 4937,
        "name": "Maghar",
        "stateId": 38
      },
      {
        "id": 4938,
        "name": "Mahaban",
        "stateId": 38
      },
      {
        "id": 4939,
        "name": "Maharajganj",
        "stateId": 38
      },
      {
        "id": 4940,
        "name": "Mahmudabad",
        "stateId": 38
      },
      {
        "id": 4941,
        "name": "Mahoba",
        "stateId": 38
      },
      {
        "id": 4942,
        "name": "Maholi",
        "stateId": 38
      },
      {
        "id": 4943,
        "name": "Mahona",
        "stateId": 38
      },
      {
        "id": 4944,
        "name": "Mahroni",
        "stateId": 38
      },
      {
        "id": 4945,
        "name": "Mailani",
        "stateId": 38
      },
      {
        "id": 4946,
        "name": "Mainpuri",
        "stateId": 38
      },
      {
        "id": 4947,
        "name": "Majhara Pipar Ehatmali",
        "stateId": 38
      },
      {
        "id": 4948,
        "name": "Majhauli Raj",
        "stateId": 38
      },
      {
        "id": 4949,
        "name": "Malihabad",
        "stateId": 38
      },
      {
        "id": 4950,
        "name": "Mallanwam",
        "stateId": 38
      },
      {
        "id": 4951,
        "name": "Mandawar",
        "stateId": 38
      },
      {
        "id": 4952,
        "name": "Manikpur",
        "stateId": 38
      },
      {
        "id": 4953,
        "name": "Maniyar",
        "stateId": 38
      },
      {
        "id": 4954,
        "name": "Manjhanpur",
        "stateId": 38
      },
      {
        "id": 4955,
        "name": "Mankapur",
        "stateId": 38
      },
      {
        "id": 4956,
        "name": "Marehra",
        "stateId": 38
      },
      {
        "id": 4957,
        "name": "Mariahu",
        "stateId": 38
      },
      {
        "id": 4958,
        "name": "Maruadih",
        "stateId": 38
      },
      {
        "id": 4959,
        "name": "Maswasi",
        "stateId": 38
      },
      {
        "id": 4960,
        "name": "Mataundh",
        "stateId": 38
      },
      {
        "id": 4961,
        "name": "Mathu",
        "stateId": 38
      },
      {
        "id": 4962,
        "name": "Mathura",
        "stateId": 38
      },
      {
        "id": 4963,
        "name": "Mathura Cantonment",
        "stateId": 38
      },
      {
        "id": 4964,
        "name": "Mau",
        "stateId": 38
      },
      {
        "id": 4965,
        "name": "Mau Aima",
        "stateId": 38
      },
      {
        "id": 4966,
        "name": "Maudaha",
        "stateId": 38
      },
      {
        "id": 4967,
        "name": "Mauranipur",
        "stateId": 38
      },
      {
        "id": 4968,
        "name": "Maurawan",
        "stateId": 38
      },
      {
        "id": 4969,
        "name": "Mawana",
        "stateId": 38
      },
      {
        "id": 4970,
        "name": "Meerut",
        "stateId": 38
      },
      {
        "id": 4971,
        "name": "Mehnagar",
        "stateId": 38
      },
      {
        "id": 4972,
        "name": "Mehndawal",
        "stateId": 38
      },
      {
        "id": 4973,
        "name": "Mendu",
        "stateId": 38
      },
      {
        "id": 4974,
        "name": "Milak",
        "stateId": 38
      },
      {
        "id": 4975,
        "name": "Miranpur",
        "stateId": 38
      },
      {
        "id": 4976,
        "name": "Mirat",
        "stateId": 38
      },
      {
        "id": 4977,
        "name": "Mirat Cantonment",
        "stateId": 38
      },
      {
        "id": 4978,
        "name": "Mirganj",
        "stateId": 38
      },
      {
        "id": 4979,
        "name": "Mirzapur",
        "stateId": 38
      },
      {
        "id": 4980,
        "name": "Misrikh",
        "stateId": 38
      },
      {
        "id": 4981,
        "name": "Modinagar",
        "stateId": 38
      },
      {
        "id": 4982,
        "name": "Mogra Badshahpur",
        "stateId": 38
      },
      {
        "id": 4983,
        "name": "Mohan",
        "stateId": 38
      },
      {
        "id": 4984,
        "name": "Mohanpur",
        "stateId": 38
      },
      {
        "id": 4985,
        "name": "Mohiuddinpur",
        "stateId": 38
      },
      {
        "id": 4986,
        "name": "Moradabad",
        "stateId": 38
      },
      {
        "id": 4987,
        "name": "Moth",
        "stateId": 38
      },
      {
        "id": 4988,
        "name": "Mubarakpur",
        "stateId": 38
      },
      {
        "id": 4989,
        "name": "Mughal Sarai",
        "stateId": 38
      },
      {
        "id": 4990,
        "name": "Mughal Sarai Railway Settlemen",
        "stateId": 38
      },
      {
        "id": 4991,
        "name": "Muhammadabad",
        "stateId": 38
      },
      {
        "id": 4992,
        "name": "Muhammadi",
        "stateId": 38
      },
      {
        "id": 4993,
        "name": "Mukrampur Khema",
        "stateId": 38
      },
      {
        "id": 4994,
        "name": "Mundia",
        "stateId": 38
      },
      {
        "id": 4995,
        "name": "Mundora",
        "stateId": 38
      },
      {
        "id": 4996,
        "name": "Muradnagar",
        "stateId": 38
      },
      {
        "id": 4997,
        "name": "Mursan",
        "stateId": 38
      },
      {
        "id": 4998,
        "name": "Musafirkhana",
        "stateId": 38
      },
      {
        "id": 4999,
        "name": "Muzaffarnagar",
        "stateId": 38
      },
      {
        "id": 5000,
        "name": "Nadigaon",
        "stateId": 38
      },
      {
        "id": 5001,
        "name": "Nagina",
        "stateId": 38
      },
      {
        "id": 5002,
        "name": "Nagram",
        "stateId": 38
      },
      {
        "id": 5003,
        "name": "Nai Bazar",
        "stateId": 38
      },
      {
        "id": 5004,
        "name": "Nainana Jat",
        "stateId": 38
      },
      {
        "id": 5005,
        "name": "Najibabad",
        "stateId": 38
      },
      {
        "id": 5006,
        "name": "Nakur",
        "stateId": 38
      },
      {
        "id": 5007,
        "name": "Nanaunta",
        "stateId": 38
      },
      {
        "id": 5008,
        "name": "Nandgaon",
        "stateId": 38
      },
      {
        "id": 5009,
        "name": "Nanpara",
        "stateId": 38
      },
      {
        "id": 5010,
        "name": "Naraini",
        "stateId": 38
      },
      {
        "id": 5011,
        "name": "Narauli",
        "stateId": 38
      },
      {
        "id": 5012,
        "name": "Naraura",
        "stateId": 38
      },
      {
        "id": 5013,
        "name": "Naugawan Sadat",
        "stateId": 38
      },
      {
        "id": 5014,
        "name": "Nautanwa",
        "stateId": 38
      },
      {
        "id": 5015,
        "name": "Nawabganj",
        "stateId": 38
      },
      {
        "id": 5016,
        "name": "Nichlaul",
        "stateId": 38
      },
      {
        "id": 5017,
        "name": "Nidhauli Kalan",
        "stateId": 38
      },
      {
        "id": 5018,
        "name": "Nihtaur",
        "stateId": 38
      },
      {
        "id": 5019,
        "name": "Nindaura",
        "stateId": 38
      },
      {
        "id": 5020,
        "name": "Niwari",
        "stateId": 38
      },
      {
        "id": 5021,
        "name": "Nizamabad",
        "stateId": 38
      },
      {
        "id": 5022,
        "name": "Noida",
        "stateId": 38
      },
      {
        "id": 5023,
        "name": "Northern Railway Colony",
        "stateId": 38
      },
      {
        "id": 5024,
        "name": "Nurpur",
        "stateId": 38
      },
      {
        "id": 5025,
        "name": "Nyoria Husenpur",
        "stateId": 38
      },
      {
        "id": 5026,
        "name": "Nyotini",
        "stateId": 38
      },
      {
        "id": 5027,
        "name": "Obra",
        "stateId": 38
      },
      {
        "id": 5028,
        "name": "Oel Dhakwa",
        "stateId": 38
      },
      {
        "id": 5029,
        "name": "Orai",
        "stateId": 38
      },
      {
        "id": 5030,
        "name": "Oran",
        "stateId": 38
      },
      {
        "id": 5031,
        "name": "Ordinance Factory Muradnagar",
        "stateId": 38
      },
      {
        "id": 5032,
        "name": "Pachperwa",
        "stateId": 38
      },
      {
        "id": 5033,
        "name": "Padrauna",
        "stateId": 38
      },
      {
        "id": 5034,
        "name": "Pahasu",
        "stateId": 38
      },
      {
        "id": 5035,
        "name": "Paintepur",
        "stateId": 38
      },
      {
        "id": 5036,
        "name": "Pali",
        "stateId": 38
      },
      {
        "id": 5037,
        "name": "Palia Kalan",
        "stateId": 38
      },
      {
        "id": 5038,
        "name": "Parasi",
        "stateId": 38
      },
      {
        "id": 5039,
        "name": "Parichha",
        "stateId": 38
      },
      {
        "id": 5040,
        "name": "Parichhatgarh",
        "stateId": 38
      },
      {
        "id": 5041,
        "name": "Parsadepur",
        "stateId": 38
      },
      {
        "id": 5042,
        "name": "Patala",
        "stateId": 38
      },
      {
        "id": 5043,
        "name": "Patiyali",
        "stateId": 38
      },
      {
        "id": 5044,
        "name": "Patti",
        "stateId": 38
      },
      {
        "id": 5045,
        "name": "Pawayan",
        "stateId": 38
      },
      {
        "id": 5046,
        "name": "Phalauda",
        "stateId": 38
      },
      {
        "id": 5047,
        "name": "Phaphund",
        "stateId": 38
      },
      {
        "id": 5048,
        "name": "Phulpur",
        "stateId": 38
      },
      {
        "id": 5049,
        "name": "Phulwaria",
        "stateId": 38
      },
      {
        "id": 5050,
        "name": "Pihani",
        "stateId": 38
      },
      {
        "id": 5051,
        "name": "Pilibhit",
        "stateId": 38
      },
      {
        "id": 5052,
        "name": "Pilkana",
        "stateId": 38
      },
      {
        "id": 5053,
        "name": "Pilkhuwa",
        "stateId": 38
      },
      {
        "id": 5054,
        "name": "Pinahat",
        "stateId": 38
      },
      {
        "id": 5055,
        "name": "Pipalsana Chaudhari",
        "stateId": 38
      },
      {
        "id": 5056,
        "name": "Pipiganj",
        "stateId": 38
      },
      {
        "id": 5057,
        "name": "Pipraich",
        "stateId": 38
      },
      {
        "id": 5058,
        "name": "Pipri",
        "stateId": 38
      },
      {
        "id": 5059,
        "name": "Pratapgarh",
        "stateId": 38
      },
      {
        "id": 5060,
        "name": "Pukhrayan",
        "stateId": 38
      },
      {
        "id": 5061,
        "name": "Puranpur",
        "stateId": 38
      },
      {
        "id": 5062,
        "name": "Purdil Nagar",
        "stateId": 38
      },
      {
        "id": 5063,
        "name": "Purqazi",
        "stateId": 38
      },
      {
        "id": 5064,
        "name": "Purwa",
        "stateId": 38
      },
      {
        "id": 5065,
        "name": "Qasimpur",
        "stateId": 38
      },
      {
        "id": 5066,
        "name": "Rabupura",
        "stateId": 38
      },
      {
        "id": 5067,
        "name": "Radha Kund",
        "stateId": 38
      },
      {
        "id": 5068,
        "name": "Rae Bareilly",
        "stateId": 38
      },
      {
        "id": 5069,
        "name": "Raja Ka Rampur",
        "stateId": 38
      },
      {
        "id": 5070,
        "name": "Rajapur",
        "stateId": 38
      },
      {
        "id": 5071,
        "name": "Ramkola",
        "stateId": 38
      },
      {
        "id": 5072,
        "name": "Ramnagar",
        "stateId": 38
      },
      {
        "id": 5073,
        "name": "Rampur",
        "stateId": 38
      },
      {
        "id": 5074,
        "name": "Rampur Bhawanipur",
        "stateId": 38
      },
      {
        "id": 5075,
        "name": "Rampur Karkhana",
        "stateId": 38
      },
      {
        "id": 5076,
        "name": "Rampur Maniharan",
        "stateId": 38
      },
      {
        "id": 5077,
        "name": "Rampura",
        "stateId": 38
      },
      {
        "id": 5078,
        "name": "Ranipur",
        "stateId": 38
      },
      {
        "id": 5079,
        "name": "Rashidpur Garhi",
        "stateId": 38
      },
      {
        "id": 5080,
        "name": "Rasra",
        "stateId": 38
      },
      {
        "id": 5081,
        "name": "Rasulabad",
        "stateId": 38
      },
      {
        "id": 5082,
        "name": "Rath",
        "stateId": 38
      },
      {
        "id": 5083,
        "name": "Raya",
        "stateId": 38
      },
      {
        "id": 5084,
        "name": "Renukut",
        "stateId": 38
      },
      {
        "id": 5085,
        "name": "Reoti",
        "stateId": 38
      },
      {
        "id": 5086,
        "name": "Richha",
        "stateId": 38
      },
      {
        "id": 5087,
        "name": "Risia Bazar",
        "stateId": 38
      },
      {
        "id": 5088,
        "name": "Rithora",
        "stateId": 38
      },
      {
        "id": 5089,
        "name": "Robertsganj",
        "stateId": 38
      },
      {
        "id": 5090,
        "name": "Roza",
        "stateId": 38
      },
      {
        "id": 5091,
        "name": "Rudarpur",
        "stateId": 38
      },
      {
        "id": 5092,
        "name": "Rudauli",
        "stateId": 38
      },
      {
        "id": 5093,
        "name": "Rudayan",
        "stateId": 38
      },
      {
        "id": 5094,
        "name": "Rura",
        "stateId": 38
      },
      {
        "id": 5095,
        "name": "Rustamnagar Sahaspur",
        "stateId": 38
      },
      {
        "id": 5096,
        "name": "Sabatwar",
        "stateId": 38
      },
      {
        "id": 5097,
        "name": "Sadabad",
        "stateId": 38
      },
      {
        "id": 5098,
        "name": "Sadat",
        "stateId": 38
      },
      {
        "id": 5099,
        "name": "Safipur",
        "stateId": 38
      },
      {
        "id": 5100,
        "name": "Sahanpur",
        "stateId": 38
      },
      {
        "id": 5101,
        "name": "Saharanpur",
        "stateId": 38
      },
      {
        "id": 5102,
        "name": "Sahaspur",
        "stateId": 38
      },
      {
        "id": 5103,
        "name": "Sahaswan",
        "stateId": 38
      },
      {
        "id": 5104,
        "name": "Sahawar",
        "stateId": 38
      },
      {
        "id": 5105,
        "name": "Sahibabad",
        "stateId": 38
      },
      {
        "id": 5106,
        "name": "Sahjanwa",
        "stateId": 38
      },
      {
        "id": 5107,
        "name": "Sahpau",
        "stateId": 38
      },
      {
        "id": 5108,
        "name": "Saidpur",
        "stateId": 38
      },
      {
        "id": 5109,
        "name": "Sainthal",
        "stateId": 38
      },
      {
        "id": 5110,
        "name": "Saiyadraja",
        "stateId": 38
      },
      {
        "id": 5111,
        "name": "Sakhanu",
        "stateId": 38
      },
      {
        "id": 5112,
        "name": "Sakit",
        "stateId": 38
      },
      {
        "id": 5113,
        "name": "Salarpur Khadar",
        "stateId": 38
      },
      {
        "id": 5114,
        "name": "Salimpur",
        "stateId": 38
      },
      {
        "id": 5115,
        "name": "Salon",
        "stateId": 38
      },
      {
        "id": 5116,
        "name": "Sambhal",
        "stateId": 38
      },
      {
        "id": 5117,
        "name": "Sambhawali",
        "stateId": 38
      },
      {
        "id": 5118,
        "name": "Samdhan",
        "stateId": 38
      },
      {
        "id": 5119,
        "name": "Samthar",
        "stateId": 38
      },
      {
        "id": 5120,
        "name": "Sandi",
        "stateId": 38
      },
      {
        "id": 5121,
        "name": "Sandila",
        "stateId": 38
      },
      {
        "id": 5122,
        "name": "Sarai Mir",
        "stateId": 38
      },
      {
        "id": 5123,
        "name": "Sarai akil",
        "stateId": 38
      },
      {
        "id": 5124,
        "name": "Sarauli",
        "stateId": 38
      },
      {
        "id": 5125,
        "name": "Sardhana",
        "stateId": 38
      },
      {
        "id": 5126,
        "name": "Sarila",
        "stateId": 38
      },
      {
        "id": 5127,
        "name": "Sarsawan",
        "stateId": 38
      },
      {
        "id": 5128,
        "name": "Sasni",
        "stateId": 38
      },
      {
        "id": 5129,
        "name": "Satrikh",
        "stateId": 38
      },
      {
        "id": 5130,
        "name": "Saunkh",
        "stateId": 38
      },
      {
        "id": 5131,
        "name": "Saurikh",
        "stateId": 38
      },
      {
        "id": 5132,
        "name": "Seohara",
        "stateId": 38
      },
      {
        "id": 5133,
        "name": "Sewal Khas",
        "stateId": 38
      },
      {
        "id": 5134,
        "name": "Sewarhi",
        "stateId": 38
      },
      {
        "id": 5135,
        "name": "Shahabad",
        "stateId": 38
      },
      {
        "id": 5136,
        "name": "Shahganj",
        "stateId": 38
      },
      {
        "id": 5137,
        "name": "Shahi",
        "stateId": 38
      },
      {
        "id": 5138,
        "name": "Shahjahanpur",
        "stateId": 38
      },
      {
        "id": 5139,
        "name": "Shahjahanpur Cantonment",
        "stateId": 38
      },
      {
        "id": 5140,
        "name": "Shahpur",
        "stateId": 38
      },
      {
        "id": 5141,
        "name": "Shamli",
        "stateId": 38
      },
      {
        "id": 5142,
        "name": "Shamsabad",
        "stateId": 38
      },
      {
        "id": 5143,
        "name": "Shankargarh",
        "stateId": 38
      },
      {
        "id": 5144,
        "name": "Shergarh",
        "stateId": 38
      },
      {
        "id": 5145,
        "name": "Sherkot",
        "stateId": 38
      },
      {
        "id": 5146,
        "name": "Shikarpur",
        "stateId": 38
      },
      {
        "id": 5147,
        "name": "Shikohabad",
        "stateId": 38
      },
      {
        "id": 5148,
        "name": "Shisgarh",
        "stateId": 38
      },
      {
        "id": 5149,
        "name": "Shivdaspur",
        "stateId": 38
      },
      {
        "id": 5150,
        "name": "Shivli",
        "stateId": 38
      },
      {
        "id": 5151,
        "name": "Shivrajpur",
        "stateId": 38
      },
      {
        "id": 5152,
        "name": "Shohratgarh",
        "stateId": 38
      },
      {
        "id": 5153,
        "name": "Siddhanur",
        "stateId": 38
      },
      {
        "id": 5154,
        "name": "Siddharthnagar",
        "stateId": 38
      },
      {
        "id": 5155,
        "name": "Sidhauli",
        "stateId": 38
      },
      {
        "id": 5156,
        "name": "Sidhpura",
        "stateId": 38
      },
      {
        "id": 5157,
        "name": "Sikandarabad",
        "stateId": 38
      },
      {
        "id": 5158,
        "name": "Sikandarpur",
        "stateId": 38
      },
      {
        "id": 5159,
        "name": "Sikandra",
        "stateId": 38
      },
      {
        "id": 5160,
        "name": "Sikandra Rao",
        "stateId": 38
      },
      {
        "id": 5161,
        "name": "Singahi Bhiraura",
        "stateId": 38
      },
      {
        "id": 5162,
        "name": "Sirathu",
        "stateId": 38
      },
      {
        "id": 5163,
        "name": "Sirsa",
        "stateId": 38
      },
      {
        "id": 5164,
        "name": "Sirsaganj",
        "stateId": 38
      },
      {
        "id": 5165,
        "name": "Sirsi",
        "stateId": 38
      },
      {
        "id": 5166,
        "name": "Sisauli",
        "stateId": 38
      },
      {
        "id": 5167,
        "name": "Siswa Bazar",
        "stateId": 38
      },
      {
        "id": 5168,
        "name": "Sitapur",
        "stateId": 38
      },
      {
        "id": 5169,
        "name": "Siyana",
        "stateId": 38
      },
      {
        "id": 5170,
        "name": "Som",
        "stateId": 38
      },
      {
        "id": 5171,
        "name": "Sonbhadra",
        "stateId": 38
      },
      {
        "id": 5172,
        "name": "Soron",
        "stateId": 38
      },
      {
        "id": 5173,
        "name": "Suar",
        "stateId": 38
      },
      {
        "id": 5174,
        "name": "Sukhmalpur Nizamabad",
        "stateId": 38
      },
      {
        "id": 5175,
        "name": "Sultanpur",
        "stateId": 38
      },
      {
        "id": 5176,
        "name": "Sumerpur",
        "stateId": 38
      },
      {
        "id": 5177,
        "name": "Suriyawan",
        "stateId": 38
      },
      {
        "id": 5178,
        "name": "Swamibagh",
        "stateId": 38
      },
      {
        "id": 5179,
        "name": "Tajpur",
        "stateId": 38
      },
      {
        "id": 5180,
        "name": "Talbahat",
        "stateId": 38
      },
      {
        "id": 5181,
        "name": "Talgram",
        "stateId": 38
      },
      {
        "id": 5182,
        "name": "Tambaur",
        "stateId": 38
      },
      {
        "id": 5183,
        "name": "Tanda",
        "stateId": 38
      },
      {
        "id": 5184,
        "name": "Tatarpur Lallu",
        "stateId": 38
      },
      {
        "id": 5185,
        "name": "Tetribazar",
        "stateId": 38
      },
      {
        "id": 5186,
        "name": "Thakurdwara",
        "stateId": 38
      },
      {
        "id": 5187,
        "name": "Thana Bhawan",
        "stateId": 38
      },
      {
        "id": 5188,
        "name": "Thiriya Nizamat Khan",
        "stateId": 38
      },
      {
        "id": 5189,
        "name": "Tikaitnagar",
        "stateId": 38
      },
      {
        "id": 5190,
        "name": "Tikri",
        "stateId": 38
      },
      {
        "id": 5191,
        "name": "Tilhar",
        "stateId": 38
      },
      {
        "id": 5192,
        "name": "Tindwari",
        "stateId": 38
      },
      {
        "id": 5193,
        "name": "Tirwaganj",
        "stateId": 38
      },
      {
        "id": 5194,
        "name": "Titron",
        "stateId": 38
      },
      {
        "id": 5195,
        "name": "Tori Fatehpur",
        "stateId": 38
      },
      {
        "id": 5196,
        "name": "Tulsipur",
        "stateId": 38
      },
      {
        "id": 5197,
        "name": "Tundla",
        "stateId": 38
      },
      {
        "id": 5198,
        "name": "Tundla Kham",
        "stateId": 38
      },
      {
        "id": 5199,
        "name": "Tundla Railway Colony",
        "stateId": 38
      },
      {
        "id": 5200,
        "name": "Ugu",
        "stateId": 38
      },
      {
        "id": 5201,
        "name": "Ujhani",
        "stateId": 38
      },
      {
        "id": 5202,
        "name": "Ujhari",
        "stateId": 38
      },
      {
        "id": 5203,
        "name": "Umri",
        "stateId": 38
      },
      {
        "id": 5204,
        "name": "Umri Kalan",
        "stateId": 38
      },
      {
        "id": 5205,
        "name": "Un",
        "stateId": 38
      },
      {
        "id": 5206,
        "name": "Unchahar",
        "stateId": 38
      },
      {
        "id": 5207,
        "name": "Unnao",
        "stateId": 38
      },
      {
        "id": 5208,
        "name": "Usaihat",
        "stateId": 38
      },
      {
        "id": 5209,
        "name": "Usawan",
        "stateId": 38
      },
      {
        "id": 5210,
        "name": "Utraula",
        "stateId": 38
      },
      {
        "id": 5211,
        "name": "Varanasi",
        "stateId": 38
      },
      {
        "id": 5212,
        "name": "Varanasi Cantonment",
        "stateId": 38
      },
      {
        "id": 5213,
        "name": "Vijaigarh",
        "stateId": 38
      },
      {
        "id": 5214,
        "name": "Vrindavan",
        "stateId": 38
      },
      {
        "id": 5215,
        "name": "Wazirganj",
        "stateId": 38
      },
      {
        "id": 5216,
        "name": "Zafarabad",
        "stateId": 38
      },
      {
        "id": 5217,
        "name": "Zaidpur",
        "stateId": 38
      },
      {
        "id": 5218,
        "name": "Zamania",
        "stateId": 38
      },
      {
        "id": 5219,
        "name": "Almora",
        "stateId": 39
      },
      {
        "id": 5220,
        "name": "Almora Cantonment",
        "stateId": 39
      },
      {
        "id": 5221,
        "name": "Badrinathpuri",
        "stateId": 39
      },
      {
        "id": 5222,
        "name": "Bageshwar",
        "stateId": 39
      },
      {
        "id": 5223,
        "name": "Bah Bazar",
        "stateId": 39
      },
      {
        "id": 5224,
        "name": "Banbasa",
        "stateId": 39
      },
      {
        "id": 5225,
        "name": "Bandia",
        "stateId": 39
      },
      {
        "id": 5226,
        "name": "Barkot",
        "stateId": 39
      },
      {
        "id": 5227,
        "name": "Bazpur",
        "stateId": 39
      },
      {
        "id": 5228,
        "name": "Bhim Tal",
        "stateId": 39
      },
      {
        "id": 5229,
        "name": "Bhowali",
        "stateId": 39
      },
      {
        "id": 5230,
        "name": "Chakrata",
        "stateId": 39
      },
      {
        "id": 5231,
        "name": "Chamba",
        "stateId": 39
      },
      {
        "id": 5232,
        "name": "Chamoli and Gopeshwar",
        "stateId": 39
      },
      {
        "id": 5233,
        "name": "Champawat",
        "stateId": 39
      },
      {
        "id": 5234,
        "name": "Clement Town",
        "stateId": 39
      },
      {
        "id": 5235,
        "name": "Dehra Dun Cantonment",
        "stateId": 39
      },
      {
        "id": 5236,
        "name": "Dehradun",
        "stateId": 39
      },
      {
        "id": 5237,
        "name": "Dehrakhas",
        "stateId": 39
      },
      {
        "id": 5238,
        "name": "Devaprayag",
        "stateId": 39
      },
      {
        "id": 5239,
        "name": "Dhaluwala",
        "stateId": 39
      },
      {
        "id": 5240,
        "name": "Dhandera",
        "stateId": 39
      },
       {
        "id": 5241,
        "name": "Dharchula",
        "stateId": 39
      },
      {
        "id": 5242,
        "name": "Dharchula Dehat",
        "stateId": 39
      },
      {
        "id": 5243,
        "name": "Didihat",
        "stateId": 39
      },
      {
        "id": 5244,
        "name": "Dineshpur",
        "stateId": 39
      },
      {
        "id": 5245,
        "name": "Doiwala",
        "stateId": 39
      },
      {
        "id": 5246,
        "name": "Dugadda",
        "stateId": 39
      },
      {
        "id": 5247,
        "name": "Dwarahat",
        "stateId": 39
      },
      {
        "id": 5248,
        "name": "Gadarpur",
        "stateId": 39
      },
      {
        "id": 5249,
        "name": "Gangotri",
        "stateId": 39
      },
      {
        "id": 5250,
        "name": "Gauchar",
        "stateId": 39
      },
      {
        "id": 5251,
        "name": "Haldwani",
        "stateId": 39
      },
      {
        "id": 5252,
        "name": "Haridwar",
        "stateId": 39
      },
      {
        "id": 5253,
        "name": "Herbertpur",
        "stateId": 39
      },
      {
        "id": 5254,
        "name": "Jaspur",
        "stateId": 39
      },
      {
        "id": 5255,
        "name": "Jhabrera",
        "stateId": 39
      },
      {
        "id": 5256,
        "name": "Joshimath",
        "stateId": 39
      },
      {
        "id": 5257,
        "name": "Kachnal Gosain",
        "stateId": 39
      },
      {
        "id": 5258,
        "name": "Kaladungi",
        "stateId": 39
      },
      {
        "id": 5259,
        "name": "Kalagarh",
        "stateId": 39
      },
      {
        "id": 5260,
        "name": "Karnaprayang",
        "stateId": 39
      },
      {
        "id": 5261,
        "name": "Kashipur",
        "stateId": 39
      },
      {
        "id": 5262,
        "name": "Kashirampur",
        "stateId": 39
      },
      {
        "id": 5263,
        "name": "Kausani",
        "stateId": 39
      },
      {
        "id": 5264,
        "name": "Kedarnath",
        "stateId": 39
      },
      {
        "id": 5265,
        "name": "Kelakhera",
        "stateId": 39
      },
      {
        "id": 5266,
        "name": "Khatima",
        "stateId": 39
      },
      {
        "id": 5267,
        "name": "Kichha",
        "stateId": 39
      },
      {
        "id": 5268,
        "name": "Kirtinagar",
        "stateId": 39
      },
      {
        "id": 5269,
        "name": "Kotdwara",
        "stateId": 39
      },
      {
        "id": 5270,
        "name": "Laksar",
        "stateId": 39
      },
      {
        "id": 5271,
        "name": "Lalkuan",
        "stateId": 39
      },
      {
        "id": 5272,
        "name": "Landaura",
        "stateId": 39
      },
      {
        "id": 5273,
        "name": "Landhaura Cantonment",
        "stateId": 39
      },
      {
        "id": 5274,
        "name": "Lensdaun",
        "stateId": 39
      },
      {
        "id": 5275,
        "name": "Logahat",
        "stateId": 39
      },
      {
        "id": 5276,
        "name": "Mahua Dabra Haripura",
        "stateId": 39
      },
      {
        "id": 5277,
        "name": "Mahua Kheraganj",
        "stateId": 39
      },
      {
        "id": 5278,
        "name": "Manglaur",
        "stateId": 39
      },
      {
        "id": 5279,
        "name": "Masuri",
        "stateId": 39
      },
      {
        "id": 5280,
        "name": "Mohanpur Mohammadpur",
        "stateId": 39
      },
      {
        "id": 5281,
        "name": "Muni Ki Reti",
        "stateId": 39
      },
      {
        "id": 5282,
        "name": "Nagla",
        "stateId": 39
      },
      {
        "id": 5283,
        "name": "Nainital",
        "stateId": 39
      },
      {
        "id": 5284,
        "name": "Nainital Cantonment",
        "stateId": 39
      },
      {
        "id": 5285,
        "name": "Nandaprayang",
        "stateId": 39
      },
      {
        "id": 5286,
        "name": "Narendranagar",
        "stateId": 39
      },
      {
        "id": 5287,
        "name": "Pauri",
        "stateId": 39
      },
      {
        "id": 5288,
        "name": "Pithoragarh",
        "stateId": 39
      },
      {
        "id": 5289,
        "name": "Pratitnagar",
        "stateId": 39
      },
      {
        "id": 5290,
        "name": "Raipur",
        "stateId": 39
      },
      {
        "id": 5291,
        "name": "Raiwala",
        "stateId": 39
      },
      {
        "id": 5292,
        "name": "Ramnagar",
        "stateId": 39
      },
      {
        "id": 5293,
        "name": "Ranikhet",
        "stateId": 39
      },
      {
        "id": 5294,
        "name": "Ranipur",
        "stateId": 39
      },
      {
        "id": 5295,
        "name": "Rishikesh",
        "stateId": 39
      },
      {
        "id": 5296,
        "name": "Rishikesh Cantonment",
        "stateId": 39
      },
      {
        "id": 5297,
        "name": "Roorkee",
        "stateId": 39
      },
      {
        "id": 5298,
        "name": "Rudraprayag",
        "stateId": 39
      },
      {
        "id": 5299,
        "name": "Rudrapur",
        "stateId": 39
      },
      {
        "id": 5300,
        "name": "Rurki",
        "stateId": 39
      },
      {
        "id": 5301,
        "name": "Rurki Cantonment",
        "stateId": 39
      },
      {
        "id": 5302,
        "name": "Shaktigarh",
        "stateId": 39
      },
      {
        "id": 5303,
        "name": "Sitarganj",
        "stateId": 39
      },
      {
        "id": 5304,
        "name": "Srinagar",
        "stateId": 39
      },
      {
        "id": 5305,
        "name": "Sultanpur",
        "stateId": 39
      },
      {
        "id": 5306,
        "name": "Tanakpur",
        "stateId": 39
      },
      {
        "id": 5307,
        "name": "Tehri",
        "stateId": 39
      },
      {
        "id": 5308,
        "name": "Udham Singh Nagar",
        "stateId": 39
      },
      {
        "id": 5309,
        "name": "Uttarkashi",
        "stateId": 39
      },
      {
        "id": 5310,
        "name": "Vikasnagar",
        "stateId": 39
      },
      {
        "id": 5311,
        "name": "Virbhadra",
        "stateId": 39
      },
      {
        "id": 5312,
        "name": "24 Parganas (n)",
        "stateId": 41
      },
      {
        "id": 5313,
        "name": "24 Parganas (s)",
        "stateId": 41
      },
      {
        "id": 5314,
        "name": "Adra",
        "stateId": 41
      },
      {
        "id": 5315,
        "name": "Ahmadpur",
        "stateId": 41
      },
      {
        "id": 5316,
        "name": "Aiho",
        "stateId": 41
      },
      {
        "id": 5317,
        "name": "Aistala",
        "stateId": 41
      },
      {
        "id": 5318,
        "name": "Alipur Duar",
        "stateId": 41
      },
      {
        "id": 5319,
        "name": "Alipur Duar Railway Junction",
        "stateId": 41
      },
      {
        "id": 5320,
        "name": "Alpur",
        "stateId": 41
      },
      {
        "id": 5321,
        "name": "Amalhara",
        "stateId": 41
      },
      {
        "id": 5322,
        "name": "Amkula",
        "stateId": 41
      },
      {
        "id": 5323,
        "name": "Amlagora",
        "stateId": 41
      },
      {
        "id": 5324,
        "name": "Amodghata",
        "stateId": 41
      },
      {
        "id": 5325,
        "name": "Amtala",
        "stateId": 41
      },
      {
        "id": 5326,
        "name": "Andul",
        "stateId": 41
      },
      {
        "id": 5327,
        "name": "Anksa",
        "stateId": 41
      },
      {
        "id": 5328,
        "name": "Ankurhati",
        "stateId": 41
      },
      {
        "id": 5329,
        "name": "Anup Nagar",
        "stateId": 41
      },
      {
        "id": 5330,
        "name": "Arambagh",
        "stateId": 41
      },
      {
        "id": 5331,
        "name": "Argari",
        "stateId": 41
      },
      {
        "id": 5332,
        "name": "Arsha",
        "stateId": 41
      },
      {
        "id": 5333,
        "name": "Asansol",
        "stateId": 41
      },
      {
        "id": 5334,
        "name": "Ashoknagar Kalyangarh",
        "stateId": 41
      },
      {
        "id": 5335,
        "name": "Aurangabad",
        "stateId": 41
      },
      {
        "id": 5336,
        "name": "Bablari Dewanganj",
        "stateId": 41
      },
      {
        "id": 5337,
        "name": "Badhagachhi",
        "stateId": 41
      },
      {
        "id": 5338,
        "name": "Baduria",
        "stateId": 41
      },
      {
        "id": 5339,
        "name": "Baghdogra",
        "stateId": 41
      },
      {
        "id": 5340,
        "name": "Bagnan",
        "stateId": 41
      },
      {
        "id": 5341,
        "name": "Bagra",
        "stateId": 41
      },
      {
        "id": 5342,
        "name": "Bagula",
        "stateId": 41
      },
      {
        "id": 5343,
        "name": "Baharampur",
        "stateId": 41
      },
      {
        "id": 5344,
        "name": "Bahirgram",
        "stateId": 41
      },
      {
        "id": 5345,
        "name": "Bahula",
        "stateId": 41
      },
      {
        "id": 5346,
        "name": "Baidyabati",
        "stateId": 41
      },
      {
        "id": 5347,
        "name": "Bairatisal",
        "stateId": 41
      },
      {
        "id": 5348,
        "name": "Baj Baj",
        "stateId": 41
      },
      {
        "id": 5349,
        "name": "Bakreswar",
        "stateId": 41
      },
      {
        "id": 5350,
        "name": "Balaram Pota",
        "stateId": 41
      },
      {
        "id": 5351,
        "name": "Balarampur",
        "stateId": 41
      },
      {
        "id": 5352,
        "name": "Bali Chak",
        "stateId": 41
      },
      {
        "id": 5353,
        "name": "Ballavpur",
        "stateId": 41
      },
      {
        "id": 5354,
        "name": "Bally",
        "stateId": 41
      },
      {
        "id": 5355,
        "name": "Balurghat",
        "stateId": 41
      },
      {
        "id": 5356,
        "name": "Bamunari",
        "stateId": 41
      },
      {
        "id": 5357,
        "name": "Banarhat Tea Garden",
        "stateId": 41
      },
      {
        "id": 5358,
        "name": "Bandel",
        "stateId": 41
      },
      {
        "id": 5359,
        "name": "Bangaon",
        "stateId": 41
      },
      {
        "id": 5360,
        "name": "Bankra",
        "stateId": 41
      },
      {
        "id": 5361,
        "name": "Bankura",
        "stateId": 41
      },
      {
        "id": 5362,
        "name": "Bansbaria",
        "stateId": 41
      },
      {
        "id": 5363,
        "name": "Banshra",
        "stateId": 41
      },
      {
        "id": 5364,
        "name": "Banupur",
        "stateId": 41
      },
      {
        "id": 5365,
        "name": "Bara Bamonia",
        "stateId": 41
      },
      {
        "id": 5366,
        "name": "Barakpur",
        "stateId": 41
      },
      {
        "id": 5367,
        "name": "Barakpur Cantonment",
        "stateId": 41
      },
      {
        "id": 5368,
        "name": "Baranagar",
        "stateId": 41
      },
      {
        "id": 5369,
        "name": "Barasat",
        "stateId": 41
      },
      {
        "id": 5370,
        "name": "Barddhaman",
        "stateId": 41
      },
      {
        "id": 5371,
        "name": "Barijhati",
        "stateId": 41
      },
      {
        "id": 5372,
        "name": "Barjora",
        "stateId": 41
      },
      {
        "id": 5373,
        "name": "Barrackpore",
        "stateId": 41
      },
      {
        "id": 5374,
        "name": "Baruihuda",
        "stateId": 41
      },
      {
        "id": 5375,
        "name": "Baruipur",
        "stateId": 41
      },
      {
        "id": 5376,
        "name": "Barunda",
        "stateId": 41
      },
      {
        "id": 5377,
        "name": "Basirhat",
        "stateId": 41
      },
      {
        "id": 5378,
        "name": "Baska",
        "stateId": 41
      },
      {
        "id": 5379,
        "name": "Begampur",
        "stateId": 41
      },
      {
        "id": 5380,
        "name": "Beldanga",
        "stateId": 41
      },
      {
        "id": 5381,
        "name": "Beldubi",
        "stateId": 41
      },
      {
        "id": 5382,
        "name": "Belebathan",
        "stateId": 41
      },
      {
        "id": 5383,
        "name": "Beliator",
        "stateId": 41
      },
      {
        "id": 5384,
        "name": "Bhadreswar",
        "stateId": 41
      },
      {
        "id": 5385,
        "name": "Bhandardaha",
        "stateId": 41
      },
      {
        "id": 5386,
        "name": "Bhangar Raghunathpur",
        "stateId": 41
      },
      {
        "id": 5387,
        "name": "Bhangri Pratham Khanda",
        "stateId": 41
      },
      {
        "id": 5388,
        "name": "Bhanowara",
        "stateId": 41
      },
      {
        "id": 5389,
        "name": "Bhatpara",
        "stateId": 41
      },
      {
        "id": 5390,
        "name": "Bholar Dabri",
        "stateId": 41
      },
      {
        "id": 5391,
        "name": "Bidhannagar",
        "stateId": 41
      },
      {
        "id": 5392,
        "name": "Bidyadharpur",
        "stateId": 41
      },
      {
        "id": 5393,
        "name": "Biki Hakola",
        "stateId": 41
      },
      {
        "id": 5394,
        "name": "Bilandapur",
        "stateId": 41
      },
      {
        "id": 5395,
        "name": "Bilpahari",
        "stateId": 41
      },
      {
        "id": 5396,
        "name": "Bipra Noapara",
        "stateId": 41
      },
      {
        "id": 5397,
        "name": "Birlapur",
        "stateId": 41
      },
      {
        "id": 5398,
        "name": "Birnagar",
        "stateId": 41
      },
      {
        "id": 5399,
        "name": "Bisarpara",
        "stateId": 41
      },
      {
        "id": 5400,
        "name": "Bishnupur",
        "stateId": 41
      },
      {
        "id": 5401,
        "name": "Bolpur",
        "stateId": 41
      },
      {
        "id": 5402,
        "name": "Bongaon",
        "stateId": 41
      },
      {
        "id": 5403,
        "name": "Bowali",
        "stateId": 41
      },
      {
        "id": 5404,
        "name": "Burdwan",
        "stateId": 41
      },
      {
        "id": 5405,
        "name": "Canning",
        "stateId": 41
      },
      {
        "id": 5406,
        "name": "Cart Road",
        "stateId": 41
      },
      {
        "id": 5407,
        "name": "Chachanda",
        "stateId": 41
      },
      {
        "id": 5408,
        "name": "Chak Bankola",
        "stateId": 41
      },
      {
        "id": 5409,
        "name": "Chak Enayetnagar",
        "stateId": 41
      },
      {
        "id": 5410,
        "name": "Chak Kashipur",
        "stateId": 41
      },
      {
        "id": 5411,
        "name": "Chakalampur",
        "stateId": 41
      },
      {
        "id": 5412,
        "name": "Chakbansberia",
        "stateId": 41
      },
      {
        "id": 5413,
        "name": "Chakdaha",
        "stateId": 41
      },
      {
        "id": 5414,
        "name": "Chakpara",
        "stateId": 41
      },
      {
        "id": 5415,
        "name": "Champahati",
        "stateId": 41
      },
      {
        "id": 5416,
        "name": "Champdani",
        "stateId": 41
      },
      {
        "id": 5417,
        "name": "Chamrail",
        "stateId": 41
      },
      {
        "id": 5418,
        "name": "Chandannagar",
        "stateId": 41
      },
      {
        "id": 5419,
        "name": "Chandpur",
        "stateId": 41
      },
      {
        "id": 5420,
        "name": "Chandrakona",
        "stateId": 41
      },
      {
        "id": 5421,
        "name": "Chapari",
        "stateId": 41
      },
      {
        "id": 5422,
        "name": "Chapui",
        "stateId": 41
      },
      {
        "id": 5423,
        "name": "Char Brahmanagar",
        "stateId": 41
      },
      {
        "id": 5424,
        "name": "Char Maijdia",
        "stateId": 41
      },
      {
        "id": 5425,
        "name": "Charka",
        "stateId": 41
      },
      {
        "id": 5426,
        "name": "Chata Kalikapur",
        "stateId": 41
      },
      {
        "id": 5427,
        "name": "Chauhati",
        "stateId": 41
      },
      {
        "id": 5428,
        "name": "Checha Khata",
        "stateId": 41
      },
      {
        "id": 5429,
        "name": "Chelad",
        "stateId": 41
      },
      {
        "id": 5430,
        "name": "Chhora",
        "stateId": 41
      },
      {
        "id": 5431,
        "name": "Chikrand",
        "stateId": 41
      },
      {
        "id": 5432,
        "name": "Chittaranjan",
        "stateId": 41
      },
      {
        "id": 5433,
        "name": "Contai",
        "stateId": 41
      },
      {
        "id": 5434,
        "name": "Cooch Behar",
        "stateId": 41
      },
      {
        "id": 5435,
        "name": "Dainhat",
        "stateId": 41
      },
      {
        "id": 5436,
        "name": "Dakshin Baguan",
        "stateId": 41
      },
      {
        "id": 5437,
        "name": "Dakshin Jhapardaha",
        "stateId": 41
      },
      {
        "id": 5438,
        "name": "Dakshin Rajyadharpur",
        "stateId": 41
      },
      {
        "id": 5439,
        "name": "Dakshin Raypur",
        "stateId": 41
      },
      {
        "id": 5440,
        "name": "Dalkola",
        "stateId": 41
      },
      {
        "id": 5441,
        "name": "Dalurband",
        "stateId": 41
      },
      {
        "id": 5442,
        "name": "Darap Pur",
        "stateId": 41
      },
      {
        "id": 5443,
        "name": "Darjiling",
        "stateId": 41
      },
      {
        "id": 5444,
        "name": "Daulatpur",
        "stateId": 41
      },
      {
        "id": 5445,
        "name": "Debipur",
        "stateId": 41
      },
      {
        "id": 5446,
        "name": "Defahat",
        "stateId": 41
      },
      {
        "id": 5447,
        "name": "Deora",
        "stateId": 41
      },
      {
        "id": 5448,
        "name": "Deulia",
        "stateId": 41
      },
      {
        "id": 5449,
        "name": "Dhakuria",
        "stateId": 41
      },
      {
        "id": 5450,
        "name": "Dhandadihi",
        "stateId": 41
      },
      {
        "id": 5451,
        "name": "Dhanyakuria",
        "stateId": 41
      },
      {
        "id": 5452,
        "name": "Dharmapur",
        "stateId": 41
      },
      {
        "id": 5453,
        "name": "Dhatri Gram",
        "stateId": 41
      },
      {
        "id": 5454,
        "name": "Dhuilya",
        "stateId": 41
      },
      {
        "id": 5455,
        "name": "Dhulagari",
        "stateId": 41
      },
      {
        "id": 5456,
        "name": "Dhulian",
        "stateId": 41
      },
      {
        "id": 5457,
        "name": "Dhupgari",
        "stateId": 41
      },
      {
        "id": 5458,
        "name": "Dhusaripara",
        "stateId": 41
      },
      {
        "id": 5459,
        "name": "Diamond Harbour",
        "stateId": 41
      },
      {
        "id": 5460,
        "name": "Digha",
        "stateId": 41
      },
      {
        "id": 5461,
        "name": "Dignala",
        "stateId": 41
      },
      {
        "id": 5462,
        "name": "Dinhata",
        "stateId": 41
      },
      {
        "id": 5463,
        "name": "Dubrajpur",
        "stateId": 41
      },
      {
        "id": 5464,
        "name": "Dumjor",
        "stateId": 41
      },
      {
        "id": 5465,
        "name": "Durgapur",
        "stateId": 41
      },
      {
        "id": 5466,
        "name": "Durllabhganj",
        "stateId": 41
      },
      {
        "id": 5467,
        "name": "Egra",
        "stateId": 41
      },
      {
        "id": 5468,
        "name": "Eksara",
        "stateId": 41
      },
      {
        "id": 5469,
        "name": "Falakata",
        "stateId": 41
      },
      {
        "id": 5470,
        "name": "Farakka",
        "stateId": 41
      },
      {
        "id": 5471,
        "name": "Fatellapur",
        "stateId": 41
      },
      {
        "id": 5472,
        "name": "Fort Gloster",
        "stateId": 41
      },
      {
        "id": 5473,
        "name": "Gabberia",
        "stateId": 41
      },
      {
        "id": 5474,
        "name": "Gadigachha",
        "stateId": 41
      },
      {
        "id": 5475,
        "name": "Gairkata",
        "stateId": 41
      },
      {
        "id": 5476,
        "name": "Gangarampur",
        "stateId": 41
      },
      {
        "id": 5477,
        "name": "Garalgachha",
        "stateId": 41
      },
      {
        "id": 5478,
        "name": "Garbeta Amlagora",
        "stateId": 41
      },
      {
        "id": 5479,
        "name": "Garhbeta",
        "stateId": 41
      },
      {
        "id": 5480,
        "name": "Garshyamnagar",
        "stateId": 41
      },
      {
        "id": 5481,
        "name": "Garui",
        "stateId": 41
      },
      {
        "id": 5482,
        "name": "Garulia",
        "stateId": 41
      },
      {
        "id": 5483,
        "name": "Gayespur",
        "stateId": 41
      },
      {
        "id": 5484,
        "name": "Ghatal",
        "stateId": 41
      },
      {
        "id": 5485,
        "name": "Ghorsala",
        "stateId": 41
      },
      {
        "id": 5486,
        "name": "Goaljan",
        "stateId": 41
      },
      {
        "id": 5487,
        "name": "Goasafat",
        "stateId": 41
      },
      {
        "id": 5488,
        "name": "Gobardanga",
        "stateId": 41
      },
      {
        "id": 5489,
        "name": "Gobindapur",
        "stateId": 41
      },
      {
        "id": 5490,
        "name": "Gopalpur",
        "stateId": 41
      },
      {
        "id": 5491,
        "name": "Gopinathpur",
        "stateId": 41
      },
      {
        "id": 5492,
        "name": "Gora Bazar",
        "stateId": 41
      },
      {
        "id": 5493,
        "name": "Guma",
        "stateId": 41
      },
      {
        "id": 5494,
        "name": "Gurdaha",
        "stateId": 41
      },
      {
        "id": 5495,
        "name": "Guriahati",
        "stateId": 41
      },
      {
        "id": 5496,
        "name": "Guskhara",
        "stateId": 41
      },
      {
        "id": 5497,
        "name": "Habra",
        "stateId": 41
      },
      {
        "id": 5498,
        "name": "Haldia",
        "stateId": 41
      },
      {
        "id": 5499,
        "name": "Haldibari",
        "stateId": 41
      },
      {
        "id": 5500,
        "name": "Halisahar",
        "stateId": 41
      },
      {
        "id": 5501,
        "name": "Haora",
        "stateId": 41
      },
      {
        "id": 5502,
        "name": "Harharia Chak",
        "stateId": 41
      },
      {
        "id": 5503,
        "name": "Harindanga",
        "stateId": 41
      },
      {
        "id": 5504,
        "name": "Haringhata",
        "stateId": 41
      },
      {
        "id": 5505,
        "name": "Haripur",
        "stateId": 41
      },
      {
        "id": 5506,
        "name": "Harishpur",
        "stateId": 41
      },
      {
        "id": 5507,
        "name": "Hatgachha",
        "stateId": 41
      },
      {
        "id": 5508,
        "name": "Hatsimla",
        "stateId": 41
      },
      {
        "id": 5509,
        "name": "Hijuli",
        "stateId": 41
      },
      {
        "id": 5510,
        "name": "Hindustan Cables Town",
        "stateId": 41
      },
      {
        "id": 5511,
        "name": "Hooghly",
        "stateId": 41
      },
      {
        "id": 5512,
        "name": "Howrah",
        "stateId": 41
      },
      {
        "id": 5513,
        "name": "Hugli-Chunchura",
        "stateId": 41
      },
      {
        "id": 5514,
        "name": "Humaipur",
        "stateId": 41
      },
      {
        "id": 5515,
        "name": "Ichha Pur Defence Estate",
        "stateId": 41
      },
      {
        "id": 5516,
        "name": "Ingraj Bazar",
        "stateId": 41
      },
      {
        "id": 5517,
        "name": "Islampur",
        "stateId": 41
      },
      {
        "id": 5518,
        "name": "Jafarpur",
        "stateId": 41
      },
      {
        "id": 5519,
        "name": "Jagadanandapur",
        "stateId": 41
      },
      {
        "id": 5520,
        "name": "Jagdishpur",
        "stateId": 41
      },
      {
        "id": 5521,
        "name": "Jagtaj",
        "stateId": 41
      },
      {
        "id": 5522,
        "name": "Jala Kendua",
        "stateId": 41
      },
      {
        "id": 5523,
        "name": "Jaldhaka",
        "stateId": 41
      },
      {
        "id": 5524,
        "name": "Jalkhura",
        "stateId": 41
      },
      {
        "id": 5525,
        "name": "Jalpaiguri",
        "stateId": 41
      },
      {
        "id": 5526,
        "name": "Jamuria",
        "stateId": 41
      },
      {
        "id": 5527,
        "name": "Jangipur",
        "stateId": 41
      },
      {
        "id": 5528,
        "name": "Jaygaon",
        "stateId": 41
      },
      {
        "id": 5529,
        "name": "Jaynagar-Majilpur",
        "stateId": 41
      },
      {
        "id": 5530,
        "name": "Jemari",
        "stateId": 41
      },
      {
        "id": 5531,
        "name": "Jemari Township",
        "stateId": 41
      },
      {
        "id": 5532,
        "name": "Jetia",
        "stateId": 41
      },
      {
        "id": 5533,
        "name": "Jhalida",
        "stateId": 41
      },
      {
        "id": 5534,
        "name": "Jhargram",
        "stateId": 41
      },
      {
        "id": 5535,
        "name": "Jhorhat",
        "stateId": 41
      },
      {
        "id": 5536,
        "name": "Jiaganj-Azimganj",
        "stateId": 41
      },
      {
        "id": 5537,
        "name": "Joka",
        "stateId": 41
      },
      {
        "id": 5538,
        "name": "Jot Kamal",
        "stateId": 41
      },
      {
        "id": 5539,
        "name": "Kachu Pukur",
        "stateId": 41
      },
      {
        "id": 5540,
        "name": "Kajora",
        "stateId": 41
      },
      {
        "id": 5541,
        "name": "Kakdihi",
        "stateId": 41
      },
      {
        "id": 5542,
        "name": "Kakdwip",
        "stateId": 41
      },
      {
        "id": 5543,
        "name": "Kalaikunda",
        "stateId": 41
      },
      {
        "id": 5544,
        "name": "Kalara",
        "stateId": 41
      },
      {
        "id": 5545,
        "name": "Kalimpong",
        "stateId": 41
      },
      {
        "id": 5546,
        "name": "Kaliyaganj",
        "stateId": 41
      },
      {
        "id": 5547,
        "name": "Kalna",
        "stateId": 41
      },
      {
        "id": 5548,
        "name": "Kalyani",
        "stateId": 41
      },
      {
        "id": 5549,
        "name": "Kamarhati",
        "stateId": 41
      },
      {
        "id": 5550,
        "name": "Kanaipur",
        "stateId": 41
      },
      {
        "id": 5551,
        "name": "Kanchrapara",
        "stateId": 41
      },
      {
        "id": 5552,
        "name": "Kandi",
        "stateId": 41
      },
      {
        "id": 5553,
        "name": "Kanki",
        "stateId": 41
      },
      {
        "id": 5554,
        "name": "Kankuria",
        "stateId": 41
      },
      {
        "id": 5555,
        "name": "Kantlia",
        "stateId": 41
      },
      {
        "id": 5556,
        "name": "Kanyanagar",
        "stateId": 41
      },
      {
        "id": 5557,
        "name": "Karimpur",
        "stateId": 41
      },
      {
        "id": 5558,
        "name": "Karsiyang",
        "stateId": 41
      },
      {
        "id": 5559,
        "name": "Kasba",
        "stateId": 41
      },
      {
        "id": 5560,
        "name": "Kasimbazar",
        "stateId": 41
      },
      {
        "id": 5561,
        "name": "Katwa",
        "stateId": 41
      },
      {
        "id": 5562,
        "name": "Kaugachhi",
        "stateId": 41
      },
      {
        "id": 5563,
        "name": "Kenda",
        "stateId": 41
      },
      {
        "id": 5564,
        "name": "Kendra Khottamdi",
        "stateId": 41
      },
      {
        "id": 5565,
        "name": "Kendua",
        "stateId": 41
      },
      {
        "id": 5566,
        "name": "Kesabpur",
        "stateId": 41
      },
      {
        "id": 5567,
        "name": "Khagrabari",
        "stateId": 41
      },
      {
        "id": 5568,
        "name": "Khalia",
        "stateId": 41
      },
      {
        "id": 5569,
        "name": "Khalor",
        "stateId": 41
      },
      {
        "id": 5570,
        "name": "Khandra",
        "stateId": 41
      },
      {
        "id": 5571,
        "name": "Khantora",
        "stateId": 41
      },
      {
        "id": 5572,
        "name": "Kharagpur",
        "stateId": 41
      },
      {
        "id": 5573,
        "name": "Kharagpur Railway Settlement",
        "stateId": 41
      },
      {
        "id": 5574,
        "name": "Kharar",
        "stateId": 41
      },
      {
        "id": 5575,
        "name": "Khardaha",
        "stateId": 41
      },
      {
        "id": 5576,
        "name": "Khari Mala Khagrabari",
        "stateId": 41
      },
      {
        "id": 5577,
        "name": "Kharsarai",
        "stateId": 41
      },
      {
        "id": 5578,
        "name": "Khatra",
        "stateId": 41
      },
      {
        "id": 5579,
        "name": "Khodarampur",
        "stateId": 41
      },
      {
        "id": 5580,
        "name": "Kodalia",
        "stateId": 41
      },
      {
        "id": 5581,
        "name": "Kolaghat",
        "stateId": 41
      },
      {
        "id": 5582,
        "name": "Kolaghat Thermal Power Project",
        "stateId": 41
      },
      {
        "id": 5583,
        "name": "Kolkata",
        "stateId": 41
      },
      {
        "id": 5584,
        "name": "Konardihi",
        "stateId": 41
      },
      {
        "id": 5585,
        "name": "Konnogar",
        "stateId": 41
      },
      {
        "id": 5586,
        "name": "Krishnanagar",
        "stateId": 41
      },
      {
        "id": 5587,
        "name": "Krishnapur",
        "stateId": 41
      },
      {
        "id": 5588,
        "name": "Kshidirpur",
        "stateId": 41
      },
      {
        "id": 5589,
        "name": "Kshirpai",
        "stateId": 41
      },
      {
        "id": 5590,
        "name": "Kulihanda",
        "stateId": 41
      },
      {
        "id": 5591,
        "name": "Kulti",
        "stateId": 41
      },
      {
        "id": 5592,
        "name": "Kunustara",
        "stateId": 41
      },
      {
        "id": 5593,
        "name": "Kuperskem",
        "stateId": 41
      },
      {
        "id": 5594,
        "name": "Madanpur",
        "stateId": 41
      },
      {
        "id": 5595,
        "name": "Madhusudanpur",
        "stateId": 41
      },
      {
        "id": 5596,
        "name": "Madhyamgram",
        "stateId": 41
      },
      {
        "id": 5597,
        "name": "Maheshtala",
        "stateId": 41
      },
      {
        "id": 5598,
        "name": "Mahiari",
        "stateId": 41
      },
      {
        "id": 5599,
        "name": "Mahikpur",
        "stateId": 41
      },
      {
        "id": 5600,
        "name": "Mahira",
        "stateId": 41
      },
      {
        "id": 5601,
        "name": "Mahishadal",
        "stateId": 41
      },
      {
        "id": 5602,
        "name": "Mainaguri",
        "stateId": 41
      },
      {
        "id": 5603,
        "name": "Makardaha",
        "stateId": 41
      },
      {
        "id": 5604,
        "name": "Mal",
        "stateId": 41
      },
      {
        "id": 5605,
        "name": "Malda",
        "stateId": 41
      },
      {
        "id": 5606,
        "name": "Mandarbani",
        "stateId": 41
      },
      {
        "id": 5607,
        "name": "Mansinhapur",
        "stateId": 41
      },
      {
        "id": 5608,
        "name": "Masila",
        "stateId": 41
      },
      {
        "id": 5609,
        "name": "Maslandapur",
        "stateId": 41
      },
      {
        "id": 5610,
        "name": "Mathabhanga",
        "stateId": 41
      },
      {
        "id": 5611,
        "name": "Mekliganj",
        "stateId": 41
      },
      {
        "id": 5612,
        "name": "Memari",
        "stateId": 41
      },
      {
        "id": 5613,
        "name": "Midnapur",
        "stateId": 41
      },
      {
        "id": 5614,
        "name": "Mirik",
        "stateId": 41
      },
      {
        "id": 5615,
        "name": "Monoharpur",
        "stateId": 41
      },
      {
        "id": 5616,
        "name": "Mrigala",
        "stateId": 41
      },
      {
        "id": 5617,
        "name": "Muragachha",
        "stateId": 41
      },
      {
        "id": 5618,
        "name": "Murgathaul",
        "stateId": 41
      },
      {
        "id": 5619,
        "name": "Murshidabad",
        "stateId": 41
      },
      {
        "id": 5620,
        "name": "Nabadhai Dutta Pukur",
        "stateId": 41
      },
      {
        "id": 5621,
        "name": "Nabagram",
        "stateId": 41
      },
      {
        "id": 5622,
        "name": "Nabgram",
        "stateId": 41
      },
      {
        "id": 5623,
        "name": "Nachhratpur Katabari",
        "stateId": 41
      },
      {
        "id": 5624,
        "name": "Nadia",
        "stateId": 41
      },
      {
        "id": 5625,
        "name": "Naihati",
        "stateId": 41
      },
      {
        "id": 5626,
        "name": "Nalhati",
        "stateId": 41
      },
      {
        "id": 5627,
        "name": "Nasra",
        "stateId": 41
      },
      {
        "id": 5628,
        "name": "Natibpur",
        "stateId": 41
      },
      {
        "id": 5629,
        "name": "Naupala",
        "stateId": 41
      },
      {
        "id": 5630,
        "name": "Navadwip",
        "stateId": 41
      },
      {
        "id": 5631,
        "name": "Nebadhai Duttapukur",
        "stateId": 41
      },
      {
        "id": 5632,
        "name": "New Barrackpore",
        "stateId": 41
      },
      {
        "id": 5633,
        "name": "Ni Barakpur",
        "stateId": 41
      },
      {
        "id": 5634,
        "name": "Nibra",
        "stateId": 41
      },
      {
        "id": 5635,
        "name": "Noapara",
        "stateId": 41
      },
      {
        "id": 5636,
        "name": "Nokpul",
        "stateId": 41
      },
      {
        "id": 5637,
        "name": "North Barakpur",
        "stateId": 41
      },
      {
        "id": 5638,
        "name": "Odlabari",
        "stateId": 41
      },
      {
        "id": 5639,
        "name": "Old Maldah",
        "stateId": 41
      },
      {
        "id": 5640,
        "name": "Ondal",
        "stateId": 41
      },
      {
        "id": 5641,
        "name": "Pairagachha",
        "stateId": 41
      },
      {
        "id": 5642,
        "name": "Palashban",
        "stateId": 41
      },
      {
        "id": 5643,
        "name": "Panchla",
        "stateId": 41
      },
      {
        "id": 5644,
        "name": "Panchpara",
        "stateId": 41
      },
      {
        "id": 5645,
        "name": "Pandua",
        "stateId": 41
      },
      {
        "id": 5646,
        "name": "Pangachhiya",
        "stateId": 41
      },
      {
        "id": 5647,
        "name": "Paniara",
        "stateId": 41
      },
      {
        "id": 5648,
        "name": "Panihati",
        "stateId": 41
      },
      {
        "id": 5649,
        "name": "Panuhat",
        "stateId": 41
      },
      {
        "id": 5650,
        "name": "Par Beliya",
        "stateId": 41
      },
      {
        "id": 5651,
        "name": "Parashkol",
        "stateId": 41
      },
      {
        "id": 5652,
        "name": "Parasia",
        "stateId": 41
      },
      {
        "id": 5653,
        "name": "Parbbatipur",
        "stateId": 41
      },
      {
        "id": 5654,
        "name": "Parui",
        "stateId": 41
      },
      {
        "id": 5655,
        "name": "Paschim Jitpur",
        "stateId": 41
      },
      {
        "id": 5656,
        "name": "Paschim Punro Para",
        "stateId": 41
      },
      {
        "id": 5657,
        "name": "Patrasaer",
        "stateId": 41
      },
      {
        "id": 5658,
        "name": "Pattabong Tea Garden",
        "stateId": 41
      },
      {
        "id": 5659,
        "name": "Patuli",
        "stateId": 41
      },
      {
        "id": 5660,
        "name": "Patulia",
        "stateId": 41
      },
      {
        "id": 5661,
        "name": "Phulia",
        "stateId": 41
      },
      {
        "id": 5662,
        "name": "Podara",
        "stateId": 41
      },
      {
        "id": 5663,
        "name": "Port Blair",
        "stateId": 41
      },
      {
        "id": 5664,
        "name": "Prayagpur",
        "stateId": 41
      },
      {
        "id": 5665,
        "name": "Pujali",
        "stateId": 41
      },
      {
        "id": 5666,
        "name": "Purba Medinipur",
        "stateId": 41
      },
      {
        "id": 5667,
        "name": "Purba Tajpur",
        "stateId": 41
      },
      {
        "id": 5668,
        "name": "Purulia",
        "stateId": 41
      },
      {
        "id": 5669,
        "name": "Raghudebbati",
        "stateId": 41
      },
      {
        "id": 5670,
        "name": "Raghudebpur",
        "stateId": 41
      },
      {
        "id": 5671,
        "name": "Raghunathchak",
        "stateId": 41
      },
      {
        "id": 5672,
        "name": "Raghunathpur",
        "stateId": 41
      },
      {
        "id": 5673,
        "name": "Raghunathpur-Dankuni",
        "stateId": 41
      },
      {
        "id": 5674,
        "name": "Raghunathpur-Magra",
        "stateId": 41
      },
      {
        "id": 5675,
        "name": "Raigachhi",
        "stateId": 41
      },
      {
        "id": 5676,
        "name": "Raiganj",
        "stateId": 41
      },
      {
        "id": 5677,
        "name": "Raipur",
        "stateId": 41
      },
      {
        "id": 5678,
        "name": "Rajarhat Gopalpur",
        "stateId": 41
      },
      {
        "id": 5679,
        "name": "Rajpur",
        "stateId": 41
      },
      {
        "id": 5680,
        "name": "Ramchandrapur",
        "stateId": 41
      },
      {
        "id": 5681,
        "name": "Ramjibanpur",
        "stateId": 41
      },
      {
        "id": 5682,
        "name": "Ramnagar",
        "stateId": 41
      },
      {
        "id": 5683,
        "name": "Rampur Hat",
        "stateId": 41
      },
      {
        "id": 5684,
        "name": "Ranaghat",
        "stateId": 41
      },
      {
        "id": 5685,
        "name": "Raniganj",
        "stateId": 41
      },
      {
        "id": 5686,
        "name": "Ratibati",
        "stateId": 41
      },
      {
        "id": 5687,
        "name": "Raypur",
        "stateId": 41
      },
      {
        "id": 5688,
        "name": "Rishra",
        "stateId": 41
      },
      {
        "id": 5689,
        "name": "Rishra Cantonment",
        "stateId": 41
      },
      {
        "id": 5690,
        "name": "Ruiya",
        "stateId": 41
      },
      {
        "id": 5691,
        "name": "Sahajadpur",
        "stateId": 41
      },
      {
        "id": 5692,
        "name": "Sahapur",
        "stateId": 41
      },
      {
        "id": 5693,
        "name": "Sainthia",
        "stateId": 41
      },
      {
        "id": 5694,
        "name": "Salap",
        "stateId": 41
      },
      {
        "id": 5695,
        "name": "Sankarpur",
        "stateId": 41
      },
      {
        "id": 5696,
        "name": "Sankrail",
        "stateId": 41
      },
      {
        "id": 5697,
        "name": "Santoshpur",
        "stateId": 41
      },
      {
        "id": 5698,
        "name": "Saontaidih",
        "stateId": 41
      },
      {
        "id": 5699,
        "name": "Sarenga",
        "stateId": 41
      },
      {
        "id": 5700,
        "name": "Sarpi",
        "stateId": 41
      },
      {
        "id": 5701,
        "name": "Satigachha",
        "stateId": 41
      },
      {
        "id": 5702,
        "name": "Serpur",
        "stateId": 41
      },
      {
        "id": 5703,
        "name": "Shankhanagar",
        "stateId": 41
      },
      {
        "id": 5704,
        "name": "Shantipur",
        "stateId": 41
      },
      {
        "id": 5705,
        "name": "Shrirampur",
        "stateId": 41
      },
      {
        "id": 5706,
        "name": "Siduli",
        "stateId": 41
      },
      {
        "id": 5707,
        "name": "Siliguri",
        "stateId": 41
      },
      {
        "id": 5708,
        "name": "Simla",
        "stateId": 41
      },
      {
        "id": 5709,
        "name": "Singur",
        "stateId": 41
      },
      {
        "id": 5710,
        "name": "Sirsha",
        "stateId": 41
      },
      {
        "id": 5711,
        "name": "Siuri",
        "stateId": 41
      },
      {
        "id": 5712,
        "name": "Sobhaganj",
        "stateId": 41
      },
      {
        "id": 5713,
        "name": "Sodpur",
        "stateId": 41
      },
      {
        "id": 5714,
        "name": "Sonamukhi",
        "stateId": 41
      },
      {
        "id": 5715,
        "name": "Sonatikiri",
        "stateId": 41
      },
      {
        "id": 5716,
        "name": "Srikantabati",
        "stateId": 41
      },
      {
        "id": 5717,
        "name": "Srirampur",
        "stateId": 41
      },
      {
        "id": 5718,
        "name": "Sukdal",
        "stateId": 41
      },
      {
        "id": 5719,
        "name": "Taherpur",
        "stateId": 41
      },
      {
        "id": 5720,
        "name": "Taki",
        "stateId": 41
      },
      {
        "id": 5721,
        "name": "Talbandha",
        "stateId": 41
      },
      {
        "id": 5722,
        "name": "Tamluk",
        "stateId": 41
      },
      {
        "id": 5723,
        "name": "Tarakeswar",
        "stateId": 41
      },
      {
        "id": 5724,
        "name": "Tentulberia",
        "stateId": 41
      },
      {
        "id": 5725,
        "name": "Tentulkuli",
        "stateId": 41
      },
      {
        "id": 5726,
        "name": "Thermal Power Project",
        "stateId": 41
      },
      {
        "id": 5727,
        "name": "Tinsukia",
        "stateId": 41
      },
      {
        "id": 5728,
        "name": "Titagarh",
        "stateId": 41
      },
      {
        "id": 5729,
        "name": "Tufanganj",
        "stateId": 41
      },
      {
        "id": 5730,
        "name": "Ukhra",
        "stateId": 41
      },
      {
        "id": 5731,
        "name": "Ula",
        "stateId": 41
      },
      {
        "id": 5732,
        "name": "Ulubaria",
        "stateId": 41
      },
      {
        "id": 5733,
        "name": "Uttar Durgapur",
        "stateId": 41
      },
      {
        "id": 5734,
        "name": "Uttar Goara",
        "stateId": 41
      },
      {
        "id": 5735,
        "name": "Uttar Kalas",
        "stateId": 41
      },
      {
        "id": 5736,
        "name": "Uttar Kamakhyaguri",
        "stateId": 41
      },
      {
        "id": 5737,
        "name": "Uttar Latabari",
        "stateId": 41
      },
      {
        "id": 5738,
        "name": "Uttar Mahammadpur",
        "stateId": 41
      },
      {
        "id": 5739,
        "name": "Uttar Pirpur",
        "stateId": 41
      },
      {
        "id": 5740,
        "name": "Uttar Raypur",
        "stateId": 41
      },
      {
        "id": 5741,
        "name": "Uttarpara-Kotrung",
        "stateId": 41
      }
    ], {});
  },

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('cities', null, {});
}
};