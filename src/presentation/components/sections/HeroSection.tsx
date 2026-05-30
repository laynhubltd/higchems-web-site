import { FadeUp } from '@/presentation/components/ui/FadeUp'
import { useHomePageViewModel } from '@/presentation/viewmodels/useHomePageViewModel'

export function HeroSection() {
  const { content } = useHomePageViewModel()

  if (!content) return null

  const { hero } = content

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-maroon-deep pt-[68px]">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 60px,#fff 60px,#fff 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#fff 60px,#fff 61px)',
        }}
      />
      <div className="absolute -right-[120px] -top-[220px] h-[640px] w-[640px] rounded-full bg-gold/6" />
      <div className="absolute -left-[100px] bottom-10 h-[320px] w-[320px] rounded-full bg-gold/6" />

      <div className="relative z-[2] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-8 py-20 lg:grid-cols-2">
        <div>
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/11 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gold-light">
              {hero.pill}
            </div>
          </FadeUp>
          <FadeUp>
            <h1 className="mb-5 font-serif text-[clamp(38px,5vw,62px)] font-black leading-[1.1] text-white">
              {hero.title}
              <br />
              <em className="not-italic text-gold-light">{hero.titleAccent}</em>
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="max-w-[460px] text-[17px] leading-relaxed text-white/50">
              {hero.subtitle}
            </p>
          </FadeUp>
        </div>

        <div className="relative hidden lg:block">
          <FadeUp>
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/30">
              <span className="text-6xl">🎓</span>
              <p className="mt-4 text-sm">HIGCHEMS Campus, Takum</p>
            </div>
          </FadeUp>
          <div className="absolute -bottom-5 -left-7 min-w-[180px] rounded-xl border border-white/10 bg-white p-4 shadow-xl">
            <div className="text-[10px] font-bold uppercase tracking-wide text-muted">
              {hero.floatCards[0]?.label}
            </div>
            <div className="font-serif text-lg font-bold text-maroon">{hero.floatCards[0]?.value}</div>
          </div>
          <div className="absolute -right-6 top-6 rounded-xl border border-gold/20 bg-maroon p-4 shadow-xl">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-gold-light/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
              {hero.floatCards[1]?.label}
            </div>
            <div className="font-serif text-lg font-bold text-white">{hero.floatCards[1]?.value}</div>
            {hero.floatCards[1]?.detail && (
              <div className="mt-1 text-[11px] text-gold/60">{hero.floatCards[1].detail}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
