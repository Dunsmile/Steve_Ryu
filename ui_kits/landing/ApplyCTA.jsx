/* global React */
const { useState: useState_apply } = React;

function ApplyCTA() {
  const [form, setForm] = useState_apply({ name: '', phone: '', track: '아직 모르겠어요' });
  const [submitted, setSubmitted] = useState_apply(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="apply" style={{
      padding: '120px 24px',
      background: 'var(--bg-1)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 0%, rgba(61,90,254,0.32) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div className="eyebrow" style={{ color: 'var(--signal-warn)', marginBottom: 16 }}>CURRICULUM · 마감 임박</div>
        <h2 style={{
          fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900,
          letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--fg-1)',
          marginBottom: 24,
        }}>
          쉰 시간을<br />
          <span style={{
            background: 'linear-gradient(135deg, #7B8CFF, #3D5AFE)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>이력서의 무기</span>로 바꾸세요.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--fg-3)', marginBottom: 48, lineHeight: 1.6 }}>
          50만원으로 시작해 90일 후 BX 포트폴리오 3개 + 인턴십 매칭 + 무제한 취업 코칭.
          커리큘럼이 곧 마감됩니다.
        </p>

        {submitted ? (
          <div style={{
            padding: 40, background: 'var(--bg-2)', border: '1px solid var(--accent)',
            borderRadius: 20, color: 'var(--fg-1)',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'var(--signal-success-tint)', color: 'var(--signal-success)',
              display: 'grid', placeItems: 'center', margin: '0 auto 20px',
              fontSize: 28, fontWeight: 900,
            }}>✓</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>신청서가 접수되었습니다.</div>
            <div style={{ color: 'var(--fg-3)', fontSize: 15 }}>
              영업일 기준 1일 내 입학상담사가 연락드립니다. {form.name}님의 트랙: <strong style={{ color: 'var(--accent-hi)' }}>{form.track}</strong>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} style={{
            background: 'var(--bg-2)', border: '1px solid var(--stroke-1)',
            borderRadius: 20, padding: 32, textAlign: 'left',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 500 }}>이름</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="홍길동"
                  style={{
                    background: 'var(--bg-3)', border: '1px solid var(--stroke-1)',
                    borderRadius: 8, padding: '12px 14px',
                    color: 'var(--fg-1)', fontSize: 15, fontFamily: 'var(--font-sans)',
                    outline: 'none',
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 500 }}>연락처</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="010-0000-0000"
                  style={{
                    background: 'var(--bg-3)', border: '1px solid var(--stroke-1)',
                    borderRadius: 8, padding: '12px 14px',
                    color: 'var(--fg-1)', fontSize: 15, fontFamily: 'var(--font-sans)',
                    outline: 'none',
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 500 }}>관심 직무</label>
              <select
                value={form.track}
                onChange={(e) => setForm({ ...form, track: e.target.value })}
                style={{
                  background: 'var(--bg-3)', border: '1px solid var(--stroke-1)',
                  borderRadius: 8, padding: '12px 14px',
                  color: 'var(--fg-1)', fontSize: 15, fontFamily: 'var(--font-sans)',
                  outline: 'none',
                }}
              >
                <option>BX 디자이너 (브랜드 익스피리언스)</option>
                <option>프로덕트 디자이너 (PD)</option>
                <option>콘텐츠 디자이너</option>
                <option>아직 모르겠어요</option>
              </select>
            </div>
            <button type="submit" style={{
              background: 'var(--accent)', color: 'white',
              border: 'none', padding: '18px 32px',
              borderRadius: 9999, fontSize: 17, fontWeight: 700,
              letterSpacing: '-0.01em', cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              marginTop: 8,
            }}>
              지금 신청하기 — 마감 전에 →
            </button>
            <div style={{ fontSize: 11, color: 'var(--fg-4)', textAlign: 'center' }}>
              신청 시 개인정보 수집·이용에 동의한 것으로 간주됩니다.
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { ApplyCTA });
