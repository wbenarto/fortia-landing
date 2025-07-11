import { PrismaClient } from './prisma/index.js';

// Create a global variable to store the Prisma client instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create the Prisma client
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// In development, store the client on the global object to prevent multiple instances
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
