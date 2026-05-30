import { GetNavigationItems } from '@/application/navigation/GetNavigationItems'
import { GetSchoolInfo } from '@/application/organization/GetSchoolInfo'
import { GetHomePageContent } from '@/application/site-content/GetHomePageContent'
import { GetProgramsByCategory } from '@/application/site-content/GetProgramsByCategory'
import { SearchSiteContent } from '@/application/site-content/SearchSiteContent'
import { InMemoryContentRepository } from '@/infrastructure/repositories/InMemoryContentRepository'
import { InMemorySchoolRepository } from '@/infrastructure/repositories/InMemorySchoolRepository'

const schoolRepository = new InMemorySchoolRepository()
const contentRepository = new InMemoryContentRepository()

export const container = {
  getSchoolInfo: new GetSchoolInfo(schoolRepository),
  getHomePageContent: new GetHomePageContent(contentRepository),
  getProgramsByCategory: new GetProgramsByCategory(contentRepository),
  searchSiteContent: new SearchSiteContent(contentRepository),
  getNavigationItems: new GetNavigationItems(contentRepository),
  contentRepository,
}
