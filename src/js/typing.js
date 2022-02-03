function Typing() {

let target = document.querySelector("#dynamic")

function randomString(){
    let stringArr=["Travel to Gangwon-do","Travel to Seoul","Travel to Gyeonggi-do","Travel to Busan"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split("")
    return selectStringArr
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString())
}

// split된 문자들 호출 
function dynamic(randomArr){
    if(randomArr.length >0){
        target.textContent += randomArr.shift();  
        setTimeout(()=>{
            dynamic(randomArr)
        },80)
    }else{
        setTimeout(resetTyping,3000)
}
}
dynamic(randomString())

// 깜빡임
function blink(){
    target.classList.toggle("active") 
}
setInterval(blink,500);
}

export default Typing;
