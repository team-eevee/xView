-- Queries to create table

---------------------------------------- 

CREATE TABLE "user" (
  "user_id" SERIAL PRIMARY KEY,
  "username" VARCHAR NOT NULL,
	"email" VARCHAR NOT NULL,
  "avatar" VARCHAR NOT NULL,
  "session" VARCHAR
);

DROP TABLE "user"

-- example
INSERT INTO user (username, email, url, avatar) VALUES ($1, $2, $3, $4);

---------------------------------------- 

CREATE TABLE "company" (
  "company_id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "domain" VARCHAR NOT NULL,
  "description" VARCHAR NOT NULL,
  "location" VARCHAR NOT NULL,
  "logo" VARCHAR NOT NULL
);

DROP TABLE "company"

INSERT INTO company ("name", "domain", "description", "location", "logo")
	VALUES ("Codesmith", "http://www.codesmith.io", "not a bootcamp", "Venice", "http://www.google.com/codesmith-picture");

---------------------------------------- 

CREATE TABLE "app" (
  "app_id" SERIAL PRIMARY KEY,
  "fk_user_id" INTEGER REFERENCES "user"(user_id),
  "fk_company_id" INTEGER REFERENCES company(company_id),
  "status" VARCHAR NOT NULL,
  "created_at" date not null
);

DROP TABLE "app"

INSERT INTO "app"
	VALUES ((SELECT user_id FROM user WHERE email='jaelee213@gmail.com'), (SELECT company_id FROM company WHERE 'name'='Codesmith'))
	RETURNING app_id;

---------------------------------------- 

CREATE TABLE "notes" (
  "notes_id" SERIAL PRIMARY KEY,
  "fk_app_id" INTEGER REFERENCES app(app_id),
  "note" VARCHAR NOT NULL
);

DROP TABLE "notes"

---------------------------------------- 
CREATE TABLE "recruiter" (
  "recruiter_id" SERIAL PRIMARY KEY,
  "fk_company_id" INTEGER REFERENCES company(company_id),
  "name" VARCHAR NOT NULL,
  "email" VARCHAR NOT NULL,
  "phone_number" INTEGER NOT NULL
);

DROP TABLE "recruiter"

---------------------------------------- 

CREATE TABLE "app_recruiter" (
  "app_rec_id" SERIAL PRIMARY KEY,
  "fk_app_id" INTEGER REFERENCES app(app_id),
  "fk_recruiter_id" INTEGER REFERENCES recruiter(recruiter_id)
);

DROP TABLE "app_recruiter"


