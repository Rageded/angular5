import { Component, OnInit, Input } from '@angular/core';

import { fighter } from '../../../models/fighter';

import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-fighterd',
  templateUrl: './fighterd.component.html',
  styleUrls: ['./fighterd.component.css']
})
export class FighterdComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  	console.log(this.fighter);
  }

  @Input() fighter: fighter;

  openFullImage() {
  	//alert('it works');

    this.modalService.openModal('hi');
  }

}
