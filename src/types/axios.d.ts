// src/types/axios.d.ts
import 'axios';

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean; // Añadimos la propiedad opcional _retry
  }
}