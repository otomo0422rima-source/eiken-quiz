const quizzes = {
    5: [
        {
          question: "This is a ( ).",
          jp: "これは犬です。",
          choices: ["dog", "cat", "book", "pen"],
          answer: 0
        },
        {
          question: "I have a ( ).",
          jp: "私はペンを持っています。",
          choices: ["dog", "pen", "apple", "car"],
          answer: 1
        },
        {
          question: "She is a ( ).",
          jp: "彼女は学生です。",
          choices: ["teacher", "doctor", "student", "boy"],
          answer: 2
        },
        {
          question: "This is my ( ).",
          jp: "これは私の本です。",
          choices: ["cat", "desk", "chair", "book"],
          answer: 3
        },
        {
          question: "I like ( ).",
          jp: "私はりんごが好きです。",
          choices: ["cars", "dogs", "pens", "apples"],
          answer: 3
        }
      ],
      
      
    4: [
      {
        question: "She ( ) a bike.",
        jp: "彼女は自転車を持っています。",
        choices: ["have", "has", "had", "having"],
        answer: 1,
        explanation: "三人称単数の現在形は has になります。"
      }
    ],
    3: [
        {
          question: "I ( ) soccer after school.",
          jp: "私は放課後にサッカーをします。",
          choices: ["play", "plays", "played", "playing"],
          answer: 0,
          explanation: "主語が I の現在形では動詞の原形を使います。"
        },
        {
          question: "She ( ) to school by bike every day.",
          jp: "彼女は毎日自転車で学校に行きます。",
          choices: ["go", "goes", "went", "going"],
          answer: 1,
          explanation: "三人称単数の現在形では動詞に s がつきます。"
        },
        {
          question: "There ( ) many books on the desk.",
          jp: "机の上にはたくさんの本があります。",
          choices: ["is", "are", "was", "be"],
          answer: 1,
          explanation: "books は複数形なので are を使います。"
        },
        {
          question: "He was tired, ( ) he kept studying.",
          jp: "彼は疲れていましたが、勉強を続けました。",
          choices: ["and", "but", "or", "because"],
          answer: 1,
          explanation: "前後が逆の内容なので but が適切です。"
        },
        {
          question: "I like music ( ) makes me happy.",
          jp: "私は私を幸せにしてくれる音楽が好きです。",
          choices: ["who", "which", "where", "what"],
          answer: 1,
          explanation: "物を説明する関係代名詞には which を使います。"
        },
        {
          question: "She wants ( ) a doctor in the future.",
          jp: "彼女は将来医者になりたいと思っています。",
          choices: ["be", "to be", "being", "been"],
          answer: 1,
          explanation: "want の後ろは to + 動詞の原形になります。"
        },
        {
          question: "We enjoyed ( ) in the park.",
          jp: "私たちは公園で遊ぶのを楽しみました。",
          choices: ["play", "to play", "playing", "played"],
          answer: 2,
          explanation: "enjoy の後ろは動名詞（〜ing）を使います。"
        },
        {
          question: "This book is ( ) than that one.",
          jp: "この本はあの本よりも面白いです。",
          choices: ["interesting", "more interesting", "most interesting", "interest"],
          answer: 1,
          explanation: "長い形容詞の比較級は more を使います。"
        },
        {
          question: "He didn’t have ( ) time to finish his homework.",
          jp: "彼は宿題を終える時間がありませんでした。",
          choices: ["many", "much", "few", "a few"],
          answer: 1,
          explanation: "time は数えられない名詞なので much を使います。"
        },
        {
          question: "If it ( ) tomorrow, I will stay home.",
          jp: "もし明日雨が降ったら、私は家にいます。",
          choices: ["rain", "rains", "rained", "raining"],
          answer: 1,
          explanation: "if の中では未来のことでも現在形を使います。"
        }
      ],
      
    "準2": [
      {
        question: "He is good at ( ) English.",
        jp: "彼は英語が得意です。",
        choices: ["speak", "speaking", "spoke", "speaks"],
        answer: 1,
        explanation: "前置詞 at の後ろは動名詞になります。"
      }
    ],
    2: [
      {
        question: "She suggested that he ( ) earlier.",
        jp: "彼女は彼がもっと早く出発することを提案した。",
        choices: ["leave", "leaves", "left", "leaving"],
        answer: 0,
        explanation: "suggest の後の that 節では動詞は原形になります。"
      }
    ],
    1: [
      {
        question: "The politician tried to ( ) the issue to gain support.",
        jp: "その政治家は支持を得るために問題を利用しようとした。",
        choices: ["exploit", "explore", "expand", "expose"],
        answer: 0,
        explanation: "exploit は『利用する』という意味です。"
      }
    ]
  };
  