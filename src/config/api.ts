import axios from 'axios';
import { AuthService } from '../services/authService';

// Unified API configuration for MVP testing phase
// Both dev and production use the same backend for testing
const getApiBaseUrl = () => {
  // Check for explicit environment override
  const envApiUrl = process.env.EXPO_PUBLIC_API_URL;
  if (envApiUrl) {
    return envApiUrl;
  }

  // For local development: check if local backend is preferred
  const useLocal = process.env.EXPO_PUBLIC_USE_LOCAL === 'true';
  
  if (__DEV__ && useLocal) {
    // Local development with various network configurations
    const networkMode = process.env.EXPO_PUBLIC_NETWORK_MODE || 'localhost';
    const port = process.env.EXPO_PUBLIC_API_PORT || '8010';
    
    switch (networkMode) {
      case 'work_wifi':
        return `http://${process.env.EXPO_PUBLIC_WORK_WIFI_IP || '192.168.1.39'}:${port}/api`;
      case 'phone_hotspot':
        return `http://${process.env.EXPO_PUBLIC_HOTSPOT_IP || '192.0.0.2'}:${port}/api`;
      case 'custom':
        return `http://${process.env.EXPO_PUBLIC_CUSTOM_IP || '192.168.1.39'}:${port}/api`;
      case 'localhost':
      default:
        return `http://localhost:${port}/api`;
    }
  }

  // Default: Use production Cloud Run URL for both dev and production builds
  return 'https://parqr-backend-service-v01-159002567401.asia-northeast1.run.app/api';
};

const API_BASE_URL = getApiBaseUrl();

// Log configuration in development
if (__DEV__) {
  console.log('🌐 API Configuration:', {
    baseURL: API_BASE_URL,
    useLocal: process.env.EXPO_PUBLIC_USE_LOCAL,
    networkMode: process.env.EXPO_PUBLIC_NETWORK_MODE,
    envOverride: process.env.EXPO_PUBLIC_API_URL
  });
}

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for debugging and auth
apiClient.interceptors.request.use(
  async (config) => {
    // Add authentication header if user is logged in
    const userCode = await AuthService.getUserCode();
    if (userCode) {
      config.headers['x-user-code'] = userCode;
    }

    if (__DEV__) {
      console.log('📤 API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        baseURL: config.baseURL,
        fullURL: `${config.baseURL}${config.url}`,
        data: config.data,
        headers: config.headers
      });
    }
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for debugging and error handling
apiClient.interceptors.response.use(
  (response) => {
    if (__DEV__) {
      console.log('✅ API Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data
      });
    }
    return response;
  },
  (error) => {
    if (__DEV__) {
      console.error('❌ API Error Details:', {
        message: error.message,
        code: error.code,
        status: error.response?.status,
        statusText: error.response?.statusText,
        responseData: error.response?.data,
        requestURL: error.config?.url,
        fullURL: `${error.config?.baseURL}${error.config?.url}`
      });
    }
    return Promise.reject(error);
  }
);