import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'CurrencyPipe',
    standalone: true
})
export class CurrencyPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return new Intl.NumberFormat('vi-Vn', { style: 'currency', currency: 'VND' }).format(value);
    }
};