import { Pet } from "../entities/pet";
import { PetRepository } from "../repositories/pet-repository";

interface FetchPetUseCaseRequest {
  city: string;
}

interface FetchPetUseCaseResponse {
  pet: Pet[];
}

export class FetchPetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    city,
  }: FetchPetUseCaseRequest): Promise<FetchPetUseCaseResponse> {
    const pet = await this.petRepository.findManyByCity(city);
    if (city === "") {
      throw new Error("City not found");
    }

    return { pet };
  }
}
