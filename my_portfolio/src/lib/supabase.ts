import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabase: SupabaseClient | null = null

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Contact form will not work.')
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }

// --------------------
// Save contact message
// --------------------
export const saveContactMessage = async (formData: {
  name: string
  email: string
  message: string
  subject?: string
}) => {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please check your environment variables.')
  }

  if (!formData.name || !formData.email || !formData.message) {
    throw new Error('Please fill in all required fields.')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    throw new Error('Please enter a valid email address.')
  }

  const { data, error } = await supabase
    .from('contact_messages')
    .insert([
      {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        subject: formData.subject?.trim() || 'No subject'
      }
    ])

  if (error) {
    console.error('Supabase error:', error)
    throw new Error(error.message || 'Failed to send message.')
  }

  return data
}

// --------------------
// Get projects
// --------------------
export const getProjects = async () => {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase error:', error)
    throw new Error('Failed to load projects.')
  }

  return data
}

// --------------------
// Test connection
// --------------------
export const testConnection = async () => {
  if (!supabase) {
    return { success: false, error: 'Supabase not configured' }
  }

  try {
    const { error } = await supabase
      .from('contact_messages')
      .select('id')
      .limit(1)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Connection test failed:', error)
    return { success: false, error }
  }
}
