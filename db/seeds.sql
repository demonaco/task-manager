INSERT INTO Users (email, password, createdAt, updatedAt) VALUES ("demo@taskify.com", "$2a$10$O0KVQ1Ft7r6FLlDQoeFUm.RpIZNFrW1XN1NczzGNR0m2DnLAkfTBS", "2020-01-01", "2020-01-01");

INSERT INTO Projects (title, description, createdAt, updatedAt, UserId) VALUES ("Work Tasks", "Daily list of office-related tasks", "2020-01-01", "2020-01-01", "1");

INSERT INTO Tasks (title, description, due_date, status, createdAt, updatedAt, ProjectId) VALUES ("Follow up with Ben", "Ask about availability for Thailand trip", "2020-02-03", "to-do", "2020-01-17", "2020-01-17", "1");
INSERT INTO Tasks (title, description, due_date, status, createdAt, updatedAt, ProjectId) VALUES ("Reply marketing email", "Ask about partnership opps", "2020-01-30", "in-progress", "2020-01-17", "2020-01-17", "1");
INSERT INTO Tasks (title, description, due_date, status, createdAt, updatedAt, ProjectId) VALUES ("Project plan", "Write documentation on software project", "2020-02-08", "done", "2020-01-17", "2020-01-17", "1");