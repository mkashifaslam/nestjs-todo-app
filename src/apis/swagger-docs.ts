import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableSwaggerDocs = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Todos App')
    .setDescription('The todos app APIs')
    .setVersion('1.0')
    .addTag('todos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
