# 8주차 자산 생성 기록

생성 도구: Higgsfield CLI v1.1.24 (강의자료 제작용, 노트 본문에는 도구명 미기재)
생성일: 2026-10-01

## 공통 스타일 프롬프트 (이미지)

```
Flat vector infographic slide for a university NLP lecture, clean white grid background, pastel green and violet rounded boxes, dark navy legible Korean typography, minimal modern technical presentation style, flat design, no photorealism, no gradients. Render every Korean and English label exactly as written below, spelled exactly, and add no other text. No trailing periods on labels.
```

모델: nano_banana_pro, aspect_ratio 16:9, resolution 4k.
생성 후 ffmpeg로 2560px 폭 다운스케일. 7주차와 같은 파이프라인.

## 이미지 자산 (생성)

| 파일 | 용도 | 비고 |
|---|---|---|
| week-08-hero.png | 히어로 - 1~7주 체크포인트와 8주 중간 점검 | 1차 통과 |
| peft-family.png | 미세조정 여섯 가지가 학습하는 것 (3주차 기법) | 카드 문구를 3주차 노트와 대조. 1차 통과 |
| lora-targets.png | Qwen3-0.6B 한 층의 선형 층 일곱 개와 모양 | 모양을 config.json(hidden 1024, 쿼리 헤드 16, KV 헤드 8, 헤드 차원 128, intermediate 3072)과 대조. 1차 통과 |
| self-check-loop.png | 자가 점검 순환 | 1차 통과 |
| partial-credit.png | 구현 문항 중간 단계 부분점수 40 / 40 / 20 | 수업계획서 성적 판정 기준과 대조. 1차 통과 |
| concept-map-1-15.png | 15주의 지도와 지금 위치 | 1차 통과 |

## 이미지 프롬프트 (장면 부분)

### week-08-hero

```
Title at top in Korean: 중간 점검 - 지나온 길을 다시 그린다
A winding trail drawn from the bottom left toward the top right, like a hiking map. Seven round green checkpoints along the solid trail, labelled in order 1주, 2주, 3주, 4주, 5주, 6주, 7주. After the seventh checkpoint, a larger violet flag marker labelled 8주 중간 점검. After the flag the trail continues as a dashed line toward the top right with no more labels.
Bottom left corner: a small compass icon. Bottom right: a small navy note 빠진 마디를 찾는다
```

### peft-family

```
Title at top in Korean: 무엇을 학습하나 - 미세조정 여섯 가지
Six cards in a 3 by 2 grid. Each card has a bold title and one short line, plus a tiny flat icon:
card 1 title 전체 미세조정, line 가중치 W 전부, icon a large filled square
card 2 title LoRA, line 옆길 B · A만 학습, icon a large grey square with a small green side path made of two thin rectangles
card 3 title QLoRA, line 4비트로 얼린 W + 옆길 B · A, icon a grey square with a small 4-bit badge and the same green side path
card 4 title DoRA, line 크기 m + 방향(LoRA), icon an arrow split into a length bar and a direction arrow
card 5 title VB-LoRA, line 공용 벡터 은행에서 골라 섞기, icon a small shelf of vectors with arrows to several layers
card 6 title WaveFT, line 웨이블릿 계수 일부, icon a wave pattern with a few highlighted dots
Grey cards 1, violet card 3, green cards 2, 4, 5, 6. Bottom caption: 3주차에서 본 기법을 같은 잣대로
```

### lora-targets

```
Title at top in Korean: LoRA를 어디에 붙일까 - Qwen3-0.6B 한 층
A vertical diagram of one transformer layer, bottom to top: an input arrow labelled 입력 (1024), then a block titled 어텐션 containing four side-by-side rounded boxes labelled q_proj 1024→2048, k_proj 1024→1024, v_proj 1024→1024, o_proj 2048→1024, then a block titled 피드포워드 containing three boxes labelled gate_proj 1024→3072, up_proj 1024→3072, down_proj 3072→1024, then an output arrow labelled 출력 (1024).
The q_proj and v_proj boxes have a small green side-path badge labelled LoRA. The other boxes are plain grey.
Right side note: 이 층이 28번 반복된다
```

### self-check-loop

```
Title at top in Korean, using a short ASCII hyphen with spaces: 자가 점검 - 먼저 예측하고 실행으로 확인
Four rounded boxes arranged in a clockwise cycle with arrows between them:
box 1 green: 손으로 예측
box 2 violet: 셀 실행
box 3 green: 예측과 비교
box 4 violet: 틀린 곳은 해당 주차로
In the centre of the cycle a small navy label: 1~7주차
Bottom caption: 맞힌 것보다 틀린 이유가 더 중요하다
```

### partial-credit

```
Title at top in Korean: 구현 문항 채점 - 중간 단계 부분점수
Three horizontal stacked segments of one long bar, left to right, with widths in the ratio 40 : 40 : 20:
segment 1 green labelled 1 접근 설계 40%
segment 2 violet labelled 2 동작 40%
segment 3 light green labelled 3 성능 · 비교 20%
Under segment 1: 왜 이 방법인가, 비교 대상은
Under segment 2: 의도대로 실행되고 결과가 나오는가
Under segment 3: 기준선과 비교하고 해석했는가
Bottom note box: 1단계만 성립해도 점수가 있다 · 표현이 달라도 개념이 맞으면 정답
```

### concept-map-1-15

```
Title at top in Korean: 15주의 지도와 지금 위치
A horizontal row of six large rounded stage boxes connected by arrows, left to right:
아키텍처 (1~2주), 적응 (3 · 8주), 제어 (4~5 · 10~11주), 확장 (6~7주), 검색 결합 (9주), 시스템화 (12 · 14주)
The first four boxes are filled green. The last two boxes are outlined only with a dashed border.
A violet pin marker stands between 확장 and 검색 결합, labelled 지금: 8주 중간 점검.
Below the row, one wide light box labelled 종합: 13주 최신 동향 · 15주 최종 발표
```
## 이미지 자산 (matplotlib)

정확한 수치를 보여야 하는 그림은 matplotlib로 그렸다. 글꼴 AppleGothic, 2560x1428.

| 파일 | 용도 | 값 |
|---|---|---|
| lora-params.png | Qwen3-0.6B-Base의 모듈별, 설정별 LoRA 학습 파라미터 | 노트북 3에서 peft로 센 값. q·v r=8 1,146,880, 일곱 모듈 5,046,272, DoRA q·v 1,232,896, r=32 q·v는 공식 32 x (3,072 + 2,048) x 28 = 4,587,520 |
| peft-memory.png | 학습 메모리 어림 (3주차 16바이트 규칙) | 노트북 3-1. 전체 미세조정 8.88, LoRA 2.24, QLoRA 0.51 GiB(임베딩을 2바이트로 둠) |

## 인터랙티브 컴포넌트

- `LoraBudget.astro`: Qwen3-0.6B-Base 한 층의 선형 층 일곱 개에서 붙일 곳과 랭크, DoRA 여부를 고르면 학습 파라미터와 학습 메모리 어림을 계산한다. 기본값(q·v, r = 8)은 노트북 3의 실측과 같다

## 검수 기준

- 전 자산 육안 검수. 한글 라벨 깨짐, 수치 오류, 실측과 다른 구도, 지어낸 문구가 있으면 재생성
- 그림 속 수치는 본문 표와 노트북 출력에 맞춘다. 정확한 수치의 기준은 본문과 노트북이다
