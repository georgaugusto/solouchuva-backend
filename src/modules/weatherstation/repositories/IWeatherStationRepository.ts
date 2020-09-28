import WeatherStation from '@modules/weatherstation/infra/firebase/entities/WeatherStation';
import MaxWeatherStation from '@modules/weatherstation/infra/firebase/entities/MaxWeatherStation';
import MinWeatherStation from '@modules/weatherstation/infra/firebase/entities/MinWeatherStation';
import AvgWeatherStation from '@modules/weatherstation/infra/firebase/entities/AvgWeatherStation';

export default interface IWeatherStationRepository {
  findLatestWeatherStationRecord(): Promise<WeatherStation | undefined>;
  findAverageWeatherStationRecord(
    date: string,
  ): Promise<AvgWeatherStation | undefined>;
  findMaxWeatherStationRecord(
    date: string,
  ): Promise<MaxWeatherStation | undefined>;
  findMinWeatherStationRecord(
    date: string,
  ): Promise<MinWeatherStation | undefined>;
}
