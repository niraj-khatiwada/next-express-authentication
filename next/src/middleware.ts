import { cookies } from 'next/headers'

export default function middleware() {
  // Server Side cookie
  console.log(cookies().getAll())
}
