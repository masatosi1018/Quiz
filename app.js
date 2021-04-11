//問題文を定義
const quiz = [
  {
    question:'冬に寿司ご飯を作る時すぐに硬くなってしまうのを防ぐためには何を少し多めに入れると良いでしょうか？',
    answers:[ 
    '砂糖',
    '塩',
    'お酢',
    'みりん'
    ],
    correct:'砂糖'
  },{
    question:'厚地の物をすぐに乾かすにはどこで干すのが良いでしょうか？',
    answers:[
      '暑い場所',
      '暗い場所',
      '高い場所',
      '広い場所'
    ],
    correct:'高い場所'
  },{
    question:'干しシイタケを早く戻したい場合、何を少し加えるとすぐに戻るでしょうか？',
    answers:[
      '片栗粉',
      'お酢',
      '塩',
      '砂糖'
    ],
    correct:'砂糖'
  },{
    question:'バスで乗り物酔いがしにくい場所はどこでしょうか？',
    answers:[
      ' 一番前',
      '一番後ろ',
      '真ん中の席',
      '運転席'
    ],
    correct:'真ん中の席'
  },{
    question:'レバーのくさみを取るには何を使えば良いでしょうか？',
    answers:[
      '牛乳',
      '食塩水',
      'レモン汁',
      'コーラ'
    ],
    correct:'牛乳'
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





ボタンを押したら正誤判定
$button[0].addEventListener('click', (e) => {
  clickHandler(e);
});
$button[1].addEventListener('click', (e) => {
  clickHandler(e);
});
$button[2].addEventListener('click', (e) => {
  clickHandler(e);
});
$button[3].addEventListener('click', (e) => {
 clickHandler(e);
});