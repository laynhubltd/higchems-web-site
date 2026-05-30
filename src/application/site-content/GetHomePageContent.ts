import type { IContentRepository } from '@/domain/site-content/repositories/IContentRepository'

export class GetHomePageContent {
  constructor(private readonly contentRepository: IContentRepository) {}

  execute() {
    return this.contentRepository.getHomePageContent()
  }
}
