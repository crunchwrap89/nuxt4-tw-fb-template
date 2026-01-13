#!/bin/bash
docker system prune
docker build -t crunchwrap89/template.com_nginx .
docker push crunchwrap89/template.com_nginx
$SHELL