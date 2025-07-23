# Supabase Setup for Contact Form

## Quick Setup Steps

### 1. Database Setup

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/silnkythlmluxjjzxgvm
2. Navigate to the SQL Editor
3. Run the SQL script from `supabase-setup.sql`

### 2. Environment Variables

Your `.env` file should contain:

```env
VITE_SUPABASE_URL="https://silnkythlmluxjjzxgvm.supabase.co"
VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbG5reXRobG1sdXhqanp4Z3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjIxNDMsImV4cCI6MjA2ODA5ODE0M30.Ik-H7d-tvErGQSNvq449_UKZvmw8W9rbINRKLZj0EVI"
```

**Note:** The URL should point to your Supabase project URL, not the dashboard URL.

### 3. Table Structure

The contact form will create records in the `contact_submissions` table with:

- `id` (UUID, Primary Key)
- `name` (Text, Required)
- `email` (Text, Required)
- `phone` (Text, Optional)
- `contact_method` (Text, Default: 'email')
- `message` (Text, Optional)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### 4. Security

- Row Level Security (RLS) is enabled
- Public users can INSERT new submissions
- Only authenticated users can view submissions

### 5. Testing

Run the development server and test the contact form:

```bash
npm run dev
```

### 6. Troubleshooting

- If you get "relation does not exist" error, run the SQL setup script
- If you get "permission denied" error, check RLS policies
- Check browser console for detailed error messages

## Common Issues

1. **Table doesn't exist**: Run the SQL script in Supabase SQL Editor
2. **Permission denied**: Check if RLS policies are set up correctly
3. **Network error**: Verify your Supabase URL and API key
4. **CORS issues**: Make sure your domain is added to Supabase allowed origins

## Database Schema

```sql
-- View your table structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'contact_submissions';

-- View recent submissions
SELECT * FROM contact_submissions
ORDER BY created_at DESC
LIMIT 10;
```
