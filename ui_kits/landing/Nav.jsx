/* global React */
const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 32px',
      background: scrolled ? 'rgba(10,10,15,0.78)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--stroke-1)' : '1px solid transparent',
      transition: 'all 220ms var(--ease-out)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8,
          background: 'linear-gradient(135deg, #3D5AFE, #7B8CFF)',
          display: 'grid', placeItems: 'center',
          color: 'white', fontWeight: 900, fontSize: 17,
        }}>O</div>
        <div style={{ fontWeight: 800, color: 'var(--fg-1)', letterSpacing: '-0.02em', fontSize: 15 }}>
          AI BX 프로덕트 디자이너 부트캠프
        </div>
      </div>
      <div style={{ display: 'flex', gap: 28 }}>
        {['커리큘럼', '멘토', '혜택', '후기', 'FAQ'].map(l => (
          <a key={l} href={`#${l}`} style={{ color: 'var(--fg-3)', fontSize: 14, fontWeight: 500 }}>{l}</a>
        ))}
      </div>
      <a href="#apply" style={{
        background: 'var(--accent)', color: 'white', padding: '10px 18px',
        borderRadius: 9999, fontSize: 13, fontWeight: 700,
      }}>지금 신청 →</a>
    </nav>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { Nav });
