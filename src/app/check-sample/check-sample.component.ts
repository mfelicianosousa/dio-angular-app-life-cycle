import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
 } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})

export class CheckSampleComponent
  implements OnInit,
      DoCheck,
      AfterContentChecked,
      AfterContentInit,
      AfterViewChecked,
      AfterViewInit,
      OnDestroy {

    quantidade: number;
    ordem: number;

    constructor(){
      this.quantidade = 0;
      this.ordem = 0;
    }
     add(){
      this.ordem += 1;
    }

    increment(){
      this.ordem = 0;
      this.quantidade += 1;

    }

    decrement(){
      this.ordem = 0;
      this.quantidade -= 1;
    }

  ngDoCheck(): void {
    this.add()
    console.log(this.ordem+' - ngDoCheck');
  }
  ngAfterContentChecked(): void {
    this.add()
    console.log(this.ordem+' - ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.add()
    console.log(this.ordem+' - ngAfterContentInit');;
  }
  ngAfterViewChecked(): void {
    this.add()
    console.log(this.ordem+' - ngAfterViewChecked');;
  }
  ngAfterViewInit(): void {
    this.add()
    console.log(this.ordem+'- ngAfterViewInit');;
  }
  ngOnInit(): void {
    this.add()
    console.log(this.ordem+' - ngOnInit');
  }

  ngOnDestroy(): void {
        this.add()
    console.log(this.ordem+' - goodbye my friend');
  }

}
