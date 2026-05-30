import { FadeUp } from '@/presentation/components/ui/FadeUp'
import { useStatsViewModel } from '@/presentation/viewmodels/useStatsViewModel'

export function StatsBandSection() {
  const { stats, values, bandRef } = useStatsViewModel()

  return (
    <div ref={bandRef} className="bg-maroon py-[60px]">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeUp key={stat.id}>
              <div
                className={`relative px-5 py-8 text-center ${i < stats.length - 1 ? 'lg:after:absolute lg:after:right-0 lg:after:top-[20%] lg:after:h-[60%] lg:after:w-px lg:after:bg-white/8' : ''}`}
              >
                <div className="font-serif text-5xl font-bold leading-none text-gold-light">
                  {values[stat.id] ?? 0}
                  {stat.suffix ?? ''}
                </div>
                <div className="mt-2 text-sm font-semibold text-white/70">{stat.label}</div>
                {stat.sublabel && (
                  <div className="mt-1 text-xs text-white/35">{stat.sublabel}</div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  )
}
