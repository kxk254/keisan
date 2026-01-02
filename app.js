console.log("Hello World today");

let foo = 1;

foo = 7;

console.log(foo);

let tdo = 1;

const questions = ["あなたは誰", "Hello", "日本の総理はだれ"];

for (let i = 0; i < questions.length; i++) {
  console.log("インデックス" + questions[i]);
}
let isLogin = true;
if(!isLogin){
	//alert("ログインしてください");
} else {
	//#console.log("ログイン成功");
}
if (foo>0){
	//alert("これを表示してください");
}


function name(){

}


//if (new Date().getHours() > 6) {
//	document.body.style.backgroundColor = "#ccc";
//} else {
//	document.body.style.backgroundColor = "#ddd";
//}

// make it as a function
function changeDarkMode(time = 8, color = "#abc") {
	if (new Date().getHours() > time) {
		document.body.style.backgroundColor = color;
	} else {
		document.body.style.backgroundColor = "#ddd";
	}
}
changeDarkMode();

function foos(callback){
	console.log("Hi, Tom!");
	callback();
}

function bar(){
	console.log("Hi, Ken!");
}

foos(bar);

function getSeason() {
	//
	const month = new Date().getMonth() + 1;
	if (month >= 3 && month <= 5) {
		return "spring";
	} else if (month >= 6 && month <= 8) {
		return "summer";
	} else if (month >= 9 && month <= 11) {
		return "autum";
	} else {
		return "winter";
	}
}

season = getSeason();
console.log(season);


