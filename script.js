// 1. Write a function to check if you have passed your exam. You should get marks for subjects from your teacher or user.

function Pas_koreci_ki_na(examNumber) {
    for (let number of examNumber) {
        if (number < 33) {
            return false;
        }
    }
    return true;
}
const examNumber = [40, 54, 62, 33, 80];
console.log(Pas_koreci_ki_na(examNumber)); 

// 2. Define and show yourself as a class of students, including your name, number, and hobby.
class Student {
    constructor(name, roll, hobby) {
        this.name = name;
        this.roll = roll;
        this.hobby = hobby;
    }
}
const Tota = new Student('Tota', 1, 'Programmimg');
console.log(Tota);


// 3. Introduce your friend Kalam to the class with class properties.
class My_friend {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    introduce() {
        console.log(`This is ${this.name} class. We study ${this.subject}.`);
    }
}
const kalamClass = new My_friend('Class 10', 'Programmer');
kalamClass.introduce();



// 4. If every student get an average of 60 marks in each subject, show the total cumulative mark based on student number.
function total_Number(classScores) {
    let total = 0;
    for (let student_Number of class_Number) {
        let sum = 0;
        for (let score of student_Number) {
            sum += score;
        }
        if (sum / student_Number.length < 60) {
            return false;
        }
        total += sum;
    }
    return total;
}

const class_Number = [
    [70, 80, 90, 85, 75],
    [60, 55, 65, 50, 70],
    [80, 75, 85, 90, 95],
];
console.log(total_Number(class_Number));
