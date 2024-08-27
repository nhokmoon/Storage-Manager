import 'next-auth/jwt'
import type { DefaultSession } from 'next-auth'

declare module 'next-auth/jwt' {
  type JWT = {
    name: string
    role: string
  }
}

declare module 'next-auth' {
  type Session = {
    user: {
      name: string
      role: string
    } & DefaultSession['user']
  }

  type User = {
    name: string
    role: string
  }
}
