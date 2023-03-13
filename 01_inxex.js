console.log("주말고고고")


for (let i = 0; i < 10; i++) {

    if (i % 3 == 0){
        console.log(i);
        console.log ("선언 > 증가 > 비교 > 실행 ")
        }
}



// 🟦 [컴파일 언어 vs 인터프리터 언어] 
    // 면접 질문으로 나올 수 있음. ⭐⭐⭐⭐⭐
    // 좀 더 이해 필요 📛📛📛📛📛 

    // 컴파일러 언어란? 
        // 프로그램 코드를 컴파일 해서, 컴퓨터가 알아들을 수 있는 기계어로 번역 해준다. 
        // 소스 코드 전체를 한번에 번역하고, 실행 파일을 만들어서 실행해준다. 

    // 장점
        // 파일의 크기가 큰데, 실행 속도가 빠르다. (번역을 한번에 쫙 해버리니까 빠름)
        // 전체 코드를 번역해서, 실행 전에, '오류를 미리' 알 수 있음.  
    // 단점 
        // 대신, 번역 과정이 조금 걸린다.  

    // 종류 
        // c, c++, java, python


        
    // 인터프리터 언어란? 
        // 프로그램 코드를 '한줄 씩' 읽으면서, '번역과 실행' 을 한다. 
    
    // 장점 
        // 프로그램 '실행 중', '동적'으로 소스코드를 '수정'이 가능하다. 
        // 실행하는 크기가 작고, 소스 코드 수정이 용이하다. 
        // 디버깅 하기가 편하다. 
        // 오류를 실행중에 발견할 수 있음. 
    
    // 단점
        // 소스 코드가 실행될 때 마다, 번역과 실행을 반복해서, 속도는 조금 느리다. 

    // 종류 
        // 자바스크립트 등이 있다. 
    


// 🟦 [논리 연산자] 

    // 종류 
        // || , &&

    // || (논리합 연산자, OR 연산자)
        // 설명 
            // a || b 
            // a 또는 b 
            // 둘 중 하나라도 참 이면 -> true 
            // 둘 중 모두 참 이어야 -> true
        
        // 논리합
            // 0 0 -> false 
            // 1 0 -> true
            // 0 1 -> true
            // 1 1 -> true
        
        let a = false;
        let b = false;
        console.log(a || b);
        console.log(false || false); // false
        console.log(true || false); // true
        console.log(false || true); // true
        console.log(true || true); // true


    // && 논리곱 연산자 
        // 설명 
        // 둘다 true 여야 -> true 가 나옴
        
        // 0 0 -> false
        // 0 1 -> false 
        // 1 0 -> false 
        // 1 1 -> true
        
        let c = true; 
        let d = false; 

        console.log (c && d);

        let text = "집에 가고 싶어";
        let age = 20;
        if (text === "집에 가고 싶어" && age === 20) {
            console.log("집에도 가고, 나이도 20이 참 이면 -> 이 콘솔이 뜰거야")
        }
        
        // 논리곱, && 연산자 
        if (text === "집에 가고 싶어" && age === 21) {
            console.log("집에도 가고, 나이도 21이 참 이면 -> 이 콘솔이 뜰거야")
        } // 이건 안 떠~ 왜냐면 fasle 가 들어가니까.
        
        // 논리합 || 인 경우
        if (text === "집에 가고 싶어" || age === 21) {
            console.log("집에도 가고, 나이도 21이 참 이면 -> 이 콘솔이 뜰거야, 왜냐면, '논리합' 이니까.")
        } // 이건 안 떠~ 왜냐면 fasle 가 들어가니까.



// 🟦 삼항 연산자 

    // 의의 
        // 한줄로 코드를 표현할 수 있음. 

    // 특징 
        // 잘 쓰면 편함 
        // 가독성이 많이 떨어져서 본인도 읽기 힘들 수 있음. (가독성이 떨어짐)
        // 가독성이 떨어지니까 -> 많이 사용하면 안 돼 
        // 좋은 코드는 가독성이 좋은 코드 ⭐⭐⭐⭐⭐ 

    // 문법 ⭐⭐⭐⭐⭐ 
        // 조건 ? (앞의 조건이 참 일 때) : (앞의 조건이 거짓일 때)
        console.log (1 < 2 ? "참일 때, 이게 나와" : "거짓이면 여기가 나와");
        console.log (1 < 2 ? 3 < 4 ? "두 번째 뎁스, 참일 때, 이게 나와" : "이건 두번째 거짓이야" : "거짓이면 여기가 나와");

        if (1<2) {
            if(3<4){
                //"두 번째 뎁스, 참일 때, 이게 나와"
            }
            else {
                //"이건 두번째 거짓이야"
            }
        }else{
           // "거짓이면 여기가 나와"
        }

    // 주의 
        // 뎁스 하나 일 때만 우선!!! 한다. 

    // 연습
        if (1<2) {
            if (3<4) {
                // 요놈이 첫 번째 항, 
            }
            else {
                // 이건 맞는데, 저건 아니야 
            }
        }
        else {
            // 완전 다 다르면, 여기가 나와
        }


// 🟦 [switch 조건문]

// 특징 
        // if 랑 비슷 

//     switch("값을 여기에 넣으세요") {
//         case 1 : 
//         // if 부분

//             break;

//         case 2 : //else if 
//             break; 
        
//         case 3 : // else if 
//             break; 
        
//         default : // else 
//             break;
//     }

        // 이거랑 비슷
        // if () { 

        // } else if () {

        // } 

        let month = 10;
        let monthName = "";

        // switch(key) {
        //     case 1:
        //         break;

        //     case 2:
        //         break;

        //     case 3:
        //         break;

        //     case 4:
        //         break;

        //     case 5:
        //         break;
                
        //     case 6:
        //         break;
                
        //     case 7:
        //         break;
                
        //     case 8:
        //         break;
                
        //     case 9:
        //         break;
                
        //     case 10:                
        //         // 10으로 바꾸면 -> 여기를 실행. 
        //         // 빈 문자열이 그대로 
                
        //         break;
        //         // beak 문은 뭐지? 
        //         // break 는 '여기서 코드 끝' 
        //         // break 를 안 걸어주면 -> case 11 까지 가 -> 그래서 case 11 까지 실해하게 됨. 
        //         // break 문이 있으면 -> 멈추고, 
        //         // ⭐⭐⭐ break 없으면 -> break 문 있을 때 까지! 실행 -> so, case 11 까지 가서 실행 


        //     case 11:
        //         // 값이 11 이니까 -> 여기를 실행 해야 겠네 
        //         monthName = "November";
        //         break;
                
        //     case 12:
        //         break;
        // }
        // console.log (monthName);


        // 2 는 case 2 로 가라는 건가? ❓❓❓❓❓❓❓ 
        switch (2) {
            case 1: 
                console.log("첫 번째 case문");

                // break; 
            
            case 2: 
                console.log("두번째");

                // break; 
            
            case 3: 
                console.log("두번째");

                // break; 
            
                
            default : 
                console.log("여기가지가 끝이야.")
                break;
        }



// 🟦 while 반복문 
        // 개념
            // 무한하게 돌아간다. 
            // 조건문으로 멈추는 조건을 준다.
            // 값이 true 면, 무한히 돌아간다. 
            // false 로 변경해야, 반복문이 멈춘다. 
        
        // 멈추려면 
            // 1. false 넣기 
            // 2. break 문을 넣기 


    while (true) {
        if ( " 멈추는 조건 ") {
            break; // 조건이 맞았을 때, 반복을 끝내준다. 
        }
    }

// let num = 1; 
// // 5가 되면 -> false 가 되고 -> 이때 멈추게 된다. ⭐⭐⭐⭐⭐ 
// while (num !== 5) { 
//     console.log(num); // 1/2/3/4/ 가 출력되고, 5 되니까 false 니까 멈춘다. 
//     num++;
// }

let num2 = 2; 
// 계속 돌아가는데, 5 가 되면, break 문으로 종료
// { 여기를 다 완료하고 } -> 조건을 true 로 하는게 좋아 
// true 먼저 하면 -> 터질 수 있음. 
while (true) { 
    console.log(num2);
    num2++;

    if (num2 === 5)
    {
        break;
    }
}



// 🟦 사용자가 웹에서 값을 간단히 입력 받을 수 있는 상태창을 띄워준다. 

// 사용자한테, 간단한 입력값, 을 받아올 수 있음.  
    // 입력 받아와서 -> 값을 저장할 수 있음
//     // 작성된게 -> value 라는 변수로 들어옴 ⭐⭐⭐⭐⭐  
// let value = prompt("자, 값을 입력해보세요~")
// console.log("value : " , value);


// let inputNum = prompt("첫번째 숫자 입력");
// let inputNum2 = prompt("두번째 숫자 입력");
    // 이때, inputNum2 으로 받은 건 '문자열' 임. 
    // 우리가 필요한 건 '숫자'
    // 그래서, '숫자로 형태를 변환' 시키는 작업이 필요 ⭐⭐
    // 이런걸 '형변환' 이라고 함 (data type 을 변환) ⭐⭐⭐
        // ⭐ parseInt ("숫자 정수로 변경할 변수 or 값")
        // ⭐ Number ("숫자로 변경할 변수 or 값을 넣기")
        // 둘 다, number 형으로 result 를 변환함. 
        // 다른 형태의 type 을 number 타입으로 형변환 시킨다. 

    // 문자인 경우 
        // 2 + 3 => 23 
    // 숫자인 경우 
        // 2 + 3 => 5

// let result = parseInt(inputNum) + Number(inputNum2); 
// console.log ("결과는 두구두구 : ", result);


// 연습 예제 ⭐⭐⭐⭐⭐⭐⭐⭐ 
    // 이거 활용해서 가위, 바위, 보 문제 풀기 ⭐⭐⭐⭐⭐ 
let value = prompt ("너는 숫자를 입력해야 해. 1 ~ 5 사이 숫자를!");
let play = true; // 플레이 중! 을 의미 

while(play) {

    switch (value) {
        case "1":
            console.log ("1번 눌렀네~ ");
            play = false; 
            break; 
            
            case "2":
            console.log ("2번 눌렀네~");
            play = false; 
            break; 
            
            case "3":
            console.log("3번 눌렀네");
            play = false; 
            break; 
            
            case "4":
            console.log("4번 눌렀네");
            play = false; 
            break; 
            
            case "5":
            console.log("5번 눌렀네");
            play = false; 
            break; 
            
            default: 
            console.log("1~5 누르라고";)
            value = prompt ("1~5를 누르라고 했지~~~~"); // 이 라인이 이해가 안 돼 📛📛📛📛📛
            break;
    }
}    
// 여기서 value 가 뭐지? ❓❓❓❓❓ 


// 🟦 가위 바위 보 연습 
// 우리는 가위 바위 보, 중 하나를 선택 
// 컴퓨터는 어떻게 자동으로 선택하지? 
    // 자바스크립트에서 랜덤값을 구할 수 있는 친구
    Math.random(); 
        // 0 에서 1 까지의 랜덤수
        // 소수점 까지 뽑음
        // 1~10 까지 뽑으려면?
        // 1) parseInt() 를 써서 정수로 변환하고 2) 값이 너무 작으니까 곱해주기

    console.log (parseInt(Math.random() * 3));
        // 3을 곱하면 -> 0,1,2 ⭐⭐⭐⭐⭐ 
        // 10을 곱하면 -> 10 까지 나옴 ⭐⭐⭐⭐⭐ 

        // 그러면, 0 이면 -> 가위 
        // 1은 -> 바위 
        // 2는 -> 보 

// 교수님 가이드 
// 1. 컴퓨터 랜덤값이 있어야 겠네 뭘 쓰지? -> Math.random() 을 사용해야 겠다 
// 2. 사용자의 입력값을 변수에 저장해놓아야 할거 같다. 
// 3. 다른 값을 입력하면 다시 반복 시켜야 겠다. 
// 4. 조건문은 오늘 배운 switch 를 써봐야지. 


// 해보기 
// - 가위바위보를 입력하세요 창을 띄우고 -> 값을 받아 
// - 컴퓨터가 랜덤하게 값을 만들어놔
// - 값이 들어온거랑, 컴퓨터가 랜덤하게 만든 값이랑 비교해 
    // - 가위 고, 컴터가 가위면 -> 비김. 을 띄우고 
    // - 내가 가위고 , 컴터가 바위면 -> 졌어. 를 띄우고 


