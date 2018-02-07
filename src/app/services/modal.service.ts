import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class ModalService  {

  constructor() { }

  /**
   * Will open up modal and create content
   * @param {string} html [description]
   */
  openModal( html: string): void {
  	console.log('openning up modal');
  	console.log($('#htmlModal'));
  }
}
