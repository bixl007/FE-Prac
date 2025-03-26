const changeText = () => {
  const p = document.querySelector("#message");
  p.textContent = "I changed because of an event!";
  p.style.color = "white";
  let items = document.querySelectorAll(".items");
  items[0].style.backgroundColor = "blue";
  items[1].style.backgroundColor = "green";
  items[2].style.backgroundColor = "orange";
  items[3].style.backgroundColor = "purple";
  items[4].style.backgroundColor = "pink";
};