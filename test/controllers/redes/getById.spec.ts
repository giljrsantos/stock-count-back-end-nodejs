import { StatusCodes } from 'http-status-codes';
import { testServer } from '../../jest.setup';

describe('Redes - Buscar Registro Com o param id expecifico', () => {
  it('buscar registro com o id = 1', async () => {
    const resGetById = await testServer.get(
      '/api/v1/redes/1',
    );

    expect(resGetById.statusCode).toEqual(StatusCodes.OK);
  });

  it('Tentando buscar registro com o param id como string', async () => {
    const resGetById = await testServer.get(
      '/api/v1/redes/id',
    );

    expect(resGetById.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
  });
});
