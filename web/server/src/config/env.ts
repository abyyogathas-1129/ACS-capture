// Reads the settings from .env in one place, so a missing setting is found at start-up, not later
function readRequiredSetting(name: string): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing setting ${name}. Add it to web/server/.env`)
  }

  return value
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  databaseUrl: readRequiredSetting('DATABASE_URL'),
}
