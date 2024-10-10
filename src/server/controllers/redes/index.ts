import * as updateById from './updateById';
import * as getById from './getById';
import * as create from './create';
import * as getAll from './getAll';
import * as deleteById from './deleteById';

export const RedesController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
};
