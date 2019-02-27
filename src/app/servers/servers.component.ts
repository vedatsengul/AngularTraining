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
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus="server created";
  }
  onUpdateServerName(rvent: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
