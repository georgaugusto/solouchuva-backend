import IWeatherStationRepository from '@modules/weatherstation/repositories/IWeatherStationRepository';
import { injectable, inject } from 'tsyringe';
import MinWeatherStation from '@modules/weatherstation/infra/firebase/entities/MinWeatherStation';

interface IRequest {
  date: string;
}

@injectable()
class ListMinWeatherStationRecordService {
  constructor(
    @inject('WeatherStationRepository')
    private weatherStationRepository: IWeatherStationRepository,
  ) {}

  public async execute({
    date,
  }: IRequest): Promise<MinWeatherStation | undefined> {
    const weatherstation = await this.weatherStationRepository.findMinWeatherStationRecord(
      date,
    );

    return weatherstation;
  }
}

export default ListMinWeatherStationRecordService;
