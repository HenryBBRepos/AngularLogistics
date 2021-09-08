import { Injectable } from '@angular/core';
import {LoggingLevel} from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  loggingLevel = LoggingLevel.INFO;
  constructor() { }

  info(message: any): void {
    if (
      this.canLog(this.loggingLevel) &&
      this.loggingLevel === LoggingLevel.INFO
    ) {
      console.log(`${this.getLogDateTime()} => ${this.loggingLevel}: ${message}`);
    }
  }

  debug(message: string): void {
    if (
      this.canLog(this.loggingLevel) &&
      this.loggingLevel === LoggingLevel.VERBOSE
    ) {
    // tslint:disable-next-line:no-console
    console.debug(`${this.getLogDateTime()} => ${this.loggingLevel}: ${message}`);
    }
  }

  error(message: string): void {
    if (
      this.canLog(this.loggingLevel) &&
      this.loggingLevel === LoggingLevel.VERBOSE
    ) {
    console.error(`${this.getLogDateTime()} => ${this.loggingLevel}: ${message}`);
    }
  }

  private canLog = (loggingLevel: LoggingLevel): boolean =>
      loggingLevel !== LoggingLevel.NONE

  private getLogDateTime = (): Date => new Date();
}
