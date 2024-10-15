import { StatusCodes } from 'http-status-codes';
import { testServer } from '../../jest.setup';

describe('Redes - GetAll', () => {
  it('Buscar todos os registros', async () => {
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

    const resBuscada = await testServer
      .get('/api/v1/redes')
      .send();

    expect(
      Number(resBuscada.header['x-total-count']),
    ).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});
