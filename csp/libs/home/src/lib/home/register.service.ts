import { Data } from './data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Perform HTTP POST call to register user.
   * @function registerUser
   * @param {Object} dataToBeSend - data to be send to the API.
   * @returns {void}
   */
  public registerUser(dataToBeSend: Data, baseURL: string): any {
    // Perform HTTP POST request, error handling is done by HTTP Interceptors.
    return this.httpClient.post(baseURL, JSON.stringify(dataToBeSend));
  }
}
