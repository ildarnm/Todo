import { Injectable, Injector, Type, ɵsetCurrentInjector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModelCreatorService {
  constructor(private injector: Injector) {}

  public create<T>(model: Type<T>): T {
    ɵsetCurrentInjector(this.injector);
    return new model();
  }
}
