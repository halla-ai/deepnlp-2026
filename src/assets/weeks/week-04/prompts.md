# 4주차 자산 생성 기록

생성 도구: Higgsfield CLI v1.1.24 (강의자료 제작용, 노트 본문에는 도구명 미기재)
생성일: 2026-09-21 (1차, 2k) / 2026-09-21 (2차, 4k 재생성 + 신규 5종)

## 공통 스타일 프롬프트 (이미지)

```
Flat vector infographic slide for a university NLP lecture, clean white grid
background, pastel green and violet rounded boxes, dark navy legible Korean
typography, minimal modern technical presentation style, flat design,
no photorealism, no gradients.
```

모델: nano_banana_pro, aspect_ratio 16:9.
2차부터 resolution 4k로 생성 후 ffmpeg로 2560px 폭으로 다운스케일(선명도 확보, 용량 억제).

## 이미지 자산

| 파일 | 용도 | 비고 |
|---|---|---|
| week-04-hero.png | 히어로 - 같은 모델, 다른 지시서 | 4k 재생성 |
| finetune-vs-prompt.png | 미세조정 vs 프롬프트 비교 | 4k 재생성 |
| prompt-anatomy.png | 프롬프트 핸부(지시문·예시·질의) | 4k 재생성. 1차 4k본 제목 '핸부' 오기(프롬프트 오탈자) → 정정 프롬프트로 재생성 |
| token-probability.png | 토큰 분해 + 다음 토큰 후보 읽기 | 신규(2차) |
| probability-shift.png | 문맥 A/B 다음 토큰 확률 비교 | 4k 재생성, 수치는 설명용 예시 |
| few-shot-panels.png | zero/one/few-shot 패널 | 4k 재생성 |
| label-balance.png | 라벨 편중 vs 균형 예시 묶음 | 신규(2차) |
| context-window-cost.png | 문맥 창과 입력 비용 | 신규(2차) |
| cot-steps.png | CoT 단계 흐름 | 4k 재생성 |
| cot-failure-chain.png | CoT 연쇄 오류 | 신규(2차) |
| sensitivity-bars.png | 프롬프트 A/B/C 정확도 막대 | 4k 재생성, 수치는 설명용 예시 |
| example-order-effect.png | 예시 순서 효과 | 4k 재생성 |
| prompt-opt-loop.png | 자동 최적화 루프 | 4k 재생성 |
| prompt-evolution.png | 루프 반복에 따른 프롬프트 개선 | 신규(2차). 1회 job failed(일시 오류) → 재시도 성공 |
| prompt-ops-checklist.png | 프롬프트 변경 점검 항목표 | 4k 재생성 |

## 애니메이션 (2차부터 동영상 폐기, 스크립트 컴포넌트로 전환)

- 1차: seedance_2_0_mini mp4 2편(probability-shift, cot-build)을 만들었으나,
  한글 라벨·수치 모핑 결함과 `*.mp4` gitignore 충돌로 폐기
- 2차: `src/components/ProbabilityShift.astro`, `src/components/CotSteps.astro`
  스크립트 애니메이션으로 대체. 텍스트는 실제 DOM 텍스트라 깨짐·수치 오류 없음.
  prefers-reduced-motion 대응

## 검수 기준

- 전 자산 ReadMediaFile로 육안 검수. 한글 라벨 깨짐·수치 오류 시 재생성
- 그림 속 수치는 본문 표와 일치시키고, 설명용 예시임을 본문에 명시
- 정확한 수치의 기준은 이미지가 아니라 본문 마크다운 표
