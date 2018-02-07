import { Component, OnInit, OnDestroy } from '@angular/core';
import { UfcService } from '../../services/ufc.service';


import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { fighter } from '../../models/fighter';

@Component({
  selector: 'app-ufc',
  templateUrl: './ufc.component.html',
  styleUrls: ['./ufc.component.css']
})
export class UfcComponent implements OnInit, OnDestroy {

  title = 'Cool UFC Fighters!';
  searchFighters: string = '';
  fighters: Array<fighter> = [];
  favoriteFightersArray: number[] = [753, 490667, 318, 302601, 945];
  subscription: Subscription = new Subscription();

  constructor(private ufcService: UfcService) { }

  ngOnInit() {
  	this.getFighters();
  	
  }

  ngOnDestroy(): void {
  	this.subscription.unsubscribe();
  	console.log('destroying sub');
  }


  getFighters(): void {
  	this.subscription.add(
  		this.ufcService.getFighters()
  			.subscribe((res: fighter[]) => this.addFighters(res))
  	);
  }

  getFighter(id: number): void {
  	this.subscription.add(
  		this.ufcService.getFighter(id)
  			.subscribe((res: any) => this.pushFighter(res.text()))
  	);
  }

  pushFighter(res: fighter): void {

  	this.fighters.push(res);
  }


  addFighters(res: fighter[]): void {
  	for (let k in res) {
  		if (this.favoriteFightersArray.indexOf(res[k].id) != -1) {
  			this.pushFighter(res[k]);
  		}
  	}

  }
}
