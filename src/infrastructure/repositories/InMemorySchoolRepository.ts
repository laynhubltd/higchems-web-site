import type { ISchoolRepository } from '@/domain/organization/repositories/ISchoolRepository'
import { schoolSeed } from '@/infrastructure/data/seed/school'

export class InMemorySchoolRepository implements ISchoolRepository {
  async getSchool() {
    return schoolSeed
  }
}
