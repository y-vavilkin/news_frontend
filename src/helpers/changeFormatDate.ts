const changeFormatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };
  return new Date(dateString).toLocaleDateString('en-EN', options);
};

export default changeFormatDate;
