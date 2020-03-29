import subprocess
import sys

# Too lazy for proper APIs, just piping to command line instead lol

drop = 'drop table ROUTES;'
create = 'create table ROUTES(METHOD varchar(8), ROUTE varchar(4096), PATH varchar(4096), TYPE integer);'
display = 'select * from ROUTES;'

routes = [
    'GET / /index.html 0',
    'GET /blog /blog/index.html 0',
    'ERROR 404 /404/index.html 0'
]
with_quotes = lambda row: [x+val+x for val, x in zip(row.split(), '""" ')]
insert = lambda row: 'insert into ROUTES values(' + ','.join(with_quotes(row)) + ')'

def execute(*commands):
    for command in commands:
        subprocess.run(['./sqlite_shell', sys.argv[1], command])

# Refresh
execute(drop, create)
# Write the routes
execute(*map(insert, routes))
# Print to inspect
execute(display)