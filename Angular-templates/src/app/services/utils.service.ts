import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  title: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }


  getEmitterTitle() {
    return this.title;
  }
  emitEmitterTitle(title: string) {
    this.title.next(title);
  }

}
