import { Request, Response } from 'express';
// import AppError from '@shared/errors/AppError';

import { container } from 'tsyringe';

import ListMinWeatherStationRecordService from '@modules/weatherstation/services/ListMinWeatherStationRecordService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { date } = request.query;

    const listMinWeatherStationRecordService = container.resolve(
      ListMinWeatherStationRecordService,
    );

    const wetherStation = await listMinWeatherStationRecordService.execute({
      date: String(date),
    });

    return response.json(wetherStation);
  }
}
