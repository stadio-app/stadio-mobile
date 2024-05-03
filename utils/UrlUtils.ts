export const resolveApiUrl = () => {
  if (process.env.ENV != 'local') {
    return process.env.EXPO_PUBLIC_API_STAGING_URL ?? 'http://localhost:8080';
  }
  return process.env.EXPO_PUBLIC_API_LOCAL_URL ?? 'http://localhost:8080';
};
