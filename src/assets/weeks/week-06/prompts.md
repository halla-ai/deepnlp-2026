# 6주차 자산 생성 기록

생성 도구: Higgsfield CLI v1.1.24 (강의자료 제작용, 노트 본문에는 도구명 미기재)
생성일: 2026-09-25

## 공통 스타일 프롬프트 (이미지)

```
Flat vector infographic slide for a university NLP lecture, clean white grid
background, pastel green and violet rounded boxes, dark navy legible Korean
typography, minimal modern technical presentation style, flat design,
no photorealism, no gradients. Render every Korean and English label exactly
as written below, spelled exactly, and add no other text. No trailing periods
on labels.
```

모델: nano_banana_pro, aspect_ratio 16:9, resolution 4k (5504x3072).
생성 후 ffmpeg로 2560px 폭 다운스케일. 4·5주차와 같은 파이프라인.
CLI 결과의 `_min.webp`는 미리보기본이므로 쓰지 않고 원본 `.png`를 받는다.

## 이미지 자산 (생성)

| 파일 | 용도 | 비고 |
|---|---|---|
| week-06-hero.png | 히어로 - 사진과 문장이 공유 공간에서 만남 | 1차 통과 |
| contrastive-matrix.png | 대조 학습 4x4 유사도 표, 대칭 교차엔트로피 | 짝 4칸, 오답 12칸 확인. 1차본 제목의 긴 대시를 하이픈으로 재생성 |
| zero-shot-steps.png | 제로샷 분류 네 단계 | 1차 통과 |
| korean-label-collapse.png | 영어 장면 라벨 5/5 대 한국어 라벨 1/5 | 1차본은 영어 라벨을 실제 라벨이 아닌 대문자 요약으로 그렸고, 한국어 쪽 다섯 화살표가 모두 첫 라벨로 가서 실측(우도 -> 주차장 사진)과 달랐다. 라벨 문구와 화살표를 명시해 재생성 |
| alignment-failures.png | 정렬이 깨질 때의 네 가지 오류 | 0.274 대 0.266, a black color object 실측과 일치. 1차본 캡션 "확신에 차서 답한다"는 CLIP 확률(우도 0.215 대 0.214 등)과 맞지 않아 검토에서 지적. 재생성본 캡션이 굽은 따옴표로 그려져 캡션 띠를 잘라 냄(2560x1245). 같은 문장은 본문에 있다 |
| fusion-three-ways.png | CLIP, Flamingo, LLaVA 결합 방식 비교 | 1차본 제목 "사진을 언어모형에 잇는 세 가지 방법"은 CLIP에 언어모형이 없어 부정확하다는 검토 지적으로 "사진과 글이 만나는 세 자리"로 재생성. Flamingo의 동결 LM 사이 게이트 교차 어텐션, LLaVA의 투영 층 W와 동결 비전 인코더 확인 |
| smolvlm-tiles.png | 960x640 사진이 832토큰이 되는 과정 | 1차 통과. 타일 4x3=12 격자 확인 |
| text-only-vs-vlm.png | 텍스트 전용 모델은 지어내고 VLM은 사진을 말함 | 1차본은 성산을 연기 나는 활화산으로 그려 재생성. 재생성 1회차는 서버 검열 오탐(status nsfw)으로 실패, 재시도 성공. 이후 말풍선이 다른 질문의 답(hill, water, sky)이라는 검토 지적으로 실측 답 A seascape featuring a hill on the horizon을 넣어 재생성 |
| three-layer-analysis.png | 입력 표현, 정렬 공간, 생성 언어 세 층 | 1차본은 측정에 없는 예문("The image shows a cat.")을 지어 넣어 재생성 |

## 이미지 자산 (matplotlib)

정확한 수치를 보여야 하는 그림은 matplotlib로 그렸다. 글꼴 AppleGothic, 2560x1428.

| 파일 | 용도 | 값 |
|---|---|---|
| cosine-basics.png | 2차원 벡터로 본 코사인 유사도 | a(0.6, 0.8), b(0.8, 0.6), c(-0.8, 0.6). cos(a, b) = 0.96, cos(a, c) = 0 |
| visual-token-budget.png | SmolVLM 시각 토큰 수와 첫 토큰까지 시간 | 노트북 1-10 실측. 3:2는 크기와 상관없이 832, 1:1은 1,088, 4:1은 320, 분할 끔 64. 첫 토큰까지 40.3초 대 2.9초(작성 환경 CPU 1회 측정, 재측정 시 분할 켬 38.2초) |

## 인터랙티브 컴포넌트

- `ClipHeatmap.astro`: 유사도 행렬을 노트북과 같은 라벨로 다시 측정한 값으로 교체했다. 이전 값은 우도 행 4종이 현재 사진과 달랐고, 한국어 + 영어 섞기 라벨이 노트북 라벨과 달랐다(3/5로 표기, 실측 4/5). 표 칸은 스크립트가 만들므로 스타일을 `:global()`로 건다
- `ClipFlow.astro`: ViT-B/32 패치 크기(16x16 -> 32x32), 투영 층 설명, 데이터 언어 문장, 오타를 바로잡았다

## 검수 기준

- 전 자산 육안 검수. 한글 라벨 깨짐, 수치 오류, 실측과 다른 구도, 지어낸 문구가 있으면 재생성
- 그림 속 수치는 본문 표와 노트북 출력에 맞춘다. 정확한 수치의 기준은 본문과 노트북이다
