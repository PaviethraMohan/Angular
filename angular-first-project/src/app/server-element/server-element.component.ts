import { Component, OnInit,Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges,
DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy{
@Input('srvElement') element:{type:string, name:string, content:string};
@Input('name') name:string;
@ViewChild('heading',{static:true}) header:ElementRef;
@ContentChild('contentParagraph',{static:true}) paragraph:ElementRef;
constructor(){

  console.log('constructor called');
}
ngOnChanges(changes: SimpleChanges){
  console.log('ngOnChanges called');
  console.log(changes);
}
ngOnInit() {
  console.log('ngOnit called');
  console.log('Text Content:'+this.header.nativeElement.textContent);
  console.log('Text Content of paragraph:'+this.paragraph.nativeElement.textContent);
}
ngDoCheck(): void {
  console.log('ngDoCheck called');
}
ngAfterContentInit(): void {
  console.log('ngAfterContent Init called');
}
ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked called');
}
ngAfterViewInit(): void {
  console.log('ngAfterViewInit called');
  console.log('Text Content:'+this.header.nativeElement.textContent);
  console.log('Text Content of paragraph:'+this.paragraph.nativeElement.textContent);
}
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked called');  
}
ngOnDestroy(): void {
  console.log('ngOnDestory called');
}
}
