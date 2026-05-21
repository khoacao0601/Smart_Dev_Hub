import { of } from 'rxjs';
import { GeminiService } from './gemini.service';

describe('GeminiService', () => {
  let service: GeminiService;
  let httpClientSpy: { post: jest.Mock };

  beforeEach(() => {
    // Tạo một mock object cho HttpClient với hàm post được track bởi Jest
    httpClientSpy = { post: jest.fn() };

    // Khởi tạo service và truyền mock object vào
    service = new GeminiService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send log content to analyzeLog endpoint', (done) => {
    const mockLog = 'Error: something went wrong';
    const mockResponse = { result: 'Log analyzed successfully' };

    // Giả lập dữ liệu trả về từ hàm post
    httpClientSpy.post.mockReturnValue(of(mockResponse));

    service.analyzeLog(mockLog).subscribe((response) => {
      expect(response).toEqual(mockResponse);
      done(); // Báo cho Jest biết là thao tác bất đồng bộ đã hoàn tất
    });

    // Kiểm tra xem mock function đã được gọi đúng với url và body mong muốn hay chưa
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.post).toHaveBeenCalledWith('/api/gemini/analyze-log', {
      log: mockLog,
    });
  });

  it('should send prompt to generateCode endpoint', (done) => {
    const mockPrompt = 'Create a regex for email';
    const mockResponse = { code: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$' };

    httpClientSpy.post.mockReturnValue(of(mockResponse));

    service.generateCode(mockPrompt).subscribe((response) => {
      expect(response).toEqual(mockResponse);
      done();
    });

    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.post).toHaveBeenCalledWith(
      '/api/gemini/generate-code',
      { prompt: mockPrompt },
    );
  });
});
