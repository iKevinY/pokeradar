export FLASK_APP=server.py

all: install run

debug: export FLASK_DEBUG=1
debug:
	@flask run

install:
	@pip install -r requirements.txt
	@pip install -r pgoapi/requirements.txt

run:
	@flask run --host=0.0.0.0

.PHONY: all debug install run
