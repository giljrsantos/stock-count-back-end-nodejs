import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { IBodyProps } from '../../../interface/i-BodyProps';
import { IParamProps } from '../../../interface/i-ParamProps';

export const updateByIdValidation = validation(
  (getSchema) => ({
    body: getSchema<IBodyProps>(
      yup.object().shape({
        nome_rede: yup.string().required().min(3),
      }),
    ),
    params: getSchema<IParamProps>(
      yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
      }),
    ),
  }),
);

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response,
) => {
  console.log(req.params);
  console.log(req.body);

  return res.status(StatusCodes.OK).json(1);
};
