import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProject3Component } from './modal-project3.component';

describe('ModalProject3Component', () => {
  let component: ModalProject3Component;
  let fixture: ComponentFixture<ModalProject3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProject3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProject3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
