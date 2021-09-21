import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'memsdb',
  connector: 'mysql',
  url: 'mysql://root:333163@localhost:3306/memsdb',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '333163',
  database: 'memsdb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MemsdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'memsdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.memsdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
