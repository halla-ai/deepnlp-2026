---
title: 강의계획서
description: 딥러닝자연어처리 (131307379A) 2026-2
---

## 과목 개요

| 항목 | 내용 |
|---|---|
| 과목명 | 딥러닝자연어처리 (Deep Learning for NLP) |
| 학수번호 | 131307379A |
| 대상 | 3학년 |
| 학점·시수 | 3학점 / 3시수 |
| 운영 | BL - 온라인 2시수(AI Professor) + 대면 1시수 |

선수과목 **언어모형과 자연어처리(131107967A)**. 토큰화·N-gram·임베딩·Transformer 기초는 이수 전제로 두고 재강의하지 않는다.

## 성적 판정 기준

□ 표현이 달라도 정답이다

- 용어를 다르게 써도, 한글과 영문을 섞어 써도, 설명 경로가 달라도 **개념을 옳게 짚었으면 정답**이다
- 참고자료의 문구와 다르다는 이유로 오답 처리하지 않는다

□ 중간 단계 부분점수

| 단계 | 내용 | 비중 |
|---|---|---|
| 1 접근 설계 | 왜 이 방법을 선택했는지, 비교 대상은 무엇인지 | 40% |
| 2 동작 | 코드가 의도대로 실행되고 결과를 산출 | 40% |
| 3 성능·비교 | 결과를 기준선과 비교하고 해석 | 20% |

- **1단계만 성립해도 점수가 나간다**
- 코드가 돌지 않았다는 이유로 0점을 주지 않는다. 무엇을 하려 했는지 서술하면 부분 점수를 받는다

## 평가 비중

| 항목 | 비중 |
|---|---|
| 출석 및 수업 참여 | 10% |
| 프로그래밍 과제 3회 | 30% |
| 중간고사 | 20% |
| 팀 프로젝트 | 40% |

## 주차별 주제

| 주 | 주제 |
|---|---|
| 1 | 차세대 NLP 아키텍처의 이해와 과목 뼈대 공유 |
| 2 | 구현 기반 - 학습 루프와 텐서 연산 |
| 3 | 효율적 미세조정의 원리와 변형 |
| 4 | 프롬프트와 문맥학습의 원리 |
| 5 | 평가 시스템과 지표가 측정하지 못하는 것 |
| 6 | 멀티모달 표현의 결합 |
| 7 | 장문맥 처리와 효율적 추론 |
| 8 | 중간고사 및 PEFT 심화 |
| 9 | 검색 결합 생성(RAG)의 구조 |
| 10 | 정렬 기법의 계보 - RLHF에서 GRPO까지 |
| 11 | 과정 감독과 신용 할당 - PRM과 토큰 수준 credit |
| 12 | AI 규제와 책임 있는 AI |
| 13 | 최신 연구 동향과 미래 전망 |
| 14 | 최종 프로젝트 개발 및 운영 전환 |
| 15 | 산업 응용 사례 분석 및 최종 발표 |

주차별 상세는 왼쪽 메뉴의 주차별 강의에서 볼 수 있다.

## 교재

주교재

- **_Speech and Language Processing_ 3판** - Jurafsky & Martin. **2026-01 완본**, 공개 PDF 무료
  - 이 과목은 **7~11장**을 쓴다. 선수과목이 1~9장을 다루므로 같은 책의 후반부로 이어진다
- **_Foundations of Large Language Models_** - Xiao & Zhu, 277쪽. arXiv:2501.09223. 무료
  - 정렬(RLHF·보상모델)의 깊이가 크다

부교재

- **_Reinforcement Learning from Human Feedback_** - Nathan Lambert. **arXiv v1 2025-04-16 공개, v11 2026-08-03 개정, 239쪽**
  - 학생 접근은 계속 갱신되는 [웹 교재](https://rlhfbook.com/) 우선, 인용·검증은 [arXiv v11](https://arxiv.org/abs/2504.12501v11)로 고정. [공식 강의](https://rlhfbook.com/course)는 선택 학습자료
  - **전체 239쪽 일괄 지정 아님.** 1·10·11주차 필수 범위와 1·5·12·13주차 선택 범위만 활용
- **_NLP with Transformers_ 실습 노트북** - Colab 대응 12개. 무료. 책 본문은 별도 유료 저작물이다
- **Hugging Face Course** 11장·12장. 영문

### 주차별 읽기 범위

FoLM = Foundations of LLM, RLHF Book = Reinforcement Learning from Human Feedback.

| 주 | 읽기 |
|---|---|
| 1 | SLP3 ch8 + 상태공간모델 논문(Mamba·RWKV·Jamba) + **필수: RLHF Book ch1 Introduction; 선택: ch2 A Tiny History of RLHF, ch3 Training Overview** |
| 2 | SLP3 ch6 Neural Networks |
| 3 | SLP3 ch10 + FoLM 4장 + LoRA·QLoRA 원전 |
| 4 | SLP3 ch7 + FoLM 3장 Prompting |
| 5 | SLP3 ch4.10, ch4.11, ch11.6 + pass@k 원전 + RLHF Book ch16 Evaluation(선택) |
| 6 | CLIP·Flamingo·LLaVA 논문 |
| 7 | FoLM 2장·5장 + Lost in the Middle |
| 9 | SLP3 ch11 Retrieval-based Models |
| 10 | **필수: RLHF Book ch3 Training Overview, ch5 Reward Modeling, ch6 Reinforcement Learning §6.2.8 Group Relative Policy Optimization(GRPO), ch8 Direct-Alignment Algorithms** + SLP3 ch10.1~10.3 + FoLM 4장 + 정렬 계보 논문 |
| 11 | **필수: RLHF Book ch5 Reward Modeling §5.5 Outcome Reward Models·§5.6 Process Reward Models, ch7 Reasoning and Inference-Time Scaling** + SLP3 ch10.4 + FoLM 5장 + 과정 감독 논문 |
| 12 | EU AI Act 원문 + **택1 탐색 읽기: RLHF Book ch10 The Nature of Preferences, ch11 Preference Data, ch14 Over-Optimization** |
| 13 | 서지 논문 + **택1 탐색 읽기: RLHF Book ch12 Synthetic Data & Distillation, ch13 Tool Use and Function Calling, ch15 Regularization, ch16 Evaluation** |

8·14·15주차는 신규 지정 장 없음. 12·13주차 RLHF Book 범위는 선택 읽기이며, 논문과 공식 문서 중심 진행.

## 실습 환경

- **Google Colab.** 브라우저만 있으면 된다. 설치할 것이 없다
- 실습 노트북은 이 저장소 `notebooks/` 에 있고 각 노트북 상단의 배지로 Colab에서 열린다

## 문의

- 강의 자료의 오류나 질문은 이 저장소의 Issues로 남긴다
- 성적·출결·예외 인정은 담당 교수에게 문의한다

---

본 문서는 학사시스템 수업계획서에서 파생된 **학생용 요약본**이다. 정본은 학사시스템 등록본이다.
