import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth?response_type=code&prompt=consent&access_type=offline'
    })
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google') {
        try {
          const response = await axios.post('http://localhost:5000/auth/google', {
            token: account.idToken
          });
          return response.status === 200;
        } catch (error) {
          console.error('Error logging in', error);
          return false;
        }
      }
      return true;
    },
    async session(session, user) {
      session.user.id = user.id;
      return session;
    }
  }
});
