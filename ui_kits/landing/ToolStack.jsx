/* global React */

function ToolStack() {
  const groups = [
    {
      cat: 'AI',
      color: 'var(--accent-hi)',
      items: [
        { name: 'ChatGPT', logo: '../../assets/logos/openai.png', bg: '#FFFFFF' },
        { name: 'Claude', logo: '../../assets/logos/anthropic.png', bg: '#FFFFFF' },
        { name: 'Midjourney', logo: '../../assets/logos/midjourney.png', bg: '#FFFFFF' },
        { name: 'Firefly', logo: '../../assets/logos/firefly.png', bg: '#E6EBF1' },
      ],
    },
    {
      cat: 'DESIGN',
      color: 'var(--signal-success)',
      items: [
        { name: 'Figma', logo: '../../assets/logos/figma.png', bg: '#FFFFFF' },
        { name: 'Adobe CC', logo: '../../assets/logos/adobe.png', bg: '#F5F5F7' },
      ],
    },
    {
      cat: 'RESEARCH',
      color: 'var(--signal-warn)',
      items: [
        { name: 'Notion' }, { name: 'Pinterest' }, { name: 'Behance' }, { name: 'Mobbin' },
      ],
    },
    {
      cat: 'DATA',
      color: '#FF8FA3',
      items: [
        { name: 'Tistory' }, { name: 'GA4' }, { name: 'Search Console' }, { name: 'Sheets' },
      ],
    },
    {
      cat: 'WEB · 바이브 코딩',
      color: 'var(--accent-hi)',
      items: [
        { name: 'Antigravity', badge: 'USP' }, { name: 'GitHub Pages' }, { name: 'Chrome DevTools' },
      ],
    },
  ];

  return (
    <section id="tools" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>TOOL STACK · 100% INCLUDED</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 24, maxWidth: 880,
        }}>
          현업 디자이너가 쓰는 도구,<br />다 받고 시작합니다.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--fg-3)', marginBottom: 56, maxWidth: 720, lineHeight: 1.6 }}>
          AI · 디자인 · 리서치 · 데이터 · 웹 — 단계별 산출물에 필요한 모든 도구가
          <strong style={{ color: 'var(--fg-1)' }}> 수강료 안에 포함</strong>됩니다.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16,
        }}>
          {groups.map((g, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)', border: '1px solid var(--stroke-1)',
              borderRadius: 12, padding: 24,
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                color: g.color, marginBottom: 16,
              }}>{g.cat}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.items.map((t, j) => (
                  <span key={j} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: 13, fontWeight: 600,
                    padding: '6px 12px 6px 6px', borderRadius: 9999,
                    background: 'var(--bg-3)', color: 'var(--fg-1)',
                    border: '1px solid var(--stroke-1)',
                    letterSpacing: '-0.01em',
                  }}>
                    {t.logo ? (
                      <img src={t.logo} alt={t.name} style={{
                        width: 22, height: 22, borderRadius: 6, objectFit: 'contain',
                        background: t.bg || '#fff', padding: 2,
                      }} />
                    ) : (
                      <span style={{
                        width: 22, height: 22, borderRadius: 6,
                        background: 'var(--bg-4)', display: 'grid', placeItems: 'center',
                        fontSize: 11, fontWeight: 900, color: 'var(--fg-3)',
                      }}>{t.name[0]}</span>
                    )}
                    {t.name}
                    {t.badge && (
                      <span style={{
                        fontSize: 9, fontWeight: 900, letterSpacing: '0.08em',
                        padding: '2px 5px', borderRadius: 4,
                        background: 'var(--accent)', color: 'white',
                      }}>{t.badge}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 24, padding: '14px 18px',
          background: 'var(--accent-tint)', borderRadius: 12,
          border: '1px solid var(--accent-tint-2)',
          fontSize: 13, color: 'var(--fg-2)',
        }}>
          <strong style={{ color: 'var(--fg-1)' }}>＋장비</strong> M1 Pro 맥북 · 5만원 마우스 · 10만원 상당 BX 도서 4권
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { ToolStack });
