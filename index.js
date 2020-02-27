const valid8 = {
  required: v => !!v,
  maxFileSize: v => !v || v.size < 2000000,
  fullName: v => /^[a-zzéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ]*(\s[a-zzéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ]+)*$/g
    .test(v),
  email: v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i
    .test(v),
  cpf: (value) => {
    const cpfString = value.replace(/\.|-/g, '');

    if (cpfString.length < 11) return msgInvalido;

    let soma;
    let resto;
    soma = 0;
    if (cpfString === '00000000000') return false;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpfString.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpfString.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpfString.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpfString.substring(10, 11))) return false;

    return true;
  },
  strongPassword: v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g
    .test(v),
  pastDate: (value) => {
    const dateObj = new Date(value);
    const hojeObj = date.hoje();

    const yearDiff = hojeObj.getFullYear() - dateObj.getFullYear();
    const monthDiff = hojeObj.getMonth() - dateObj.getMonth();
    const dayDiff = hojeObj.getDate() - dateObj.getDate() - 1;

    if (yearDiff < 0) return false;

    if (yearDiff === 0 && monthDiff < 0) return false;

    if (yearDiff === 0 && monthDiff === 0 && dayDiff < 0) return false;

    return true;
  },
};

module.exports = valid8;