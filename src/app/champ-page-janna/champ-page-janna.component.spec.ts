import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampPageJannaComponent } from './champ-page-janna.component';

describe('ChampPageJannaComponent', () => {
  let component: ChampPageJannaComponent;
  let fixture: ComponentFixture<ChampPageJannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampPageJannaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampPageJannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
