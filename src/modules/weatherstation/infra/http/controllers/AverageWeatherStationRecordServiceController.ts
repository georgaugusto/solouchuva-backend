import { Request, Response } from 'express';
// import AppError from '@shared/errors/AppError';

import { container } from 'tsyringe';

import ListAverageWeatherStationRecordService from '@modules/weatherstation/services/ListAverageWeatherStationRecordService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { date } = request.query;

    const listAverageWeatherStationRecordService = container.resolve(
      ListAverageWeatherStationRecordService,
    );

    const wetherStation = await listAverageWeatherStationRecordService.execute({
      date: String(date),
    });

    return response.json(wetherStation);
  }
}
