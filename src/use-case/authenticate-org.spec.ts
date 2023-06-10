import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryOrgRepository } from "../test-repository/repositories/inMemory/in-memory-org-repository";
import { Org } from "../entities/ogr";
import { AuthenticateOrgUseCase } from "./authenticate-org";

let inMemoryPetRepository: InMemoryOrgRepository;
let sut: AuthenticateOrgUseCase;
describe("Authenticate org", () => {
  beforeEach(() => {
    inMemoryPetRepository = new InMemoryOrgRepository();
    sut = new AuthenticateOrgUseCase(inMemoryPetRepository);
  });

  it("should authenticate a org", async () => {
    const org = Org.create({
      name: "Org name",
      email: "org@test.com",
      address: "Org address",
      CEP: "00000000",
      password: "123456",
      whatsappNumber: "00000000000",
    });
    inMemoryPetRepository.create(org);
    const response = await sut.execute({
      email: org.email,
      password: org.password,
    });
    expect(response.id).toEqual(org.id.toValue());
  });
});
