import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkusersComponent } from './linkusers.component';

describe('LinkusersComponent', () => {
  let component: LinkusersComponent;
  let fixture: ComponentFixture<LinkusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
