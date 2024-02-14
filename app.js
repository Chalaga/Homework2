//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

// let num1 = 10
// let num2 = 10
// let operator = '+'
// function processNumbers(callBack) {
//     console.log(callBack(num1, num2, operator));

// }

// function mycallback(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return 'Outcome cannot be done';
//   }
// }
// processNumbers(mycallback)

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

// let Username = 'chalaga'
// let Password = 'chalaga'

// function isValidUser(Username, Password) {
//     if (Username === '' & Password === '') {
//         return 'false'
//     } else if (Username !== '' & Password === '') {
//         return 'false'
//     } else if ( Username === '' & Password !== '') {
//         return 'false'
//     } else {
//         return 'True'
//     }
// }

// console.log(isValidUser(Username, Password));

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

// function generateFibonacci(n) {
//   var fibonacciSequence = [1, 1];
//   for (var i = 2; i < n; i++) {
//     var nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//     fibonacciSequence.push(nextNumber);
//   }

//   return fibonacciSequence;
// }

// console.log(generateFibonacci(8));

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

// const Birthdate = new Date(2001, 11, 19);
// const currentdate = new Date();

// const birthyear = Birthdate.getFullYear();
// const currentyear = currentdate.getFullYear();

// const currentmonth = currentdate.getMonth();
// const birthmonth = Birthdate.getMonth();

// const curretday = currentdate.getDay();
// const birthday = Birthdate.getDate();

// const age = currentyear - birthyear;

// function Currentage(
//   birthyear,
//   currentyear,
//   age,
//   currentmonth,
//   birthmonth,
//   curretday,
//   birthday
// ) {
//   if ((currentmonth === birthmonth) & (curretday === birthday)) {
//     return age;
//   } else if (currentyear > birthyear) {
//     return age - 1;
//   }
// }
// console.log(
//   Currentage(
//     birthyear,
//     currentyear,
//     age,
//     currentmonth,
//     birthmonth,
//     curretday,
//     birthday
//   )
// );

//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

// const CurrentDate = new Date();
// const CurrentDay = CurrentDate.getDay();

// function Nameofthedy(currentdate) {
//   if (currentdate === 1) {
//     return "Monday";
//   } else if (currentdate === 2) {
//     return "Tuesday";
//   } else if (currentdate === 3) {
//     return "Wednesday";
//   } else if (currentdate === 4) {
//     return "Thursday";
//   } else if (currentdate === 5) {
//     return "Friday";
//   } else if (currentdate === 6) {
//     return "Saturday";
//   } else if (currentdate === 7) {
//     return "Sunday ";
//   } else {
//     return "Week";
//   }
// }

// console.log(Nameofthedy(CurrentDay));
