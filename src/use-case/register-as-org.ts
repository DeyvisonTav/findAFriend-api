import { Org } from "../entities/ogr";
import { OrgRepository } from "../repositories/org-repository";

interface RegisterOrgUseCaseRegister {
  name: string;
  email: string;
  CEP: string;
  address: string;
  whatsappNumber: string;
  password: string;
}
interface RegisterOrgUseCaseResponse {
  org: Org;
}

export class RegisterOrgUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute(
    data: RegisterOrgUseCaseRegister
  ): Promise<RegisterOrgUseCaseResponse> {
    if (!data.whatsappNumber || !data.address) {
      throw new Error("Address or whatsappNumber is required");
    }
    const dataOrg = Org.create(data);
    const org = await this.orgRepository.create(dataOrg);

    return { org };
  }
}
