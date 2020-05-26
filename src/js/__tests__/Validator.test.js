/* eslint-disable no-undef */
import Validator from '../Validator';

test('выдает первую ошибку', () => {
  const validator = new Validator();

  expect(validator.validateUsername('user@%&')).toBe('Имя пользователя может содержать только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)!');
});
test('выдает вторую ошибку', () => {
  const validator = new Validator();

  expect(validator.validateUsername('user7777')).toBe('Имя не должно содержать подряд более трёх цифр!');
});

test('выдает третью ошибку', () => {
  const validator = new Validator();

  expect(validator.validateUsername('_user')).toBe('Имя не должно начинаться  цифрами, символами подчёркивания или тире!');
});

test('выдает четвертую ошибку', () => {
  const validator = new Validator();

  expect(validator.validateUsername('user_')).toBe('Имя не должно заканчиваться цифрами, символами подчёркивания или тире!');
});

test('успешно создает пользователя', () => {
  const validator = new Validator();

  expect(validator.validateUsername('user66user')).toBe('Пользователь успешно создан');
});
