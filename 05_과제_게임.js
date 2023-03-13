// 배팅 
    // 20판을 할 거임 (20판을 시작하기 전)
    // 2000원 이상 배팅액을 걸어야 함 
    // 배팅 금액 2만원이 있음. 

    
// 배팅금액 = 프롬프트로 해서 얻기 
//     이거 걸 때, 최소 금액 2000원 
//     최대 금액, 2만원. 

let min_batting_money = 2000;

// 현재 있는 돈 
let money_in_pocket = 20000; 

// 디폴트 배팅 금액 
let batting_money = 0


// 반복문 종료조건으로 넣어야 하는 건? 
    // 돈을 제대로 걸었을 때 - 종료? 
    // 게임 종료 조건? 
while ( batting_money < min_batting_money || batting_money > money_in_pocket ) {

    // 돈을 걸게 하기 
        // 배팅한 거 확인하기 
            // - 숫자 맞는지 확인 
            // - 가지고 있는 돈을 넘은거 아닌지 확인 
            // - 2000원 이하면, 다시 걸게 하기 
    let batting_money = parseInt(prompt(`배팅 금액을 걸어주세요~~~~~ \n 최소 : ${min_batting_money} | 현재배팅가능금액 : ${money_in_pocket}`));


    // 숫자인지 확인하게 하기 
        // isNan? = 숫자가 아니냐? 
            // 숫자가 아니면 = true 
            // 숫자면 false 
    if(isNaN(batting_money)){
        // true 임 = 문자가 들어옴 = 다시 입력하게 해야 함. 
        // console.log(`문자가 들어와서 다시 입력 | ${batting_money}`)
    
        // 다시 입력하게 해야 함
            // 이게 맨 위로 가게 한다고? 📛📛📛📛📛 
            // 이쪽으로 오게 되면, 암것도 하지 않고, '다음 실행' 을 하게 된다? ⭐⭐⭐⭐⭐
        continue;

    } 


    // 배팅 금액의 최소 조건과 최대조건이 맞는지 확인
    if ( min_batting_money > batting_money || money_in_pocket < batting_money) {
        // 최소 금액 이상은 입력 해야 함 -> 다시 입력 해야 함. 
        // 가지고 있는 금액 보다 많이 입력함 -> 다시 입력 해야 함. 
        // console.log(`배팅금액이 너무 적거나, 배팅 금액이 너무 많음 \n 배팅 최소 금액 : ${min_batting_money} | 네 수중에 있는 돈 : ${money_in_pocket}`)
    
    
        // 다시 입력하게 해야 함
        // 이게 맨 위로 가게 한다고? 📛📛📛📛📛 
        continue;
    }
    
    // 이거 말고 다른 방법 없나. 으음. 📛📛📛 
    if (min_batting_money <= batting_money || money_in_pocket >= batting_money) {
        
        // 배팅금액 확인
        console.log(`${batting_money} 배팅 금액을 확인하고 싶음 : 이건 while 문 안`)
        
        // 배팅 금액 저장 
        var final_batting_money = batting_money 
        break;
    }
    
}

// 🟦 배팅금액 확인
    // var 변수를 써야만 하나 😥😥😥😥😥 / 음... 찍었는데, 이게 범위 관련된건가? 
console.log(`${final_batting_money} 배팅 금액을 확인하고 싶음 : 이건 while 문 밖✅✅`)



// 선공 게임 시작 

let 컴퓨터가낼수있는것 = ['가위', '바위', '보'];

let 컴퓨터가위바위보첫판에서내는것 = 컴퓨터가낼수있는것 [parseInt((Math.random() * 3))]

var 선공 = ["선공미정"];

let play = true;


// 선 잡기 게임 시작
while(play){
    
    let user가첫판에서내는것 = prompt("가위, 바위, 보 중 하나를 입력하세요");


    switch (user가첫판에서내는것) {
        
        case "가위":
            
            if (컴퓨터가위바위보첫판에서내는것 == '가위') {
                // 비김
                console.log("유저 : 비김 -> 다시 가위바위보 해야 함");
                // 선 안 정해짐 -> 다시 가위바위보 해야 함.
                play = true;
                
            } else if (컴퓨터가위바위보첫판에서내는것 == '바위') {
                // 선 부여하기 
                console.log("유저 : 짐 -> 선공은 컴터");
                선공[0] = "컴퓨터" ;
                console.log(`선공은? ${선공[0]}, 선잡기 게임 끝`)
                // 선 정했으니까 -> 가위바위보 끝
                play = false;
    
            } else {
                // 선 부여하기 
                console.log("유저 : 이김 -> 선공은 유저!")
                선공[0] = "유저"
                console.log(`선공은? ${선공[0]}, 선잡기 게임 끝`)
                // 선 정했으니까 -> 가위바위보 끝
                play = false;
            }
            break;
            

        case "바위":
            
            if (컴퓨터가위바위보첫판에서내는것 == '가위') {
                // 유저가 이김
                console.log("유저 : 이김");
                // 선 안 정해짐 -> 다시 가위바위보 해야 함.
                선공[0] = "유저";
                // 선 정했으니까 -> 가위바위보 끝
                play = false;
                
            } else if (컴퓨터가위바위보첫판에서내는것 == '바위') {
                // 비김 -> 다시 처음부터 플레이 시작 
                play = true;
                    
            } else {
                // 선 부여하기 
                선공[0] = "컴퓨터"
                console.log(`선공은? ${선공[0]}, 선잡기 게임 끝`)
                // 선 정했으니까 -> 가위바위보 끝
                play = false;
            }
            break;
            

        case "보":
            
            if (컴퓨터가위바위보첫판에서내는것 == '가위') {
                // 컴퓨터가 이김
                console.log("유저 : 졌음");
                // 선 안 정해짐 -> 다시 가위바위보 해야 함.
                선공[0] = "컴퓨터";
                // 선 정했으니까 -> 가위바위보 끝
                play = false;
                
            } else if (컴퓨터가위바위보첫판에서내는것 == '바위') {
                // 유저 이김 -> 
                선공[0] = "유저"; 
                 // 선 정했으니까 -> 가위바위보 끝
                 play = false;               
                
            } else {
                // 비김
                play = true;

            }
            break;

         



        default:
            break;
    }
    
}
// 선공 확인
console.log(`선공은 누구? ${선공[0]} 임!`)





// 묵찌빠 게임 시작 
let 컴퓨터가묵찌빠에서낼수있는것 = ['가위', '바위', '보'];
// let 컴퓨터가묵찌빠에서낸거 = 컴퓨터가묵찌빠에서낼수있는것 [parseInt((Math.random() * 3))]
// console.log(`지금 컴터가 낸 묵찌빠는 ${컴퓨터가묵찌빠에서낸거} 이거임`)


let count_mookjiba = 1;


// 선공에 담겨 있는지 확인 
console.log(선공[0]);

let play_mookjiba = true;


// 종료조건 : 돈 다 잃었으면 끝 / 20 판 다 끝나면 끝
while ( play_mookjiba ) {
    
    // 유저가 내는 건 + 현 상황 
    let user가묵찌빠에서내는것 = prompt(`
    배팅한 금액 ${final_batting_money} \n
    현재선공은 ${선공[0]}, \n
    묵찌빠에요, 가위, 바위, 보 중 하나를 입력하세요
    현재 게임 횟수 ${count_mookjiba} \n
    현재 수중에 있는 돈 ${money_in_pocket} `);
    

    // 횟수 카운트 
    console.log(`${count_mookjiba} 게임 하고 있는 횟수!`)
    count_mookjiba ++
    if (count_mookjiba == 6) {
        break;
    }

    // 컴터가 묵찌빠 내는거 
    let 컴퓨터가묵찌빠에서낸거 = 컴퓨터가묵찌빠에서낼수있는것 [parseInt((Math.random() * 3))]
    console.log(`지금 컴터가 낸 묵찌빠는 ${컴퓨터가묵찌빠에서낸거} 이거임`)



    // 유저가 선공 잡은 경우
    switch ( 선공[0] ) {

        case "유저" :
            
            if (컴퓨터가묵찌빠에서낸거 == "가위" && user가묵찌빠에서내는것 =="가위" ) {
        
                // 여전히 선공 유저 
                선공[0] = "유저"; 
                // 배팅금액 주기
                money_in_pocket = money_in_pocket + (final_batting_money * 2);
                console.log(`2배 적립~~~ 지금 수중에 있는 돈은 ${money_in_pocket} 에요~`)

                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍, 유저가 돈 땄네요`) 

                // 다시 play
                play_mookjiba = true;

            } else if (컴퓨터가묵찌빠에서낸거 = "가위" && user가묵찌빠에서내는것 == "바위") {
                // 선공 유저 유지
                선공[0] = "유저";

                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍, 유저가 공격권만 유지했네요`) 


                // 조건이 변화한 상태로 다시 play => 이걸 continue 로? ⭐⭐⭐⭐⭐ 
                // continue; 
                // 다시 게임 하게 하는 걸 true 로? 
                play_mookjiba = true;


            } else if (컴퓨터가묵찌빠에서낸거 = "가위" && user가묵찌빠에서내는것 == "보"){
                // 선공 컴터로 변환
                선공[0] = "컴퓨터";

                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! / 컴터가 이겼어요 / 컴터 선공👍👍👍`) 


                // 다시 play => 이걸 continue 로? 
                // continue;
                play_mookjiba = true;

            } else if (컴퓨터가묵찌빠에서낸거 = "바위" && user가묵찌빠에서내는것 =="가위") {
                // 누가 이겨? -> 선공 여부 
                선공[0] = "컴퓨터";

                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 

                // 다시 첨으로 가기 
                // continue;
                play_mookjiba = true;

            } else if (컴퓨터가묵찌빠에서낸거 = "바위" && user가묵찌빠에서내는것 =="바위") {
                // 이겨 = 선공 
                선공[0] = "유저"

                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 

                // 배팅 금액 줄게요 
                money_in_pocket = money_in_pocket + (final_batting_money * 2);
                console.log(`2배 적립~~~ 지금 수중에 있는 돈은 ${money_in_pocket} 에요~`)
                // continue; (또 게임 하게 하기)
                play_mookjiba = true;

            } else if (컴퓨터가묵찌빠에서낸거 = "바위" && user가묵찌빠에서내는것 =="보"){
                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 
                
                // 선공부여
                선공[0] = "유저"

            } else if (컴퓨터가묵찌빠에서낸거 = "보" && user가묵찌빠에서내는것 =="가위") {
                // 선공부여
                선공[0] = "유저"
                
                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 
                
                // continue;
                play_mookjiba = true;

            } else if (컴퓨터가묵찌빠에서낸거 = "보" && user가묵찌빠에서내는것 =="바위") {
                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 

                // 선공부여 
                선공[0] = "컴퓨터"
                // continue;
                play_mookjiba = true;

            } else if (컴퓨터가묵찌빠에서낸거 = "보" && user가묵찌빠에서내는것 =="보") {
                // 현상황 확인 
                console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 
                
                // 이겼으니까, 배팅금액 주기 
                money_in_pocket = money_in_pocket + (final_batting_money * 2);
                console.log(`2배 적립~~~ 지금 수중에 있는 돈은 ${money_in_pocket} 에요~`)

                // 선공 부여
                선공[0] = "유저"

                // continue;
                play_mookjiba = true;

            }
            
            
            // 컴퓨터가 선공 잡은 경우
            switch (선공[0]) {
        
                case "컴퓨터" :
                    
                    if (컴퓨터가묵찌빠에서낸거 == "가위" && user가묵찌빠에서내는것 =="가위" ) {
        
                        // 현상황 확인 
                        console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! / 컴터가 이겼네요`) 
                        
                        // 배팅금액 
                        money_in_pocket = money_in_pocek - (final_batting_money * 2);
                        console.log(`2배 차감~😥😥 지금 수중에 있는 돈은 ${money_in_pocket} 에요~`)
                        
                        // 여전히 선공 유저 
                        선공[0] = "컴퓨터";

                        // 다시 play / continue 는?   
                        play_mookjiba = true;

                    } else if (컴퓨터가묵찌빠에서낸거 = "가위" && user가묵찌빠에서내는것 == "바위") {
                        // 현상황 확인 
                        console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! / user 한테 선공 넘어갔네요 👍👍👍`) 


                        // 선공 유저 유지
                        선공[0] = "유저";

                        // 조건이 변화한 상태로 다시 play => 이걸 continue 로? ⭐⭐⭐⭐⭐ 
                        // continue;
                        play_mookjiba = true;

        
                    } else if (컴퓨터가묵찌빠에서낸거 = "가위" && user가묵찌빠에서내는것 == "보"){
                        // 현상황 확인 
                        console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 컴터한테 선공넘어갔네요`) 

                        // 선공 컴터로 변환
                        선공[0] = "컴퓨터";

                        // 다시 play => 이걸 continue 로? 
                        // continue;
                        play_mookjiba = true;

                    } else if (컴퓨터가묵찌빠에서낸거 = "바위" && user가묵찌빠에서내는것 =="가위") {
                        // 현상황 확인 
                        console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 컴터한테 선공 넘어갔네요`) 
                    

                        // 누가 이겨? -> 선공 여부 
                        선공[0] = "컴퓨터";

                        // 다시 첨으로 가기 
                        // continue;
                        play_mookjiba = true;

                    } else if (컴퓨터가묵찌빠에서낸거 = "바위" && user가묵찌빠에서내는것 =="바위") {
                         // 현상황 확인 
                         console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 
 

                        // 이겨 = 선공 
                        선공[0] = "컴퓨터"

                        // 배팅금액 
                        money_in_pocket = money_in_pocek - (final_batting_money * 2);
                        console.log(`2배 차감~😥😥 지금 수중에 있는 돈은 ${money_in_pocket} 에요~`)
                        
                        // continue;
                        play_mookjiba = true;

                    } else if (컴퓨터가묵찌빠에서낸거 = "바위" && user가묵찌빠에서내는것 =="보"){
                         // 현상황 확인 
                         console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 
                        
                        
                        선공[0] = "유저"
                        // 배팅금액 2배 받기 
                        play_mookjiba = true;


                    } else if (컴퓨터가묵찌빠에서낸거 = "보" && user가묵찌빠에서내는것 =="가위") {
                         // 현상황 확인 
                         console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 
 
                        
                        선공[0] = "유저"
                        // continue;
                        play_mookjiba = true;

                    } else if (컴퓨터가묵찌빠에서낸거 = "보" && user가묵찌빠에서내는것 =="바위") {
                         // 현상황 확인 
                         console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 
 
                        
                        선공[0] = "컴퓨터"
                        // continue;
                        play_mookjiba = true;

                    } else if (컴퓨터가묵찌빠에서낸거 = "보" && user가묵찌빠에서내는것 =="보") {
                         // 현상황 확인 
                         console.log(` 지금 ${count_mookjiba} 번째 결과 났어요~! 👍👍👍`) 
 
                        
                        // 이겼으니까, 배팅금액 주기 
                        money_in_pocket = money_in_pocek - (final_batting_money * 2);
                        console.log(`2배 차감~😥😥 지금 수중에 있는 돈은 ${money_in_pocket} 에요~`)

                        // 선공 정하기 
                        선공[0] = "컴퓨터"

                        // continue;
                        play_mookjiba = true;

                    }
            break;
    

            default:
                break;
    }
    

}

}

