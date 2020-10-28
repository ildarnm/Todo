import { v4 as uuidv4 } from 'uuid';

export class Guid {
  constructor() {}

  static uuidv4(): string {
    return uuidv4();
  }
}
