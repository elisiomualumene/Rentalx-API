import { container } from "tsyringe";
import { IDateProvider } from '../../../shared/container/providers/DateProvider/IDateProvider';
import { DayJsDateProviderImpl } from './DateProvider/implementation/DayJsDateProviderImpl';

container.registerSingleton<IDateProvider>(
    "DayJsProvider",
    DayJsDateProviderImpl   
)