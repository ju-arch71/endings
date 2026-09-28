let currentQuestion=1;

let plus=0;
let minus=0;
let enjoy=0;

function nextQuestion(choice){
    console.log("選んだ選択肢"+ choice);
    if (choice===1){
        enjoy++;
    }
    else if (choice===2){
        plus++;
    }
    else if (choice===3){
        minus++;
    }
    console.log("plus",plus);
    console.log("minus",minus);

    if (currentQuestion===1){
        document.getElementById("question1").textContent=
        "公園に遊びに来たあなた。何をして遊ぶ？";
        document.getElementById("choice1").textContent=
        "一人で砂場にいた子に声をかける"
        document.getElementById("choice2").textContent=
        "一緒にきた友達とサッカーを始める"
        document.getElementById("choice3").textContent=
        "草むらの虫を観察する"
        currentQuestion=2;
    }
    else if (currentQuestion===2){
        document.getElementById("question1").textContent=
        "小学校高学年になった。そろそろ、中学受験をするのかそれとも地元の中学へ行くか決めなければならない...";
        document.getElementById("choice1").textContent=
        "中学受験をしない。地元の中学校へいく。おそらく今の友人の半分くらいは地元の中学校に行くだろう。"
        document.getElementById("choice2").textContent=
        "中学受験する。今の生活を続ければ合格を狙える学校。そこそこ魅力的で無理なく挑戦できる。友人と遊ぶ時間は少し減るだろう。"
        document.getElementById("choice3").textContent=
        "中学受験する。「ここにいけたらすごい」と思える学校。合格には今まで以上の努力が必要。友人と遊ぶ時間はとても減るだろう。"
        currentQuestion=3;
    }
    else if (currentQuestion===3){
        if (enjoy>plus && enjoy>minus){
            document.getElementById("question1").textContent=
            "エンドC:enjoyな人生";
        }
        
        else if(plus>minus){
            document.getElementById("question1").textContent=
            "エンドA：プラス＞マイナス";
        }
        else if(minus>plus){
            document.getElementById("question1").textContent=
            "エンドB:マイナス＞プラス";
        }
        document.getElementById("choice1").style.display="none";
        document.getElementById("choice2").style.display="none";
        document.getElementById("choice3").style.display="none";
    }

}
