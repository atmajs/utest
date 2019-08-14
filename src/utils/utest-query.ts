export namespace UTestQueryUtil {
    export function getQuery () {
        if (typeof process === 'undefined' || process.argv == null) {
            return null;
        }

        let argv = process.argv;
        for (let i = 0; i < argv.length - 1; i++) {
            let key = argv[i];
            if (key === '-q' || key === '--query') {
                let str = argv[i + 1];
                return new RegExp(str);
            }
        }
        return null;
    }
    export function matchQuery(key: string, q: RegExp) {
        return q.test(key);
    }
}