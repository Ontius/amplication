# Modifications

We want to create apps in a `sub-directory` and not in the `root directory`. To change the base directory
simply change the path in `packages/amplication-data-service-generator/src/base.ts`.

The constant `CUSTOM_BASE_DIRECTORY` is used in the following files:

- `packages/amplication-data-service-generator/src/create-data-service-impl.ts`
- `packages/amplication-data-service-generator/src/create-dotenv.ts`
- `packages/amplication-data-service-generator/src/admin/constants.ts`
- `packages/amplication-data-service-generator/src/admin/create-admin.ts`
- `packages/amplication-data-service-generator/src/server/constants.ts`
- `packages/amplication-data-service-generator/src/server/create-server.ts`
- `packages/amplication-data-service-generator/src/create-root-modules.ts`
