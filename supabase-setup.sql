-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  contact_method TEXT NOT NULL DEFAULT 'email',
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for contact form submissions)
CREATE POLICY "Allow public inserts on contact_submissions" 
ON contact_submissions FOR INSERT 
TO public 
WITH CHECK (true);

-- Create policy to allow authenticated users to view submissions (optional)
CREATE POLICY "Allow authenticated users to view contact_submissions" 
ON contact_submissions FOR SELECT 
TO authenticated 
USING (true);

-- Create an index on created_at for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);

-- Create an index on email for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
ON contact_submissions(email);
