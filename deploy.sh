echo "Pulling..."
git pull

echo "Docker compose down"
docker-compose down

echo "Building..."
docker-compose up -d --build