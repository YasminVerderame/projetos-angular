import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProject2Component } from './modal-project2.component';

describe('ModalProject2Component', () => {
  let component: ModalProject2Component;
  let fixture: ComponentFixture<ModalProject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProject2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
