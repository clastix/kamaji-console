specification.json:
	curl http://localhost:8080/openapi/v2 > specification.json

specification-kamaji.json: specification.json
	pnpm tsx scripts/parse-specs.ts

generate: specification-kamaji.json
	rm -rf src/api/gen
	openapi-generator generate -g typescript-node -i specification-kamaji.json -o src/gen