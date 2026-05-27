/* global React */
const { useEffect, useState } = React;

function CountUp({ to, suffix = '', duration = 900 }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(to * ease));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span>{v.toLocaleString()}{suffix}</span>;
}

function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: '120px 24px 80px',
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      backgroundSize: '80px 80px',
      overflow: 'hidden',
    }}>
      {/* radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 35%, rgba(61,90,254,0.22) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', maxWidth: 1080, width: '100%', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 16px', marginBottom: 32,
          background: 'var(--accent-tint)', border: '1px solid var(--accent-tint-2)',
          borderRadius: 9999, color: 'var(--accent-hi)',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-hi)' }}></span>
          OZ Coding School · 5기 모집중
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 84px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: 'var(--fg-1)',
          marginBottom: 28,
        }}>
          고연봉 로드맵<br />
          <span style={{
            background: 'linear-gradient(135deg, #7B8CFF 0%, #3D5AFE 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>취업용 포트폴리오</span>를 만드는<br />
          AI BX 프로덕트 디자이너
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 1.6vw, 20px)',
          color: 'var(--fg-3)',
          maxWidth: 680, margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          90일 후 손에 남는 건 수료증이 아닌, 지원할 수 있는 <strong style={{ color: 'var(--fg-1)' }}>3개의 BX 포트폴리오</strong>입니다.<br />
          비전공·비경력에서 출발해 고연봉 디자이너 트랙으로 가는 가장 짧은 길.
        </p>

        {/* big stat row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24, maxWidth: 640, margin: '0 auto 48px',
        }}>
          {[
            { num: 90, suf: '일', lbl: '집중 트랙' },
            { num: 3, suf: '개', lbl: 'BX 포트폴리오' },
            { num: 50, suf: '만원', lbl: '국비지원 후 부담' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900,
                letterSpacing: '-0.04em', color: 'var(--fg-1)', lineHeight: 1,
              }}>
                <CountUp to={s.num} suffix={s.suf} />
              </div>
              <div style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 8 }}>{s.lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#apply" className="cta-primary" style={{
            background: 'var(--accent)', color: 'white',
            padding: '18px 36px', borderRadius: 9999,
            fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em',
            transition: 'all 220ms var(--ease-out)',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>지금 신청하기 →</a>
          <a href="#curriculum" style={{
            background: 'var(--bg-3)', color: 'var(--fg-1)',
            padding: '18px 32px', borderRadius: 9999,
            fontSize: 17, fontWeight: 600,
            border: '1px solid var(--stroke-1)',
          }}>커리큘럼 보기</a>
        </div>

        <div style={{ marginTop: 36, fontSize: 12, color: 'var(--fg-4)', letterSpacing: '0.06em' }}>
          ⏱ 모집 마감 D-12 · 한정 32석
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { Hero });
