export const useGetImageUrl = (url: string) => {
  const glob = import.meta.glob("@/assets/img/ecosystem/*", { eager: true });
  const key = Object.keys(glob).find((key) => key.includes(url));

  if (!key) {
    return null;
  }

  return glob[key].default;
};
