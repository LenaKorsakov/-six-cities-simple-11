const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{2,}$/;

export const checkHasNumberAndLetter = (value: string) => !!value.match(passwordRegex);

export const checkNotEmpty = (value: string) => value.trim() !== '';
