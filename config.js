const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+994402442393";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_36_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwLFxuICAgICAgICA3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzbzRGWFZGNUwzeTBrSCtqVFU3U3VJTVVzeHJBbGhBWEc3OXcxTXpwdnZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMjQ0MjM5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEZGNkY1M0NCOTgxNDZBRDU0MEY0MTdGN0Y4MTAwQzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjUyNTk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAyNDQyMzkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RjI3NTZFRDRBQ0JBNkExRjc2MjNBNEY5M0JBREJFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE2NTI1OTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiem9OUkFhY0ZRYi1MUm5aUFZSQWpSUVwiLFxuICBcInBob25lSWRcIjogXCIxMTNkMjQ4Mi01YzRiLTQyOTUtYmJmOC1kM2JlYzA1MjA4OGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMjQyLFxuICAgICAgMjQ5LFxuICAgICAgMTUzLFxuICAgICAgMTYsXG4gICAgICAzOCxcbiAgICAgIDM0LFxuICAgICAgMTU2LFxuICAgICAgMjYsXG4gICAgICAxLFxuICAgICAgMTQ2LFxuICAgICAgMTE1LFxuICAgICAgMjUyLFxuICAgICAgMjI3LFxuICAgICAgMjU0LFxuICAgICAgODMsXG4gICAgICAyNDcsXG4gICAgICAyMzIsXG4gICAgICAxNTIsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICA4MSxcbiAgICAgIDE2NixcbiAgICAgIDE5MixcbiAgICAgIDI5LFxuICAgICAgMTMzLFxuICAgICAgMTcwLFxuICAgICAgMTk5LFxuICAgICAgMTAzLFxuICAgICAgMjQ4LFxuICAgICAgMjM3LFxuICAgICAgMTU3LFxuICAgICAgNzgsXG4gICAgICAyLFxuICAgICAgMTU2LFxuICAgICAgMTY5LFxuICAgICAgODksXG4gICAgICAzNixcbiAgICAgIDE1NCxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzU01OWlFDU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTk0NDAyNDQyMzkzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwidFwiLFxuICAgIFwibGlkXCI6IFwiMTU3MjMwNzE2NDYxMjIwOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0oybmxnMFE3TmZidVFZWUN5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1djQmZyWUYzYnUrb2NWakl1bzY1UnI1MmpSNWxvVlpzTVVmVXYrczhTZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSK08ydkNFeEpoY0N0a0J4SkNPRjVKUFZDdU9PZkhRR29XamZFVi80cFVYN2dPdDhxRk5VQ21VMG9uMWtRUlJTQjM4emRYeHoxVnJ1SEJGR2FhNk5Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoREF3YTE4SENXZ3pYenAwRTBrVjlILzBRcmNpNnlTQlE3R3V6Z2FkRzAyeHBvQ0xXSHJGVEtyZzRnckwySFljT3FXc2lMeFQ1RkpDc2t0eEYwRGhCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDI0NDIzOTM6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNjUyNTk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVd2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFV3YuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "AWAIS-MD BY AN",
  packname: process.env.PACK_NAME || "BY AWAIS QADIR",
  botname : process.env.BOT_NAME  || "Awais-AN-Bot",
  ownername:process.env.OWNER_NAME|| "AWAIS QADIR-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
