// for (let i = 2; i <= 10; i++) {
//   console.log("Number " + i);
//   for (let j = 0; j <= 100; j++) {
//     console.log(`${i} * ${j}  = ${i * j}`);
//   }
// }

// const arr = ["Javascript", "React", "Angular", "NodeJS"];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] === "Javascript"
//     ? console.log(arr[i] + "is the best JavaScript")
//     : console.log(arr[i]);
// }

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   let j = 0;
//   while (j <= 10) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }
// let i = 9;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let arr = ["Javascript", "React", "Angular", "NodeJS"];

//High order array

// const socials = ["facebook", "Twitter", "Instagram"];
// socials.forEach((el) => console.log(el));

const socialObj = [
  {
    name: "facebook",
    url: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
  },
];

socialObj.forEach((el) => {
  console.log(el.url);
});
