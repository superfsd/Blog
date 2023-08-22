# 查看 Nuget 仓库

```
dotnet nuget list source
```

# 添加私有 Nuget 仓库

```
dotnet nuget add source <package_source_path>
```

# 创建包

## 基于 nusepc

```
nuget pack <package>.nuspec
```

### nuspec 文件

文件和项目文件一层级

```
<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://schemas.microsoft.com/packaging/2012/06/nuspec.xsd">
  <metadata>
    <id>项目的唯一标识</id>
    <version>版本（1.0.0）</version>
    <description>
      描述
    </description>
    <authors>作者</authors>
	<projectUrl>项目仓库地址</projectUrl>
	<license type="expression">（协议）Apache-2.0</license>
    <packageTypes>
      <packageType name="Template" />
    </packageTypes>
  </metadata>
  <files>
	<file src="src\**" target="src" exclude="**\bin\**;**\obj\**" />
  </files>
</package>
```

## 基于.csproj

# 发布

## 基于 dotnet

```
dotnet nuget push  package.nupkg  -s  <package_source_path>  -k <secret key>
```

## 基于 nuget

# 删除

## 基于 dotnet

```
dotnet nuget delete 包名 版本号 -s <package_source_path> -k <secret key>
```

# 安装项目模板

```
dotnet new install <package>::<version>
```
