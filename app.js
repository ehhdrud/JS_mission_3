// 모듈 가져오기
import StarRating from "./star-rating/index.js";
import Link from "./star-rating/link.js";

// $containers에 모든 "star-rating" 클래스를 가진 요소 할당
// $currentRatings에 모든 "current-rating" 클래스의 span 요소 할당
const $containers = [...document.querySelectorAll(".star-rating")];
const $currentRatings = document.querySelectorAll(".current-rating > span");

// $containers에 담긴 요소들을 순회하며 다음 함수를 실행
$containers.forEach(($container, i) => {
  // $containers에 담겨있는 개별 요소인 $container를 StarRating 함수에 전달해 star-rating 요소를 동적 생성한다.
  StarRating($container);

  // 이벤트 'rating-change'를 캐치해 화면에 표시한다.
  $container.addEventListener("rating-change", (e) => {
    const rating = e.detail;
    $currentRatings[i].textContent = rating;
  });
});

// star-rating 요소 내부의 css파일을 마지막 링크로 추가하는 함수 실행
Link();
