import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LogInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const dt = Date.now();

    return next.handle().pipe(
      tap(() => {
        // const request = context.switchToHttp().getRequest();
        // const response = context.switchToHttp().getResponse();
        const [request, response] = context.getArgs();
        console.log(
          `URL: ${request.url}`,
          `\nMethod: ${request.method}`,
          `\nStatus: ${response.statusCode}`,
          `\nExecução levou: ${Date.now() - dt} milisegundos`,
        );
      }),
    );
  }
}
