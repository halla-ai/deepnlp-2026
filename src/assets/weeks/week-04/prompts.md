# 4주차 자산 생성 기록

생성 도구: Higgsfield CLI v1.1.24 (강의자료 제작용, 노트 본문에는 도구명 미기재)
생성일: 2026-09-21

## 공통 스타일 프롬프트 (이미지)

```
Flat vector infographic slide for a university NLP lecture, clean white grid
background, pastel green and violet rounded boxes, dark navy legible Korean
typography, minimal modern technical presentation style, flat design,
no photorealism, no gradients.
```

모델: nano_banana_pro, aspect_ratio 16:9, resolution 2k

## 이미지 자산

| 파일 | 용도 | 비고 |
|---|---|---|
| week-04-hero.png | 히어로 - 같은 모델, 다른 지시서 | 1회 생성 |
| finetune-vs-prompt.png | 미세조정 vs 프롬프트 비교 | 1회 생성 |
| prompt-anatomy.png | 프롬프트 핸부(지시문·예시·질의) | 1회 생성 |
| probability-shift.png | 문맥 A/B 다음 토큰 확률 비교 | 1회 생성, 수치는 설명용 예시 |
| few-shot-panels.png | zero/one/few-shot 패널 | 1회 생성 |
| cot-steps.png | CoT 단계 흐름 | 1회 생성 |
| sensitivity-bars.png | 프롬프트 A/B/C 정확도 막대 | 1회 생성, 수치는 설명용 예시 |
| example-order-effect.png | 예시 순서 효과 | 2회 생성(1차본 '모델' 라벨 깨짐 → 재생성) |
| prompt-opt-loop.png | 자동 최적화 루프 | 1회 생성 |
| prompt-ops-checklist.png | 프롬프트 변경 점검 항목표 | 1회 생성 |

## 영상 자산

모델: seedance_2_0_mini, 480p, 5초, 16:9, audio off. start-image로 위 정지 이미지 사용.

| 파일 | 용도 | 비고 |
|---|---|---|
| probability-shift.mp4 | 확률 막대 재배열 애니메이션 | 2차본 채택(1차본 숫자 모핑 결함, 2차는 텍스트·수치 보존) |
| cot-build.mp4 | CoT 단계 점등 애니메이션 | 1차본 채택(수치 3,600원 정확, 일부 보조 라벨 깨짐. 2차본은 라벨은 깨끗하나 3,500원 수치 오류로 폐기) |

## 검수 기준

- 전 자산 ReadMediaFile로 육안 검수. 한글 라벨 깨짐·수치 오류 시 재생성
- 그림 속 수치는 본문 표와 일치시키고, 설명용 예시임을 본문에 명시
- 정확한 수치의 기준은 이미지가 아니라 본문 마크다운 표
