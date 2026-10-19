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

- r1 · claude → D「함께 계획하고, 함께 검증합니다.」/ "Plan together. Check together." (첫 실행은 CLI 인자 오류로 빈 답 → 다른 peer 답을 치운 상태에서 단독 재실행)
- r1 · codex → D「나의 의도에서 최종 승인까지.」/ "Your intent to your signoff."
- r1 · grok → D「의도를 다듬고, 만들어 확인한다.」/ "Shape it, then build and check."
- r2 · claude → 유지「함께 계획하고, 함께 검증합니다.」· role은 Tasteful Intent만「의도와 취향」으로
- r2 · codex → claude 안으로 변경「함께 계획하고, 함께 검증합니다.」
- r2 · grok → 새 안「나의 의도에서 함께 검토까지.」/ "Your intent, then review together."

## Synthesis

### 세 peer가 동의한 점

- A·B·C는 제목으로 쓰지 않는다. A는 카드 순서의 명사 목록, B·C는 히어로 부제를 반복한다.
- 제목에 의도·취향·논의·계획·구현·검증을 다 넣지 않는다. 제목은 흐름의 틀만, 빠진 부분(의도·취향, agent 구현)은 부제가 채운다.
- 구현의 주어는 부제에서 agent로 밝힌다. 계획은 "agent가 계획"이 아니라 사람과 AI가 논의해 세우는 것으로 쓴다.
- 카드 role은 단계 이름으로 만들지 않는다. Tasteful Intent만「의도와 취향 / Intent & taste」로 바꾸고, workbranch「작업 공간」, skills「단계별 실행과 검토」는 유지한다(codex는 workbranch를「task별 작업 공간 / Task workspaces」로 바꾸자는 쪽, 작은 차이).
- 「최종 승인 / signoff」를 섹션 제목의 끝말로 올리지 않는다(codex도 r2에서 철회). signoff는 skills 한 제품의 마지막 단계이고, 사람 승인은 단계마다 있다.

### 남은 선택 (취향의 문제, 사람이 결정)

1. **「함께 계획하고, 함께 검증합니다.」/ "Plan together. Check together."** — claude, codex
   - 사용자가 짚은 두 개의 "함께"(AI와 논의해 계획, 최종 함께 검증)를 그대로 제목에 올린다. 사이트 EN 제목의 평행 두 문장 형식("Create with the CLI. Watch with Companion.")과 같다. 두 마디라 카드 세 장과 짝지어 읽히지 않는다.
   - 위험: 의도·취향과 agent 구현이 제목에 안 보여 부제·라벨에 기댄다. 계획과 검증을 한 제품 안에 다 가진 건 skills뿐이라 섹션이 tk workflow 쪽으로 기울 수 있고, "처음부터 끝까지 함께"로 읽힐 여지가 있다(grok).
2. **「나의 의도에서 함께 검토까지.」/ "Your intent, then review together."** — grok
   - 시작(사람의 의도)과 끝(함께 검토)을 한 구절로 묶어 사람이 주도한다는 점이 제목에서 보인다. 중간 단계 수를 말하지 않아 다섯 단계와 충돌하지 않는다.
   - 위험: "의도에서 …까지" 구조가 skills 카드 설명과 겹친다(아래 사실 확인). 계획·구현이 제목에서 접힌다. EN "then"이 다소 느슨하다.
3. **「함께 계획하고, 맡기고, 함께 검증합니다.」/ "Plan together. Hand off. Check together."** — claude의 대안(grok의「정하고 맡기고, 함께 확인」과 같은 계열)
   - agent 구현을 "맡기다 / hand off"로 넣어 네 박자를 거의 다 보여 주고, 히어로의 "handoff" 어휘와 이어진다.
   - 위험: 세 박자가 카드 세 장 위에 놓여 짝지어 읽힐 수 있다. EN이 "Plan together. Hand / off. Check together."로 어색하게 끊겨 수동 줄바꿈이 필요하다(아래 사실 확인).

### repo에서 확인한 사실

- **줄 수:** 실제 홈 h2(Instrument Sans 600, 48px, EN `max-w-[13ch]`)에 후보를 넣어 headless Chrome으로 렌더링. 모든 후보가 EN 2줄(1280px, 375px 모두), KO는 데스크톱 1줄, 모바일 2줄. peer들이 걱정한 "13ch에서 3줄" 문제는 없어서 `max-w` 조정이 필요 없다.
  - 1번 EN: "Plan together. / Check together." (문장 단위로 깔끔하게 끊김), KO 모바일: "함께 계획하고, / 함께 검증합니다."
  - 2번 EN: "Your intent, then / review together.", KO 모바일: "나의 의도에서 / 함께 검토까지."
  - 3번 EN: "Plan together. Hand / off. Check together." (구 중간에서 끊김)
- **KO 문체:** `const/locale/ko.json`에 "~한다." 해라체 문장이 0개. grok r1 안(「…확인한다.」)은 사이트 문체에서 벗어난다(grok도 r2에서 철회).
- **중복 문구:** `products.items.skills.description`이 KO「하나의 변경을 의도에서 signoff까지 …」/ EN "take one change from intent to signoff". "의도에서 …까지" 꼴의 제목(codex r1, grok r2)은 이 카드 설명을 되풀이한다.
- **제품 범위:** `product.tasteful-intent.features.subtitle` — 앱은 LLM을 직접 실행하지 않는다. "세 제품이 각자 함께 계획·검증을 다룬다"(claude r1)는 과장이고, 제목은 세 제품이 함께 받치는 흐름 전체를 말하는 것으로 읽혀야 한다.

### 권장안

1번「함께 계획하고, 함께 검증합니다.」/ "Plan together. Check together."

- `products.subtitle` — KO「계획은 나의 의도와 취향에서 시작하고 구현은 agent가 맡으며, 세 도구는 이 흐름의 서로 다른 지점을 받쳐 각각 따로 써도 됩니다.」/ EN "Plans start from your intent and taste, agents handle the build, and each tool covers a different point in that flow, so any one works on its own." (제목이 비워 둔 의도·취향과 구현을 채움)
- `role` — Tasteful Intent만「의도와 취향 / Intent & taste」, 나머지 유지.

뒤집힐 조건: 사람이 주도한다는 출발점("나의 의도")이 제목에 꼭 보여야 하면 2번. agent가 구현한다는 마디가 제목에 꼭 있어야 하면 3번(EN 수동 줄바꿈 필요).

## Decision Log

- 2026-10-19 · Q1 홈 제품 섹션 제목 → C「함께 계획하고, 맡기고, 함께 검증합니다.」/ "Plan together. Hand off. Check together." · 사람의 결정으로 3번 선택(agent가 구현하는 마디를 제목에 둠). EN은 문장마다 줄바꿈(locale의 `\n` + `whitespace-pre-line`)으로 "Hand / off." 끊김을 막음. 부제는 제목과 겹치지 않게 의도·취향과 "맡긴 일은 단계마다 사람에게 돌아옴"으로, role은 Tasteful Intent만「의도와 취향 / Intent & taste」.
- 2026-10-20 · Q1 제목 첫 마디 수정 → 「방향은 내가, 보강은 AI가. / 맡기고, 함께 검증합니다.」/ "You lead, AI sharpens. / Hand off. / Check together." · 사람의 결정. "Plan together"의 "함께"가 반반 공동 작업으로 읽혀, 사람이 먼저 의도와 취향으로 방향을 정하고 AI가 보강한다는 순서와 주도권을 첫 마디에 담음(위 "뒤집힐 조건"의 사람 주도 출발점). 둘째·셋째 마디와 부제는 유지. KO는 첫 마디 뒤에서 줄바꿈(`\n`). skills README 그림과 사이트 skills hero에도 같은 세 마디를 단계 묶음으로 표시.
