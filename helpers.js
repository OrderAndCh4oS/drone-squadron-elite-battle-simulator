export default function pad(n, width, unit) {
    unit = unit || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(unit) + n;
}
