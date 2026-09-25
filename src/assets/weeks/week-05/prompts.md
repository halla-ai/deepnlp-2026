# 5주차 자산 생성 기록

생성 도구: Higgsfield CLI v1.1.24 (강의자료 제작용, 노트 본문에는 도구명 미기재)
생성일: 2026-09-25

## 공통 스타일 프롬프트 (이미지)

```
Flat vector infographic slide for a university NLP lecture, clean white grid
background, pastel green and violet rounded boxes, dark navy legible Korean
typography, minimal modern technical presentation style, flat design,
no photorealism, no gradients. Render every Korean and English label exactly
as written below, spelled exactly, and add no other text.
```

모델: nano_banana_pro, aspect_ratio 16:9, resolution 4k (5504x3072).
생성 후 ffmpeg로 2560px 폭 다운스케일(선명도 확보, 용량 억제). 4주차와 같은 파이프라인.
CLI 결과의 `_min.webp`는 미리보기본이므로 쓰지 않고 원본 `.png`를 받는다.
프롬프트에 "Key idea:" 같은 설명 문장을 넣으면 그림 속 글자로 찍히므로, 지시는 장면 묘사로만 쓴다.

## 이미지 자산 (생성)

| 파일 | 용도 | 비고 |
|---|---|---|
| week-05-hero.png | 히어로 - 같은 답안을 네 채점자가 채점 | 1차 통과. judge만 "정답"인 구도 확인 |
| confusion-matrix.png | 긴급 탐지 2x2 혼동행렬과 정확도·정밀도·재현율 식 | 1차 통과. 식 3개 본문과 일치 확인 |
| accuracy-trap.png | 불균형 데이터에서 정확도 0.98, 재현율 0 | 1차본은 점 64개(1/64)라 캡션 2%와 어긋나 재생성. 2차본 점 56개 중 1개(1.8%, 반올림 2%)로 채택 |
| prompt-a-confusion.png | 4주차 프롬프트 A의 실측 혼동행렬과 재현율 | 1차 통과. 칸 숫자 8/0/0, 0/8/0, 0/4/4와 재현율 1.00/1.00/0.50이 노트북 출력과 일치 확인 |
| token-f1-trap.png | exact match와 token F1, 뜻이 반대인데 같은 점수 | 1차본은 정답 카드 끝에 마침표, 2차본은 "바로"에까지 밑줄(겹친 단어 수 오표시). 밑줄이 정확한 1차본에서 마침표만 배경색으로 지워 채택 |
| dev-test-split.png | 개발셋, 시험셋, 5묶음 교차검증 | 1차 통과 |
| paired-bootstrap.png | 쌍체 부트스트랩 (복원추출과 δ 분포) | 1차본 원래 채점셋 8장 대 가상 채점셋 7장(크기 불일치). 2차본 카드마다 A/B 중 하나만 표시(쌍체 아님). 3차본은 카드 6장(4/6 대 3/6, δ = 0.17)에 δ = 0.04 라벨이라 모순(검토에서 지적). 4차본은 프롬프트의 설명 문장이 그림 속 영어 글자로 찍힘. 5차본에서 후보 X/Y, 캡션을 공식(δ = X 정답률 - Y 정답률)으로 바꿔 카드 내용과 무관하게 참이 되게 하고 채택. 2차 생성 중 1회 job failed(원인 미표시) 후 재시도 성공 |
| judge-false-acceptance.png | 정답지 없는 judge가 실제로 묻는 것 | 1차 통과. 확률 0.7/0.3은 설명용 예시(실측 범위 0.62~0.75 안) |
| supervision-signals.png | 감독 신호 셋은 교차 대조를 거쳐야 참값 | 1차 통과 |
| pass-at-k-estimator.png | 무편 추정량 n=20, c=2의 k=2 계산 | 1차 통과. 18/20 x 17/19 = 0.805, pass@2 = 0.195 본문과 일치 확인 |
| q4-card.png | Q4 근거 기준 네 질문 | 1차 통과 |

## 이미지 자산 (실측 데이터 그래프)

생성 이미지는 수치 위치가 정확하지 않을 수 있으므로, 실측값을 그대로 보여야 하는 그래프 2장은
`notebooks/week-05.ipynb`의 코드(시드 42, n = 200)를 그대로 실행한 값으로 matplotlib에서 그렸다.
글꼴 AppleGothic, 색은 위 공통 스타일 팔레트에 맞췄다. 2560x1428.

| 파일 | 용도 | 값 |
|---|---|---|
| judge-prob-ranges.png | 0.6B judge의 P(정답) 분포, 정답지 유무 비교 | 정답지 없음: 맞은 20건 0.70~0.92, 틀린 4건 0.62~0.75. 정답지 포함: 0.95~0.99, 0.76~0.80 |
| passk-prompt-ab.png | 프롬프트 A와 B의 pass@k 곡선 (k = 1~200) | B pass@1 0.64, A가 k = 15에서 도달, A@20 0.71, B@20 1.00, A@200 0.92 |

## 인터랙티브 컴포넌트

- `MetricCompare.astro`, `JudgeLab.astro`, `PassAtKCurve.astro`, `ThresholdDial.astro`
- 처음 버전은 루트 태그가 `<div>`라서 `customElements.define`한 요소가 페이지에 없어 스크립트가 한 번도 실행되지 않았다. 루트를 각 custom element 태그로 바꾸고 `display: block`을 줬다
- 수치는 설명용 예시이며 본문에 그렇게 밝힌다

## 검수 기준

- 전 자산 육안 검수. 한글 라벨 깨짐, 수치 오류, 개념을 잘못 그린 경우 재생성
- 그림 속 수치는 본문 표와 일치시킨다. 정확한 수치의 기준은 이미지가 아니라 본문 마크다운 표와 노트북 출력
