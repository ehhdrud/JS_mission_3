export default function Link() {
  let newLink = document.createElement("link");
  newLink.href = "star-rating/theme.css";
  newLink.rel = "stylesheet";

  let head = document.querySelector("head");
  let lastLink =
    head.querySelectorAll("link")[head.querySelectorAll("link").length - 1];
  lastLink.insertAdjacentElement("afterend", newLink);
}
