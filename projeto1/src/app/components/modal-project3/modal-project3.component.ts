import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-project3',
  templateUrl: './modal-project3.component.html',
  styleUrls: ['./modal-project3.component.scss']
})
export class ModalProject3Component implements OnInit {

  @Output() closeModalEmit = new EventEmitter();

  constructor() { }
    
  closeModal(){
    this.closeModalEmit.emit();
  }

  ngOnInit(): void {
  }

}
