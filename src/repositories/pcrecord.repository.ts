import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemsdbDataSource} from '../datasources';
import {Pcrecord, PcrecordRelations} from '../models';

export class PcrecordRepository extends DefaultCrudRepository<
  Pcrecord,
  typeof Pcrecord.prototype.id,
  PcrecordRelations
> {
  constructor(
    @inject('datasources.memsdb') dataSource: MemsdbDataSource,
  ) {
    super(Pcrecord, dataSource);
  }
}
