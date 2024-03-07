import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  name: z.string().min(2),
  username: z.string().min(4),
})

export default schema