import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProject1Component } from './modal-project1.component';

describe('ModalProject1Component', () => {
  let component: ModalProject1Component;
  let fixture: ComponentFixture<ModalProject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProject1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
