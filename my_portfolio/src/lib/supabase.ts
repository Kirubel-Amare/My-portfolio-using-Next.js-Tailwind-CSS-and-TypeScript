import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Contact form will not work.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database functions
export const saveContactMessage = async (formData: {
  name: string;
  email: string;
  message: string;
  subject?: string;
}) => {
  // Validate environment variables
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase is not configured. Please check your environment variables.');
  }

  // Validate form data
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error('Please fill in all required fields.');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error('Please enter a valid email address.');
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert([{
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      subject: formData.subject?.trim() || 'No subject',
      created_at: new Date().toISOString()
    }])
    .select()

  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to send message. Please try again later.');
  }

  return data
}

export const getProjects = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase is not configured.');
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to load projects.');
  }

  return data
}

// Test connection function (optional)
export const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('count')
      .limit(1)

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Connection test failed:', error);
    return { success: false, error };
  }
}