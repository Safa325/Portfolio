import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouMeComponent } from './abou-me.component';

describe('AbouMeComponent', () => {
  let component: AbouMeComponent;
  let fixture: ComponentFixture<AbouMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
