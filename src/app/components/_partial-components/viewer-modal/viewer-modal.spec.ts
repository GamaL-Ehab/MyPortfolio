import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerModal } from './viewer-modal';

describe('ViewerModal', () => {
  let component: ViewerModal;
  let fixture: ComponentFixture<ViewerModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewerModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewerModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
