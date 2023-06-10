import { Pet } from "../../../entities/pet";
import { PetRepository } from "../../../repositories/pet-repository";

export class InMemoryPetRepository implements PetRepository {
  public items: Pet[] = [];

  async create(data: Pet): Promise<Pet> {
    this.items.push(data);
    return data;
  }
  async findManyByCity(city: string): Promise<Pet[]> {
    if (!city) {
      throw new Error("City not found");
    }
    const pets = this.items.filter((item) => item.city === city);
    return pets;
  }
  async findByFilter(filter: Pet): Promise<Pet[]> {
    const filteredPets = this.items.filter((item) => {
      if (filter.name && filter.name !== item.name) return false;
      if (
        filter.ageClassification &&
        filter.ageClassification !== item.ageClassification
      )
        return false;
      if (filter.energyLevel && filter.energyLevel !== item.energyLevel)
        return false;
      if (
        filter.fisicalClassfication &&
        filter.fisicalClassfication !== item.fisicalClassfication
      )
        return false;
      if (
        filter.dependecyLevel &&
        filter.dependecyLevel !== item.dependecyLevel
      )
        return false;
      if (filter.city && filter.city !== item.city) return false;
      if (filter.race && filter.race !== item.race) return false;

      return true;
    });

    return filteredPets;
  }

  async findById(id: string): Promise<Pet> {
    const pet = this.items.find((item) => item.id.toString() === id);
    if (!pet) {
      throw new Error("Pet not found");
    }
    return pet;
  }
}
