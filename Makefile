build: 
	docker build . -t udemy-test --no-cache

start:
	docker run --rm -d -t -i -p 3000:5173 -v ./src:/app/src --name frontend-development udemy-test

stop:
	docker stop frontend-development

delete:
	docker rmi udemy-test:latest
