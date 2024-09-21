import { parse, format } from 'date-fns';

export const parseDate = (
  dateString,
  inputFormat = 'dd/MM/yyyy',
  outputFormat = 'yyyy-MM-dd'
) => {
  const parsedDate = parse(dateString, inputFormat, new Date());
  return format(parsedDate, outputFormat);
};
