import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PanelStatusComponent} from './panel-status.component';

describe('PanelStatusComponent', () => {
  let component: PanelStatusComponent;
  let fixture: ComponentFixture<PanelStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelStatusComponent]
    });
    fixture = TestBed.createComponent(PanelStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
