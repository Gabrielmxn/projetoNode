import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { SurveyRespository } from '../repositories/SurveyRepository';



class SurveyController {
  async create(request: Request, response: Response){
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveyRespository);

    const survey = surveysRepository.create({
      title, 
      description,
    });

    await surveysRepository.save(survey);

    return response.status(201).json(survey)
  }

  async show(request: Request, response: Response){
    const surveysReponsitory = getCustomRepository(SurveyRespository);

    const all = await surveysReponsitory.find();

    return response.json(all);
  }
}

export { SurveyController }