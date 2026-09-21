# 특강 Jev와 LLM 자산 생성 기록

생성 도구: Higgsfield CLI v1.1.24 (강의자료 제작용, 노트 본문에는 도구명 미기재)
생성일: 2026-09-22

## 공통 스타일 프롬프트 (이미지)

```
Flat vector infographic slide for a university NLP lecture, clean white grid
background, pastel green and violet rounded boxes, dark navy legible Korean
typography, minimal modern technical presentation style, flat design,
no photorealism, no gradients.
```

모델: nano_banana_pro, aspect_ratio 16:9, resolution 4k.
생성 후 ffmpeg로 2560px 폭 다운스케일(선명도 확보, 용량 억제). 4주차와 같은 파이프라인.

## 이미지 자산

| 파일 | 용도 | 비고 |
|---|---|---|
| jev-vs-llm-hero.png | 히어로 - 같은 질문, 두 갈래 계산 | 1차 생성본은 토큰 사슬이 임의 JSON 조각이라 폐기, 토큰 순서를 명시해 재생성 |
| token-stream-vs-parallel.png | 토큰 생성 계산과 확률 매기기 계산 | 1차 4k본에서 토큰 사슬에 분류/주차/긴급이 중복 배치되는 결함 -> 칩 7개와 순서를 한 줄씩 지정해 재생성 |
| question-types.png | Choice, Score, Noul 세 유형 | 1차 통과 |
| fan-out-parallel.png | 상태 하나에 질문 넷을 병렬 평가 | 1차 통과 |
| confidence-bars.png | 확률분포에서 확신도 뽑아내기 | 1차 통과. 두 패널 모두 계산식 표기 확인 |
| confidence-routing.png | 확신도 임계값 3단 라우팅 | 1차 통과. 코드 블록 3줄 본문과 일치 확인 |
| valid-vs-correct.png | 스키마 오류 대 판단 오류 | 1차 통과. 이 특강의 핵심 그림 |
| agent-loop.png | LLM을 감싸는 7단계 루프 | 1차 통과. 단계 번호와 색 배정 확인 |
| use-case-map.png | 결정 빈도 x 답의 범위 배치도 | 1차 통과 |
| cost-latency-bars.png | 벤더 공개 비용, 지연 비교 | 1차 통과. 하단 경고 띠 포함 확인 |

## 검수 기준

- 전 자산 육안 검수. 한글 라벨 깨짐, 수치 오류, 토큰 순서 오류 시 재생성
- 그림 속 수치는 본문 표와 일치시킨다. 정확한 수치의 기준은 이미지가 아니라 본문 마크다운 표
- 벤치마크 그림에는 벤더 공개치임을 알리는 경고 띠를 반드시 넣는다
- 제품명은 Jev만 표기하고, 비교 대상 상용 LLM은 대형 LLM A, B로 익명화한다

## 애니메이션

- 없음. 4주차에서 mp4를 폐기하고 스크립트 컴포넌트로 전환한 판단을 그대로 따른다
- 이 특강은 정지 이미지와 본문 표로 충분해 별도 컴포넌트를 만들지 않았다
