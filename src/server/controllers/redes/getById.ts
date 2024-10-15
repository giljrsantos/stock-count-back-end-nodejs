import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { IParamProps } from '../../../interface/i-ParamProps';
import { validation } from '../../shared/middlewares';

import * as yup from 'yup';

export const getByIdValidation = validation(
  (getSchema) => ({
    params: getSchema<IParamProps>(
      yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
      }),
    ),
  }),
);

export const getById = async (
  req: Request<IParamProps>,
  res: Response,
) => {
  if (Number(req.params.id) === 99999)
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        errors: {
          default: 'Registro não encontrado',
        },
      });

  return res.status(StatusCodes.OK).json({
    id: req.params.id,
    id_master: 1,
    id_coord_grupo: 1,
    nome_rede: 'Hering',
    contrato_Qtde: 1,
    contrato_valor: 1,
    contrato_valor_adicional: 1,
    status_rede: 1,
  });
};
