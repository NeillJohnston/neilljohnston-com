SELECT * FROM blog
WHERE tags LIKE '%'||?||'%'
ORDER BY posted DESC;