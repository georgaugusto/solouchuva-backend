import database from '@shared/infra/firebase/index';

import IWeatherStationRepository from '@modules/weatherstation/repositories/IWeatherStationRepository';
import WeatherStation from '@modules/weatherstation/infra/firebase/entities/WeatherStation';
import MaxWeatherStation from '@modules/weatherstation/infra/firebase/entities/MaxWeatherStation';
import MinWeatherStation from '@modules/weatherstation/infra/firebase/entities/MinWeatherStation';
import AvgWeatherStation from '@modules/weatherstation/infra/firebase/entities/AvgWeatherStation';

class WetherStationRepository implements IWeatherStationRepository {
  public async findLatestWeatherStationRecord(): Promise<
    WeatherStation | undefined
  > {
    let latestWeatherStationRecord: WeatherStation | undefined;
    let latestDateWeatherStationRecord;

    const RefDate = database.ref('Prototipo0/');
    const snapshotDate = await RefDate.limitToLast(1).once('value');
    snapshotDate.forEach(child => {
      latestDateWeatherStationRecord = child.key;
    });

    const Ref = database.ref(
      `Prototipo0/${latestDateWeatherStationRecord}/Readings/`,
    );
    const snapshot = await Ref.limitToLast(1).once('value');

    snapshot.forEach(child => {
      latestWeatherStationRecord = child.val();
    });

    return latestWeatherStationRecord;
  }

  public async findAverageWeatherStationRecord(
    date: string,
  ): Promise<AvgWeatherStation | undefined> {
    const Ref = database.ref(`Prototipo0/${date}/Avg`);
    const snapshot = await Ref.once('value');

    const AverageWeatherStationRecord = snapshot.val();

    return AverageWeatherStationRecord;
  }

  public async findMaxWeatherStationRecord(
    date: string,
  ): Promise<MaxWeatherStation | undefined> {
    const Ref = database.ref(`Prototipo0/${date}/Max/`);
    const snapshot = await Ref.once('value');

    const maxWeatherStationRecord = snapshot.val();

    return maxWeatherStationRecord;
  }

  public async findMinWeatherStationRecord(
    date: string,
  ): Promise<MinWeatherStation | undefined> {
    const Ref = database.ref(`Prototipo0/${date}/Min`);
    const snapshot = await Ref.once('value');

    const minWeatherStationRecord = snapshot.val();

    return minWeatherStationRecord;
  }
}

export default WetherStationRepository;
