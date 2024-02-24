# cheatRoom
- [clone 專案](#clone-專案)
- [說明](#說明)
  - [架構圖](#架構圖)
  - [注意](#注意)
  - [前置作業](#前置作業)
- [運行](#運行)
- [備註](#備註)

# clone 專案
```
git clone https://github.com/JackViewLand/cheatRoom.git
```

# 說明
本專案為簡易的聊天室，服務使用node.js，並利用nginx進行反向代理，log可以於nginx/log 中進行查看
## 架構圖
<img width="862" alt="架構圖" src="https://github.com/JackViewLand/cheatRoom/assets/122655131/c03b98ce-f4f6-4694-9a1f-ec46da558af3">

## 注意
websocket在nginx在進行反向代理需要帶上upgrade表頭，建立會成功返回http code 101

<img width="340" alt="upgrade_header" src="https://github.com/JackViewLand/cheatRoom/assets/122655131/89b1c0f3-c553-4032-98b2-33ec590a93b5">

<img width="365" alt="http_101" src="https://github.com/JackViewLand/cheatRoom/assets/122655131/c6dbf671-f9b0-4620-a057-15261c395d24">


## 前置作業
請修正以下檔案
### node/index.html
請修正servername成自己的 domain 或是 public IP

<img width="389" alt="index.html需要修改得部分" src="https://github.com/JackViewLand/cheatRoom/assets/122655131/720a529c-4b63-47c5-b1c5-29b24aff4052">

---

### nginx/conf.d/site.conf
請修正servername成自己的 domain 或是 public IP

<img width="267" alt="site.conf" src="https://github.com/JackViewLand/cheatRoom/assets/122655131/e692a7d3-f6c3-40cd-af33-2fe990d097b3">

# 運行
```
docker-compose up -d
```
# 備註
本次專案有在```nginx.conf```添加各個lua phase，以利後續waf開發。

