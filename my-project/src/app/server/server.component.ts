import { Component } from "@angular/core";
//{Component} - package name // filename

@Component({
    //selector must be a string  & unique
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
serverId:number=10;
serverStatus:string='offline';
constructor(){
    this.serverStatus=Math.random()>0.5?'online':'offline';
    console.log("server");
}
getServerStatus(){
    return this.serverStatus;
}
getColor(){
    return this.serverStatus==='online'?'green':'red';
}
}