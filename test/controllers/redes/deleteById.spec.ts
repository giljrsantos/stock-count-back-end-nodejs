import { StatusCodes } from 'http-status-codes';
import { testServer } from '../../jest.setup';

describe('Redes - Deletar Registro', () => {
  it('Deletar registro', async () => {
    const resDelete = await testServer.delete(
      '/api/v1/redes/1',
    );

    expect(resDelete.statusCode).toEqual(StatusCodes.OK);
  });

  it('Tentando deletar registro com o param id vazio', async () => {
    const resDelete = await testServer.delete(
      '/api/v1/redes/',
    );

    expect(resDelete.statusCode).toEqual(
      StatusCodes.NOT_FOUND,
    );
  });

  it('Tentando deletar registro com o param id como string', async () => {
    const resDelete = await testServer.delete(
      '/api/v1/redes/id',
    );

    expect(resDelete.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
  });
});
