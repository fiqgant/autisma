export default {
  places: [
    {
      id: 0,
      text: "Taman Bermain",
      icon: "/img/places_icons/Playground_icon.svg",
      requiredStars: 0,
      image: "/places_backgrounds/Playground.png",
      width: "20vw",
      coordinates: [42, 69],
      interactions: [
        {
          id: 1,
          text: "Leonie & Jan",
          question: [
            "Bisakah kamu mengatakan apa yang dirasakan Leonie dan Jan?",
            "Pilih semua kata yang cocok"
          ],
          image: "/img/interactions/Slide_happy",
          coordinates: [39, 65],
          width: "30vw",
          requiredStars: 0,
          answers: [
            {
              id: 2,
              text: "Senang",
              correct: true,
              response: "Benar! Mereka bersenang-senang."
            },
            {
              id: 3,
              text: "Sedih",
              correct: false,
              response: "Lihat lagi! Apakah mereka cemberut?"
            },
            {
              id: 4,
              text: "Puas",
              correct: true,
              response: "Benar! Mereka tersenyum."
            },
            {
              id: 5,
              text: "Menangis",
              correct: false,
              response: "Lihat lagi! Apakah kamu melihat air mata?"
            },
            {
              id: 6,
              text: "Murung",
              correct: false,
              response: "Lihat lagi! Apakah mereka tersenyum?"
            },
            {
              id: 7,
              text: "Marah",
              correct: false,
              response: "Lihat lagi! Apakah ini wajah marah?"
            },
            {
              id: 8,
              text: "Bertengkar",
              correct: false,
              response: "Lihat lagi! Apakah mereka bersenang-senang?"
            },
            {
              id: 9,
              text: "Ceria",
              correct: true,
              response: "Benar! Mereka terlihat ceria."
            }
          ],
          hints: [
            {
              id: 10,
              text: "Lihat wajah mereka, apakah mereka tersenyum?",
              answers: [2, 3]
            },
            {
              id: 11,
              text: "Lihat apakah mereka bersenang-senang?",
              answers: [8, 4]
            },
            {
              id: 11,
              text: "Lihat apakah mereka bersenang-senang?",
              answers: [9, 7]
            }
          ]
        },
        {
          id: 12,
          text: "Reuben & Christina",
          question: [
            "Apa yang bisa kamu katakan tentang situasi ini?",
            "Pilih semua emosi yang cocok"
          ],
          image: "/img/interactions/Fight_ball",
          width: "17vw",
          coordinates: [69, 48],
          requiredStars: 1,
          answers: [
            {
              id: 13,
              text: "Marah",
              correct: true,
              response: "Benar! Mereka terlihat marah."
            },
            {
              id: 14,
              text: "Bersenang-senang",
              correct: false,
              response: "Lihat lagi! Apakah mereka tersenyum?"
            },
            {
              id: 74,
              text: "Kesal",
              correct: true,
              response: "Benar! Mereka terlihat kesal."
            },
            {
              id: 75,
              text: "Terkejut",
              correct: false,
              response: "Lihat lagi! Bagaimana mereka saling memandang?"
            },
            {
              id: 76,
              text: "Agresif",
              correct: true,
              response: "Benar! Mereka kasar satu sama lain."
            },
            {
              id: 77,
              text: "Bersahabat",
              correct: false,
              response: "Lihat lagi! Apakah mereka tersenyum satu sama lain?"
            },
            {
              id: 91,
              text: "Mengantuk",
              correct: false,
              response: "Lihat lagi! Apakah mata mereka terbuka lebar?"
            },
            {
              id: 92,
              text: "Baik",
              correct: false,
              response: "Lihat lagi! Apakah mereka tersenyum satu sama lain?"
            }
          ],
          hints: [
            {
              id: 15,
              text: "Bagaimana mereka saling memandang?",
              answers: [76]
            },
            {
              id: 216,
              text: "Mengapa mereka berdua memegang bola?",
              answers: [13]
            },
            {
              id: 217,
              text: "Bagaimana mereka saling memandang?",
              answers: [74]
            }
          ]
        },
        {
          id: 16,
          text: "Victor",
          question: [
            "Bisakah kamu mengatakan apa yang dirasakan Victor?",
            "Pilih semua emosi yang cocok"
          ],
          image: "/img/interactions/Slide",
          width: "25vw",
          coordinates: ["28", "5"],
          requiredStars: 2,
          answers: [
            {
              id: 17,
              text: "Takut",
              correct: true,
              response: "Benar! Dia terlihat ketakutan."
            },
            {
              id: 18,
              text: "Tenang",
              correct: false,
              response: "Lihat lagi! Perhatikan mata dan mulutnya!"
            },
            {
              id: 19,
              text: "Beristirahat",
              correct: false,
              response: "Lihat lagi! Perhatikan mata dan mulutnya!"
            },
            {
              id: 20,
              text: "Ketakutan",
              correct: true,
              response: "Benar! Dia terlihat ketakutan."
            },
            {
              id: 78,
              text: "Marah",
              correct: false,
              response: "Lihat lagi! Apakah dia memiliki mata yang marah?"
            },
            {
              id: 79,
              text: "Gugup",
              correct: true,
              response: "Benar! Dia terlihat gugup."
            },
            {
              id: 80,
              text: "Agresif",
              correct: false,
              response: "Lihat lagi! Apakah dia membuatmu takut?"
            },
            {
              id: 81,
              text: "Terkejut",
              correct: false,
              response: "Lihat lagi! Perhatikan mata dan mulutnya!"
            }
          ],
          hints: [
            {
              id: 218,
              text: "Perhatikan matanya!",
              answers: [17]
            },
            {
              id: 219,
              text: "Perhatikan mulutnya!",
              answers: [20]
            },
            {
              id: 220,
              text: "Lihat wajahnya, apakah dia tersenyum?",
              answers: [79]
            }
          ]
        },
        {
          id: 82,
          text: "Oli & Jack",
          question: [
            "Bisakah kamu mengatakan apa yang dirasakan Jack?",
            "Pilih semua emosi yang cocok"
          ],
          image: "/img/interactions/Boys_ball",
          width: "15vw",
          coordinates: [41, 37],
          requiredStars: 3,
          answers: [
            {
              id: 83,
              text: "Menderita",
              correct: true,
              response: "Benar! Dia menderita karena lukanya!"
            },
            {
              id: 84,
              text: "Terluka",
              correct: true,
              response: "Benar! Dia terluka!"
            },
            {
              id: 85,
              text: "Kesakitan",
              correct: true,
              response: "Benar! Wajahnya menunjukkan bahwa dia kesakitan!"
            },
            {
              id: 86,
              text: "Senang",
              correct: false,
              response: "Lihat lagi! Apakah dia tersenyum?"
            },
            {
              id: 87,
              text: "Terkagum",
              correct: false,
              response: "Lihat lagi! Apakah matanya berbinar?"
            },
            {
              id: 88,
              text: "Bahagia",
              correct: false,
              response: "Lihat lagi! Apakah dia tersenyum?"
            },
            {
              id: 89,
              text: "Kejam",
              correct: false,
              response: "Lihat lagi! Apakah dia terlihat kejam?"
            },
            {
              id: 90,
              text: "Agresif",
              correct: false,
              response: "Lihat lagi! Apakah dia terlihat jahat?"
            }
          ],
          hints: [
            {
              id: 221,
              text: "Perhatikan matanya!",
              answers: [85]
            },
            {
              id: 222,
              text: "Perhatikan mulutnya!",
              answers: [83]
            },
            {
              id: 223,
              text: "Lihat kakinya yang tertekuk!",
              answers: [84]
            }
          ]
        },
        {
          id: 93,
          text: "Gregor",
          question: [
            "Bisakah kamu mengatakan apa yang dirasakan Gregor?",
            "Pilih semua emosi yang cocok"
          ],
          image: "/img/interactions/Isolation",
          width: "15vw",
          coordinates: [14, 53],
          requiredStars: 3,
          answers: [
            {
              id: 94,
              text: "Sedih",
              correct: true,
              response: "Benar! Dia terlihat sedih."
            },
            {
              id: 95,
              text: "Ingin ikut bermain",
              correct: true,
              response: "Benar! Dia tidak bisa mengalihkan pandangannya dari mereka."
            },
            {
              id: 96,
              text: "Malu",
              correct: true,
              response: "Benar! Dia agak malu."
            },
            {
              id: 97,
              text: "Dia tidak suka sepak bola",
              correct: false,
              response: "Lihat lagi! Apa yang dia lihat?"
            },
            {
              id: 98,
              text: "Dia suka menyendiri",
              correct: false,
              response: "Lihat lagi! Apakah dia terlihat senang?"
            },
            {
              id: 99,
              text: "Dia harus menunggu hingga anak-anak mengajaknya bermain",
              correct: false,
              response: "Pikirkan lagi! Apa yang kamu lakukan saat ingin ikut bermain?"
            }
          ],
          hints: [
            {
              id: 224,
              text: "Perhatikan mata dan alisnya!",
              answers: [94]
            },
            {
              id: 225,
              text: "Apa yang dia lihat?",
              answers: [95]
            },
            {
              id: 227,
              text: "Perhatikan mata dan alisnya!",
              answers: [96]
            }
          ]
        }
      ]
    },
    {
      id: 23,
      text: "Sekolah",
      requiredStars: 2,
      icon: "/img/places_icons/School_icon.svg",
      image: "/places_backgrounds/School.png",
      coordinates: [13, 44],
      width: "15vw",
      interactions: [
        {
          id: 24,
          text: "Di ruang kelas",
          question: [
            "Guru mengajukan pertanyaan.",
            "Pilih semua deskripsi yang cocok dengan situasi ini"
          ],
          image: "/img/interactions/Classroom",
          width: "26vw",
          coordinates: [60, 53],
          answers: [
            {
              id: 25,
              text: "Tidak semua anak tahu jawabannya",
              correct: true,
              response: "Benar!"
            },
            {
              id: 26,
              text: "Beberapa anak masih berpikir",
              correct: true,
              response: "Benar!"
            },
            {
              id: 27,
              text: "Semua anak tahu jawabannya",
              correct: false,
              response: "Lihat lagi."
            },
            {
              id: 28,
              text: "Semua anak tidak tahu jawabannya",
              correct: false,
              response: "Lihat lagi."
            }
          ],
          hints: [
            {
              id: 29,
              text: "Lihat wajah mereka, apakah mereka tersenyum?",
              answers: [16, 17]
            },
            {
              id: 30,
              text: "Lihat apakah mereka bersenang-senang?",
              answers: [14, 15]
            }
          ],
          requiredStars: 0
        },
        {
          id: 31,
          text: "Di papan tulis",
          image: "/img/interactions/Blackboard",
          question: [
            "Bisakah kamu mengatakan apa yang dirasakan anak-anak?",
            "Pilih semua jawaban yang cocok"
          ],
          coordinates: ["30", "51"],
          width: "18vw",
          answers: [
            {
              id: 32,
              text: "Tony tidak tahu jawabannya",
              correct: true,
              response: "Benar!"
            },
            {
              id: 33,
              text: "Martha bersemangat",
              correct: true,
              response: "Benar!"
            },
            {
              id: 100,
              text: "Martha tahu jawabannya",
              correct: true,
              response: "Benar!"
            },
            {
              id: 102,
              text: "Martha tidak tahu jawabannya",
              correct: false,
              response: "Lihat lagi!"
            },
            {
              id: 103,
              text: "Tony tahu jawabannya",
              correct: false,
              response: "Lihat lagi"
            },
            {
              id: 104,
              text: "Tony tidak perlu latihan matematika",
              correct: false,
              response: "Lihat lagi!"
            },
            {
              id: 105,
              text: "Martha perlu banyak latihan matematika",
              correct: false,
              response: "Lihat lagi"
            }
          ],
          hints: [
            {
              id: 34,
              text: "Lihat wajahnya, apakah dia tersenyum?",
              answers: [21, 22]
            }
          ],
          requiredStars: 1
        },
        {
          id: 106,
          text: "Di luar sekolah",
          image: "/img/interactions/Bullying",
          question: ["Ketiga gadis ini sedang...?", "Pilih semua yang cocok"],
          width: "21vw",
          coordinates: ["66", "21"],
          answers: [
            {
              id: 107,
              text: "mengolok-olok gadis itu",
              correct: true,
              response: "Benar!"
            },
            {
              id: 108,
              text: "kejam",
              correct: true,
              response: "Benar!"
            },
            {
              id: 109,
              text: "jahat",
              correct: true,
              response: "Benar!"
            },
            {
              id: 110,
              text: "baik",
              correct: false,
              response: "Lihat lagi!"
            },
            {
              id: 111,
              text: "sopan",
              correct: false,
              response: "Lihat lagi"
            },
            {
              id: 112,
              text: "ramah",
              correct: false,
              response: "Lihat lagi!"
            },
            {
              id: 113,
              text: "peduli",
              correct: false,
              response: "Lihat lagi"
            }
          ],
          hints: [],
          requiredStars: 2
        }
      ]
    },
    {
      id: 35,
      text: "Bandara",
      icon: "/img/places_icons/Airport_icon.svg",
      requiredStars: 6,
      image: "/places_backgrounds/Airport.png",
      coordinates: [48, 27],
      width: "25vw",
      interactions: [
        {
          id: 36,
          text: "Emmanuel & Georgia",
          question: [
            "Apa yang sedang terjadi di sini?",
            "Pilih semua jawaban yang cocok"
          ],
          image: "/img/interactions/Running",
          coordinates: [44, 37],
          width: "18vw",
          requiredStars: 0,
          answers: [
            {
              id: 37,
              text: "Mereka terlambat untuk penerbangan mereka",
              correct: true,
              response: "Benar! Mereka terlihat terlambat."
            },
            {
              id: 38,
              text: "Mereka berlari menuju gerbang penerbangan",
              correct: true,
              response: "Benar!"
            },
            {
              id: 39,
              text: "Gerbang penerbangan akan segera ditutup",
              correct: true,
              response: "Benar!"
            },
            {
              id: 40,
              text: "Mereka tiba lebih awal di bandara",
              correct: false,
              response: "Lihat lagi!"
            },
            {
              id: 141,
              text: "Mereka sedang menunggu di gerbang penerbangan",
              correct: false,
              response: "Lihat lagi!"
            },
            {
              id: 142,
              text: "Gerbang penerbangan mereka belum dibuka",
              correct: false,
              response: "Lihat lagi!"
            }
          ],
          hints: [
            {
              id: 41,
              text: "Lihat wajah mereka, apakah mereka tersenyum?",
              answers: [4, 5]
            },
            {
              id: 42,
              text: "Lihat apakah mereka bersenang-senang?",
              answers: [2, 3]
            }
          ]
        },
        {
          id: 43,
          text: "Francesca & Andy",
          question: [
            "Apa situasi di sini?",
            "Pilih semua jawaban yang cocok"
          ],
          image: "/img/interactions/Hugging",
          coordinates: [74, 58],
          width: "12vw",
          requiredStars: 1,
          answers: [
            {
              id: 44,
              text: "Hanya salah satu dari mereka yang akan bepergian",
              correct: true,
              response: "Benar! Hanya satu yang akan bepergian"
            },
            {
              id: 45,
              text: "Mereka akan merindukan satu sama lain",
              correct: true,
              response: "Benar!"
            },
            {
              id: 143,
              text: "Mereka berada di bandara",
              correct: true,
              response: "Benar!"
            },
            {
              id: 144,
              text: "Mereka bepergian bersama",
              correct: false,
              response: "Lihat lagi!"
            },
            {
              id: 145,
              text: "Salah satu dari mereka menunggu keretanya",
              correct: false,
              response: "Lihat lagi!"
            },
            {
              id: 146,
              text: "Mereka baru bertemu untuk pertama kalinya",
              correct: false,
              response: "Lihat lagi!"
            }
          ],
          hints: [
            {
              id: 46,
              text: "Lihat wajahnya, apakah dia tersenyum?",
              answers: [9, 10]
            }
          ]
        },
        {
          id: 47,
          text: "Gigi & Christine",
          question: ["Gadis-gadis ini sedang...?", "Pilih semua jawaban yang cocok"],
          image: "/img/interactions/Talking",
          coordinates: [14, 43],
          width: "28vw",
          requiredStars: 2,
          answers: [
            {
              id: 48,
              text: "Mereka adalah teman",
              correct: true,
              response: "Bagus!"
            },
            {
              id: 49,
              text: "Mereka bepergian bersama",
              correct: true,
              response: "Benar!"
            },
            {
              id: 50,
              text: "Mereka menunggu penerbangan mereka",
              correct: true,
              response: "Benar!"
            },
            {
              id: 51,
              text: "Mereka tidak saling kenal",
              correct: false,
              response: "Lihat lagi"
            },
            {
              id: 148,
              text: "Mereka menonton film",
              correct: false,
              response: "Lihat lagi"
            },
            {
              id: 149,
              text: "Mereka berada di stasiun kereta",
              correct: false,
              response: "Lihat lagi"
            }
          ],
          hints: [
            {
              id: 52,
              text: "Lihat nama mereka",
              answers: [25, 26]
            },
            {
              id: 53,
              text: "Yang paling tidak buruk dari mereka",
              answers: [27, 28]
            }
          ]
        }
      ]
    }
  ],
  meta: {
    sequence: 73
  }
};
