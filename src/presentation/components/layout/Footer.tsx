import { FooterLink, SocialLink } from '@/presentation/components/links'
import { useFooterViewModel } from '@/presentation/viewmodels/useHeaderViewModel'

export function Footer() {
  const { school, footer } = useFooterViewModel()

  if (!school || !footer) return null

  return (
    <footer className="bg-maroon-deep px-8 pb-8 pt-[72px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 border-b border-white/6 pb-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={school.logoUrl} alt={school.acronym} className="h-12 w-12 object-contain" />
              <div className="font-serif text-[22px] font-bold text-white">
                HIG<span className="text-gold-light">CHEMS</span>
              </div>
            </div>
            <p className="mb-1 max-w-xs text-sm leading-relaxed text-white/30">{footer.description}</p>
            <p className="mt-5 text-sm font-semibold text-white/50">{school.fullName}</p>
            <div className="mt-4 space-y-1.5 text-[13px] text-white/35">
              <p>📍 Registrar's Office: {school.registrarAddress}</p>
              {school.contactPhone && <p>📞 {school.contactPhone}</p>}
              {school.contactEmail && <p>✉️ {school.contactEmail}</p>}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[1.2px] text-white/35">
                {col.title}
              </h4>
              <ul className="list-none space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 sm:flex-row">
          <div className="text-[13px] text-white/18">
            {footer.copyright} · Privacy Policy · Terms of Use
          </div>
          <div className="flex gap-2.5">
            {footer.social.map((s) => (
              <SocialLink key={s.label} href={s.href} variant="footer">
                {s.label}
              </SocialLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
