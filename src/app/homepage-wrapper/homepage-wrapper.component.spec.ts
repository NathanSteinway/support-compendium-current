import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWrapperComponent } from './homepage-wrapper.component';

describe('HomepageWrapperComponent', () => {
  let component: HomepageWrapperComponent;
  let fixture: ComponentFixture<HomepageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
