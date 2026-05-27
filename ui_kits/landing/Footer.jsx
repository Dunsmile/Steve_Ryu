/* global React */

function Footer() {
  return (
    <footer style={{
      padding: '48px 32px 64px',
      borderTop: '1px solid var(--stroke-1)',
      background: 'var(--bg-1)',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: 'linear-gradient(135deg, #3D5AFE, #7B8CFF)',
              display: 'grid', placeItems: 'center',
              color: 'white', fontWeight: 900, fontSize: 16,
            }}>O</div>
            <div style={{ fontWeight: 800, color: 'var(--fg-1)', letterSpacing: '-0.02em' }}>
              오즈코딩스쿨 · 넥스트러너스(주)
            </div>
          </div>
          <div style={{ fontSize: 12, color: 'var(--fg-4)', lineHeight: 1.6 }}>
            대표 김OO · 사업자등록번호 000-00-00000<br />
            통신판매업신고 제0000-서울강남-0000호<br />
            서울특별시 강남구 ・ 고객센터 1599-0000
          </div>
        </div>
        <div style={{ display: 'flex', gap: 48 }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--fg-4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>회사</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['회사 소개', '채용', '제휴 문의'].map(l => (
                <a key={l} style={{ color: 'var(--fg-3)', fontSize: 13 }}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: 'var(--fg-4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>고객</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['이용약관', '개인정보처리방침', '환불정책'].map(l => (
                <a key={l} style={{ color: 'var(--fg-3)', fontSize: 13 }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: '32px auto 0', paddingTop: 24, borderTop: '1px solid var(--stroke-1)', fontSize: 11, color: 'var(--fg-4)' }}>
        © 2026 NextRunners Inc. All rights reserved.
      </div>
    </footer>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { Footer });
