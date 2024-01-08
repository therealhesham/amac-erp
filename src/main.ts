import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // app.use(cookieParser())
  app.enableCors({maxAge:5555555555,credentials:true,origin:"https://vite-project-ten-psi.vercel.app",exposedHeaders:"*",allowedHeaders:"X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Set-Cookie"})
  await app.listen(3008);
}
bootstrap();
