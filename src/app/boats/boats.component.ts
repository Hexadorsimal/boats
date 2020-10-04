import { Component, OnInit } from '@angular/core';
import { BoatService } from '../boat.service';
import { Boat } from '../boat.model';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
  boats: Boat[];

  constructor(private boatService: BoatService) { }

  ngOnInit(): void {
    this.boatService.getBoats()
      .subscribe(boats => this.boats = boats);
  }

}
