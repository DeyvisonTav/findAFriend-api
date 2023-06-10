import { Entity } from "../cors/entities/entity";

interface OrgProps {
  name: string;
  email: string;
  CEP: string;
  address: string;
  whatsappNumber: string;
  password: string;
}

export class Org extends Entity<OrgProps> {
  get name(): string {
    return this.props.name;
  }
  get email(): string {
    return this.props.email;
  }

  get CEP(): string {
    return this.props.CEP;
  }
  get address(): string {
    return this.props.address;
  }
  get whatsappNumber(): string {
    return this.props.whatsappNumber;
  }

  get password(): string {
    return this.props.password;
  }

  set name(name: string) {
    this.props.name = name;
  }
  set email(email: string) {
    this.props.email = email;
  }
  set CEP(CEP: string) {
    this.props.CEP = CEP;
  }
  set address(address: string) {
    this.props.address = address;
  }

  set whatsappNumber(whatsappNumber: string) {
    this.props.whatsappNumber = whatsappNumber;
  }
  set password(password: string) {
    this.props.password = password;
  }

  static create(props: OrgProps): Org {
    const org = new Org({
      ...props,
    });

    return org;
  }
}
