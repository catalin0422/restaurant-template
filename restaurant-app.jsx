// Restaurant landing template — single-file React app
// Edit BRAND below to rebrand the whole site.
const BRAND = {
  name: 'Ristoro',
  tagline: 'Restaurant · Bar · Cafe',
  heroLine: 'Realizat de Dogaru Catalin · +373 60 171 888',
  heroSub: 'Bucătărie de autor, vinuri alese cu grijă și o atmosferă care invită la pauze lungi.',
  phone: '+373 22 456 789',
  emailReservations: 'rezervari@restaurant.md',
  emailContact: 'contact@restaurant.md',
  addressLine1: 'Strada Ștefan cel Mare 75',
  addressLine2: 'MD-2001, Chișinău',
  openingShort: 'Mar–Dum · 12:00 – 23:30 · Luni închis',
  year: 2026,
  signatureItem: 'Uramaki Signature',
};

const SvgIcon = ({ children, size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);
const Menu = (p) => <SvgIcon {...p}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></SvgIcon>;
const X = (p) => <SvgIcon {...p}><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></SvgIcon>;
const ChevronRight = (p) => <SvgIcon {...p}><polyline points="9 6 15 12 9 18"/></SvgIcon>;
const Calendar = (p) => <SvgIcon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></SvgIcon>;
const Clock = (p) => <SvgIcon {...p}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></SvgIcon>;
const Phone = (p) => <SvgIcon {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z"/></SvgIcon>;
const Mail = (p) => <SvgIcon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></SvgIcon>;
const MapPin = (p) => <SvgIcon {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></SvgIcon>;
const Instagram = (p) => <SvgIcon {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></SvgIcon>;
const Facebook = (p) => <SvgIcon {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></SvgIcon>;
const ArrowUpRight = (p) => <SvgIcon {...p}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/></SvgIcon>;
const Sparkles = (p) => <SvgIcon {...p}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M19 15l.7 1.8L21.5 17.5l-1.8.7L19 20l-.7-1.8L16.5 17.5l1.8-.7z"/></SvgIcon>;
const CookingPot = (p) => <SvgIcon {...p}><path d="M3 12h18"/><path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/><path d="M8 6c0-1 .8-2 2-2"/><path d="M14 6c0-1 .8-2 2-2"/><line x1="2" y1="12" x2="22" y2="12"/></SvgIcon>;
const Wine = (p) => <SvgIcon {...p}><path d="M8 22h8"/><path d="M12 15v7"/><path d="M17 4H7l1 7a4 4 0 0 0 8 0z"/></SvgIcon>;
const IceCream = (p) => <SvgIcon {...p}><path d="M7 11a5 5 0 0 1 10 0"/><path d="M7 11h10"/><path d="M9 11l3 11 3-11"/></SvgIcon>;
const QuoteIcon = (p) => <SvgIcon {...p}><path d="M7 7h4v6H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="M15 7h4v6h-4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/></SvgIcon>;

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function BrandMark({ size = 96, glow = true }) {
  return (
    <span
      className={`font-display ${glow ? 'neon flicker' : ''} inline-flex items-baseline`}
      style={{ fontSize: size, lineHeight: 1, fontWeight: 500, letterSpacing: '0.02em' }}
      aria-label={BRAND.name}
    >
      {BRAND.name}
    </span>
  );
}

const NAV = [
  { id: 'meniu', label: 'Meniu' },
  { id: 'galerie', label: 'Galerie' },
  { id: 'rezervare', label: 'Rezervări' },
  { id: 'despre', label: 'Despre' },
  { id: 'contact', label: 'Contact' },
];

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0908]/85 backdrop-blur-md border-b border-[#2a2018]/70 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <BrandMark size={scrolled ? 22 : 26} glow={true} />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[13px] tracking-[0.18em] uppercase text-[#cdbfae]/85 hover:text-[#f4c98a] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#rezervare"
            className="group inline-flex items-center gap-2 px-5 py-2.5 border border-[#e8a857]/60 text-[#f4c98a] text-[12px] tracking-[0.22em] uppercase rounded-full hover:bg-[#e8a857] hover:text-[#0a0908] transition-colors"
          >
            Rezervă
            <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden text-[#f4c98a] p-2"
          aria-label="Meniu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-3 pb-6 bg-[#0a0908]/95 backdrop-blur border-t border-[#2a2018]/60">
          <ul className="flex flex-col gap-4">
            {NAV.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-[15px] tracking-[0.18em] uppercase text-[#cdbfae]/90 py-1.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#rezervare"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#e8a857]/60 text-[#f4c98a] text-[12px] tracking-[0.22em] uppercase rounded-full"
              >
                Rezervă o masă <ChevronRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function BarScene() {
  const shapes = [
    { bw: 18, bh: 78, sh: 14, nw: 5,  nh: 22, ch: 4, c: '#3a2418', l: '#8a6b3f' },
    { bw: 20, bh: 64, sh: 6,  nw: 7,  nh: 16, ch: 3, c: '#2a1810', l: '#6a4a28' },
    { bw: 14, bh: 70, sh: 18, nw: 4,  nh: 26, ch: 4, c: '#4a2818', l: '#a07050' },
    { bw: 22, bh: 58, sh: 4,  nw: 8,  nh: 14, ch: 3, c: '#1a1008', l: '#705030' },
    { bw: 16, bh: 82, sh: 20, nw: 4,  nh: 24, ch: 4, c: '#3a2010', l: '#9a7048' },
    { bw: 12, bh: 56, sh: 14, nw: 4,  nh: 22, ch: 3, c: '#2a1608', l: '#7a5630' },
    { bw: 24, bh: 70, sh: 8,  nw: 8,  nh: 18, ch: 4, c: '#3a2818', l: '#8a6238' },
    { bw: 18, bh: 90, sh: 22, nw: 4,  nh: 28, ch: 4, c: '#1f1208', l: '#5a3a20' },
    { bw: 20, bh: 60, sh: 6,  nw: 6,  nh: 14, ch: 3, c: '#2c1a10', l: '#7c5430' },
  ];

  const Bottle = ({ b, label = false }) => {
    const totalH = b.bh + b.nh + b.ch;
    return (
      <g>
        <path
          d={`M ${-b.bw / 2} ${totalH}
              L ${-b.bw / 2} ${b.nh + b.sh + b.ch}
              C ${-b.bw / 2} ${b.nh + b.ch}, ${-b.nw / 2} ${b.nh + b.ch}, ${-b.nw / 2} ${b.ch}
              L ${-b.nw / 2} ${b.ch}
              L ${-b.nw / 2 - 0.6} ${0}
              L ${b.nw / 2 + 0.6} ${0}
              L ${b.nw / 2} ${b.ch}
              C ${b.nw / 2} ${b.nh + b.ch}, ${b.bw / 2} ${b.nh + b.ch}, ${b.bw / 2} ${b.nh + b.sh + b.ch}
              L ${b.bw / 2} ${totalH} Z`}
          fill={b.c}
        />
        <rect
          x={-b.bw / 2 + 1.2}
          y={b.nh + b.sh + b.ch + 2}
          width="1.2"
          height={totalH - (b.nh + b.sh + b.ch) - 6}
          fill="rgba(255,220,170,.55)"
          rx="0.6"
        />
        <rect
          x={b.bw / 2 - 2.4}
          y={b.nh + b.sh + b.ch + 6}
          width="0.6"
          height={totalH - (b.nh + b.sh + b.ch) - 12}
          fill="rgba(255,220,170,.25)"
        />
        {label && (
          <rect
            x={-b.bw / 2 + 1.5}
            y={b.nh + b.sh + b.ch + (b.bh - b.sh) * 0.35}
            width={b.bw - 3}
            height={(b.bh - b.sh) * 0.35}
            fill={b.l}
            opacity="0.7"
          />
        )}
        <rect x={-b.nw / 2 - 0.8} y="0" width={b.nw + 1.6} height={b.ch} fill="#0a0807" />
      </g>
    );
  };

  const shelf = (shelfWidth, seed) => {
    const arr = [];
    let x = 14;
    let i = 0;
    while (x < shelfWidth - 30) {
      const s = shapes[(i + seed) % shapes.length];
      const gap = 4 + ((i * 13 + seed * 7) % 8);
      arr.push({ s, x: x + s.bw / 2, hasLabel: (i + seed) % 3 !== 0 });
      x += s.bw + gap;
      i++;
    }
    return arr;
  };

  const shelf1 = shelf(1240, 0);
  const shelf2 = shelf(1240, 3);
  const brandUpper = BRAND.name.toUpperCase();

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wallBg" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#241b14" />
          <stop offset="40%" stopColor="#15110d" />
          <stop offset="100%" stopColor="#06050a" />
        </radialGradient>
        <linearGradient id="counter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a342c" />
          <stop offset="20%" stopColor="#2a2520" />
          <stop offset="100%" stopColor="#0e0b09" />
        </linearGradient>
        <linearGradient id="barback" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a140f" />
          <stop offset="100%" stopColor="#08060a" />
        </linearGradient>
        <linearGradient id="shelf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2818" />
          <stop offset="50%" stopColor="#2a1c10" />
          <stop offset="100%" stopColor="#1a1208" />
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#08060a" />
          <stop offset="50%" stopColor="#15110d" />
          <stop offset="100%" stopColor="#1f1814" />
        </linearGradient>
        <filter id="blur2"><feGaussianBlur stdDeviation="2" /></filter>
        <filter id="blur4"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="blur8"><feGaussianBlur stdDeviation="8" /></filter>
        <filter id="blur14"><feGaussianBlur stdDeviation="14" /></filter>
        <filter id="blur22"><feGaussianBlur stdDeviation="22" /></filter>
        <filter id="blur40"><feGaussianBlur stdDeviation="40" /></filter>
        <radialGradient id="bokeh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,220,170,.95)" />
          <stop offset="35%" stopColor="rgba(232,168,87,.45)" />
          <stop offset="100%" stopColor="rgba(232,168,87,0)" />
        </radialGradient>
        <radialGradient id="candleHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,210,140,.85)" />
          <stop offset="40%" stopColor="rgba(232,168,87,.35)" />
          <stop offset="100%" stopColor="rgba(232,168,87,0)" />
        </radialGradient>
        <radialGradient id="vig" cx="50%" cy="50%" r="75%">
          <stop offset="55%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,.92)" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1600" height="640" fill="url(#wallBg)" />

      {[...Array(160)].map((_, i) => (
        <circle
          key={`wt${i}`}
          cx={(i * 73) % 1600}
          cy={(i * 41) % 540}
          r={0.7 + (i % 3) * 0.3}
          fill={i % 7 === 0 ? '#4a3220' : '#2a1c14'}
          opacity={0.25 + (i % 4) * 0.08}
        />
      ))}

      <rect x="0" y="0" width="1600" height="200" fill="url(#barback)" opacity="0.7" />

      <g opacity="0.9" transform="translate(0, 60)">
        <ellipse cx="80" cy="510" rx="55" ry="14" fill="#0a0807" filter="url(#blur4)" />
        <path d="M55,420 L46,500 L114,500 L105,420 Z" fill="#1a1410" />
        <path d="M55,420 L46,500" stroke="rgba(232,168,87,.18)" strokeWidth="1" />
        {[
          { cx: 60, cy: 280, rx: 38, ry: 70, rot: -22 },
          { cx: 95, cy: 220, rx: 32, ry: 76, rot: 8 },
          { cx: 30, cy: 240, rx: 30, ry: 68, rot: -55 },
          { cx: 130, cy: 260, rx: 36, ry: 70, rot: 30 },
          { cx: 75, cy: 170, rx: 28, ry: 60, rot: -8 },
          { cx: 50, cy: 340, rx: 34, ry: 60, rot: -42 },
          { cx: 110, cy: 340, rx: 32, ry: 60, rot: 32 },
          { cx: 90, cy: 380, rx: 28, ry: 50, rot: 14 },
          { cx: 40, cy: 400, rx: 24, ry: 46, rot: -30 },
        ].map((l, i) => (
          <g key={i} transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}>
            <ellipse cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry} fill="#0d180a" />
            <ellipse cx={l.cx} cy={l.cy} rx={l.rx * 0.8} ry={l.ry * 0.85} fill="#152410" />
            <line x1={l.cx} y1={l.cy - l.ry} x2={l.cx} y2={l.cy + l.ry} stroke="#1f3018" strokeWidth="0.8" opacity="0.6" />
          </g>
        ))}
        <ellipse cx="100" cy="200" rx="6" ry="40" fill="rgba(232,168,87,.18)" filter="url(#blur4)" transform="rotate(8 100 200)" />
      </g>

      <rect x="180" y="80" width="1240" height="470" fill="url(#barback)" opacity="0.85" />

      <g transform="translate(800, 220)" textAnchor="middle">
        <ellipse cx="0" cy="0" rx="420" ry="140" fill="rgba(232,168,87,.20)" filter="url(#blur40)" />
        <ellipse cx="0" cy="0" rx="280" ry="80" fill="rgba(244,201,138,.30)" filter="url(#blur22)" />
        <ellipse cx="0" cy="0" rx="180" ry="50" fill="rgba(255,220,170,.35)" filter="url(#blur14)" />
        <text y="22" fontFamily="'Cormorant Garamond', serif" fontSize="98" fontWeight="500" fill="rgba(232,168,87,.45)" filter="url(#blur14)" letterSpacing="6">{brandUpper}</text>
        <text y="22" fontFamily="'Cormorant Garamond', serif" fontSize="98" fontWeight="500" fill="rgba(244,201,138,.85)" filter="url(#blur4)" letterSpacing="6">{brandUpper}</text>
        <text y="22" fontFamily="'Cormorant Garamond', serif" fontSize="98" fontWeight="500" fill="#fff2d6" letterSpacing="6">{brandUpper}</text>
      </g>

      {[{y: 380, list: shelf1}, {y: 490, list: shelf2}].map((row, idx) => (
        <g key={idx}>
          <rect x="180" y={row.y - 2} width="1240" height="2" fill="rgba(255,210,140,.85)" filter="url(#blur4)" />
          <rect x="180" y={row.y - 1} width="1240" height="1" fill="rgba(255,230,180,.95)" />
          <rect x="180" y={row.y - 80} width="1240" height="80" fill="rgba(232,168,87,.10)" filter="url(#blur22)" />
          {row.list.map((b, i) => {
            const totalH = b.s.bh + b.s.nh + b.s.ch;
            return (
              <g key={i} transform={`translate(${180 + b.x}, ${row.y - totalH})`}>
                <ellipse cx="0" cy={totalH - 2} rx={b.s.bw * 1.1} ry="6" fill="rgba(255,210,140,.55)" filter="url(#blur4)" />
                <Bottle b={b.s} label={b.hasLabel} />
              </g>
            );
          })}
          <rect x="180" y={row.y} width="1240" height="6" fill="url(#shelf)" />
          <rect x="180" y={row.y + 6} width="1240" height="2" fill="#000" opacity="0.6" />
        </g>
      ))}

      {[420, 1180].map((px, i) => (
        <g key={`p${i}`} transform={`translate(${px}, 0)`}>
          <line x1="0" y1="0" x2="0" y2="120" stroke="#1a1208" strokeWidth="1" />
          <ellipse cx="0" cy="160" rx="60" ry="40" fill="rgba(232,168,87,.20)" filter="url(#blur22)" />
          <path d="M-18,120 L18,120 L14,150 L-14,150 Z" fill="#0a0807" />
          <ellipse cx="0" cy="148" rx="12" ry="3" fill="rgba(255,220,170,.9)" filter="url(#blur2)" />
        </g>
      ))}

      <rect x="0" y="556" width="1600" height="120" fill="url(#counter)" />
      <rect x="0" y="556" width="1600" height="1.5" fill="rgba(255,220,170,.35)" />
      {[...Array(220)].map((_, i) => (
        <circle
          key={`gs${i}`}
          cx={(i * 71) % 1600}
          cy={560 + ((i * 37) % 110)}
          r={0.5 + (i % 4) * 0.4}
          fill={i % 6 === 0 ? '#6a4a30' : i % 3 === 0 ? '#4a3220' : '#1a1410'}
          opacity={0.6 + (i % 3) * 0.15}
        />
      ))}

      <g opacity="0.55">
        {[300, 600, 900, 1200].map((rx, i) => (
          <ellipse key={`cr${i}`} cx={rx} cy={605} rx="180" ry="22" fill="rgba(232,168,87,.22)" filter="url(#blur22)" />
        ))}
      </g>

      {[160, 380, 1220, 1440].map((cx, i) => (
        <g key={`c${i}`} transform={`translate(${cx}, 590)`}>
          <ellipse cx="0" cy="0" rx="80" ry="28" fill="url(#candleHalo)" filter="url(#blur14)" />
          <ellipse cx="0" cy="0" rx="36" ry="12" fill="rgba(255,210,140,.85)" filter="url(#blur4)" />
          <ellipse cx="0" cy="6" rx="9" ry="3" fill="rgba(60,40,28,.7)" />
          <rect x="-7" y="-8" width="14" height="14" rx="3" fill="rgba(40,28,18,.5)" />
          <ellipse cx="0" cy="-6" rx="2" ry="4" fill="#fff2d6" />
          <circle cx="0" cy="-7" r="1.2" fill="#fff" />
          <ellipse cx="0" cy="14" rx="20" ry="3" fill="rgba(255,210,140,.4)" filter="url(#blur4)" />
        </g>
      ))}

      <ellipse cx="0" cy="800" rx="380" ry="160" fill="rgba(20,14,10,.95)" filter="url(#blur22)" />
      <ellipse cx="1600" cy="820" rx="420" ry="180" fill="rgba(20,14,10,.95)" filter="url(#blur22)" />

      <rect x="0" y="676" width="1600" height="224" fill="url(#floor)" />
      {[...Array(180)].map((_, i) => (
        <circle
          key={`f${i}`}
          cx={(i * 79) % 1600}
          cy={680 + ((i * 41) % 220)}
          r={0.5 + (i % 4) * 0.5}
          fill={i % 7 === 0 ? '#6a4a30' : i % 4 === 0 ? '#3a2820' : '#1a1410'}
          opacity={0.45 + (i % 3) * 0.15}
        />
      ))}
      {[200, 500, 800, 1100, 1400].map((rx, i) => (
        <ellipse key={`fr${i}`} cx={rx} cy={730 + (i % 2) * 40} rx="160" ry="48" fill="rgba(232,168,87,.10)" filter="url(#blur40)" />
      ))}
      <g transform="translate(800, 800)" textAnchor="middle" opacity="0.14">
        <text fontFamily="'Cormorant Garamond', serif" fontSize="70" fill="rgba(255,220,170,.7)" filter="url(#blur14)" letterSpacing="5" transform="scale(1, -0.5)">{brandUpper}</text>
      </g>

      {[
        [120, 460, 22], [240, 480, 16], [380, 460, 18], [60, 360, 14],
        [1240, 470, 22], [1360, 460, 18], [1500, 480, 16], [1560, 360, 14],
        [200, 540, 10], [1400, 540, 10],
      ].map(([cx, cy, r], i) => (
        <circle key={`bo${i}`} cx={cx} cy={cy} r={r} fill="url(#bokeh)" />
      ))}

      <rect x="0" y="0" width="1600" height="900" fill="url(#vig)" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden grain">
      <BarScene />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 50%, rgba(10,9,8,.55) 0%, rgba(10,9,8,.85) 100%)',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 38%, rgba(232,168,87,.18) 0%, rgba(232,168,87,0) 70%)',
        }}
      />

      <div className="absolute inset-x-0 bottom-[28%] flex justify-around pointer-events-none">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="block rounded-full flicker"
            style={{
              width: 5,
              height: 5,
              background: '#f4c98a',
              boxShadow: '0 0 14px 6px rgba(232,168,87,.45)',
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-6 text-center">
        <div className="warm-glow absolute inset-0 -z-0" />

        <div className="h-[34vh] md:h-[38vh]" aria-hidden="true" />

        <p className="reveal text-[11px] md:text-[12px] tracking-[0.5em] uppercase text-[#e8a857]/80 mb-5">
          {BRAND.tagline}
        </p>

        <div className="reveal mt-3" style={{ transitionDelay: '260ms' }}>
          <p className="font-display italic text-2xl md:text-3xl text-[#f5ede0]/90 leading-snug max-w-xl">
            Realizat de Dogaru Catalin<br/>+373 60 171 888
          </p>
        </div>

        <p className="reveal mt-5 max-w-md text-[#cdbfae]/70 text-[15px] leading-relaxed" style={{ transitionDelay: '380ms' }}>
          {BRAND.heroSub}
        </p>

        <div className="reveal mt-10 flex flex-col sm:flex-row gap-3" style={{ transitionDelay: '500ms' }}>
          <a
            href="#rezervare"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e8a857] hover:bg-[#f4c98a] text-[#0a0908] text-[12px] tracking-[0.28em] uppercase font-medium rounded-full transition-colors"
          >
            <Calendar size={15} />
            Rezervă o Masă
          </a>
          <a
            href="#meniu"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#cdbfae]/30 hover:border-[#e8a857]/70 text-[#f5ede0] text-[12px] tracking-[0.28em] uppercase rounded-full transition-colors"
          >
            Vezi Meniul
          </a>
        </div>

        <div className="reveal absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#cdbfae]/50" style={{ transitionDelay: '700ms' }}>
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-[#e8a857]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, sub }) {
  return (
    <div className="reveal max-w-2xl mx-auto text-center mb-16">
      <p className="text-[11px] tracking-[0.5em] uppercase text-[#e8a857]/80 mb-5">{kicker}</p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#f5ede0] leading-[1.05]">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-[15px] text-[#cdbfae]/70 leading-relaxed max-w-xl mx-auto">{sub}</p>
      )}
      <div className="hairline mt-9 w-40 mx-auto" />
    </div>
  );
}

const MENU = {
  Aperitive: {
    icon: Sparkles,
    note: 'Începuturi delicate',
    items: [
      { name: 'Burrata Pugliese', desc: 'Cremă de burrata, roșii confiate, ulei de busuioc, focaccia caldă.', price: '48' },
      { name: 'Tartar de Vită', desc: 'Vită Black Angus, gălbenuș afumat, capere, pâine prăjită cu unt brun.', price: '62' },
      { name: 'Carpaccio de Sfeclă', desc: 'Sfeclă coaptă, brânză de capră, nuci caramelizate, vinaigrette de portocale.', price: '42' },
      { name: 'Sashimi de Somon', desc: 'Somon proaspăt, ponzu yuzu, ridiche daikon, microverdeață.', price: '58' },
    ],
  },
  'Fel Principal': {
    icon: CookingPot,
    note: 'Reverențe la masă',
    items: [
      { name: 'Risotto al Tartufo', desc: 'Orez Carnaroli, parmezan vechi de 24 luni, trufă neagră proaspătă.', price: '78' },
      { name: 'Ribeye Dry-Aged', desc: '350g maturat 35 zile, cartof confit, sos bordelaise, măduvă topită.', price: '128' },
      { name: 'Cod Negru Miso', desc: 'Cod negru, miso alb, dashi cu yuzu, varză bok choy.', price: '94' },
      { name: BRAND.signatureItem, desc: 'Somon, avocado, castravete, sos kabayaki, ghimbir murat — semnătura casei.', price: '68' },
      { name: 'Pappardelle al Cinghiale', desc: 'Paste proaspete, ragù de mistreț, vin Barolo, rozmarin.', price: '72' },
    ],
  },
  Desert: {
    icon: IceCream,
    note: 'Final dulce',
    items: [
      { name: 'Tiramisù della Casa', desc: 'Mascarpone, savoiardi cu espresso, cacao Valrhona, lichior amaretto.', price: '36' },
      { name: 'Crème Brûlée Vanille', desc: 'Vanilie de Madagascar, zahăr brunat, fructe de pădure.', price: '34' },
      { name: 'Cioccolato Fondente', desc: 'Fondant cu inimă lichidă, înghețată de fistic, sare Maldon.', price: '38' },
    ],
  },
  Vinuri: {
    icon: Wine,
    note: 'Selecție somelier',
    items: [
      { name: 'Barolo DOCG · 2018', desc: 'Piemonte, Italia — corp plin, note de trandafir uscat și trufă.', price: '42 / pahar' },
      { name: 'Fetească Neagră Rezervă', desc: 'Dealu Mare — fructe negre, mirodenii, lemn de stejar.', price: '28 / pahar' },
      { name: 'Sancerre Blanc · 2022', desc: 'Loire — citrice, mineralitate, pepene galben.', price: '38 / pahar' },
      { name: 'Champagne Brut Réserve', desc: 'Rezervă maison — biscuit, măr verde, perlaj fin.', price: '54 / pahar' },
    ],
  },
};

function MenuSection() {
  const cats = Object.keys(MENU);
  const [active, setActive] = React.useState(cats[0]);
  const cat = MENU[active];

  return (
    <section id="meniu" className="relative py-28 md:py-36 px-6 grain">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeader
          kicker="Meniu"
          title="Bucătăria casei"
          sub="O carte vie, gândită cu produse de sezon și inspirație din Mediterana, Asia și grădinile noastre."
        />

        <div className="reveal flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
          {cats.map(c => {
            const C = MENU[c].icon;
            const isActive = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border text-[12px] tracking-[0.22em] uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#e8a857] border-[#e8a857] text-[#0a0908]'
                    : 'border-[#2a2018] text-[#cdbfae]/80 hover:border-[#e8a857]/60 hover:text-[#f4c98a]'
                }`}
              >
                {C && <C size={14} />}
                {c}
              </button>
            );
          })}
        </div>

        <div className="reveal max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10 text-[#e8a857]/70">
            <span className="hairline flex-1 max-w-[80px]" />
            <span className="font-display italic text-lg text-[#f4c98a]">{cat.note}</span>
            <span className="hairline flex-1 max-w-[80px]" />
          </div>

          <ul className="divide-y divide-[#2a2018]/70">
            {cat.items.map((it, i) => (
              <li
                key={it.name}
                className="py-7 grid grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="font-display text-2xl md:text-[26px] text-[#f5ede0] group-hover:text-[#f4c98a] transition-colors">
                  {it.name}
                </h3>
                <span className="font-display text-xl text-[#e8a857] tabular-nums">
                  {it.price}<span className="text-[12px] text-[#cdbfae]/60 ml-1">lei</span>
                </span>
                <p className="col-span-2 text-[14px] md:text-[15px] text-[#cdbfae]/65 leading-relaxed max-w-[640px]">
                  {it.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="reveal text-center mt-14 text-[12px] tracking-[0.3em] uppercase text-[#cdbfae]/50">
          Pentru meniul complet și alergeni, vă rugăm să întrebați gazda
        </p>
      </div>
    </section>
  );
}

const GALLERY = [
  { label: 'Sushi · Semnătura casei', span: 'md:col-span-2 md:row-span-2', tone: 'peach' },
  { label: 'Bar · Selecție de vinuri', span: 'md:col-span-2', tone: 'gold' },
  { label: 'Cafea de specialitate', span: '', tone: 'cream' },
  { label: 'Interior · Sala principală', span: '', tone: 'dark' },
  { label: 'Tartar de vită', span: 'md:col-span-2', tone: 'peach' },
  { label: 'Desert · Tiramisù', span: '', tone: 'gold' },
  { label: 'Detaliu · Lumânare', span: '', tone: 'dark' },
];

function tonePh(tone) {
  if (tone === 'peach')
    return 'radial-gradient(70% 70% at 50% 60%, rgba(244,165,116,.35), transparent 65%), linear-gradient(160deg,#1f1410,#13100d)';
  if (tone === 'gold')
    return 'radial-gradient(70% 70% at 50% 60%, rgba(232,168,87,.32), transparent 65%), linear-gradient(160deg,#1a1410,#0f0c0a)';
  if (tone === 'cream')
    return 'radial-gradient(70% 70% at 50% 60%, rgba(245,237,224,.18), transparent 65%), linear-gradient(160deg,#1a1410,#13100d)';
  return 'radial-gradient(80% 70% at 50% 70%, rgba(232,168,87,.10), transparent 65%), linear-gradient(160deg,#1a1410,#0a0908)';
}

function Gallery() {
  return (
    <section id="galerie" className="relative py-28 md:py-36 px-6 bg-[#0c0a09]">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          kicker="Galerie"
          title="Atmosfera"
          sub="Frânturi din serile noastre — preparate, lumini, momente."
        />

        <div className="reveal grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={`ph relative rounded-xl overflow-hidden border border-[#2a2018]/60 group cursor-pointer ${g.span}`}
              style={{ background: tonePh(g.tone) }}
            >
              <div
                className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                style={{
                  background:
                    'repeating-linear-gradient(45deg, rgba(232,168,87,.08) 0 18px, rgba(232,168,87,0) 18px 36px)',
                }}
              />
              <div className="absolute inset-0 bg-[#e8a857]/0 group-hover:bg-[#e8a857]/[0.06] transition-colors duration-700" />
              <div className="absolute inset-3 border border-[#cdbfae]/10 rounded-lg pointer-events-none" />
              <figcaption className="absolute left-5 bottom-4 right-5 flex items-end justify-between gap-3">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#cdbfae]/65 max-w-[70%]">
                  {g.label}
                </span>
                <ArrowUpRight size={16} className="text-[#e8a857]/0 group-hover:text-[#e8a857] transition-colors" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  const [form, setForm] = React.useState({
    name: '', date: '', time: '19:30', guests: '2', phone: '', notes: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const today = new Date().toISOString().slice(0,10);

  return (
    <section id="rezervare" className="relative py-20 md:py-36 px-4 md:px-6 grain overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(232,168,87,.10), transparent 60%)' }} />
      <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(244,165,116,.08), transparent 60%)' }} />

      <div className="relative max-w-[1180px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-center">
        <div className="reveal">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#e8a857]/80 mb-5">Rezervări</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#f5ede0] leading-[1.05]">
            Așezați-vă <em className="italic text-[#f4c98a]">la masa noastră.</em>
          </h2>
          <p className="mt-6 text-[15px] text-[#cdbfae]/70 leading-relaxed max-w-md">
            Locurile sunt limitate, mai ales în weekend. Vă recomandăm rezervarea cu cel puțin 24 de ore înainte.
            Pentru grupuri de peste 8 persoane, vă rugăm să ne sunați direct.
          </p>

          <div className="hairline w-32 my-9" />

          <ul className="space-y-4 text-[14px] text-[#cdbfae]/80">
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-[#e8a857]" />
              {BRAND.openingShort}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#e8a857]" />
              {BRAND.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#e8a857]" />
              {BRAND.emailReservations}
            </li>
          </ul>
        </div>

        <form
          onSubmit={submit}
          className="reveal relative bg-[#13100d]/80 backdrop-blur border border-[#2a2018] rounded-2xl p-5 sm:p-7 md:p-9"
          style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,.7), inset 0 1px 0 rgba(245,237,224,.04)' }}
        >
          <div className="absolute -top-3 left-7 px-3 py-1 bg-[#0a0908] border border-[#e8a857]/40 rounded-full">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#f4c98a]">Formular Rezervare</span>
          </div>

          <div className="space-y-5 mt-2">
            <Field label="Nume complet">
              <input
                required
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder="Ion Popescu"
                className="w-full bg-transparent border-b border-[#2a2018] focus:border-[#e8a857] py-3 text-[15px] text-[#f5ede0] placeholder-[#5a4d3f] outline-none transition-colors ring-gold"
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Data">
                <input
                  required
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={set('date')}
                  className="w-full bg-transparent border-b border-[#2a2018] focus:border-[#e8a857] py-3 text-[15px] text-[#f5ede0] outline-none ring-gold"
                />
              </Field>
              <Field label="Ora">
                <select
                  value={form.time}
                  onChange={set('time')}
                  className="w-full bg-transparent border-b border-[#2a2018] focus:border-[#e8a857] py-3 text-[15px] text-[#f5ede0] outline-none ring-gold"
                >
                  {['12:00','13:00','13:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30'].map(t =>
                    <option key={t} value={t} className="bg-[#13100d]">{t}</option>
                  )}
                </select>
              </Field>
            </div>

            <Field label="Persoane">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 pb-2 border-b border-[#2a2018]">
                {['1','2','3','4','5','6','7','8+'].map(n => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => setForm(f => ({...f, guests: n}))}
                    className={`w-9 h-9 rounded-full text-[13px] tabular-nums transition-all ${
                      form.guests === n
                        ? 'bg-[#e8a857] text-[#0a0908]'
                        : 'border border-[#2a2018] text-[#cdbfae]/80 hover:border-[#e8a857]/60'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Telefon">
              <input
                required
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="+373 ..."
                className="w-full bg-transparent border-b border-[#2a2018] focus:border-[#e8a857] py-3 text-[15px] text-[#f5ede0] placeholder-[#5a4d3f] outline-none ring-gold"
              />
            </Field>

            <Field label="Cerințe speciale (opțional)">
              <textarea
                rows="2"
                value={form.notes}
                onChange={set('notes')}
                placeholder="Aniversare, alergii, masă lângă fereastră..."
                className="w-full bg-transparent border-b border-[#2a2018] focus:border-[#e8a857] py-3 text-[15px] text-[#f5ede0] placeholder-[#5a4d3f] outline-none ring-gold resize-none"
              />
            </Field>

            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#e8a857] hover:bg-[#f4c98a] text-[#0a0908] text-[12px] tracking-[0.28em] uppercase font-medium rounded-full transition-colors"
            >
              {submitted ? '✓ Rezervare trimisă' : 'Confirmă Rezervarea'}
              {!submitted && <ChevronRight size={14} />}
            </button>

            {submitted && (
              <p className="text-center text-[12px] text-[#cdbfae]/65">
                Vă vom contacta în scurt timp pentru confirmare.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-[#cdbfae]/55 mb-1">{label}</span>
      {children}
    </label>
  );
}

function About() {
  return (
    <section id="despre" className="relative py-28 md:py-36 px-6 bg-[#0c0a09]">
      <div className="max-w-[1180px] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="reveal order-2 lg:order-1">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#e8a857]/80 mb-5">Despre Noi</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#f5ede0] leading-[1.05]">
            Lumini calde, <br/><em className="italic text-[#f4c98a]">povești la masă.</em>
          </h2>

          <div className="mt-8 space-y-5 text-[15px] md:text-[16px] text-[#cdbfae]/75 leading-[1.8] max-w-lg">
            <p>
              Restaurantul nostru s-a născut dintr-o pasiune simplă: a aduce împreună oameni dragi în jurul unei
              mese frumos așezate. Lemn cald, lumini blânde și o ospitalitate care invită la pauze lungi —
              ingredientele care fac fiecare seară de neuitat.
            </p>
            <p>
              Bucătarul-șef și echipa noastră lucrează cu producători locali, ingrediente de sezon și tehnici
              moderne, păstrând sufletul fiecărei rețete. Suntem un loc de seară lungă: o masă bună, un pahar
              de vin ales cu grijă, o conversație care nu se grăbește.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat n="2019" label="Deschidere" />
            <Stat n="48" label="Locuri" />
            <Stat n="120+" label="Etichete vin" />
          </div>
        </div>

        <div className="reveal order-1 lg:order-2 relative">
          <div
            className="ph aspect-[4/5] rounded-2xl overflow-hidden border border-[#2a2018]"
            style={{ background: 'radial-gradient(70% 70% at 50% 60%, rgba(232,168,87,.28), transparent 65%), linear-gradient(160deg,#1a1410,#0f0c0a)' }}
          >
            <div className="absolute inset-4 border border-[#cdbfae]/10 rounded-xl" />
            <span className="label">Bucătar-șef · În bucătărie</span>
          </div>

          <div className="absolute -bottom-8 -left-4 md:-left-12 max-w-xs bg-[#13100d] border border-[#2a2018] rounded-xl p-6 float">
            <QuoteIcon size={18} className="text-[#e8a857] mb-3" />
            <p className="font-display italic text-lg text-[#f5ede0] leading-snug">
              „Mâncarea e bună. Lumina, însă, te face să vrei să rămâi.”
            </p>
            <p className="mt-3 text-[11px] tracking-[0.25em] uppercase text-[#cdbfae]/50">
              Recenzie · Observatorul Gourmand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-[#f4c98a]">{n}</div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-[#cdbfae]/55 mt-1">{label}</div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative pt-28 md:pt-36 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          kicker="Contact"
          title="Vă așteptăm."
          sub={`${BRAND.addressLine1}, ${BRAND.addressLine2.replace(/^.*?,\s*/, '')} — în inima orașului.`}
        />

        <div className="reveal grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
          <div
            className="ph relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#2a2018]"
            style={{ background: 'linear-gradient(180deg,#0f0c0a,#13100d)' }}
          >
            <svg className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="none" viewBox="0 0 800 500">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2018" strokeWidth="0.6"/>
                </pattern>
              </defs>
              <rect width="800" height="500" fill="url(#grid)" />
              <path d="M0,300 Q200,260 400,290 T800,260" stroke="#3a2c20" strokeWidth="6" fill="none" />
              <path d="M0,180 L800,200" stroke="#3a2c20" strokeWidth="4" fill="none" />
              <path d="M380,0 L420,500" stroke="#3a2c20" strokeWidth="5" fill="none" />
              <path d="M120,0 Q140,250 160,500" stroke="#2a2018" strokeWidth="3" fill="none" />
              <rect x="540" y="60" width="180" height="120" rx="12" fill="rgba(232,168,87,.04)" stroke="#2a2018" />
            </svg>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-[#0a0908] border border-[#e8a857]/60 rounded-full px-4 py-2 mb-3 flex items-center gap-2">
                <BrandMark size={14} glow={false} />
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#f4c98a]">Aici suntem</span>
              </div>
              <div className="relative">
                <span className="block w-4 h-4 rounded-full bg-[#e8a857] shadow-[0_0_24px_8px_rgba(232,168,87,.5)]" />
                <span className="absolute inset-0 w-4 h-4 rounded-full bg-[#e8a857] animate-ping opacity-40" />
              </div>
            </div>

            <span className="label">Google Maps · placeholder</span>
          </div>

          <div className="bg-[#13100d] border border-[#2a2018] rounded-2xl p-8 md:p-10 flex flex-col">
            <h3 className="font-display text-3xl text-[#f5ede0]">Vizitați-ne</h3>
            <div className="hairline w-20 my-6" />

            <ul className="space-y-6 flex-1">
              <ContactItem icon={MapPin} title="Adresă">
                {BRAND.addressLine1}<br/>{BRAND.addressLine2}
              </ContactItem>
              <ContactItem icon={Clock} title="Program">
                Mar–Joi · 12:00 – 23:00<br/>
                Vin–Sâm · 12:00 – 00:30<br/>
                Duminică · 12:00 – 22:00<br/>
                <span className="text-[#cdbfae]/50">Luni · închis</span>
              </ContactItem>
              <ContactItem icon={Phone} title="Telefon">
                {BRAND.phone}
              </ContactItem>
              <ContactItem icon={Mail} title="Email">
                {BRAND.emailContact}
              </ContactItem>
            </ul>

            <div className="mt-8 pt-6 border-t border-[#2a2018] flex items-center gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#cdbfae]/55">Urmăriți-ne</span>
              <div className="flex gap-2">
                <SocialBtn icon={Instagram} />
                <SocialBtn icon={Facebook} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

function ContactItem({ icon: Icon, title, children }) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 w-9 h-9 rounded-full border border-[#e8a857]/40 flex items-center justify-center flex-none">
        {Icon && <Icon size={15} className="text-[#e8a857]" />}
      </span>
      <div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#cdbfae]/55 mb-1">{title}</div>
        <div className="text-[14px] text-[#f5ede0]/90 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

function SocialBtn({ icon: Icon }) {
  return (
    <a href="#" className="w-9 h-9 rounded-full border border-[#2a2018] hover:border-[#e8a857]/60 hover:text-[#f4c98a] text-[#cdbfae]/80 flex items-center justify-center transition-colors">
      {Icon && <Icon size={15} />}
    </a>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-[#2a2018]">
      <div className="max-w-[1280px] mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <BrandMark size={20} />
        </div>
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#cdbfae]/45">
          © {BRAND.year} {BRAND.name} — Toate drepturile rezervate
        </p>
        <div className="flex gap-5 text-[11px] tracking-[0.22em] uppercase text-[#cdbfae]/55">
          <a href="#" className="hover:text-[#f4c98a]">Termeni</a>
          <a href="#" className="hover:text-[#f4c98a]">Confidențialitate</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <Gallery />
        <Reservation />
        <About />
        <Contact />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
