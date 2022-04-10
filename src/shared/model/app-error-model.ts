/**
 * The application-specific errors.
 */
export enum AppError {
  /** Internal server error. */
  InternalServerError = 'Internal server error',

  /** The field is required error. */
  IsRequired = 'The field is required',

  /** The entity field value already exists in another entity. */
  ValueExists = 'The entity field value already exists in another entity',

  /** The value is not correct or doesn't meets the expected value criteria. */
  IncorrectValue = `The value is not correct or doesn't meets the expected value criteria`,
}
