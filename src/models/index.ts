import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/lumos-sleep-feedback');

export * from './TripProgramFeedback';
