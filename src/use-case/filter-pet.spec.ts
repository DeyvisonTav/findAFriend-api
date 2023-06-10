import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryPetRepository } from "../test-repository/repositories/inMemory/in-memory-pet-repository";
import { Pet } from "../entities/pet";
import { FilterPetUseCase } from "./filter-pet";
import { InMemoryOrgRepository } from "../test-repository/repositories/inMemory/in-memory-org-repository";
import { Org } from "../entities/ogr";
let inMemoryOrgRepository: InMemoryOrgRepository;
let inMemoryPetRepository: InMemoryPetRepository;
let sut: FilterPetUseCase;
describe("Filter pets", () => {
  beforeEach(() => {
    inMemoryOrgRepository = new InMemoryOrgRepository();
    inMemoryPetRepository = new InMemoryPetRepository();
    sut = new FilterPetUseCase(inMemoryPetRepository);
  });

  it("should be able filter pets", async () => {
    const org = Org.create({
      name: "Org name",
      email: "test@test.com",
      address: "Org address",
      CEP: "00000000",
      password: "123456",
      whatsappNumber: "00000000000",
    });

    inMemoryOrgRepository.create(org);

    for (let i = 0; i < 2; i++) {
      const pet = Pet.create({
        orgId: org.id.toString(),
        name: "any_name",
        ageClassification: "any_ageClassification",
        energyLevel: "any_energyLevel",
        fisicalClassfication: "any_fisicalClassfication",
        dependecyLevel: "any_dependecyLevel",
        city: "any_city",
        race: "cat",
      });

      inMemoryPetRepository.create(pet);
    }

    for (let i = 0; i < 3; i++) {
      const pet = Pet.create({
        orgId: org.id.toString(),
        name: "any_name",
        ageClassification: "any_ageClassification",
        energyLevel: "any_energyLevel",
        fisicalClassfication: "any_fisicalClassfication",
        dependecyLevel: "any_dependecyLevel",
        city: "any_city",
        race: "dog",
      });

      inMemoryPetRepository.create(pet);
    }
    const filterCat = { race: "cat" };
    const pets = await sut.execute(filterCat);
    expect(pets.pets.length).toBe(2);
    const filterDog = { race: "dog" };
    const pets2 = await sut.execute(filterDog);
    expect(pets2.pets.length).toBe(3);
  });
});
