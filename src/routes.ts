import { AppModule } from './app.module';
import { TaskModule } from './modules/task/task.module';
import { Routes } from '@nestjs/core';
import { UserModule } from './modules/user/user.module';
import { ProjectModule } from './modules/project/project.module';
import { ProfileModule } from './modules/profile/profile.module';
import {LoggerService} from "./modules/logger/logger.service";
import {LoggerModule} from "./modules/logger/logger.module";

export const routes: Routes = [
  {
    path: '/',
    module: AppModule,
  },
  {
    path: '/task',
    module: TaskModule,
  },
  {
    path: '/user',
    module: UserModule,
  },
  {
    path: '/project',
    module: ProjectModule,
  },
  {
    path: '/profile',
    module: ProfileModule,
  },
  {
    path: '/logger',
    module: LoggerModule,
  },
];
