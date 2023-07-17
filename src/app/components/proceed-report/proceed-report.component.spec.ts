import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedReportComponent } from './proceed-report.component';

describe('ProceedReportComponent', () => {
  let component: ProceedReportComponent;
  let fixture: ComponentFixture<ProceedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
