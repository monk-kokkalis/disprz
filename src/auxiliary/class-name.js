function className(...args) {
    const mappedClasses = args.map(el => {
        switch(typeof el) {
            case 'object':
                var classes = [];
                for (let prop in el) {
                    if (el.hasOwnProperty(prop)) {
                        classes.push(el[prop] === true ? prop : `not-${prop}`);
                    }
                }
                return classes.join(' ');
            default:
                return el;
        }
    })
    return mappedClasses.join(' ');
}

export default className;