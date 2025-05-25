const stars = document.querySelectorAll(".star");
let rating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    rating = parseInt(star.getAttribute("data-value"));
    updateStars(rating);
  });

  star.addEventListener("mouseover", () => {
    updateStars(parseInt(star.getAttribute("data-value")));
  });

  star.addEventListener("mouseout", () => {
    updateStars(rating);
  });
});

function updateStars(current) {
  stars.forEach(star => {
    const value = parseInt(star.getAttribute("data-value"));
    star.classList.toggle("selected", value <= current);
  });
}

function submitFeedback() {
  const feedback = document.getElementById("feedback").value.trim();
  const email = document.getElementById("email").value;
  const newsletter = document.getElementById("newsletter").checked;
  const response = document.getElementById("response");

  if (rating === 0 || feedback === "") {
    alert("Please select a star rating and give feedback.");
    return;
  }

  console.log({
    rating,
    feedback,
    email,
    subscribed: newsletter
  });

  response.classList.remove("hidden");

  // Clear fields
  document.getElementById("feedback").value = "";
  document.getElementById("email").value = "";
  document.getElementById("newsletter").checked = false;
  rating = 0;
  updateStars(rating);
}