import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alertTypeMap: any = {
    warning: 'alert-warning',
    success: 'alert-success',
    error: 'alert-danger'
  }
  alertType = '';
  message = '';
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.getAlert().subscribe(alert => {
      if (!alert) {
        this.alertType = '';
        this.message = '';
      } else {
        this.alertType = this.alertTypeMap[alert.type];
        this.message = alert.text;
      }
    })
  }

}
