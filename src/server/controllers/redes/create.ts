import { Request, Response } from 'express';
import * as yup from 'yup';
import { IRedes } from '../../../interface/i-Redes';
import { validation } from '../../shared/middlewares';

export const createValidation = validation((getSchema) => ({
  body: getSchema<IRedes>(
    yup.object().shape({
      id_master: yup.number().required(),
      id_coord_grupo: yup.number().required(),
      nome_rede: yup.string().required().min(3),
      contrato_Qtde: yup.number().required(),
      contrato_valor: yup.number().required(),
      contrato_valor_adicional: yup.number().required(),
      status_rede: yup.number().required(),
    }),
  ),
}));

export const create = async (
  req: Request<{}, {}, IRedes>,
  res: Response,
) => {
  console.log(req.body);

  return res.send(req.body);
};
