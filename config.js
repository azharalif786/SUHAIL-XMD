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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_52_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTMxLFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg1LFxuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDkwLFxuICAgICAgICA4MixcbiAgICAgICAgMTExLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSVTc2UitRbm84QmZQbGc5UjJuUVJWN2QraHZUdC8zVXNUVVJKbWR4bXZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3QTdWTGk0c1RPT0ZCMFlEdjVYSDRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3YmUxNTkwLWEzMTgtNGZkZi1hZDhmLTA0YzdmNTA5MjA4NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAxNjMsXG4gICAgICAyMjUsXG4gICAgICAxOTcsXG4gICAgICAxMDQsXG4gICAgICAyMixcbiAgICAgIDIzMSxcbiAgICAgIDExMyxcbiAgICAgIDE5NCxcbiAgICAgIDQ3LFxuICAgICAgMjMxLFxuICAgICAgMTcsXG4gICAgICA4LFxuICAgICAgMTU3LFxuICAgICAgMTMwLFxuICAgICAgOSxcbiAgICAgIDI1MSxcbiAgICAgIDEzOCxcbiAgICAgIDE4NyxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDEwMyxcbiAgICAgIDE3NyxcbiAgICAgIDIyMCxcbiAgICAgIDE2OCxcbiAgICAgIDEwNixcbiAgICAgIDI0NCxcbiAgICAgIDE2OCxcbiAgICAgIDEwNixcbiAgICAgIDIxMCxcbiAgICAgIDEzMixcbiAgICAgIDEzLFxuICAgICAgOTMsXG4gICAgICA1NixcbiAgICAgIDIwNyxcbiAgICAgIDgwLFxuICAgICAgNjQsXG4gICAgICA0NSxcbiAgICAgIDE5LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZLUlFaQTcxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDI0NDIzOTM6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBTiBF4bSbSMmqQ+G0gMqfIEjhtJxCXCIsXG4gICAgXCJsaWRcIjogXCIxNTcyMzA3MTY0NjEyMjA6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjJubGcwUXY3aWR1Z1lZR2lBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXV2NCZnJZRjNidStvY1ZqSXVvNjVScjUyalI1bG9WWnNNVWZVditzOFNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNzMmZacWFVdXB1dFdMOUYrL3dpSURoRVh3aktjV3RuZkJxbld2QXRPY3JSS0FhelVOMk83UDRhWHpCR1l0UThQWjlhSGZnSmh3N29RczlCMm0wbkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFnQUtlZFpYaTFMVmFRazk4Z3hIMlQ2aTY2RkMxNkpmSmxtUk5ZcjVKRXZReStTQUo5QWJHNlZyeEJJREw3dm9KQnNaWEdmYUhmSVdHU000SjJpK2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMjQ0MjM5MzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3Mjk5MjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
