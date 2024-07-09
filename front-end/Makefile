
up :  build down
	@if [ -z "$$(docker ps -aq --filter name=myapp)" ]; then \
			docker run -d -p 3000:3000 --name myapp -v ${PWD}/src:/usr/src/app/src myapp; \
		else \
			docker start myapp; \
		fi \
	&&  docker exec -it myapp /bin/bash -c "npm run dev"

build :
	@if [ -z "$$( docker images -q myapp)" ]; then \
			docker build -t myapp .; \
		else \
			echo "Image already exists"; \
		fi

down : 
	@if [ -z "$$( docker ps -q --filter name=myapp)" ]; then \
			echo "Container is not running"; \
		else \
			 docker stop myapp &&  docker rm myapp; \
		fi
clean : down 
	  docker rmi myapp