import { Pet } from "../entities/pet";

export abstract class PetRepository {
  abstract create(data: Pet): Promise<Pet>;
  abstract findById(id: string): Promise<Pet>;
  abstract findManyByCity(city: string): Promise<Pet[]>;
  abstract findByFilter(filter: Pet): Promise<Pet[]>;
}
