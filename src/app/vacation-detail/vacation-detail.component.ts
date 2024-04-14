import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {VacationDataService} from "../vacation-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vacation-detail',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './vacation-detail.component.html',
  styleUrl: './vacation-detail.component.scss'
})
export class VacationDetailComponent implements OnInit {
  photographer: string = ""
  image: string = ""
  title: string = ""
  description: string = ""
  tags: string[] = []
  date: Date | string = new Date()
  id: number = 0;

  constructor(private vds: VacationDataService, private router: Router) {
  }

  ngOnInit(): void {
    const parts = this.router.url.split("/");
    this.id = +parts[parts.length - 1]

    const data = this.vds.vacationHavingIndex(this.id);

    if (!data) {
      void this.router.navigate([`/`]);
      return;
    }

    const {photographer, image, title, description, tags, date} = data;
    this.photographer = photographer;
    this.image = image;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.date = new Date(date).toLocaleDateString("de-AU")
  }
}
