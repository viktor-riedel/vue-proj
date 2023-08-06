build:
	docker-compose up --build --no-recreate -d
start:
	docker compose up -d development

stop:
	docker compose down

exec:
	docker exec -it test-app sh
