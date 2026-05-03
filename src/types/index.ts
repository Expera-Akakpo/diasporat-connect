export interface Transfer {
  id: string
  amount: number
  fees: number
  sender: string
  receiver: string
  date: string
  status: 'pending' | 'completed' | 'failed'
}

export interface User {
  id: string
  name: string
  role: 'expediteur' | 'destinataire'
  phone?: string
  email?: string
}