// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://deepnlp-2026.halla.ai',
  // Astro 6.4 leaves markdown.gfm undefined, and @astrojs/mdx 5.0.6 only adds remark-gfm
  // when it is truthy, so tables in .mdx pages render as raw pipes without this.
  markdown: { gfm: true },
  integrations: [
    starlight({
      title: '딥러닝 NLP 2026',
      description: '제주한라대학교 인공지능학과 3학년 - 대규모 언어모델의 적응, 정렬, 검색 결합',
      logo: { src: './src/assets/logo.svg' },
      editLink: { baseUrl: 'https://github.com/halla-ai/deepnlp-2026/edit/main/' },
      lastUpdated: true,
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/halla-ai/deepnlp-2026' },
      ],
      components: {
        Header: './src/components/Header.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '홈',
          items: [
            { label: '강의 소개', link: '/' },
            { label: '강의계획서', link: '/syllabus' },
            { label: '실습 노트북', link: '/notebooks' },
            { label: '과제 제출', link: '/assignments' },
          ],
        },
        {
          label: '주차별 강의',
          items: [
            { label: '1주차: 차세대 NLP 아키텍처의 이해와 과목 뼈대 공유', link: '/weeks/week-01' },
            { label: '2주차: 구현 기반 - 학습 루프와 텐서 연산', link: '/weeks/week-02' },
            { label: '3주차: 효율적 미세조정의 원리와 변형', link: '/weeks/week-03' },
            { label: '4주차: 프롬프트와 문맥학습의 원리', link: '/weeks/week-04' },
            { label: '5주차: 평가 시스템과 지표가 측정하지 못하는 것', link: '/weeks/week-05' },
            { label: '6주차: 멀티모달 표현의 결합', link: '/weeks/week-06' },
            { label: '7주차: 장문맥 처리와 효율적 추론', link: '/weeks/week-07' },
            { label: '8주차: 중간고사 및 PEFT 심화', link: '/weeks/week-08' },
            { label: '9주차: 검색 결합 생성(RAG)의 구조', link: '/weeks/week-09' },
            { label: '10주차: 정렬 기법의 계보 - RLHF에서 GRPO까지', link: '/weeks/week-10' },
            { label: '11주차: 과정 감독과 신용 할당 - PRM과 토큰 수준 credit', link: '/weeks/week-11' },
            { label: '12주차: AI 규제와 책임 있는 AI', link: '/weeks/week-12' },
            { label: '13주차: 최신 연구 동향과 미래 전망', link: '/weeks/week-13' },
            { label: '14주차: 최종 프로젝트 개발 및 운영 전환', link: '/weeks/week-14' },
            { label: '15주차: 산업 응용 사례 분석 및 최종 발표', link: '/weeks/week-15' },
          ],
        },
        {
          label: '특강',
          items: [
            { label: 'Jev와 LLM: 결정 모델과 생성 모델', link: '/topics/jev-vs-llm' },
          ],
        },
        {
          label: '참고자료',
          collapsed: true,
          items: [
            { label: '데이터 출처', link: '/reference/data' },
          ],
        },
      ],
    }),
  ],
});
