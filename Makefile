build: 
	docker build . -t udemy-test --no-cache

start:
	docker run --rm -d -t -i -p 3000:5173 -v ./:/app/ --name frontend-development udemy-test

stop:
	docker stop frontend-development

delete:
	docker rmi udemy-test:latest

install:
	docker run --rm -it -v ${PWD}:/app udemy-test:latest npm install
