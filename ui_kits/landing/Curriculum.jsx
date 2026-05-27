/* global React */
const { useState: useState_curr } = React;

function Curriculum() {
  const [tab, setTab] = useState_curr(0);
  const phases = [
    {
      key: 'P1',
      day: 'Day 1–11',
      title: '디자인 기초 + AI 시각 제작',
      goal: 'PD/BX/콘텐츠 차이 정의부터 AI로 광고급 비주얼까지',
      hooks: [
        '폰트 하나로 브랜드 가격을 10배 올리는 법',
        '마뗑킴은 왜 같은 그래픽을 100번 반복하는가',
        '스크롤 0.5초에 손가락을 멈추게 하는 카드뉴스의 비밀',
      ],
      out: 'AI 시각 제작 키트',
      tools: ['GPT', 'Midjourney', 'Firefly', 'Photoshop', 'Illustrator', 'Pinterest'],
    },
    {
      key: 'P2-1',
      day: 'Day 12–20',
      title: 'Figma 디지털 접점 설계',
      goal: 'Auto Layout · Component · 시스템 컬러 — 클론 가능한 화면까지',
      hooks: [
        '깨지지 않는 화면을 만드는 단 하나의 규칙 — Auto Layout',
        '한 번 만들면 100번 쓰는 UI 부품 만들기',
        '좋아하는 랜딩 페이지 똑같이 만들어보기 (Mobbin)',
      ],
      out: '클론 가능한 Figma 디지털 접점',
      tools: ['Figma', 'Mobbin', 'Notion'],
    },
    {
      key: 'P2-2',
      day: 'Day 21–27',
      title: '더블 다이아몬드 BX 리서치',
      goal: '리뷰 데이터 → 페르소나 → 포지셔닝까지 BX 사고법',
      hooks: [
        '5점 리뷰보다 1점 리뷰가 돈이 되는 이유 (VOC 30+)',
        '리서치 100장을 한 문장으로 줄이는 법',
        '누구에게, 어떻게 보여야 선택되는가',
      ],
      out: 'BX 리서치 리포트 — Double Diamond',
      tools: ['Notion', 'GPT', 'Claude', 'Sheets'],
    },
    {
      key: 'P3-1',
      day: 'Day 28–31',
      title: '프로토타입 기반 랜딩 재설계',
      goal: '첫 5초가 결정하는 랜딩 — IA 베껴서 내 것으로',
      hooks: [
        '첫 화면 5초가 결정짓는 모든 것',
        '좋은 랜딩의 IA를 베껴서 내 것으로 만들기',
        '리브랜딩한 페이지가 진짜로 작동하게 만드는 법',
      ],
      out: '클릭 가능한 리브랜딩 프로토타입',
      tools: ['Figma', 'Mobbin'],
    },
    {
      key: 'P3-2',
      day: 'Day 32–36',
      title: 'Tistory 기반 문제 발견',
      goal: '검색되는 디자이너 — GA4로 데이터 인사이트 추출',
      hooks: [
        '검색되는 디자이너가 되는 첫 번째 글',
        '내 글이 누구에게 어떻게 도착하는지 보는 법 (GA4)',
        '같은 글인데 제목 하나로 조회수가 10배',
      ],
      out: '데이터 인사이트 리포트 (Tistory + GA4)',
      tools: ['Tistory', 'GA4', 'Search Console'],
    },
    {
      key: 'P3-3',
      day: 'Day 37–41',
      title: 'AI 벤치마킹 신규 브랜드 기획',
      goal: '1시간만에 끝내는 AI 경쟁사 분석 → 네이밍·슬로건',
      hooks: [
        'AI에게 시키지 않으면 보이지 않는 5가지',
        '경쟁사 분석을 1시간에 끝내는 AI 워크플로우',
        '새 브랜드의 이름과 첫 마디를 짓는 AI 사용법',
      ],
      out: '신규 브랜드 기획안 v1',
      tools: ['GPT', 'Claude', 'Midjourney'],
    },
    {
      key: 'P3-4',
      day: 'Day 42–49',
      title: '웹 이론 + Antigravity 바이브 코딩',
      goal: '코드 없이 진짜 웹 포트폴리오를 배포까지',
      hooks: [
        'CSS는 그림이다 (Auto Layout ↔ Flex/Grid)',
        '코드 없이 웹 만들기 — Antigravity 첫 화면',
        '케이스 페이지가 채용 담당자에게 읽히는 구조',
      ],
      out: '웹 포트폴리오 (Antigravity 배포)',
      tools: ['Antigravity', 'GitHub Pages', 'Figma'],
    },
    {
      key: 'MINI',
      day: 'Day 50–57',
      title: '미니 프로젝트 — VOC 리브랜딩',
      goal: '진짜 고객이 화나 있는 브랜드를 골라 리브랜딩',
      hooks: [
        '별점 1점이 가장 비싼 정보다 (VOC 50+)',
        '50개 불만에서 3개의 진짜 문제',
        '고객의 말로 브랜드를 다시 쓴다',
      ],
      out: '포트폴리오 #1 — VOC 리브랜딩',
      tools: ['Figma', 'GPT', 'Notion'],
      featured: true,
    },
    {
      key: 'PJT-1',
      day: 'Day 58–72',
      title: '프로젝트 1 — 비즈니스 분석 리브랜딩',
      goal: '시장에 살아있는 비즈니스 BM 분석 + 랜딩 개선',
      hooks: [
        '경쟁사 5개의 랜딩이 똑같이 실패하는 이유',
        '구매하지 않은 70명의 마음 (VOC 70+)',
        '메시지에 맞는 비주얼만 살아남는다',
      ],
      out: '포트폴리오 #2 — 비즈니스 리브랜딩',
      tools: ['Figma', 'Midjourney', 'GA4', 'Claude'],
      featured: true,
    },
    {
      key: 'PJT-2',
      day: 'Day 73–87',
      title: '프로젝트 2 — 신규 브랜드 런칭',
      goal: 'Value Proposition Canvas부터 실제 URL 배포까지',
      hooks: [
        '시장의 빈틈 한 곳에 새 브랜드를 세운다',
        '런칭 결과를 진짜 URL로 만든다 (Antigravity + GitHub Pages)',
        '멘토 한 마디로 결과물이 달라지는 순간',
      ],
      out: '포트폴리오 #3 — 신규 브랜드 런칭',
      tools: ['Antigravity', 'Figma', 'Firefly', 'GitHub'],
      featured: true,
    },
    {
      key: 'CAREER',
      day: 'Day 88–90',
      title: '취업 컨설팅',
      goal: '포폴 → 이력서 → 지원 패키지 완성',
      hooks: [
        '현업자가 1초 안에 거르는 포트폴리오',
        '무경력의 프로젝트를 경력처럼 쓰는 법',
        '90일의 결과를 취업으로 연결한다',
      ],
      out: '취업 패키지 (이력서·자소서·지원 흐름)',
      tools: ['Notion', '현업 멘토 1:1'],
    },
  ];

  const cur = phases[tab];

  return (
    <section id="curriculum" style={{ padding: '120px 24px', background: 'var(--bg-2)', position: 'relative' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>CURRICULUM · 90 DAYS</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 16,
        }}>
          11개 단계.<br />매 단계 손에 쥐는 결과물.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--fg-3)', marginBottom: 40, maxWidth: 720, lineHeight: 1.6 }}>
          강의를 듣고 끝나는 게 아닙니다. 매 단계 산출물이 쌓여
          <strong style={{ color: 'var(--fg-1)' }}> 3개의 BX 포트폴리오 + 취업 패키지</strong>가 됩니다.
        </p>

        {/* Phase chip tabs */}
        <div style={{
          display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap',
        }}>
          {phases.map((p, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              padding: '10px 16px', borderRadius: 9999,
              background: tab === i ? 'var(--accent)' : (p.featured ? 'rgba(255, 212, 0, 0.10)' : 'var(--bg-3)'),
              color: tab === i ? 'white' : (p.featured ? 'var(--signal-warn)' : 'var(--fg-2)'),
              border: tab === i
                ? '1px solid var(--accent)'
                : (p.featured ? '1px solid rgba(255, 212, 0, 0.32)' : '1px solid var(--stroke-1)'),
              fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-sans)',
              cursor: 'pointer', transition: 'all 220ms var(--ease-out)',
              letterSpacing: '-0.01em',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.7 }}>{p.key}</span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>

        {/* Active phase panel */}
        <div style={{
          background: 'var(--bg-1)', border: '1px solid var(--stroke-1)',
          borderRadius: 20, padding: 40,
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48,
        }}>
          <div>
            <div style={{
              fontSize: 12, color: 'var(--accent-hi)', fontWeight: 700,
              letterSpacing: '0.18em', marginBottom: 12,
            }}>{cur.day} · {cur.key}</div>
            <h3 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.02em', color: 'var(--fg-1)', marginBottom: 16 }}>
              {cur.title}
            </h3>
            <p style={{ fontSize: 16, color: 'var(--fg-3)', lineHeight: 1.65, marginBottom: 28 }}>
              {cur.goal}
            </p>
            <div style={{ fontSize: 11, color: 'var(--fg-4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
              SAMPLE CHAPTERS
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {cur.hooks.map((h, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  color: 'var(--fg-1)', fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em',
                  lineHeight: 1.5,
                }}>
                  <span style={{
                    fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--accent-hi)',
                    background: 'var(--accent-tint)', padding: '3px 7px', borderRadius: 4,
                    flexShrink: 0, marginTop: 4, letterSpacing: '0.06em',
                  }}>CH</span>
                  <span>"{h}"</span>
                </li>
              ))}
            </ul>
            {cur.tools && (
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--stroke-1)' }}>
                <div style={{ fontSize: 11, color: 'var(--fg-4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                  TOOLS
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {cur.tools.map((t, i) => (
                    <span key={i} style={{
                      fontSize: 12, fontWeight: 600,
                      padding: '5px 10px', borderRadius: 6,
                      background: 'var(--bg-3)', color: 'var(--fg-2)',
                      border: '1px solid var(--stroke-1)',
                      letterSpacing: '-0.01em',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{
            background: cur.featured ? 'rgba(255, 212, 0, 0.08)' : 'var(--accent-tint)',
            border: `1px solid ${cur.featured ? 'rgba(255, 212, 0, 0.32)' : 'var(--accent-tint-2)'}`,
            borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column', gap: 8,
            alignSelf: 'start',
          }}>
            <div className="eyebrow" style={{ color: cur.featured ? 'var(--signal-warn)' : 'var(--accent-hi)' }}>
              {cur.featured ? '★ PORTFOLIO MILESTONE' : 'DELIVERABLE'}
            </div>
            <div style={{
              fontSize: 28, fontWeight: 900, letterSpacing: '-0.03em',
              color: 'var(--fg-1)', lineHeight: 1.15,
            }}>
              {cur.out}
            </div>
            <div style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 8 }}>
              {cur.featured
                ? '지원서에 첨부할 수 있는 진짜 케이스 스터디.'
                : '다음 단계의 재료로 그대로 이어집니다.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { Curriculum });
