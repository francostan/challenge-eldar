import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          // Aquí es donde validarías las credenciales y devolverías un usuario si son válidas.
          // Podrías hacer una solicitud a tu base de datos o a otro servicio para hacer esto.
          // Si las credenciales son inválidas, devolverías null.
          const res = await fetch("/your/endpoint", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()

          if (res.ok && user) {
            return user
          }
          return null
        }
      })
    ]
  })