const sentence = "hello there from lighthouse labs";
//Previous approach
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000);
// }
let pause = 50;
let startingTime = 500;
//Using for loop to get access to i;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write("\n");
    }
  }, startingTime);
  startingTime += pause;
}
