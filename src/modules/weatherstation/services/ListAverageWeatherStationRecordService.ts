import IWeatherStationRepository from '@modules/weatherstation/repositories/IWeatherStationRepository';
import { injectable, inject } from 'tsyringe';
import WeatherStation from '@modules/weatherstation/infra/firebase/entities/WeatherStation';

interface IRequest {
  date: string;
}

@injectable()
class ListAverageWeatherStationRecordService {
  constructor(
    @inject('WeatherStationRepository')
    private weatherStationRepository: IWeatherStationRepository,
  ) {}

  public async execute({
    date,
  }: IRequest): Promise<WeatherStation | undefined> {
    const weatherstation = await this.weatherStationRepository.findAverageWeatherStationRecord(
      date,
    );

    return weatherstation;
  }
}

export default ListAverageWeatherStationRecordService;
