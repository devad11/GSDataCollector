import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcehtmlComponent } from './sourcehtml.component';

describe('SourcehtmlComponent', () => {
  let component: SourcehtmlComponent;
  let fixture: ComponentFixture<SourcehtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcehtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcehtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
