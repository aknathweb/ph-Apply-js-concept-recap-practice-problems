// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

// one way 
function GradeIdentify1(Mark) {
    const Grade = Mark > 79 ? "A+" : Mark > 69 ? "A" : Mark > 59 ? "A-" : Mark > 49 ? "B" : Mark > 39 ? "C" : Mark > 32 ? "D" : "F";
    return Grade;
}
const SubjectMark1 = 40;
console.log("one way, ", SubjectMark1, " Mark corresponding Grade :", GradeIdentify1(SubjectMark1));

// another way 
function GradeIdentify(Mark) {
    let Grade;
    if (Mark > 79)
        Grade = "A+";
    else if (Mark > 69)
        Grade = "A";
    else if (Mark > 59)
        Grade = "A-";
    else if (Mark > 49)
        Grade = "B";
    else if (Mark > 39)
        Grade = "C";
    else if (Mark > 32)
        Grade = "D";
    return { Grade, Mark };
}
const SubjectMark2 = 50;
console.log("Another way, ", GradeIdentify(SubjectMark2).Mark, " Mark corresponding Grade :", GradeIdentify(SubjectMark2).Grade);