import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PanelContainerComponent} from './panel-container.component';

describe('TicketContainerComponent', () => {
  let component: PanelContainerComponent;
  let fixture: ComponentFixture<PanelContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelContainerComponent]
    });
    fixture = TestBed.createComponent(PanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
