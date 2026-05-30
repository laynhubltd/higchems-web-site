import type { NavItem } from '@/domain/navigation/entities/NavItem'
import type {
  Activity,
  ActivityStat,
  Event,
  FacultyMember,
  GalleryItem,
  HomePageContent,
  NewsArticle,
  Program,
  ProgramCategory,
  Stat,
  Testimonial,
} from '@/domain/site-content/entities'

export interface SearchResult {
  programs: Program[]
  faculty: FacultyMember[]
}

export interface IContentRepository {
  getHomePageContent(): Promise<HomePageContent>
  getNavigationItems(): Promise<NavItem[]>
  getStats(): Promise<Stat[]>
  getProgramCategories(): Promise<ProgramCategory[]>
  getPrograms(categoryId?: string): Promise<Program[]>
  getActivities(): Promise<Activity[]>
  getActivityStats(): Promise<ActivityStat[]>
  getEvents(): Promise<Event[]>
  getFaculty(): Promise<FacultyMember[]>
  getGallery(): Promise<GalleryItem[]>
  getTestimonials(): Promise<Testimonial[]>
  getNews(): Promise<NewsArticle[]>
  search(query: string): Promise<SearchResult>
}
