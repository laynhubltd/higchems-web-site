import type { IContentRepository } from '@/domain/site-content/repositories/IContentRepository'

export class GetNavigationItems {
  constructor(private readonly contentRepository: IContentRepository) {}

  execute() {
    return this.contentRepository.getNavigationItems()
  }
}
