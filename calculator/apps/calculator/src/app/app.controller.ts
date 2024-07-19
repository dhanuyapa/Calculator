import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/hello')
  postHelloMessage() {
    // Static message return
    return { message: "Hello API" };
  }

  @Post('/addition')
  postData(@Body() body: { number1: number, number2: number }) {
    // Dynamically calculate sum based on input
    return this.appService.addition(body.number1, body.number2);
  }

  @Post('/subtraction')
  postData2(@Body() body: { number1: number, number2: number }) {
    // Dynamically calculate sum based on input
    return this.appService.subtraction(body.number1, body.number2);
  }


  @Post('/multiplication')
  postData3(@Body() body: { number1: number, number2: number }) {
    // Dynamically calculate sum based on input
    return this.appService.multiplication(body.number1, body.number2);
  }

  @Post('/division')
  postData4(@Body() body: { number1: number, number2: number }) {
    // Dynamically calculate sum based on input
    return this.appService.division(body.number1, body.number2);
  }
  @Post('/division')
  postData5(@Body() body: { number1: number, number2: number }) {
    // Dynamically calculate sum based on input
    return this.appService.division(body.number1, body.number2);
  }

}
