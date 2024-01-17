import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComComponent } from './profile-com.component';

describe('ProfileComComponent', () => {
  let component: ProfileComComponent;
  let fixture: ComponentFixture<ProfileComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComComponent]
    });
    fixture = TestBed.createComponent(ProfileComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
