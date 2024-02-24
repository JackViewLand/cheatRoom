# 使用 Node.js 的官方映像作為基礎映像
FROM node:14

# 在容器中創建工作目錄
WORKDIR /usr/src/app

# 複製 package.json 和 package-lock.json 到容器中
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製所有其他檔案到容器中
COPY . .

# 對外開放端口 3000
EXPOSE 3000

# 定義容器啟動時運行的命令
CMD ["node", "server.js"]

