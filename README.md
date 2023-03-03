# Star rating

별점 평가 컴포넌트를 구현한다.

- 사용자가 정의한 star-rating 컨테이너 요소의 참조를 StarRating 함수에 전달해 star 요소들로 구성된 star-rating 요소를 동적 생성
- star-rating 요소의 data-max-rating 어트리뷰트를 통해 동적으로 생성할 star 요소의 갯수를 지정
- star 요소에 마우스가 올라오면 해당 star 요소와 이전 star 요소 모두 color를 변경
- star-rating 요소에서 마우스가 벗어나면 모든 star 요소의 color를 변경
- 특정 star 요소를 클릭하면 해당 star 요소와 이전 star 요소 모두 color를 변경
- 특정 star 요소를 클릭할 때 결정되는 rating을 커스텀 이벤트 rating-change를 통해 외부로 방출하고, 이를 캐치해 화면에 표시
- 재사용이 가능하도록 구현
- ES Module을 사용해 모듈화
