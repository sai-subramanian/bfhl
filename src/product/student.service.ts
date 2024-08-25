import {  Injectable } from '@nestjs/common';


@Injectable()
export class studentService {
  constructor() {}

  async processData(request: { data: string[] }): Promise<any> {
    try{
      const { data } = request;

      // Separate numbers and alphabets
      const numbers = data.filter((item) => !isNaN(Number(item)));
      const alphabets = data.filter((item) => isNaN(Number(item)));
  
      // Find the highest lowercase alphabet
      const lowercaseAlphabets = alphabets.filter((item) => /^[a-z]$/.test(item));
      const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().reverse()[0]] : [];
  
      // Constructing the response
      return {
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet,
      };
    }catch(e){
      throw Error(e);
    }
  }
}
