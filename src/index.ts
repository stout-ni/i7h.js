export default function i18n(s: string) {
  const _f = (r: string): string => {
    if (r.length <= 2) {
      return r;
    }
    return `${r[0]}${r.length - 2}${r.slice(-1)}`;
  };

  return s.replace(/\w+/g, _f);
}
