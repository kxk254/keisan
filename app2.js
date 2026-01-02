
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

