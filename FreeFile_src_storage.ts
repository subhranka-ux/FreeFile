const PREFIX = "freefile:v1:";

export function readString(key: string, fallback: string): string {
  try {
    const value = localStorage.getItem(PREFIX + key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

export function readArray(key: string): string[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(PREFIX + key) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function writeValue(key: string, value: unknown): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // The app remains usable when storage is disabled or full.
  }
}