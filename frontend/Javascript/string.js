function stringValidation(s) {
    let stack = [];
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map.get(last)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(stringValidation("{}")); // Output: true
console.log(stringValidation("{]")); // Output: false