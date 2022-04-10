import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  log() {
    console.log("Console-Servise works!");
  }
}
