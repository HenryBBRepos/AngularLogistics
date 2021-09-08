import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let loggerService: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    loggerService = TestBed.get(LoggerService);
  });

  it('should be created', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    expect(service).toBeTruthy();
  });

  it('should call debug', () => {
      spyOn(loggerService, 'debug');
      expect(loggerService).toHaveBeenCalled();
  });

  it('should call info', () => {
    spyOn(loggerService, 'info');
    expect(loggerService).toHaveBeenCalled();
  });

  it('should call error', () => {
    spyOn(loggerService, 'error');
    expect(loggerService).toHaveBeenCalled();
  });
});
