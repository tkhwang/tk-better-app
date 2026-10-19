# Debate · 홈 제품 섹션 제목을 "의도·취향 → AI와 논의해 계획 → AI 구현 → 함께 검증" workflow 전체를 아우르는 어떤 표현(KO/EN 한 쌍)으로 할 것인가?
decision: standalone (tk artifact 없음) · artifact: const/locale/{ko,en}.json `products.title` · run: 2026-10-19 · peers: claude, codex, grok

## Question

tkBetter.app 홈의 제품 섹션 제목(현재 "작업 공간, 의도, 그리고 검토." / "Space, intent, and review.")을, 사람의 의도와 취향을 담아 AI와 논의해 계획을 세우고, AI가 구현하고, 마지막에 함께 검증하는 workflow 전체를 아우르는 표현(KO/EN 한 쌍)으로 바꾼다면 무엇이 가장 좋은가?

## Context

- 사용자 요청(원문): "나의 의도, 취향을 담아서 AI 논의해서 계획을 세우고 / AI 가 이를 구현하고 최종 함께 검증하는 ... 뭔가 이런 workflow 를 아우르는 표현이 좋을 것 같아."
- 앞선 결정: 사이트 목표는 "단순 tool이 아니라 AI agent와 협업을 효과적으로 하기 위한 workflow 개선". "One workflow, three steps."는 세 제품이 정해진 순서처럼 읽히고 tk workflow의 "다섯 단계"와 겹쳐 어색하다는 피드백으로 폐기.
- 바꿀 문구: `const/locale/ko.json`, `const/locale/en.json` → `products.title`, `products.subtitle`, `products.items.<slug>.role`
- 렌더링: `components/home/product-rows.tsx` (h2, 48px, 두 줄 이내가 좋음), 히어로 `components/home/home-hero.tsx` → `hero.title` = "AI 에이전트와 *효과적으로* 협업하는 workflow." / "A better workflow for collaborating *with AI agents*."
- 제품 실체(`const/locale/*.json` → `product.*`):
  - Tasteful Intent: "나의 언어로 의도를 쓰고, 로컬 Markdown으로 보관" · AI 결과는 원본과 분리된 작업 공간
  - skills · tk workflow: "의도에서 signoff까지, 한 단계씩" · 다섯 단계(tk-intent → tk-plan → tk-implement → tk-verify → tk-signoff) · 단계마다 사람의 승인 · multi-agent 리뷰와 토론 · agent는 commit하지 않음
  - workbranch: feature마다 task 폴더 하나, 모든 repo를 한곳에 · 어떤 agent가 내 응답을 기다리는지 menu bar에서 확인
- 사이트 문체: 한국어 문장 안에 agent, workflow, task 같은 영어 단어를 그대로 섞어 씀.

## Options on the table

- A. 현재 유지: "작업 공간, 의도, 그리고 검토." / "Space, intent, and review."
- B. "함께 써도, 하나씩 써도." / "Use them together, or one at a time."
- C. "사람과 agent가 일을 넘겨받는 자리." / "Where people and agents hand off."
- (peer가 새 안을 D, E… 로 추가)

## Rounds

## Synthesis
