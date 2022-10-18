import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeItensComponent } from './lista-de-itens.component';

describe('ListaDeItensComponent', () => {
  let component: ListaDeItensComponent;
  let fixture: ComponentFixture<ListaDeItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
