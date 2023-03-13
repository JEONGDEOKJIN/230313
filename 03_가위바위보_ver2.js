// 컴퓨터가 랜덤으로 선택하는거 만들기 

let computer_choice = ["가위", "바위", "보"];

let computer_final_choice = computer_choice [parseInt(Math.random() * 3)];


// 사람이 선택하는거 만들고, > 컴퓨터 선택이랑 비교하기 
    // while 을 사용하는게 쉽지 않음. 여기에서 이걸 언제가지 계속할거야? 를 걸어줄 수 있어 ⭐⭐⭐⭐⭐

let user_choise = prompt("가위, 바위, 보 중 하나를 입력하세요");


while (play) {

    switch (user_choise) {
        case "가위":
            // 여기에서 if문 들어가는거 맞지❓❓❓
            if (computer_final_choice == '가위') {
                console.log("비겼으~😌");
            } else if (computer_final_choice == '바위') {
                console.log("you lose~졌으");
            } else { 
                console.log("이겼으~")
            }
    
            play = false;
        
            break;
            
    
        case "바위":
            // 여기에서 if문 들어가는거 맞지❓❓❓
            if (computer_final_choice == '가위') {
                console.log("네가 이겼으~👍👍");
            } else if (computer_final_choice == '바위') {
                console.log("비겼으~~😌");
            } else { 
                console.log("you lose~😥😥")
            }
    
            play = false;
        
            break;
    
    
            case "보":
                // 여기에서 if문 들어가는거 맞지❓❓❓
                if (computer_final_choice == '가위') {
                    console.log("you lose~😥😥");
                } else if (computer_final_choice == '바위') {
                    console.log("네가 이겼으~👍👍");
                } else { 
                    console.log("비겼으~~😌")
                }
    
                play = false;
            
                break;
            
        default:
            let user_choise = prompt("입력이 틀렸어요~가위, 바위, 보 중 하나를, 제대로 입력하세요🙌🙌");
                play = true; 
            break;
    }



}

