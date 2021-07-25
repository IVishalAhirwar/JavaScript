// console.log('Hello legend of Programming!');
// alert('WTF! JavaScript');

//this is Single Line  Comment!


function fun() {
    alert('Well ! This is Learly Annoying Function! ');
};

// fun();

function Greeting() {
    const Name = prompt('What is Your Name ??');
    return "Hey ! " + Name + " Welcome in JavaScript World!";
}

function Greeting(StartGreeting, EndGreeting) {
    const Name = prompt('Please Enter Your Name ??');
    return StartGreeting + " " + Name + " " + EndGreeting;
};

function DoSplit(Fruits = "Apple,Banana,Mango,Grasps,Blackberry,Lichhi") {

    document.getElementById('MessageH1').innerHTML = Fruits.split(',');
    prompt("Split Function Done His Works!");

};

function DoObjectsStuff() {
    const StateOf = { India: ["UP\n", "MP\n", "\nMany More!"], America: ["\nUSA", "\nNew York", "\nNew jearcy", "\nMany More"] };
    document.getElementById('MessageH1').innerHTML = StateOf.India;
}

const Objects =
{
    FirstName: prompt("Please Enter Your First Name ::"),
    lastName: prompt('Please Enter Your Last Name ::'),
    Age: prompt('Please Enter Your Age ::'),
    PrintAllAboutThisObject: function () {
        return "First Name : " + this.FirstName + " \n" + "Last Name : " + this.lastName + "\n" + "Age : " + this.Age;
    },
};

document.getElementById('MessageH1').innerHTML = Objects.PrintAllAboutThisObject();
console.log(Objects.PrintAllAboutThisObject());

// DoObjectsStuff();

/**
 * This is Mul-
 * ty
 * line
 * Comment
 * how cool is it
 * Well !
 * You Know it!
 *
 */

// Fruits =prompt('Enter Fruits Names Sperating By Comma ??');
// DoSplit(Fruits);


// StartGreeting = prompt('What Start Greeting You Want ??');
// EndGreeting = prompt('What End Greeting Should be ??');

// document.getElementById('MessageH1').innerHTML = Greeting(StartGreeting, EndGreeting);
// const a = 'hello Legends of Earth!';

// alert(a);
// // const GetName = prompt('Please Enter Your Name ???');

// // const FullMessageWithGreetings = 'Hey ' + GetName + ' There You Go!';
// document.getElementById('MessageH1').innerHTML = Greeting();




