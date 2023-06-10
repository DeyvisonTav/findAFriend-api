import { Pet } from "../entities/pet";
import { PetRepository } from "../repositories/pet-repository";

interface RegisterPetUseCaseRequest {
  orgId: string;
  name: string;
  ageClassification: string;
  energyLevel: string;
  fisicalClassfication: string;
  dependecyLevel: string;
  race: string;
  city: string;
}

interface RegisterPetUseCaseResponse {
  pet: Pet;
}

export class RegisterPetUseCase {
  constructor(private petRepositoy: PetRepository) {}

  async execute({
    orgId,
    ageClassification,
    dependecyLevel,
    energyLevel,
    fisicalClassfication,
    name,
    race,
    city,
  }: RegisterPetUseCaseRequest): Promise<RegisterPetUseCaseResponse> {
    const _pet = Pet.create({
      ageClassification,
      dependecyLevel,
      energyLevel,
      fisicalClassfication,
      name,
      race,
      city,
      orgId,
    });

    const pet = await this.petRepositoy.create(_pet);
    return { pet };
  }
}
