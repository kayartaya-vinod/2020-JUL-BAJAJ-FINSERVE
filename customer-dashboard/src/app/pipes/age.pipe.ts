import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dt: string | Date, flag: number = 3): string {

    if (!dt) return null;

    const d1 = new Date(dt);
    const diff = new Date(Date.now() - d1.getTime());

    switch (flag) {
      case 1:
        return `${diff.getFullYear() - 1970} years.`;
      case 2:
        return `${diff.getFullYear() - 1970} years and ${diff.getMonth()} months.`;
      default:
        return `${diff.getFullYear() - 1970} years, ${diff.getMonth()} months and ${diff.getDate()} days.`;
    }
  }


}
