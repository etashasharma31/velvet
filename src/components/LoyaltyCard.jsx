import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Crown, Gem, RotateCcw } from 'lucide-react';

const TIER_CONFIG = {
  cocoa: {
    name: 'Cocoa',
    icon: Star,
    color: '#c59f59',
    colorMid: '#a07a38',
    glowColor: 'rgba(197,159,89,0.18)',
    gradient: 'radial-gradient(ellipse at 30% 20%, #2a1f0e 0%, #17130d 60%, #1e180f 100%)',
    accentGradient: 'linear-gradient(135deg, #c59f59, #8a6830, #c59f59)',
    reward: '5% on every order',
    perks: ['Early access to arrivals', 'Birthday chocolate gift', 'Seasonal lookbooks'],
    nextTier: 'Velvet',
    nextAt: 200,
  },
  velvet: {
    name: 'Velvet',
    icon: Crown,
    color: '#e9c177',
    colorMid: '#c59f59',
    glowColor: 'rgba(233,193,119,0.22)',
    gradient: 'radial-gradient(ellipse at 30% 20%, #2d2212 0%, #17130d 60%, #261d10 100%)',
    accentGradient: 'linear-gradient(135deg, #e9c177, #b07d30, #e9c177)',
    reward: '10% on every order',
    perks: ['Free standard shipping', 'Exclusive mid-season drops', 'Tasting notes with every order'],
    nextTier: 'Noir',
    nextAt: 500,
  },
  noir: {
    name: 'Noir',
    icon: Gem,
    color: '#eae1d7',
    colorMid: '#b0a090',
    glowColor: 'rgba(234,225,215,0.14)',
    gradient: 'radial-gradient(ellipse at 30% 20%, #1e1d1c 0%, #111010 60%, #1a1918 100%)',
    accentGradient: 'linear-gradient(135deg, #eae1d7, #8a8070, #eae1d7)',
    reward: '15% + double points events',
    perks: ['Free express & gift-wrap', 'Private tasting events', 'Personal chocolatier concierge', 'First access to limited editions'],
    nextTier: null,
    nextAt: null,
  },
};

/** Decorative corner flourish — quarter of an ornate frame */
function CornerFlourish({ color, rotate = 0 }) {
  return (
    <svg
      width="36" height="36"
      viewBox="0 0 36 36"
      style={{ transform: `rotate(${rotate}deg)`, display: 'block' }}
    >
      <path d="M2 2 L2 14 M2 2 L14 2" stroke={color} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M2 2 L2 8 M2 2 L8 2" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.9"/>
      <circle cx="2" cy="2" r="1.5" fill={color} opacity="0.8"/>
      <path d="M6 6 Q10 4 14 8 Q18 12 16 16" stroke={color} strokeWidth="0.6" fill="none" opacity="0.35" strokeLinecap="round"/>
    </svg>
  );
}

/** Wax seal badge for the tier icon */
function WaxSeal({ Icon, color, size = 64 }) {
  const r = size / 2;
  const segs = 18;
  const points = Array.from({ length: segs * 2 }).map((_, i) => {
    const angle = (i * Math.PI) / segs - Math.PI / 2;
    const radius = i % 2 === 0 ? r - 2 : r - 6;
    return `${r + radius * Math.cos(angle)},${r + radius * Math.sin(angle)}`;
  }).join(' ');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon points={points} fill={color} fillOpacity="0.12" stroke={color} strokeWidth="0.6" strokeOpacity="0.5"/>
      <circle cx={r} cy={r} r={r - 9} fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" strokeOpacity="0.3"/>
      <foreignObject x={r - 10} y={r - 10} width="20" height="20">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          <Icon size={14} color={color} opacity={0.85} />
        </div>
      </foreignObject>
    </svg>
  );
}

/** Thin horizontal ornament line with diamond */
function OrnamentLine({ color }) {
  return (
    <svg width="100%" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
      <line x1="0" y1="4" x2="88" y2="4" stroke={color} strokeWidth="0.5" opacity="0.35"/>
      <polygon points="100,1 103,4 100,7 97,4" fill={color} fillOpacity="0.6"/>
      <line x1="112" y1="4" x2="200" y2="4" stroke={color} strokeWidth="0.5" opacity="0.35"/>
    </svg>
  );
}

export default function LoyaltyCard({
  tier = 'velvet',
  memberName = 'Your Name',
  memberSince = 'January 2025',
  memberId = 'VLT-7743',
  points = 1240,
  spent = 340,
}) {
  const [flipped, setFlipped] = useState(false);
  const cfg = TIER_CONFIG[tier] || TIER_CONFIG.velvet;
  const Icon = cfg.icon;

  const progress = cfg.nextAt ? Math.min((spent / cfg.nextAt) * 100, 100) : 100;
  const remaining = cfg.nextAt ? Math.max(cfg.nextAt - spent, 0) : 0;

  return (
    <div style={{ perspective: '1400px', userSelect: 'none' }}>
      {/* 3D flip wrapper — aspect ratio 1.75 : 1 (horizontal membership card) */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d', position: 'relative', width: '100%', aspectRatio: '1.75' }}
      >

        {/* ════ FRONT ════ */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            position: 'absolute', inset: 0,
            background: cfg.gradient,
            borderRadius: '14px',
            overflow: 'hidden',
            border: `1px solid ${cfg.color}25`,
            boxShadow: `0 32px 72px rgba(0,0,0,0.65), 0 0 0 0.5px ${cfg.color}20, 0 0 60px ${cfg.glowColor}`,
          }}
        >
          {/* Ambient glow blob */}
          <div style={{
            position: 'absolute', top: '-10%', left: '-5%',
            width: '55%', paddingBottom: '55%',
            borderRadius: '50%',
            background: cfg.glowColor,
            filter: 'blur(48px)',
            pointerEvents: 'none',
          }} />

          {/* Subtle texture grain overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
            opacity: 0.5,
            pointerEvents: 'none',
          }} />

          {/* Top gloss sheen */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '45%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.055) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* Outer border frame inset */}
          <div style={{
            position: 'absolute', inset: 8,
            borderRadius: '8px',
            border: `0.5px solid ${cfg.color}18`,
            pointerEvents: 'none',
          }} />

          {/* Content */}
          <div style={{
            position: 'relative', zIndex: 10, height: '100%',
            padding: '6% 7%',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>

            {/* Top: corners + brand wordmark */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <CornerFlourish color={cfg.color} rotate={0} />
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-headline)',
                  fontStyle: 'italic',
                  color: cfg.color,
                  fontSize: 'clamp(15px, 3.2vw, 22px)',
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: '0.03em',
                }}>
                  Velvet
                </p>
                <p style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: 'clamp(5.5px, 0.9vw, 7.5px)',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: cfg.color,
                  opacity: 0.45,
                  marginTop: 3,
                }}>
                  Artisanal Chocolatier
                </p>
              </div>
              <CornerFlourish color={cfg.color} rotate={90} />
            </div>

            {/* Centre: wax seal + tier name */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4%' }}>
              <WaxSeal Icon={Icon} color={cfg.color} size={56} />
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(18px, 4vw, 30px)',
                  fontWeight: 300,
                  color: cfg.color,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}>
                  {cfg.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: 'clamp(5px, 0.85vw, 7px)',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: cfg.color,
                  opacity: 0.4,
                  marginTop: 5,
                }}>
                  Membership
                </p>
              </div>
            </div>

            {/* Bottom: member name + ID + ornament */}
            <div>
              <OrnamentLine color={cfg.color} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4%' }}>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: 'clamp(5px, 0.8vw, 7px)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: cfg.color,
                    opacity: 0.35,
                    marginBottom: 3,
                  }}>
                    Member
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'clamp(10px, 2vw, 15px)',
                    color: cfg.color,
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                  }}>
                    {memberName}
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: 'clamp(5px, 0.8vw, 7px)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: cfg.color,
                    opacity: 0.35,
                    marginBottom: 3,
                  }}>
                    Points
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'clamp(12px, 2.4vw, 18px)',
                    color: cfg.color,
                    fontWeight: 300,
                  }}>
                    {points.toLocaleString()}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: 'clamp(5px, 0.8vw, 7px)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: cfg.color,
                    opacity: 0.35,
                    marginBottom: 3,
                  }}>
                    ID
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: 'clamp(8px, 1.4vw, 11px)',
                    color: cfg.color,
                    opacity: 0.65,
                    letterSpacing: '0.12em',
                  }}>
                    {memberId}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: '4%', transform: 'rotate(180deg)' }}>
                <CornerFlourish color={cfg.color} rotate={0} />
              </div>
            </div>
          </div>
        </div>

        {/* ════ BACK ════ */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute', inset: 0,
            background: cfg.gradient,
            borderRadius: '14px',
            overflow: 'hidden',
            border: `1px solid ${cfg.color}25`,
            boxShadow: `0 32px 72px rgba(0,0,0,0.65), 0 0 60px ${cfg.glowColor}`,
          }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute', bottom: '-10%', right: '-5%',
            width: '55%', paddingBottom: '55%',
            borderRadius: '50%',
            background: cfg.glowColor,
            filter: 'blur(48px)',
            pointerEvents: 'none',
          }} />
          {/* Top gloss */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.045) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          {/* Inner frame */}
          <div style={{
            position: 'absolute', inset: 8,
            borderRadius: '8px',
            border: `0.5px solid ${cfg.color}18`,
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'relative', zIndex: 10, height: '100%',
            padding: '6% 7%',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <CornerFlourish color={cfg.color} rotate={0} />
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: 'clamp(5px, 0.85vw, 7px)',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: cfg.color,
                  opacity: 0.4,
                }}>
                  {cfg.name} Privileges
                </p>
              </div>
              <CornerFlourish color={cfg.color} rotate={90} />
            </div>

            {/* Perks list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5%' }}>
              {cfg.perks.map((perk, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    width: 4, height: 4, borderRadius: '50%',
                    background: cfg.color, opacity: 0.6, flexShrink: 0,
                  }} />
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(7px, 1.3vw, 10.5px)',
                    color: cfg.color,
                    opacity: 0.75,
                    letterSpacing: '0.02em',
                  }}>
                    {perk}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div>
              <OrnamentLine color={cfg.color} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4%', marginBottom: '2.5%' }}>
                <p style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: 'clamp(5px, 0.8vw, 7px)',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: cfg.color, opacity: 0.4,
                }}>
                  {cfg.nextTier ? `Progress to ${cfg.nextTier}` : 'Highest Tier'}
                </p>
                {cfg.nextTier && (
                  <p style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: 'clamp(5px, 0.8vw, 7px)',
                    color: cfg.color, opacity: 0.4,
                  }}>
                    ${remaining} remaining
                  </p>
                )}
              </div>
              {/* Bar */}
              <div style={{ height: 2, borderRadius: 99, background: `${cfg.color}20` }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  style={{
                    height: '100%', borderRadius: 99,
                    background: cfg.accentGradient,
                    boxShadow: `0 0 6px ${cfg.color}50`,
                  }}
                />
              </div>
              {/* Footer row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3%' }}>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: 'clamp(5px, 0.75vw, 6.5px)', color: cfg.color, opacity: 0.3, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Member since {memberSince}
                </p>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: 'clamp(5px, 0.75vw, 6.5px)', color: cfg.color, opacity: 0.3, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  {memberId}
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Flip button */}
      <motion.button
        onClick={() => setFlipped(f => !f)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-5 mx-auto flex items-center gap-2 font-label text-[9px] tracking-widest uppercase opacity-35 hover:opacity-65 transition-opacity cursor-pointer"
        style={{ color: cfg.color, display: 'flex' }}
        aria-label="Flip card"
      >
        <RotateCcw size={10} />
        {flipped ? 'View Front' : 'View Back'}
      </motion.button>
    </div>
  );
}
