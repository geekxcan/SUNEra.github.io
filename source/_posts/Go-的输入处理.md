---
title: Go 的输入和字符串处理
date: 2023-05-16 11:12:36
tags: [go,字符串处理]
categories: [go]
---

## Go 的输入处理
用 fmt 包的 Scan 相关函数
```go
a := 0
n, _ := fmt.Scan(&a)
//Scanf, Scanln 等等
```
但是这些处理不了带空格的输入，这时可以用 bufio 处理
```go
reader := bufio.NewReader(os.Stdin)
s, err := reader.ReadString('\n')
```
## 字符串处理
有时需要填充格式化字符串则
```go
fmt.Printf("%08s", "test")
//如果右填充则加 -
fmt.Printf("%-10s", "test")
//指定填充字符则可以
fmt.Sprintf("%s%s",raw,strings.Repeat("_",9-len(raw)))
```
对字符串做分割可以
```go
numsList := strings.Split(s, " ")
//或者直接空格
numsList := strings.Fields(s)
```
转换字符串在 strconv 包中
```go
strconv.FormatInt() //转string
strconv.AppendInt(slice,123,2)
strconv.ParseInt() //转整数
```
