
const snsUser = {
    id: 1,
    userName: "Taro",
    gender: "male",
    like: function() {
        console.log("like");
    },
    post: function(content) {
        console.log(`${this.userName} posted: "${content}"`);
    }
};

console.log(snsUser.id); // 1

snsUser.like();        // Taro liked post #10
snsUser.post("Hello!");  // Taro posted: "Hello!"

console.log(Math.PI);

console.log(window.innerWidth);

console.log(window.innerHeight);

window.document.querySelector("#pokemon").innerText = "ポケモンゲット";

window.document.querySelector("#pokemon").style.backgroundColor = "#aaa";

setTimeout(function(){
	//alert("HELLO HOW ARE YOU?");
},5000);


//window.addEventListener("resize", function(){
//	alert("load completed");
//});

document.querySelector("#button").addEventListener("click", function(){
	console.log("clicked###");
});


const $post = document.createElement("article");
$post.setAttribute("class", "post");
$post.innerText = "お腹減ったなう";

const $timeline = document.querySelectorAll(".timeline")[0];
$timeline.appendChild($post);
