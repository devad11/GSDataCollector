import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceApiComponent } from './source-api.component';

describe('SourceApiComponent', () => {
  let component: SourceApiComponent;
  let fixture: ComponentFixture<SourceApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
