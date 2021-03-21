import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityHealthPageComponent } from './community-health-page.component';

describe('CommunityHealthPageComponent', () => {
  let component: CommunityHealthPageComponent;
  let fixture: ComponentFixture<CommunityHealthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityHealthPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityHealthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
