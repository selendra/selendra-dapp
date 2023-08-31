module.exports = class Data1693454585511 {
    name = 'Data1693454585511'

    async up(db) {
        await db.query(`CREATE TABLE "call" ("id" character varying NOT NULL, "parent_id" text, "extrinsic_hash" text, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "call_name" text NOT NULL, "pallet_name" text NOT NULL, "success" boolean NOT NULL, "caller_public_key" text, "args_str" text array, "block_id" character varying, "extrinsic_id" character varying, CONSTRAINT "PK_2098af0169792a34f9cfdd39c47" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_11c1e76d5be8f04c472c4a05b9" ON "call" ("parent_id") `)
        await db.query(`CREATE INDEX "IDX_bd3f11fd4110d60ac8b96cd62f" ON "call" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_dde30e4f2c6a80f9236bfdf259" ON "call" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_638ba9d3d6a8224e66d404d784" ON "call" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_8d62e222f606c249fb4046ad63" ON "call" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_a032945f45cacda2d30f4286df" ON "call" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_1496b5e11eb92d46cd0120853e" ON "call" ("call_name") `)
        await db.query(`CREATE INDEX "IDX_8303adccfbe97758f4fa860011" ON "call" ("pallet_name") `)
        await db.query(`CREATE INDEX "IDX_d3a8c3d00494950ad6dc93297d" ON "call" ("success") `)
        await db.query(`CREATE INDEX "IDX_9e10170ecc8b54fb371180eb44" ON "call" ("caller_public_key") `)
        await db.query(`CREATE INDEX "IDX_d3e4e3f3c9a3f0ee1f9eb29ecf" ON "call" ("id", "pallet_name", "call_name") `)
        await db.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "index_in_block" integer, "event_name" text NOT NULL, "pallet_name" text NOT NULL, "args_str" text array, "block_id" character varying, "extrinsic_id" character varying, "call_id" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2b0d35d675c4f99751855c4502" ON "event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_a8a7fbbbb0d8305cd81eda6ac8" ON "event" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_2c15918ff289396205521c5f3c" ON "event" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_5849a08a8bedd645c758b85d26" ON "event" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_129efedcb305c80256db2d57a5" ON "event" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_83cf1bd59aa4521ed882fa5145" ON "event" ("call_id") `)
        await db.query(`CREATE INDEX "IDX_4d7d3a9d2b7069d7c7d380585d" ON "event" ("event_name") `)
        await db.query(`CREATE INDEX "IDX_fed099a40fd1d0cdd95fe637de" ON "event" ("pallet_name") `)
        await db.query(`CREATE INDEX "IDX_e42aa9abbd04b6616335e4e997" ON "event" ("id", "pallet_name", "event_name") `)
        await db.query(`CREATE TABLE "extrinsic" ("id" character varying NOT NULL, "block_number" integer, "timestamp" TIMESTAMP WITH TIME ZONE, "extrinsic_hash" text, "index_in_block" integer, "version" integer, "signer_public_key" text, "success" boolean, "error" text, "tip" numeric, "fee" numeric, "block_id" character varying, "main_call_id" character varying, CONSTRAINT "PK_80d7db0e4b1e83e30336bc76755" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_a3b99daba1259dab0dd040d4f7" ON "extrinsic" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_18672480b054fc21d880ae281e" ON "extrinsic" ("main_call_id") `)
        await db.query(`CREATE INDEX "IDX_142f352835c698a35eacbeb2f5" ON "extrinsic" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_6e232918078798b1fade21dcf8" ON "extrinsic" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_3f6148b9eb1539a62ebe0fe5e5" ON "extrinsic" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_93415749e09a7dd6b9ba09f034" ON "extrinsic" ("version") `)
        await db.query(`CREATE INDEX "IDX_44852b61ab7ff72aeddb5a678a" ON "extrinsic" ("signer_public_key") `)
        await db.query(`CREATE INDEX "IDX_21e5db7671dfa1b00dbe6dbbd6" ON "extrinsic" ("success") `)
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "height" integer NOT NULL, "hash" text NOT NULL, "parent_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "spec_version" integer NOT NULL, "validator" text, "extrinsics_count" integer NOT NULL, "calls_count" integer NOT NULL, "events_count" integer NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_bce676e2b005104ccb768495db" ON "block" ("height") `)
        await db.query(`CREATE INDEX "IDX_f8fba63d7965bfee9f304c487a" ON "block" ("hash") `)
        await db.query(`CREATE INDEX "IDX_5c67cbcf4960c1a39e5fe25e87" ON "block" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_5b79d140fa8e2c64a7ef223598" ON "block" ("spec_version") `)
        await db.query(`CREATE INDEX "IDX_b7e2f8fe1384a2910825029dcb" ON "block" ("validator") `)
        await db.query(`CREATE TABLE "items_counter" ("id" character varying NOT NULL, "type" character varying(10) NOT NULL, "level" character varying(6) NOT NULL, "total" integer NOT NULL, CONSTRAINT "PK_161dcf46142538463f5d7174793" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_68d2eadecb3eeb540d2004acef" ON "items_counter" ("type") `)
        await db.query(`CREATE INDEX "IDX_1d9be1d79f197d42dd163f86c8" ON "items_counter" ("level") `)
        await db.query(`CREATE INDEX "IDX_e03dd1c60ac7622914f72ac2f1" ON "items_counter" ("total") `)
        await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_bd3f11fd4110d60ac8b96cd62f3" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_dde30e4f2c6a80f9236bfdf2590" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_2b0d35d675c4f99751855c45021" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_129efedcb305c80256db2d57a59" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_83cf1bd59aa4521ed882fa51452" FOREIGN KEY ("call_id") REFERENCES "call"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_18672480b054fc21d880ae281ee" FOREIGN KEY ("main_call_id") REFERENCES "call"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "call"`)
        await db.query(`DROP INDEX "public"."IDX_11c1e76d5be8f04c472c4a05b9"`)
        await db.query(`DROP INDEX "public"."IDX_bd3f11fd4110d60ac8b96cd62f"`)
        await db.query(`DROP INDEX "public"."IDX_dde30e4f2c6a80f9236bfdf259"`)
        await db.query(`DROP INDEX "public"."IDX_638ba9d3d6a8224e66d404d784"`)
        await db.query(`DROP INDEX "public"."IDX_8d62e222f606c249fb4046ad63"`)
        await db.query(`DROP INDEX "public"."IDX_a032945f45cacda2d30f4286df"`)
        await db.query(`DROP INDEX "public"."IDX_1496b5e11eb92d46cd0120853e"`)
        await db.query(`DROP INDEX "public"."IDX_8303adccfbe97758f4fa860011"`)
        await db.query(`DROP INDEX "public"."IDX_d3a8c3d00494950ad6dc93297d"`)
        await db.query(`DROP INDEX "public"."IDX_9e10170ecc8b54fb371180eb44"`)
        await db.query(`DROP INDEX "public"."IDX_d3e4e3f3c9a3f0ee1f9eb29ecf"`)
        await db.query(`DROP TABLE "event"`)
        await db.query(`DROP INDEX "public"."IDX_2b0d35d675c4f99751855c4502"`)
        await db.query(`DROP INDEX "public"."IDX_a8a7fbbbb0d8305cd81eda6ac8"`)
        await db.query(`DROP INDEX "public"."IDX_2c15918ff289396205521c5f3c"`)
        await db.query(`DROP INDEX "public"."IDX_5849a08a8bedd645c758b85d26"`)
        await db.query(`DROP INDEX "public"."IDX_129efedcb305c80256db2d57a5"`)
        await db.query(`DROP INDEX "public"."IDX_83cf1bd59aa4521ed882fa5145"`)
        await db.query(`DROP INDEX "public"."IDX_4d7d3a9d2b7069d7c7d380585d"`)
        await db.query(`DROP INDEX "public"."IDX_fed099a40fd1d0cdd95fe637de"`)
        await db.query(`DROP INDEX "public"."IDX_e42aa9abbd04b6616335e4e997"`)
        await db.query(`DROP TABLE "extrinsic"`)
        await db.query(`DROP INDEX "public"."IDX_a3b99daba1259dab0dd040d4f7"`)
        await db.query(`DROP INDEX "public"."IDX_18672480b054fc21d880ae281e"`)
        await db.query(`DROP INDEX "public"."IDX_142f352835c698a35eacbeb2f5"`)
        await db.query(`DROP INDEX "public"."IDX_6e232918078798b1fade21dcf8"`)
        await db.query(`DROP INDEX "public"."IDX_3f6148b9eb1539a62ebe0fe5e5"`)
        await db.query(`DROP INDEX "public"."IDX_93415749e09a7dd6b9ba09f034"`)
        await db.query(`DROP INDEX "public"."IDX_44852b61ab7ff72aeddb5a678a"`)
        await db.query(`DROP INDEX "public"."IDX_21e5db7671dfa1b00dbe6dbbd6"`)
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_bce676e2b005104ccb768495db"`)
        await db.query(`DROP INDEX "public"."IDX_f8fba63d7965bfee9f304c487a"`)
        await db.query(`DROP INDEX "public"."IDX_5c67cbcf4960c1a39e5fe25e87"`)
        await db.query(`DROP INDEX "public"."IDX_5b79d140fa8e2c64a7ef223598"`)
        await db.query(`DROP INDEX "public"."IDX_b7e2f8fe1384a2910825029dcb"`)
        await db.query(`DROP TABLE "items_counter"`)
        await db.query(`DROP INDEX "public"."IDX_68d2eadecb3eeb540d2004acef"`)
        await db.query(`DROP INDEX "public"."IDX_1d9be1d79f197d42dd163f86c8"`)
        await db.query(`DROP INDEX "public"."IDX_e03dd1c60ac7622914f72ac2f1"`)
        await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_bd3f11fd4110d60ac8b96cd62f3"`)
        await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_dde30e4f2c6a80f9236bfdf2590"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_2b0d35d675c4f99751855c45021"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_129efedcb305c80256db2d57a59"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_83cf1bd59aa4521ed882fa51452"`)
        await db.query(`ALTER TABLE "extrinsic" DROP CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74"`)
        await db.query(`ALTER TABLE "extrinsic" DROP CONSTRAINT "FK_18672480b054fc21d880ae281ee"`)
    }
}
