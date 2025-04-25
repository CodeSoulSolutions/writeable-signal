import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteableSignalComponent } from './writeable-signal.component';

describe('WriteableSignalComponent', () => {
  let component: WriteableSignalComponent;
  let fixture: ComponentFixture<WriteableSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteableSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteableSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
