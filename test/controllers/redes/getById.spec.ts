import { StatusCodes } from 'http-status-codes';
import { testServer } from '../../jest.setup';

describe('Redes - getById', () => {
  it('buscar registro por id', async () => {
    const resCreated = await testServer
      .post('/api/v1/redes')
      .send({
        id_master: 1,
        id_coord_grupo: 1,
        nome_rede: 'Hering',
        contrato_Qtde: 1,
        contrato_valor: 1,
        contrato_valor_adicional: 1,
        status_rede: 1,
      });

    expect(resCreated.statusCode).toEqual(
      StatusCodes.CREATED,
    );

    const resSearchRegister = await testServer.get(
      `/api/v1/redes/${resCreated.body}`,
    );

    expect(resSearchRegister.statusCode).toEqual(
      StatusCodes.OK,
    );
    expect(resSearchRegister.body).toHaveProperty(
      'nome_rede',
    );
  });

  it('Tentando buscar registro que não existe', async () => {
    const resGetById = await testServer
      .get('/api/v1/redes/99999')
      .send();

    expect(resGetById.statusCode).toEqual(
      StatusCodes.INTERNAL_SERVER_ERROR,
    );

    expect(resGetById.body).toHaveProperty(
      'errors.default',
    );
  });
});
