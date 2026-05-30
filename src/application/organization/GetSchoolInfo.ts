import type { ISchoolRepository } from '@/domain/organization/repositories/ISchoolRepository'

export class GetSchoolInfo {
  constructor(private readonly schoolRepository: ISchoolRepository) {}

  execute() {
    return this.schoolRepository.getSchool()
  }
}
