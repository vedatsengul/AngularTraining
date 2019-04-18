import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No Server";
  serverName='';
  serverCreated;
  servers=['TEstserver','Testserver2'];
  logs=[];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000); 
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="server created. Name is " + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
    
  }
  onAddList(){
    this.logs.push(Date());
  }
}
