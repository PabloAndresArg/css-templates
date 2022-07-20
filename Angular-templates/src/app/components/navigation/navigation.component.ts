import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title: string = 'test';
  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.utils.getEmitterTitle().subscribe(
      (value: any) => {
        this.title = value;
      }
    )
  }

}
