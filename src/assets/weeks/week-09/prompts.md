# 9주차 그림 제작 기록

- 제작 방식: 직접 작성한 SVG 개념도
- 원본 데이터 및 논문 그림 복제 없음
- 그림: rag-pipeline, retrieval-methods, failure-chain, graph-expansion
- 각 그림: 제목, 다섯 단계, 비실측 교육용 설명 표기
- 그래프 연결: 실제 제주 개체 관계가 아닌 처리 단계 설명

- 도입 일러스트: week-09-hero.webp
  - 제작: root의 imagegen 생성 후 WebP 인코딩
  - 크기: 1672 x 941, 약 173 KB
  - 방향: 글자 없는 수채화, 제주 풍경과 공개 문서 → 돋보기 → 말풍선 메타포
  - 범위: 문서 수집·검색·답변 연결의 개념 설명, 실측이나 실제 데이터 시각화 아님

- 강화 계산 시각자료: 직접 작성 SVG
  - tfidf-calculation.svg: A/B/C 계산용 빈도 행렬, 기본 IDF, L2 정규화, 코사인 검산 결과
  - observed-failure.svg: 고정 판의 단어·문자 실행 로그에 근거한 0후보→D018동물근거→1000m 실패, 실제 출력과 발췌 구분
  - ranking-metrics.svg: 가상 정답 집합의 Hit/Recall/RR와 이진 nDCG 계산, 실습 성능 수치 아님
  - 계산값 확인: 기본 Python 산술, 저장된 week-09-default/char 실행 노트북과 결과 JSON 대조
- ranking-metrics.svg: 같은 Q1 정답 집합 A·B에 대한 예제 1 C-A-D(nDCG 0.3869)와 예제 2 A-C-B(nDCG 0.9197)를 명시적으로 구분
