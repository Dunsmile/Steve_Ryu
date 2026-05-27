/* global React */

// Portfolio examples from Part 1 (AI image production)
// Images: place actual files at ../../assets/portfolio-examples/p1-floral-beauty.png etc.
const EXAMPLES = [
  { id: 1, src: '../../assets/portfolio-examples/p1-floral-beauty.png', label: 'BEAUTY · Floral Campaign', sub: 'Midjourney + Photoshop' },
  { id: 2, src: '../../assets/portfolio-examples/p2-record-shop.png', label: 'SPACE · Record Shop Mood', sub: 'AI 장소 비주얼' },
  { id: 3, src: '../../assets/portfolio-examples/p3-beauty-portrait.png', label: 'BEAUTY · Campaign Portrait', sub: 'Midjourney + Firefly' },
  { id: 4, src: '../../assets/portfolio-examples/p4-perfume-forest.png', label: 'FRAGRANCE · Forest Bottle', sub: '3D Concept Visual' },
  { id: 5, src: '../../assets/portfolio-examples/p5-start-today.png', label: 'EDITORIAL · Start Today', sub: 'AI Poster Design' },
  { id: 6, src: '../../assets/portfolio-examples/p6-promt.png', label: 'FASHION · promt. Campaign', sub: 'Midjourney + Retouching' },
  { id: 7, src: '../../assets/portfolio-examples/p7-chocolate.png', label: 'F&B · Chocolate Product', sub: 'AI 제품 비주얼' },
  { id: 8, src: '../../assets/portfolio-examples/p8-cyber-beauty.png', label: 'BEAUTY · Cyber Concept', sub: 'Midjourney 컨셉 디자인' },
  { id: 9, src: '../../assets/portfolio-examples/p9-elf-beauty.png', label: 'BRAND · e.l.f Campaign', sub: 'BX 브랜드 비주얼' },
];

function PortfolioPreview() {
  return (
    <section id="portfolio-preview" style={{
      padding: '120px 24px',
      background: 'var(--bg-1)',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>PORTFOLIO PREVIEW · PART 1 OUTPUT</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 16,
        }}>
          Day 11, 첫 결과물.<br />
          <span style={{ color: 'var(--accent-hi)' }}>이런 걸 만들게 됩니다.</span>
        </h2>
        <p style={{ fontSize: 18, color: 'var(--fg-3)', marginBottom: 48, maxWidth: 720, lineHeight: 1.6 }}>
          Part 1 (Day 1–11)에서 AI 이미지 제작 키트를 완성합니다.
          뷰티·식품·패션·편집 — 실무 브리프 기반의 결과물입니다.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
        }}>
          {EXAMPLES.map((ex) => (
            <div key={ex.id} style={{
              borderRadius: 12, overflow: 'hidden',
              background: 'var(--bg-2)',
              border: '1px solid var(--stroke-1)',
              aspectRatio: '4/3',
              position: 'relative',
            }}>
              <img
                src={ex.src}
                alt={ex.label}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '40px 16px 14px',
                background: 'linear-gradient(to top, rgba(10,10,15,0.92) 0%, transparent 100%)',
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent-hi)', marginBottom: 3 }}>
                  {ex.label}
                </div>
                <div style={{ fontSize: 11, color: 'var(--fg-4)' }}>{ex.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, padding: '20px 24px',
          background: 'var(--bg-2)', border: '1px solid var(--stroke-1)',
          borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--fg-1)', fontSize: 15, marginBottom: 4 }}>
              이건 Day 11의 결과물입니다.
            </div>
            <div style={{ color: 'var(--fg-3)', fontSize: 14 }}>
              3개의 최종 포트폴리오는 Day 57, 72, 87에 완성됩니다.
            </div>
          </div>
          <a href="#curriculum" style={{
            padding: '10px 20px', borderRadius: 9999,
            background: 'var(--bg-3)', color: 'var(--fg-1)',
            border: '1px solid var(--stroke-1)', fontSize: 13, fontWeight: 600,
          }}>커리큘럼 전체 보기 →</a>
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { PortfolioPreview });
