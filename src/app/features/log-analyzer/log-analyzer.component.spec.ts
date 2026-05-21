import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAnalyzerComponent } from './log-analyzer.component';

describe('LogAnalyzerComponent', () => {
  let component: LogAnalyzerComponent;
  let fixture: ComponentFixture<LogAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogAnalyzerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
