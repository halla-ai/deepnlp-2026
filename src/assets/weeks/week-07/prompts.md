# 7주차 자산 생성 기록

생성 도구: Higgsfield CLI v1.1.24 (강의자료 제작용, 노트 본문에는 도구명 미기재)
생성일: 2026-10-01

## 공통 스타일 프롬프트 (이미지)

```
Flat vector infographic slide for a university NLP lecture, clean white grid background, pastel green and violet rounded boxes, dark navy legible Korean typography, minimal modern technical presentation style, flat design, no photorealism, no gradients. Render every Korean and English label exactly as written below, spelled exactly, and add no other text. No trailing periods on labels.
```

모델: nano_banana_pro, aspect_ratio 16:9, resolution 4k.
생성 후 ffmpeg로 2560px 폭 다운스케일. 4~6주차와 같은 파이프라인.
CLI 결과의 `_min.webp`는 미리보기본이므로 쓰지 않고 원본 `.png`를 받는다.

## 이미지 자산 (생성)

| 파일 | 용도 | 비고 |
|---|---|---|
| week-07-hero.png | 히어로 - 긴 문서의 앞, 가운데, 뒤 | 1차 통과 |
| needle-setup.png | 위치별 회수율 측정 설계 (깊이 다섯 곳, 길이 L) | 1차본은 숨긴 문장 하나만 그려 실측 조건(비슷한 문장 열 개)과 달랐다는 검토 지적으로 방해 문장 아홉 개를 넣어 재생성 |
| prefill-decode.png | 추론의 두 단계, FoLM 표 5.1 | 1차 통과 |
| long-context-routes.png | 긴 문맥을 여는 다섯 갈래, FoLM 2.3.1~2.3.5 | 절 번호와 항목을 FoLM 목차와 대조. 1차 통과 |
| rope-rotation.png | RoPE 회전과 상대 위치 | 1차본은 위치 1, 2, 3의 각도가 θ, 2θ, 3θ에 비례하지 않게(약 20, 60, 120도) 그려져 30도 등간격을 명시해 재생성. 재생성본 제목의 하이픈이 조금 길게 그려졌다 |
| position-interpolation.png | 외삽과 위치 보간, FoLM 식 2.99~2.100 | 1차본은 점선 자의 0에서 나온 화살표가 초록 자의 약 1/4 지점에 떨어져 x · m_l / m과 맞지 않았다는 검토 지적으로 0 -> 0, m -> m_l 부채꼴을 명시해 재생성 |
| lost-in-middle-u.png | Lost in the Middle U자 곡선 개념도 (수치 없음) | 1차 통과 |
| rag-vs-long.png | 검색 결합과 초장문맥 비교 (대면) | 1차 통과 |
| concept-map-1-7.png | 1~7주차 개념 위계 (대면 종합 리뷰) | 1차 통과 |

## 이미지 프롬프트 (장면 부분)

### week-07-hero

```
Title at top in Korean: 긴 문맥, 어디까지 읽는가
Centre: a very long horizontal paper scroll unrolled across the whole width of the slide, filled with many thin grey text lines (no readable words). In the exact middle of the scroll, one small highlighted violet card is tucked between the lines, labelled 숨긴 한 문장.
Above the scroll, a soft spotlight beam shines brightly on the left end and on the right end of the scroll, and is dim over the middle.
Below the scroll, three small labels: 앞 under the left end, 가운데 under the middle, 뒤 under the right end.
Bottom right corner: a small navy note 앞과 뒤는 잘 보이고, 가운데는 흐려지기 쉽다
```

### needle-setup

```
Title at top in Korean, using a short ASCII hyphen with spaces: 위치별 회수율 측정 - 비슷한 문장 사이에 한 문장을 숨긴다
Left two thirds: five long horizontal light grey bars stacked vertically, all the same length, each representing the same document. Inside every bar there are nine small grey cards spread evenly along the bar, each grey card labelled 다른 안내센터. In addition, each bar has exactly one violet card labelled 애월 7468 at a different place: at the very left end in bar 1, at one quarter in bar 2, at the middle in bar 3, at three quarters in bar 4, at the very right end in bar 5. To the left of the bars, labels top to bottom: 깊이 0%, 깊이 25%, 깊이 50%, 깊이 75%, 깊이 100%.
Above the bars, a horizontal double arrow spanning the bar length labelled 문서 길이 L.
Right third: a green box labelled 질문: 애월 안내센터의 번호는? and below it a check box labelled 답에 7468이 있으면 회수 성공.
Bottom caption: 비슷한 문장 열 개 중 정확히 하나를 골라야 한다
```

### prefill-decode

```
Title at top in Korean, using a short ASCII hyphen with spaces: 추론의 두 단계 - 프리필과 디코딩
Left panel titled 프리필: a row of eight small token squares labelled 프롬프트 entering a large transformer block all at once through eight parallel arrows. The block fills a tall violet container on its right labelled KV 캐시. Tag under the panel: 한 번에 병렬로, 계산이 병목. Small clock note: 첫 토큰까지 시간
Right panel titled 디코딩: a loop diagram. One green token square goes into the transformer block, the block reads the whole KV 캐시 container (thick arrow from the container into the block), outputs one new token square, and a small arrow adds one thin slice to the top of the KV 캐시 container. The loop arrow returns to the input. Tag under the panel: 한 토큰씩 차례로, 메모리 읽기가 병목. Small clock note: 토큰당 시간
```

### long-context-routes

```
Title at top in Korean: 긴 문맥을 여는 다섯 갈래
Centre: a navy rounded box labelled 표준 어텐션: 계산 n², KV 캐시 n
Five cards arranged around it in a pentagon, alternating violet and green, connected to the centre by thin lines. Each card has a small grey section tag, a bold title, and one short line:
card 1 tag 2.3.1, title 구현 최적화, line 저정밀도 · IO 인식 어텐션 · 시퀀스 병렬
card 2 tag 2.3.2, title 효율적 구조, line 희소 어텐션 · 선형 어텐션 · 순환 모델
card 3 tag 2.3.3, title 캐시와 메모리, line 고정 크기 KV 캐시 · 메모리 기반 모델
card 4 tag 2.3.4, title 헤드 · 층 공유, line MQA · GQA
card 5 tag 2.3.5, title 위치 외삽 · 보간, line RoPE 위치 보간
```

### rope-rotation

```
Title at top in Korean, using a short ASCII hyphen with spaces: RoPE - 위치를 회전 각도로 적는다
Left panel: a 2D coordinate plane with the origin at centre. Four arrows of exactly equal length start at the origin, evenly spaced by exactly 30 degrees: a grey arrow pointing right along the x axis (0 degrees) labelled 위치 0, a violet arrow at 30 degrees labelled 위치 1: θ, a violet arrow at 60 degrees labelled 위치 2: 2θ, and a violet arrow pointing straight up at 90 degrees labelled 위치 3: 3θ. Three identical small arcs mark the three equal 30 degree gaps, each gap marked θ.
Right panel: two arrows from the origin, a green arrow labelled 쿼리 (위치 i) and a violet arrow labelled 키 (위치 j), with an arc between them labelled (i - j)θ. Below them a box: 내적은 각도 차에만 달려 있다 = 상대 위치
Bottom strip: two small dials side by side, one spinning fast labelled 빠른 차원 쌍, one turning slowly labelled 느린 차원 쌍, with the note 차원 쌍마다 회전 속도가 다르다
```

### position-interpolation

```
Title at top in Korean, using a short ASCII hyphen with spaces: 학습 길이 밖으로 - 외삽과 위치 보간
Top row labelled 외삽: a long horizontal ruler. The left part from 0 to m_l is green and labelled 학습 때 본 위치. The right part from m_l to m is shaded light red and labelled 본 적 없는 위치. Tick labels under the ruler: 0, m_l, m.
Bottom row labelled 위치 보간: a long dashed ruler on top from 0 to m (tick labels 0 and m), and directly below it a shorter solid green ruler from 0 to m_l (tick labels 0 and m_l), both starting at exactly the same left x position. Nine straight thin arrows connect evenly spaced ticks of the dashed ruler to evenly spaced ticks of the green ruler, like a fan that narrows to the right: the leftmost arrow goes straight down from 0 to 0, the rightmost arrow goes from m on the dashed ruler down-left to m_l on the green ruler, and the arrows in between are evenly spread. Label beside the fan: 위치 x를 x · m_l / m 로 줄인다
Right side note box with two short lines: 새 위치가 모두 학습한 범위 안에 들어온다 / 짧은 추가 학습으로 적응
```

### lost-in-middle-u

```
Title at top in Korean, using a short ASCII hyphen with spaces: 가운데가 꺼진다 - Lost in the Middle
A single simple line chart with no numbers on either axis. Horizontal axis label: 정답 문서의 위치 (처음 → 끝). Vertical axis label: 정답률.
The line is a clear U shape: high at the left end, dropping to a low valley in the middle, rising high again at the right end.
Callout at the left peak: 처음 - 초두 편향. Callout at the right peak: 끝 - 최신 편향. Callout at the valley: 가운데 - 가장 낮다.
Small grey caption under the chart: 개념도, 수치 없음
```

### rag-vs-long

```
Title at top in Korean: 갱신이 잦은 문서, 어떻게 넣을까
Two panels side by side.
Left panel titled 검색 결합: a stack of document icons labelled 행정 문서 flows into a box labelled 색인, then a funnel labelled 관련 조각만 꺼냄, then a short bar labelled 짧은 문맥, then a box labelled 모델. Note under the panel: 문서가 바뀌면 색인만 고친다
Right panel titled 초장문맥: the same stack of document icons flows directly into a very long bar labelled 긴 문맥 (문서 전체), then a box labelled 모델. Note under the panel: 질문마다 문서 전체를 다시 읽는다
Bottom strip with three small chips: 비용, 지연, 갱신 주기, and the caption 세 조건으로 비교한다
```

### concept-map-1-7

```
Title at top in Korean: 1~7주차 개념 위계
A bottom-up stack of four wide horizontal layers, like floors of a building:
bottom layer, navy outline: 아키텍처 (1~2주) with small chips 어텐션, 학습 루프, KV 캐시
second layer, green: 적응 (3주) with small chips LoRA, QLoRA
third layer, violet: 제어 (4~5주) with small chips 프롬프트, 문맥학습, 평가 지표
top layer, light green: 확장 (6~7주) with small chips 멀티모달, 장문맥
A thin upward arrow along the right side labelled 앞 마디의 산출물이 다음 마디의 재료
Above the top layer, a dashed empty box labelled 다음: 검색 결합 (9주)
```
## 이미지 자산 (matplotlib)

정확한 수치를 보여야 하는 그림은 matplotlib로 그렸다. 글꼴 AppleGothic, 2560x1428.

| 파일 | 용도 | 값 |
|---|---|---|
| rope-periods.png | Qwen3-0.6B-Base RoPE 차원 쌍 64개의 주기 | 기저 1,000,000, 헤드 차원 128에서 T_k = 2π x b^(2(k-1)/d). k = 1은 6.28토큰, k = 64는 약 506만 토큰. 32,768 안에서 한 바퀴를 못 도는 쌍 24개. 노트북 1-4 출력과 같다 |
| prefill-time.png | 입력 길이별 프리필 시간 | 노트북 1-5 실측(작성 환경 CPU, fp32, 1회) |
| recall-grid.png | 문서 길이 x 깊이별 회수율 | 노트북 2를 TODO 길이 [500, 1000, 2000, 4000, 7000]으로 바꿔 실행한 값 |

## 인터랙티브 컴포넌트

- `KvCacheCalc.astro`: Qwen3-0.6B-Base 설정(층 28, KV 헤드 8, 헤드 차원 128, 최대 위치 32,768, 파라미터 596,049,920개)으로 KV 캐시와 가중치 크기를 비교한다. GQA 8 대 MHA 가정 16, bf16 대 fp32를 고를 수 있다
- `RopeDial.astro`: 같은 설정에서 차원 쌍 k = 1, 48, 56의 회전 각도를 다이얼로 보인다. 초록 호는 위치 0~32,768(최대 위치, 경계 포함)에서 지나간 각도 범위다. 위치 보간 x4를 켜면 위치를 1/4로 줄인다

## 검수 기준

- 전 자산 육안 검수. 한글 라벨 깨짐, 수치 오류, 실측과 다른 구도, 지어낸 문구가 있으면 재생성
- 그림 속 수치는 본문 표와 노트북 출력에 맞춘다. 정확한 수치의 기준은 본문과 노트북이다
