import { Entity } from "../cors/entities/entity";
interface PetProps {
  orgId: string;
  name: string;
  ageClassification: string;
  energyLevel: string;
  fisicalClassfication: string;
  dependecyLevel: string;
  race: string;
  city: string;
}

export class Pet extends Entity<PetProps> {
 get orgId(): string {
    return this.props.orgId;
 }

  get city(): string {
    return this.props.city;
  }
  get name(): string {
    return this.props.name;
  }
  get ageClassification(): string {
    return this.props.ageClassification;
  }
  get energyLevel(): string {
    return this.props.energyLevel;
  }
  get fisicalClassfication(): string {
    return this.props.fisicalClassfication;
  }
  get dependecyLevel(): string {
    return this.props.dependecyLevel;
  }
  get race(): string {
    return this.props.race;
  }
  set city(city: string) {
    this.props.city = city;
  }
  set name(name: string) {
    this.props.name = name;
  }
  set ageClassification(ageClassification: string) {
    this.props.ageClassification = ageClassification;
  }

  set energyLevel(energyLevel: string) {
    this.props.energyLevel = energyLevel;
  }
  set fisicalClassfication(fisicalClassfication: string) {
    this.props.fisicalClassfication = fisicalClassfication;
  }
  set dependecyLevel(dependecyLevel: string) {
    this.props.dependecyLevel = dependecyLevel;
  }

  set race(race: string) {
    this.props.race = race;
  }

  static create(props: PetProps): Pet {
    const pet = new Pet({
      ...props,
    });
    return pet;
  }
}
