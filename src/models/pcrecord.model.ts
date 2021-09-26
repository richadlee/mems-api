import {Entity, model, property} from '@loopback/repository';

@model()
export class Pcrecord extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  distinction: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'string',
    required: true,
  })
  occurAt: string;

  @property({
    type: 'string',
  })
  fixBefore?: string;

  @property({
    type: 'number',
  })
  priority?: number;

  @property({
    type: 'string',
  })
  progress?: string;

  @property({
    type: 'string',
  })
  handler?: string;

  @property({
    type: 'string',
  })
  check?: string;


  constructor(data?: Partial<Pcrecord>) {
    super(data);
  }
}

export interface PcrecordRelations {
  // describe navigational properties here
}

export type PcrecordWithRelations = Pcrecord & PcrecordRelations;
