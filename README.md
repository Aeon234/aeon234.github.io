# Local Dev

If running for the very first time or making changes to the Dockerfile

- run `docker compose build`

To start the container:

- run `docker compose up -d`

When wanting to turn off the container:

- run `docker compose down`

If you need to go into the node container:

- run `docker exec -it nochillroster-react-app-1 /bin/sh`
