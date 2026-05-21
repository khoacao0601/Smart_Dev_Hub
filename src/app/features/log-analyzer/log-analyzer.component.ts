import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { GeminiService } from '../../core/gemini.service';

@Component({
  selector: 'app-log-analyzer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-analyzer.component.html',
  styleUrl: './log-analyzer.component.scss'
})
export class LogAnalyzerComponent {
  logInput = new FormControl('');
  result = '';
  isLoading = false;

  constructor(private geminiService: GeminiService) {}

  analyze() {
    // Step 1: Guard - don't send empty input to the server
    if (!this.logInput.value?.trim()) return;

    // Step 2: Set loading state so the button shows "Analyzing..." and gets disabled
    this.isLoading = true;

    // Step 3: Clear previous result before making a new request
    this.result = '';

    // Step 4: Call the GeminiService which sends a POST request to our Express server
    // .subscribe() listens to the Observable returned by HttpClient
    this.geminiService.analyzeLog(this.logInput.value).subscribe({
      // Step 5: Called when the server responds successfully (HTTP 200)
      next: (response) => {
        this.result = response.result;  // Store the AI's analysis
        this.isLoading = false;         // Turn off loading state
      },
      // Step 6: Called if something goes wrong (network error, server 500, etc.)
      error: (err) => {
        console.error('Error:', err);
        this.result = '❌ Something went wrong. Check the console for details.';
        this.isLoading = false;
      }
    });
  }
}
