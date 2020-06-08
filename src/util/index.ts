export function getRoute () {
    const url: string = window.location.href;
    // TODO 隐患
    // localhost:3000
    // localhost:3000/sort
    // localhost:3000/sort/abc
    // localhost:3000/sort?abc=1
    const reg: RegExp = /\/\w+(?=(\/|\?|\#|$))/;
    const res: RegExpExecArray | null = reg.exec(url);
    if (res !== null) {
        return res[0].slice(1, res[0].length);
    }
    return 'home';
}