import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
// import { AuthdController } from './authd/authd.controller';

@Module({
  // imports: [AuthModule],
  
  controllers: [AppController, AuthController],
  providers: [AppService,AuthService],

})
export class AppModule {}
