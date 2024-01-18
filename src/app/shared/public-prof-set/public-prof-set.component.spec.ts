import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfSetComponent } from './public-prof-set.component';

describe('PublicProfSetComponent', () => {
  let component: PublicProfSetComponent;
  let fixture: ComponentFixture<PublicProfSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicProfSetComponent]
    });
    fixture = TestBed.createComponent(PublicProfSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
