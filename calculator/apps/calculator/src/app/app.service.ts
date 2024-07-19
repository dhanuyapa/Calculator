import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  addition(number1: number, number2: number) {
    return { result: number1 + number2 };
}

subtraction(number1: number, number2: number) {
  return { result: number1 - number2 };
}
multiplication(number1: number, number2: number) {
  return { result: number1 * number2 };
}

division(number1: number, number2: number) {
  return { result: number1 / number2 };
}

}