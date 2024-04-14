import {Injectable} from '@angular/core';
import {VacationData} from "./types";
import data from '../assets/img/src.json';

@Injectable({
  providedIn: 'root'
})
export class VacationDataService {
  private _vacationData: VacationData[] = data

  constructor() {
  }

  public get vacations() {
    return this._vacationData;
  }

  public get vacationAmount() {
    return this._vacationData.length - 1;
  }

  public vacationHavingIndex(index: number) {
    return this._vacationData.at(index);
  }

  getRandomVacationId() {
    return Math.floor(Math.random() * (this.vacationAmount + 1));
  }
}
