import { HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
    constructor(private http: HttpService){

    }
    async getJson() {   

        var key = '8b460b5fccdd54b368300aec5edcf3e7';
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=' + key)
            .pipe(
                map(response => response.data)
            );
      
    }

    getPrimeDate() { 
    const CurrentDate= new Date();
    let dateres = ("0" + CurrentDate.getDate()).slice(-2);
    var date = parseInt(dateres,10)
            
            if (date===1)
            {
                return false
            }
            else if(date === 2)
            {
                return true;
            }
            else
            {
                for(var x = 2; x < date; x++)
                {
                    if(date % x === 0)
                    {
                        return false  
                    }
                }
            return true;
            }
    }      

    async getByPrimeDate() {

        if(this.getPrimeDate()){
            var key = '8b460b5fccdd54b368300aec5edcf3e7';
            return this.http.get('https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=' + key)
            .pipe(
                map(response => response.data)
            );

        }
        else{
            return new HttpException(
                'Date is not Prime',
                HttpStatus.BAD_REQUEST,
            );
        }
}
}
    
  

