import { StatusCodes } from 'http-status-codes';
import { testServer } from '../../jest.setup';

describe('Redes - Atualizando rede', () => {
  it('Atualizando registro', async () => {
    const resUpdate = await testServer
      .put('/api/v1/redes/1')
      .send({
        nome_rede: 'Hering',
      });

    expect(resUpdate.statusCode).toEqual(StatusCodes.OK);
    expect(typeof resUpdate.body).toEqual('number');
  });

  it('Tentando atualizar registro com nome_rede muito curto', async () => {
    const resCreate = await testServer
      .put('/api/v1/redes/1')
      .send({
        nome_rede: 'H',
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
    expect(resCreate.body).toHaveProperty(
      'errors.body.nome_rede',
    );
  });

  it('Tentando atualizar registro com param id vazio', async () => {
    const resCreate = await testServer
      .put('/api/v1/redes/')
      .send({
        nome_rede: 'Hering',
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.NOT_FOUND,
    );
  });

  it('Tentando atualizar registro com param id como string', async () => {
    const resCreate = await testServer
      .put('/api/v1/redes/id')
      .send({
        nome_rede: 'Hering',
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
  });
});
