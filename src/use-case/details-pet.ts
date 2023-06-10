import { Pet } from "../entities/pet";
import { PetRepository } from "../repositories/pet-repository";

interface DetailsPetUseCaseRequest {
  id: string;
}
interface DetailsPetUseCaseResponse {
  pet: Pet;
}

export class DetailsPetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    id,
  }: DetailsPetUseCaseRequest): Promise<DetailsPetUseCaseResponse> {
    const pet = await this.petRepository.findById(id);
    if (!pet) {
      throw new Error("Pet not found");
    }
    return { pet };
  }
}
