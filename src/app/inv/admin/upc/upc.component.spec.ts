import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPCComponent } from './upc.component';

describe('UPCComponent', () => {
  let component: UPCComponent;
  let fixture: ComponentFixture<UPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
