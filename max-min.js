function maxmin(array) {
    // const maxnum = Math.max[4, 3, 7, 2, 8, 9, 21, 3, 5];
    const maxnum = Math.max(...array);
    return maxnum;
}
// var array = [4, 3, 7, 2, 8, 9, 21, 3, 5];
// var num = "437289";
// num.split("");
// console.log(array);
// // for (var i of num)
// //     console.log(i);
// var computer = ["cpu my name", "mouse", "keboard", "ups", "cable", "monitor", "sound box", "light", "fan"];
// console.log(computer.splice(3, 1))
// var man = array.splice(1, 3);
// console.log(man);
const array = [4, 3, 7, 2, 8, 9, 21, 3, 5];
console.log(maxmin(array));