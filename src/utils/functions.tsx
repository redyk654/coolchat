// convert aaaa-mm-dd date to dd month yyyy
export const convertDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
};