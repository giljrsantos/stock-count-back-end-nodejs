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
  console.log(req.params);

  return res.status(StatusCodes.OK).json(1);
};
