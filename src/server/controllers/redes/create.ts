import { Request, Response } from 'express';
import * as yup from 'yup';
import { IRedes } from '../../../interface/i-Redes';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

export const createValidation = validation((getSchema) => ({
  body: getSchema<IRedes>(
    yup.object().shape({
      id_master: yup.number().required().moreThan(0),
      id_coord_grupo: yup.number().required().moreThan(0),
      nome_rede: yup.string().required().min(3),
      contrato_Qtde: yup.number().required().moreThan(0),
      contrato_valor: yup.number().required().moreThan(0),
      contrato_valor_adicional: yup
        .number()
        .required()
        .moreThan(0),
      status_rede: yup.number().required().moreThan(0),
    }),
  ),
}));

export const create = async (
  req: Request<{}, {}, IRedes>,
  res: Response,
) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};
