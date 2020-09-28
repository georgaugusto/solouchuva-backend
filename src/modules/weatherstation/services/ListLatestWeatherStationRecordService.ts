import IWeatherStationRepository from '@modules/weatherstation/repositories/IWeatherStationRepository';
import { injectable, inject } from 'tsyringe';
import WeatherStation from '@modules/weatherstation/infra/firebase/entities/WeatherStation';

@injectable()
class ListLatestWeatherStationRecordService {
  constructor(
    @inject('WeatherStationRepository')
    private weatherStationRepository: IWeatherStationRepository,
  ) {}

  public async execute(): Promise<WeatherStation | undefined> {
    const weatherstation = await this.weatherStationRepository.findLatestWeatherStationRecord();

    return weatherstation;
  }
}

export default ListLatestWeatherStationRecordService;
