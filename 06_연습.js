let playerSelect;

// 1~100 까지 숫자를 고른다. 
let computerSelcet = parseInt(Math.random() * 99 + 1);

// 지금까지 시도한 횟수
let count = 0;

// player 가 선택 가능한 최대 숫자 
let max = 100;
// player 가 선택 가능한 최소 숫자
let min = 0;

// 컴퓨터가 알려줄 문구 
let subText = 12312312
// 게임 몇 번 할래? (얼마나 시도해볼래?)
let maxCount = parseInt(promt("게임 몇번 할래?"))


while(playerSelect !== computerSelcet && count < maxCount) {

    playerSelect = prompt( `${subtex}` )

}