import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-project2',
  templateUrl: './modal-project2.component.html',
  styleUrls: ['./modal-project2.component.scss']
})
export class ModalProject2Component implements OnInit {

  @Output() closeModalEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.closeModalEmit.emit();
  }


}
