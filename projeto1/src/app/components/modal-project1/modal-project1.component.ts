import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-project1',
  templateUrl: './modal-project1.component.html',
  styleUrls: ['./modal-project1.component.scss']
})
export class ModalProject1Component implements OnInit {

  constructor() { }

  @Output() closeModalEmit = new EventEmitter();
    
  closeModal(){
    this.closeModalEmit.emit();
  }

  ngOnInit(): void {
  }

}
