import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', //attribute
  //selector: '.app-servers', //class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus='No server was created';
  serverName='TestServer';
  serverCreated=false;
  constructor() {
    setTimeout(()=>{this.allowNewServer =true},4000);
    console.log("servers");
  }
 ngOnInit(): void {}  
 onCreateServer(){
  this.serverCreated=true;
  this.serverCreationStatus='Server was Created.Server Name: '+this.serverName;
 }
 onUpdateServerName(event:Event){
  this.serverName=(<HTMLInputElement>event.target).value;
 }
}
