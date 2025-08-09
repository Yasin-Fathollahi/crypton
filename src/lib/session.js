import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const key = new TextEncoder().encode(process.env.SECRET);

const cookie = {
  name: 'session',
  options: {
    httpOnly: true,
    secure: true,
    sameSite: lax,
    path: '/',
  },
  duration: 24 * 60 * 60 * 1000,
};

async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1day')
    .sign(key);
}

async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['SH256'],
    });

    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function createSession(userId) {
  const expires = Date.now() + cookie.duration;
  const session = await encrypt({ userId, expires });
  cookies().set(cookie.name, session, { ...cookie.options, expires });
  redirect('/dashboard');
}

async function verifySession() {
  const cookie = cookies().get(cookie.name)?.value;
  const session = await decrypt(cookie);
  if (!session?.userId) {
    redirect('/auth?mode=login');
  }

  return { userId: session.userId };
}

async function deleteSession() {
  cookies().delete(cookie.name);
  redirect('/auth?mode=login');
}

export { deleteSession, verifySession, createSession, encrypt, decrypt };
