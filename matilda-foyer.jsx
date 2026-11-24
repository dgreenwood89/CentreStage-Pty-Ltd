/* Matilda JR foyer loop — one continuous composition on animations-v3 */
const { useComposition, CompositionStage, Easing, animate, clamp } = window;

const C = { ink: '#131313', paper: '#F4F1EA', blue: '#2E6FB7', red: '#E8472B', yellow: '#F2C94C', sky: '#8FC0EE', soft: '#C9C6BF', navy: '#04101F', ice: '#7FD3FF' };
const DISPLAY = "'Arial Black', Arial, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

// three motion helpers — all easing lives here
const MOTION = {
  enter: (T, start, dur = 0.9) => animate({ from: 0, to: 1, start, end: start + dur, ease: Easing.easeOutCubic })(T),
  exit: (T, end, dur = 0.7) => 1 - animate({ from: 0, to: 1, start: end - dur, end, ease: Easing.easeInCubic })(T),
  pop: (T, start, dur = 0.7) => animate({ from: 0, to: 1, start, end: start + dur, ease: Easing.easeOutBack })(T),
};
// visible window for a block inside a section: fades/rises in at a, out by b
const win = (T, a, b, rise = 40) => {
  const i = MOTION.enter(T, a), o = MOTION.exit(T, b);
  return { opacity: Math.min(i, o), transform: `translateY(${(1 - i) * rise}px)` };
};

function Letters({ T, dim }) {
  const L = [
    ['A', 90, 120, 210, -14, C.blue], ['b', 1660, 90, 170, 12, C.red], ['C', 40, 640, 150, 10, C.yellow],
    ['d', 1730, 640, 190, -10, C.blue], ['E', 420, 960, 110, -8, C.red], ['f', 1500, 900, 150, 14, C.yellow],
    ['G', 860, 40, 120, 6, C.sky],
  ];
  return L.map(([ch, x, y, s, r, col], i) => {
    const drift = Math.sin(T * 0.35 + i * 1.7) * 14, spin = Math.sin(T * 0.22 + i) * 4;
    return <div key={i} style={{ position: 'absolute', left: x, top: y + drift, fontFamily: DISPLAY, fontWeight: 900, fontSize: s, lineHeight: 1, color: col, opacity: 0.42 * dim, transform: `rotate(${r + spin}deg)` }}>{ch}</div>;
  });
}

function QR({ src, label, url, size = 300, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, ...style }}>
      <div style={{ background: '#FFFFFF', padding: 14 }}><img src={src} alt={label} style={{ display: 'block', width: size, height: size }} /></div>
      <div style={{ fontFamily: MONO, fontSize: 22, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.paper, fontWeight: 600 }}>{label}</div>
      {url && <div style={{ fontFamily: MONO, fontSize: 20, color: C.soft }}>{url}</div>}
    </div>
  );
}

function Eyebrow({ children, color = C.sky }) {
  return <div style={{ fontFamily: MONO, fontSize: 26, letterSpacing: '0.24em', textTransform: 'uppercase', color, fontWeight: 600 }}>{children}</div>;
}

function Welcome({ T, CUES, end }) {
  const s = CUES.Welcome;
  const logo = MOTION.pop(T, s + 0.4, 1.0);
  const o = MOTION.exit(T, end);
  const zoom = 1 + (T - s) * 0.008;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: o }}>
      <div style={win(T, s + 0.1, end, 20)}><Eyebrow color={C.soft}>CentreStage Performing Arts Academy</Eyebrow></div>
      <img src="assets/shows/matilda-hires.png" alt="Roald Dahl's Matilda The Musical JR." style={{ width: 980, margin: '40px 0 36px', opacity: Math.min(1, logo), transform: `scale(${(0.9 + 0.1 * logo) * zoom})` }} />
      <div style={{ ...win(T, s + 1.4, end, 30), fontFamily: DISPLAY, fontWeight: 900, fontSize: 84, letterSpacing: '-0.03em', color: C.paper }}>Welcome to the theatre.</div>
      <div style={{ ...win(T, s + 2.0, end, 20), fontFamily: MONO, fontSize: 26, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.yellow, marginTop: 22 }}>Middles A · B · C</div>
    </div>
  );
}

function Country({ T, CUES, end }) {
  const s = CUES.Country;
  const rule = MOTION.enter(T, s + 0.3, 1.4);
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 260px' }}>
      <div style={win(T, s + 0.2, end, 20)}><Eyebrow color={C.yellow}>Acknowledgement of Country</Eyebrow></div>
      <div style={{ width: 520 * rule, height: 3, background: C.yellow, margin: '34px 0 44px', opacity: MOTION.exit(T, end) }} />
      <div style={{ ...win(T, s + 0.8, end, 30), fontFamily: DISPLAY, fontWeight: 900, fontSize: 58, lineHeight: 1.12, letterSpacing: '-0.02em', color: C.paper, textWrap: 'balance' }}>
        CentreStage acknowledges the Wadawurrung people as the Traditional Owners of the land on which we rehearse, build and perform.
      </div>
      <div style={{ ...win(T, s + 3.2, end, 20), fontSize: 34, lineHeight: 1.45, color: C.soft, marginTop: 38, maxWidth: 1180, textWrap: 'pretty' }}>
        We pay our respects to Elders past and present, and to all Aboriginal and Torres Strait Islander people with us today. Always was, always will be.
      </div>
    </div>
  );
}

function NoPhotos({ T, CUES, end }) {
  const s = CUES.NoPhotos;
  const icon = MOTION.pop(T, s + 0.3, 0.8);
  const strike = MOTION.enter(T, s + 1.0, 0.5);
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 150px', gap: 110 }}>
      <div style={{ flex: 1 }}>
        <svg viewBox="0 0 120 120" style={{ width: 200, height: 200, display: 'block', opacity: Math.min(clamp(icon, 0, 1), MOTION.exit(T, end)), transform: `scale(${0.6 + 0.4 * icon})`, transformOrigin: 'left center' }}>
          <circle cx="60" cy="60" r="54" fill={C.paper} stroke={C.red} strokeWidth="9" />
          <rect x="30" y="44" width="60" height="40" rx="5" fill="none" stroke="#0A0A0A" strokeWidth="5" />
          <path d="M46 44 L50 36 H70 L74 44" fill="none" stroke="#0A0A0A" strokeWidth="5" strokeLinejoin="round" />
          <circle cx="60" cy="64" r="11" fill="none" stroke="#0A0A0A" strokeWidth="5" />
          <line x1="22" y1="22" x2={22 + 76 * strike} y2={22 + 76 * strike} stroke={C.red} strokeWidth="9" strokeLinecap="round" />
        </svg>
        <div style={{ ...win(T, s + 0.7, end, 30), fontFamily: DISPLAY, fontWeight: 900, fontSize: 104, lineHeight: 0.92, letterSpacing: '-0.035em', color: C.paper, marginTop: 44 }}>No photos or video<br />during the show.</div>
        <div style={{ ...win(T, s + 2.0, end, 20), fontSize: 36, lineHeight: 1.45, color: C.soft, marginTop: 36, maxWidth: 920 }}>
          Our photographer <b style={{ color: C.paper }}>Hannah</b> has captured every moment. The full gallery will be on the CentreStage Facebook page. Photos are welcome once the show has finished, or here in the foyer.
        </div>
      </div>
      <div style={win(T, s + 2.8, end, 40)}><QR src="assets/foyer/qr-facebook.png" label="Facebook · @centrestageaus" size={330} /></div>
    </div>
  );
}

function Enrol({ T, CUES, end }) {
  const s = CUES.Enrol;
  const shows = [['Juniors · 4–7', 'Annie KIDS', C.red], ['Middles · 8–12', 'Trolls The Musical JR', '#E5487F'], ['Seniors · 12–18', 'Spamalot Young@Part', C.blue], ['Showcase · All', 'Be Our Guest', C.yellow]];
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 150px', gap: 110 }}>
      <div style={{ flex: 1 }}>
        <div style={win(T, s + 0.2, end, 20)}><Eyebrow color={C.yellow}>Enrolments now open</Eyebrow></div>
        <div style={{ ...win(T, s + 0.5, end, 30), fontFamily: DISPLAY, fontWeight: 900, fontSize: 132, lineHeight: 0.9, letterSpacing: '-0.04em', color: C.paper, margin: '26px 0 30px' }}>Join us<br />in 2027.</div>
        <div style={{ ...win(T, s + 1.2, end, 20), fontSize: 34, lineHeight: 1.45, color: C.soft, maxWidth: 900 }}>Loved tonight? Saturday musical theatre classes for ages 4 to 18. Every student performs on a real stage, every year.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 44 }}>
          {shows.map(([k, t, col], i) => {
            const p = MOTION.pop(T, s + 2.0 + i * 0.25, 0.6);
            return (
              <div key={i} style={{ background: col, padding: '20px 20px 24px', opacity: Math.min(clamp(p, 0, 1), MOTION.exit(T, end)), transform: `translateY(${(1 - p) * 30}px)` }}>
                <div style={{ fontFamily: MONO, fontSize: 16, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: col === C.blue ? '#FFFFFF' : '#0A0A0A' }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 28, lineHeight: 1.1, marginTop: 10, color: col === C.blue ? '#FFFFFF' : '#0A0A0A' }}>{t}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={win(T, s + 3.0, end, 40)}><QR src="assets/foyer/qr-enrol-2027.png" label="Scan to enrol" url="centrestage.org.au/weekly" size={330} /></div>
    </div>
  );
}

function Agency({ T, CUES, end }) {
  const s = CUES.Agency;
  const slash = MOTION.enter(T, s + 0.2, 1.0);
  const pillars = ['Screen', 'Stage', 'Commercial', 'Voice'];
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 150px', gap: 110 }}>
      <div style={{ flex: 1 }}>
        <div style={win(T, s + 0.3, end, 20)}><Eyebrow color={C.red}>CentreStage Agency</Eyebrow></div>
        <div style={{ ...win(T, s + 0.6, end, 30), fontFamily: DISPLAY, fontWeight: 900, fontSize: 118, lineHeight: 0.9, letterSpacing: '-0.04em', color: C.paper, margin: '26px 0 30px' }}>
          Ready for the<br />next stage<span style={{ color: C.red, display: 'inline-block', opacity: slash, transform: `translateX(${(1 - slash) * -30}px)` }}>/</span>
        </div>
        <div style={{ ...win(T, s + 1.3, end, 20), fontSize: 34, lineHeight: 1.45, color: C.soft, maxWidth: 900 }}>Talent representation for young and adult performers. We put our people forward for professional film, television, theatre and commercial work.</div>
        <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
          {pillars.map((p, i) => {
            const k = MOTION.enter(T, s + 2.1 + i * 0.2, 0.6);
            return <div key={i} style={{ fontFamily: MONO, fontSize: 22, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, color: C.paper, border: '2px solid ' + C.paper, padding: '12px 20px', opacity: Math.min(k, MOTION.exit(T, end)), transform: `translateY(${(1 - k) * 20}px)` }}>{p}</div>;
          })}
        </div>
      </div>
      <div style={win(T, s + 3.0, end, 40)}><QR src="assets/foyer/qr-agency.png" label="Scan to apply" url="centrestageagency.org.au" size={330} /></div>
    </div>
  );
}

function Frozen({ T, CUES, end }) {
  const s = CUES.Frozen;
  const bg = Math.min(MOTION.enter(T, s - 0.6, 1.2), MOTION.exit(T, end, 1.0));
  const zoom = 1.04 + (T - s) * 0.006;
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, opacity: bg, background: C.navy, overflow: 'hidden' }}>
        <img src="assets/frozen-keyart-blank-h.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom})`, opacity: 0.85 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(4,16,31,0) 30%, rgba(4,16,31,.72) 62%, rgba(4,16,31,.94) 100%)' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 130px' }}>
        <div style={{ width: 820, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={win(T, s + 0.5, end, 20)}><Eyebrow color={C.ice}>Coming March 2027</Eyebrow></div>
          <img src="assets/frozen-title-dark.png" alt="Frozen" style={{ ...win(T, s + 0.8, end, 30), width: 560, margin: '28px 0 22px' }} />
          <div style={{ ...win(T, s + 1.4, end, 20), fontFamily: DISPLAY, fontWeight: 900, fontSize: 66, lineHeight: 1, letterSpacing: '-0.03em', color: '#EAF4FF' }}>5 – 20 March 2027</div>
          <div style={{ ...win(T, s + 1.8, end, 20), fontSize: 32, lineHeight: 1.4, color: '#C6DCF2', marginTop: 16 }}>The Playhouse, Geelong Arts Centre</div>
          <div style={{ ...win(T, s + 2.8, end, 30), display: 'flex', alignItems: 'center', gap: 34, marginTop: 44 }}>
            <div style={{ background: '#FFFFFF', padding: 12 }}><img src="assets/foyer/qr-frozen-tickets.png" alt="Book Frozen tickets" style={{ display: 'block', width: 250, height: 250 }} /></div>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 24, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.ice, fontWeight: 600 }}>Tickets on sale now</div>
              <div style={{ fontSize: 26, color: '#C6DCF2', marginTop: 12, lineHeight: 1.4 }}>Scan to book at<br />geelongartscentre.org.au</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FoyerLoop() {
  const { T, CUES, authoredTotal } = useComposition();
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const ends = { Welcome: CUES.Country - 0.3, Country: CUES.NoPhotos - 0.3, NoPhotos: CUES.Enrol - 0.3, Enrol: CUES.Agency - 0.3, Agency: CUES.Frozen - 0.5, Frozen: CUES.Return };
  const content = Math.min(MOTION.enter(T, CUES.Country - 0.8, 1.0), MOTION.exit(T, CUES.Return + 0.6, 1.0));
  const frozenBg = Math.min(MOTION.enter(T, CUES.Frozen - 0.6, 1.2), MOTION.exit(T, CUES.Return, 1.0));
  const letterDim = (1 - 0.65 * content) * (1 - frozenBg);
  const logo = Math.min(MOTION.enter(T, 0.6), MOTION.exit(T, authoredTotal, 1.2));
  React.useEffect(() => {
    const root = document.querySelector('[data-om-exportable-video-with-duration-secs]');
    if (root) root.setAttribute('data-screen-label', `Foyer loop ${Math.floor(T)}s`);
  }, [Math.floor(T)]);
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.ink, overflow: 'hidden', fontFamily: 'Arial, Helvetica, sans-serif', color: C.paper }}>
      <Letters T={T} dim={letterDim} />
      <Welcome T={T} CUES={CUES} end={ends.Welcome} />
      <Country T={T} CUES={CUES} end={ends.Country} />
      <NoPhotos T={T} CUES={CUES} end={ends.NoPhotos} />
      <Enrol T={T} CUES={CUES} end={ends.Enrol} />
      <Agency T={T} CUES={CUES} end={ends.Agency} />
      <Frozen T={T} CUES={CUES} end={ends.Frozen} />
      <img src="assets/CentreStage-Solid-White.png" alt="CentreStage" style={{ position: 'absolute', left: 80, bottom: 64, width: 210, opacity: logo * 0.9 }} />
      <TweaksPanel>
        <TweakSection label="Timeline" />
        <TweakToggle label="Motion editor" value={t.motionEditor} onChange={(v) => setTweak('motionEditor', v)} />
      </TweaksPanel>
    </div>
  );
}

function MatildaFoyer() {
  return (
    <CompositionStage width={1920} height={1080} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg="#131313">
      <FoyerLoop />
    </CompositionStage>
  );
}
window.MatildaFoyer = MatildaFoyer;
