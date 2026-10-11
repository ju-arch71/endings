let currentQuestion=1;

let O=0;
let C=0;
let E=0;
let A=0;
let N=0;

const HIGH = 10;
const LOW = -10;

const endings = [
    {
        name: "伝説の人",
        conditions: { O: "high", C: "high", E: "high", N: "low" }
    },
    {
        name: "人脈の人",
        conditions: { C: "high", E: "high", A: "high" }
    },
    {
        name: "家族の人",
        conditions: { C: "high", E: "low", A: "high" }
    },
    {
        name: "放浪者",
        conditions: { O: "high", C: "low", E: "low" }
    },
    {
        name: "完璧主義者",
        conditions: { O: "low", C: "high", N: "high" }
    },
    {
        name: "挑戦者",
        conditions: { O: "high", E: "high", N: "low" }
    },
    {
        name: "孤独な人",
        conditions: { C: "low", E: "low", A: "low", N: "high" }
    },
    {
        name: "後悔する人",
        conditions: { O: "low", C: "low", N: "high" }
    }
];

function getLevel(value) {
    if (value >= HIGH) return "high";
    if (value <= LOW) return "low";
    return "mid";
}

function checkEnd() {
    const scores = { O, C, E, A, N };

    // 各要素が「高・中間・低」のどれかを取得
    const levels = {};

    for (const key in scores) {
        levels[key] = getLevel(scores[key]);
    }

    // 条件に一致する数を数える
    let bestEnding = endings[0];
    let bestScore = -1;

    for (const ending of endings) {
        let score = 0;

        for (const key in ending.conditions) {
            if (levels[key] === ending.conditions[key]) {
                score++;
            }
        }

        // より多くの条件に一致したエンドを採用
        // 同点なら endings 内で先に書かれたエンドを優先
        if (score > bestScore) {
            bestScore = score;
            bestEnding = ending;
        }
    }

    return bestEnding.name;
}


function nextQuestion(button){
    console.log("選んだ選択肢"+ button.textContent);
    
    O += Number(button.dataset.o);
    C += Number(button.dataset.c);
    E += Number(button.dataset.e);
    A += Number(button.dataset.a);
    N += Number(button.dataset.n);

    console.log("O:", O);
    console.log("C:", C);
    console.log("E:", E);
    console.log("A:", A);
    console.log("N:", N);


    if (currentQuestion===1){
        document.getElementById("question1").textContent=
        "公園に遊びに来たあなた。何をして遊ぶ？";

        document.getElementById("choice1").textContent=
        "一人で砂場にいた子に声をかける"

        document.getElementById("choice1").dataset.o = "1";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "2";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "一緒にきた友達とサッカーを始める"

        document.getElementById("choice2").dataset.o = "0";
        document.getElementById("choice2").dataset.c = "0";
        document.getElementById("choice2").dataset.e = "2";
        document.getElementById("choice2").dataset.a = "1";
        document.getElementById("choice2").dataset.n = "-1";

        document.getElementById("choice3").textContent=
        "草むらの虫を観察する"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "1";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "0";
        document.getElementById("choice3").dataset.n = "0";

        currentQuestion=2;
    }
    else if (currentQuestion===2){
        document.getElementById("question1").textContent=
        "小学校高学年になった。そろそろ、中学受験をするのかそれとも地元の中学へ行くか決めなければならない...";

        document.getElementById("choice1").textContent=
        "中学受験をしない。地元の中学校へいく。おそらく今の友人の半分くらいは地元の中学校に行くだろう。"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "中学受験する。今の生活を続ければ合格を狙える学校。そこそこ魅力的で無理なく挑戦できる。友人と遊ぶ時間は少し減るだろう。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "中学受験する。「ここにいけたらすごい」と思える学校。合格には今まで以上の努力が必要。友人と遊ぶ時間はとても減るだろう。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=3;
    }
    else if (currentQuestion===3){
        document.getElementById("question1").textContent=
        "やがて中学受験が終わる。あなたは小学校を卒業し、中学生になった。日々刺激的で何気ない日々を過ごしている。今日は席替えの日らしい。友人が「好きな席を選べるなら、どこがいい？」と聞いてきた。好きな席を選べるとしたらどこを選ぶ？";

        document.getElementById("choice1").textContent=
        "みんなと話せる教室の中心の席"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "先生と話せる教卓の真ん前の席"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "教室すみっこ窓際の後ろの席"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=4;
    }

    else if (currentQuestion===4){
        document.getElementById("question1").textContent=
        "大きな出来事もなく中学生を終え、高校生になる。今は高校2年生だ。部活の後輩に突然告白された。しかし、大してその人を知らない...。どうしようか";

        document.getElementById("choice1").textContent=
        "告白を受けてみる。拒否感はなくむしろ嬉しい。無理なら、そう思った時に別れればいい。"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "答えを保留にする。拒否感はなく、戸惑いを感じる。まずは友達からでよろしく、と答える。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "断る。少し拒否感を感じる。大して知らない人を恋人にしたくないし、なりたくない。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=5;
    }

    else if (currentQuestion===5){
        document.getElementById("question1").textContent=
        "高校生活を終え、受験期を超えた。やがてあなたは大学生になる。大学の夏休みが始まった。授業もしばらくなく、予定を入れなければかなり自由に時間を使える。せっかくの長期休暇だが特にやらなければならないことはない。どうしようか。";

        document.getElementById("choice1").textContent=
        "新しいことに挑戦する。多少刺激的なこともしようと思う。「せっかく時間があるのだから普段できないことをしてみよう」と考える"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "趣味に時間を使う。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "友人と予定を立てて遊ぶ。友人に声をかけて旅行や遊びの予定をいくつか立てる。一人で過ごすよりも誰かと一緒に楽しい時間を過ごしたい。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=6;
    }

    else if (currentQuestion===6){
        document.getElementById("question1").textContent=
        "高校生活を終え、受験期を超えた。やがてあなたは大学生になる。大学の夏休みが始まった。授業もしばらくなく、予定を入れなければかなり自由に時間を使える。せっかくの長期休暇だが特にやらなければならないことはない。どうしようか。";

        document.getElementById("choice1").textContent=
        "新しいことに挑戦する。多少刺激的なこともしようと思う。「せっかく時間があるのだから普段できないことをしてみよう」と考える"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "趣味に時間を使う。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "友人と予定を立てて遊ぶ。友人に声をかけて旅行や遊びの予定をいくつか立てる。一人で過ごすよりも誰かと一緒に楽しい時間を過ごしたい。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=7;
    }

    else if (currentQuestion===7){
        document.getElementById("question1").textContent=
        "高校生活を終え、受験期を超えた。やがてあなたは大学生になる。大学の夏休みが始まった。授業もしばらくなく、予定を入れなければかなり自由に時間を使える。せっかくの長期休暇だが特にやらなければならないことはない。どうしようか。";

        document.getElementById("choice1").textContent=
        "新しいことに挑戦する。多少刺激的なこともしようと思う。「せっかく時間があるのだから普段できないことをしてみよう」と考える"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "趣味に時間を使う。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "友人と予定を立てて遊ぶ。友人に声をかけて旅行や遊びの予定をいくつか立てる。一人で過ごすよりも誰かと一緒に楽しい時間を過ごしたい。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=8;
    }

    else if (currentQuestion===8){
        document.getElementById("question1").textContent=
        "大きな出来事もなく中学生を終え、高校生になる。今は高校2年生だ。部活の後輩に突然告白された。しかし、大してその人を知らない...。どうしようか";

        document.getElementById("choice1").textContent=
        "告白を受けてみる。拒否感はなくむしろ嬉しい。無理なら、そう思った時に別れればいい。"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "答えを保留にする。拒否感はなく、戸惑いを感じる。まずは友達からでよろしく、と答える。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "断る。少し拒否感を感じる。大して知らない人を恋人にしたくないし、なりたくない。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=9;
    }

    else if (currentQuestion===9){
        document.getElementById("question1").textContent=
        "高校生活を終え、受験期を超えた。やがてあなたは大学生になる。大学の夏休みが始まった。授業もしばらくなく、予定を入れなければかなり自由に時間を使える。せっかくの長期休暇だが特にやらなければならないことはない。どうしようか。";

        document.getElementById("choice1").textContent=
        "新しいことに挑戦する。多少刺激的なこともしようと思う。「せっかく時間があるのだから普段できないことをしてみよう」と考える"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "趣味に時間を使う。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "友人と予定を立てて遊ぶ。友人に声をかけて旅行や遊びの予定をいくつか立てる。一人で過ごすよりも誰かと一緒に楽しい時間を過ごしたい。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=10;
    }

    else if (currentQuestion===10){
        document.getElementById("question1").textContent=
        "高校生活を終え、受験期を超えた。やがてあなたは大学生になる。大学の夏休みが始まった。授業もしばらくなく、予定を入れなければかなり自由に時間を使える。せっかくの長期休暇だが特にやらなければならないことはない。どうしようか。";

        document.getElementById("choice1").textContent=
        "新しいことに挑戦する。多少刺激的なこともしようと思う。「せっかく時間があるのだから普段できないことをしてみよう」と考える"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "趣味に時間を使う。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "友人と予定を立てて遊ぶ。友人に声をかけて旅行や遊びの予定をいくつか立てる。一人で過ごすよりも誰かと一緒に楽しい時間を過ごしたい。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=11;
    }

    else if (currentQuestion===11){
        document.getElementById("question1").textContent=
        "高校生活を終え、受験期を超えた。やがてあなたは大学生になる。大学の夏休みが始まった。授業もしばらくなく、予定を入れなければかなり自由に時間を使える。せっかくの長期休暇だが特にやらなければならないことはない。どうしようか。";

        document.getElementById("choice1").textContent=
        "新しいことに挑戦する。多少刺激的なこともしようと思う。「せっかく時間があるのだから普段できないことをしてみよう」と考える"

        document.getElementById("choice1").dataset.o = "0";
        document.getElementById("choice1").dataset.c = "0";
        document.getElementById("choice1").dataset.e = "1";
        document.getElementById("choice1").dataset.a = "2";
        document.getElementById("choice1").dataset.n = "-1";

        document.getElementById("choice2").textContent=
        "趣味に時間を使う。"

        document.getElementById("choice2").dataset.o = "1";
        document.getElementById("choice2").dataset.c = "2";
        document.getElementById("choice2").dataset.e = "0";
        document.getElementById("choice2").dataset.a = "0";
        document.getElementById("choice2").dataset.n = "0";


        document.getElementById("choice3").textContent=
        "友人と予定を立てて遊ぶ。友人に声をかけて旅行や遊びの予定をいくつか立てる。一人で過ごすよりも誰かと一緒に楽しい時間を過ごしたい。"

        document.getElementById("choice3").dataset.o = "2";
        document.getElementById("choice3").dataset.c = "2";
        document.getElementById("choice3").dataset.e = "-1";
        document.getElementById("choice3").dataset.a = "-1";
        document.getElementById("choice3").dataset.n = "1";


        currentQuestion=12;
    }



    else if (currentQuestion===12){
        
        console.log("最終結果");
        console.log("O:", O);
        console.log("C:", C);
        console.log("E:", E);
        console.log("A:", A);
        console.log("N:", N);

        let end =checkEnd();

        console.log("エンド：",end);

        document.getElementById("question1").textContent=
        "エンド："+ end;

        document.getElementById("O").textContent=O;
        document.getElementById("C").textContent=C;
        document.getElementById("E").textContent=E;
        document.getElementById("A").textContent=A;
        document.getElementById("N").textContent=N;

        document.getElementById("result").style.display="block";

        
        document.getElementById("choice1").style.display="none";
        document.getElementById("choice2").style.display="none";
        document.getElementById("choice3").style.display="none";
    }

}
