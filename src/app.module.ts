import { Module, forwardRef } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
})
export class AppModule {}
