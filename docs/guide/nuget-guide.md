# 添加私有 Nuget 仓库

```
dotnet nuget add source <PACKAGE_SOURCE_PATH>
```

# 创建包

## 基于 nusepc

## 基于.csproj

# 发布

## 基于 dotnet

```
dotnet nuget push  package.nupkg  -s https://awase1ipqc81:4001/v3/index.json -k jabil123456
```

## 基于 nuget

# 删除

## 基于 dotnet

```
dotnet nuget delete 包名 版本号 -s https://awase1ipqc81:4001/v3/index.json -k jabil123456
```
