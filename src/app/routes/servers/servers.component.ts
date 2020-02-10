import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onServer(serverId: number) {
    this.router.navigate([serverId], {
      relativeTo: this.route,
      queryParams: { allowEdit: serverId === 1 ? 1 : 0 },
      fragment: 'loading'
    });
  }

}
