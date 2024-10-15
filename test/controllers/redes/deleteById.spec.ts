import { StatusCodes } from 'http-status-codes';
import { testServer } from '../../jest.setup';

describe('Redes - Deletar Registro', () => {
  it('Deletar registro', async () => {
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

    const resApagada = await testServer.delete(
      `/api/v1/redes/${resCreated.body}`,
    );

    expect(resApagada.statusCode).toEqual(
      StatusCodes.NO_CONTENT,
    );
  });

  it('Tenta deletar registro que não existe', async () => {
    const resDelete = await testServer
      .delete('/api/v1/redes/99999')
      .send();

    expect(resDelete.statusCode).toEqual(
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
    expect(resDelete.body).toHaveProperty('errors.default');
  });
});
