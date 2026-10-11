# 10주차 그림 기록

- 도식 제작: 직접 작성한 편집 가능 SVG. 아래 도식에는 생성형 이미지 도구 사용 없음
- 도입 일러스트: week-10-hero.webp, imagegen 생성 후 WebP 인코딩, 1672 x 941, 314,874바이트
- 일러스트 지시: 글자·로고·숫자 없이 흰 종이의 수채화·색연필 형식. 제주 배경에서 시연 카드, 선호 저울, 직접 선택한 선호쌍, 같은 질문의 네 응답과 그룹 기준 비교를 연결한 메타포
- 이미지 생성 ID: exec-f30bdee2-ce08-48f2-a28f-1903d4dddaa5
- 일러스트 해석: 개념 도입용, 실제 모델 출력·학습 성과·관광 데이터 시각화 아님
- 수치: 교수 제공 산술 예시, 실측 학습 결과 아님
- 원본: 이 폴더의 SVG 자체
- alignment-lineage.svg: SFT, PPO 기반 RLHF, DPO, GRPO의 감독·필요 구성 비교. 필수 순서가 아니라 교육용 계보
- critic-reward.svg: 보상 출처와 가치 추정 baseline의 역할 분리
- reward-broadcast.svg: outcome supervision, 표본 표준편차 기준 응답 advantage 반복
- aggregation-credit.svg: 길이 2·8 응답의 집계 가중치, 토큰별 인과 신용과 구분
- 근거: https://arxiv.org/abs/2203.02155, https://arxiv.org/abs/2305.18290, https://arxiv.org/html/2402.03300v3#S4.SS1.SSS2, https://arxiv.org/html/2503.14476v1#S3.SS3, https://arxiv.org/abs/2501.12948

- objective-numbers.svg: 동일 상정 관광 질문에서 SFT token CE, Bradley-Terry 선호확률, DPO 로그비 목적함수의 감독 대상과 계산값 비교. 교수 제공값의 산술 도식이며 모델 실측 아님
