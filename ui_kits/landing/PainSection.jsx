/* global React */

function PainSection() {
  const items = [
    {
      tag: 'PD',
      name: '프로덕트 디자이너',
      thesis: '"이 기능이 필요한 이유"',
      desc: '사용자 데이터·리서치로 "왜 만드는가"를 설계. UI는 결과물, 사고가 핵심.',
      exit: '토스, 카카오 Pay, 우아한형제들',
    },
    {
      tag: 'BX',
      name: 'BX 디자이너',
      thesis: '"이 브랜드가 이 색이어야 하는 이유"',
      desc: '브랜드 전체 경험의 설계자. 시각·언어·공간·디지털 접점을 하나의 이유로 연결.',
      exit: 'LG생활건강, ably, 무신사, 아모레',
    },
    {
      tag: 'CD',
      name: '콘텐츠 디자이너',
      thesis: '"이 카드뉴스가 이 순서인 이유"',
      desc: '마케팅 목표를 달성하는 비주얼 설계. 성과 데이터가 다음 기획의 근거.',
      exit: '에이전시 / 브랜드 인하우스',
    },
  ];
  return (
    <section id="pain" style={{ padding: '120px 24px', position: 'relative', background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ color: 'var(--signal-danger)', marginBottom: 16 }}>THE REAL DIFFERENCE</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 24, maxWidth: 880,
        }}>
          툴을 다루는 사람은 많다.<br />
          전문 디자이너는 <span style={{ color: 'var(--accent-hi)' }}>"이유"</span>를 설명한다.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--fg-3)', maxWidth: 720, marginBottom: 56, lineHeight: 1.65 }}>
          면접관이 묻는 건 "피그마 할 줄 아세요?"가 아닙니다.<br />
          <strong style={{ color: 'var(--fg-1)' }}>"왜 이 컬러를, 왜 이 흐름으로, 왜 이 브랜드에?"</strong><br />
          AI 툴이 이미지를 만들어주는 시대, 살아남는 디자이너는 이유를 설계하는 사람입니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)', border: '1px solid var(--stroke-1)',
              borderRadius: 12, padding: 28,
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 44, height: 44, background: 'var(--accent-tint)',
                color: 'var(--accent-hi)', borderRadius: 10,
                fontWeight: 900, fontSize: 14,
              }}>{it.tag}</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-1)', marginBottom: 6, letterSpacing: '-0.01em' }}>{it.name}</div>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: 'var(--accent-hi)',
                  fontStyle: 'italic', marginBottom: 10, lineHeight: 1.4,
                }}>{it.thesis}</div>
                <div style={{ fontSize: 14, color: 'var(--fg-3)', lineHeight: 1.65 }}>{it.desc}</div>
              </div>
              <div style={{
                marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--stroke-1)',
                fontSize: 12, color: 'var(--fg-4)',
              }}>
                <div style={{ letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>EXIT 예시</div>
                <div style={{ color: 'var(--fg-2)' }}>{it.exit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Wake-up call callout */}
        <div style={{
          padding: '28px 32px',
          background: 'rgba(255, 77, 109, 0.08)',
          border: '1px solid rgba(255, 77, 109, 0.24)',
          borderRadius: 12, display: 'flex', gap: 20, alignItems: 'flex-start',
        }}>
          <div style={{
            fontSize: 28, flexShrink: 0, marginTop: 2,
            color: 'var(--signal-danger)',
          }}>!</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--fg-1)', marginBottom: 8, letterSpacing: '-0.02em' }}>
              "포폴은 있는데 면접관이 'BX가 아닌데요'라고 하더라고요."
            </div>
            <div style={{ fontSize: 15, color: 'var(--fg-3)', lineHeight: 1.65 }}>
              방향을 모르는 상태에서 포폴을 만들면, 만들수록 방향을 잃습니다. 90일의 시작은 직무 정의입니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { PainSection });
