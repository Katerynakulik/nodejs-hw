import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required(),
    content: Joi.string().min(0),
    tag: Joi.string().valid(
      'Work',
      'Personal',
      'Meeting',
      'Shopping',
      'Ideas',
      'Travel',
      'Finance',
      'Health',
      'Important',
      'Todo',
    ),
  }),
};
const objectIdValidator = (value, helpers) => {
  if (!isValidObjectId(value)) {
    return helpers.message(`ObjectId ${value} has invalid format`);
  }
  return value;
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.custom(objectIdValidator).required(),
  }),
};

export const updateNoteSchema = {
  ...noteIdSchema, //распаковка
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1),
    content: Joi.string().min(0),
    tag: Joi.string().valid(
      'Work',
      'Personal',
      'Meeting',
      'Shopping',
      'Ideas',
      'Travel',
      'Finance',
      'Health',
      'Important',
      'Todo',
    ),
  }).min(1),
};
