import type { School } from '@/domain/organization/entities/School'

export interface ISchoolRepository {
  getSchool(): Promise<School>
}
