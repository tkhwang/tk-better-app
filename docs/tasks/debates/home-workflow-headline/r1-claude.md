debater: claude · round: 1 · run: 2026-10-19 10:30 · command: default

## Candidates

글자 수는 공백과 구두점을 포함해 셌습니다. 지금 EN h2에는 `max-w-[13ch]`가 걸려 있어서 한 줄에 14~15자 정도가 들어갑니다.

- **D.** 「함께 계획하고, 함께 검증합니다.」 / "Plan together. Check together." (KO 18 · EN 30)
  "함께"가 앞뒤에 한 번씩 나오고, 그 사이 빈칸이 agent가 구현하는 구간입니다. 이 구조가 흐름을 보여줍니다.
- **E.** 「의도는 사람이, 구현은 agent가, 검증은 함께.」 / "You plan, agents build, we check." (KO 28 · EN 33)
  요청 문장을 가장 그대로 옮긴 안입니다. 다만 길이가 넘치고, 세 마디가 아래 세 카드와 1:1로 짝지어 읽힙니다.
- **F.** 「일은 맡기고, 판단은 내가.」 / "Hand off the work, not the call." (KO 15 · EN 32)
  역할 분담은 가장 선명합니다. 하지만 흐름이 아니라 원칙을 말하고, "함께"가 빠집니다.
- **G.** 「취향대로 계획하고, 함께 검증합니다.」 / "Plan your way. Check together." (KO 20 · EN 30)
  D에 사람이 주도한다는 뜻(취향)을 더한 변형입니다. 대신 "your way"가 광고 문구처럼 들립니다.
- **H.** 「시작은 나로부터, 마무리는 함께.」 / "Start with you. Finish together." (KO 18 · EN 32)
  처음과 끝의 모양으로 흐름을 보여줍니다. 무엇을 시작하고 끝내는지가 흐릿하고, "It starts with you"라는 흔한 문구에 가깝습니다.

## Recommendation

**D. 「함께 계획하고, 함께 검증합니다.」 / "Plan together. Check together."**

**`products.subtitle`** (제목이 비워 둔 '의도·취향'과 '구현'을 여기서 채웁니다)
- KO: 「계획은 나의 의도와 취향에서 출발하고 구현은 agent에게 맡기며, 세 도구는 이 흐름의 서로 다른 지점을 받쳐 따로 써도 됩니다.」
- EN: "Plans start from your intent and taste, the build goes to agents, and each tool covers a different point in that flow, so any one works on its own."

**`role` 라벨은 바꾸기를 권합니다.** 제목에 없는 두 요소(사람이 출발점이라는 것, agent가 가운데를 맡는다는 것)를 라벨이 나눠 맡습니다.

| slug | 현재 | 제안 KO | 제안 EN |
|---|---|---|---|
| workbranch | 작업 공간 / Task space | agent가 일하는 곳 | Where agents work |
| tasteful-intent | 의도 / Intent | 의도와 취향 | Intent & taste |
| skills | 단계별 실행과 검토 / Staged runs & review | 단계마다 사람의 승인 | Human-gated stages |

이렇게 하면 제목(함께 정하는 순간 둘), 부제(출발점과 구현), 라벨(사람의 원천, agent의 자리, 사람의 승인)이 합쳐져 네 단계를 모두 덮습니다. 그러면서도 제목의 어느 단어도 특정 카드 하나에 묶이지 않습니다.

## Rationale

1. **세 마디 제목은 카드 순서와 부딪칩니다.** `PRODUCT_ORDER`는 workbranch → tasteful-intent → skills입니다. 지금 제목 "Space, intent, and review."는 바로 이 순서를 그대로 따른 제목입니다. 여기에 의도 → 구현 → 검증처럼 세 마디짜리 흐름 제목(E 같은 안)을 올리면, 읽는 사람은 마디를 카드에 짝지으려 합니다. 그런데 순서도 맞지 않고(첫 카드가 workbranch), 대응도 1:1이 아닙니다(tk workflow 하나가 계획·구현·검증을 다 다룹니다). "three steps"가 어색하다는 피드백도 같은 문제였습니다. 제목이 두 마디이면 카드 세 장과 짝지어질 수가 없습니다.
2. **세 제품이 각자 '함께 계획'과 '함께 검증'을 둘 다 다룹니다.** 그래서 따로 써도 제목이 맞습니다.
   - Tasteful Intent: 계획 전에 사람이 의도를 쓰고, AI 결과는 별도 작업 공간에서 열어 검토합니다.
   - tk workflow: 계획 쪽에 tk-intent 인터뷰, tk-plan, tk-grill, debate가 있고, 검증 쪽에 tk-verify, multi-review, signoff가 있습니다.
   - workbranch: agent가 시작하기 전에 refresh하고, 끝나면 Companion의 "턴 종료 · 검토" 열과 "내 응답 대기"에서 다시 사람에게 돌아옵니다.

   제목이 특정 제품 하나의 이야기가 아니라 셋이 공유하는 흐름을 말하게 됩니다.
3. **다섯 단계와 충돌하지 않고, 오히려 맞물립니다.** 숫자를 쓰지 않습니다. intent와 plan은 "계획" 쪽, verify와 signoff는 "검증" 쪽에 들어가고, 두 "함께" 사이의 빈 구간이 정확히 tk-implement(agent가 끝까지 도는 구간)입니다. 제목에서 빠진 부분이 곧 agent의 몫이라는 구조입니다.
4. **사용자 문장과 맞습니다.** 사용자 표현은 "AI와 **논의해서** 계획"과 "최종 **함께** 검증"이었습니다. 함께하는 두 순간을 사용자 본인이 이미 짚었고, D는 그 두 순간을 제목으로 올린 것입니다. 역할 분담 문장은 히어로 부제("의도와 결정은 사람이, 그 사이의 작업은 agent가")에 이미 있어서, 제목에서 반복하면 바로 위 문장과 겹칩니다.
5. **형식이 사이트 문체와 같습니다.** 「CLI로 만들고, Companion으로 봅니다.」와 같은 "~하고, ~합니다." 구조입니다. EN은 "Plan together." / "Check together." 두 줄로 자연스럽게 끊깁니다.

## Risks of my option · Risks of the others

**D의 위험**
- 제목만 훑는 사람에게는 '의도·취향'과 'AI가 구현'이 보이지 않습니다. 부제와 라벨에 기대는 설계라서, 둘 중 하나라도 약해지면 그냥 협업 구호처럼 읽힙니다.
- "together"가 히어로의 "collaborating"과 결이 겹칩니다. 다만 '어떻게'(계획할 때와 검증할 때)를 말한다는 점에서 반복은 아니라고 봅니다.
- plan과 check는 tk 용어라서, 섹션 전체가 tk workflow 중심으로 보일 수 있습니다.
- "Check together."(15자)가 13ch 안에서 세 줄로 넘어갈 수 있습니다. 렌더링해서 확인하고, 넘어가면 `max-w-[15ch]`로 늘려야 합니다.
- KO "검증"에 비해 EN "check"가 약합니다. "Verify together."(16자)는 줄바꿈 위험이 더 커서 택하지 않았습니다.

**다른 안의 위험**
- **E**: 가장 정확하지만 KO 28자로 길고, 카드와 순서가 어긋나 짝지어 읽힙니다. EN의 "we"는 저자 사이트에서 '저자와 그 팀'으로 오해될 수 있습니다.
- **F**: "판단은 내가"가 사용자가 말한 "함께 검증"을 지웁니다. 흐름이 아니라 원칙이라 이번 요구("어떻게 흘러가는지")를 비켜 갑니다.
- **G**: "Plan your way"는 "Have it your way" 같은 소비자 광고 어감이 있고, KO "취향대로 계획"은 결합이 조금 어색합니다.
- **H**: 무엇을 시작하고 끝내는지가 비어 있어서 개발자에게 구체적으로 읽히지 않고, 흔한 문구에 가깝습니다.
- **A**: 흐름 없이 제품 이름만 나열합니다.
- **B**: 히어로 부제의 "함께 써도, 따로 써도"를 반복하고, 흐름이 아니라 사용법을 말합니다.
- **C**: 히어로 부제의 "넘겨받는 지점"을 반복하고, 계획과 검증이 보이지 않습니다.

## What would change my mind

- 사용자가 "AI가 구현한다"는 마디가 제목에 반드시 있어야 한다고 하면, 「함께 계획하고, 맡기고, 함께 검증합니다.」 / "Plan together. Hand off. Check together."로 가겠습니다. EN이 세 줄이 되는 것과 max-w 조정은 감수합니다.
- 홈 카드 순서를 흐름 순서(Tasteful Intent → skills → workbranch)로 바꾸기로 하면, 세 마디 제목(E 계열)의 짝짓기 위험이 크게 줄어 E를 다시 검토하겠습니다.
- "제목만 봐도 사람이 주도한다는 게 보여야 한다"가 필수 조건이 되면 G를 다듬거나 F로 가겠습니다.
- 실제 렌더링에서 EN이 세 줄로 넘어가는데 max-w를 건드리지 않기로 하면, EN 표현을 줄여야 합니다.
- 피드백에서 "together"가 공허한 구호로 읽힌다는 반응이 나오면, 구체적인 동사가 있는 E 쪽으로 옮기겠습니다.
