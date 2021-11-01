import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { routes } from './routes';
import { RouterModule } from 'nest-router';
import { ProjectModule } from './modules/project/project.module';
import { UserModule } from './modules/user/user.module';
import { ProfileModule } from './modules/profile/profile.module';
import { LoggerModule } from './modules/logger/logger.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    TaskModule,
    ProjectModule,
    UserModule,
    ProfileModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
