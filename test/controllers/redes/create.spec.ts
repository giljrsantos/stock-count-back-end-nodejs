import { StatusCodes } from 'http-status-codes';
import { testServer } from './../../jest.setup';
describe('Redes - Create', () => {
  it('Cria registro', async () => {
    const resCreate = await testServer
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

    expect(resCreate.statusCode).toEqual(
      StatusCodes.CREATED,
    );
    expect(typeof resCreate.body).toEqual('number');
  });

  it('Tentando criar registro com nome_rede muito curto', async () => {
    const resCreate = await testServer
      .post('/api/v1/redes')
      .send({
        id_master: 1,
        id_coord_grupo: 1,
        nome_rede: 'H',
        contrato_Qtde: 1,
        contrato_valor: 1,
        contrato_valor_adicional: 1,
        status_rede: 1,
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
    expect(resCreate.body).toHaveProperty(
      'errors.body.nome_rede',
    );
  });

  it('Tentando criar registro com id_master valor [0]', async () => {
    const resCreate = await testServer
      .post('/api/v1/redes')
      .send({
        id_master: 0,
        id_coord_grupo: 1,
        nome_rede: 'Hering Vix',
        contrato_Qtde: 1,
        contrato_valor: 1,
        contrato_valor_adicional: 1,
        status_rede: 1,
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
    expect(resCreate.body).toHaveProperty(
      'errors.body.id_master',
    );
  });

  it('Tentando criar registro com id_coord_grupo valor [0]', async () => {
    const resCreate = await testServer
      .post('/api/v1/redes')
      .send({
        id_master: 1,
        id_coord_grupo: 0,
        nome_rede: 'Hering Vix',
        contrato_Qtde: 1,
        contrato_valor: 1,
        contrato_valor_adicional: 1,
        status_rede: 1,
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
    expect(resCreate.body).toHaveProperty(
      'errors.body.id_coord_grupo',
    );
  });

  it('Tentando criar registro com contrato_Qtde valor [0]', async () => {
    const resCreate = await testServer
      .post('/api/v1/redes')
      .send({
        id_master: 1,
        id_coord_grupo: 1,
        nome_rede: 'Hering Vix',
        contrato_Qtde: 0,
        contrato_valor: 1,
        contrato_valor_adicional: 1,
        status_rede: 1,
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
    expect(resCreate.body).toHaveProperty(
      'errors.body.contrato_Qtde',
    );
  });

  it('Tentando criar registro com contrato_valor valor [0]', async () => {
    const resCreate = await testServer
      .post('/api/v1/redes')
      .send({
        id_master: 1,
        id_coord_grupo: 1,
        nome_rede: 'Hering Vix',
        contrato_Qtde: 1,
        contrato_valor: 0,
        contrato_valor_adicional: 1,
        status_rede: 1,
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
    expect(resCreate.body).toHaveProperty(
      'errors.body.contrato_valor',
    );
  });

  it('Tentando criar registro com contrato_valor_adicional valor [0]', async () => {
    const resCreate = await testServer
      .post('/api/v1/redes')
      .send({
        id_master: 1,
        id_coord_grupo: 1,
        nome_rede: 'Hering Vix',
        contrato_Qtde: 1,
        contrato_valor: 1,
        contrato_valor_adicional: 0,
        status_rede: 1,
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
    expect(resCreate.body).toHaveProperty(
      'errors.body.contrato_valor_adicional',
    );
  });

  it('Tentando criar registro com status_rede valor [0]', async () => {
    const resCreate = await testServer
      .post('/api/v1/redes')
      .send({
        id_master: 1,
        id_coord_grupo: 1,
        nome_rede: 'Hering Vix',
        contrato_Qtde: 1,
        contrato_valor: 1,
        contrato_valor_adicional: 1,
        status_rede: 0,
      });

    expect(resCreate.statusCode).toEqual(
      StatusCodes.BAD_REQUEST,
    );
    expect(resCreate.body).toHaveProperty(
      'errors.body.status_rede',
    );
  });
});
