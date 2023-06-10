import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryPetRepository } from "../test-repository/repositories/inMemory/in-memory-pet-repository";
import { Pet } from "../entities/pet";
import { FetchPetUseCase } from "./fetch-pet-city";
import { Org } from "../entities/ogr";
import { InMemoryOrgRepository } from "../test-repository/repositories/inMemory/in-memory-org-repository";
let inMemoryOrgRepository: InMemoryOrgRepository;
let inMemoryPetRepository: InMemoryPetRepository;
let sut: FetchPetUseCase;
describe("Fetch pet by city", () => {
  beforeEach(() => {
    inMemoryOrgRepository = new InMemoryOrgRepository();
    inMemoryPetRepository = new InMemoryPetRepository();
    sut = new FetchPetUseCase(inMemoryPetRepository);
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
    for (let i = 0; i < 10; i++) {
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
    }
    const response = await sut.execute({ city: "any_city" });
    expect(response.pet.length).toBe(10);
  });

  it("should be not able to fetch a pet by city not found", async () => {
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

    await expect(sut.execute({ city: "" })).rejects.toThrow("City not found");
  });
});
