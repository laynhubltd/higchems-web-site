import type { IContentRepository } from '@/domain/site-content/repositories/IContentRepository'

export class GetProgramsByCategory {
  constructor(private readonly contentRepository: IContentRepository) {}

  execute(categoryId?: string) {
    return this.contentRepository.getPrograms(categoryId)
  }
}
