import mongoose from "../config/dbConnection";
import { Schema } from "mongoose";

const questionSchema = new Schema<Question>({
    question: {
      type: String,
      required: [true, 'Question is a mandatory field'],
      minlength: [5, 'The question must have minimum 5 characters'],
      maxlength: [100, 'The question must have maximum 5 characters']
    },
    answer: {
      type: String,
      required: [true, 'Snswer is a mandatory field'],
      minlength: [20, 'The answer must have minimum 20 characters'],
      maxlength: [400, 'The answer must have minimum 400 characters']
    },
    order: {
      type: Number,
      required: [true, 'Order is a mandatory field'],
      min: [0, 'Order can be only a positive number or zero.']
    }
  });

const QuestionModel = mongoose.model('Question', questionSchema);

export interface Question {
  question: string;
  answer: string;
  order: number;
}

export interface QuestionDB<IdType> extends Question {
  _id: IdType;
}

export default QuestionModel;