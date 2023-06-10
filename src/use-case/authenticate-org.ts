import { OrgRepository } from "../repositories/org-repository";

interface AuthenticateOrgUseCaseRequest {
  email: string;
  password: string;
}
interface AuthenticateOrgUseCaseResponse {
  id: string;
}

export class AuthenticateOrgUseCase {
  constructor(private orgRepository: OrgRepository) {}
  async execute(
    data: AuthenticateOrgUseCaseRequest
  ): Promise<AuthenticateOrgUseCaseResponse> {
    const org = await this.orgRepository.findByEmail(data.email);
    if (!org) {
      throw new Error("Org not found");
    }
    if (org.password !== data.password) {
      throw new Error("Invalid password");
    }

    return { id: org.id.toString() };
  }
}
