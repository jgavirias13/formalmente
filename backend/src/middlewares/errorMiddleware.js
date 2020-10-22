export class ErrorMiddleware{
  constructor(){}

  handleError(err, req, res, next){
    const httpStatus = err.status || 500;

    return res.status(httpStatus).send({
      status: httpStatus,
      message: err.message || 'Ha ocurrido un error en el servidor'
    });
  }
}