import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNotFoundComponent } from './fileNotFound.component';

describe('FooterComponent', () => {
  let component: FileNotFoundComponent;
  let fixture: ComponentFixture<FileNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
