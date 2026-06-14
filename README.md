# Nestjs Authentication

## Architecture
```
├── src/
│
├── common/
│   ├── decorators/
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   ├── pipes/
│   ├── constants/
│   └── types/
│
├── config/
│   ├── app.config.ts
│   ├── database.config.ts
│   ├── jwt.config.ts
│   └── redis.config.ts
│
├── database/
│   ├── migrations/
│   └── seeds/
│
├── modules/
│
│   ├── auth/
│   │   ├── dto/
│   │   ├── strategies/
│   │   ├── guards/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   │
│   ├── users/
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   │
│   ├── roles/
│   │
│   ├── mail/
│   │
│   └── redis/
│
├── app.module.ts
├── main.ts
│
├── test/
│
├── .env
├── .env.development
├── .env.production
│
├── docker-compose.yml
├── tsconfig.json
└── package.json
```