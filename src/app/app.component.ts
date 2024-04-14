import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgOptimizedImage} from "@angular/common";

// We're using the singleton here for convenience:
// import { exiftool } from "exiftool-vendored"; // no esm support and @angular-builders/custom-webpack is not working properly (no :application)

// And to verify everything is working:
// exiftool
//  .version()
//  .then((version: any) => console.log(`We're running ExifTool v${version}`))

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Vacation Gallery - Mallorca';
}
