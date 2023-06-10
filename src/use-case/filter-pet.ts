import { Pet } from "../entities/pet";

interface FilterPetUseCaseRequest {
  name?: string;
  ageClassification?: string;
  energyLevel?: string;
  fisicalClassfication?: string;
  dependecyLevel?: string;
  city?: string;
  race?: string;
}

interface FilterPetUseCaseResponse {
  pets: Pet[];
}

export class FilterPetUseCase {
  constructor(private petRepository: any) {}

  async execute(
    filter: FilterPetUseCaseRequest
  ): Promise<FilterPetUseCaseResponse> {
    const pets = await this.petRepository.findByFilter(filter);
    return { pets };
  }
}
