import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampPageMaokaiComponent } from './champ-page-maokai.component';

describe('ChampPageMaokaiComponent', () => {
  let component: ChampPageMaokaiComponent;
  let fixture: ComponentFixture<ChampPageMaokaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampPageMaokaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampPageMaokaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
