// Replace the animation link with your provided Lottie animation link
const animationLink =
  "https://lottie.host/8fe3800d-0614-42d2-998e-66cd5d1e328c/r2b8bAKIYz.json";

// Initialize the Lottie animation
const animationContainer = document.getElementById("lottieAnimation");
lottie.loadAnimation({
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: animationLink,
});
