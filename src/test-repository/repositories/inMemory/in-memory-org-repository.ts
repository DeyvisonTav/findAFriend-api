import { Org } from "../../../entities/ogr";
import { OrgRepository } from "../../../repositories/org-repository";

export class InMemoryOrgRepository implements OrgRepository {
  public orgs: Org[] = [];

  async create(data: Org): Promise<Org> {
    if (data.address === "" || data.whatsappNumber === "") {
      throw new Error("Address or whatsappNumber is required");
    }
    this.orgs.push(data);
    return data;
  }
  async findByEmail(email: string): Promise<Org> {
    const org = this.orgs.find((org) => org.email === email);
    if (!org) {
      throw new Error("Org not found");
    }
    return org;
  }
}
