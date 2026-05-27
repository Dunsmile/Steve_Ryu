/* global React */

function CompetitorComparison() {
  const rows = [
    { label: '직무 범위', us: 'BX + Product + UX/UI 통합', sparta: '콘텐츠 단일', remain: 'UXUI 단일' },
    { label: '기간', us: '90일 (3개월)', usWin: true, sparta: '4개월', remain: '8주 오프라인' },
    { label: '자기부담금', us: '50만원', usWin: true, sparta: '약 100만원', remain: '94만원' },
    { label: '포트폴리오', us: '3개 (개인 BX 케이스)', usWin: true, sparta: '5개 팀 프로젝트', remain: '1.5개' },
    { label: 'AI 풀스택', us: 'GPT·Claude·MJ·Firefly·Antigravity', usWin: true, sparta: 'GPT·Gemini·MJ 등', remain: '미포함' },
    { label: '바이브 코딩 (Antigravity)', us: '✓ 진짜 URL 배포까지', usWin: true, sparta: '없음', remain: '없음' },
    { label: '취업 매칭 지원', us: '6개월 인턴십 매칭 + 무제한 코칭', usWin: true, sparta: '인턴십 연계 + 무제한 코칭', remain: '카톡방 1,200+' },
  ];

  return (
    <section id="compare" style={{ padding: '120px 24px', background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>WHY US · COMPARE</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 24, maxWidth: 880,
        }}>
          다른 부트캠프와 무엇이 다른가요?
        </h2>
        <p style={{ fontSize: 17, color: 'var(--fg-3)', marginBottom: 48, maxWidth: 720, lineHeight: 1.65 }}>
          숫자만 봅니다. 카피로 포장하지 않고.
        </p>

        <div style={{
          background: 'var(--bg-2)', border: '1px solid var(--stroke-1)',
          borderRadius: 20, overflow: 'hidden',
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.2fr 1.6fr 1.2fr 1.2fr',
            background: 'var(--bg-3)', borderBottom: '1px solid var(--stroke-1)',
          }}>
            <div style={{ padding: '18px 20px', fontSize: 11, color: 'var(--fg-4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>항목</div>
            <div style={{
              padding: '18px 20px', fontSize: 14, fontWeight: 800,
              color: 'var(--accent-hi)', letterSpacing: '-0.01em',
              borderLeft: '1px solid var(--stroke-1)', borderRight: '1px solid var(--stroke-1)',
              background: 'var(--accent-tint)',
            }}>
              ★ AI BX 프로덕트 디자이너
            </div>
            <div style={{ padding: '18px 20px', fontSize: 13, color: 'var(--fg-3)', borderRight: '1px solid var(--stroke-1)' }}>스파르타클럽 AI 콘텐츠</div>
            <div style={{ padding: '18px 20px', fontSize: 13, color: 'var(--fg-3)' }}>리메인커리어 UXUI</div>
          </div>

          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1.2fr 1.6fr 1.2fr 1.2fr',
              borderBottom: i < rows.length - 1 ? '1px solid var(--stroke-1)' : 'none',
              fontSize: 14,
            }}>
              <div style={{ padding: '18px 20px', color: 'var(--fg-3)', fontWeight: 500 }}>{r.label}</div>
              <div style={{
                padding: '18px 20px',
                color: 'var(--fg-1)', fontWeight: 700,
                letterSpacing: '-0.01em',
                borderLeft: '1px solid var(--stroke-1)', borderRight: '1px solid var(--stroke-1)',
                background: r.usWin ? 'rgba(61, 90, 254, 0.06)' : 'transparent',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                {r.usWin && (
                  <span style={{
                    fontSize: 10, fontWeight: 900, letterSpacing: '0.08em',
                    padding: '2px 6px', borderRadius: 4,
                    background: 'var(--accent)', color: 'white',
                  }}>WIN</span>
                )}
                {r.us}
              </div>
              <div style={{ padding: '18px 20px', color: 'var(--fg-2)', borderRight: '1px solid var(--stroke-1)' }}>{r.sparta}</div>
              <div style={{ padding: '18px 20px', color: 'var(--fg-2)' }}>{r.remain}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 24, fontSize: 12, color: 'var(--fg-4)',
        }}>
          * 2026.05 기준 공개 정보. 출처: 각 사 공식 랜딩페이지.
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { CompetitorComparison });
