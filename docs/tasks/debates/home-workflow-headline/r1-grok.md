debater: grok · round: 1 · run: 2026-10-19 10:24 · command: default

홈 워크플로 헤드라인 결정을 위해 토론 문서와 관련 카피·컴포넌트를 먼저 읽겠습니다.ByteRover에서 관련 기억을 찾고, 로케일·홈 컴포넌트 카피를 같이 확인하겠습니다.제품 카피 톤과 카드 순서를 더 보고, 헤드라인이 실제로 어떻게 붙는지 맞추겠습니다.ByteRover 검색은 홈 카피와 무관한 히트만 나와서 쓰지 않았습니다. 로케일·히어로·제품 카드 기준으로만 판단합니다.

## Candidates

**D. 의도를 다듬고, 만들어 확인한다. / Shape it, then build and check.**  
KO 18자 · EN 31자. 쉼표가 넘겨주기이고, 앞 절은 사람(의도·취향·논의·계획), 뒤 절은 agent 구현과 함께 보는 확인이다.

**E. 쓰고 논의하고, 만들고 확인한다. / Write, discuss. Build, verify.**  
KO 18자 · EN 30자. 요청하신 네 박자를 가장 그대로 펼친다. 두 문장으로 묶어 카드 세 장과 박자가 겹치지 않는다.

**F. 다듬는 사람, 만드는 agent. / You shape. Agents build.**  
KO 18자 · EN 24자. 역할 분담이 가장 선명하다. 마지막 확인 박자는 제목 밖에 남는다.

**G. 취향을 담아, 함께 확인한다. / Taste in, then check together.**  
KO 16자 · EN 30자. 취향과 공동 확인이 드러난다. 논의·계획·구현은 제목에서 접힌다.

**C. 사람과 agent가 일을 넘겨받는 자리. / Where people and agents hand off.**  
기존안. 넘겨주기는 이 사이트의 핵심 장치다. KO 22자·EN 33자로 길이 한도를 넘고, 흐름의 시작(의도·취향)과 끝(함께 확인)이 제목에 없다.

## Recommendation

**D.** `의도를 다듬고, 만들어 확인한다.` / `Shape it, then build and check.`

`products.subtitle` 제안:

- KO: `사람은 의도와 취향을 다듬고 승인을 쥐며, agent는 계획하고 구현합니다. workbranch·Tasteful Intent·tk workflow가 그 흐름을 받칩니다. 각각 따로 써도 됩니다.`
- EN: `You shape intent and taste and keep approval; agents plan and build. workbranch, Tasteful Intent, and tk workflow support that flow. Each works on its own.`

역할 라벨은 단계 이름으로 바꾸지 않는다. 카드 세 장을 제목의 박자에 대응시키면 이미 접은 “three steps”가 다시 생긴다.

- workbranch: `작업 공간` / `Task space` 유지. 흐름이 일어나는 자리이지 한 단계가 아니다.
- Tasteful Intent: `의도` → `의도와 취향` / `Intent` → `Intent & taste`. 제품 페이지가 이미 쓰는 말이고, 제목의 “다듬다”가 가리키는 원천을 카드에서 밝힌다.
- skills: `단계별 실행과 검토` / `Staged runs & review` 유지. 이 제품 안의 다섯 단계와 사람 게이트를 가리키는 라벨로 남긴다.

## Rationale

히어로 제목은 이미 *무엇*이다. “AI 에이전트와 효과적으로 협업하는 workflow.” / “A better workflow for collaborating with AI agents.” 히어로 본문은 역할(의도와 결정은 사람, 그사이는 agent)과 조각 세 개와 “함께 써도 따로 써도”까지 말한다. 제품 섹션 h2의 일은 그 workflow가 *어떻게 흘러가는지*를 한 호흡으로 보여주는 일이다.

A는 그 일이 아니다. `작업 공간, 의도, 그리고 검토.` / `Space, intent, and review.`는 아래 카드 순서(workbranch → Tasteful Intent → skills)의 명사 목록이다. B `함께 써도, 하나씩 써도.`는 히어로 본문에 이미 있는 조합 규칙이다.

D의 한국어 동사 **다듬다**가 한 단어로 받는 것은 취향을 넣고, AI와 논의하고, 계획을 고르는 앞부분이다. `계획`·`구현`·`검증`처럼 tk workflow 단계 이름을 쓰지 않으므로 다섯 단계와 겹치지 않는다. 쉼표 뒤 **만들어 확인한다**가 AI 실행과 마지막 공동 확인이다. 확인을 `검증`으로 쓰지 않는 이유는 `tk-verify`와 한 제품의 한 단계를 홈 제목 전체로 올리지 않기 위해서다.

영어는 같은 쉼표를 `then`으로 둔다. `Shape it`이 의도·취향·논의·계획, `build and check`가 구현과 공동 확인이다. `workflow`·`agents`·`collaborating`을 반복하지 않는다.

문체도 사이트 안에 있다. 제품 페이지 제목이 이미 두 절이다. `CLI로 만들고, Companion으로 봅니다.` `의도가 먼저. 결과는 따로.` 한국어에 영어 단어를 심는 버릇은 제목보다 서브타이틀의 `agent`·제품명에 둔다. h2를 18자로 묶으면 `agent`를 넣는 순간 역할 문장(F)으로 기울고 흐름이 줄어든다.

카드는 그 흐름을 *받치는* 도구로 읽히면 된다. 서브타이틀이 제품 이름을 부르고, 역할 라벨은 기능으로 남긴다. 세 제품이 정해진 순서로만 쓰인다는 읽기가 여기서 끊긴다.

## Risks of my option · Risks of the others

**D**
- `다듬다`는 사이트의 평서 동사(`쓰다`, `남기다`, `맡다`)보다 조금 공들여 들린다.
- EN `it`의 지시 대상이 약하다. 변경 한 건·의도 문서·task 모두로 읽힐 수 있다.
- `max-w-[13ch]`는 지금 제목(`Space, intent, and review.`)에 맞춰져 있다. D의 EN 31자는 단어 경계에 따라 세 줄로 떨어질 수 있어, 구현 때 `16ch` 전후로 숨 고르기가 필요할 수 있다.
- `만들어 확인한다`가 카드 두 장(Tasteful Intent 다음 skills)으로 오독될 여지는 남는다. 서브타이틀과 역할 라벨이 그 읽기를 막는 쪽에 있다.

**A** 흐름이 아니라 재고 목록이다. 이번 질문의 대상이 아니다.  
**B** 조합 규칙만 말하고, 히어로와 겹친다.  
**C** 길이 한도를 넘는다. `자리`는 제품 그리드에 장소 은유를 씌운다. 의도·취향·확인이 제목 밖으로 나간다.  
**E** 네 동사가 레시피처럼 들린다. EN `Write`가 Tasteful Intent 한 장에 붙기 쉽다. `verify`는 `tk-verify`와 맞닿는다.  
**F** 히어로 본문의 역할 분담을 한 번 더 말한다. 함께 확인이 빠진다.  
**G** Tasteful Intent 브랜드에 무게가 쏠린다. 가운데 실행이 접혀 workbranch·skills가 제목과 멀어 보인다.

## What would change my mind

홈을 보는 사람이 제목에서 **네 박자를 다 세기를 원하면** E로 옮긴다. `쓰고 논의하고, 만들고 확인한다.`가 원문 요청에 가장 가깝다.

`다듬다`가 실제 문장에서 겉돌면, 같은 두 절 구조로 사이트 동사만 바꾼다. `정하고 맡기고, 함께 확인한다.` / `Decide, hand off, then check.` 이 안으로 갈 때는 세 박자가 세 카드와 겹치지 않게 역할 라벨을 더 분명히 기능으로 고정해야 한다.

섹션의 일이 흐름이 아니라 **세 제품의 이름 붙이기**로 남으면 A를 유지하고, 흐름은 서브타이틀에만 둔다. 지금 질문의 원문은 그 반대다.

역할 분담을 h2의 첫 문장으로 올리고 싶다면 F. 그때는 서브타이틀이 `계획하고 구현한 뒤 함께 확인한다`를 반드시 받아 줘야 한다.

EN을 사용자 원문의 `verify`에 맞출 거면 D를 `Shape it, then build and verify.`(32자)로 바꾸고, skills 페이지의 “Five stages” 카피와 한 화면에서 같이 읽히는지를 한 번 더 본다.
