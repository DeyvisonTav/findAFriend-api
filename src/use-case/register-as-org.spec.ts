import { describe, it, expect, beforeEach } from "vitest";
import { RegisterOrgUseCase } from "./register-as-org";
import { InMemoryOrgRepository } from "../test-repository/repositories/inMemory/in-memory-org-repository";
import { Org } from "../entities/ogr";

let inMemoryPetRepository: InMemoryOrgRepository;
let sut: RegisterOrgUseCase;
describe("Register org", () => {
  beforeEach(() => {
    inMemoryPetRepository = new InMemoryOrgRepository();
    sut = new RegisterOrgUseCase(inMemoryPetRepository);
  });

  it("should register a org", async () => {
    const org = Org.create({
      name: "Org name",
      email: "org@test.com",
      address: "Org address",
      CEP: "00000000",
      password: "123456",
      whatsappNumber: "00000000000",
    });

    const response = await sut.execute(org);
    expect(response.org).toHaveProperty("id");
  });
  it("should not be able to register without whatsappNumber or address", async () => {
    const org = Org.create({
      name: "Org name",
      email: "org@test.com",
      address: "",
      CEP: "00000000",
      password: "123456",
      whatsappNumber: "",
    });

    await expect(sut.execute(org)).rejects.toThrow(
      "Address or whatsappNumber is required"
    );
  });
});
