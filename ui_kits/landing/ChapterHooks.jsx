/* global React */

function ChapterHooks() {
  const hooks = [
    { day: 4, t: '폰트 하나로 브랜드 가격을 10배 올리는 법' },
    { day: 6, t: '마뗑킴은 왜 같은 그래픽을 100번 반복하는가' },
    { day: 9, t: '스크롤 0.5초에 손가락을 멈추게 하는 카드뉴스의 비밀' },
    { day: 23, t: '5점 리뷰보다 1점 리뷰가 돈이 되는 이유' },
    { day: 28, t: '첫 화면 5초가 결정짓는 모든 것' },
    { day: 47, t: '코드 없이 웹 만들기 — Antigravity 첫 화면' },
    { day: 51, t: '별점 1점이 가장 비싼 정보다' },
    { day: 88, t: '현업자가 1초 안에 거르는 포트폴리오' },
    { day: 89, t: '무경력의 프로젝트를 경력처럼 쓰는 법' },
  ];

  return (
    <section id="chapters" style={{
      padding: '120px 24px',
      background: 'var(--bg-2)',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>SAMPLE CHAPTERS</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 24, maxWidth: 880,
        }}>
          매일 한 챕터,<br />매일 한 무기.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--fg-3)', marginBottom: 56, maxWidth: 720, lineHeight: 1.6 }}>
          90일 동안 90개의 챕터. 일부만 미리 보여드립니다.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12,
        }}>
          {hooks.map((h, i) => (
            <div key={i} style={{
              background: 'var(--bg-1)', border: '1px solid var(--stroke-1)',
              borderRadius: 12, padding: '20px 22px',
              display: 'flex', flexDirection: 'column', gap: 10,
              transition: 'border-color 220ms var(--ease-out)',
            }}>
              <div style={{
                fontSize: 10, fontFamily: 'var(--font-mono)', letterSpacing: '0.12em',
                color: 'var(--accent-hi)', textTransform: 'uppercase',
              }}>DAY {String(h.day).padStart(2, '0')}</div>
              <div style={{
                fontSize: 17, fontWeight: 700, color: 'var(--fg-1)',
                letterSpacing: '-0.02em', lineHeight: 1.35,
              }}>"{h.t}"</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, textAlign: 'center', color: 'var(--fg-4)', fontSize: 13,
        }}>
          + 81개 챕터가 더 있습니다.
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { ChapterHooks });
