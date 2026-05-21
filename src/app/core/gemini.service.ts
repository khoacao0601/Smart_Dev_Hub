import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // help we can call this service from any components
})
export class GeminiService {
  // path to API Server(where we have API key and run GeminiSDK)
  private apiUrl = '/api/gemini'; 

  constructor(private http: HttpClient) {}

  // Function to send Error Log to Server for Gemini Analyst
  analyzeLog(logContent: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/analyze-log`, { log: logContent });
  }

  // function for request to create code/SQL/Regex
  generateCode(prompt: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate-code`, { prompt: prompt });
  }
}