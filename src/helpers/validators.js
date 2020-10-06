const validators = {
    isEmail: (value) => {
        const regexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if (regexp.test(value)) {
            return true
        } else {
            return false;
        };
    },
    minLength: (value) => {

        if (value.length < 3) {
            return false
        } else {
            return true;
        }


    },
    maxLength: (value) => {
        console.log('maxlength')
        if (value.length >= 23) {
            return false
        } else {
            return true;
        }
    },
    required: (value) => {
        if (!value) {
            throw new Error('required')
        } else {
            return true;
        }
    },
    noHarmfulSymbols: (value) => {
        if (/[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/.test(value)) {
            return false
        } else {
            return true;
        }
    }
}

export default validators;