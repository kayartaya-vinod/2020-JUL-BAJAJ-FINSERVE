import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonify'
})
export class JsonformatterPipe implements PipeTransform {

  transform(obj: any, spaces: number = undefined): string {
    return JSON.stringify(obj, null, spaces);
  }

}

