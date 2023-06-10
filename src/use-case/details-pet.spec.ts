import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryPetRepository } from "../test-repository/repositories/inMemory/in-memory-pet-repository";
import { Pet } from "../entities/pet";
import { DetailsPetUseCase } from "./details-pet";
import { Org } from "../entities/ogr";
import { InMemoryOrgRepository } from "../test-repository/repositories/inMemory/in-memory-org-repository";

let inMemoryOrgRepository: InMemoryOrgRepository;
let inMemoryPetRepository: InMemoryPetRepository;
let sut: DetailsPetUseCase;
describe("Details pet", () => {
  beforeEach(() => {
    inMemoryOrgRepository = new InMemoryOrgRepository();
    inMemoryPetRepository = new InMemoryPetRepository();
    sut = new DetailsPetUseCase(inMemoryPetRepository);
  });

  it("should register a pet", async () => {
    const org = Org.create({
      name: "Org name",
      email: "test@test.com",
      address: "Org address",
      CEP: "00000000",
      password: "123456",
      whatsappNumber: "00000000000",
    });

    inMemoryOrgRepository.create(org);

    const pet = Pet.create({
      orgId: org.id.toString(),
      name: "any_name",
      ageClassification: "any_ageClassification",
      energyLevel: "any_energyLevel",
      fisicalClassfication: "any_fisicalClassfication",
      dependecyLevel: "any_dependecyLevel",
      city: "any_city",
      race: "any_race",
    });
    inMemoryPetRepository.create(pet);
    const response = await sut.execute({ id: pet.id.toValue() });
    expect(response.pet).toEqual(pet);
  });
});
