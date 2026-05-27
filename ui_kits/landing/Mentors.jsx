/* global React */

function Mentors() {
  const mentors = [
    { initial: '토', co: '토스', role: 'Lead BX Designer', name: '김 멘토', exp: '10년 차' },
    { initial: '카', co: '카카오', role: 'Senior Product Designer', name: '이 멘토', exp: '8년 차' },
    { initial: 'A', co: 'ably', role: 'Brand Designer', name: '박 멘토', exp: '7년 차' },
    { initial: 'L', co: 'LG생활건강', role: 'BX Strategist', name: '최 멘토', exp: '12년 차' },
    { initial: '요', co: '요기요', role: 'Product Designer', name: '정 멘토', exp: '6년 차' },
    { initial: 'K', co: 'KRAFTON', role: 'Visual Designer', name: '윤 멘토', exp: '9년 차' },
  ];
  const palettes = [
    ['#3D5AFE', '#7B8CFF'],
    ['#FFD400', '#FFA62B'],
    ['#FF4D6D', '#FF8FA3'],
    ['#00E5A0', '#5DECCB'],
    ['#7B8CFF', '#3D5AFE'],
    ['#FFA62B', '#FFD400'],
  ];
  return (
    <section id="mentors" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>MENTORS</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 16,
        }}>
          현업자가 직접<br />당신 옆에 앉습니다.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--fg-3)', marginBottom: 56, maxWidth: 720 }}>
          토스 · 카카오 · ably · LG생활건강 · 요기요 · 크래프톤 · 넷마블 출신 현역 디자이너 12명이 12주 동안 1:1 멘토링합니다.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }}>
          {mentors.map((m, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)', border: '1px solid var(--stroke-1)',
              borderRadius: 12, padding: 24, display: 'flex', alignItems: 'center', gap: 16,
              transition: 'border-color 220ms var(--ease-out)',
            }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%', flexShrink: 0,
                background: `linear-gradient(135deg, ${palettes[i][0]}, ${palettes[i][1]})`,
                display: 'grid', placeItems: 'center',
                color: 'white', fontWeight: 900, fontSize: 22, letterSpacing: '-0.04em',
              }}>{m.initial}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, color: 'var(--fg-4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>{m.co} · {m.exp}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--fg-1)', letterSpacing: '-0.01em', marginBottom: 2 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: 'var(--fg-3)' }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, padding: '20px 24px',
          background: 'var(--bg-3)', border: '1px solid var(--stroke-1)',
          borderRadius: 12, color: 'var(--fg-3)', fontSize: 14,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <span>+ 미공개 멘토 6명이 매주 새로운 실무 케이스를 공유합니다.</span>
          <a href="#mentors" style={{ color: 'var(--accent-hi)', fontWeight: 600, fontSize: 14 }}>전체 멘토진 보기 →</a>
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { Mentors });
