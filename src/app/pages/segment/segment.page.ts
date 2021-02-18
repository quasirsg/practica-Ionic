import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  
  superHeroes: Observable<any>;
  publisher: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }
  segmentChanged(event) {
    // if (event.detail.value === 'todos') {
    //   return this.publisher = '';
    // }
    this.publisher = event.detail.value;
  }
}
