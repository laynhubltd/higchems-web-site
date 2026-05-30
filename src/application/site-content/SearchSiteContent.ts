import type { IContentRepository } from '@/domain/site-content/repositories/IContentRepository'

export class SearchSiteContent {
  constructor(private readonly contentRepository: IContentRepository) {}

  execute(query: string) {
    return this.contentRepository.search(query)
  }
}
