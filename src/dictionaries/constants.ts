export const COMPANIES = [
  'RDS',
  'MINISO Costa Rica',
  'Maximus CRM',
  'Tico Kitchen',
  'Locales Pura Vida',
] as const;

export const TECH_CHIPS = [
  'Angular 21',
  'NestJS',
  'TypeScript Strict',
  'PostgreSQL / Supabase',
  'MongoDB',
  'RxJS / Signals',
  'Socket.IO',
  'n8n',
  'Jest / Playwright',
  'AWS S3 / EC2 / Lambda',
  'Docker',
  'Bitbucket Pipelines',
  'MCP Protocol',
  'Claude Code',
  'OpenRouter / GPT-4o',
] as const;

export const PROJECT_TAGS = {
  maximus: ['Angular 21', 'NestJS', 'Supabase', 'Playwright'],
  miniso: ['n8n', 'GPT-4o', 'PostgreSQL', 'Evolution API'],
  mcp: ['TypeScript', 'MCP Protocol', 'Claude Code', 'Jira'],
  tico: ['NestJS', 'MongoDB', 'React / PrimeReact', 'Clean Architecture'],
} as const satisfies Record<'maximus' | 'miniso' | 'mcp' | 'tico', readonly string[]>;

export const BRAND = {
  name: 'Kendal Carmona',
  email: 'kecarmonahe@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kendal-carmona-herrera/',
  initials: 'KC',
  copyrightYear: 2026,
  country: 'Costa Rica',
} as const;
