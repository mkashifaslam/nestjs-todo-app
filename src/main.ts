import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableSwaggerDocs } from './apis/swagger-docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable the swagger docs for all apis
  enableSwaggerDocs(app);
  await app.listen(3000);
}
bootstrap();
