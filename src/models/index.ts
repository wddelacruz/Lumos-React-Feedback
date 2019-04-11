import * as mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lumos-sleep-feedback');

export * from './TripProgramFeedback';
export * from './UserFeedback';
