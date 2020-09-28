import { Request, Response } from 'express';
// import AppError from '@shared/errors/AppError';

import { container } from 'tsyringe';

import ListLatestWeatherStationRecordService from '@modules/weatherstation/services/ListLatestWeatherStationRecordService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLatestWeatherStationRecordService = container.resolve(
      ListLatestWeatherStationRecordService,
    );

    const wetherStation = await listLatestWeatherStationRecordService.execute();

    return response.json(wetherStation);
  }
}
