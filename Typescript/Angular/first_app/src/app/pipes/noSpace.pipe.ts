import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'noSpace'
})
export class noSpace implements PipeTransform {

    transform(value: string): string {
        return value.replace(/\s+/g, '');
    }
}