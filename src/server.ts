import app from './app';
import mongoose from 'mongoose';
import config from './config';
import { seed } from './utils/seed';

async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(config.databaseURL as string);
    console.log('🟢 MongoDB Database connected successfully');
    await seed()
  } catch (error) {
    console.error('🔴 Database connection failed:', error);
    throw error;
  }
}

async function startServer(): Promise<void> {
  return new Promise((resolve, reject) => {
    app.listen(config.port, (error?: Error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`🚀 Application is running on port ${config.port}`);
        resolve();
      }
    });
  });
}

async function main(): Promise<void> {
  try {
    await connectDatabase();
    await startServer();
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

main().catch((err) => console.error('Unexpected error in main():', err));
