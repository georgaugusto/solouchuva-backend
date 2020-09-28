import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import LatestWeatherStationRecordServiceController from '../controllers/LatestWeatherStationRecordServiceController';
import AverageWeatherStationRecordServiceController from '../controllers/AverageWeatherStationRecordServiceController';
import MaxWeatherStationRecordServiceController from '../controllers/MaxWeatherStationRecordServiceController';
import MinWeatherStationRecordServiceController from '../controllers/MinWeatherStationRecordServiceController';

const weatherstationsRouter = Router();
const latestWeatherStationRecordServiceController = new LatestWeatherStationRecordServiceController();
const averageWeatherStationRecordServiceController = new AverageWeatherStationRecordServiceController();
const maxWeatherStationRecordServiceController = new MaxWeatherStationRecordServiceController();
const minWeatherStationRecordServiceController = new MinWeatherStationRecordServiceController();

weatherstationsRouter.use(ensureAuthenticated);

weatherstationsRouter.get(
  '/',
  latestWeatherStationRecordServiceController.index,
);
weatherstationsRouter.get(
  '/avg',
  averageWeatherStationRecordServiceController.index,
);
weatherstationsRouter.get(
  '/max',
  maxWeatherStationRecordServiceController.index,
);
weatherstationsRouter.get(
  '/min',
  minWeatherStationRecordServiceController.index,
);

export default weatherstationsRouter;
