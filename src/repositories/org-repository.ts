import { Org } from "../entities/ogr";

export abstract class OrgRepository {
  abstract create(data: Org): Promise<Org>;
  abstract findByEmail(email: string): Promise<Org>;
}
