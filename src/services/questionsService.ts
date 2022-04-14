
import QuestionModel, { Question, QuestionDB } from '../models/question';
import mongoose from 'mongoose';

export class QuestionsService {

  /**
   * Get the list of the questions
   * @returns Promise
   */
  static getQuestions(): Promise<Question[]> {
    return QuestionModel.find().exec();
  }

  /**
   * Add a new question
   * @param question 
   * @returns Promise
   */
  static addQuestion(question: Question): Promise<Question> {
    return QuestionModel.create(question);
  }

  /**
   * Delete a question with a specific id
   * @param questionId 
   * @returns Promise
   */
  static deleteQuestion(questionId: string): Promise<any> {
    const _id = new mongoose.Types.ObjectId(questionId);
 
    return QuestionModel.deleteOne({ _id }).exec();
  }

  /**
   * Edit a specific question
   * @param question 
   * @returns Promise
   */
  static editQuestion(question: QuestionDB<string>): Promise<any> {
    const filter = { _id:  new mongoose.Types.ObjectId(question._id) };

    return QuestionModel.updateOne(filter, question).exec();
  }
}
