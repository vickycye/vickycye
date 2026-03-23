import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();
const DOWNLOAD_KEY_PREFIX = 'downloads:';

export async function incrementDownloadCount(fileId: string): Promise<number> {
  const key = `${DOWNLOAD_KEY_PREFIX}${fileId}`;
  const count = await redis.incr(key);
  return count;
}

export async function getDownloadCount(fileId: string): Promise<number> {
  const key = `${DOWNLOAD_KEY_PREFIX}${fileId}`;
  const count = await redis.get<number>(key);
  return count ?? 0;
}
