import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampPageRakanComponent } from './champ-page-rakan.component';

describe('ChampPageRakanComponent', () => {
  let component: ChampPageRakanComponent;
  let fixture: ComponentFixture<ChampPageRakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampPageRakanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampPageRakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
