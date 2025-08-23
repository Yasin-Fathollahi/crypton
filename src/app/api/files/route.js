import { supabase } from 'lib/supabase/supabase-client';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const fd = await request.formData();
  const { file, email } = await Object.fromEntries(fd.entries());

  if (!file) {
    return NextResponse.json({ error: 'No file received.' }, { status: 400 });
  }

  if (!file.arrayBuffer) {
    return NextResponse.json(
      { error: 'unsupported file format.' },
      { status: 400 }
    );
  }

  // Convert File to Buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Generate unique file path
  // const filePath = `uploads/${Date.now()}-${file.name}`;
  const filePath = `uploaded/${email}/${file.name}`;

  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(filePath, buffer, {
      contentType: file.type,
    });

  if (error && !error.code === 'Duplicate') {
    console.error('🚀 ~ route.js:30 ~ POST ~ error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Get public URL
  const { data: urlData, error: urlError } = await supabase.storage
    .from('avatars')
    .getPublicUrl(filePath);

  if (urlError) {
    return NextResponse.json({ error: urlError.message }, { status: 500 });
  }

  // Set the pfp_url to public url
  const { data: pfpData, error: pfpError } = await supabase
    .from('profiles')
    .update({ pfp_url: urlData.publicUrl })
    .eq('email', email);

  if (pfpError) {
    return NextResponse.json({ error: pfpError.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    data: pfpData,
    path: filePath,
    url: urlData.publicUrl,
  });
}
