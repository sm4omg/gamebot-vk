/// Бот разработан каналом: Типичный Кодер ///
/// Подписывайтесь на наш канал , чтобы не пропускать сливы ботов //
/// YouTube: www.youtube.com/c/ТипичныйКодер
/// VK DEV: vk.com/sm4omg ///

const {VK, Keyboard} = require('vk-io');
const vk = new VK();
const {updates} = vk;
const request = require(`request`);
const requests = require("request");
const fs = require("fs");
const rq = require("prequest");
const acc = require("./base/acc.json");
const uid = require("./base/uid.json"); 
let tokenuser = 'Токен от страницы' // vkhost.github.io - получайте от KateMobile
let token = 'Токен от группы'; 
let link = 192831693; 
let mapi = 'parallel';  
var giving = false

	function data() {
		var date = new Date();
		let days = date.getDate();
		let month = date.getMonth() + 1; 
		if (month < 10) month = "0" + month;
		if (days < 10) days = "0" + days;
		var datas = days + ':' + month + ':2020' ;
		return datas;
	}

 	setInterval(() => {
		acc.bit = rand(100,500)
		acc.curs = rand(100,500)
	}, 600000);
let user = new VK(); 
user.setOptions({token: tokenuser}); 
vk.setOptions({token: token, apiMode: mapi, pollingGroupId: link}); 

vk.updates.use(async (message, next) => {
	if (message.user < 1) return;
    if (message.is("message") && message.isOutbox)
    return;	
 
    message.user = message.senderId;
	message.text = message.text || message.payload.text;  

    if (!message.text) return;
    if(/\[club192831693\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club192831693\|(.*)\]/ig, '').trim();  

 
    if(!uid[message.user]){
	 	acc.number += 1;
		let numm = acc.number;
		uid[message.user] = {
			id: numm
		}

 		let id = user_id(message.user); 
 		let user = acc.users[user_id(message.user)];
	    message.send(`🚖 Приветствую, это симулятор таксиста во ВКонтакте, нажми кнопку "Продолжить", для начала игры. (Доступно лишь в ЛС сообщества).`, { keyboard: Keyboard.keyboard([ 
        [
        Keyboard.textButton({ 
        label: '🎮 Продолжить',
        payload: { 
        command: 'о мне' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        })
        ]
        ]) 
        }); 
	 	   
		
		acc.users[numm] = {	
			number: numm, 
			id: message.user, 
			benzin: 100,
			level: 0,
            gg: false, 
			taksi: 0, 
            gruzz: 0,
			uved: true, 
			vputi: false,
			cl: "B", 
			zakaz: 0, 
			gruz: 0,
			pass: false,
			danet: true,
			balance: 500,
			цена: 351910,
			msg: { 
				messages: 0,
				last_msg: ""
			},  
			cars: 1,
			reys: false,
			pс: false,
		    house: false,
			tag: "Новичок",
			ban: false, 
			mute: false,
		    warn: 0, 
			warn_p: [], 
			prefix: `Игрок`, 
			rtime: `${time()} | ${data()}` 
			} 
			vk.api.call('users.get', {
				user_ids: message.user,
				fields: "photo_max,city,verified,status,domain,photo_id,sex,last_seen"
			}).then(res => {
				let user = res[0]; 
				acc.users[user_id(message.user)].prefix = `${user.first_name} ${user.last_name}`;
			}).catch((error) => {console.log('Новый игрок!'); }); 
	}
	let id = user_id(message.user);

 


	if(message.text){ 
		acc.msg += 1;
		if(!acc.users[user_id(message.user)]) return;
		acc.users[id].msg.messages += 1;
		acc.users[id].msg.last_msg = `${time()} | ${data()}`; 
		if(acc.users[id].mute == true) return; 
	}
  	
	if(acc.users[id].ban != false) return;

    try {
        await next();
    } catch (err) { console.error(err) }
});


 vk.updates.hear(/^(?:🚖 Работать)$/i,  (message) => {
 let user = acc.users[user_id(message.user)];
 let a = rand(1000,6000) / 100 * 75 
 let b = rand(2500,8500) / 100 * 75 
 let c = rand(3500,10000) / 100 * 75
 let d = rand(5000,14000) / 100 * 75 
 let e = rand(7000,18000) / 100 * 75 
 let f = rand(10000,23000) / 100 * 75
 let g = rand(12000,24000) / 100 * 75
 let h = rand(15000,27000) / 100 * 75
 let i = rand(17000,29000) / 100 * 75
 let j = rand(19000,31000) / 100 * 75
 let k = rand(1000,6000) 
 let l = rand(2500,8500) 
 let m = rand(3500,10000) 
 let n = rand(5000,14000) 
 let o = rand(7000,18000) 
 let p = rand(10000,23000) 
 let q = rand(12000,24000) 
 let r = rand(15000,27000) 
 let s = rand(17000,29000) 
 let t = rand(19000,31000) 
 let kb = rand(9,35) 
 let lb = rand(38,57)
 let mb = rand(35,55) 
 let nb = rand(33,53) 
 let ob = rand(30,50) 
 let pb = rand(28,43) 
 let qb = rand(26,39) 
 let rb = rand(23,35) 
 let sb = rand(20,32) 
 let tb = rand(15,27) 
 
 if(user.taksi == 1)
 if(user.benzin < 50) return message.send(`😅 У вас менее 50% топлива, съездите подзаправтесь.`) 
 if(user.vputi == true) return message.send(`😅 Вы уже везёте пассажира!`)
 if(user.cars == false) return message.send(`🚶 У вас нет машины!`)
 
 	 if(user.cars == 1 && user.smena == false){
 user.vputi = true
 
setTimeout(() => {
 user.vputi = false
 user.benzin -= (kb)
 user.balance += (a)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${kb}% топлива, но зато вы заработали ${a} рублей, круто!`, {attachment: `photo-189477366_457239021` })
	}, 30000);
      message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
	   
 if(user.cars == 2 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (lb)
 user.balance += (b)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${lb}% топлива, но зато вы заработали ${b} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
	   
 if(user.cars == 3 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (mb)
 user.balance += (c)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${mb}% топлива, но зато вы заработали ${c} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
      }
 
  if(user.cars == 4 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (nb)
 user.balance += (d)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${nb}% топлива, но зато вы заработали ${d} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
 
  if(user.cars == 5 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (ob)
 user.balance += (e)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${ob}% топлива, но зато вы заработали ${e} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
 
  if(user.cars == 6 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (pb)
 user.balance += (f)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${pb}% топлива, но зато вы заработали ${f} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
		   }
 
  if(user.cars == 7 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (qb)
 user.balance += (g)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${qb}% топлива, но зато вы заработали ${g} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
 
  if(user.cars == 8 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (rb)
 user.balance += (h)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${rb}% топлива, но зато вы заработали ${h} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
 
  if(user.cars == 9 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (sb)
 user.balance += (i)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${sb}% топлива, но зато вы заработали ${i} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
		   }
 
  if(user.cars == 10 && user.smena == false){
 user.vputi = true
setTimeout(() => {
 user.vputi = false
 user.benzin -= (tb)
 user.balance += (j)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${j} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	      }
	 if(user.cars == 1 && user.smena == true){
 user.vputi = true
 
setTimeout(() => {
 user.vputi = false
 user.benzin -= (kb)
 user.balance += (k)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${nb}% топлива, но зато вы заработали ${k} рублей, круто!`, {attachment: `photo-189477366_457239021` })
	}, 30000);
      message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
	   
 if(user.cars == 2 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (lb)
 user.balance += (l)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${nb}% топлива, но зато вы заработали ${l} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
	   
 if(user.cars == 3 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (mb)
 user.balance += (m) 
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${nb}% топлива, но зато вы заработали ${m} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
      }
 
  if(user.cars == 4 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (nb)
 user.balance += (n)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${nb}% топлива, но зато вы заработали ${n} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
 
  if(user.cars == 5 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (ob)
 user.balance += (o)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${ob}% топлива, но зато вы заработали ${o} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
 
  if(user.cars == 6 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (pb)
 user.balance += (p)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${pb}% топлива, но зато вы заработали ${p} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
		   }
 
  if(user.cars == 7 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (qb)
 user.balance += (q)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${qb}% топлива, но зато вы заработали ${q} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
 
  if(user.cars == 8 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (rb)
 user.balance += (s)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${rb}% топлива, но зато вы заработали ${s} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
	   }
 
  if(user.cars == 9 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (sb)
 user.balance += (s)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${sb}% топлива, но зато вы заработали ${s} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)
		   }
 
  if(user.cars == 10 && user.smena == true){
 user.vputi = true
 setTimeout(() => {
 user.vputi = false
 user.benzin -= (tb)
 user.balance += (t)
 user.zakaz += 1;
 message.send(`🚙 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей, круто!`, {attachment: `photo-189477366_457239021` })
 
	}, 30000);	
    message.send(`💰 Вы забрали пассажира и едите в место которое пассажиру надо - подождите ровно 30 секунд.`)		
  }	

       });
	   
vk.updates.hear(/^(?:🚚 Работать)$/i,  (message) => {
 let user = acc.users[user_id(message.user)];
 let a = rand(1000,6000) / 100 * 75 
 let b = rand(2500,8500) / 100 * 75 
 let c = rand(3500,10000) / 100 * 75
 let d = rand(5000,14000) / 100 * 75 
 let e = rand(7000,18000) / 100 * 75 
 let f = rand(10000,23000) / 100 * 75
 let g = rand(12000,24000) / 100 * 75
 let h = rand(15000,27000) / 100 * 75
 let i = rand(17000,29000) / 100 * 75
 let j = rand(19000,31000) / 100 * 75 
 let k = rand(1000,6000) 
 let l = rand(2500,8500) 
 let m = rand(3500,10000) 
 let n = rand(5000,14000) 
 let o = rand(7000,18000) 
 let p = rand(10000,23000) 
 let q = rand(12000,24000) 
 let r = rand(15000,27000) 
 let s = rand(17000,29000) 
 let t = rand(19000,31000)
 let kb = rand(9,35) 
 let lb = rand(38,57)
 let mb = rand(35,55) 
 let nb = rand(33,53) 
 let ob = rand(30,50) 
 let pb = rand(28,43) 
 let qb = rand(26,39) 
 let rb = rand(23,35) 
 let sb = rand(20,32) 
 let tb = rand(15,27)
 
 if(user.gruzz == 1)
 if(user.benzin < 50) return message.send(`😅 У вас менее 50% топлива, съездите подзаправтесь.`) 
 if(user.vputi == true) return message.send(`😅 Вы уже везёте груз!`)
 if(user.cars == false) return message.send(`🚶 У вас нет машины!`)
 
     if(user.cars == 1 && user.smena == false){
 user.vputi = true
 
setTimeout(() => {
 user.vputi = false
 user.benzin -= (kb)
 user.balance += (a)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
    }, 30000);
      message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
       
 if(user.cars == 2 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (lb)
 user.balance += (b)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(` Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
       
 if(user.cars == 3 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (mb)
 user.balance += (c)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
      }
 
  if(user.cars == 4 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (nb)
 user.balance += (d)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
 
  if(user.cars == 5 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (ob)
 user.balance += (e)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
 
  if(user.cars == 6 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (pb)
 user.balance += (f)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
           }
 
  if(user.cars == 7 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (qb)
 user.balance += (g)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
 
  if(user.cars == 8 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (rb)
 user.balance += (h)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
 
  if(user.cars == 9 && user.smena == false){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (sb)
 user.balance += (i)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
           }
 
  if(user.cars == 10 && user.smena == false){
 user.vputi = true
setTimeout(() => {
 user.vputi = false
 user.benzin -= (tb)
 user.balance += (j)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
          }
     if(user.cars == 1 && user.smena == true){
 user.vputi = true
 
setTimeout(() => {
 user.vputi = false
 user.benzin -= (kb)
 user.balance += (k)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
    }, 30000);
      message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
       
 if(user.cars == 2 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (lb)
 user.balance += (l)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
       
 if(user.cars == 3 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (mb)
 user.balance += (m) 
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
      }
 
  if(user.cars == 4 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (nb)
 user.balance += (n)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
 
  if(user.cars == 5 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (ob)
 user.balance += (o)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
 
  if(user.cars == 6 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (pb)
 user.balance += (p)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
           }
 
  if(user.cars == 7 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (qb)
 user.balance += (q)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
 
  if(user.cars == 8 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (rb)
 user.balance += (s)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
       }
 
  if(user.cars == 9 && user.smena == true){
 user.vputi = true

setTimeout(() => {
 user.vputi = false
 user.benzin -= (sb)
 user.balance += (s)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)
           }
 
  if(user.cars == 10 && user.smena == true){
 user.vputi = true
 setTimeout(() => {
 user.vputi = false
 user.benzin -= (tb)
 user.balance += (t)
 user.gruz += 1;
 message.send(`🚚 @id${user.id}(${user.prefix}), вы приехали к место назначению, потратив ${tb}% топлива, но зато вы заработали ${t} рублей!`, {attachment: `photo-189477366_457239024` })
 
    }, 30000);  
    message.send(`💰 Вы забрали груз и направились по своему маршруту - подождите ровно 30 секунд.`)     
  } 

       });

	vk.updates.setHearFallbackHandler(message => {
		var user = acc.users[user_id(message.user)];
		if(!message.isChat) {
		if(user.danet == false)
			return message.reply(`Такой команды не существует, отправь «меню» что бы узнать мои команды.`)
		}
	});
	

   console.info('Проверка команды "Продолжить"');
   vk.updates.hear(/^(?:продолжить|🎮 Продолжить)/i,  message => {
    let user = acc.users[user_id(message.user)];
    if(!message.isChat) {
	if(user.taksi == 1) return message.send(`Вы уже делали, это действие!`);
    if(user.danet == false) return message.send(`Вы уже делали, это действие!`);
	if(user.danet == true) 
	return message.send(`🚖 Спасибо что решил продолжить регистрацию в нашем боте, теперь тебе нужно выбрать в каком такси ты будешь работать. (Пассажирское/Грузовое)`, { keyboard: Keyboard.keyboard([ 
        [
        Keyboard.textButton({ 
        label: '🚗 Пассажирское',
        payload: { 
        command: 'о мне' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}), 
        Keyboard.textButton({ 
        label: '🚚 Грузовое', 
        payload: { 
        command: 'о мне' 
        }, 
        color: Keyboard.NEGATIVE_COLOR 
        })
        ]
        ]) 
        });
		}	
		});
	
   console.info('Проверка команды "Пассажирское"');
   vk.updates.hear(/^(?:🚗 Пассажирское)/i,  message => {
    let user = acc.users[user_id(message.user)];
	if(user.taksi == 1) return message.send(`Вы и так в пассажирском такси!`);
    if(user.danet == false) return message.send(`Вы уже делали, это действие!`);
	user.taksi = 1;
	if(user.danet == true) {
	user.danet = false;
	return message.send(`🚖 Ваша карьера таксиста началась, вам подарили старенький Volkswagen Polo - класса "B", который стоит в сумме 351 910 рублей, а в кармане всего 500р, также вас успешно приняли в главный Московский таксопарк.`, { keyboard: Keyboard.keyboard([ 
        [
		Keyboard.textButton({ 
        label: '🍀 Смена', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}) 
        ], 
        [
        Keyboard.textButton({ 
        label: '⛽ Топливо', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '👤 Профиль', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '🚙 Машины', 
        payload: { 
        command: '@taxibt 🚙 Машины' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '🔎 О таксопарке', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.PRIMARY_COLOR 
}) 
] 
])}); 
}
});

  vk.updates.hear(/^(?:🚚 Грузовое)/i,  message => {
    let user = acc.users[user_id(message.user)];
    if(user.gruzz == 1) return message.send(`Вы и так в пассажирском такси!`);
    if(user.danet == false) return message.send(`Вы уже делали, это действие!`);
    user.gruzz = 1;
    if(user.danet == true) {
    user.danet = false;
    return message.send(`🚖 Ваша карьера таксиста началась, вам подарили старенький Volkswagen Polo - класса "B", который стоит в сумме 351 910 рублей, а в кармане всего 500р, также вас успешно приняли в главный Московский таксопарк.`, { keyboard: Keyboard.keyboard([ 
        [
        Keyboard.textButton({ 
        label: '🚍 Смена', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }) 
        ], 
        [
        Keyboard.textButton({ 
        label: '⛽ Топливо', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '👦 Профиль', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '🚙 Машины', 
        payload: { 
        command: '@taxibt 🚙 Машины' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '🔎 О таксопарке', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.PRIMARY_COLOR 
}) 
] 
])}); 
}
});
		
	console.info('Проверка системы машин...');
	vk.updates.hear(/^(?:🚙 Машины|Машина)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)];
	if(user.danet == true) return
		if(!message.$match[1]){
			return message.send(`
			Класс "B":
			1. Kia Rio - 470 540 Р
			Класс "С"
			2. Volkswagen Golf - 541 000 Р
			3. Lada Largus - 630 000 Р
			Класс "D":
			4. Hyundai Solaris - 740 000 Р
			5. Volkswagen Passat - 861 000 Р
			Класс "E":
			6. Hyundai Genesis - 1.080.000
			7. Skoda Octavia - 1.300.000
			
            Чтобы купить одну из машин напишите "Машина [номер]", а для продажи "Машина продать" (Вернёться лишь 75%).
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3,4,5,6,7,8,]
 	let count = [0,470540,541000,630000,740000,861000,1008000,1300000];
 	let names = [0, 'Kia Rio','Volkswagen Golf','Lada Largus','Hyundai Solaris','Volkswagen Passat','Hyundai Genesis','Skoda Octavia']
	let run = [0,'B','C','C','D','D','E','E']
 	if(i < 0 || i > 10) return;
 	if(i > 0 && i <= 10){
 		if(user.balance < count[i]) return message.send(`🛥 У вас не достаточно денег ;(`);
 		user.balance -= count[i]; 
 		user.cars += ids[i]; 
		user.cl = run[i];
		user.цена = count[i]; 
 		return message.send(`🚘 Вы купили машину (${names[i]}) (${run[i]}) за ${count[i]} игровой валюты.`)
 	} 
 }); 
 
    vk.updates.hear(/^(?:Машина продать)\s?/i, (message) => {
    let user = acc.users[user_id(message.user)];
    let count = [0,470540,541000,630000,740000,861000,1008000,1300000];
    let names = [0, 'Kia Rio','Volkswagen Golf','Lada Largus','Hyundai Solaris','Volkswagen Passat','Hyundai Genesis','Skoda Octavia']
    if(user.cars == false) return message.send(`🚘 ➾ У вас нет машины`)
    let sum = count[user.cars] / 100 * 75;
    user.balance += sum;
    user.cars = false;
    user.benzin = 100;
    return message.send(`🚘 ➾ Вы продали свой автомобиль за ${sum}$`)
    });


    console.info('Проверка команды "Вернуться назад"');	   
	vk.updates.hear(/^(?:вернуться назад|меню)/i,  (message) => {
		let user = acc.users[user_id(message.user)]; 
	    return message.send(`МЕНЮ:`, { keyboard: Keyboard.keyboard([ 
        [
		Keyboard.textButton({ 
        label: '🚖 Работать', 
        payload: { 
        command: 'buy a smena' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }), 
		Keyboard.textButton({ 
        label: '🍀 Смена', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}) 
        ], 
        [
        Keyboard.textButton({ 
        label: '⛽ Топливо', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '👤 О мне', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '🚙 Машины', 
        payload: { 
        command: '🚙 Машины' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
		}) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '🔎 О таксопарке', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.PRIMARY_COLOR 
}) 
] 
])}); 
});

    console.info('Проверка команды "Назад"');    
    vk.updates.hear(/^(?:назад|меню)/i,  (message) => {
        let user = acc.users[user_id(message.user)]; 
        return message.send(`МЕНЮ:`, { keyboard: Keyboard.keyboard([ 
        [
        Keyboard.textButton({ 
        label: '🚚 Работать', 
        payload: { 
        command: 'buy a smena' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }), 
        Keyboard.textButton({ 
        label: '🍀 Смена', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }) 
        ], 
        [
        Keyboard.textButton({ 
        label: '⛽ Топливо', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '👤 Профиль', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '🚙 Машины', 
        payload: { 
        command: '🚙 Машины' 
        }, 
        color: Keyboard.POSITIVE_COLOR 
        }) 
        ], 
        [ 
        Keyboard.textButton({ 
        label: '🔎 О таксопарке', 
        payload: { 
        command: 'fuck go back' 
        }, 
        color: Keyboard.PRIMARY_COLOR 
}) 
] 
])}); 
});


vk.updates.hear(/^(?:givedollar)\s?([0-9]+)?\s?([0-9]+)?/i,  message => {
	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let i = config;
	if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2] || message.$match[2] < 0) return message.send(`💰 ➾ Пример: 'givedollar [ID] [COUNT]'`); 
	acc.users[message.$match[1]].balance += Number(message.$match[2]);

	return message.send(`💰 ➾ Вы выдали [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] ${spaces(message.$match[2])} доната`);


});


vk.updates.hear(/^(?:setmoney)\s?([0-9]+)?/i, message => {
    if(user.level < 3) return message.send(`🔸 ➾ Вы не администратор`);
    if(user.level > 3){
        if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 999999999999999999999999999999999999999999999999999999999) return message.send(`💰 ➾ Пример: 'setmoney [1-999999999999999999999999999999999999999999999999999999999]'`);
        user.balance += Number(message.$match[1]);
}
    return message.send(`💰 ➾ Вы выдали себе ${spaces(message.$match[1])}$`);
});


vk.updates.hear(/^(?:топ активных|топ актив)/i,  (message) => {
	let text = ``;
	var tops = []
	for (i=1;i<200000;i++) {
		if(acc.users[i]){
			tops.push({
				id: i,
				idvk: acc.users[i].id,
				lvl: acc.users[i].msg.messages
			})

		} 

	}
	tops.sort(function(a, b) {
		if (b.lvl > a.lvl) return 1
			if (b.lvl < a.lvl) return -1
				return 0
		})
	var yo = []

	for (var g = 0; g < 10; g++) {
		if (tops.length > g) {
			let ups = g;
			ups += 1;
			if(g <= 8) ups = `${ups}&#8419;`
			if(g == 9) ups = `&#128287;`
			yo.push({
				id: tops[g].id,
				idvk: tops[g].idvk,
				lvl: tops[g].lvl,
				smile: `${ups}`
			})
		}
	}
	var people = "🎸 Топ активных:\n" + yo.map(a => a.smile + ". [id" + a.idvk + "|" + acc.users[a.id].prefix + "] - " + spaces(a.lvl) + " Сообщений.").join("\n")
	text += `${people}\n\n`; 
	message.send(text);
});

	    vk.updates.hear(/^(?:⛽ Топливо)/i,  message => {
 	let user = acc.users[user_id(message.user)];
	if(user.danet ==  true) return
 	if(user.benzin == 100) return message.send(`🕺 У вас и так полный бак`);
	user.benzin = 500;
 	user.benzin = 100;
    return message.send(`👑 Вы успешно пополнили свой бензобак до краёв, за 500 рублей.`, {attachment: `photo-189477366_457239022` })
 });  

	  vk.updates.hear(/^(?:🔎 О таксопарке)/i,  message => {
 	let user = acc.users[user_id(message.user)];
	if(user.danet == true) return
 	return message.send(`🏢 Главный Московский таксопарк - это придуманный, игровой таксопарк, куда герой попадает сразу после выбора работы в пассажирском такси.`, {attachment: `photo-189477366_457239023` })
 });
 
vk.updates.hear(/^(?:🍀 Смена)/i, message => { 
let user = acc.users[user_id(message.user)];  
if(user.danet == true) return
return message.send(`🏢 Покупая смену у вас не будет вычитаться 25% с заказов, смена действует ровно час - смена стоит 500р.`, { keyboard: Keyboard.keyboard([ 
[ 
Keyboard.textButton({ 
label: '🤑 Купить смену', 
payload: { 
command: 'buy a smena' 
}, 
color: Keyboard.POSITIVE_COLOR 
}) 
], 
[ 
Keyboard.textButton({ 
label: 'Вернуться назад', 
payload: { 
command: 'fuck go back' 
}, 
color: Keyboard.PRIMARY_COLOR 
}) 
] 
])}); 
});

vk.updates.hear(/^(?:🚍 Смена)/i, message => { 
let user = acc.users[user_id(message.user)];  
if(user.danet == true) return
return message.send(`🏢 Покупая смену у вас не будет вычитаться 25% с заказов, смена действует ровно час - смена стоит 500р.`, { keyboard: Keyboard.keyboard([ 
[ 
Keyboard.textButton({ 
label: '🤑 Купить смену', 
payload: { 
command: 'buy a smena' 
}, 
color: Keyboard.POSITIVE_COLOR 
}) 
], 
[ 
Keyboard.textButton({ 
label: 'Назад', 
payload: { 
command: 'fuck go back' 
}, 
color: Keyboard.PRIMARY_COLOR 
}) 
] 
])}); 
});
		
    vk.updates.hear(/^(?:🤑 Купить смену)/i,  message => {
 	let user = acc.users[user_id(message.user)];
	if(user.danet == true) return
 	if(user.smena == true) return message.send(`🕺 У вас и так купленна смена!`);
 	user.smena = true;
	user.balance -= 500;
		
	setTimeout(() => {
    user.smena = false
    message.send(`🚙 @id${user.id}(${user.prefix}), у купленной смены закончился срок продления!`)
	}, 300000);
      message.send(`💰 Вы купили смену на 1 час`)
	  });


	  
	   vk.updates.hear(/^(?:👤 Профиль|👤 О мне)$/i,  (message) => { 
		let user = acc.users[user_id(message.user)];
		let cars = [0, 'Volkswagen Polo','Opel Corsa','Lada granta','Lada Largus','Hyundai Solaris','Volkswagen Passat','Hyundai Genesis','Skoda Octavia']
		if(user.balance == null) return message.send(`⚠ Произошла ошибка #13! \n\n братитесь в репорт, чтобы устранить данную ошибку.`); 
		return message.send(`[id${user.id}|${user.prefix}], ваша игровая статистика :  
        🤑 В кошельке: ${spaces(user.balance)} рублей.
        ⛽ В бензобаке: ${spaces(user.benzin)}%
		
        🚕 Автомобиль: ${cars[user.cars]} (${(user.cl)}) (${(user.цена)} рублей)
        🚖 Такси: ${user.taksi.toString().replace(/1/gi, "Пассажирское")}
        ✅  Принял заказов: ${spaces(user.zakaz)} `);
	});		

       vk.updates.hear(/^(?:👦 Профиль|о mне)$/i,  (message) => { 
        let user = acc.users[user_id(message.user)];
        let cars = [0, 'Volkswagen Polo','Opel Corsa','Lada granta','Lada Largus','Hyundai Solaris','Volkswagen Passat','Hyundai Genesis','Skoda Octavia']
        if(user.balance == null) return message.send(`⚠ Произошла ошибка #13! \n\n братитесь в репорт, чтобы устранить данную ошибку.`); 
        return message.send(`[id${user.id}|${user.prefix}], ваша игровая статистика :  
        🤑 В кошельке: ${spaces(user.balance)} рублей.
        ⛽ В бензобаке: ${spaces(user.benzin)}%
        
        🚚 Автомобиль: ${cars[user.cars]} (${(user.cl)}) (${(user.цена)} рублей)
        🚖 Такси: ${user.gruzz.toString().replace(/1/gi, "Грузовое")} 
        ✅  Доставлено грузов: ${spaces(user.gruz)} `);
    });         

 	vk.updates.hear(/^(?:warn)\s?([0-9]+)?\s([^]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
	    if(user.danet == false) return
		if(!message.$match[1] || !message.$match[2]) return message.send(`🔸 Пример команды: "warn [ид] [причина]".`);
		if(!Number(message.$match[1])) return message.send(`🔸 Число должно быть цифрового вида.`);
		if(user.level < 2) return message.send(`🔸 Вы не разработчик.`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ Такого игрока нет!`);

		acc.users[message.$match[1]].warn += 1;
		acc.users[message.$match[1]].warn_p.push(message.$match[2]);

		let text = `✅ ${user.prefix} выдал вам предупреждение, если будет 3 предупреждения, то вы будете забанены.`
		if(acc.users[message.$match[1]].warn == 3){
			acc.users[message.$match[1]].warn = 0;
			acc.users[message.$match[1]].ban = true;
			acc.users[message.$match[1]].warn_p = []
			text += `\n🔸 У вас 3 предупреждения.\n🔸 Ваш аккаунт заблокирован.`
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: text
		});
		user.ainfo.warns += 1;
		return message.send(`✅ Вы выдали предупреждение игроку [${acc.users[message.$match[1]].prefix}].`);
	}); 

	vk.updates.hear(/^(?:unwarn)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
	    if(user.danet == false) return
		if(!message.$match[1]) return message.send(`🔸 Пример команды: unwarn ID`);
		if(!Number(message.$match[1])) return message.send(`🔸 Число должно быть цифрового вида.`);
		if(user.level < 4) return message.send(`🔸 Вы не разработчик.`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ Такого игрока нет!`);
		acc.users[message.$match[1]].warn = 0; 
		acc.users[message.$match[1]].warn_p = []

		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ Администратор снял вам все предупреждения.`
		});
		return message.send(`✅ Вы сняли все предупреждения игроку [${acc.users[message.$match[1]].prefix}].`);
	}); 


   vk.updates.hear(/^(?:unban)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
	if(user.danet == false) return
		if(!message.$match[1]) return message.send(`🔸 Пример команды: unban ID`);
		if(!Number(message.$match[1])) return message.send(`🔸 Число должно быть цифрового вида.`);
		if(user.balance < 2019) return message.send(`🔸 Вы не администратор`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ Такого игрока нет!`);
		acc.users[message.$match[1]].ban = false 
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ${user.prefix} разблокировал Вас.`
		});

		return message.send(`✅ Вы разблокировали игрока [${acc.users[message.$match[1]].prefix}]`);
	    }); 
	vk.updates.hear(/^(?:ник)\s?([^]+)?/i,  (message) => { 
	let user = acc.users[user_id(message.user)]; 
	let zaprets1 = message.$match[1].toLowerCase();
	var zapret = /(синий кит|кит|синий|ебал|&#4448;|вк бо т |вкботру|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|порно|botvk|ботвк|vkbot|кбот|bot vk|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь|блядь|долбаеб|детское порно|сова не спит|сова некогда не спит)/
	if (zapret.test(zaprets1) == true) {
	if(user.danet == false) return		
			return message.send(`📗 Придумайте адекватный ник!`);
	}
	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(zaprets1)
	var lol1 = filter1.test(zaprets1)	
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) { 
		return message.send(`📗 Придумайте адекватный ник!`);
	}
	if(message.$match[1].length > 15) return message.send(`📗 Максимальная длина ника 15 символов.`);
	user.prefix = message.$match[1];
	return message.send(`📗 Вы сменили свой ник на: ${message.$match[1]}`);
    });

	vk.updates.hear(/^(?:ban)\s?([0-9]+)?\s([^]+)?/i, (message) => {  
		let user = acc.users[user_id(message.user)];
	    if(user.danet == false) return
		if(user.balance < 2019) return message.send(`🔸 Вы не администратор`);;
		if(acc.users[user_id(message.user)].balance > acc.users[1].balance) return
        if(acc.users[user_id(message.user)].balance < acc.users[1].balance) return
		acc.users[message.$match[1]].ban = true; 
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ${user.prefix} заблокировал вас навсегда.\n✅ Причина: ${message.$match[2]}.\n\n- Если вы считаете что это неправильный бан, то пишите сюда - vk.com/topic-179428777_43423857\n- Если вы считаете, что это правильный бан, то разбан стоит 49р.`
		});
		return message.send(`✅ Вы заблокировали игрока [${acc.users[message.$match[1]].prefix}] навсегда.\n✅ Причина: ${message.$match[2]}`);
	}); 

 
 vk.updates.hear(/^(?:eval)\s?([^]+)?/i, (message) => { 
	let args = message.$match; 
	if(message.user != 296858826) return;
	return message.send(`${eval(args[1])}`);
});



async function run() {
    await vk.updates.startPolling();
    console.log('> Бот запущен!');
}

run().catch(console.error);

 

function rand(min, max) {return Math.round(Math.random() * (max - min)) + min} 
var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));
function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {  
	return this[Math.floor(this.length * Math.random())];
}
 	function user_id(id) {
	 	let ids = 0
	 	if(uid[id]){
	 		ids = uid[id].id
	 	}    
		return ids; 
	}  

	setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);

 
 
 	 function time() {
			let date = new Date();
			let days = date.getDate();
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();
			if (hours < 10) hours = "0" + hours;
			if (minutes < 10) minutes = "0" + minutes;
			if (seconds < 10) seconds = "0" + seconds;
			var times = hours + ':' + minutes + ':' + seconds
			return times;
	}
	
   	 setInterval(() =>{
 		for(i=0;i<100000;i++){
 			if(acc.users[i]){
 			 		acc.users[i].balance += 1000;
					if(acc.users[i].uved == true) return;
                
							vk.api.call('messages.send', {
							user_id: acc.users[i].id,
							message: `Вам был начислен ежедневный (24-ёх часовой) бонус, в размере 1000р.`
						});
 			 		}
 			 	}
 	}, 86400000);  
	

setInterval(function(){
	fs.writeFileSync("./base/acc.json", JSON.stringify(acc, null, "\t")) 
	fs.writeFileSync("./base/uid.json", JSON.stringify(uid, null, "\t"))  
}, 3500);

var uptime = { sec: 0, min: 0, hours: 0, days: 0 };
