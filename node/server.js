//import express 和 ws 套件
const express = require('express')
const http = require('http')
// const SocketServer = require('ws').Server
const WebSocket = require('ws')
const path = require('path')

//指定開啟的 port
const PORT = 3000

//創建 express 的物件，並綁定及監聽 3000 port ，且設定開啟後在 console 中提示
const app = express()
const server = http.createServer(app)
server.listen(PORT, () => console.log(`Listening on ${PORT}`))

//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new WebSocket.Server({ server })

// 當有HTTP GET請求，回傳html檔案
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//當 WebSocket 從外部連結時執行
wss.on('connection', ws => {
    console.log('Client connected')

    ws.on('message', data => {
        const message = data.toString('utf-8')
        //打印收到的內容
        // console.log('Received: ',message)

        //取得所有連接中的 client
        let clients = wss.clients

        //做迴圈，發送訊息至每個 client
        clients.forEach(client => {
	    if (client.readyState === WebSocket.OPEN) {
                client.send(message)
            }
        })
    })

    ws.on('close', () => {
        console.log('Close connected')
    })
})
