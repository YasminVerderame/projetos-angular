import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public modalProject1: boolean = false;
  public modalProject2: boolean = false;
  public modalProject3: boolean = false;

  public collapsed: boolean = false;

  @Output() closeModalEmit = new EventEmitter();

  constructor(

  ) { }

  closeModal(){
    this.modalProject1 = false;
    this.modalProject2 = false;
    this.modalProject3 = false;
  }

  openModalProject1(){
    this.modalProject1 = true;
  }

  openModalProject2(){
    this.modalProject2 = true;
  }

  openModalProject3(){
    this.modalProject3 = true;
  }

  ngOnInit(): void {
  }

}
