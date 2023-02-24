// StarRating 함수를 정의
function StarRating($container) {
  // starNum이라는 변수에 date-maxRating 속성의 값을 할당
  let starNum = $container.dataset.maxRating;

  // count 변수를 0으로 초기화
  let count = 0;

  // 매개변수인 $container에 "star-rating-container" 클래스 추가
  $container.classList.add("star-rating-container");

  // starNum에 할당된 값만큼 반복문 실행
  for (let i = 0; i < starNum; i++) {
    // i 태그를 가져와서 "bx bxs-star" 클래스를 추가 후 $container에 붙이는 작업
    let icon = document.createElement("i");
    icon.classList.add("bx", "bxs-star");
    $container.appendChild(icon);

    // 방금 추가한 "bx" 클래스 요소에 mouseover 이벤트 리스너 등록
    $container
      .querySelectorAll(".bx")
      [i].addEventListener("mouseover", function () {
        // 해당 요소까지 모든 "bx" 클래스 요소에 "hovered" 클래스 추가
        for (let j = 0; j < i + 1; j++) {
          $container.querySelectorAll(".bx")[j].classList.add("hovered");
        }
      });

    // 방금 추가한 "bx" 클래스 요소에 mouseout 이벤트 리스너 등록
    $container
      .querySelectorAll(".bx")
      [i].addEventListener("mouseout", function () {
        // 해당 요소까지 모든 "bx" 클래스 요소에 "hovered" 클래스 삭제
        for (let j = 0; j <= i; j++) {
          $container.querySelectorAll(".bx")[j].classList.remove("hovered");
        }
      });

    // 방금 추가한 "bx" 클래스 요소에 click 이벤트 리스너 등록
    $container
      .querySelectorAll(".bx")
      [i].addEventListener("click", function () {
        // 클릭이 발생한 요소의 순번만큼 반복문 실행
        for (let j = 0; j <= i; j++) {
          // 더 작은 순번의 요소로 재클릭할 때 아래 반복문 실행
          while (count > i) {
            // 이전에 클릭된 "bx" 클래스 요소의 순번인 count번째 요소의 "selected" 클래스를 제거
            // count는 1씩 감소하며 다시 while 반복문을 실행할 지 여부를 결정
            $container
              .querySelectorAll(".bx")
              [count].classList.remove("selected");
            count--;
          }

          // count 변수에 j의 값 할당
          count = j;
          // j번째 "bx" 클래스 요소까지 "selected" 클래스 할당
          $container.querySelectorAll(".bx")[j].classList.add("selected");
        }

        // currentRating 변수에는 i+1을 문자열로 할당
        let currentRating = String(i + 1);
        // currentRating 변수를 가지는 rating-change 커스텀 이벤트를 생성하여 change 변수에 할당
        let change = new CustomEvent("rating-change", {
          detail: currentRating,
        });
        // 커스텀 이벤트를 발생시킴
        $container.dispatchEvent(change);
      });
  }
}

// 모듈 내보내기
export default StarRating;
