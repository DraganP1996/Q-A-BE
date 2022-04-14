import { Question, QuestionDB } from '../models/question';
import {QuestionsService} from '../services/questionsService';

const QuestionsController = {

  /**
   * Get the list of the questions
   * @returns 
   */
  list: () => {
    return QuestionsService.getQuestions();
  },

  /**
   * Add a new question
   * @param question 
   * @returns 
   */
  add: (question: Question) => {
    return QuestionsService.addQuestion(question);
  },

  /**
   * Removove a specifc question
   * @param questionId 
   * @returns 
   */
  remove: (questionId: string) => {
    return QuestionsService.deleteQuestion(questionId);
  },

  /**
   * Edit a specific question
   * @param question 
   * @returns 
   */
  edit: async(question: QuestionDB<string>) => {
    return QuestionsService.editQuestion(question);
  }
};

export default QuestionsController;
