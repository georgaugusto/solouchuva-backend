import { Request, Response } from 'express';
// import AppError from '@shared/errors/AppError';

import { container } from 'tsyringe';

import ListMaxWeatherStationRecordService from '@modules/weatherstation/services/ListMaxWeatherStationRecordService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { date } = request.query;

    const listMaxWeatherStationRecordService = container.resolve(
      ListMaxWeatherStationRecordService,
    );

    const wetherStation = await listMaxWeatherStationRecordService.execute({
      date: String(date),
    });

    return response.json(wetherStation);
  }
}
