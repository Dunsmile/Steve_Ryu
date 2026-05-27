/* global React */

function BenefitGrid() {
  const benefits = [
    { big: '1,300만원', acc: '→ 50만원', lbl: '국비지원 후 자기부담금', featured: true },
    { big: '80만원', acc: '/월', lbl: '훈련장려금 (출석률 기준)' },
    { big: '도서 4권', acc: '', lbl: '10만원 상당 BX·디자인 핵심 도서' },
    { big: 'AI 풀스택', acc: '', lbl: 'GPT Biz · Claude · Midjourney $30 · Firefly' },
    { big: 'Figma Edu', acc: '+ Adobe', lbl: '포토샵 · 일러스트레이터 · 파이어플라이' },
    { big: '100%', acc: '', lbl: '주강사 라이브 수업 · 100% 온라인' },
    { big: '6개월', acc: '', lbl: '수료 후 인턴 매칭 지원' },
    { big: 'Antigravity', acc: '', lbl: '바이브 코딩 · 진짜 웹 포폴 배포', featured: false },
  ];

  return (
    <section id="benefits" style={{
      padding: '120px 24px',
      background: 'var(--bg-2)',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      backgroundSize: '80px 80px',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>BENEFITS</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 56, maxWidth: 880,
        }}>
          90일 동안 받는 모든 것
        </h2>

        {/* Featured hero benefit — Macbook M1 Pro */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24,
          marginBottom: 16,
          background: 'var(--bg-1)', border: '1px solid var(--stroke-1)',
          borderRadius: 16, overflow: 'hidden',
        }}>
          <div style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="eyebrow" style={{ color: 'var(--accent-hi)', marginBottom: 12 }}>EQUIPMENT</div>
            <div style={{
              fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900,
              letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--fg-1)',
              marginBottom: 12,
            }}>
              MacBook M1 Pro
            </div>
            <div style={{ fontSize: 16, color: 'var(--fg-3)', lineHeight: 1.6 }}>
              디자이너에게 가장 비싼 진입장벽 — 장비를 우리가 지급합니다.
              + 5만원 상당 마우스 + 10만원 상당 BX 도서 4권
            </div>
          </div>
          <div style={{
            background: '#F5F5F7',
            display: 'grid', placeItems: 'center',
            padding: '24px',
          }}>
            <img
              src="../../assets/logos/macbook-pro.png"
              alt="MacBook M1 Pro"
              style={{ width: '100%', maxWidth: 320, height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
        }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              background: b.featured ? 'var(--accent-tint)' : 'var(--bg-1)',
              border: `1px solid ${b.featured ? 'var(--accent-tint-2)' : 'var(--stroke-1)'}`,
              borderRadius: 12, padding: '24px 20px',
              minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: 'clamp(24px, 2.6vw, 36px)', fontWeight: 900,
                  letterSpacing: '-0.04em', lineHeight: 1.05,
                  color: b.featured ? 'var(--accent-hi)' : 'var(--fg-1)',
                  marginBottom: 6,
                }}>{b.big}</div>
                {b.acc && <div style={{ fontSize: 14, color: 'var(--fg-3)', fontWeight: 600 }}>{b.acc}</div>}
              </div>
              <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 12, lineHeight: 1.5 }}>{b.lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, fontSize: 12, color: 'var(--fg-4)' }}>
          * 국민 취업지원제도 대상자 기준 / 출석률 80% 이상 시 훈련장려금 지급.
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { BenefitGrid });
