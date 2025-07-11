-- Create beta_users table
CREATE TABLE IF NOT EXISTS beta_users (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_beta_users_email ON beta_users(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_beta_users_created_at ON beta_users(created_at);

-- Add comment to table
COMMENT ON TABLE beta_users IS 'Table to store beta user email addresses'; 