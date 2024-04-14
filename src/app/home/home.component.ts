import {Component, inject} from '@angular/core';
import {VacationDataService} from "../vacation-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  router: Router = inject(Router);
  vds: VacationDataService = inject(VacationDataService)

  getRandomVacationImage() {
    const randomIndex = this.vds.getRandomVacationId();
    void this.router.navigate([`/detail/${randomIndex}`]);
  }
}
