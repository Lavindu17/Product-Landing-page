// Test Supabase Connection
// Run this in your browser console or create a test component

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://silnkythlmluxjjzxgvm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbG5reXRobG1sdXhqanp4Z3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjIxNDMsImV4cCI6MjA2ODA5ODE0M30.Ik-H7d-tvErGQSNvq449_UKZvmw8W9rbINRKLZj0EVI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test connection
async function testConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    // Test if we can connect to Supabase
    const { data, error } = await supabase.from('contact_submissions').select('count').limit(1);
    
    if (error) {
      console.error('Connection test failed:', error);
      return false;
    }
    
    console.log('✅ Supabase connection successful!');
    return true;
  } catch (err) {
    console.error('❌ Connection test error:', err);
    return false;
  }
}

// Test form submission
async function testFormSubmission() {
  try {
    console.log('Testing form submission...');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '123-456-7890',
      contact_method: 'email',
      message: 'This is a test message',
      created_at: new Date().toISOString()
    };
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([testData]);
    
    if (error) {
      console.error('Form submission test failed:', error);
      return false;
    }
    
    console.log('✅ Form submission test successful!', data);
    return true;
  } catch (err) {
    console.error('❌ Form submission test error:', err);
    return false;
  }
}

// Run tests
export async function runTests() {
  console.log('🧪 Starting Supabase tests...');
  
  const connectionTest = await testConnection();
  if (connectionTest) {
    await testFormSubmission();
  }
  
  console.log('🏁 Tests completed');
}

// Uncomment to run tests
// runTests();
