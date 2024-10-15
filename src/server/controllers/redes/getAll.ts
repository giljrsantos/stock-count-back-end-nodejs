import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { IQueryProps } from '../../../interface/i-QueryProps';
import { validation } from '../../shared/middlewares';

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional(),
    }),
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response,
) => {
  res.setHeader(
    'access-control-expose-headers',
    'x-total-count',
  );
  res.setHeader('x-total-count', 1);

  return res.status(StatusCodes.OK).json([
    {
      id: 1,
      id_master: 1,
      id_coord_grupo: 1,
      nome_rede: 'Hering',
      contrato_Qtde: 1,
      contrato_valor: 1,
      contrato_valor_adicional: 1,
      status_rede: 1,
    },
  ]);
};
