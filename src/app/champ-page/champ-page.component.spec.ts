import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampPageComponent } from './champ-page.component';

describe('ChampPageComponent', () => {
  let component: ChampPageComponent;
  let fixture: ComponentFixture<ChampPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
