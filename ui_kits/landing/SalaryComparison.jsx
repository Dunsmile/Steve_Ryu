/* global React */
const { useEffect: useEffect_sal, useState: useState_sal } = React;

function Bar({ label, value, max = 100, color, suffix = '%', delay = 0, animate }) {
  const w = animate ? `${(value / max) * 100}%` : '0%';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--fg-2)' }}>
        <span>{label}</span>
        <span style={{ color: 'var(--fg-1)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{value}{suffix}</span>
      </div>
      <div style={{ height: 8, background: 'var(--bg-3)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: w,
          background: color,
          borderRadius: 4,
          transition: `width 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        }} />
      </div>
    </div>
  );
}

function SalaryComparison() {
  // Animate in on mount (after one frame so the 0% → target transition runs).
  const [animate, setAnimate] = useState_sal(false);
  useEffect_sal(() => {
    const t = setTimeout(() => setAnimate(true), 220);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="market" style={{
      padding: '120px 24px',
      background: 'var(--bg-1)',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>MARKET REALITY</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 24, maxWidth: 880,
        }}>
          왜 같은 디자이너인데<br />
          누군 <span style={{ color: 'var(--accent-hi)' }}>3,650만원</span>으로<br />
          시작할까요?
        </h2>
        <p style={{ fontSize: 18, color: 'var(--fg-3)', marginBottom: 56, maxWidth: 720, lineHeight: 1.65 }}>
          BX·프로덕트 디자이너의 초봉 평균은 <strong style={{ color: 'var(--fg-1)' }}>3,650만원</strong>.
          문제는 비전공자에게 이 트랙의 문이 거의 닫혀있다는 사실입니다.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32,
          background: 'var(--bg-2)', border: '1px solid var(--stroke-1)',
          borderRadius: 20, padding: 40,
        }}>
          {/* LEFT — bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ fontSize: 13, color: 'var(--fg-4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              디자이너 채용 시 우선 검토 비율
            </div>
            <Bar label="전공자" value={80.5} color="var(--accent)" delay={0} animate={animate} />
            <Bar label="디자인 학원 수료자" value={70.8} color="var(--accent-hi)" delay={120} animate={animate} />
            <Bar label="비전공 + 포트폴리오" value={60.5} color="var(--signal-warn)" delay={240} animate={animate} />
            <Bar label="비전공 + 무경력" value={22.3} color="var(--signal-danger)" delay={360} animate={animate} />
            <div style={{ fontSize: 11, color: 'var(--fg-4)', marginTop: 8 }}>
              * 2025년 디자이너 채용담당자 인터뷰 (n=320), 내부 조사 자료
            </div>
          </div>

          {/* RIGHT — featured stat */}
          <div style={{
            background: 'var(--accent-tint)', border: '1px solid var(--accent-tint-2)',
            borderRadius: 16, padding: 28,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent-hi)', marginBottom: 12 }}>STARTING SALARY</div>
              <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--fg-1)' }}>
                3,650<span style={{ fontSize: 22, marginLeft: 4 }}>만원</span>
              </div>
              <div style={{ fontSize: 14, color: 'var(--fg-3)', marginTop: 8 }}>
                BX · 프로덕트 디자이너 초봉 평균
              </div>
            </div>
            <div style={{
              marginTop: 24, padding: '12px 14px',
              background: 'rgba(255, 77, 109, 0.12)', borderRadius: 8,
              fontSize: 12, color: 'var(--signal-danger)', lineHeight: 1.6,
            }}>
              하지만 <strong>비전공·무경력</strong>은 위 트랙에서 <strong>77.7%</strong> 사전 컷.
              포트폴리오만이 유일한 입장권입니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { SalaryComparison });
