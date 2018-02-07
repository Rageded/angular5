import { Component, OnInit, Input } from '@angular/core';

import { fighter } from '../../../models/fighter';

@Component({
  selector: 'app-fighterd',
  templateUrl: './fighterd.component.html',
  styleUrls: ['./fighterd.component.css']
})
export class FighterdComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() picture: string;
  @Input() wins: string;
  @Input() losses: string;
  @Input() weight: string;
  @Input() nickName: string = ' ';
  @Input() active: string;



}
