import { Button } from 'antd'
import { useHomePageViewModel } from '@/presentation/viewmodels/useHomePageViewModel'

export function CtaSection() {
  const { content, onApply, onRequestInfo } = useHomePageViewModel()

  if (!content) return null

  const { cta } = content

  return (
    <div className="border-y border-gold/15 bg-maroon px-8 py-14">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 lg:flex-row">
        <div>
          <h2 className="mb-2 font-serif text-[clamp(24px,3vw,36px)] font-bold text-white">
            {cta.title}
          </h2>
          <p className="max-w-lg text-[15px] text-white/45">{cta.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <Button
            type="primary"
            size="large"
            className="!h-auto !border-none !bg-gold-light !px-7 !py-3 !font-bold !text-maroon"
            onClick={onApply}
          >
            {cta.primaryLabel}
          </Button>
          <Button
            size="large"
            ghost
            className="!h-auto !border-white/25 !px-7 !py-3 !font-semibold !text-white hover:!border-white/45"
            onClick={onRequestInfo}
          >
            {cta.secondaryLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
