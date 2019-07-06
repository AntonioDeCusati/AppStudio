

export class UtilsService {
    static urlFactory = baseUrl => {
        return (...subs): string => baseUrl + (subs.reduce( (acc, val) => val ? `${acc}/${val}` : acc));
    }
}
