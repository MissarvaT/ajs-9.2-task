/* eslint-disable class-methods-use-this */
export default class Validator {
  validateUsername(userName) {
    if (userName.search(/[^(a-z-_0-9)]/i) !== -1) {
      return 'Имя пользователя может содержать только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)!';
    }
    if (userName.search(/\d\d\d\d/) !== -1) {
      return 'Имя не должно содержать подряд более трёх цифр!';
    }
    if (userName.search(/^[\d_-]/) !== -1) {
      return 'Имя не должно начинаться  цифрами, символами подчёркивания или тире!';
    }
    if (userName.search(/([\d_-])$/) !== -1) {
      return 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире!';
    }
    return 'Пользователь успешно создан';
  }
}
