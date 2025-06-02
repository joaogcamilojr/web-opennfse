export interface CityRequestData {
  full_name: string
  email: string
  city_name: string
  state: string
  cnpj?: string
}

export interface FormSubmissionResponse {
  success: boolean
  message: string
  data?: CityRequestData
}
