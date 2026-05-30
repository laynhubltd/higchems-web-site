import { Button } from 'antd'
import { NavLink } from '@/presentation/components/links'
import { useHeaderViewModel } from '@/presentation/viewmodels/useHeaderViewModel'
import { useNavigationViewModel } from '@/presentation/viewmodels/useNavigationViewModel'
import { useHomePageViewModel } from '@/presentation/viewmodels/useHomePageViewModel'

export function Navbar() {
  const { school } = useHeaderViewModel()
  const { items, scrollToSection } = useNavigationViewModel()
  const { onApply } = useHomePageViewModel()

  return (
    <nav className="fixed inset-x-0 top-0 z-[1000] border-b border-white/10 bg-maroon-deep/97 backdrop-blur-[14px]">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-8">
        <div className="flex items-center gap-3">
          {school?.logoUrl && (
            <img src={school.logoUrl} alt={school.acronym} className="h-10 w-10 object-contain" />
          )}
          <div className="font-serif text-[22px] font-bold text-white">
            HIG<span className="text-gold-light">CHEMS</span>
          </div>
        </div>

        <ul className="hidden list-none gap-7 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <NavLink href={item.href} onClick={(e) => scrollToSection(e, item.href)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Button
          type="primary"
          className="!border-none !bg-gold-light !font-bold !text-maroon hover:!opacity-90"
          onClick={onApply}
        >
          Apply Now
        </Button>
      </div>
    </nav>
  )
}
