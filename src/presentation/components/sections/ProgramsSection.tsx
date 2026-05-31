import type { Program } from '@/domain/site-content/entities'
import { SectionShell } from '@/presentation/components/layout/SectionShell'
import { FadeUp } from '@/presentation/components/ui/FadeUp'
import { SectionHeader } from '@/presentation/components/ui/SectionHeader'
import { useProgramsViewModel } from '@/presentation/viewmodels/useProgramsViewModel'

function ProgramListItem({ program }: { program: Program }) {
  return (
    <li className="flex items-start gap-3 border-b border-maroon-tint py-3 last:border-b-0">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-maroon/30 bg-white" />
      <div>
        <p className="text-[13px] font-medium leading-snug text-body">{program.title}</p>
        {program.abbreviation && (
          <p className="mt-0.5 text-[11px] font-semibold text-maroon">({program.abbreviation})</p>
        )}
      </div>
    </li>
  )
}

function ProgramColumn({
  title,
  programs,
  subsections,
}: {
  title: string
  programs?: Program[]
  subsections?: { title: string; programs: Program[] }[]
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-maroon-tint bg-white">
      <div className="bg-maroon px-4 py-3 text-center text-[11px] font-bold uppercase tracking-wide text-white">
        {title}
      </div>
      <div className="p-4">
        {programs && (
          <ul className="list-none">
            {programs.map((p) => (
              <ProgramListItem key={p.id} program={p} />
            ))}
          </ul>
        )}
        {subsections?.map((section) => (
          <div key={section.title} className="mb-4 last:mb-0">
            <p className="mb-2 border-b border-maroon-tint pb-2 text-[11px] font-bold uppercase tracking-wide text-maroon">
              {section.title}
            </p>
            <ul className="list-none">
              {section.programs.map((p) => (
                <ProgramListItem key={p.id} program={p} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProgramsSection() {
  const { categories, programs, activeCategory, setActiveCategory, sectionMeta } =
    useProgramsViewModel()

  if (!sectionMeta) return null

  const healthPrograms = programs.filter((p) => p.categoryId === 'health')
  const managementPrograms = programs.filter((p) => p.categoryId === 'management')
  const diplomaHealthPrograms = programs.filter((p) => p.categoryId === 'diploma-health')
  const diplomaManagementPrograms = programs.filter((p) => p.categoryId === 'diploma-management')
  const diplomaGeneralPrograms = programs.filter((p) => p.categoryId === 'diploma-general')

  const showAllColumns = activeCategory === 'all'

  return (
    <SectionShell id="programs" className="bg-surface">
      <SectionHeader
        eyebrow={sectionMeta.eyebrow}
        title={sectionMeta.title}
        linkLabel={sectionMeta.linkLabel}
        className="mb-4"
      />

      <FadeUp>
        <p className="mb-8 text-sm text-[#5a6a7a]">
          HIGCHEMS offers undergraduate, HND, and diploma programmes across the Faculty of Health,
          Faculty of Management Sciences, and Diploma Programmes.
        </p>
      </FadeUp>

      <FadeUp>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-4 py-2 text-[13px] font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-maroon text-white'
                  : 'bg-white text-maroon hover:bg-maroon-tint'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </FadeUp>

      {showAllColumns ? (
        <FadeUp>
          <div className="grid gap-5 lg:grid-cols-2">
            <ProgramColumn title="Faculty of Health" programs={healthPrograms} />
            <ProgramColumn title="Faculty of Management Sciences" programs={managementPrograms} />
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <ProgramColumn
              title="Diploma — Health Sciences"
              programs={diplomaHealthPrograms}
            />
            <ProgramColumn
              title="Diploma — Management Sciences"
              programs={diplomaManagementPrograms}
            />
            <ProgramColumn
              title="Diploma — General Sciences"
              programs={diplomaGeneralPrograms}
            />
          </div>
        </FadeUp>
      ) : (
        <FadeUp>
          {activeCategory === 'health' && (
            <ProgramColumn title="Faculty of Health" programs={healthPrograms} />
          )}
          {activeCategory === 'management' && (
            <ProgramColumn title="Faculty of Management Sciences" programs={managementPrograms} />
          )}
          {activeCategory === 'diploma-health' && (
            <ProgramColumn title="Diploma — Health Sciences" programs={diplomaHealthPrograms} />
          )}
          {activeCategory === 'diploma-management' && (
            <ProgramColumn
              title="Diploma — Management Sciences"
              programs={diplomaManagementPrograms}
            />
          )}
          {activeCategory === 'diploma-general' && (
            <ProgramColumn
              title="Diploma — General Sciences"
              programs={diplomaGeneralPrograms}
            />
          )}
        </FadeUp>
      )}
    </SectionShell>
  )
}
