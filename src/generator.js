function passwordGen(length, specialChar, upperCase, numbers) {
    if (length > 64 || length < 8) {
       console.log('A generated password must be between 8 and 64 characters');
       return { error: 'A generated password must be between 8 and 64 characters'};
    }
    
    let list = 'abcdefghijklmnopqrstuvwxyz';

    if (specialChar) {
        list += '~`!@#$%^*(),./=?+_-';
    }
    
    if (upperCase) {
        list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (numbers) {
        list += '0123456789';
    }

    let password = '';
    for (let index = 0; index < length; index++) {
        const character = Math.floor(Math.random() * list.length);
        password += list[character];
    }

    return password;
}



