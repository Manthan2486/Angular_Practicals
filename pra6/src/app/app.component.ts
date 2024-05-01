import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pra6';
  StudentList :any=[
    {name: 'Manthan',rolln:'065',address:'abc'},
    {name: 'Bhargav',rolln:'004',address:'def'},
    {name: 'Aditya',rolln:'001',address:'ghi'},
    {name: 'Darhan',rolln:'038',address:'jkl'},
    {name: 'Jay',rolln:'018',address:'mop'},
    {name: 'Ketan',rolln:'052',address:'qrs'},
    {name: 'Smit',rolln:'023',address:'tuv'},
  ]
  constructor(){
    ngOnInit();void{
    }
    addstudents();{
    }
    remove(index:any);{
      this.StudentList.splice(index,1);
    }
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function addstudents() {
  throw new Error('Function not implemented.');
}

function remove(index: any, any: any) {
  throw new Error('Function not implemented.');
}

