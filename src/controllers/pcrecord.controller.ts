import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Pcrecord} from '../models';
import {PcrecordRepository} from '../repositories';

export class PcrecordController {
  constructor(
    @repository(PcrecordRepository)
    public pcrecordRepository : PcrecordRepository,
  ) {}

  @post('/pc-records')
  @response(200, {
    description: 'Pcrecord model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pcrecord)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pcrecord, {
            title: 'NewPcrecord',
            exclude: ['id'],
          }),
        },
      },
    })
    pcrecord: Omit<Pcrecord, 'id'>,
  ): Promise<Pcrecord> {
    return this.pcrecordRepository.create(pcrecord);
  }

  @get('/pc-records/count')
  @response(200, {
    description: 'Pcrecord model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pcrecord) where?: Where<Pcrecord>,
  ): Promise<Count> {
    return this.pcrecordRepository.count(where);
  }

  @get('/pc-records')
  @response(200, {
    description: 'Array of Pcrecord model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pcrecord, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pcrecord) filter?: Filter<Pcrecord>,
  ): Promise<Pcrecord[]> {
    return this.pcrecordRepository.find(filter);
  }

  @patch('/pc-records')
  @response(200, {
    description: 'Pcrecord PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pcrecord, {partial: true}),
        },
      },
    })
    pcrecord: Pcrecord,
    @param.where(Pcrecord) where?: Where<Pcrecord>,
  ): Promise<Count> {
    return this.pcrecordRepository.updateAll(pcrecord, where);
  }

  @get('/pc-records/{id}')
  @response(200, {
    description: 'Pcrecord model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pcrecord, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pcrecord, {exclude: 'where'}) filter?: FilterExcludingWhere<Pcrecord>
  ): Promise<Pcrecord> {
    return this.pcrecordRepository.findById(id, filter);
  }

  @patch('/pc-records/{id}')
  @response(204, {
    description: 'Pcrecord PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pcrecord, {partial: true}),
        },
      },
    })
    pcrecord: Pcrecord,
  ): Promise<void> {
    await this.pcrecordRepository.updateById(id, pcrecord);
  }

  @put('/pc-records/{id}')
  @response(204, {
    description: 'Pcrecord PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pcrecord: Pcrecord,
  ): Promise<void> {
    await this.pcrecordRepository.replaceById(id, pcrecord);
  }

  @del('/pc-records/{id}')
  @response(204, {
    description: 'Pcrecord DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pcrecordRepository.deleteById(id);
  }
}
