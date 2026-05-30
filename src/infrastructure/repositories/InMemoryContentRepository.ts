import type {
  IContentRepository,
  SearchResult,
} from '@/domain/site-content/repositories/IContentRepository'
import { activitiesSeed, activityStatsSeed } from '@/infrastructure/data/seed/activities'
import { eventsSeed } from '@/infrastructure/data/seed/events'
import { facultySeed } from '@/infrastructure/data/seed/faculty'
import { gallerySeed } from '@/infrastructure/data/seed/gallery'
import { homePageContentSeed } from '@/infrastructure/data/seed/homePageContent'
import { navigationSeed } from '@/infrastructure/data/seed/navigation'
import { newsSeed } from '@/infrastructure/data/seed/news'
import {
  programCategoriesSeed,
  programsSeed,
} from '@/infrastructure/data/seed/programs'
import { statsSeed } from '@/infrastructure/data/seed/stats'
import { testimonialsSeed } from '@/infrastructure/data/seed/testimonials'

export class InMemoryContentRepository implements IContentRepository {
  async getHomePageContent() {
    return homePageContentSeed
  }

  async getNavigationItems() {
    return navigationSeed
  }

  async getStats() {
    return statsSeed
  }

  async getProgramCategories() {
    return programCategoriesSeed
  }

  async getPrograms(categoryId?: string) {
    if (!categoryId || categoryId === 'all') {
      return programsSeed
    }
    return programsSeed.filter((p) => p.categoryId === categoryId)
  }

  async getActivities() {
    return activitiesSeed
  }

  async getActivityStats() {
    return activityStatsSeed
  }

  async getEvents() {
    return eventsSeed
  }

  async getFaculty() {
    return facultySeed
  }

  async getGallery() {
    return gallerySeed
  }

  async getTestimonials() {
    return testimonialsSeed
  }

  async getNews() {
    return newsSeed
  }

  async search(query: string): Promise<SearchResult> {
    const q = query.trim().toLowerCase()
    if (!q) {
      return { programs: [], faculty: [] }
    }

    const programs = programsSeed.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description?.toLowerCase().includes(q) ?? false) ||
        (p.abbreviation?.toLowerCase().includes(q) ?? false),
    )

    const faculty = facultySeed.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.role.toLowerCase().includes(q) ||
        f.department.toLowerCase().includes(q),
    )

    return { programs, faculty }
  }
}
