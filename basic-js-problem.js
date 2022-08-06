
// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
var ManyDeclareWithSameName_CanReassignValue;
let SingleDeclareWithSameName_CanReassignValue;
const SingleDeclareWithSameName_CanNotReassignValue_MustAssignValue = 0;

// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
let show_1To100 = [];
for (let i = 0; i < 100; i++) {
    show_1To100.push(i + 1);
}
let join_show_1To100 = show_1To100.join(", ");
console.log("Show 1 to 100:\n", join_show_1To100)

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
let show_50To80_Odd = [];
for (let i = 50 + 1; i <= 80; i += 2) {
    show_50To80_Odd.push(i);
}
let join_show_50To80_Odd = show_50To80_Odd.join(", ");
console.log("Show 50 to 80 Odd numbers:\n", join_show_50To80_Odd)

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো
function AddThree(one, two, three) {
    const sum = one + two + three;
    return sum;
}
console.log("Three number addition funtion: ", AddThree(2, 5, 4));