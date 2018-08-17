interface StringReceiver {
    resolve(string: string) : string;
}

export class StringResolver implements StringReceiver {

    resolve(string: string) : string {
        return string;
    }
}