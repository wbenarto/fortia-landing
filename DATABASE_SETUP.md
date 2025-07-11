# Neon Database Setup Guide

This project is configured to work with Neon PostgreSQL database. Follow these steps to set up your database connection.

## Prerequisites

1. A Neon database account (sign up at https://neon.tech)
2. A database project created in Neon

## Setup Steps

### 1. Get Your Database Connection String

1. Log into your Neon console
2. Navigate to your project
3. Click on "Connection Details" in the sidebar
4. Copy the connection string that looks like:
   ```
   postgresql://username:password@hostname/database?sslmode=require
   ```

### 2. Configure Environment Variables

Create a `.env` file in the root of your project with the following variables:

```env
# Neon Database Configuration
DATABASE_URL="postgresql://your-username:your-password@your-hostname/your-database?sslmode=require"
```

**Important:** Replace the placeholder values with your actual Neon database credentials.

### 3. Run Database Migrations

After setting up your environment variables, run the following commands:

```bash
# Generate Prisma client
npx prisma generate

# Create and apply database migrations
npx prisma migrate dev --name init

# (Optional) View your database in Prisma Studio
npx prisma studio
```

### 4. Test the Connection

Start your development server:

```bash
npm run dev
```

Then visit `http://localhost:3000/api/test-db` to test your database connection.

## Database Schema

The current schema includes:

### User Model

- `id`: Unique identifier (CUID)
- `email`: Email address (unique)
- `name`: Optional name
- `createdAt`: Timestamp when created
- `updatedAt`: Timestamp when last updated

### BetaUser Model

- `id`: Unique identifier (CUID)
- `email`: Email address (unique)
- `createdAt`: Timestamp when created
- `updatedAt`: Timestamp when last updated

## API Endpoints

### Beta User Signup

- **POST** `/api/beta-signup`
- **Body**: `{ "email": "user@example.com" }`
- **Response**: Success/error message with user details

### Get Beta Users

- **GET** `/api/beta-signup`
- **Response**: List of all beta users (consider adding authentication)

### Test Database Connection

- **GET** `/api/test-db`
- **Response**: Database connection status and table counts

## Using the Database in Your Code

Import the Prisma client in your components or API routes:

```typescript
import { prisma } from '@/lib/db';

// Example: Create a beta user
const betaUser = await prisma.betaUser.create({
  data: {
    email: 'user@example.com',
  },
});

// Example: Get all beta users
const betaUsers = await prisma.betaUser.findMany({
  orderBy: {
    createdAt: 'desc',
  },
});

// Example: Check if email exists
const existingUser = await prisma.betaUser.findUnique({
  where: { email: 'user@example.com' },
});
```

## Troubleshooting

- **Connection errors**: Make sure your `.env` file is in the root directory and contains the correct database URL
- **Migration errors**: Ensure your database is accessible and the connection string is correct
- **Prisma client errors**: Run `npx prisma generate` after making schema changes

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Use environment variables in production deployments
- Consider adding authentication to the GET `/api/beta-signup` endpoint in production
