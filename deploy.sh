echo "Pulling..."
git pull

echo "Building..."
docker-compose up -d --build
echo "Build complete"