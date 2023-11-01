import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import Config from './config/keys';
import * as nano from 'nano';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [
    AppService,
    {
      provide: Config.database,
      useFactory: () => {
        const couch = nano({
          url: Config.url,
          requestDefaults: {
            auth: {
              username: Config.username,
              password: Config.password,
            },
          },
        });
        couch.db
          .create('product')
          .then((data) => {
            return data;
          })
          .catch((err) => {
            return err;
          });
        return couch.use('product');
      },
    },
  ],
})
export class AppModule {}
