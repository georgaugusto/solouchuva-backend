import IWeatherStationRepository from '@modules/weatherstation/repositories/IWeatherStationRepository';
import { injectable, inject } from 'tsyringe';
import MaxWeatherStation from '@modules/weatherstation/infra/firebase/entities/MaxWeatherStation';

interface IRequest {
  date: string;
}

@injectable()
class ListMaxWeatherStationRecordService {
  constructor(
    @inject('WeatherStationRepository')
    private weatherStationRepository: IWeatherStationRepository,
  ) {}

  public async execute({
    date,
  }: IRequest): Promise<MaxWeatherStation | undefined> {
    const weatherstation = await this.weatherStationRepository.findMaxWeatherStationRecord(
      date,
    );

    return weatherstation;
  }
}

export default ListMaxWeatherStationRecordService;
