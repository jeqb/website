# https://hub.docker.com/_/microsoft-dotnet-core
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY . .
RUN dotnet restore -r linux-x64

# copy everything else and build app
COPY API/. ./API/
WORKDIR /source/API
RUN dotnet publish -c release -o /app -r linux-x64 --self-contained false --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-bionic
WORKDIR /app
COPY --from=build /app ./

# environment variables
ENV TEST_VAR THIS_IS_THE_ENVIRONMENT_VARIABlE

ENTRYPOINT ["./API"]
