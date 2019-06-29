FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["bprapp.csproj", ""]
RUN dotnet restore "/bprapp.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "bprapp.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "bprapp.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "bprapp.dll"]