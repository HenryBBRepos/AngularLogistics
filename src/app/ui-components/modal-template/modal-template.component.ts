import { Inject, InjectionToken } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {
  private title: string = '';
  private content: string = '';
  constructor(
    private logger: LoggerService,
    @Inject(MAT_DIALOG_DATA) private matData: any
  ) { }

  ngOnInit() {
     this.title = this.matData.title;
     this.content = this.matData.message;
  }

}
