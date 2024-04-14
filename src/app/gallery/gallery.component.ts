import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {VacationData} from "../types";
import {VacationDataService} from "../vacation-data.service";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  vacations: VacationData[] = []

  constructor(private vdc: VacationDataService) {
  }

  ngOnInit(): void {
    this.vacations = this.vdc.vacations
  }
}
