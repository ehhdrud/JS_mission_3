// css 자동 추가 함수 정의
function Link() {
  // 추가할 css는 <link href="star-rating/theme.css" rel="stylesheet" />
  let newLink = document.createElement("link");
  newLink.href = "star-rating/theme.css";
  newLink.rel = "stylesheet";

  // 마지막 link 태그 뒤에 추가
  let head = document.querySelector("head");
  let lastLink =
    head.querySelectorAll("link")[head.querySelectorAll("link").length - 1];
  lastLink.insertAdjacentElement("afterend", newLink);
}

// 모듈 내보내기
export default Link;
