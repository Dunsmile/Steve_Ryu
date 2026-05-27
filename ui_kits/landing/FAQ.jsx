/* global React */
const { useState: useState_faq } = React;

function FAQ() {
  const [open, setOpen] = useState_faq(0);
  const qa = [
    {
      q: '비전공·비경력인데 따라갈 수 있나요?',
      a: '현재 수강생 73%가 비전공자입니다. 첫 2주는 디자인 기초·도구 워밍업이며, 1:1 멘토가 진도를 끌어드립니다. 따라가지 못해 그만두는 경우는 거의 없습니다.',
    },
    {
      q: 'PD와 BX는 결국 같은 직무 아닌가요?',
      a: '결정적으로 다릅니다. 첫 주차에 둘의 산출물·평가 기준을 분해하고, 본인 적성에 맞는 트랙을 같이 잡습니다. "어디든 지원해보자"식 포폴이 떨어지는 이유가 여기 있습니다.',
    },
    {
      q: '국비지원은 누구나 받을 수 있나요?',
      a: '국민 취업지원제도 1유형 대상자(만 18-34세, 일정 소득 이하)면 자기부담금 50만원으로 수강 가능합니다. 신청 시 자격 확인을 도와드립니다.',
    },
    {
      q: '온라인 100%인데 멘토링은 어떻게 진행되나요?',
      a: '주 1회 정기 1:1 멘토링 + 매일 슬랙 채널 + 분기 1회 오프라인 데모데이. 자체 LMS에서 멘토 일정 예약과 포폴 리뷰가 한 곳에서 진행됩니다.',
    },
    {
      q: '수료 후 정말로 취업할 수 있을까요?',
      a: '수료 후 6개월간 협력사 인턴 공고를 100% 매칭해드립니다. 단, 매칭은 보장이며 합격은 본인 포폴/면접에 달려있습니다. 그래서 90일 동안 포폴 3개를 만드는 것이 목표입니다.',
    },
  ];
  return (
    <section id="faq" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>FAQ</div>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fg-1)',
          marginBottom: 56,
        }}>
          망설이는 이유,<br />여기서 끝내드립니다.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {qa.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                background: 'var(--bg-2)', border: '1px solid var(--stroke-1)',
                borderRadius: 12, overflow: 'hidden',
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', textAlign: 'left',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  padding: '20px 24px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  color: 'var(--fg-1)', fontSize: 16, fontWeight: 600,
                  fontFamily: 'var(--font-sans)', letterSpacing: '-0.01em',
                }}>
                  <span>{it.q}</span>
                  <span style={{
                    color: 'var(--accent-hi)', fontSize: 22, fontWeight: 400,
                    transition: 'transform 220ms var(--ease-out)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                  }}>+</span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px', color: 'var(--fg-3)', fontSize: 15, lineHeight: 1.7,
                  }}>{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.AIBXKit = Object.assign(window.AIBXKit || {}, { FAQ });
