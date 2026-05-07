import type { ProjectsDict } from "@/dictionaries/types";
import { PROJECT_TAGS } from "@/dictionaries/constants";

export default function Projects({ dict }: { dict: ProjectsDict }) {
  return (
    <section id="projects" className="relative py-32 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <div className="pill mb-5">{dict.pill}</div>
          <h2 className="font-serif text-5xl md:text-6xl gradient-text">
            {dict.title}
          </h2>
          <p className="mt-5 text-white/60 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Row 1: Maximus + MINISO */}
        <div className="grid md:grid-cols-2 gap-5 mb-5 scroll-reveal">
          {/* Card 1: Maximus CRM Refactor */}
          <article className="glass-strong p-6 hover:border-violet-400/40 transition group">
            <div className="bg-[#0a0820] rounded-xl p-5 mb-5 relative overflow-hidden border border-violet-500/10">
              {dict.items.maximus.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 ${idx === 0 ? "mb-3 p-3 bg-violet-500/10 rounded-lg border border-violet-500/20" : "mb-3 p-3 bg-white/5 rounded-lg"}`}
                >
                  <span className="text-violet-300">{metric.icon}</span>
                  <span className="text-sm flex-1">
                    {metric.text}{" "}
                    <span className="metric-badge">{metric.badge}</span>
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-medium mb-2">{dict.items.maximus.title}</h3>
            <p className="text-sm text-white/60">{dict.items.maximus.desc}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {PROJECT_TAGS.maximus.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Card 2: MINISO WhatsApp AI Agent */}
          <article className="glass-strong p-6 hover:border-violet-400/40 transition group">
            <div className="bg-[#0a0820] rounded-xl p-5 mb-5 relative overflow-hidden border border-violet-500/10 min-h-[180px]">
              <div className="bg-violet-500/10 rounded-lg p-3 border border-violet-500/20 max-w-xs mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-xs text-white/70">{dict.items.miniso.liveTag}</span>
                  <span className="ml-auto text-white/40 text-xs">live</span>
                </div>
                {dict.items.miniso.bullets.map((bullet, idx) => (
                  <p key={idx} className="text-xs text-white/50 mt-1">{bullet}</p>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                {dict.items.miniso.pBadges.map((badge) => (
                  <span key={badge} className="metric-badge">{badge}</span>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 text-violet-300 text-2xl">🤖</div>
            </div>
            <h3 className="text-lg font-medium mb-2">{dict.items.miniso.title}</h3>
            <p className="text-sm text-white/60">{dict.items.miniso.desc}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {PROJECT_TAGS.miniso.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* Row 2: MCP + Tico */}
        <div className="grid md:grid-cols-2 gap-5 scroll-reveal">
          {/* Card 3: MCP Server */}
          <article className="glass-strong p-6 hover:border-violet-400/40 transition group">
            <div className="bg-[#0a0820] rounded-xl p-5 mb-5 border border-violet-500/10">
              <div className="space-y-3">
                {dict.items.mcp.bullets.map((bullet, idx) => {
                  const dotColors = ["bg-violet-400", "bg-green-400", "bg-blue-400"] as const;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${dotColors[idx]}`}></span>
                      <span className="text-xs">{bullet}</span>
                    </div>
                  );
                })}
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-violet-500 to-violet-300"></div>
                  </div>
                  <span className="text-xs text-white/50">{dict.items.mcp.status}</span>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">{dict.items.mcp.title}</h3>
            <p className="text-sm text-white/60">{dict.items.mcp.desc}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {PROJECT_TAGS.mcp.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Card 4: Tico Kitchen SaaS */}
          <article className="glass-strong p-6 hover:border-violet-400/40 transition group">
            <div className="bg-[#0a0820] rounded-xl p-5 mb-5 border border-violet-500/10 relative h-[180px] overflow-hidden">
              <div className="code-blob">
                {`@Injectable() export class AuthService { async login(dto: LoginDto) { const user = await this.usersRepo.findByEmail(dto.email); const token = await this.jwt.sign({ sub: user.id, tenantId: user.tenantId, permissions: user.role.permissions }); return token; } } @Module({ imports: [JwtModule.registerAsync(jwtConfig), MongooseModule.forFeature([UserSchema, RoleSchema, TenantSchema])], controllers: [AuthController], providers: [AuthService, UsersRepository] }) export class AuthModule {}`}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-violet-500/30 backdrop-blur-md border border-violet-400/40 px-4 py-1.5 rounded-md font-mono text-xs">
                  {dict.items.tico.codeBadge}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">{dict.items.tico.title}</h3>
            <p className="text-sm text-white/60">{dict.items.tico.desc}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {PROJECT_TAGS.tico.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
