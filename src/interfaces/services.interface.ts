export interface IServices {
    _id: string;
    name: string;
  }
  
  export interface IServicesResponse {
    success: boolean;
    message: string;
    data: IServices[];
    limit: number;
    totalDocs: number;
    page: number;
    totalPages: number;
  }
  