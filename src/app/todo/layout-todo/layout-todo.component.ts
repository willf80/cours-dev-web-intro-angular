import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-todo',
  templateUrl: './layout-todo.component.html',
  styleUrls: ['./layout-todo.component.css'],
})
export class LayoutTodoComponent implements OnInit {
  public navBarTitre = 'Todo App';
  public nom = 'Ange';
  public isAdmin = true;

  public listeDeClasse: string[] = ['Mamadou', 'Allaoui', 'Niang', 'Moussa', 'Franck'];

  constructor() {}

  ngOnInit(): void {}
}
