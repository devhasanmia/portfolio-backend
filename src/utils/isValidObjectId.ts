import mongoose from 'mongoose';
import AppError from '../errors/AppError';

export const isValidObjectId = (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(400, "Invalid blog ID");
  }
};
