import { Pipe } from "@angular/core";

@Pipe({
    name: "phone"
})
export class PhonePipe {
    transform(rawNum: number) {
        let str = rawNum.toString();
        if (str.length > 0) {
            str[0] != '0' ? str = '0' + str : '';
            const areaCode = str.slice(0, 3);
            const restNum = str.slice(3, 10);
            return `${areaCode}-${restNum}`;
        }
        return '';
    }
}