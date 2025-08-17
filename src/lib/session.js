import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { supabase } from './supabase/supabase-client';
import { redirect } from 'next/navigation';

const key = new TextEncoder().encode(process.env.SECRET);

const cookie = {
  name: 'sessionId',
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
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
      algorithms: ['HS256'],
    });

    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// async function createSession(userId) {
//   const expires = Date.now() + cookie.duration;
//   const session = await encrypt({ userId, expires });
//   cookies().set(cookie.name, session, { ...cookie.options, expires });
//   redirect('/dashboard');
// }

async function createSession(userId) {
  const cookieStore = await cookies();
  const expires = Date.now() + cookie.duration;

  const session = {
    user_id: userId,
    expires_at: expires,
  };

  // add session to database
  const { data, error } = await supabase
    .from('sessions')
    .insert(session)
    .select('session_id');

  if (error) {
    throw error;
  }
  const sessionId = data[0].session_id;
  await cookieStore.set(cookie.name, sessionId, { ...cookie.options, expires });
}

// async function verifySession() {
//   const cookie = cookies().get(cookie.name)?.value;
//   const session = await decrypt(cookie);
//   if (!session?.userId) {
//     redirect('/auth?mode=login');
//   }

//   return { userId: session.userId };
// }

async function verifySession(noRedirect = false) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(cookie.name)?.value;

  if (!sessionId) {
    if (!noRedirect) {
      redirect('/auth?mode=login');
    } else {
      return { userId: null, sessionId: null };
    }
  }
  // check the session from db
  const { data, error } = await supabase
    .from('sessions')
    .select()
    .eq('session_id', sessionId);

  if (error) {
    throw error;
  }

  const session = data[0];

  const sessionExpired = session.expires_at - Date.now() < 0;

  if (sessionExpired || !session?.user_id) {
    if (!noRedirect) {
      cookieStore.delete(cookie.name);
      redirect('/auth?mode=login');
    } else {
      return { userId: null, sessionId: null };
    }
  }

  return { userId: session.user_id, sessionId };
}

// async function deleteSession() {
//   cookies().delete(cookie.name);
//   redirect('/auth?mode=login');
// }

async function deleteSession(userId, sessionId, getRedirected = false) {
  if (userId) {
    await supabase.from('sessions').delete().eq('user_id', userId);
  }
  if (sessionId) {
    await supabase.from('sessions').delete().eq('session_id', sessionId);
  }
  if (getRedirected) {
    const cookieStore = await cookies();
    cookieStore.delete(cookie.name);
    redirect('/auth?mode=login');
  }
}

export { deleteSession, verifySession, createSession, encrypt, decrypt };
