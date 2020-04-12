CREATE TABLE IF NOT EXISTS routes(
	method VARCHAR(8),
	route VARCHAR(1024),
	path VARCHAR(4096),
	type INTEGER,
	PRIMARY KEY(method, route)
);

CREATE TABLE IF NOT EXISTS blog(
	id VARCHAR(1024) PRIMARY KEY,
	display VARCHAR(1024),
	posted VARCHAR(32),
	link VARCHAR(1024),
	tags VARCHAR(1024)
);

CREATE TRIGGER IF NOT EXISTS add_blog_post
AFTER INSERT ON blog
BEGIN
	INSERT INTO routes VALUES(
		"GET",
		"/blog/"||NEW.id,
		"/blog/"||NEW.id||".html",
		0
	);
	UPDATE blog SET
		posted = DATE("now"),
		link = "/blog/"||NEW.id
	WHERE id = NEW.id;
END;