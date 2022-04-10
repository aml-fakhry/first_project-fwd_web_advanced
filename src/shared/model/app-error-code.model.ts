/*
 * The application-specific error codes.
 */
export enum AppErrorCode {
  /* The field is required code. */
  IsRequired = 1,

  /* The entity field value already exists in another entity. */
  ValueExists = 2,

  /* The value is not correct or doesn't meets the expected value criteria. */
  IncorrectValue = 3,

  /* Internal server code. */
  InternalServerError = 4,
}
