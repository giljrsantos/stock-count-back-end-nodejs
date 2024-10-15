import { StatusCodes } from 'http-status-codes';
import { testServer } from '../../jest.setup';

describe('Redes - Atualizando rede', () => {
  it('Atualizando registro', async () => {
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

    const resUpdateRegister = await testServer
      .put(`/api/v1/redes/${resCreated.body}`)
      .send({
        id_master: 1,
        id_coord_grupo: 1,
        nome_rede: 'MissBella',
        contrato_Qtde: 1,
        contrato_valor: 1,
        contrato_valor_adicional: 1,
        status_rede: 1,
      });

    expect(resUpdateRegister.statusCode).toEqual(
      StatusCodes.NO_CONTENT,
    );
  });

  it('Tentando atualizar registro que não existe', async () => {
    const resUpdateById = await testServer
      .put('/api/v1/redes/99999')
      .send({
        id_master: 1,
        id_coord_grupo: 1,
        nome_rede: 'Hering',
        contrato_Qtde: 1,
        contrato_valor: 1,
        contrato_valor_adicional: 1,
        status_rede: 1,
      });

    expect(resUpdateById.statusCode).toEqual(
      StatusCodes.INTERNAL_SERVER_ERROR,
    );

    expect(resUpdateById.body).toHaveProperty(
      'errors.default',
    );
  });
});
