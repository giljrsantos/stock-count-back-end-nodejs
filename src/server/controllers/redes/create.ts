import { Request, Response } from 'express';
import { IRedes } from '../../../interface/i-Redes';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

const bodyValidation: yup.SchemaOf<IRedes> = yup
  .object()
  .shape({
    id_master: yup.number().required(),
    id_coord_grupo: yup.number().required(),
    nome_rede: yup.string().required().min(3),
    contrato_Qtde: yup.number().required(),
    contrato_valor: yup.number().required(),
    contrato_valor_adicional: yup.number().required(),
    status_rede: yup.number().required(),
  });

export const create = async (
  req: Request<{}, {}, IRedes>,
  res: Response,
) => {
  let validateData: IRedes | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
  } catch (err) {
    const yupError = err as yup.ValidationError;

    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors,
    });
  }

  console.log(validateData);

  return res.send(validateData);
};
