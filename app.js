//問題文を定義
const quiz = [
  {
    question:'ゲーム市場、最も売れたゲームは？',
    answers:[ 
    'スーパーファミコン',
    'プレーステーション２',
    '任天堂スイッチ',
    '任天堂DS'
    ],
    correct:'任天堂DS'
  },{
    question:'柾駿の苗字は？',
    answers:[
      '佐藤',
      '坂井',
      '実誠',
      '咲洲'
    ],
    correct:'坂井'
  },{
    question:'ハリーの最初の友達は？',
    answers:[
      'ハーマイオニー',
      'ロン',
      'マルフォイ',
      'ダドリー'
    ],
    correct:'ロン'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

//クエスチョンがhtmlに代入される。
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();



const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength+ 'です');

  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}





//ボタンを押したら正誤判定
// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//  clickHandler(e);
// });