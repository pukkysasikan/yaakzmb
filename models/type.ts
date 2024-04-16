interface EditUser {
    id?: number
    _method: 'PATCH'
    app: 'POS'
    name: string
    email: string
    phone: string
    bod: Date | string | null
    address: string
    sub_district: string
    district: string
    province: number | string
    zip_code: string
    active: 0
    birth_day?: string // จริงๆมันคือ bod แหละ
    updated_by: number
    store_id: number
  }

  interface SelectedCustomer {
    id?: number
    _method: 'PATCH'
    app: 'POS'
    name: string
    email: string
    phone: string
    bod: Date | string | null
    address: string
    sub_district: string
    district: string
    province: number | string
    zip_code: string
    active: 0
    birth_day?: string // จริงๆมันคือ bod แหละ
    updated_by: number
    store_id: number
  }