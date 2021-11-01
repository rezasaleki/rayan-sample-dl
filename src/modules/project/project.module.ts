import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';

const configFactory = {
  provide: 'CONFIG',
  useFactory: () => {
    return process.env.NODE_ENV !== 'development'
      ? 'development'
      : 'production';
  },
};

@Module({
  controllers: [ProjectController],
  providers: [configFactory],
})
export class ProjectModule {}
