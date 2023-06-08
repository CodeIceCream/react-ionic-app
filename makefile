.PHONY : json-server
json-server :
	json-merger --output mock/db.json --pretty mock/data/* 
	json-server --watch mock/db.json \
	--port 3001