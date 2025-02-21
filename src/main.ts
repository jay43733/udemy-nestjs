import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // whitelist = true เป็นการรับข้อมูลแค่ที่อยู่ใน DTO เท่านั้น ถ้าอันไหนไม่เกี่ยวก็จะไม่ถูกรวมด้วย

      forbidNonWhitelisted: true,
      // ถ้าเปรียบเทียบข้อมูล input กับ DTO แล้วมีข้อมูลที่ไม่เกี่ยวจะ throw error ออกไปแทน

      transform: true,
      // จะ convert Input data ส่งมาใช้ตรงกับ data type ที่กำหนดใน DTO และปรับ JSON payloads ให้เป็น class instance ของ DTO นั้นๆ
    }),
  ); //เรียกใช้ Pipes ต่างๆ ได้แบบ Global หรือไม่ต้องใส่แยกเส้น API เอง

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('My First NestJS')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setVersion('1.0')
    .addServer('http://localhost:3000')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
